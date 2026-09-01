---
title: Anatomy of a Challenge Card
description: Given an unlabeled illustration of a challenge card, the learner identifies each of its required parts and what purpose it serves.
status: scaffold
library: Interactive Infographic Overlay (diagram.js, annotation-free illustration + numbered callouts)
bloom_level: Remember (L1)
---

# Anatomy of a Challenge Card



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 15: Designing a Curriculum With Challenge Cards and Portfolios](../../chapters/15-curriculum-challenge-cards/index.md)
