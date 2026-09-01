---
title: Blinking LED Breadboard Circuit
description: Given a breadboard, resistor, LED, and jumper wires, the learner demonstrates how they combine into a working blinking-light circuit.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Blinking LED Breadboard Circuit



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: microsim
**sim-id:** blinking-led-breadboard-circuit<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/microsims/tree/main/docs/sims/breadboard

Purpose: Show an animated, current-flow view of a complete blinking-LED circuit built on a real breadboard layout.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a breadboard, resistor, LED, and jumper wires, the learner demonstrates how they combine into a working blinking-light circuit.

Visual elements: Realistic breadboard drawing with an LED, one resistor, two jumper wires, and animated current-flow dots moving along the completed loop whenever the circuit is closed and the simulated output pin is HIGH

Interactive controls: Slider for blink interval (100ms-2000ms); toggle switch simulating "output pin HIGH/LOW"; a "break the loop" button that disconnects one jumper wire to show the LED going dark

Default parameters: Blink interval 500ms, loop intact, output cycling automatically

Behavior: While the loop is intact, the LED brightens and current-flow dots animate whenever the output is HIGH; clicking "break the loop" removes one wire and the LED stays dark regardless of output state, reinforcing the closed-loop requirement

Implementation notes: p5.js canvas rendering breadboard geometry from a coordinate table; animated dots along a path array; `setInterval`-style timing using `millis()`
```

## Related Resources

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md)
