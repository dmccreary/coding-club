#!/usr/bin/env python3
"""Render docs/sims/<sim-id>/metadata.json from the same prose file the lesson
page uses, plus the archived specification.

Almost every metadata field is already stated somewhere else: the title and
description in scripts/sim-pages/<sim-id>.json, the chapter and Bloom verb in
docs/sims/TODO/<sim-id>.json, the canvas height in the prose file's iframe
height. Deriving them here rather than retyping them keeps the three files from
disagreeing, which is the failure the book's validator otherwise catches late.

Optional keys the prose file may add, all metadata-only:
    concepts    list[str]   educational.concepts
    objective   str         pedagogical.learningObjective (else the spec's)
    verb        str         pedagogical.bloomVerb (else the spec's)
    interaction str         pedagogical.interactionPattern
    assessment  str         pedagogical.assessment
    audience    str         educational.audience
    duration    str         educational.duration

Anything the copier recorded under _reused_from is preserved.

Usage:
    python3 scripts/build-sim-metadata.py                 # all sims with prose
    python3 scripts/build-sim-metadata.py <sim-id> ...    # just these
"""

import json
import os
import sys
from collections import OrderedDict

PROJECT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SIMS = os.path.join(PROJECT, "docs/sims")
TODO_DIR = os.path.join(SIMS, "TODO")
PAGES_DIR = os.path.join(PROJECT, "scripts/sim-pages")

DEFAULT_AUDIENCE = "Coding club students and mentors"
DEFAULT_DURATION = "10-15 minutes"


def build(sim_id):
    page_path = os.path.join(PAGES_DIR, sim_id + ".json")
    if not os.path.isfile(page_path):
        return False, "no prose file"
    page = json.load(open(page_path, encoding="utf-8"))

    todo_path = os.path.join(TODO_DIR, sim_id + ".json")
    todo = json.load(open(todo_path, encoding="utf-8")) if os.path.isfile(todo_path) else {}

    out_path = os.path.join(SIMS, sim_id, "metadata.json")
    existing = OrderedDict()
    if os.path.isfile(out_path):
        existing = json.load(open(out_path, encoding="utf-8"), object_pairs_hook=OrderedDict)

    bloom = page.get("bloom") or todo.get("bloom_level") or "Understand (L2)"
    verb = page.get("verb") or todo.get("bloom_verb") or ""
    objective = page.get("objective") or todo.get("learning_objective") or page["description"]
    chapter_dir = page.get("chapter_dir") or todo.get("chapter_dir") or ""

    meta = OrderedDict([
        ("title", page["title"]),
        ("description", page["description"]),
        ("creator", "Coding Club"),
        ("author", "Dan McCreary"),
        ("date", "2026-09-01"),
        ("subject", ["Coding Club"]),
        ("type", "Interactive Simulation"),
        ("format", "text/html"),
        ("language", "en"),
        ("rights", "CC BY-NC-SA 4.0"),
        ("identifier", sim_id),
        ("library", page.get("library") or todo.get("library") or "p5.js"),
        ("bloomLevel", bloom),
        ("bloomVerb", verb),
        ("completion_status", "built"),
        # the iframe height carries the 2px border; CANVAS_HEIGHT is the content
        ("canvasHeight", int(page["height"]) - 2),
        ("chapter_number", todo.get("chapter_number")),
        ("chapter_title", page.get("chapter_title") or todo.get("chapter_title")),
        ("chapter_dir", chapter_dir),
        ("chapter_rel_dir", f"chapters/{chapter_dir}" if chapter_dir else ""),
        ("educational", OrderedDict([
            ("gradeLevel", "Middle School, High School, Adult"),
            ("audience", page.get("audience", DEFAULT_AUDIENCE)),
            ("duration", page.get("duration", DEFAULT_DURATION)),
            ("concepts", page.get("concepts", [])),
        ])),
        ("pedagogical", OrderedDict([
            ("bloomLevel", bloom),
            ("bloomVerb", verb),
            ("learningObjective", objective),
            ("interactionPattern", page.get("interaction", "")),
            ("assessment", page.get("assessment", "")),
        ])),
    ])

    if "_reused_from" in existing:
        meta["_reused_from"] = existing["_reused_from"]

    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(meta, f, indent=2, ensure_ascii=False)
        f.write("\n")
    return True, out_path


def main():
    targets = sys.argv[1:] or sorted(
        n[:-5] for n in os.listdir(PAGES_DIR) if n.endswith(".json")
    )
    ok = skipped = 0
    for sim_id in targets:
        good, msg = build(sim_id)
        if good:
            ok += 1
        else:
            skipped += 1
            print(f"skip {sim_id}: {msg}")
    print(f"{ok} metadata files written, {skipped} skipped")


if __name__ == "__main__":
    main()
