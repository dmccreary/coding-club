---
title: Temperature Sensor Reading Explorer
description: Given an analog sensor voltage, the learner calculates the corresponding temperature using the sensor's linear conversion formula.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Temperature Sensor Reading Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: microsim
**sim-id:** temperature-sensor-reading-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner adjust a simulated analog voltage and watch the TMP36 conversion formula produce a temperature reading step by step.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given an analog sensor voltage, the learner calculates the corresponding temperature using the sensor's linear conversion formula.

Canvas layout: Left (50%) shows a thermometer graphic that rises and falls with the calculated temperature; right (50%) shows the voltage slider, the formula written out with live numbers substituted in, and the final answer.

Interactive controls: Slider for sensor voltage (0.0V-1.5V); a toggle switching between the TMP36 analog formula and a "digital sensor" mode that skips the formula and shows a direct Celsius readout instead, for contrast.

Default parameters: Voltage 0.75V (25°C), analog mode selected.

Behavior: Moving the voltage slider updates the formula's substituted numbers live — "(0.75 − 0.5) × 100 = 25°C" — and the thermometer graphic in real time; switching to digital mode replaces the formula panel with a note explaining that a digital sensor performs this conversion internally.

Implementation notes: p5.js canvas with a text-rendering routine that rebuilds the formula string from the current slider value every frame; simple thermometer fill rendered as a rectangle scaled to temperature.
```

## Related Resources

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md)
