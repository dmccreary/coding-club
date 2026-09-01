---
title: LED Anatomy
description: Given a zoomed illustration of an LED, the learner identifies the anode, cathode, and flat-edge marking used to orient it correctly.
status: scaffold
library: Interactive Infographic Overlay (diagram.js, callout engine)
bloom_level: Remember (L1)
---

# LED Anatomy



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: infographic
**sim-id:** led-anatomy<br/>
**Library:** Interactive Infographic Overlay (diagram.js, callout engine)<br/>
**Status:** Specified

Purpose: Let a learner identify anode, cathode, and the flat-edge marking on a zoomed illustration of a real LED before handling one.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given a zoomed illustration of an LED, the learner identifies the anode, cathode, and flat-edge marking used to orient it correctly.

Image style: Close-up flat illustration of a single 5mm LED, legs extended, with a visible length difference between the two legs and a flat edge on the dome

Image dimensions: 800x600 (landscape)

Callouts (4 total): 1. "Anode (longer leg)" color #4A90D9; 2. "Cathode (shorter leg)" color #E67E22; 3. "Flat edge" on the dome, color #9B59B6; 4. "Light-emitting dome" color #F5A623

Interactive features: Hover or click each callout to reveal a one-sentence explanation; a "Flip It" button shows the same LED reversed so learners practice recognizing orientation from either side

Implementation: Interactive Infographic Overlay Guide (callout engine) — `diagram.js` + `style.css` render numbered markers over the generated LED illustration
```

## Related Resources

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md)
