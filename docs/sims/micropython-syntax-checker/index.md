---
title: MicroPython Syntax Checker
description: Six snippets, two classic mistakes, and indentation drawn as visible guides so an off-by-one space is something you can see.
image: sims/micropython-syntax-checker/micropython-syntax-checker.png
status: built
library: p5.js
bloom_level: Remember (L1)
---

# MicroPython Syntax Checker

<iframe src="main.html" width="100%" height="462" scrolling="no"></iframe>

[Run the MicroPython Syntax Checker MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Two mistakes account for most of a beginner's first hour with Python: a
header line missing its colon, and a body whose indentation does not line up.
Both are trivial once you have seen them and genuinely baffling if you have
not, which is why a mentor should be able to spot them across a room.

**The two errors are not the same error, and the names say why.**

A missing colon is a **SyntaxError**. Python cannot even parse the line — it
reached the end of `for i in range(10)` expecting a colon and did not find one,
so it never got as far as caring about indentation.

A misaligned body is an **IndentationError**. Every line parsed fine
individually; what Python cannot work out is which block a line belongs to.

The sim draws leading spaces as faint tick marks, because that is the honest
problem: three spaces and four spaces look identical in any editor, and a
tab that renders as four spaces looks identical to four spaces while being a
completely different character. Making the indentation visible is what turns
"it looks fine to me" into "line 5 is one short".

One snippet is a trap worth walking into. Snippet 5 has a correct `else:` on
line 3 and a missing colon on line 1, and the eye goes straight to the line
that looks unusual. Python reports the first line it could not parse. Reading
the line number in the error, rather than hunting for the line that looks odd,
is the habit to build.

## How to Use

- Read the snippet and decide whether it runs **before** pressing Check.
- Look at the tick marks under the indented lines. They are the leading
  spaces, drawn one per space.
- Press **Check**. A valid snippet gets a green tick; a broken one gets the
  error name, the line number, and why.
- **Next snippet** cycles all six; three of them are correct.

## Lesson Plan

**Bloom level:** Remember (L1) -- *identify*

**Learning objective:** Given a short MicroPython snippet, the learner
identifies which lines are correctly formed and which would raise a SyntaxError
or IndentationError.

**Before the session (5 min).** Mentors run one pass alone. Both errors are
fast to recognise once seen and slow to reason out cold.

**With students (10 min).** Run it as a group with the verdict called out
before each Check. Snippet 5 will catch most of the room, and that is the one
worth discussing.

**After (15 min).** Break a working program on purpose — remove one colon, add
one space — and have a partner find it from the error message alone. Reading
the traceback is the transferable skill; recognising these two shapes is just
the fast path.

**Check for understanding.** Ask: "Python says IndentationError. Does that mean
there is a missing colon somewhere?" No — a missing colon fails earlier, at
parse time, with a different name. Knowing which error means what narrows the
search before you have read a single line.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/micropython-syntax-checker/main.html" width="100%" height="462" scrolling="no"></iframe>
```

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

## References

- [Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md) -- the chapter this MicroSim supports.
- [Pico REPL vs Script Workflow](../pico-repl-vs-script-workflow/index.md) -- where you would be running this code.
- [Python syntax and semantics](https://en.wikipedia.org/wiki/Python_syntax_and_semantics#Indentation) -- why indentation is part of the grammar.
- [Off-side rule](https://en.wikipedia.org/wiki/Off-side_rule) -- the language design idea Python's blocks come from.
- [MicroPython](https://en.wikipedia.org/wiki/MicroPython) -- the Python that runs on the Pico.
