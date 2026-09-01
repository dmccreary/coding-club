---
title: Breadboard Tie-Point Explorer
description: Given a labeled breadboard diagram, the learner identifies which holes are electrically connected to a clicked hole.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Breadboard Tie-Point Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md)
