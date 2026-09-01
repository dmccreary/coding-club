---
title: Resistor Color Code Calculator
description: Set the four colored bands on a resistor and read off its value, so a mentor can check a part before it goes into a circuit.
image: sims/resistor-color-code-calculator/resistor-color-code-calculator.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Resistor Color Code Calculator

<iframe src="main.html" width="100%" height="542" scrolling="no"></iframe>

[Run the Resistor Color Code Calculator MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A club kit arrives with a bag of resistors and no labels. The value is written on
each one in coloured stripes, and reading those stripes is a skill a mentor needs
before the first session, not during it.

Set the four bands and the resistor above updates with its value in ohms, its
readable name, and its tolerance. The structure is worth naming out loud: the
first two bands are **digits**, the third is a **multiplier**, and the fourth is
**tolerance**. Once a student sees that the third band is not a digit, the whole
code stops looking arbitrary.

The value that matters most in a beginners' kit is 220 ohms -- red, red, brown --
the standard series resistor for an LED. Set it once and the group has a
reference they can find in the bag by sight.

## How to Use

- **Band 1** and **Band 2** set the first and second digits.
- **Band 3** sets the multiplier -- the number of zeros, not a digit.
- **Band 4** sets the tolerance, how far the real part may be from its stated
  value.
- The resistor drawing and the value above it update as you change any band.

## Lesson Plan

**Bloom level:** Apply (L3) -- *calculate*

**Learning objective:** Given a resistor's coloured bands, the learner calculates
its resistance value using the standard colour code.

**Before the sim (5 min).** Hold up two resistors that look almost identical and
ask which one belongs in the LED circuit. Nobody can say. Then read the stripes.

**With the sim (10 min).** Build 220 ohms together -- red, red, brown -- and then
1 kilo-ohm. Ask what changed. Only the third band moved, which is the moment the
multiplier idea lands.

**After the sim (15 min).** Hand out real resistors from the club kit. Each
student reads theirs, predicts the value, then checks it in the sim. Finish by
sorting the bag into labelled envelopes -- the sim just paid for itself in
session-prep time.

**Check for understanding.** Give the colours brown-black-red and ask for the
value before anyone touches the sim. The answer is 1 kilo-ohm, and getting there
means the digit/multiplier split is understood.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/resistor-color-code-calculator/main.html" width="100%" height="542" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: microsim
**sim-id:** resistor-color-code-calculator<br/>
**Library:** p5.js<br/>
**Status:** Reused<br/>
**Source:** https://dmccreary.github.io/learning-micropython/sims/resistor-color-code-calculator/<br/>
**Source Repo:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/resistor-color-code-calculator

Reused from the MicroSim catalog (WHAT match score 0.81). Learning objective: Given a resistor's colored bands, the learner calculates its resistance value using the standard color-code table (Apply).
```

## References

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md) -- the chapter this MicroSim supports.
- [Electronic color code](https://en.wikipedia.org/wiki/Electronic_color_code) -- the full standard, including five- and six-band resistors.
- [Resistor](https://en.wikipedia.org/wiki/Resistor) -- what the component does in a circuit.
- [E series of preferred numbers](https://en.wikipedia.org/wiki/E_series_of_preferred_numbers) -- why resistors come in values like 220 and 470 rather than round hundreds.
- [Ohm's Law Current Calculator](../ohms-law-current-calculator/index.md) -- what to do with the value once you have read it.

## Credits

This MicroSim is adapted from
[resistor-color-code-calculator](https://dmccreary.github.io/learning-micropython/sims/resistor-color-code-calculator/) in the *learning-micropython* project by the same author
([source](https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/resistor-color-code-calculator)). It is used here unchanged; the club context is supplied by the lesson plan above.
