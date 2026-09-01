---
title: Differential Drive Chassis Explorer
description: Given independent left and right wheel speeds on a two-wheel differential-drive chassis, the learner explains how the speed difference produces straight-line motion, turning, or spinning in place.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Differential Drive Chassis Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: microsim
**sim-id:** differential-drive-chassis-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner set independent left and right wheel speeds and watch a simulated chassis move in a straight line, curve, or spin accordingly.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given independent left and right wheel speeds on a two-wheel differential-drive chassis, the learner explains how the speed difference produces straight-line motion, turning, or spinning in place.

Data Visibility Requirements: Stage 1 shows both wheel speed values side by side as numbers; Stage 2 shows the resulting path type in words ("straight," "curving left," "spinning in place"); Stage 3 shows the chassis icon tracing that actual path on the canvas so the learner connects the numbers to the motion.

Interactive controls: Two sliders, one for left wheel speed and one for right wheel speed (each -100 to 100, negative meaning reverse); a "Reset Position" button.

Default parameters: Both wheel speeds at 50 (equal), producing straight-line motion.

Instructional Rationale: Showing the two numeric speed values alongside a named path type before the chassis moves suits this Understand-level objective, since a mentor needs to connect the cause (speed difference) to the effect (path shape) explicitly rather than only watching motion happen.

Implementation notes: p5.js canvas with a simple differential-drive kinematics calculation (path curvature proportional to the difference between left and right speed) driving an icon's position and heading each frame.
```

## Related Resources

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md)
