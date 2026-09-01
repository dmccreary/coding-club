---
title: PWM Analog Output Brightness Explorer
description: See how a pin that can only be fully on or fully off produces every brightness in between.
image: sims/pwm-analog-output-brightness-explorer/pwm-analog-output-brightness-explorer.png
status: built
library: p5.js
bloom_level: Understand (L2)
---

# PWM Analog Output Brightness Explorer

<iframe src="main.html" width="100%" height="482" scrolling="no"></iframe>

[Run the PWM Analog Output Brightness Explorer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A Pico's output pin has exactly two states: 3.3 volts, or 0 volts. There is no
setting for "half on." Yet every club project that fades an LED does exactly
that, and the trick has a name: **pulse width modulation**.

The pin switches on and off about a thousand times a second. The fraction of each
cycle it spends switched on is the **duty cycle**. At 25% the LED is on for a
quarter of every cycle, and because the switching outruns the eye, it looks a
quarter as bright. Nothing is dimmed; it is blinked, faster than you can see.

The top of the canvas shows what a viewer perceives. The bottom shows the actual
square wave on the pin. Tick **Slow motion** and the switching rate drops to
under one cycle a second -- and the LED stops looking dim and starts visibly
blinking. That disagreement between the two views is the entire idea.

## How to Use

- **Duty cycle** sets the percentage of each cycle the pin is HIGH.
- The shaded parts of the waveform are the HIGH portions; the amber cursor shows
  where in the cycle the LED above currently is.
- **Slow motion** drops the switching rate until individual pulses are countable,
  and the LED follows the real pin state instead of the perceived average.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Given a duty-cycle percentage, the learner explains how
the underlying on-off switching pattern produces a perceived brightness level.

**Before the sim (5 min).** Ask how you would make an LED half as bright. Most
groups suggest halving the voltage. Note that answer -- it is reasonable, and it
is not what a Pico does.

**With the sim (10 min).** Set the duty cycle to 25%, then 75%, and read the
waveform each time. Then tick **Slow motion** without changing the duty cycle.
The LED starts blinking. Ask: what changed about the signal? Nothing did except
the speed -- which is the point.

**After the sim (10 min).** Ask the group to sketch the waveform for 10% and for
90% from memory, labelling the HIGH and LOW portions.

**Check for understanding.** Ask: "At 50% duty cycle, is the LED getting half the
voltage?" The answer is no -- it gets the full 3.3 V for half the time. A learner
who can state that clearly has met the objective.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/pwm-analog-output-brightness-explorer/main.html" width="100%" height="482" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: microsim
**sim-id:** pwm-analog-output-brightness-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/microsims/tree/main/docs/sims/pwm

Purpose: Show how adjusting PWM duty cycle changes perceived LED brightness, and reveal the actual fast on-off switching underneath the smooth appearance.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a duty-cycle percentage, the learner explains how the underlying on-off switching pattern produces a perceived brightness level.

Visual elements: A simulated LED that appears to dim or brighten smoothly; beneath it, a zoomed-in, slowed-down waveform showing the actual on-off square-wave pattern at the current duty cycle

Interactive controls: Slider for duty cycle (0%-100%); a "slow motion" toggle that slows the waveform enough to see individual on/off pulses

Default parameters: Duty cycle 50%, normal speed

Behavior: Moving the duty-cycle slider instantly updates both the LED's perceived brightness and the waveform's on/off proportions; the slow-motion toggle reduces switching speed so learners can see the discrete pulses that produce the smooth appearance

Implementation notes: p5.js canvas with the LED rendered as a circle whose fill opacity maps to duty cycle for the "perceived" view, and a literal square-wave line plot for the "actual" view
```

## References

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md) -- the chapter this MicroSim supports.
- [Pulse-width modulation](https://en.wikipedia.org/wiki/Pulse-width_modulation) -- the general technique and its other uses.
- [Duty cycle](https://en.wikipedia.org/wiki/Duty_cycle) -- the definition the sim's slider sets.
- [Flicker fusion threshold](https://en.wikipedia.org/wiki/Flicker_fusion_threshold) -- why the eye stops seeing the blinking above roughly 60 Hz.
- [Servo Angle and Pulse Width Explorer](../servo-angle-pulse-width-explorer/index.md) -- the same pulses used to carry a position rather than a brightness.
