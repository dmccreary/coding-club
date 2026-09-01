#!/usr/bin/env python3
"""Render docs/sims/<sim-id>/index.md from per-sim prose plus the archived spec.

Each lesson page is assembled from two sources:

  scripts/sim-pages/<sim-id>.json   the prose a human/agent wrote for this sim
  docs/sims/TODO/<sim-id>.json      the specification, quoted verbatim

Keeping the spec quoted rather than retyped means the lesson page and the
chapter's stated requirements cannot silently drift apart. The rendered page
carries every section the book's MicroSim validator scores: frontmatter title,
description and social image, an iframe, a fullscreen link, About, How to Use,
Lesson Plan, a copy-paste embed snippet, and References.

Usage:
    python3 scripts/build-sim-pages.py                 # all sims with prose
    python3 scripts/build-sim-pages.py <sim-id> ...    # just these
"""

import json
import os
import sys

PROJECT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SIMS = os.path.join(PROJECT, "docs/sims")
TODO_DIR = os.path.join(SIMS, "TODO")
PAGES_DIR = os.path.join(PROJECT, "scripts/sim-pages")

TEMPLATE = """---
title: {title}
description: {description}
image: sims/{sim_id}/{sim_id}.png
status: built
library: {library}
bloom_level: {bloom}
---

# {title}

<iframe src="main.html" width="100%" height="{height}" scrolling="no"></iframe>

[Run the {title} MicroSim fullscreen](main.html){{ .md-button .md-button--primary }}

## About This MicroSim

{about}

## How to Use

{howto}

## Lesson Plan

{lesson}

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/{sim_id}/main.html" width="100%" height="{height}" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[{chapter_title}](../../chapters/{chapter_dir}/index.md).

```text
{spec}
```

## References

{refs}
"""

ATTRIBUTION = """
## Credits

This MicroSim is adapted from
[{sim}]({url}) in the *{repo}* project by the same author
([source]({github})). {note}
"""


def render(sim_id):
    page_path = os.path.join(PAGES_DIR, sim_id + ".json")
    if not os.path.isfile(page_path):
        return False, "no prose file"
    page = json.load(open(page_path, encoding="utf-8"))

    todo_path = os.path.join(TODO_DIR, sim_id + ".json")
    if not os.path.isfile(todo_path):
        return False, "no spec file"
    todo = json.load(open(todo_path, encoding="utf-8"))

    # {{CHAPTER}} in any prose field expands to a correct markdown link built
    # from the spec. Hand-typing chapter directory names into prose produced two
    # dead links before this existed; --strict does not catch them.
    chapter_dir = todo.get("chapter_dir") or page.get("chapter_dir", "")
    chapter_title = (f'Chapter {todo["chapter_number"]}: {todo["chapter_title"]}'
                     if todo.get("chapter_title") else page.get("chapter_title", ""))
    chapter_link = f"[{chapter_title}](../../chapters/{chapter_dir}/index.md)"

    def expand(text):
        return text.replace("{{CHAPTER}}", chapter_link)

    body = TEMPLATE.format(
        sim_id=sim_id,
        title=page["title"],
        description=page["description"],
        library=page.get("library") or todo.get("library") or "p5.js",
        bloom=page.get("bloom") or todo.get("bloom_level") or "Understand (L2)",
        height=page["height"],
        about=expand(page["about"]),
        howto=expand(page["howto"]),
        lesson=expand(page["lesson"]),
        chapter_title=chapter_title,
        chapter_dir=chapter_dir,
        spec=todo["specification"],
        refs=expand(page["refs"]),
    )

    # Adapted sims credit their source, read from the metadata the copier wrote.
    meta_path = os.path.join(SIMS, sim_id, "metadata.json")
    if os.path.isfile(meta_path):
        meta = json.load(open(meta_path, encoding="utf-8"))
        src = meta.get("_reused_from")
        if src:
            body += ATTRIBUTION.format(
                sim=src["sim"], url=src["url"], repo=src["repo"],
                github=src["github"], note=page.get("credit_note", ""),
            ).rstrip() + "\n"

    out = os.path.join(SIMS, sim_id, "index.md")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8") as f:
        f.write(body)
    return True, out


def main():
    targets = sys.argv[1:]
    if not targets:
        targets = sorted(
            n[:-5] for n in os.listdir(PAGES_DIR) if n.endswith(".json")
        )
    ok = skipped = 0
    for sim_id in targets:
        good, msg = render(sim_id)
        if good:
            ok += 1
            print("wrote", msg)
        else:
            skipped += 1
            print(f"skip {sim_id}: {msg}")
    print(f"\n{ok} written, {skipped} skipped")


if __name__ == "__main__":
    main()
