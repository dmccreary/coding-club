---
title: Circuit Symbol Reader
description: Given a schematic symbol, the learner identifies its component name and its role in a circuit.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Circuit Symbol Reader



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md)
