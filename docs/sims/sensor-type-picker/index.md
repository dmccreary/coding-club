---
title: Sensor Type Picker
description: Given a short project scenario, the learner selects the sensor type best suited to the required measurement.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Sensor Type Picker



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: microsim
**sim-id:** sensor-type-picker<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a mentor rehearse the same question-driven selection process from the worked scenario above against several project ideas.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: select

Learning objective: Given a short project scenario, the learner selects the sensor type best suited to the required measurement.

Canvas layout: Left (60%) shows a project-scenario card with a one-sentence description ("Turn on a porch light automatically at dusk"); right (40%) shows six sensor icons the learner can select from.

Interactive controls: "New Scenario" button cycling through eight project prompts; six clickable sensor icons (light, temperature, humidity, motion, sound, distance); a feedback panel that appears after a selection.

Default parameters: Opens on the "porch light at dusk" scenario with no sensor selected.

Behavior: Clicking a sensor icon shows immediate feedback — green check and a one-sentence reason if correct, amber note explaining what property of the scenario points to a different sensor if incorrect — before advancing to the next scenario.

Implementation notes: p5.js canvas with an array of scenario objects, each carrying its correct sensor answer and a feedback string; click detection on six fixed icon regions.
```

## Related Resources

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md)
