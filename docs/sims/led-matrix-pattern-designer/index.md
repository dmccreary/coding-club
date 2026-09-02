---
title: "LED Matrix Pattern Designer"
description: "Draw on an 8x8 grid and watch the eight bytes that would produce it appear beside the picture."
image: sims/led-matrix-pattern-designer/led-matrix-pattern-designer.png
status: built
library: p5.js
bloom_level: Create (L6)
---

# LED Matrix Pattern Designer

<iframe src="main.html" width="100%" height="542" scrolling="no"></iframe>

[Run the LED Matrix Pattern Designer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

An 8x8 LED matrix is driven by eight bytes, one per row. That sentence is
usually where students stop understanding, because a byte looks like a code you
have to look up.

It is not a code. **A row of lit pixels *is* a binary number.** Draw a row with
the two outer pixels off and the middle six on, and the byte is `0b01111110`.
You can read that number off the picture without doing any arithmetic — which
is the realisation the sim exists to hand over.

**Bit order is the one thing to get right.** Column 0 is the leftmost pixel and
carries bit 7, the most significant. That is what makes the binary string read
left to right in the same order the pixels do. Get it backwards and every
pattern comes out mirrored — the classic first bug, and the reason a heart
looks fine and a letter R does not.

Hex is just shorthand for the same bits. `0b01111110` is `0x7E` because each
hex digit covers exactly four bits: `0111` is 7, `1110` is E. Once a student
sees the split, hex stops being a second thing to learn.

The line at the bottom of the panel is the actual list you would paste into a
sketch. Design a pattern here, copy those eight values, and the hardware draws
what is on screen.

## How to Use

- **Click** any LED to toggle it, or **drag** across the grid to paint.
- Watch one row's byte change as you toggle a single pixel in it. Toggling the
  leftmost pixel changes the byte by 128; the rightmost by 1.
- Load **Heart** from the presets and read its bytes: three rows of `0xFF`, then
  a shrinking pyramid. The picture and the numbers are the same information.
- **Invert** flips every pixel, which flips every bit — each byte becomes
  255 minus itself.
- **Clear** empties the grid.

## Lesson Plan

**Bloom level:** Create (L6) -- *construct*

**Learning objective:** Given an 8x8 LED matrix grid, the learner constructs a
simple pattern or letter by toggling individual pixels and reads off the
resulting byte values.

**Before the sim (5 min).** Show eight hex values on the board and ask what
they draw. Nobody can say. Then show the picture. The gap is the motivation.

**With the sim (20 min).** Everyone designs their own initial. The
constraint — eight by eight, no diagonals that read cleanly, some letters
simply do not fit — is the design problem, and it is a real one.

**After the sim (25 min).** Load the patterns onto real hardware. Then run the
exchange: each student hands their eight hex values to a partner, who types
them in without seeing the picture. If it comes out mirrored, the bit order
lesson has just landed the hard way.

**Check for understanding.** Ask: "You toggle the leftmost LED in a row. By how
much does that row's byte change?" 128. A student who says 1 has the bit order
backwards, and their patterns will come out mirrored.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/led-matrix-pattern-designer/main.html" width="100%" height="542" scrolling="no"></iframe>
```

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

## References

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md) -- the chapter this MicroSim supports.
- [Seasonal LED Pattern Gallery](../seasonal-led-pattern-gallery/index.md) -- patterns designed this way, used in a project.
- [OLED Coordinate System](../oled-coordinate-system/index.md) -- the same pixel-addressing idea on a bigger display.
- [Binary number](https://en.wikipedia.org/wiki/Binary_number) -- place value, which is all a row byte is.
- [Hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) -- why one hex digit is exactly four bits.
