#!/usr/bin/env python3
"""Copy a MicroSim implementation from a sibling repo into this book.

Many of this book's specs name a source sim in another of the author's repos --
either `**Status:** Reused` (take it as-is) or a `**Template:**` link (take the
implementation and re-point its content). This script does the mechanical half:
copy the code, rename files to this book's sim-id, fix the internal references,
and record where it came from.

It deliberately does NOT write index.md. Lesson-page prose is per-sim work and
lives in scripts/sim-pages/<sim-id>.json, rendered by build-sim-pages.py.

Provenance matters: every copied sim gets `_reused_from` in its metadata.json so
a reader of the repo can tell original work from adapted work, and the source is
credited in the lesson page's References section.

Usage:
    python3 scripts/reuse-microsim.py <target-sim-id> <repo>/<source-sim> [--force]
    python3 scripts/reuse-microsim.py --list        # show declared sources
"""

import argparse
import json
import os
import re
import shutil
import sys
from collections import OrderedDict

WS = os.path.expanduser("~/Documents/ws")
PROJECT = os.path.join(WS, "coding-club")
SIMS = os.path.join(PROJECT, "docs/sims")
TODO_DIR = os.path.join(SIMS, "TODO")


def declared_sources():
    """(sim_id, status, repo, source_sim) for every spec that names a source."""
    out = []
    for name in sorted(os.listdir(TODO_DIR)):
        if not name.endswith(".json"):
            continue
        spec = json.load(open(os.path.join(TODO_DIR, name), encoding="utf-8"))
        text = spec.get("specification", "")
        status = (re.search(r"\*\*Status:\*\*\s*([A-Za-z]+)", text) or [None, "?"])[1]
        m = re.search(r"\*\*(?:Source Repo|Template):\*\*\s*(\S+)", text)
        if not m:
            continue
        mm = re.search(
            r"github\.com/dmccreary/([^/]+)/tree/[^/]+/docs/sims/([^/\s]+)", m.group(1)
        )
        if mm:
            out.append((spec["sim_id"], status, mm.group(1), mm.group(2)))
    return out


def copy_sim(target_id, repo, source_sim, force=False):
    src_dir = os.path.join(WS, repo, "docs/sims", source_sim)
    if not os.path.isdir(src_dir):
        sys.exit(f"source not found: {src_dir}")

    dst_dir = os.path.join(SIMS, target_id)
    os.makedirs(dst_dir, exist_ok=True)

    js_name = f"{target_id}.js"
    copied = []

    for name in sorted(os.listdir(src_dir)):
        # index.md and metadata.json are this book's own; never inherit them.
        if name in ("index.md", "metadata.json"):
            continue
        if name.endswith(".png"):
            continue  # screenshots are recaptured after adaptation
        src = os.path.join(src_dir, name)
        if not os.path.isfile(src):
            continue

        # <source-sim>.js becomes <target-sim>.js; other assets keep their names
        out_name = js_name if name == f"{source_sim}.js" else name
        dst = os.path.join(dst_dir, out_name)
        if os.path.exists(dst) and not force:
            print(f"  skip (exists): {out_name}")
            continue

        with open(src, encoding="utf-8", errors="ignore") as f:
            body = f.read()
        # rewrite references to the old script/sim name inside html and js
        body = body.replace(f"{source_sim}.js", js_name)
        if out_name.endswith((".html", ".js", ".css")):
            body = body.replace(f"/sims/{source_sim}/", f"/sims/{target_id}/")
        with open(dst, "w", encoding="utf-8") as f:
            f.write(body)
        copied.append(out_name)

    if not copied:
        print("  nothing copied")
        return

    # record provenance on the target's metadata, creating it if the scaffold
    # never made one
    meta_path = os.path.join(dst_dir, "metadata.json")
    meta = OrderedDict()
    if os.path.isfile(meta_path):
        meta = json.load(open(meta_path, encoding="utf-8"), object_pairs_hook=OrderedDict)
    meta["_reused_from"] = {
        "repo": repo,
        "sim": source_sim,
        "url": f"https://dmccreary.github.io/{repo}/sims/{source_sim}/",
        "github": f"https://github.com/dmccreary/{repo}/tree/main/docs/sims/{source_sim}",
    }
    with open(meta_path, "w", encoding="utf-8") as f:
        json.dump(meta, f, indent=2)
        f.write("\n")

    print(f"  copied {len(copied)}: {', '.join(copied)}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("target", nargs="?")
    ap.add_argument("source", nargs="?", help="<repo>/<sim>")
    ap.add_argument("--list", action="store_true")
    ap.add_argument("--force", action="store_true")
    args = ap.parse_args()

    if args.list:
        for sim_id, status, repo, source_sim in declared_sources():
            exists = os.path.isdir(os.path.join(WS, repo, "docs/sims", source_sim))
            print(f"{'ok  ' if exists else 'MISS'} {status:10s} {sim_id:44s} <- {repo}/{source_sim}")
        return

    if not args.target or not args.source:
        ap.error("give a target sim-id and a <repo>/<sim> source, or use --list")

    repo, _, source_sim = args.source.partition("/")
    print(f"{args.target} <- {repo}/{source_sim}")
    copy_sim(args.target, repo, source_sim, force=args.force)


if __name__ == "__main__":
    main()
