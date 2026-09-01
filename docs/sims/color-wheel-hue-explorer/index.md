---
title: Color Wheel Hue Explorer
description: Drag a marker round a 0-255 color wheel and see the exact RGB triple the wheel() function would return.
image: sims/color-wheel-hue-explorer/color-wheel-hue-explorer.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Color Wheel Hue Explorer

<iframe src="main.html" width="100%" height="447" scrolling="no"></iframe>

[Run the Color Wheel Hue Explorer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Nearly every Moving Rainbow program calls a function named `wheel()`. Give it a
number from 0 to 255 and it hands back a red, green, blue triple. Students copy
that function long before they understand it, which makes the rainbow feel like
magic rather than arithmetic.

It is not magic. The 0-255 range is cut into three ramps of 85. In each ramp one
colour channel fades out while the next fades in, and the third stays at zero.
That is the whole function, and it explains the two things students notice about
the wheel: there is no white or grey anywhere on it, and there are exactly three
pure corners.

Drag the marker and the panel names which of the three branches is running for
the current position, alongside the numbers it returns. The three sample
positions -- 0, 85, and 170 -- are the branch boundaries: pure red, pure green,
pure blue.

## How to Use

- **Drag the marker** around the ring, or type a position in the box below.
- **Show three sample positions** steps through 0, 85, and 170 -- the three pure
  colours where one branch hands over to the next.
- The panel shows the returned R, G, and B values and the branch of `wheel()`
  that produced them.

## Lesson Plan

**Bloom level:** Apply (L3) -- *calculate*

**Learning objective:** Given a position on a 0-255 color wheel, the learner
calculates the resulting RGB color a `wheel()` function would return.

**Before the sim (5 min).** Show the group the `wheel()` function as it appears in
their code, with its three `if` branches, and ask what it does. Expect silence.

**With the sim (10 min).** Press the sample button three times so the class sees
the boundaries. At each one, note that exactly one channel is 255 and the others
are 0. Then drag to a position between two samples and count the non-zero
channels -- always two, never three.

**After the sim (10 min).** Ask students to predict `wheel(42)` on paper. Since 42
is halfway through the first ramp, red should be near 128 and green near 128.
Then check.

**Check for understanding.** Ask: "Which position would give you white?" There
isn't one, and being able to say why -- the function never sets all three
channels at once -- shows the structure has landed.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/color-wheel-hue-explorer/main.html" width="100%" height="447" scrolling="no"></iframe>
```

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

## References

- [Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md) -- the chapter this MicroSim supports.
- [RGB color model](https://en.wikipedia.org/wiki/RGB_color_model) -- how three channels combine into a colour.
- [HSL and HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) -- the hue-based model the wheel approximates.
- [Color wheel](https://en.wikipedia.org/wiki/Color_wheel) -- the older idea the layout borrows from.
- [NeoPixel Loop Pixel Stepper](../neopixel-loop-pixel-stepper/index.md) -- where the value returned here gets written to a physical pixel.
