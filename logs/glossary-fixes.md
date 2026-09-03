# Glossary Quality Rebuild — Session Log

- **Project:** Coding Club
- **Date:** 2026-09-03
- **Agent:** Claude Code (Sonnet 5)
- **Trigger:** User-directed rebuild after the prior ChatGPT-generated glossary failed quality standards — see `logs/chatgpt-failed-to-use-glossary-generator-skill.md` for the incident postmortem. This log covers the actual rebuild across three requests in one session: (1) full ISO 11179 quality pass, (2) duplicate-term consolidation, (3) targeted rewrite of four definitions surfaced but not fixed during the dedup pass.
- **File under repair:** `docs/glossary.md`

## Starting Point

The glossary had 658 `####` entries, 3,480 lines, 33,378 words. A programmatic scan (not a sample-based read) found:

- **407 of 658 entries (62%)** opened by repeating the term as its own grammatical subject — e.g. *"Battery Safety covers the handling, storage..."* — the ISO 11179 circularity anti-pattern the user's `glossary-generator` skill explicitly warns against.
- Only **396 entries (60%)** had a `**Example:**` line.
- Only **2 entries** had a `**See Also:**` cross-reference.

Detection used a regex matcher against every entry's opening sentence (`^{Term}`, `^A {Term}`, `^An {Term}`, `^The {Term}`, case-insensitive) rather than manual review, since eyeballing 658 entries across a 3,480-line file is exactly the kind of check the prior failed run substituted with unreliable heuristics.

## Phase 1 — Circular Definition Rewrite (407 entries)

Split the 407 flagged entries into 8 batches of ~51 and ran them as **parallel background subagents** (`general-purpose`), each given: the batch's original entries verbatim, the ISO 11179 rubric from `glossary-generator/SKILL.md` (precise, concise ~15-50 words, distinct, non-circular), explicit bad/good examples, and strict scope limits — rewrite *only* the opening clause, never touch existing `**Example:**` lines or invent new facts, optionally add a missing example only where a concrete, non-generic one was possible.

| Batch | Terms | Examples added | Subagent tokens |
|---|---|---|---|
| A1 | 51 | 17 | 114,245 |
| A2 | 51 | 14 | 103,717 |
| A3 | 51 | 17 | 124,796 |
| A4 | 51 | 20 | 103,018 |
| A5 | 51 | ~20 | 98,123 |
| A6 | 51 | 22 | 119,028 |
| A7 | 51 | 23 | 107,394 |
| A8 | 50 | 19 | 115,219 |
| **Total** | **407** | **~152** | **885,540** |

## Phase 2 — ISO Quality Audit of the Remaining 251

The 251 entries that passed the circularity regex still had quality problems the mechanical check couldn't catch: hidden circularity, vagueness, and — most notably — **duplicated "mad-lib" boilerplate templates** stamped across unrelated terms with only the noun swapped (e.g. *"A coordinated combination of people, tools, records, and procedures used to manage X"* applied verbatim to Club Inventory System, Automated Reminder System, and others). Split into 5 batches of ~51 and run the same way, but scoped to *audit-and-fix-only-if-broken* rather than rewrite-everything, with instructions to output only the entries actually changed.

| Batch | Terms audited | Terms changed | Subagent tokens |
|---|---|---|---|
| B1 | 51 | 20 | 101,488 |
| B2 | 51 | 30 | 105,676 |
| B3 | 51 | 16 | 120,775 |
| B4 | 51 | 24 | 96,511 |
| B5 | 47 | 25 | 111,383 |
| **Total** | **251** | **115** | **535,833** |

**Content bugs caught and fixed during this pass** (not just wording — actual corrupted data):

- *Wearable Electronics Basics* — its `**Example:**` contained a leaked MicroSim implementation snippet ("Implementation: Interactive Infographic Overlay Guide (grid engine)...") instead of an actual example.
- *Third Party Tool Vetting* — its example was a stray, truncated checklist bullet fragment.
- *File Naming Convention* — its example was copy-pasted from an unrelated data-privacy entry and had nothing to do with filenames.
- *AI Output Quality Check* — its example was a checklist that cut off mid-bullet after one item; agents flagged it as out of their fix-scope, so I repaired it directly afterward.

Combined subagent cost for Phases 1–2: **13 parallel agents, ~1.42M tokens.**

## Phase 3 — Reassembly and a Structural Bug Fix

Wrote a Python merge script (`reassemble.py`) rather than hand-editing 522 changed entries: parse `docs/glossary.md` into a `{term: body}` dict, overlay every batch's `*_output.json`, re-sort alphabetically (case-insensitive), rewrite the file.

Discovered along the way: the original file interleaved single-letter `### A` / `### B` ... section dividers between alphabetical groups, but my parser (and by extension the batch agents, which received the raw text verbatim) split only on `#### ` headers — so each divider got silently absorbed as trailing noise into whichever entry happened to precede it (22 entries affected, e.g. a stray `### C` glued onto the end of "Building Trust With Students"). Fixed by stripping that noise from every body with `re.sub(r'\n*### [A-Z]\s*$', '', body)` and **regenerating** the dividers programmatically from each term's first letter after sorting, instead of trying to preserve the originals positionally.

Verified with `mkdocs build --strict` — clean, no new errors. Re-ran the circularity detector against the merged file: **0 remaining** (down from 407).

## Phase 4 — MicroSim Cross-References (0 → 80 links)

Built a lexical matcher (word-overlap ≥ 2 significant words, generic domain words like "club"/"mentor"/"student" excluded) between all 658 glossary terms and the book's ~129 MicroSim ids/titles, producing 81 candidates. Manually reviewed every candidate's actual definition text against the matched sim before accepting — this caught and corrected two weak auto-matches (*Robot Motor Control* → re-pointed from the emotion-display sim to `h-bridge-direction-speed-control`; *Moving Rainbow Pattern* → re-pointed from the wiring-diagram sim to `neopixel-loop-pixel-stepper`) and dropped one candidate with no genuinely good match (*Survey Tool Selection*).

Result: **80 `**See Also:**` links** appended, each pointing to a real, existing `sims/<id>/index.md` path — confirmed by `mkdocs build --strict` reporting no broken relative links.

## Phase 1–4 Results

| Metric | Before | After |
|---|---|---|
| Total entries | 658 | 658 |
| Circular definitions | 407 | **0** |
| Entries with an example | 396 | 630 |
| Entries with a See Also link | 2 | 82 |
| File size | 3,480 lines / 33,378 words | 4,115 lines / 40,573 words |

## Phase 5 — Duplicate Term Consolidation (User Request 2)

User flagged "Scratch Block Coding" / "Scratch Programming" as an example of duplicate terms to combine. Rather than merge only the one named pair, ran a systematic pass: computed lexical-overlap candidate pairs across all 658 terms (202 pairs at Jaccard ≥ 0.5, filtered to 137 for review), then read every candidate's actual definition text to judge genuine duplication vs. the book's several *intentional* parallel patterns that share vocabulary but aren't duplicates (AI-assisted vs. manual process pairs, the three mentor-motivation types, beginner/intermediate/advanced curriculum tracks, urban/rural/underserved outreach subtypes, the Kit family of distinct physical products).

Before merging any candidate, cross-checked whether the term being removed had independent structural significance elsewhere in the book (a dedicated chapter subsection, a diagram-node role, a `quiz.md` anchor link) — since the glossary isn't the only place these concepts live; several are nodes in the book's underlying learning-graph concept taxonomy.

**Merged (3):**

| Removed | Kept as | Why |
|---|---|---|
| Scratch Block Coding | Scratch Programming | User's named example. No independent chapter section beyond the concept-coverage table. Kept Scratch Programming's definition, swapped in Scratch Block Coding's stronger concrete example, folded in its detail about block-shape mismatches. |
| Coding Challenge Card | Challenge Card | Near-identical "single card describing one project" definitions; both already linked to the same MicroSim (Anatomy of a Challenge Card). Pure duplicate, nothing unique to port over. |
| Waiting List Signup | Waiting List Management | Waiting List Signup's own definition admitted it was "the same...concept, applied at the registration-system level." Combined both examples' concrete numbers (20 seats, 24-hour window) into one. |

**Found similar-looking but did NOT merge (4)** — each has real, independent content elsewhere that a merge would have orphaned or broken:

| Pair | Why kept distinct |
|---|---|
| Mentor Role / Student Role vs. plain Mentor / Student | Nodes in the governance-diagram taxonomy in `docs/chapters/04-roles-governance-branding/index.md`, parallel to Parent Role and Volunteer Coordinator Role. Merging would have broken the diagram's role hierarchy and an existing `quiz.md` anchor link. |
| Sticker Reward System vs. Extrinsic Reward System / Badge And Sticker Reward | Has its own developed `### Sticker Reward System` subsection as a distinct reward-ladder rung in `docs/chapters/26-motivation-badges-growth-mindset/index.md`. |
| Influence Graph Concept vs. Building An Influence Graph | Has a full dedicated section with original content in `docs/chapters/32-ai-agents-registration-scheduling/index.md`. |

**Reference updated:** `docs/chapters/15-curriculum-challenge-cards/quiz.md` — its `**Concept Tested:**` label and `**See:**` anchor link were pointing at the now-removed `#coding-challenge-card`; repointed to `#challenge-card`.

## Phase 6 — Rewriting the Four "Kept" Definitions (User Request 3)

The four pairs kept distinct in Phase 5 were still saddled with the weak/generic definitions that made them *look* like duplicates in the first place. Rewrote each, grounding the new text in the real chapter content already discovered during Phase 5's investigation (no new facts invented) and adding a See Also link to the matching MicroSim where one existed:

- **Mentor Role** — now defines its actual position in the governance chart (between Volunteer Coordinator Role and the students/parents it works with directly), with an example drawn from the diagram's real edge labels. Added See Also → Club Governance Map.
- **Student Role** — same treatment: its position in the org chart's outer tier, receiving guidance from Mentor Role. Added See Also → Club Governance Map.
- **Sticker Reward System** — replaced the empty "coordinated combination of people, tools, records, and procedures used to manage sticker reward" template with the actual distinguishing content from its chapter section (immediate, low-cost, higher-frequency than a formal badge). Kept its existing example (already good). Added See Also → The Tangible Reward Ladder.
- **Influence Graph Concept** — replaced a dangling, context-free example ("Both nodes exist in the same graph; only one of them is currently connected to the club.") with a self-contained one adapted from the chapter's own worked example. Kept its existing See Also link.

## Phase 7 — Fixing the Pre-Existing Broken Anchor (User Request 4)

`docs/chapters/23-network-peripherals-device-lifecycle/quiz.md` (question 9) had a `**See:**` link to `glossary.md#cloud-storage-for-devices` — an anchor that never existed in the glossary under either the original or rebuilt version; the real term is "Cloud Storage for Student Projects." Confirmed the match before fixing: the glossary entry's own `**Example:**` describes the exact same "Station 3" shared-account scenario the quiz question is built around, so this wasn't a guess. Updated both the `**Concept Tested:**` label and the `**See:**` link/anchor to the correct term and slug (`#cloud-storage-for-student-projects`). `mkdocs build --strict` now reports zero glossary-related warnings — this was the last one.

## Final State

| Metric | Value |
|---|---|
| Total entries | 655 (658 → −3 merged) |
| Circular definitions | 0 |
| Entries with an example | 629 |
| Entries with a See Also link | 84 |
| File size | 4,149 lines / 40,636 words |
| `mkdocs build --strict` | Clean after every phase |

## Files Created or Modified

- `docs/glossary.md` — the full rebuild (this session's primary output)
- `docs/chapters/15-curriculum-challenge-cards/quiz.md` — anchor link repointed after the Coding Challenge Card merge
- `docs/chapters/23-network-peripherals-device-lifecycle/quiz.md` — broken `#cloud-storage-for-devices` anchor repointed to the real term
- `logs/glossary-fixes.md` — this session log

## Memory Recorded

Two entries added to this project's persistent memory (`~/.claude/projects/-Users-dan-Documents-ws-coding-club/memory/`):

- **feedback_read_skill_before_generating** — always Read the actual skill file before running a content-generation skill in this repo; don't trust a self-reported quality score as proof of quality.
- **project_glossary_rebuild_2026** — this rebuild is the current glossary baseline; the prior ChatGPT run's 98/100 score is not a reliable benchmark.

## Not Done

- No changes were made to `docs/learning-graph/concept-list.md`, `learning-graph.json`, `learning-graph.csv`, or any chapter's concept-coverage table. Several merged/kept-distinct terms are also nodes in that underlying concept taxonomy; this session only touched the glossary and the two quiz links it broke or found broken.
