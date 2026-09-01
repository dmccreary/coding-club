---
title: The Physical Computing Loop
description: Given a physical computing project description, the learner explains which part of the input-process-output loop each component belongs to.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# The Physical Computing Loop



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md)
