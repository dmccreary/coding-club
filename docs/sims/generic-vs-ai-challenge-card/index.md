---
title: Template Card vs. AI-Customized Card
description: Given a generic and an AI-customized challenge card teaching the same concept, the learner compares them to identify what customization changed and what the required format kept constant.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Template Card vs. AI-Customized Card



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md)
