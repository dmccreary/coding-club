---
title: Anatomy of a Challenge Card
description: Six required parts of a challenge card, and what each one is for.
image: sims/anatomy-of-a-challenge-card/anatomy-of-a-challenge-card.png
status: built
library: Infographic overlay (diagram.js)
bloom_level: Remember (L1)
---

# Anatomy of a Challenge Card

<iframe src="main.html" width="100%" height="990" scrolling="no"></iframe>

[Run the Anatomy of a Challenge Card MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Six parts, and the reason to treat them as *required* rather than as a
suggested layout is what a rack of cards has to do: a student picks up a card
they have never seen and works out, in about three seconds, whether it is for
them and whether they can start it now.

Every part serves that three seconds.

**The coloured border** is readable across the room and from the side of a
rack. It is how a student finds the right difficulty before reading a word.

**The title** is the largest print on the card because it is the only thing
visible when the card is half-covered by another one.

**The materials list** sits above the steps so a student can put the card back
before investing any time in it. A materials list at the bottom is a materials
list read too late.

**The numbered steps** are the body. Numbered rather than bulleted, because
order matters and because "I'm on step 3" is how a student tells a mentor where
they are.

**The stretch goal is boxed and separate** — visibly optional. A student who
finished the card has finished it. The box is what stops the fast finishers
from feeling the card was longer than it was and the slow ones from feeling
they failed.

**The concept tag** is the part mentors add last and value most. It is what
lets you say "anyone still working on repetition, take one of these" and have
it mean something.

## How to Use

- **Hover each of the six markers**, or the labels beside them, for that part
  and why it is where it is.
- Note the order down the card: title, materials, steps, stretch, tag. That is
  the order a student reads them in, and it is not an accident.
- Switch to **Quiz** to be asked instead of told.
- Then look at a real card from the club's rack and find all six.

## Lesson Plan

**Bloom level:** Remember (L1) -- *identify*

**Learning objective:** Given an unlabeled illustration of a challenge card,
the learner identifies each of its required parts and what purpose it serves.

**Before (5 min).** Hand out three real cards and ask what they have in common.
The group will find most of the six.

**With the diagram (10 min).** Name all six, then ask the harder question about
each: what breaks if this part is missing? A card with no materials list gets
started and abandoned; a card with no concept tag cannot be recommended.

**After (30 min).** Everyone writes one card. The constraint that bites is the
step count — a card that needs nine steps is two cards.

**Check for understanding.** Ask: "Which part would you drop if a card was too
crowded?" None of them — but the right answer to the real problem is to split
the card, and a mentor who reaches for that rather than for deleting a field
has understood what the format is for.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/anatomy-of-a-challenge-card/main.html" width="100%" height="990" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 15: Designing a Curriculum With Challenge Cards and Portfolios](../../chapters/15-curriculum-challenge-cards/index.md).

```text
Type: infographic-overlay (callout)
**sim-id:** anatomy-of-a-challenge-card<br/>
**Library:** Interactive Infographic Overlay (diagram.js, annotation-free illustration + numbered callouts)<br/>
**Status:** Specified

Purpose: Show a new mentor exactly what belongs on a well-designed challenge card by labeling each part of an illustrated example card, so "designing challenge cards" becomes a checklist rather than a vague instinct.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given an unlabeled illustration of a challenge card, the learner identifies each of its required parts and what purpose it serves.

Image style: Flat illustration of a single 5x7 inch coding challenge card lying on a table, laminated finish, with a wide 1/4-inch solid green border running around the entire edge of the card (illustrating the beginner-level example; the border is a real structural feature of the card, not an annotation, so it belongs in the base image -- only numbers, leader lines, and the side-panel labels are added by the overlay engine). No other text/labels/numbers baked into the image beyond the card's own printed content (title text, list items), which is the one exception to the overlay engine's "no text" rule, since the card's printed content is the subject being illustrated.

Image dimensions: 900x1260 (portrait, approximating the 5x7 card's real-world aspect ratio)

Layout: side-panel (image left 65%, labels right 35%)

Structures to label (callouts, 6 total, each with name, 1-2 sentence description, approximate position, marker color):
1. "Title" -- top of the card -- color #4A90D9 -- "A short, inviting project name, like 'Rainbow Chase' rather than 'LED Strip Loop Exercise.'"
2. "Colored Border" -- the 1/4-inch border running around the card's edge -- color #2ECC71 -- "Signals difficulty at a glance: green for a Beginner Card, blue for an Intermediate Card, black for an Advanced Card. This example shows a green Beginner Card."
3. "Materials List" -- upper-middle section -- color #7ED6A5 -- "Every physical or software tool needed, checked against actual kit inventory before the session."
4. "Numbered Steps" -- center of the card, the largest section -- color #E67E22 -- "Clear, sequential instructions written at the target track's reading level."
5. "Stretch Goal" -- lower section, visually set apart -- color #9B59B6 -- "An optional extra challenge for a student who finishes early, preventing idle time."
6. "Concept Tag" -- bottom corner -- color #16A085 -- "Names the computational thinking skill or syntax concept the card reinforces, tying back to the skill progression ladder from Chapter 14."

Interactive features: Explore mode (hover/click each numbered marker to reveal its description); Quiz mode (learner is prompted to identify which part of the card serves a named purpose); Edit mode (`?edit=true`) for calibrating marker positions after the image is generated

Implementation: Interactive Infographic Overlay Guide (callout engine) -- `diagram.js` + `style.css` render numbered markers and leader lines over the generated card illustration; `data.json` holds the 6 callouts with x/y percentage positions
```

## References

- [Chapter 15: Designing a Curriculum With Challenge Cards and Portfolios](../../chapters/15-curriculum-challenge-cards/index.md) -- the chapter this MicroSim supports.
- [Generic vs AI Challenge Card](../generic-vs-ai-challenge-card/index.md) -- which of these six a customisation may change.
- [Three Curriculum Tracks](../three-curriculum-tracks/index.md) -- what the border colour is telling a student.
- [The Tangible Reward Ladder](../tangible-reward-ladder/index.md) -- where the card system sits among the club's other recognition tools.
- [Task analysis](https://en.wikipedia.org/wiki/Task_analysis) -- breaking an activity into ordered steps.
