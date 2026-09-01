#!/usr/bin/env python3
"""Verify every chapter and sibling-sim link in a generated lesson page resolves.

mkdocs --strict does not flag a dead relative link that sits inside a fenced
code block or a markdown link in body prose, so two hand-typed chapter
directory names shipped before this check existed. Run it after
build-sim-pages.py in every batch.

Exit status is non-zero if anything is dead, so it can gate a commit.
"""
import os
import re
import sys

PROJECT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SIMS = os.path.join(PROJECT, "docs/sims")
CHAPTERS = os.path.join(PROJECT, "docs/chapters")

bad = []
for sim in sorted(os.listdir(SIMS)):
    page = os.path.join(SIMS, sim, "index.md")
    if not os.path.isfile(page):
        continue
    body = open(page, encoding="utf-8").read()
    for m in re.finditer(r"\.\./\.\./chapters/([a-z0-9-]+)/index\.md", body):
        if not os.path.isfile(os.path.join(CHAPTERS, m.group(1), "index.md")):
            bad.append(f"{sim}: chapter '{m.group(1)}' does not exist")
    for m in re.finditer(r"\]\(\.\./([a-z0-9-]+)/index\.md\)", body):
        if not os.path.isfile(os.path.join(SIMS, m.group(1), "index.md")):
            bad.append(f"{sim}: sibling sim '{m.group(1)}' has no index.md")

if bad:
    print(f"{len(bad)} dead link(s):")
    for b in bad:
        print("  " + b)
    sys.exit(1)
print("all chapter and sibling-sim links resolve")
