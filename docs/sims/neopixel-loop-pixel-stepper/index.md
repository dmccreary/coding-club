---
title: "NeoPixel Loop Pixel Stepper"
description: "Step a for loop over a 30-pixel strip one iteration at a time, and watch an off-by-one error leave the first pixel dark."
image: sims/neopixel-loop-pixel-stepper/neopixel-loop-pixel-stepper.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# NeoPixel Loop Pixel Stepper

<iframe src="main.html" width="100%" height="467" scrolling="no"></iframe>

[Run the NeoPixel Loop Pixel Stepper MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A NeoPixel strip is the first place most students meet an off-by-one error with
a consequence they can see from across the room. The loop looks right, the code
runs without an error, and one end of the strip stays dark.

Step the loop one pass at a time. Each press advances the loop variable `i` and
lights the matching physical pixel, with the executing line highlighted in the
code panel. Nothing animates on its own, so there is time to predict which pixel
is next before pressing again.

Then tick **Start the range at 1**. The code still runs. The strip still lights.
But pixel 0 is boxed in red for the whole run and never comes on, because
`range(1, 30)` yields 29 values rather than 30. Seeing the bug produce a
*plausible* result is the lesson -- it is why "it ran without an error" is not the
same as "it is correct." 

## How to Use

- **Step** advances the loop by one iteration.
- **Run** animates the whole loop; press again to pause.
- **Reset** clears the strip and puts the loop variable back to unset.
- **Start the range at 1** switches to `range(1, 30)`, the classic off-by-one, and
  marks the pixel that never lights.

## Lesson Plan

**Bloom level:** Apply (L3) -- *demonstrate*

**Learning objective:** Given a for loop iterating over a NeoPixel strip's pixel
indices, the learner demonstrates which physical pixel changes color on each pass
through the loop.

**Before the sim (5 min).** Write `for i in range(1, 30)` on the board next to a
30-pixel strip and ask how many pixels will light. Collect answers before
revealing anything.

**With the sim (10 min).** Step the correct version four or five times, asking for
a prediction before each press. Then reset, tick the off-by-one option, and run
it. The strip looks fine unless you are watching the very first pixel.

**After the sim (15 min).** Ask each pair to write the range that would light
only the last ten pixels, then check it by stepping.

**Check for understanding.** Ask: "`range(0, 30)` gives you how many numbers, and
what is the largest?" Thirty, and 29. A learner who answers "30" to the second
part has found the exact misconception this sim exists to correct.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/neopixel-loop-pixel-stepper/main.html" width="100%" height="467" scrolling="no"></iframe>
```

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

## References

- [Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md) -- the chapter this MicroSim supports.
- [Off-by-one error](https://en.wikipedia.org/wiki/Off-by-one_error) -- the general bug and why it is so persistent.
- [Zero-based numbering](https://en.wikipedia.org/wiki/Zero-based_numbering) -- why the first pixel is 0 and not 1.
- [For loop](https://en.wikipedia.org/wiki/For_loop) -- the control structure being stepped.
- [Color Wheel Hue Explorer](../color-wheel-hue-explorer/index.md) -- the `wheel()` call inside the loop body.
