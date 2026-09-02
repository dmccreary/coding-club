---
title: "Static Electricity Precaution Checklist"
description: "One room, five things -- two of them safe to touch, three of them ways to build a charge."
image: sims/static-electricity-precaution-checklist/static-electricity-precaution-checklist.png
status: built
library: Infographic overlay (diagram.js)
bloom_level: Remember (L1)
---

# Static Electricity Precaution Checklist

<iframe src="main.html" width="100%" height="598" scrolling="no"></iframe>

[Run the Static Electricity Precaution Checklist MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Static damage is the failure mode nobody sees happen. A board zapped by a
walk across carpet usually still works — for a while. It fails weeks later,
intermittently, and the club concludes the board was faulty.

Five things in this room, and the split is not intuitive:

**Safe to touch first:** the bare metal table leg, which is grounded through the
floor and will take a charge off you harmlessly. And the anti-static bag, whose
silvery coating conducts charge around its contents rather than through them.

**Builds a charge:** the carpeted floor, the plastic chair somebody has just
slid back, and — the one people miss — the bare board left out of its bag on
the table, which is exposed to every charge that reaches it.

**The rule is one sentence.** *Touch the metal table leg, then touch the
board.* It takes a second, it costs nothing, and it is the entire practice.

Two details worth knowing. Dry weather makes it much worse, so a winter session
in a heated room is the risky one. And the anti-static bag only works while the
board is inside it — a bag on the table with the board next to it is doing
nothing at all.

## How to Use

- **Hover each of the five markers.** Before you read the answer, guess whether
  that item reduces static risk or creates it.
- Markers 2 and 3 are the safe ones. Everything else in the scene is a way to
  build or hold a charge.
- Marker 1 is the one that catches people: a board out of its bag is not
  neutral, it is exposed.
- Switch to **Quiz** to be asked instead of told.

## Lesson Plan

**Bloom level:** Remember (L1) -- *identify*

**Learning objective:** Given an illustrated classroom scene, the learner
identifies which surfaces are safe to touch before handling a board and which
increase static risk.

**Before (3 min).** Ask whether anybody has been zapped by a door handle. That
is the same phenomenon at a scale you can feel; a board is damaged by far less
than you can feel.

**With the scene (5 min).** Guess-then-check each of the five. The bare board
and the plastic chair are the two that surprise people.

**After (5 min).** Walk the actual club room and find the grounded metal thing
nearest each bench. If there isn't one, that is worth knowing before the first
kit comes out of its bag.

**Check for understanding.** Ask: "A board has been sitting on the table all
session. Is it safe to pick up?" It is safe for the board only if you ground
yourself first — being out of the bag does not make it neutral, it makes it
exposed.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/static-electricity-precaution-checklist/main.html" width="100%" height="598" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: infographic
**sim-id:** static-electricity-precaution-checklist<br/>
**Library:** Interactive Infographic Overlay (checklist overlay, illustrated classroom scene + clickable hotspots)<br/>
**Status:** Specified

Purpose: Let a mentor mentally rehearse the touch-first habit against a realistic classroom scene before the first session.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given an illustrated classroom scene, the learner identifies which surfaces are safe to touch before handling a board and which increase static risk.

Image style: Flat illustration of a classroom table scene: a carpeted floor, a student's hand, a microcontroller board in an anti-static bag, a metal table leg, and a plastic chair

Image dimensions: 1000x650 (landscape)

Hotspots (5 total, each with label, color, correct/incorrect status): 1. "Metal table leg" — green — safe to touch first; 2. "Anti-static bag" — green — correct storage; 3. "Carpeted floor" — amber — increases static buildup, not dangerous itself; 4. "Plastic chair after sliding" — amber — a common charge-building action; 5. "Bare board out of its bag" — red — should be avoided when not in use

Interactive features: Click each hotspot to reveal a one-sentence explanation and a green-check or amber-caution icon; a running "safety score" updates as the learner clicks all five

Implementation: Interactive Infographic Overlay Guide (callout engine) — `diagram.js` renders clickable hotspots with color-coded feedback over the generated illustration
```

## References

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md) -- the chapter this MicroSim supports.
- [Electrical Safety Rules Poster](../electrical-safety-rules-poster/index.md) -- the static panel there, in the wider rule set.
- [Session Room Safety and Logistics Map](../session-room-safety-map/index.md) -- setting the room up so this is easy.
- [Club Inventory Lifecycle Workflow](../club-inventory-lifecycle-workflow/index.md) -- keeping boards in their bags between sessions.
- [Electrostatic discharge](https://en.wikipedia.org/wiki/Electrostatic_discharge) -- why a charge you cannot feel still damages a chip.
