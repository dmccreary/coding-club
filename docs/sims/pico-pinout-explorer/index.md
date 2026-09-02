---
title: "Raspberry Pi Pico Pinout Explorer"
description: "Click any pin on the Pico board to see what it does, what voltage it runs at, and the MicroPython line that uses it."
image: sims/pico-pinout-explorer/pico-pinout-explorer.png
status: built
library: p5.js
bloom_level: Understand (L2)
---

# Raspberry Pi Pico Pinout Explorer

<iframe src="main.html" width="100%" height="657" scrolling="no"></iframe>

[Run the Raspberry Pi Pico Pinout Explorer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A Pico has forty pins and the board itself labels almost none of them. A student
holding one for the first time cannot tell a ground pin from a GPIO pin from the
3.3 volt supply -- and connecting the wrong pair is how kits get damaged.

This explorer puts the board on screen with every pin labelled and colour-coded
by role. Click a pin and the panel below gives its number, its alternate
functions, its voltage, and a line of MicroPython that would actually use it.
The filter buttons narrow the board to one category at a time, which is the fast
way to answer the question a student actually asks: "where do I put the black
wire?" 

## How to Use

- **Click any pin** to see its number, functions, voltage, and a MicroPython
  example.
- **Show All** returns to the full board.
- **GPIO**, **Power**, and **I2C pins** filter the board to one category, which
  makes the ground and 3.3 volt pins easy to find at a glance.

## Lesson Plan

**Bloom level:** Understand (L2) -- *identify*

**Learning objective:** Given the Raspberry Pi Pico board, the learner identifies
the function of each labelled pin -- power, ground, and GPIO -- and states which
pins are safe to connect a component to.

**Before the sim (5 min).** Pass a real Pico around. Ask: "Which of these forty
pins is ground?" Nobody can tell from the board alone. That is the problem this
sim solves.

**With the sim (10 min).** Click **Power** first, so the group sees the eight or
so pins that are *not* general purpose. Emphasise that these are the pins that
cause damage when miswired. Then click **GPIO** and note how many are left --
there is no shortage, so there is never a reason to guess.

**After the sim (15 min).** Give each pair a component from a kit and ask them to
name the exact pins they would use and why, before touching any hardware. Check
their answers against the sim.

**Check for understanding.** Ask a student to name three ground pins by number.
Being able to do that without looking at the board is the objective met, and it
is the single most useful fact for avoiding a damaged kit.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/pico-pinout-explorer/main.html" width="100%" height="657" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md).

```text
Type: microsim
**sim-id:** pico-pinout-explorer<br/>
**Library:** p5.js<br/>
**Status:** Reused<br/>
**Source:** https://dmccreary.github.io/learning-micropython/sims/pico-pinout-explorer/<br/>
**Source Repo:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/pico-pinout-explorer

Reused from the MicroSim catalog (WHAT match score 0.83). Learning objective: Given the Raspberry Pi Pico board, the learner identifies the function of each labeled pin — power, ground, and GPIO — by name and number (Remember).
```

## References

- [Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md) -- the chapter this MicroSim supports.
- [Raspberry Pi Pico](https://en.wikipedia.org/wiki/Raspberry_Pi#Raspberry_Pi_Pico) -- board background and specifications.
- [General-purpose input/output](https://en.wikipedia.org/wiki/General-purpose_input/output) -- what a GPIO pin is and is not.
- [I2C](https://en.wikipedia.org/wiki/I%C2%B2C) -- the two-wire bus behind the I2C pin filter.
- [MicroPython](https://en.wikipedia.org/wiki/MicroPython) -- the language in the code examples.

## Credits

This MicroSim is adapted from
[pico-pinout-explorer](https://dmccreary.github.io/learning-micropython/sims/pico-pinout-explorer/) in the *learning-micropython* project by the same author
([source](https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/pico-pinout-explorer)). It is used here unchanged; the club context is supplied by the lesson plan above.
