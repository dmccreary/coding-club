---
name: challenge-card
description: Authors and renders print-ready "Challenge Card" activities for this intelligent textbook - front side (title, icon, description, numbered steps) and back side (Solution: hints then working code or circuit-description steps), color-coded by difficulty (green=beginner, blue=intermediate, black=advanced), laid out as two portrait panels on one landscape 8.5x11 sheet for single-sided printing, fold, and lamination. Use after chapter content and the learning graph both exist, when a chapter needs a hands-on project card for a curriculum track.
license: Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
metadata:
  ibook:
    version: "0.2.0"
    preferred-model: "sonnet"
    status: "project-local prototype -- not yet promoted to ibook-skills"
---

# Challenge Card Generator

Authors and renders print-ready Challenge Cards: physical, folded,
laminated cards students pick up off the center table (Chapter 7) and
take to a workstation. Each card is one 8.5x11 sheet, printed on ONE
side, folded in half, laminated -- see `references/print-layout-guide.md`
for the exact fold geometry and why it matters.

**Status note:** this skill currently lives at
`skills/challenge-card/` inside the coding-club project only ("for now"
per the author's instruction), not in the shared `ibook-skills` repo. It
has NOT been registered in `docs/skill-descriptions/index.md`,
`book-media-generator/SKILL.md`, or `CLAUDE.md` -- those cross-book
integration steps are still pending a decision on whether/when to promote
this to the shared skill library.

## When to Use This Skill

Use when a chapter needs one or more print-ready Challenge Cards for a
curriculum track (beginner/intermediate/advanced), per Chapter 15's
"Designing Challenge Cards" and "Printing Challenge Cards" concepts.

Do NOT use this skill for:
- On-screen-only interactive content -- that's `microsim-generator`.
- Quiz questions -- that's `quiz-generator`.
- A card whose content has already been fully authored elsewhere -- in
  that case, hand-write `card.yaml` directly (see the schema reference)
  and skip straight to Step 3 (Render) below.

## Workflow

### Step 1: Author the card content

For each card, produce a `docs/cards/<card-id>/card.yaml` following
`assets/schema/challenge-card-schema.json` (field-by-field documentation
in `references/card-schema-reference.md`). Draw the card's concept,
track, and materials from the owning chapter's "Concepts Covered" table
and the book's `docs/learning-graph/learning-graph.json` (to populate
`concept_ids`). Full authoring guidance, including how to keep step
language at the book's target reading level, is in
`references/content-authoring-guide.md`.

**Difficulty tiers** (fixed system, matches Chapter 15's established
convention -- do not invent new tiers):

| Track | Border Color | Who It's For |
|---|---|---|
| beginner | green | First-time students, no track experience assumed |
| intermediate | blue | Mastered most introductory concepts in the track |
| advanced | black | Mastered most beginning concepts; often paired |

Back-side solutions are one of three types -- `code` (Python only is
auto-verified; MicroPython/Scratch require manual review, see
`references/solution-verification-guide.md`), `circuit` (a text
description, checked for materials-list consistency), or `other`.

### Step 1b: Author the image prompt and log the TODO

**Every card needs a real illustration, not just a single emoji.**
`front.icon` is a fallback glyph that renders until the illustration
exists -- it is never the finished front side.

1. Write `docs/cards/<card-id>/image-prompt.md`: a highly detailed,
   paste-ready prompt describing the illustration to generate, matching
   the depth of `docs/cards/motor-spin/image-prompt.md` and
   `docs/cards/rock-paper-scissors/image-prompt.md`. Follow
   `references/image-prompt-guide.md` for the required section structure
   and level of detail -- vague prompts ("a colorful circuit") produce
   unusable art.
2. Run `python3 scripts/update_image_todo.py --cards-dir docs/cards`.
   This regenerates `docs/cards/TODO.md`, the queue another agent (one
   with image-generation tools) works from -- it lists every card that
   has a prompt but no illustration yet, with the exact steps to close
   the loop (generate the PNG, set `front.icon_image` /
   `front.icon_image_alt` in `card.yaml`, re-render).

Do NOT try to generate the PNG yourself as part of this skill --
authoring the prompt and logging the TODO is the full extent of this
step. Continue to Step 2 with the card still on its emoji fallback; it
prints and validates fine either way.

### Step 2: Verify the solution

**Never trust an authored solution without running this step.**

```bash
# code (Python only -- actually executes the solution)
python3 scripts/verify_code_solution.py --card-dir docs/cards/<card-id>

# circuit (materials <-> description consistency check)
python3 scripts/verify_circuit_solution.py --card-dir docs/cards/<card-id>
```

Both scripts write their result into `card.yaml`'s `verification` block.
A `code`/`python` card that fails must be fixed and re-verified before
rendering is worth doing -- do not render a card whose solution hasn't
passed. See `references/solution-verification-guide.md` for the
MicroPython/Scratch manual-review path and why the Docker Python-lab
runtime service is deliberately NOT reused here.

### Step 3: Render

```bash
python3 scripts/render_card_pdf.py --card-dir docs/cards/<card-id>
```

Produces `front.html`, `back.html` (single-panel previews, normal
reading orientation), `sheet.html` (the combined landscape print sheet),
and `sheet.pdf` (the actual print file, via Playwright). Full CSS/fold
details: `references/print-layout-guide.md`.

**Always open `sheet.pdf` and read it before calling a card done** --
this is not optional. Confirm: the border color matches the track, both
panels' text fits inside the panel without clipping, and (for a `code`
card) the full solution code is visible, not cut off.

### Step 4: Validate and index

```bash
python3 scripts/validate_card_schema.py --card-dir docs/cards/<card-id>
python3 scripts/generate_card_index.py --cards-dir docs/cards
python3 scripts/update_image_todo.py --cards-dir docs/cards
```

The first confirms schema conformance and that every `concept_ids` entry
is a real node in the learning graph. The second regenerates
`docs/cards/index.md`, the gallery page (already wired into this book's
`mkdocs.yml` nav under "Challenge Cards"). The third re-syncs
`docs/cards/TODO.md` against every card's actual `front.icon_image`
status -- safe and cheap to re-run any time, including here even though
Step 1b already ran it once for this card.

### Step 5 (optional): Batch print run

Not yet implemented in this project-local prototype -- see
`references/batch-print-guide.md` for the intended design (combine
several cards' already-rendered `sheet.html` fragments into one
multi-page PDF via a single Playwright `page.pdf()` call, no PDF-merge
library needed) before building `scripts/batch_print_run.py`.

## Token Efficiency: Serial Execution Only

Author and render cards for one chapter **serially, one card at a time**,
the same way `quiz-generator` authors questions -- do not spin up
parallel agents to author multiple cards at once. `quiz-generator`
measured a 13% token-waste and 5x tool-call-count penalty from parallel
authoring on directly comparable content; there is no reason to expect
this task is different.

## Critical Gotchas

1. **Fold geometry is load-bearing, not decorative.** This card has a
   **vertical spine** (side-fold, like a book cover), not a top-fold tent
   card. The correct `back_rotation_deg` for that geometry is **0**
   (confirmed by rendering `docs/cards/motor-spin/sheet.pdf` with
   `180` first -- the back panel came out fully upside-down -- then
   fixing it and re-rendering to confirm both panels read upright). If a
   future card style genuinely needs a top-fold tent layout instead,
   that would need `back_rotation_deg: 180` and a different physical
   fold -- do not assume 0 is universally correct, re-verify by reading
   the rendered PDF whenever the fold style changes.
2. **A `code`-type solution is not "done" until `verify_code_solution.py`
   passes.** An LLM believing code is correct is not evidence it runs.
3. **Read the rendered PDF, not just the HTML.** The `.panel` CSS clips
   overflow at the physical page boundary; a too-long code block or step
   list will silently get cut off in the PDF even though the on-screen
   preview might scroll and look fine. There is no scroll bar on paper.
