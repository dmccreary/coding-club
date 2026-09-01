---
title: Servo Angle Pulse-Width Explorer
description: Given a target pulse width in microseconds, the learner calculates the resulting servo angle using the standard pulse-to-angle formula.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Servo Angle Pulse-Width Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: microsim
**sim-id:** servo-angle-pulse-width-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/servo-pwm-explorer

Purpose: Let a learner adjust a pulse-width slider and watch a simulated servo arm move to the matching angle, reinforcing the worked formula above.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given a target pulse width in microseconds, the learner calculates the resulting servo angle using the standard pulse-to-angle formula.

Canvas layout: Left (55%) shows a drawn servo arm that rotates to match the calculated angle; right (45%) shows the pulse-width slider and the formula with live substituted numbers.

Interactive controls: Slider for pulse width (1000µs-2000µs); numeric angle readout; a "snap to 0°/90°/180°" preset button row.

Default parameters: Pulse width 1500µs (90°, centered arm).

Behavior: Moving the slider recalculates the angle using the formula in real time and rotates the arm graphic to match; preset buttons jump directly to the three reference angles.

Implementation notes: p5.js canvas with arm rotation driven by `map()` from pulse width to angle in degrees, converted to radians for drawing.
```

## Related Resources

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md)
