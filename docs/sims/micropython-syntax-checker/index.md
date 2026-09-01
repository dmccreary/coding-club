---
title: MicroPython Syntax Checker
description: Given a short MicroPython snippet, the learner identifies which lines are correctly formed and which would raise a SyntaxError or IndentationError.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# MicroPython Syntax Checker



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md).

```text
Type: microsim
**sim-id:** micropython-syntax-checker<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/moving-rainbow/tree/main/docs/sims/code-indentation-explorer

Purpose: Let a mentor practice spotting the two most common beginner syntax mistakes — a missing colon and inconsistent indentation — before a live session.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given a short MicroPython snippet, the learner identifies which lines are correctly formed and which would raise a SyntaxError or IndentationError.

Visual elements: A code panel showing one short snippet at a time, line numbers on the left, with a "Check" button and a result area below.

Interactive controls: "Next Snippet" button cycling through 6 short examples (3 correct, 3 with a missing colon or bad indentation); "Check" button that highlights the offending line in red with the matching error name, or a green checkmark if the snippet is valid.

Default parameters: Starts on the first snippet, unchecked.

Behavior: Clicking "Check" evaluates the current snippet against its stored correct/incorrect answer and highlights the specific line responsible when incorrect.

Implementation notes: p5.js canvas rendering monospaced text lines from a string array per snippet; simple lookup table mapping each snippet to its correct/incorrect status and offending line index.
```

## Related Resources

- [Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md)
