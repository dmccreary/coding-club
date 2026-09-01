---
title: Potentiometer Analog Input Explorer
description: Given a potentiometer's knob position, the learner demonstrates how turning it produces a proportional analog input reading across a continuous range.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Potentiometer Analog Input Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: microsim
**sim-id:** potentiometer-analog-input-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/adc-potentiometer-explorer

Purpose: Let a learner turn a simulated potentiometer knob and watch the continuous analog reading change in real time, contrasted against the two-value digital reading.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a potentiometer's knob position, the learner demonstrates how turning it produces a proportional analog input reading across a continuous range.

Visual elements: A drawn rotary knob the learner can drag, plus a numeric readout (0-1023) and a filling bar graph that rises and falls with the reading

Interactive controls: Draggable knob (or equivalent slider); numeric readout; a "compare to digital" toggle that overlays a two-state HIGH/LOW indicator for contrast

Default parameters: Knob starts at center position, reading near 512

Behavior: Dragging the knob updates the numeric readout and bar graph continuously and smoothly, with no snapping between fixed values

Implementation notes: p5.js `map()` function converts knob angle directly to the 0-1023 reading range; draggable knob using mouse-drag detection
```

## Related Resources

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md)
