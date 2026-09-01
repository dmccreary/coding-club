---
title: The Tangible Reward Ladder
description: Given an unlabeled illustration of a six-rung ladder, the learner identifies which reward tool sits at each rung and what scale of accomplishment it marks.
status: scaffold
library: Interactive Infographic Overlay (diagram.js, annotation-free illustration + numbered callouts)
bloom_level: Understand (L2)
---

# The Tangible Reward Ladder



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 26: Motivation, Badges, and Growth Mindset Coaching](../../chapters/26-motivation-badges-growth-mindset/index.md).

```text
Type: infographic-overlay (callout)
**sim-id:** tangible-reward-ladder<br/>
**Library:** Interactive Infographic Overlay (diagram.js, annotation-free illustration + numbered callouts)<br/>
**Status:** Specified

Purpose: Show a new mentor how the six tangible reward tools in this chapter fit together as an escalating ladder, from a single completed challenge card up to a full track certificate, so the choice of which reward to use for which moment becomes a checklist rather than guesswork.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: summarize

Learning objective: Given an unlabeled illustration of a six-rung ladder, the learner identifies which reward tool sits at each rung and what scale of accomplishment it marks.

Image style: Flat illustration of a six-rung wooden ladder leaning against a wall, each rung a different color matching the reward it represents, with small icons resting on each rung (a card icon, a badge icon, a sticker sheet icon, a small map icon, a poster-square icon, and a ribboned certificate icon at the very top). No text baked into the image beyond the icons themselves; all labels are added by the overlay engine.

Image dimensions: 900x1200 (portrait)

Layout: side-panel (image left 65%, labels right 35%)

Structures to label (callouts, 6 total, each with name, 1-2 sentence description, approximate position, marker color):
1. "Challenge Card System" -- bottom rung -- color #4A90D9 -- "Marks choosing and starting a single challenge; the entry point of the whole ladder."
2. "Badge Design" -- second rung -- color #F5A623 -- "Marks one specific skill demonstrated and explained, named after exactly what it proves."
3. "Sticker Reward System" -- third rung -- color #E67E22 -- "Marks a small, immediate moment of progress, reserved for real completions rather than every attempt."
4. "Learning Map Display" -- fourth rung -- color #7ED6A5 -- "Marks a student's growing personal path, visible to them without ranking them against peers."
5. "Progress Tracker Poster" -- fifth rung -- color #9B59B6 -- "Marks the whole club's shared momentum, one filled square at a time."
6. "Certificate Of Completion" -- top rung -- color #16A085 -- "Marks an entire track finished -- the largest, least frequent reward on the ladder."

Interactive features: Explore mode (hover/click each rung to reveal its description); Quiz mode (learner is shown a short scenario, such as "a student just explained how their loop works to a mentor," and asked to click the rung it belongs on)

Implementation: Interactive Infographic Overlay Guide (callout engine) -- `diagram.js` + `style.css` render numbered markers and leader lines over the generated ladder illustration; `data.json` holds the 6 callouts with x/y percentage positions plus a bank of quiz-mode scenarios
```

## Related Resources

- [Chapter 26: Motivation, Badges, and Growth Mindset Coaching](../../chapters/26-motivation-badges-growth-mindset/index.md)
