---
title: Ohm's Law Current Calculator
description: Given a supply voltage and a resistor value, the learner calculates the resulting current and judges whether it is safe for the connected LED.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Ohm's Law Current Calculator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: microsim
**sim-id:** ohms-law-current-calculator<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/ohms-law-calculator

Purpose: Let a mentor plug in real supply-voltage and resistor values from a kit and see the resulting current before powering an actual circuit.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given a supply voltage and a resistor value, the learner calculates the resulting current and judges whether it is safe for the connected LED.

Canvas layout: Left (60%) shows a simple circuit diagram (battery, resistor, LED) that visually brightens or dims as current changes; right (40%) holds sliders and the numeric readout

Interactive controls: Slider for supply voltage (1.5V-9V); slider for resistor value (10 ohms-1000 ohms); numeric display of calculated current in milliamps; color-coded safety readout (green under 20mA, amber 20-30mA, red above 30mA)

Default parameters: Supply voltage 5V, resistor 220 ohms (yields ~14mA, shown in green)

Behavior: Moving either slider instantly recalculates current using \(I = V / R\) and updates both the numeric readout and the LED brightness/safety color in the diagram

Implementation notes: p5.js canvas with two `createSlider()` controls; recompute on every `draw()` frame from current slider values
```

## Related Resources

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md)
