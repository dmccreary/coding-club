# Card Schema Reference

Full machine-checkable schema: `assets/schema/challenge-card-schema.json`
(JSON Schema draft-07). This document is the field-by-field prose
companion.

| Field | Type | Required | Notes |
|---|---|---|---|
| `card_id` | string | yes | kebab-case, must equal the directory name under `docs/cards/` |
| `title` | string | yes | shown on the front panel, keep it short (fits one line at 28pt) |
| `track` | enum | yes | `beginner` \| `intermediate` \| `advanced` |
| `difficulty_color` | enum | no | `green` \| `blue` \| `black`; defaults from `track` via the theme file |
| `chapter` | string | yes | owning chapter directory slug, e.g. `15-curriculum-challenge-cards` |
| `concept_ids` | int[] | no | must exist in `docs/learning-graph/learning-graph.json` nodes; checked by `validate_card_schema.py` |
| `concept_labels` | string[] | no | cached display labels; regenerate, don't hand-edit |
| `concept_tag` | string | no | short badge printed bottom-right of the front panel |
| `kit_required` | string\|null | no | name of a physical kit, if any |
| `materials` | string[] | no | everything the front-side steps need; cross-checked by `verify_circuit_solution.py` for circuit cards |
| `front.icon` | string\|null | no | key into `ICON_GLYPHS` in `render_card_pdf.py` (currently: `motor`, `code`, `led`, `circuit`, or `null` for a default star); ignored when `front.icon_image` is set |
| `front.icon_image` | string\|null | no | filename of a generated illustration in the card's own directory (e.g. `measure-led-current.png`), rendered in place of the emoji glyph at a larger size |
| `front.icon_image_alt` | string\|null | no | alt text for `front.icon_image`; recommended whenever `icon_image` is set |
| `front.description` | string | yes | 1-2 sentences |
| `front.steps` | string[] | yes | numbered front-side steps |
| `front.stretch_goal` | string\|null | no | always include one in practice, even though schema allows null |
| `back.hints` | string[] | yes | 2-4 items, guide without revealing |
| `back.solution_type` | enum | yes | `code` \| `circuit` \| `other` |
| `back.solution_language` | enum\|null | conditional | required-in-spirit when `solution_type: code`; `python` \| `micropython` \| `scratch` |
| `back.solution_steps` | string[] | yes | the real answer, step by step |
| `back.solution_code` | string\|null | conditional | present iff `solution_type: code` |
| `back.solution_circuit_description` | string\|null | conditional | present iff `solution_type: circuit` |
| `back.see_also` | string\|null | no | optional cross-reference |
| `verification.status` | enum | no | `unverified` \| `passed` \| `failed` \| `not_applicable`; written by the verify scripts, don't hand-edit |
| `verification.method` | string\|null | no | `python_sandbox` \| `circuit_consistency` \| `manual_review`; written by the verify scripts |
| `verification.sample_inputs` | string[] | no | code cards only -- stdin values `verify_code_solution.py` feeds the program |
| `verification.expected_output_patterns` | string[] | no | code cards only -- regexes that must ALL match stdout on every run |
| `status` | enum | yes | lifecycle: `drafted` -> `rendered` -> `proofed` -> `final` |
| `reading_level_target` | int\|null | no | pulled from `docs/course-description.md` at authoring time |
| `print.copies_recommended` | int | no | see content-authoring-guide.md for the 3/2/1 convention |
| `print.theme` | string | no | key into `difficulty-themes.json`; `default` unless the book overrides it |

## Lifecycle status

| Status | Meaning |
|---|---|
| `drafted` | content authored, no render yet |
| `rendered` | `render_card_pdf.py` has produced front/back/sheet HTML + PDF |
| `proofed` | a human (or, for plain Python, the sandbox) has checked it |
| `final` | locked, safe to include in a batch print run repeatedly |

`render_card_pdf.py` auto-advances `drafted -> rendered`; nothing in this
prototype currently auto-advances `rendered -> proofed` or
`proofed -> final` -- those are deliberate human checkpoints.
