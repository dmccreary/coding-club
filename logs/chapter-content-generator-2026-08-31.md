# Chapter Content Generator Session Log

**Skill Version:** 1.10
**Date:** 2026-08-31
**Execution Mode:** Sequential (single-chapter loop, run twice: Ch 1 alone, then Ch 2-4)

## cis_max

Computed once from `docs/learning-graph/learning-graph.json`: **8883** (the
"Coding Club" root concept). Reused for every chapter's Elaboration Budget.

## Per-Chapter Results

| Chapter | Concepts | Tier A / B / C | Budget (words) | Actual (words) | Non-text elements | Mascots | Concepts Covered |
|---|---|---|---|---|---|---|---|
| 1. What Is a Coding Club | 18 | 1 / 17 / 0 | 4,750-7,550 | ~3,388 | 2 lists, 2 tables, 2 new diagram specs (graph-model, workflow) | 6 | 18/18 |
| 2. AI, Intelligent Textbooks | 18 | 0 / 14 / 4 | 3,850-6,200 | ~2,302 | 2 tables, 2 reused MicroSims (1 catalog, 1 local) | 6 | 18/18 |
| 3. Club Charter and Safety | 16 | 9 / 7 / 0 | 6,250-9,550 | ~2,966 | 1 list, 2 tables, 2 new diagram specs (graph-model, workflow) | 6 | 16/16 |
| 4. Roles, Governance, Branding | 16 | 0 / 11 / 5 | 3,350-5,400 | ~1,972 | 1 table, 1 new diagram spec (graph-model) | 5 | 16/16 |

All four chapters ran below their CIS-driven budget. Per the Anti-Padding
rules in CONTENT-GENERATION-GUIDE.md, budgets are guidelines, not
requirements -- every concept received a genuine definition and at least one
concrete worked example (Tier A concepts also got a diagram/table/MicroSim),
but none were padded with restated prose to hit the numeric target. Chapter
3's shortfall is the largest in absolute terms because it has 9 Tier A
concepts (500-750 words each); it was expanded twice during generation to
close part of the gap with real operational/legal detail (background-check
types, insurance categories, consent-form fields, data-retention practice)
before being accepted as still under budget by design, not oversight.

## MicroSim Reuse Decisions

| Chapter | Diagram | Decision | Top WHAT Score |
|---|---|---|---|
| 1 | Coding Club Ecosystem Map | Generate (new) | 0.545 |
| 1 | The Club Improvement Cycle | Generate (new) | 0.472 |
| 2 | Levels of Intelligent Textbook Sophistication | **Reuse** (tracking-ai-course/book-levels) | 0.764 |
| 2 | This Book's Learning Graph | **Reuse** (local `docs/sims/graph-viewer/`, already deployed) | n/a -- local |
| 3 | Anatomy of a Club Charter | Generate (new) | 0.498 |
| 3 | Handling a Conflict or Complaint | Generate (new) -- top match was Grade 4 health-education content, wrong audience | 0.571 |
| 4 | Club Governance at a Glance | Generate (new) | 0.589 |

Totals: 2 reused, 5 newly specified (Status: Specified, ready for
`microsim-generator`).

## Validation

- Mascot validator (`validate-chapter-mascots.py`): **PASS** on all 4
  chapters, 0 placement violations
- `mkdocs build --strict`: **PASS** after this session's edits -- no
  warnings introduced by any of the 4 chapters (one real issue was caught
  and fixed during Chapter 1: `.md-button` "run fullscreen" links had been
  added to two brand-new, not-yet-built sim specs; that pattern is only
  valid for already-built/Reused sims, so the links were removed)
- All 4 chapters already present in `mkdocs.yml` nav
- Concept coverage verified 18/18, 18/18, 16/16, 16/16

## Files Created/Updated

- docs/chapters/01-what-is-a-coding-club/index.md
- docs/chapters/02-ai-and-intelligent-textbooks/index.md
- docs/chapters/03-club-charter-and-safety/index.md
- docs/chapters/04-roles-governance-branding/index.md
