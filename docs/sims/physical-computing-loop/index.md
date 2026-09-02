---
title: "The Physical Computing Loop"
description: "Input, process, output -- stepped one stage at a time, with the actual data each stage is holding."
image: sims/physical-computing-loop/physical-computing-loop.png
status: built
library: p5.js
bloom_level: Understand (L2)
---

# The Physical Computing Loop

<iframe src="main.html" width="100%" height="512" scrolling="no"></iframe>

[Run the The Physical Computing Loop MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Every physical computing project, from a blinking LED to a line-following
robot, is the same three moves: **sense**, **decide**, **act**. Get that
mental model in place and every new component a student brings in has an
obvious home.

The sim is deliberately a step-through rather than a looping animation. The
objective is to *explain* which stage a component belongs to, and you cannot
explain what you did not have time to read. Each stage holds still and shows
three things: the real component, the concrete data it is handling right now,
and why it belongs to that stage.

Two places where the model is less obvious than it looks, and both are in the
examples on purpose:

**A blinking LED has an input.** Students hunt for the sensor and cannot find
one. There isn't a sensor -- the input is the microcontroller's own clock. Any
project that does something *when* rather than *if* is being driven by a timer,
and the timer is the input stage.

**A pull-down resistor is part of the input stage.** It is not decoration and
it is not wiring overhead. Without it the input has no defined value, so the
process stage is deciding on noise. Anything that makes a reading trustworthy
belongs with the thing being read.

The arrow curving back from Output to Input is the part that makes this a
loop rather than a pipeline. Release a button and the input changes, so the
rule fires differently, so the output stops. The whole cycle runs thousands of
times a second.

## How to Use

- Pick a project from **Example project**.
- Press **Run Example** to step Input → Process → Output automatically, pausing
  at each stage.
- Or **click a circle** to jump straight to that stage and read it at your own
  pace. Clicking stops the run.
- Compare the same stage across two projects — the Process circle is the same
  microcontroller every time; only the rule changes.
- **Reset** returns to the Input stage.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Given a physical computing project description, the
learner explains which part of the input-process-output loop each component
belongs to.

**Before the sim (5 min).** Ask the group to list every part in a project they
have seen. Do not sort them yet — just get a list on the board.

**With the sim (10 min).** Walk the three examples. Then go back to the board
list and sort it into the three stages as a group. The arguments are the
valuable part: a resistor, a battery, and a USB cable do not all fit neatly,
and working out why is the understanding.

**After the sim (15 min).** Give each student a project idea on a card and have
them draw their own three circles with components filled in. A stage left empty
is a real finding, not a mistake — some projects genuinely have no sensor.

**Check for understanding.** Ask: "A robot stops when it gets close to a wall.
Name the input, the rule, and the output." A distance sensor, a threshold
comparison, and the motors. A student who answers "the robot" for all three has
not separated the stages yet.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/physical-computing-loop/main.html" width="100%" height="512" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: infographic
**sim-id:** physical-computing-loop<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/stem-robots/tree/main/docs/sims/physical-computing-explorer

Purpose: Give a mentor a single mental model — sense, process, act — that organizes every concept in this chapter.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a physical computing project description, the learner explains which part of the input-process-output loop each component belongs to.

Visual elements: Three large circular stages arranged left to right — "Input" (icon: button/sensor), "Process" (icon: microchip), "Output" (icon: LED/motor) — connected by arrows that animate a single pulse of light moving through the loop when the learner clicks "Run Example."

Interactive controls: Three clickable stage circles; a dropdown listing example projects ("Blinking LED," "Button-Triggered Buzzer," "Dimmable Light"); a "Run Example" button that animates the pulse and highlights the matching component list beneath each stage.

Data Visibility Requirements: Stage 1 shows the raw input event (e.g., "Button pressed"); Stage 2 shows the plain-language rule being applied (e.g., "If pressed, turn LED on"); Stage 3 shows the resulting physical output (e.g., "LED lights up").

Instructional Rationale: A step-through, clickable model suits an Understand-level objective better than continuous animation, since a mentor needs to trace which real component maps to which stage, not just watch motion.

Implementation: p5.js canvas with three clickable circular nodes and a text panel below that updates on click or during the animated run.
```

## References

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md) -- the chapter this MicroSim supports.
- [Blinking LED Breadboard Circuit](../blinking-led-breadboard-circuit/index.md) -- the output stage of the first example, built for real.
- [Push Button Digital Input Circuit](../push-button-digital-input-circuit/index.md) -- the input stage of the second example.
- [Physical computing](https://en.wikipedia.org/wiki/Physical_computing) -- the field this loop describes.
- [Pulse-width modulation](https://en.wikipedia.org/wiki/Pulse-width_modulation) -- how the dimmable light gets brightness out of an on/off pin.
