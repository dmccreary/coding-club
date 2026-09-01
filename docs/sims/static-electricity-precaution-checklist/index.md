---
title: Static Electricity Precaution Checklist
description: Given an illustrated classroom scene, the learner identifies which surfaces are safe to touch before handling a board and which increase static risk.
status: scaffold
library: Interactive Infographic Overlay (checklist overlay, illustrated classroom scene + clickable hotspots)
bloom_level: Remember (L1)
---

# Static Electricity Precaution Checklist



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md)
