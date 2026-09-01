#!/usr/bin/env python3
"""Match this book's unimplemented MicroSim specs against the shared catalog.

The catalog at search-microsims lists ~3,700 sims across the author's other
books, but its `completion_status` field cannot be trusted (2,495 records have
none, and "scaffold" entries are stubs). So a candidate only counts as reusable
when the sim directory actually exists in a local sibling repo AND carries a
substantive .js file -- that is the real test of "there is something to copy".

Scoring is deliberately conservative: title/description token overlap weighted
toward the title, with a bonus when the rendering library matches. It surfaces
candidates for a human (or agent) to judge; it does not auto-copy anything.

Usage:
    python3 scripts/find-reuse-candidates.py [--min-score 0.30] [--json OUT]
"""

import argparse
import json
import os
import re
from collections import Counter

WS = os.path.expanduser("~/Documents/ws")
CATALOG = os.path.join(WS, "search-microsims/docs/search/microsims-data.json")
PROJECT = os.path.join(WS, "coding-club")
TODO_DIR = os.path.join(PROJECT, "docs/sims/TODO")

# A .js this short is a stub, not an implementation worth copying.
MIN_JS_LINES = 60

STOP = set("""a an the and or of for to in on with by as is are be that this these those
it its from at into over under how what why when where which who whom your you we our us
using use used vs versus per each any all one two three more most less least new old
sim microsim diagram interactive explorer viewer map chart graph model builder tool
""".split())


def tokens(text):
    if not text:
        return set()
    words = re.findall(r"[a-z][a-z0-9]+", str(text).lower())
    return {w for w in words if w not in STOP and len(w) > 2}


def normalise_lib(lib):
    if not lib:
        return ""
    lib = str(lib).strip().lower()
    lib = lib.replace(".js", "").replace("-", "").replace(" ", "")
    if lib.startswith("mermaid"):
        return "mermaid"
    if lib.startswith("p5"):
        return "p5"
    if lib.startswith("visnetwork"):
        return "visnetwork"
    if lib.startswith("vistimeline"):
        return "vistimeline"
    if lib.startswith("chart"):
        return "chartjs"
    if lib.startswith("plotly"):
        return "plotly"
    if lib.startswith("leaflet"):
        return "leaflet"
    return lib


def local_implementation(record):
    """Return (path, js_lines) if this catalog entry has real code on disk."""
    src = record.get("_source") or {}
    repo, sim = src.get("repo"), src.get("sim")
    if not repo or not sim:
        return None
    sim_dir = os.path.join(WS, repo, "docs/sims", sim)
    if not os.path.isdir(sim_dir):
        return None
    best = 0
    for name in os.listdir(sim_dir):
        if not name.endswith(".js"):
            continue
        try:
            with open(os.path.join(sim_dir, name), encoding="utf-8", errors="ignore") as f:
                best = max(best, sum(1 for _ in f))
        except OSError:
            continue
    # Mermaid and custom-HTML sims can legitimately ship no .js; accept those
    # when main.html itself is substantial.
    if best < MIN_JS_LINES:
        html = os.path.join(sim_dir, "main.html")
        if os.path.isfile(html):
            with open(html, encoding="utf-8", errors="ignore") as f:
                body = f.read()
            if "microsim-scaffold-stub" not in body and len(body) > 4000:
                return (sim_dir, 0)
        return None
    return (sim_dir, best)


def score(spec_tok, spec_title_tok, spec_lib, cand):
    """Weighted token overlap, title counted double, small library bonus."""
    ct = tokens(cand.get("title"))
    cd = tokens(cand.get("description"))
    if not ct and not cd:
        return 0.0
    title_hits = len(spec_title_tok & ct)
    body_hits = len(spec_tok & (ct | cd))
    denom = len(spec_title_tok) * 2 + len(spec_tok)
    if denom == 0:
        return 0.0
    s = (title_hits * 2 + body_hits) / denom
    if spec_lib and spec_lib == normalise_lib(cand.get("library") or cand.get("framework")):
        s += 0.08
    return round(min(s, 1.0), 3)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--min-score", type=float, default=0.30)
    ap.add_argument("--top", type=int, default=3)
    ap.add_argument("--json", help="write full results here")
    args = ap.parse_args()

    catalog = json.load(open(CATALOG, encoding="utf-8"))

    reusable = []
    for rec in catalog:
        hit = local_implementation(rec)
        if hit:
            rec["_local_dir"], rec["_js_lines"] = hit
            reusable.append(rec)
    print(f"catalog: {len(catalog)} records, {len(reusable)} with real code on disk\n")

    specs = []
    for name in sorted(os.listdir(TODO_DIR)):
        if not name.endswith(".json"):
            continue
        spec = json.load(open(os.path.join(TODO_DIR, name), encoding="utf-8"))
        if spec.get("completion_status") == "implemented":
            continue
        specs.append(spec)
    print(f"unimplemented specs in this book: {len(specs)}\n")

    results = []
    for spec in specs:
        st = tokens(spec.get("diagram_name"))
        sb = st | tokens(spec.get("learning_objective")) | tokens(spec.get("specification", "")[:600])
        lib = normalise_lib(spec.get("library"))
        ranked = sorted(
            ((score(sb, st, lib, c), c) for c in reusable),
            key=lambda x: -x[0],
        )[: args.top]
        results.append({
            "sim_id": spec["sim_id"],
            "diagram_name": spec.get("diagram_name"),
            "library": spec.get("library"),
            "candidates": [
                {
                    "score": s,
                    "title": c.get("title"),
                    "repo": (c.get("_source") or {}).get("repo"),
                    "sim": (c.get("_source") or {}).get("sim"),
                    "library": c.get("library") or c.get("framework"),
                    "js_lines": c["_js_lines"],
                    "dir": c["_local_dir"],
                }
                for s, c in ranked if s >= args.min_score
            ],
        })

    hits = [r for r in results if r["candidates"]]
    print(f"specs with a candidate at score >= {args.min_score}: {len(hits)} / {len(results)}\n")
    for r in sorted(hits, key=lambda r: -r["candidates"][0]["score"]):
        top = r["candidates"][0]
        print(f"{top['score']:.2f}  {r['sim_id']}")
        print(f"        -> {top['repo']}/{top['sim']}  ({top['library']}, {top['js_lines']} js lines)")

    if args.json:
        with open(args.json, "w", encoding="utf-8") as f:
            json.dump(results, f, indent=2)
        print(f"\nfull results: {args.json}")

    print("\nlibrary split of the remaining specs:",
          Counter(s.get("library") for s in specs).most_common())


if __name__ == "__main__":
    main()
