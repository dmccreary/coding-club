---
title: "Stepper Motor Step Sequence"
description: "Click through the four-coil energizing cycle and watch the rotation total climb 1.8 degrees at a time."
image: sims/stepper-motor-step-sequence/stepper-motor-step-sequence.png
status: built
library: Mermaid
bloom_level: Apply (L3)
---

# Stepper Motor Step Sequence

<iframe src="main.html" width="100%" height="722" scrolling="no"></iframe>

[Run the Stepper Motor Step Sequence MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A stepper motor is the only motor in a club kit that knows where it is without
being told. Not because it has a sensor -- it does not -- but because its
construction makes every step exactly the same size.

Click the steps in order and the total in the panel climbs by 1.8 degrees each
time. That number is a physical property of the motor, set by how many teeth are
cut into the rotor. Four steps complete one coil cycle and 7.2 degrees of
rotation, so fifty cycles -- two hundred steps -- make one full turn.

This is why steppers drive 3D printer axes and plotter pens. A program that has
issued 400 steps *knows* the shaft has turned twice, with no encoder and no
feedback loop. The catch, worth mentioning to students, is that if the motor
stalls under load the program does not find out. It keeps counting steps that
never happened.

## How to Use

- **Click each step in order** to energize the next coil pair; the running total
  in the panel adds 1.8 degrees per step.
- **Click a step again** to unpin its explanation. The total keeps its value.
- Follow the **loop** edge back to the first coil pair to start another cycle.

## Lesson Plan

**Bloom level:** Apply (L3) -- *demonstrate*

**Learning objective:** Given a four-coil stepper motor, the learner sequences the
coil-energizing pattern that advances the rotor by one step at a time.

**Before the sim (5 min).** Spin a DC motor by hand and ask where its shaft is
pointing. Nobody can say. Ask the same of a stepper and note that the answer is
different in kind, not just in precision.

**With the sim (10 min).** Click one full cycle and read the total: 7.2 degrees.
Ask how many cycles make a full turn before anyone reaches for a calculator.
Then ask what the motor would do if you energized the coils out of order.

**After the sim (10 min).** Ask each student to compute the steps needed for a
90-degree turn, then for one and a half turns.

**Check for understanding.** Ask: "Your program issued 200 steps but the arm only
moved half as far as expected. What might have happened?" A stall the program
could not detect is the answer worth arriving at.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/stepper-motor-step-sequence/main.html" width="100%" height="722" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: workflow
**sim-id:** stepper-motor-step-sequence<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Let a learner trace the four-coil energizing sequence from the worked example above, one transition at a time.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a four-coil stepper motor, the learner sequences the coil-energizing pattern that advances the rotor by one step at a time.

Steps: 1. "Energize Coil Pair 1 — rotor aligns to position 1"; 2. "Energize Coil Pair 2 — rotor advances 1.8°"; 3. "Energize Coil Pair 3 — rotor advances another 1.8°"; 4. "Energize Coil Pair 4 — rotor advances another 1.8°"; 5. "Return to Coil Pair 1 — cycle repeats, 50 cycles complete one full rotation"

Interactivity requirement: Every node MUST carry a `click` directive opening an infobox with that step's full explanation, e.g. `click step2 call showInfo("coil-pair-2-energized")`.

Visual style: Circular Mermaid flowchart (steps 1-4-3-2 looping back to 1) with a small rotor-angle readout embedded in each node's label.

Implementation: Mermaid flowchart rendered inside a small wrapper page at the sim-id path, with a JavaScript `showInfo()` callback that populates an infobox beneath the diagram on any node click, and a running "total rotation" counter that increments as the learner clicks through multiple cycles.
```

## References

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md) -- the chapter this MicroSim supports.
- [Stepper motor](https://en.wikipedia.org/wiki/Stepper_motor) -- construction and why the step angle is fixed.
- [Open-loop controller](https://en.wikipedia.org/wiki/Open-loop_controller) -- controlling without feedback, and its one weakness.
- [Servo Angle and Pulse Width Explorer](../servo-angle-pulse-width-explorer/index.md) -- the other way a club kit sets a precise position.
- [H-bridge](https://en.wikipedia.org/wiki/H-bridge) -- the driver circuit that actually switches the coils.
