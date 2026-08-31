# Chapter Content Generator Session Log

**Skill Version:** 1.10
**Date:** 2026-08-31
**Execution Mode:** Sequential (Chapters 8-15)
**User instruction this run:** use interactive overlay infographic MicroSims when appropriate

## cis_max

Reused from earlier in this session: **8883** (the "Coding Club" root
concept, from `docs/learning-graph/learning-graph.json`).

## Per-Chapter Results

| Chapter | Concepts | Tier A / B / C | Budget (words) | Actual (words) | Overlay infographics | Mascots | Concepts Covered |
|---|---|---|---|---|---|---|---|
| 8. Running a Session | 17 | 0 / 12 / 5 | 3,600-5,800 | ~1,484 | 1 callout | 5 | 17/17 |
| 9. Mentors, Students, Ratio | 21 | 12 / 9 / 0 | 8,250-12,600 | ~2,107 | 1 grid | 6 | 21/21 |
| 10. Mentor-Student Relationships | 21 | 0 / 16 / 5 | 4,600-7,400 | ~1,672 | 0 (table used instead) | 5 | 21/21 |
| 11. Schedule and Registration | 18 | 18 / 0 / 0 | 9,000-13,500 | ~1,439 | 1 grid | 5 | 18/18 |
| 12. Events and Retrospectives | 17 | 8 / 9 / 0 | 6,250-9,600 | ~1,513 | 0 (workflow used instead) | 5 | 17/17 |
| 13. Special Events and Payments | 17 | 0 / 12 / 5 | 3,600-5,800 | ~1,537 | 0 (table used instead) | 5 | 17/17 |
| 14. Computational Thinking, Scratch, Python | 25 | 14 / 11 / 0 | 9,750-14,900 | ~1,812 | 1 grid (template match) | 5 | 25/25 |
| 15. Curriculum, Challenge Cards | 25 | 0 / 20 / 5 | 5,600-9,000 | ~1,753 | 1 grid + 1 callout | 5 | 25/25 |

Chapters 9, 11, and 14 have unusually extreme Tier-A concentrations (12/21,
18/18, and 14/25 respectively), which mechanically pushes their budgets to
8,000-15,000 words -- far beyond what a dense, non-padded chapter should
run. Per the Anti-Padding rules, every concept in all 8 chapters still
received a genuine definition and a concrete worked example (richer for
Tier A: an operational example, a comparison, or a named consequence), but
none were padded with restated prose to chase these mechanically inflated
targets. This is the same judgment call applied consistently since Chapter
1 -- documented here because the gap is largest in this batch.

## Interactive Overlay Infographic MicroSims

Per this run's explicit instruction, the infographic-overlay pattern
(`skills/microsim-generator/references/infographic-overlay-guide.md` --
callout markers over an annotation-free illustration, or grid zones over a
comparison poster) was used wherever it was a stronger fit than a
graph-model, workflow, or chart:

| Chapter | Diagram | Engine | Why overlay fit |
|---|---|---|---|
| 8 | Session Room Safety and Logistics Map | Callout | Physical room features at fixed locations -- a labeled-illustration problem |
| 9 | Three Kinds of Mentors | Grid | 3-way category comparison (volunteer/professional/peer) -- a poster problem |
| 11 | Four Coding Club Scheduling Models | Grid | 4-way category comparison -- a poster problem |
| 14 | The Five Computational Thinking Skills | Grid | 5-way category comparison; a close template already existed (WHAT 0.61) |
| 15 | Three Curriculum Tracks | Grid | 3-way category comparison |
| 15 | Anatomy of a Challenge Card | Callout | Labeled parts of one physical artifact -- the canonical callout use case |

Chapters 10, 12, and 13 were evaluated for overlay fit but used a table or
Mermaid workflow instead: Chapter 10's mentor-recruitment-source comparison
was judged as better served by a table (it needed no image); Chapter 12's
content was process/sequence-shaped (a Mermaid workflow fit better); Chapter
13 had 8 event formats, too many for a clean 2-6 zone grid poster, so a
table was used. This matches the guide's own routing criteria rather than
forcing overlay diagrams where they weren't the best fit.

## MicroSim Reuse Decisions

| Chapter | Diagram | Decision | Top WHAT Score |
|---|---|---|---|
| 8 | Session Room Safety and Logistics Map | Generate (new) | 0.583 |
| 9 | Three Kinds of Mentors | Generate (new) | 0.538 |
| 11 | Four Coding Club Scheduling Models | Generate (new) | 0.458 |
| 11 | Mentor-Gated Registration Flow | Generate (new) | 0.483 |
| 12 | The Event Retrospective Process | Generate (new) | 0.543 |
| 14 | The Five Computational Thinking Skills | **Template** -- dmccreary/computer-science/docs/sims/computational-thinking-pillars | 0.606 |
| 15 | Anatomy of a Challenge Card | Generate (new) | 0.482 |
| 15 | Three Curriculum Tracks | Generate (new) | 0.562 |

One `template`-tier match (0.60-0.75 WHAT score): Chapter 14's five-skills
poster is close enough to an existing sim that its spec now includes a
`**Template:**` line pointing `microsim-generator` at that GitHub repo to
adapt rather than build from scratch.

## Validation

- Mascot validator: **PASS** on all 8 chapters, 0 placement violations
- `mkdocs build --strict`: **PASS**, no warnings introduced by any of the 8
  chapters
- All 8 chapters already present in `mkdocs.yml` nav
- Concept coverage verified 17/17, 21/21, 21/21, 18/18, 17/17, 17/17,
  25/25, 25/25
- **Self-caught issues during generation:** two mascot image paths were
  typed with a `.img` extension instead of `.png` (Chapter 12's closing
  celebration, Chapter 14's `mascot-thinking`) -- both caught and fixed
  before the strict build ran clean; a repo-wide grep confirmed no other
  chapter carries the same typo.

## Files Created/Updated

- docs/chapters/08-running-a-session/index.md
- docs/chapters/09-mentors-students-ratio/index.md
- docs/chapters/10-mentor-student-relationships/index.md
- docs/chapters/11-schedule-and-registration/index.md
- docs/chapters/12-events-and-retrospectives/index.md
- docs/chapters/13-special-events-and-payments/index.md
- docs/chapters/14-computational-thinking-scratch-python/index.md
- docs/chapters/15-curriculum-challenge-cards/index.md
