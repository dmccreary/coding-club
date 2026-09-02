---
title: "Generic vs AI Challenge Card"
description: "The same repeat-block lesson, twice -- and the three fields customisation is allowed to touch."
image: sims/generic-vs-ai-challenge-card/generic-vs-ai-challenge-card.png
status: built
library: p5.js
bloom_level: Analyze (L4)
---

# Generic vs AI Challenge Card

<iframe src="main.html" width="100%" height="582" scrolling="no"></iframe>

[Run the Generic vs AI Challenge Card MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

The same concept, twice. Both cards teach the repeat block, in the same three
moves.

This comparison is worth making because *"AI can customise our materials"*
gets heard as *"AI can rewrite our materials"*, and those are very different
claims with very different risks.

**What changed: three fields.** The title, the example theme running through
every step, and the stretch goal wording. That is a re-skin of the example, not
a new lesson.

**What stayed fixed: the format.** Green border, concept tag, materials line,
three steps. That format is what makes a rack of cards usable — a student picks
up a card they have never seen and already knows where the concept tag is, what
they need, and roughly how long it will take.

**A customisation that changed the format would not be a better card. It would
be a card that no longer belongs to the set.** That is the line to hold when
somebody suggests letting a tool generate cards freely: the format is not
bureaucratic overhead, it is the thing that makes fifty cards usable instead of
fifty separate things to read.

Switch themes to see three equally valid customisations of the same underlying
card. None of them is more correct than the others, which is the other half of
the point: the customisation is about the student in front of you, and there
is no single right answer to produce.

One practical note: the concept tag staying identical is what lets a mentor
say "anyone still working on repetition, take one of these" and have it be
true of both cards.

## How to Use

- Read both cards first. They teach the same thing, in the same order.
- Press **Highlight what changed** — three fields, all of them examples.
- Press **Highlight what stayed fixed** — the border, tag, materials line, and
  step count, marked on *both* cards.
- Switch **Theme** for two more customisations. Nothing structural moves.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *compare*

**Learning objective:** Given a generic and an AI-customised challenge card
teaching the same concept, the learner compares them to identify what
customisation changed and what the required format kept constant.

**Before the sim (5 min).** Ask what an AI could usefully change about a
challenge card. Answers usually range wider than three fields, which sets up
the comparison.

**With the sim (10 min).** Run both highlights, then ask the harder question:
which fields *should* an AI never be allowed to change, and why? The concept
tag is the interesting case — changing it silently breaks the rack.

**After the sim (25 min).** Customise one real card by hand for one real
student's interest, keeping the format. Doing it manually first is what makes
it obvious what a tool would and would not be adding.

**Check for understanding.** Ask: "An AI generates a card with four steps
instead of three, and it is a genuinely good activity. Do you use it?" Not as a
challenge card — either adapt it to the format or file it as something else. A
set whose format is optional is not a set.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/generic-vs-ai-challenge-card/main.html" width="100%" height="582" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md).

```text
Type: microsim
**sim-id:** generic-vs-ai-challenge-card<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner compare a generic template challenge card against an AI-customized version of the same underlying concept, to see exactly which fields changed and which stayed fixed by chapter 15's format.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: compare

Learning objective: Given a generic and an AI-customized challenge card teaching the same concept, the learner compares them to identify what customization changed and what the required format kept constant.

Instructional Rationale: This is an Analyze-level compare objective, so the sim shows both full card texts side by side with the differing fields visually highlighted, rather than animating a generation process the learner cannot meaningfully inspect.

Canvas layout:
- Left (300px): Generic template card -- "Loop Practice," sports-themed example, standard stretch goal
- Right (300px): AI-customized card -- "Trick Combo Machine," skateboarding-themed example, same underlying "repeat" block concept
- Bottom (100px): toggle controls and a highlight-differences button

Visual elements:
- Both cards rendered in the same 5x7 layout from chapter 15's anatomy diagram: title, green border, materials list, numbered steps, stretch goal, concept tag
- Differing text (title, example theme, stretch-goal wording) shown in the customized card with a highlighted background; identical structural fields (border color, concept tag, step count) shown with a matching outline on both cards

Interactive controls:
- Button: "Highlight What Changed" -- highlights the differing fields on both cards simultaneously
- Button: "Highlight What Stayed Fixed" -- highlights the border, concept tag, and format that chapter 15 requires regardless of customization
- Dropdown: switch the customization theme (Skateboarding, Music, Basketball) to regenerate the right-hand card with a different but equally valid customization

Default parameters: No highlight active; theme = Skateboarding

Implementation notes: p5.js canvas with createButton for the two highlight toggles and createSelect for the theme dropdown; each theme's customized card text lives in a small lookup object so switching themes updates the right card's text without altering the left template card.
```

## References

- [Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md) -- the chapter this MicroSim supports.
- [Anatomy of a Challenge Card](../anatomy-of-a-challenge-card/index.md) -- the format both cards obey.
- [AI Lesson Customization Workflow](../ai-lesson-customization-workflow/index.md) -- how a customised card gets produced and checked.
- [Bias and Privacy Risk Sorter](../bias-privacy-risk-sorter/index.md) -- what to check before letting a tool near student interests.
- [Differentiated instruction](https://en.wikipedia.org/wiki/Differentiated_instruction) -- the teaching idea customisation is serving.
