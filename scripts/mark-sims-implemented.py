#!/usr/bin/env python3
"""Mark sims implemented in the spec archive and refresh docs/sims/TODO.md.

The counts in TODO.md are maintained here rather than by
create-microsim-todo-json-files.py, whose "implemented" test is "has a
main.html" -- true of every scaffolded directory in this repo and therefore
useless once scaffolding is done.

Usage:  python3 scripts/mark-sims-implemented.py <sim-id> ...
"""
import json, os, re, sys
from collections import OrderedDict

PROJECT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TODO_DIR = os.path.join(PROJECT, "docs/sims/TODO")
TODO_MD = os.path.join(PROJECT, "docs/sims/TODO.md")
DATE = "2026-09-01"


def main():
    for sim in sys.argv[1:]:
        p = os.path.join(TODO_DIR, sim + ".json")
        d = json.load(open(p, encoding="utf-8"), object_pairs_hook=OrderedDict)
        d["completion_status"] = "implemented"
        d["implemented_date"] = DATE
        with open(p, "w", encoding="utf-8") as f:
            json.dump(d, f, indent=2)
            f.write("\n")

    total = done = 0
    for name in os.listdir(TODO_DIR):
        if not name.endswith(".json"):
            continue
        total += 1
        if json.load(open(os.path.join(TODO_DIR, name), encoding="utf-8")).get(
            "completion_status") == "implemented":
            done += 1
    # graph-viewer was already implemented before this queue existed
    done += 1
    total += 1

    s = open(TODO_MD, encoding="utf-8").read()
    s = re.sub(r"- Already implemented: \d+", f"- Already implemented: {done}", s)
    s = re.sub(r"- \*\*Unimplemented \(TODO\): \d+\*\*",
               f"- **Unimplemented (TODO): {total - done}**", s)
    for sim in sys.argv[1:]:
        s = re.sub(r"\| \[`" + re.escape(sim) + r"`\]\(TODO/" + re.escape(sim) + r"\.json\) \|",
                   f"| :white_check_mark: [`{sim}`]({sim}/index.md) |", s)
    open(TODO_MD, "w", encoding="utf-8").write(s)
    print(f"tracker: {done} built, {total - done} to go")


if __name__ == "__main__":
    main()
