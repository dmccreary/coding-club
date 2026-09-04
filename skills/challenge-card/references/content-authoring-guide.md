# Content Authoring Guide

## Where card content comes from

A card belongs to one chapter (`chapter:` field, the chapter directory
slug) and typically 1-3 concepts from that chapter's "Concepts Covered"
table (`concept_ids:`, matched against
`docs/learning-graph/learning-graph.json` node IDs -- validate with
`scripts/validate_card_schema.py`, never hand-guess an ID). Pick concepts
that describe something a student can *build*, not a purely
administrative or policy concept (e.g. "Python Conditional" or "Scratch
Block Coding" are good card concepts; "Club Charter" is not).

## Track and difficulty

Pick `track` first (beginner / intermediate / advanced), matching the
book's own curriculum-track definitions (Chapter 15). `difficulty_color`
defaults from `track` via `assets/templates/challenge-card/difficulty-themes.json`
-- only set it explicitly if a book's `theme.yaml` overrides the default
green/blue/black mapping.

## Front side

- **`description`**: 1-2 sentences, states the goal, not the mechanism.
  ("Make a single LED blink" not "Learn about the neopixel library.")
- **`steps`**: numbered, one action per step, active voice, at the book's
  target reading level (`docs/course-description.md` states this --
  coding-club targets 10th grade). Short sentences, one instruction each.
- **`stretch_goal`**: always include one. A card with nothing left for a
  fast finisher creates the exact idle-time problem Chapter 15's
  mascot-warning calls out.
- **`materials`**: every physical part or software tool actually needed.
  This list feeds `verify_circuit_solution.py`'s consistency check for
  circuit cards -- keep it accurate.
- **Icon illustration**: `front.icon` alone (a single emoji) is a
  placeholder, not a finished front side. Every card also needs a
  detailed `image-prompt.md` and a `docs/cards/TODO.md` entry -- see
  Step 1b in `SKILL.md` and `references/image-prompt-guide.md`. Leave
  `front.icon_image` unset until an image-generation agent has actually
  produced the PNG and picked it off the TODO list.

## Back side ("Solution")

- **`hints`**: 2-4 items, guide toward the *idea*, never give away the
  answer outright. Good hint: "Think about what decides which way current
  flows." Bad hint: "Swap the wires."
- **`solution_steps`**: the real, concrete steps -- these should make
  sense to someone who already read the hints and is still stuck.
- **`solution_code`** (if `solution_type: code`): must be run through
  `scripts/verify_code_solution.py` before the card is considered
  authored, not just after. See `solution-verification-guide.md`.
- **`solution_circuit_description`** (if `solution_type: circuit`): plain
  prose describing exactly what changes and why -- assume the reader
  already tried the front-side steps and is now reading this because they
  couldn't figure out the challenge on their own.
- **`see_also`** (optional): a pointer to related book content -- a
  story, a chapter section, another card -- when one genuinely adds
  value. Don't add it as decoration.

## Reading-level self-check (soft check, not automated)

No readability scorer (e.g. `textstat`) is installed in this
environment. Before finalizing a card, re-read every `steps`/`hints`/
`solution_steps` sentence and ask: is this one action, in one short
sentence, at roughly the book's target grade level? This is a manual
heuristic, not a hard gate -- flag it in review rather than trusting it
silently.

## Print quantities

`print.copies_recommended` follows Chapter 15's established convention:
3 for beginner cards, 2 for intermediate, 1 for advanced (scarcity on
advanced cards is intentional -- it nudges students toward pair
programming per Chapter 15).
