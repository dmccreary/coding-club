---
title: "Seven Segment Display Explorer"
description: "Choose a digit and see exactly which of the seven segments switch on to draw it."
image: sims/seven-segment-display/seven-segment-display.png
status: built
library: p5.js
bloom_level: Understand (L2)
---

# Seven Segment Display Explorer

<iframe src="main.html" width="100%" height="472" scrolling="no"></iframe>

[Run the Seven Segment Display Explorer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A seven segment display has no idea what a number is. It has seven bars, each
wired to its own pin, and a digit is just a particular set of those bars being on
at the same time. Making that concrete is the whole point of this sim.

Move the digit slider and watch the panel on the left: each of the seven
segments, named **a** through **g**, reports ON or OFF. The digit 8 turns on all
seven. The digit 1 turns on only **b** and **c**, which is why 1 looks
off-centre on cheap clocks -- it is drawn with the two right-hand bars and
nothing else.

That naming scheme is not arbitrary trivia. When a student wires a display and
one bar stays dark, "segment e is not lighting" is a debuggable statement;
"the bottom left bit is broken" is not.

## How to Use

- **Digit** steps through 0 to 9 and updates which segments are on.
- **Size** scales the drawing, which is useful when projecting for a whole group.
- The **Segment Status** list on the left names each segment and its state.

## Lesson Plan

**Bloom level:** Understand (L2) -- *identify*

**Learning objective:** Given a digit 0 to 9, the learner identifies which of the
seven segments must be lit to display it.

**Before the sim (5 min).** Draw a figure-eight of seven bars on the board and
ask the group to shade in the ones needed for a 7. Expect disagreement about
whether the top bar counts.

**With the sim (10 min).** Step through every digit. Ask which digit uses the
fewest segments (1, using two) and which uses the most (8, using all seven).
Then ask which two digits differ by exactly one segment -- 6 and 8, and 9 and 8 --
which is why a single dead segment can make a display lie rather than look
broken.

**After the sim (10 min).** Have students write the seven on/off values for their
own house number, one digit at a time, using the a-to-g names.

**Check for understanding.** Ask: "Segment f has failed. Which digits still look
correct?" Working that out requires reading the pattern rather than recalling it,
and it is exactly the reasoning a student needs when a real display misbehaves.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/seven-segment-display/main.html" width="100%" height="472" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: microsim
**sim-id:** seven-segment-display<br/>
**Library:** p5.js<br/>
**Status:** Reused<br/>
**Source:** https://dmccreary.github.io/microsims/sims/seven-segment-display/<br/>
**Source Repo:** https://github.com/dmccreary/microsims/tree/main/docs/sims/seven-segment-display

Reused from the MicroSim catalog (WHAT match score 0.75). Learning objective: Given a digit 0-9, the learner identifies which of the seven segments (a-g) must be lit to display it (Remember).
```

## References

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md) -- the chapter this MicroSim supports.
- [Seven-segment display](https://en.wikipedia.org/wiki/Seven-segment_display) -- the standard a-to-g segment naming and its history.
- [Seven-segment display character representations](https://en.wikipedia.org/wiki/Seven-segment_display_character_representations) -- how letters are approximated on the same seven bars.
- [Light-emitting diode](https://en.wikipedia.org/wiki/Light-emitting_diode) -- each segment is an LED, so each needs its own current limit.

## Credits

This MicroSim is adapted from
[seven-segment-display](https://dmccreary.github.io/microsims/sims/seven-segment-display/) in the *microsims* project by the same author
([source](https://github.com/dmccreary/microsims/tree/main/docs/sims/seven-segment-display)). It is used here unchanged; the club context is supplied by the lesson plan above.
