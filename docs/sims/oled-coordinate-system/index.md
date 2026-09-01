---
title: OLED Coordinate System
description: Find any (x, y) pixel on a 128x64 OLED display and see the MicroPython command that lights it.
image: sims/oled-coordinate-system/oled-coordinate-system.png
status: built
library: p5.js
bloom_level: Understand (L2)
---

# OLED Coordinate System

<iframe src="main.html" width="100%" height="432" scrolling="no"></iframe>

[Run the OLED Coordinate System MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

The first thing that surprises a student writing to a small OLED screen is that
y counts **downward**. Pixel (0,0) is the top-left corner, not the bottom-left
corner they met in maths class. Half the "my text is off the screen" bugs in a
club session trace back to that one inversion.

Move the pointer over the grid and the panel shows the coordinate under it
alongside the MicroPython command that would light that pixel. The display is
128 pixels wide and 64 tall, so the legal range is x from 0 to 127 and y from 0
to 63 -- the corner labels on the grid are there so a student can check
themselves without asking a mentor.

## How to Use

- **Move the pointer over the grid** to read the coordinate under it and the
  matching MicroPython command.
- **Mode** switches between drawing a single pixel and other primitives.
- **Clear** empties the display and resets the lit-pixel count.

## Lesson Plan

**Bloom level:** Understand (L2) -- *identify*

**Learning objective:** Given an (x, y) coordinate, the learner identifies which
pixel on a 128x64 OLED display will be affected by a drawing command.

**Before the sim (5 min).** Draw a rectangle on the board and ask a student to
mark "the origin." Most mark the bottom-left. Leave that mark up -- you are about
to contradict it, and the contradiction is the lesson.

**With the sim (10 min).** Ask the group to predict where (0,0) is, then hover to
check. Then ask for (127,63), (64,32), and a deliberately illegal one such as
(200,10). The last is the useful failure: nothing is there, because the display
is only 128 wide.

**After the sim (10 min).** Have each student write the coordinates of the four
corners and the exact centre from memory, then verify with the sim.

**Check for understanding.** Ask: "Your text is drawn at y=70 and nothing shows
up. Why?" A learner who has met the objective says the display only has 64 rows,
so y=70 is off the bottom.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/oled-coordinate-system/main.html" width="100%" height="432" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: microsim
**sim-id:** oled-coordinate-system<br/>
**Library:** p5.js<br/>
**Status:** Reused<br/>
**Source:** https://dmccreary.github.io/learning-micropython/sims/oled-coordinate-system/<br/>
**Source Repo:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/oled-coordinate-system

Reused from the MicroSim catalog (WHAT match score 0.77). Learning objective: Given an (x, y) coordinate, the learner identifies which pixel on a 128x64 OLED display will be affected by a drawing command (Remember).
```

## References

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md) -- the chapter this MicroSim supports.
- [Raster graphics](https://en.wikipedia.org/wiki/Raster_graphics) -- why pixel displays index from the top-left.
- [OLED](https://en.wikipedia.org/wiki/OLED) -- how the display technology in these modules works.
- [SSD1306](https://en.wikipedia.org/wiki/OLED) -- the controller chip behind the common 128x64 club module.

## Credits

This MicroSim is adapted from
[oled-coordinate-system](https://dmccreary.github.io/learning-micropython/sims/oled-coordinate-system/) in the *learning-micropython* project by the same author
([source](https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/oled-coordinate-system)). It is used here unchanged; the club context is supplied by the lesson plan above.
