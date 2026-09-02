---
title: Motor Type Comparison Explorer
description: DC, servo, stepper -- three icons that move the way their motors do, matched against six real project requirements.
image: sims/motor-type-comparison-explorer/motor-type-comparison-explorer.png
status: built
library: p5.js
bloom_level: Analyze (L4)
---

# Motor Type Comparison Explorer

<iframe src="main.html" width="100%" height="582" scrolling="no"></iframe>

[Run the Motor Type Comparison Explorer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Three motor families, and the difference between them is a difference in
motion. So the three icons move the way their motors actually move rather than
sitting still with captions:

- The **DC motor** spins continuously and never stops anywhere in particular.
- The **servo** sweeps to an angle and holds it, then sweeps to another.
- The **stepper** advances in visible discrete clicks onto marked notches.

Watching those three side by side is the analysis. The comparison table in the
chapter is the same information with the motion removed.

**Each project sentence contains the word that decides it.** "Hold it" means
holding torque, which rules out a DC motor. "Exact same origin every time" is a
counting problem, which points at a stepper. "For as long as the session lasts"
means continuous rotation, which rules out a standard servo entirely. Finding
that word is the method, and it works on projects this sim has never heard of.

**Every wrong answer here is defensible, and the feedback says why.** A stepper
can drive robot wheels — precision robots do exactly that — it is just heavy,
slow, and draws current standing still. A DC motor with an encoder can position
a plotter pen; you have simply rebuilt what a stepper already includes. Grading
these as flatly wrong would teach the wrong lesson, because engineering choices
are made against constraints, not against a key.

## How to Use

- **Watch the three icons for a few seconds before answering.** The motion is
  the evidence; the bullets underneath are just the same thing in words.
- Read the project and find the deciding phrase — usually about holding a
  position, hitting an exact one, or just going round.
- Click a motor. The feedback grades your pick against motion style, position
  feedback, and holding torque.
- **New project** advances through all six; **Start over** resets the score.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *differentiate*

**Learning objective:** Given a project's motion requirement, the learner
differentiates which of the three motor types — DC, servo, or stepper — is the
best fit and explains why.

**Before the sim (10 min).** Pass the three real motors around if you have
them. A servo and a small DC motor look similar until you try to turn the shaft
by hand — the servo resists and the DC motor spins freely. That is holding
torque, felt rather than read.

**With the sim (15 min).** For each project, have someone name the deciding
phrase in the sentence *before* anyone clicks. The phrase, not the answer, is
what transfers.

**After the sim (20 min).** Apply it to the club's actual builds. Where a
choice is genuinely close, write down which constraint decided it — cost,
weight, wiring effort. That note is worth more later than the choice itself.

**Check for understanding.** Ask: "When would you use a stepper for robot
wheels, even though DC motors are the obvious answer?" When the robot has to
know how far it has travelled without encoders. Naming the constraint that
flips the answer is what Analyze looks like.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/motor-type-comparison-explorer/main.html" width="100%" height="582" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: microsim
**sim-id:** motor-type-comparison-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner test the same reasoning from the worked scenario above against new project prompts, matching each one to the correct motor family.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a project's motion requirement, the learner differentiates which of the three motor types — DC, servo, or stepper — is the best fit and explains why.

Visual elements: Three animated motor icons (a spinning wheel for DC, a pointer sweeping to an angle for servo, a dial advancing in discrete clicks for stepper) alongside a project-prompt card.

Interactive controls: "New Project" button cycling through six prompts (drive wheels, robot arm joint, camera pan mount, plotter pen arm, conveyor belt, door latch); three clickable motor icons.

Default parameters: Opens on the "drive wheels" prompt with no motor selected.

Behavior: Clicking a motor icon reveals feedback explaining whether that motor's motion style and feedback match the prompt's requirement, referencing the comparison table's three criteria.

Implementation notes: p5.js canvas with three animated icon functions (continuous rotation, angle sweep, stepped rotation); array of prompt objects each carrying a correct-answer key and explanation text.
```

## References

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md) -- the chapter this MicroSim supports.
- [H-Bridge Direction and Speed Control](../h-bridge-direction-speed-control/index.md) -- driving the DC motor once you have chosen it.
- [Differential Drive Chassis Explorer](../differential-drive-chassis-explorer/index.md) -- the drive-wheels project, worked through.
- [Servomotor](https://en.wikipedia.org/wiki/Servomotor) -- the angle-and-hold family.
- [Stepper motor](https://en.wikipedia.org/wiki/Stepper_motor) -- why counted steps give position without a sensor.
