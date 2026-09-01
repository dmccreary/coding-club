---
title: Seasonal LED Pattern Gallery
description: Given a running LED pattern, the learner differentiates which seasonal theme produced it and identifies the code parameter that changed to create it.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Seasonal LED Pattern Gallery



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md).

```text
Type: microsim
**sim-id:** seasonal-led-pattern-gallery<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/moving-rainbow/tree/main/docs/sims/animation-pattern-comparison

Purpose: Let a mentor compare the base Moving Rainbow pattern against its Halloween, holiday, and Fourth of July variants side by side, before choosing one for a session.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a running LED pattern, the learner differentiates which seasonal theme produced it and identifies the code parameter that changed to create it.

Visual elements: Four small animated strip previews running simultaneously, labeled "Rainbow," "Halloween," "Holiday," and "Fourth of July," each 30 pixels wide.

Interactive controls: Click any strip preview to enlarge it and show the two or three code values (palette and timing) that distinguish it from the base rainbow pattern; a shared speed slider affecting all four previews at once.

Default parameters: All four previews running at a moderate default speed.

Behavior: Clicking a preview pauses the others and displays its distinguishing parameters in a side panel; the speed slider updates all four animations' timing together in real time.

Implementation notes: p5.js canvas with four independent pixel-array objects animated on a shared frame counter; each pattern implemented as a small function returning a color per pixel per frame.
```

## Related Resources

- [Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md)
