---
title: MicroPython Loop Pixel Stepper
description: Given a for loop iterating over a NeoPixel strip's pixel indices, the learner demonstrates which physical pixel changes color on each pass through the loop.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# MicroPython Loop Pixel Stepper



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md).

```text
Type: microsim
**sim-id:** neopixel-loop-pixel-stepper<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/moving-rainbow/tree/main/docs/sims/pixel-indexing-explorer

Purpose: Let a learner step through a for loop over a NeoPixel strip one iteration at a time and see exactly which physical pixel index changes on each pass.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a for loop iterating over a NeoPixel strip's pixel indices, the learner demonstrates which physical pixel changes color on each pass through the loop.

Visual elements: A drawn strip of 30 pixel squares above a code panel showing the loop; the current loop variable `i` displayed prominently.

Interactive controls: "Step" button advancing one iteration at a time; "Run" button animating all iterations automatically; "Reset" button; a toggle to start the range at 0 or 1 to demonstrate the off-by-one mistake.

Default parameters: `i` starts unset, range 0-29, all pixels dark.

Behavior: Each "Step" click highlights the current code line, updates the `i` value shown, and colors the matching pixel on the strip; the off-by-one toggle visibly leaves pixel 0 dark for the whole run when enabled.

Implementation notes: p5.js canvas with an array of 30 rectangle objects for pixels; a state machine advancing one index per step or on a timer during "Run."
```

## Related Resources

- [Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md)
