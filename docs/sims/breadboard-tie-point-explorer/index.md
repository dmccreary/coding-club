---
title: "Breadboard Tie Point Explorer"
description: "Click any hole on a half-size breadboard and every hole electrically tied to it lights up."
image: sims/breadboard-tie-point-explorer/breadboard-tie-point-explorer.png
status: built
library: p5.js
bloom_level: Remember (L1)
---

# Breadboard Tie Point Explorer

<iframe src="main.html" width="100%" height="642" scrolling="no"></iframe>

[Run the Breadboard Tie Point Explorer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A breadboard is already wired before you touch it. Under the white plastic
are metal clips that tie certain holes together, and almost every
first-night hardware failure comes from guessing that wiring wrong.

There are only two rules, and this sim makes both visible:

**A tie column is five holes, not ten.** Rows a-e of column 12 are one
connection. Rows f-j of column 12 are a *different* connection. The grey
channel down the middle is a wall, not a decoration -- it exists so a chip
can straddle it with its two rows of legs on separate nets.

**A power rail is one connection running the whole length of the board.**
The holes come in groups of five with a gap between groups, which makes
them look like separate sections. They are not. Click any rail hole and
watch the entire strip light up.

One detail worth pointing out while the **Show all rails** toggle is on:
there are *four* rails, not two. The top pair and the bottom pair are
electrically separate. A circuit powered from the top rails gets nothing
from the bottom rails until somebody adds a jumper wire between them --
which is exactly the wire the other circuits in this chapter run at
column 19.

## How to Use

- **Click any hole** to highlight its whole connected group in amber.
- Click a hole in **rows a-e**, then the hole directly below it in **rows f-j**.
  Same column number, two different groups. That is the center channel.
- Turn on **Show all rails** to see all four power rails at once in blue.
- **Clear selection** removes the amber highlight.

## Lesson Plan

**Bloom level:** Remember (L1) -- *identify*

**Learning objective:** Given a labeled breadboard diagram, the learner
identifies which holes are electrically connected to a clicked hole.

**Before the sim (5 min).** Hand out real breadboards if you have them and ask
the group to guess which holes are connected. Collect two or three competing
guesses on the whiteboard without saying which is right.

**With the sim (10 min).** Test each guess by clicking. The productive surprise
is the center channel: nearly everyone assumes a column runs the full height of
the board.

**After the sim (10 min).** Give each student a component with two legs and ask
where the legs must go so the component is *not* shorted out. Both legs in the
same column is the mistake to catch -- the sim makes it obvious why nothing
happens when you do that.

**Check for understanding.** Point at hole `d7` and ask: "Name every other hole
connected to this one." The answer is `a7`, `b7`, `c7`, and `e7` -- five holes,
stopping at the channel. A student who includes `f7` has not yet got it.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/breadboard-tie-point-explorer/main.html" width="100%" height="642" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: microsim
**sim-id:** breadboard-tie-point-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/stem-robots/tree/main/docs/sims/breadboard-layout-explorer

Purpose: Let a mentor click any hole on a drawn breadboard and instantly see every other hole it is electrically connected to.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given a labeled breadboard diagram, the learner identifies which holes are electrically connected to a clicked hole.

Visual elements: A full-size breadboard drawing with two power rails (top and bottom) and the central five-hole columns, rendered at real proportions

Interactive controls: Click any hole to highlight, in one color, every hole tied to it; a "Show all rails" toggle that highlights both power rails at once in a second color

Default parameters: No hole selected on load; clicking any hole triggers the highlight

Behavior: On click, redraw the board with the clicked hole's full connected group highlighted and a text label reading either "Power rail" or "Column {n}"

Implementation notes: p5.js grid rendered from a 2D array encoding each hole's connection-group id; click detection maps mouse coordinates to the nearest hole
```

## References

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md) -- the chapter this MicroSim supports.
- [Blinking LED Breadboard Circuit](../blinking-led-breadboard-circuit/index.md) -- the same board with a working circuit on it.
- [Push Button Digital Input Circuit](../push-button-digital-input-circuit/index.md) -- a second circuit built on these tie points.
- [Breadboard](https://en.wikipedia.org/wiki/Breadboard) -- how the clips underneath are actually made.
- [Dual in-line package](https://en.wikipedia.org/wiki/Dual_in-line_package) -- the chip format the center channel exists for.
