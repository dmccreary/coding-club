---
title: "Differential Drive Chassis Explorer"
description: "Two wheel speeds, and every path a two-wheel robot can take -- named in words before the robot moves."
image: sims/differential-drive-chassis-explorer/differential-drive-chassis-explorer.png
status: built
library: p5.js
bloom_level: Understand (L2)
---

# Differential Drive Chassis Explorer

<iframe src="main.html" width="100%" height="562" scrolling="no"></iframe>

[Run the Differential Drive Chassis Explorer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A two-wheel robot has no steering. It has two numbers, and every path it can
take comes out of the relationship between them:

    forward speed = (left + right) / 2
    turn rate     = (right - left) / wheelbase

**Equal speeds** make the turn term zero, so the robot goes straight. **Equal
and opposite** speeds make the forward term zero, so it spins on the spot
without going anywhere. Everything in between is an arc.

The part that surprises people is what sets how tight that arc is. It is not
the difference between the two numbers — it is their **ratio**. Left 90 and
right 100 differ by only 10 and sweep an enormous circle. Left 20 and right 70
differ by 50 and turn almost on the spot. The readout gives the turning circle
in robot widths so the comparison is concrete rather than a feeling.

The sim names the path type before the chassis moves, and that ordering is
deliberate. The objective is to *explain* the connection between the numbers
and the shape. A learner who can read "20 and 70" and say "tight left curve"
before pressing Start has it. One who can only recognise the curve after
watching it happen has watched a robot drive.

A useful thing to notice: setting one wheel to zero pivots the robot around
that wheel, and gives exactly half the turning radius of the same manoeuvre
with both wheels moving. That is why "stop one track" is the standard tight
turn on tracked vehicles.

## How to Use

- The sim opens with both wheels at 50 — straight ahead. Press **Start**.
- Drag one slider a little. Watch the path name change to *curving*, and the
  turning circle appear in robot widths.
- Set them **equal and opposite** (say 60 and −60) for a spin in place.
- Set one to **zero** and watch the pivot. Compare its turning circle to a
  two-wheel turn with the same difference.
- **Reset position** clears the trail and puts the robot back in the middle.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Given independent left and right wheel speeds on a
two-wheel differential-drive chassis, the learner explains how the speed
difference produces straight-line motion, turning, or spinning in place.

**Before the sim (5 min).** Ask how a robot with no steering wheel turns. Most
groups get to "one wheel faster" quickly; the useful follow-up is "how much
faster, and does that matter?"

**With the sim (15 min).** Run it as prediction practice. Call out two numbers,
everyone commits to a path type out loud, then press Start. Three or four
rounds is enough for the rule to stick.

**After the sim (25 min).** Program a real chassis to drive a square. The turn
is the hard part: a spin in place for a quarter turn needs a duration that has
to be found by experiment, because real wheels slip.

**Check for understanding.** Ask: "Your robot is supposed to drive straight but
drifts left. Both motors are set to the same number. What is happening?" The
motors are not identical — same command, different actual speed. That is why
real robots need encoders, and it is the honest limit of open-loop control.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/differential-drive-chassis-explorer/main.html" width="100%" height="562" scrolling="no"></iframe>
```

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

## References

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md) -- the chapter this MicroSim supports.
- [H-Bridge Direction and Speed Control](../h-bridge-direction-speed-control/index.md) -- what actually drives each of the two wheels.
- [Collision Avoidance Control Loop](../collision-avoidance-control-loop/index.md) -- these wheel commands driven by a sensor instead of by sliders.
- [Differential wheeled robot](https://en.wikipedia.org/wiki/Differential_wheeled_robot) -- the configuration and its kinematics.
- [Dead reckoning](https://en.wikipedia.org/wiki/Dead_reckoning) -- navigating by commanded speeds alone, and why it drifts.
