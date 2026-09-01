---
title: Push Button Digital Input Circuit
description: Given a push button wired with a pull-down resistor, the learner demonstrates how pressing and releasing it changes a digital input reading between HIGH and LOW.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Push Button Digital Input Circuit



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: microsim
**sim-id:** push-button-digital-input-circuit<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner press a simulated button and watch the connected input pin's reading change in real time, including what happens without a pull-down resistor.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a push button wired with a pull-down resistor, the learner demonstrates how pressing and releasing it changes a digital input reading between HIGH and LOW.

Visual elements: A drawn breadboard circuit with a push button, a pull-down resistor, and a labeled input-pin readout box showing "HIGH" or "LOW"

Interactive controls: A large clickable button graphic the learner can press and hold; a toggle to remove the pull-down resistor and observe an unstable, flickering reading instead of a clean LOW

Default parameters: Pull-down resistor present, reading starts at LOW

Behavior: Pressing the button graphic changes the readout to HIGH instantly and back to LOW on release; removing the pull-down resistor causes the LOW reading to flicker randomly when not pressed

Implementation notes: p5.js mouse-press detection tied to the button graphic; simple state variable for pin reading; randomized flicker effect when pull-down is toggled off
```

## Related Resources

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md)
