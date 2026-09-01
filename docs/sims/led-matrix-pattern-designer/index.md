---
title: LED Matrix Pattern Designer
description: Given an 8x8 LED matrix grid, the learner constructs a simple pattern or letter by toggling individual pixels and reads off the resulting byte values.
status: scaffold
library: p5.js
bloom_level: Create (L6)
---

# LED Matrix Pattern Designer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: microsim
**sim-id:** led-matrix-pattern-designer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/linear-algebra/tree/main/docs/sims/image-matrix-visualizer

Purpose: Let a learner build an 8x8 pattern by toggling individual pixels and see the matching byte-per-row values update live.

Bloom Taxonomy: Create (L6)
Bloom Taxonomy Verb: construct

Learning objective: Given an 8x8 LED matrix grid, the learner constructs a simple pattern or letter by toggling individual pixels and reads off the resulting byte values.

Canvas layout: Left (65%) shows a clickable 8x8 grid of squares representing LEDs; right (35%) shows the eight byte values, one per row, in binary and hex.

Interactive controls: Click any grid cell to toggle it on/off; "Clear" button; a dropdown of preset patterns (heart, arrow, smiley, letter A) to load as a starting point.

Default parameters: Blank grid on load.

Behavior: Clicking a cell toggles its LED state and immediately recalculates and redisplays that row's byte value in both binary and hexadecimal.

Implementation notes: p5.js 2D boolean array for the 8x8 grid; byte value computed per row by summing bit weights of "on" cells; click detection maps mouse position to the nearest grid cell.
```

## Related Resources

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md)
