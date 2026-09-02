---
title: Gyroscope Orientation Data Explorer
description: Tip a sensor board three ways and watch exactly one of the three readings move each time.
image: sims/gyroscope-orientation-data-explorer/gyroscope-orientation-data-explorer.png
status: built
library: p5.js
bloom_level: Understand (L2)
---

# Gyroscope Orientation Data Explorer

<iframe src="main.html" width="100%" height="522" scrolling="no"></iframe>

[Run the Gyroscope Orientation Data Explorer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Three numbers describe any orientation, and the whole difficulty is keeping
them apart.

- **Pitch** is nose up and down — the board tipping forward or back.
- **Roll** is one side dipping — the board leaning left or right.
- **Yaw** is turning on the spot, flat, without tilting at all.

Each handle here changes exactly one of them. That constraint is the point:
drag the pitch handle and watch roll and yaw sit at zero. Everyone assumes the
first time that tipping a board must change more than one number, and it does
not. Three independent axes are enough to describe every orientation, which is
why every drone, phone, and game controller reports exactly these three.

**The marked front edge is not decoration.** "Pitch went positive" means
nothing until you know which way the board is facing — and it is exactly the
thing people forget when they mount a sensor sideways inside a robot and then
cannot work out why forward tilt shows up as roll. The physical orientation of
the chip on the chassis is part of the calibration.

One honest limit: real sensors are noisier than this. A gyroscope measures rate
of turn and drifts if you integrate it, and an accelerometer gives you pitch
and roll but not yaw. Kits usually combine both, which is why yaw is the axis
that misbehaves in practice.

## How to Use

- **Drag the blue handle** on the front edge to pitch the board forward and
  back. Watch roll and yaw stay at zero.
- **Drag the green handle** on the right edge to roll it.
- **Drag the purple handle** below the board to yaw it.
- Move two handles and read the summary line — real motion combines the axes,
  and that is when the readings have to be read together.
- **Reset to flat** returns all three to zero.

## Lesson Plan

**Bloom level:** Understand (L2) -- *interpret*

**Learning objective:** Given a tilted or rotated orientation of a gyroscope
kit, the learner interprets which of the pitch, roll, and yaw values changes
and by how much.

**Before the sim (5 min).** Hold a phone flat and ask people to name the three
ways it can turn without moving through space. Most groups get two.

**With the sim (10 min).** Drag each axis alone, then two together. The
surprise is that single-axis motion really does leave the other numbers at
zero.

**After the sim (25 min).** Read a real sensor and print all three values. They
will not be zero when flat, they will drift, and yaw will be worst — every one
of which is a good conversation.

**Check for understanding.** Ask: "Your robot tips forward and the *roll*
number changes instead of pitch. Nothing is broken. What happened?" The sensor
is mounted rotated ninety degrees on the chassis. Which axis is which depends
on how the chip is glued down.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/gyroscope-orientation-data-explorer/main.html" width="100%" height="522" scrolling="no"></iframe>
```

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

## References

- [Chapter 20: Sensor, Sound, and IoT Project Kits](../../chapters/20-sensor-sound-iot-kits/index.md) -- the chapter this MicroSim supports.
- [Sensor Type Picker](../sensor-type-picker/index.md) -- choosing what to measure in the first place.
- [Collision Avoidance Control Loop](../collision-avoidance-control-loop/index.md) -- another sensor reading driving a robot's behaviour.
- [Aircraft principal axes](https://en.wikipedia.org/wiki/Aircraft_principal_axes) -- where pitch, roll, and yaw are named from.
- [Inertial measurement unit](https://en.wikipedia.org/wiki/Inertial_measurement_unit) -- the gyroscope-plus-accelerometer combination a kit actually contains.
