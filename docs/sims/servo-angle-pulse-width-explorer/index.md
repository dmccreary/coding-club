---
title: "Servo Angle and Pulse Width Explorer"
description: "Set a pulse width in microseconds and watch the servo arm swing to the angle it encodes."
image: sims/servo-angle-pulse-width-explorer/servo-angle-pulse-width-explorer.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Servo Angle and Pulse Width Explorer

<iframe src="main.html" width="100%" height="482" scrolling="no"></iframe>

[Run the Servo Angle and Pulse Width Explorer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A hobby servo has no idea what "90 degrees" means. What it receives is a pulse,
repeated about fifty times a second, and it moves to whichever position the
**width** of that pulse stands for. The convention is fixed and worth memorising:

- 1000 µs means one end of travel, 0°
- 1500 µs means the centre, 90°
- 2000 µs means the other end, 180°

Everything between is linear, so the whole 180° of travel is packed into 1000
microseconds of pulse range -- about 5.6 µs per degree. That is why servo code
that looks nearly identical can produce wildly different positions: a typo of one
digit in the pulse width is tens of degrees of arm movement.

Drag the slider and the panel shows the formula with the current numbers actually
substituted, not just stated in the abstract.

## How to Use

- **Pulse width** runs from 1000 to 2000 µs in 10 µs steps.
- The arm eases toward its new position rather than snapping, which is what a real
  servo does.
- The three preset buttons jump straight to the reference angles: 0°, 90°, and
  180°.

## Lesson Plan

**Bloom level:** Apply (L3) -- *calculate*

**Learning objective:** Given a target pulse width in microseconds, the learner
calculates the resulting servo angle using the standard pulse-to-angle formula.

**Before the sim (5 min).** Hold a servo and ask what you would send it to move
to 45 degrees. Almost everyone guesses "45". Write it down.

**With the sim (10 min).** Press each preset in turn so the group anchors the
three reference points. Then ask them to find 45° by dragging -- they should land
near 1250 µs. Now revisit the guess on the board.

**After the sim (10 min).** Ask each student to compute, on paper, the pulse width
for 30°, 60°, and 135°, then verify with the slider.

**Check for understanding.** Ask: "Your code sends 1500 µs and the arm sits in the
middle. What do you send to move it a quarter turn clockwise from there?" Working
out 1750 µs requires using the formula rather than recalling a preset.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/servo-angle-pulse-width-explorer/main.html" width="100%" height="482" scrolling="no"></iframe>
```

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

## References

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md) -- the chapter this MicroSim supports.
- [Servomechanism](https://en.wikipedia.org/wiki/Servomechanism) -- how a servo closes the loop on its own position.
- [Servo control](https://en.wikipedia.org/wiki/Servo_control) -- the pulse-width convention this sim implements.
- [Pulse-width modulation](https://en.wikipedia.org/wiki/Pulse-width_modulation) -- the same signal shape used for brightness elsewhere in the kit.
- [PWM Analog Output Brightness Explorer](../pwm-analog-output-brightness-explorer/index.md) -- pulses carrying a brightness instead of a position.
