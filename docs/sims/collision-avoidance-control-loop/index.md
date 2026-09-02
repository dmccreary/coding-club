---
title: Collision Avoidance Control Loop
description: Sense, decide, act -- with a polling interval you can widen until the robot drives into a wall it thinks is 40 cm away.
image: sims/collision-avoidance-control-loop/collision-avoidance-control-loop.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Collision Avoidance Control Loop

<iframe src="main.html" width="100%" height="562" scrolling="no"></iframe>

[Run the Collision Avoidance Control Loop MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A collision-avoidance robot is four states in a loop: **driving forward**
until the sensor says something is close, then **stopping**, **reversing**,
**turning**, and back to driving. That part is easy, and the sim shows it
working.

The part worth an hour is the pair of numbers in the panel.

**Last sensor reading** is what the code is deciding on. **True distance** is
where the wall actually is. Between polls those two numbers pull apart, because
the robot keeps moving while the sensor sits idle. At a 500 ms polling interval
this robot travels **17 cm blind** between readings — so a stop distance of
8 cm cannot possibly work. It will be past the threshold before it ever looks.

That is the rule the sim exists to install:

> **Stop distance must be bigger than the distance you travel between polls.**

It is not a performance tuning question, it is a safety one, and it has a
number attached: speed × polling interval. Drag the interval up with the
threshold low and watch the robot hit the wall — the crash is a real outcome of
the model, not a rendering accident.

The sensor cone shows the same thing visually: it is drawn to the *last
reading*, so when it stretches straight through the wall you are looking at the
robot's out-of-date belief about the world.

## How to Use

- Press **Start**. At the defaults the robot drives up, stops at 20 cm, backs
  off, turns, and carries on.
- Drag the wall closer or further with the mouse.
- Push **Poll every** up to 500 ms and watch the two distance numbers separate.
  The panel tells you how far the robot moves blind between readings.
- Now drop **Stop distance** below that number and press Start. It crashes, and
  the panel says why.
- **Reset** puts everything back and clears the crash.

## Lesson Plan

**Bloom level:** Apply (L3) -- *demonstrate*

**Learning objective:** Given an adjustable stop-distance threshold and an
approaching obstacle, the learner demonstrates how a collision-avoidance
robot's sensor reading, motor decision, and turning behaviour work together as
one loop.

**Before the sim (10 min).** Write the four states on the board and ask what
triggers each transition. Most groups get the loop right and never mention how
often the sensor is read.

**With the sim (15 min).** Run the defaults, then make it crash on purpose.
Before each run ask the group to predict from the two numbers whether it will
survive. That prediction is the objective.

**After the sim (25 min).** Program it on real hardware. Real ultrasonic
sensors take about 30 ms per reading and occasionally return nonsense, which
makes the same lesson concrete in a way no sim can.

**Check for understanding.** Ask: "Your robot stops fine at walking pace and
hits things when you speed it up. Nothing in the code changed. Why?" It travels
further between polls at higher speed, so the same stop distance is no longer
enough. Naming that relationship is the transfer.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/collision-avoidance-control-loop/main.html" width="100%" height="562" scrolling="no"></iframe>
```

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

## References

- [Chapter 18: Robots, USB Basics, and Electronics Workshop Skills](../../chapters/18-robots-usb-electronics-workshop/index.md) -- the chapter this MicroSim supports.
- [Differential Drive Chassis Explorer](../differential-drive-chassis-explorer/index.md) -- how the turn in this state machine actually happens.
- [Sensor Type Picker](../sensor-type-picker/index.md) -- why a distance sensor and not a motion sensor.
- [The Physical Computing Loop](../physical-computing-loop/index.md) -- sense, process, act, in its general form.
- [Control loop](https://en.wikipedia.org/wiki/Control_loop) -- the pattern this is one instance of.
- [Finite-state machine](https://en.wikipedia.org/wiki/Finite-state_machine) -- the four-state model in the panel.
