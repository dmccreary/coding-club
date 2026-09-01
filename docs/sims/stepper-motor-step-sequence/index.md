---
title: Stepper Motor Step Sequence
description: Given a four-coil stepper motor, the learner sequences the coil-energizing pattern that advances the rotor by one step at a time.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Stepper Motor Step Sequence



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: workflow
**sim-id:** stepper-motor-step-sequence<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Let a learner trace the four-coil energizing sequence from the worked example above, one transition at a time.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a four-coil stepper motor, the learner sequences the coil-energizing pattern that advances the rotor by one step at a time.

Steps: 1. "Energize Coil Pair 1 — rotor aligns to position 1"; 2. "Energize Coil Pair 2 — rotor advances 1.8°"; 3. "Energize Coil Pair 3 — rotor advances another 1.8°"; 4. "Energize Coil Pair 4 — rotor advances another 1.8°"; 5. "Return to Coil Pair 1 — cycle repeats, 50 cycles complete one full rotation"

Interactivity requirement: Every node MUST carry a `click` directive opening an infobox with that step's full explanation, e.g. `click step2 call showInfo("coil-pair-2-energized")`.

Visual style: Circular Mermaid flowchart (steps 1-4-3-2 looping back to 1) with a small rotor-angle readout embedded in each node's label.

Implementation: Mermaid flowchart rendered inside a small wrapper page at the sim-id path, with a JavaScript `showInfo()` callback that populates an infobox beneath the diagram on any node click, and a running "total rotation" counter that increments as the learner clicks through multiple cycles.
```

## Related Resources

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md)
