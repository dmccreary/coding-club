---
title: Color Wheel Hue Explorer
description: Given a position on a 0-255 color wheel, the learner calculates the resulting RGB color a wheel() function would return.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Color Wheel Hue Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md).

```text
Type: microsim
**sim-id:** color-wheel-hue-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/moving-rainbow/tree/main/docs/sims/hsv-color-explorer

Purpose: Let a learner drag a position around a 0-255 color wheel and see the matching RGB values a wheel() function would return, before writing or reading that function in code.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given a position on a 0-255 color wheel, the learner calculates the resulting RGB color a wheel() function would return.

Visual elements: A circular color wheel with a draggable position marker; a swatch showing the resulting color; a readout of the R, G, B values.

Interactive controls: Draggable marker around the wheel; numeric input as an alternative to dragging; a "Show three sample positions" button highlighting 0, 85, and 170.

Default parameters: Marker starts at position 0 (red).

Behavior: Dragging the marker updates the RGB readout and swatch continuously; the sample-positions button steps through the three reference colors from the worked example.

Implementation notes: p5.js canvas with an HSV-to-RGB conversion function driven by the marker's angle; draggable marker using mouse-drag detection along the wheel's circumference.
```

## Related Resources

- [Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md)
