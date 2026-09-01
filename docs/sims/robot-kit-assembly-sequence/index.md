---
title: Robot Kit Assembly Sequence
description: Given a robot kit's loose parts, the learner sequences the assembly steps in the order that avoids blocking a later step, and explains why each step precedes the next.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Robot Kit Assembly Sequence



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md).

```text
Type: workflow
**sim-id:** robot-kit-assembly-sequence<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/stem-robots/tree/main/docs/sims/robot-assembly-workflow

Purpose: Let a mentor rehearse the correct assembly order and see the mechanical reason each step must precede the next before running a live build session.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: sequence

Learning objective: Given a robot kit's loose parts, the learner sequences the assembly steps in the order that avoids blocking a later step, and explains why each step precedes the next.

Visual elements: A row of six numbered step cards (standoffs, chassis mount, motor wiring, driver board, battery holder, final closure), each with a small icon.

Interactive controls: Drag-to-reorder step cards; a "Check Order" button; a "Why This Order?" toggle revealing the mechanical reason for each correct step.

Default parameters: Cards start in a shuffled order.

Behavior: "Check Order" compares the current arrangement to the correct sequence and marks each card green or red; the "Why This Order?" toggle shows a one-sentence mechanical explanation beneath each card in the correct sequence.

Implementation notes: p5.js canvas with draggable card objects and array-index-based order checking.
```

## Related Resources

- [Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md)
