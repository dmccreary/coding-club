---
title: Photoresistor Voltage Divider Explorer
description: Given a simulated light level, the learner calculates the resulting LDR resistance and voltage-divider output.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Photoresistor Voltage Divider Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: microsim
**sim-id:** photoresistor-voltage-divider-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/moving-rainbow/tree/main/docs/sims/photoresistor-component

Purpose: Let a learner drag a simulated brightness slider and see the LDR's resistance and the resulting divider voltage update together, reinforcing the worked calculation above.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given a simulated light level, the learner calculates the resulting LDR resistance and voltage-divider output.

Canvas layout: Left (55%) shows a simple divider circuit diagram (battery, LDR, fixed resistor, analog input point) that brightens or dims a small sun icon with the slider; right (45%) shows the slider, the calculated LDR resistance, and the divider voltage.

Interactive controls: Slider for simulated light level (0%-100%); numeric readouts for LDR resistance (ohms) and divider voltage (volts); a toggle to swap the fixed resistor value between 1k, 10k, and 100k ohms.

Default parameters: Light level 50%, fixed resistor 10k ohms.

Behavior: Moving the light slider recalculates LDR resistance along a logarithmic curve and updates the divider-voltage readout using the standard voltage-divider formula in real time.

Implementation notes: p5.js canvas with a `map()`-based logarithmic curve from light percentage to resistance; live divider-formula calculation on every `draw()` frame.
```

## Related Resources

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md)
