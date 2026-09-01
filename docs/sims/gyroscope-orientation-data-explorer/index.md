---
title: Gyroscope Orientation Data Explorer
description: Given a tilted or rotated orientation of a gyroscope kit, the learner interprets which of the pitch, roll, and yaw values changes and by how much.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Gyroscope Orientation Data Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 20: Sensor, Sound, and IoT Project Kits](../../chapters/20-sensor-sound-iot-kits/index.md).

```text
Type: microsim
**sim-id:** gyroscope-orientation-data-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/accelerometer-axes

Purpose: Let a learner drag a drawn gyroscope-kit board and see the matching pitch, roll, and yaw readout update, before wiring or reading a physical kit.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: interpret

Learning objective: Given a tilted or rotated orientation of a gyroscope kit, the learner interprets which of the pitch, roll, and yaw values changes and by how much.

Visual elements: A simple drawn rectangular board with a marked "front" edge, three axis arrows labeled pitch, roll, and yaw, and three numeric readouts below the drawing.

Interactive controls: Drag handles on two edges of the board to tip it forward/back and side to side; a rotate handle for yaw; a "Reset to Flat" button.

Default parameters: Board starts flat, all three readouts at 0 degrees.

Behavior: Dragging a handle updates the board's drawn tilt and the matching readout in real time; dragging one handle changes only its associated axis reading, reinforcing that the three axes are independent.

Implementation notes: p5.js canvas with a 3D-look board drawn using simple perspective skewing; drag detection mapped to rotation angles converted directly into the three displayed numbers.
```

## Related Resources

- [Chapter 20: Sensor, Sound, and IoT Project Kits](../../chapters/20-sensor-sound-iot-kits/index.md)
