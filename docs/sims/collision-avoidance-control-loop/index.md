---
title: Collision Avoidance Robot Control Loop
description: Given an adjustable stop-distance threshold and an approaching obstacle, the learner demonstrates how a collision-avoidance robot's sensor reading, motor decision, and turning behavior work together as one loop.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Collision Avoidance Robot Control Loop



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 18: Robots, USB Basics, and Electronics Workshop Skills](../../chapters/18-robots-usb-electronics-workshop/index.md).

```text
Type: microsim
**sim-id:** collision-avoidance-control-loop<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/microsims/tree/main/docs/sims/collision-avoidance-robot

Purpose: Let a learner adjust the stop-distance threshold and sensor-polling interval from the worked example above and watch a simulated robot's sense-decide-act loop respond in real time.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given an adjustable stop-distance threshold and an approaching obstacle, the learner demonstrates how a collision-avoidance robot's sensor reading, motor decision, and turning behavior work together as one loop.

Canvas layout: Left (65%) shows a top-down view of a small two-wheel robot driving toward a movable wall inside a bounded arena; right (35%) shows the current distance reading, the stop-distance threshold slider, and a text readout of the robot's current state (Driving Forward, Stopping, Reversing, Turning).

Visual elements: Robot icon with a forward-facing distance-sensor cone; a draggable wall/obstacle; a live numeric distance readout; a state-machine label showing the robot's current behavior.

Interactive controls: Slider for stop-distance threshold (5cm-50cm); slider for sensor-polling interval (50ms-500ms); draggable obstacle position; "Reset" button.

Default parameters: Stop-distance threshold 20cm, polling interval 100ms, obstacle starting 150cm away and drifting slowly closer.

Behavior: As the obstacle approaches, the distance readout counts down live; when the reading crosses the threshold, the robot's state label switches to Stopping, then Reversing, then Turning, then back to Driving Forward, matching the four-step behavior from the worked example. A very short polling interval combined with a fast-approaching obstacle can demonstrate a near-miss if the threshold is set too low.

Implementation notes: p5.js canvas with a simple state machine (DRIVE, STOP, REVERSE, TURN) driven by a simulated distance value that decreases each frame based on obstacle position; slider-controlled threshold and polling interval directly gate the state transitions; canvas and controls resize responsively to the container width.
```

## Related Resources

- [Chapter 18: Robots, USB Basics, and Electronics Workshop Skills](../../chapters/18-robots-usb-electronics-workshop/index.md)
