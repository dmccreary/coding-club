---
title: Multimeter Usage Simulator
description: Given a simple breadboard circuit, the learner demonstrates how to use a multimeter's continuity, voltage, and resistance modes to verify the circuit before and after powering it.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Multimeter Usage Simulator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: microsim
**sim-id:** multimeter-usage-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/automating-instructional-design/tree/main/docs/sims/ohms-law-simulator

Purpose: Let a learner select a multimeter mode and touch simulated probes to a simple circuit, practicing the pre-power safety check described in the worked example.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a simple breadboard circuit, the learner demonstrates how to use a multimeter's continuity, voltage, and resistance modes to verify the circuit before and after powering it.

Visual elements: A drawn multimeter with a mode dial (Continuity/Voltage/Resistance) and two draggable probe tips; a simple breadboard circuit (battery, resistor, LED) as the measurement target, including a "hidden short" toggle for practice

Interactive controls: Mode dial (click to rotate through three modes); draggable red and black probes; a "hidden short" toggle a mentor can enable to create a practice scenario

Default parameters: Mode set to Continuity, probes unplaced, no hidden short

Behavior: Touching both probes to the power rails in Continuity mode beeps and shows "0 ohms — SHORT" if the hidden-short toggle is on, or "open circuit" if not; Voltage mode across the resistor shows the Ohm's-law-predicted voltage drop; Resistance mode on the unpowered resistor shows its color-code value

Implementation notes: p5.js canvas with draggable probe objects using distance-based "contact" detection against defined circuit-node coordinates; mode-dependent readout logic
```

## Related Resources

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md)
