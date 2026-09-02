---
title: "Circuit Symbol Reader"
description: "Five schematic symbols on flashcards, with a quiz that scores a full pass."
image: sims/circuit-symbol-reader/circuit-symbol-reader.png
status: built
library: p5.js
bloom_level: Remember (L1)
---

# Circuit Symbol Reader

<iframe src="main.html" width="100%" height="462" scrolling="no"></iframe>

[Run the Circuit Symbol Reader MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Every schematic in this book is drawn from five symbols. That is the whole
vocabulary, and it is small enough to actually finish learning.

The reason to learn them properly rather than looking them up is timing: a
mentor who has to check what a symbol means while three students wait has
already lost the room. Five cards, two minutes, and the problem goes away.

A few things the cards are careful about, because they are the details that
trip people up:

**A switch is drawn open.** A schematic shows a switch in its resting position,
which for a push button is off. If a circuit seems to do nothing, an open
switch drawn on the diagram is a candidate.

**Two ground symbols are the same point.** They are not two separate grounds
that happen to look alike. The symbol exists so schematics do not have to draw
long return wires everywhere, which means a diagram with six ground symbols has
one ground.

**The resistor here is a rectangle, not a zigzag.** Both are correct. This book
uses the IEC rectangle; American schematics you find online will use the
zigzag, and a student needs to recognise both as the same part.

Quiz mode hides the Flip button, so the answer cannot be peeked at before
committing, and each card counts once per pass — cycling back to re-answer
cannot inflate the score.

## How to Use

- **Flip** shows the name and what the part does; **Next** and **Previous**
  move through the five.
- Turn on **Quiz me** to be asked instead of told. The Flip button disappears,
  a name list appears, and **Check answer** commits your choice.
- Do a full pass of five with the quiz on. Anything less than 5 out of 5 tells
  you which card to go back to.

## Lesson Plan

**Bloom level:** Remember (L1) -- *identify*

**Learning objective:** Given a schematic symbol, the learner identifies its
component name and its role in a circuit.

**Before the session (2 min).** Mentors run one quiz pass on their own before
standing in front of students. It takes two minutes and it is the difference
between answering a question and looking one up.

**With students (10 min).** Run it as a race: two passes each, best score. At
five items it stays a game rather than a test.

**After (10 min).** Put a real schematic from the kit on the screen and have
the group name every symbol on it. That is the transfer this card deck exists
for.

**Check for understanding.** Show the switch symbol and ask: "Is this circuit
on or off right now?" Off — and knowing that a schematic draws the resting
state is worth more than being able to name the symbol.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/circuit-symbol-reader/main.html" width="100%" height="462" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: microsim
**sim-id:** circuit-symbol-reader<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/circuits/tree/main/docs/sims/circuit-symbol-flashcards

Purpose: Let a mentor practice recognizing the five schematic symbols used throughout this book's kit diagrams before relying on them during a live session.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given a schematic symbol, the learner identifies its component name and its role in a circuit.

Visual elements: A flashcard-style panel showing one large schematic symbol at a time (battery, resistor, LED, switch, ground), drawn in a clean black-on-white style matching standard schematic conventions.

Interactive controls: "Flip" button revealing the symbol's name and one-sentence function; "Next" and "Previous" buttons to cycle through all five symbols; a "Quiz Me" toggle that hides the name and asks the learner to type or select it before flipping.

Default parameters: Starts on the battery symbol, unflipped.

Behavior: Clicking "Flip" reveals the answer with a short animation; "Quiz Me" mode tracks a running score of correct identifications across a full pass through all five symbols.

Implementation notes: p5.js canvas rendering each symbol from vector line-drawing functions (no external images); simple state machine for flipped/unflipped and quiz-mode scoring.
```

## References

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md) -- the chapter this MicroSim supports.
- [LED Anatomy](../led-anatomy/index.md) -- the physical part behind the LED symbol.
- [Photoresistor Voltage Divider Explorer](../photoresistor-voltage-divider-explorer/index.md) -- these symbols used in a working schematic.
- [Multimeter Usage Simulator](../multimeter-usage-simulator/index.md) -- what the ground symbol means when you put a probe on it.
- [Electronic symbol](https://en.wikipedia.org/wiki/Electronic_symbol) -- the full set, and the IEC versus ANSI difference.
- [Circuit diagram](https://en.wikipedia.org/wiki/Circuit_diagram) -- how the symbols get assembled into a schematic.
