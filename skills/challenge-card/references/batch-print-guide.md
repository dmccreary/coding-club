# Batch Print Guide (design only -- not yet implemented)

`scripts/batch_print_run.py` does not exist yet in this project-local
prototype. This document records the intended design so it can be built
without re-deriving it.

## Intended CLI

```bash
python3 scripts/batch_print_run.py \
    --chapter 15-curriculum-challenge-cards \
    --track beginner \
    --status proofed \
    --out beginner-ch15-2026-08-31.pdf
```

Filters `docs/cards/*/card.yaml` by `chapter`/`track`/`status`, respects
`print.copies_recommended` if a `--respect-copies` flag is passed
(otherwise one copy per matching card).

## Rendering approach: no PDF-merge library needed

Assemble **one combined HTML document** containing each selected card's
already-rendered `sheet.html` fragment (the `.sheet` div and its inline
styles), each wrapped in a container with `break-after: page`, then make
a **single** Playwright `page.pdf()` call against that combined document.
Chromium's print-to-PDF natively honors `@page` / `break-after: page`,
producing an N-page, print-shop-ready PDF with zero new dependencies
(neither `pypdf` nor `PyPDF2` is installed in this environment, and
neither should be added just for this).

## Output convention

`docs/cards/print-runs/<run-name>-<date>.pdf` -- treat this directory as
a build artifact (gitignore it, along with every per-card `sheet.pdf`);
only `card.yaml` + `metadata.json` need to be source-controlled, since
PDFs are cheaply regenerable from them.

## Build order

This was Milestone 5 in the original design plan, after the
render/verify/schema pipeline (already built and proven against the two
sample cards in `docs/cards/`) and before the full content-authoring
phase is scaled up to many cards per chapter.
