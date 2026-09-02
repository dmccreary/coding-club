---
title: Pico REPL vs Script Workflow
description: Three ways to run code on a Pico, separated by one question: what is still running after you pull the cable out?
image: sims/pico-repl-vs-script-workflow/pico-repl-vs-script-workflow.png
status: built
library: p5.js
bloom_level: Understand (L2)
---

# Pico REPL vs Script Workflow

<iframe src="main.html" width="100%" height="532" scrolling="no"></iframe>

[Run the Pico REPL vs Script Workflow MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

There are three ways to run code on a Pico, and the difference that matters is
not how you start them. It is what happens when the power goes away.

**The REPL** runs one line the instant you type it. It is the fastest way to
answer a question — *does pin 15 light the right LED? what does this sensor
actually return?* — and the worst way to keep an answer. Pull the cable and
everything typed at the prompt is gone.

**A saved file you run by hand** keeps the code. It is still on the Pico after
a power cycle. It is simply not running, and nothing will start it until
somebody presses Run again.

**main.py** is the one that survives. MicroPython looks for a file with that
exact name every time the board powers up, and runs it. No laptop, no Run
button, no human.

Press **Power cycle** and watch: three lights go out, one comes back on by
itself. That is the entire distinction, and it is the answer to the most common
end-of-project frustration — *"it works when I press Run but not when I plug it
into the battery"*. The code was never in main.py.

One detail that catches people: `main.py` is not a convention or a suggestion.
MicroPython looks for that literal filename. `Main.py`, `main.PY`, and
`mymain.py` all do nothing at power-up.

## How to Use

- **Click each panel** to read what that mode is for and when to use it.
- Press **Power cycle (unplug and replug)**. Everything goes dark for a moment.
- Watch which status light comes back on without anyone doing anything.
- **Reset** turns all three back on so you can run it again.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Given the Pico's REPL prompt, a saved test file, and a
saved main.py file, the learner explains the difference between typing a
command interactively and running a script automatically at power-up.

**Before the sim (5 min).** Ask anyone who has built a Pico project whether it
worked when they unplugged the laptop. The answer is usually no, and the room
usually does not know why.

**With the sim (10 min).** Click all three panels, then run the power cycle.
The question to leave hanging is: which of these three have you actually been
using?

**After the sim (20 min).** Have everyone take a working test file, save it as
main.py, and unplug from the laptop onto a battery. The project running with no
computer attached is a genuinely different feeling from the same code running
in Thonny.

**Check for understanding.** Ask: "Your project works in Thonny and does
nothing on a battery. Name the fix." Save it as main.py. A student who can also
say *why* — nothing else starts a script when the board powers up — has
explained rather than memorised.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/pico-repl-vs-script-workflow/main.html" width="100%" height="532" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md).

```text
Type: workflow
**sim-id:** pico-repl-vs-script-workflow<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/repl-workflow

Purpose: Let a mentor click through the REPL, a saved test file, and a saved main.py file to see which one is running at each stage and what happens to it when power is removed.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given the Pico's REPL prompt, a saved test file, and a saved main.py file, the learner explains the difference between typing a command interactively and running a script automatically at power-up.

Visual elements: Three labeled panels left to right — "REPL," "test.py (run manually)," "main.py (runs at power-up)" — each showing a small Pico icon and a status light that turns on only when that mode is actively running code.

Interactive controls: Three clickable panel buttons; a "Power Cycle" button that shows which panel's code survives a simulated unplug-and-replug.

Default parameters: No panel selected; all status lights off.

Behavior: Clicking a panel highlights it and shows a one-line description of what happens in that mode; clicking "Power Cycle" turns off the REPL and test.py status lights but leaves the main.py light on, reinforcing which mode survives a power loss.

Implementation notes: p5.js canvas with three static panel objects and a power-cycle animation that dims two of the three status lights.
```

## References

- [Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md) -- the chapter this MicroSim supports.
- [MicroPython Syntax Checker](../micropython-syntax-checker/index.md) -- the two errors you will hit while writing that file.
- [Moving Rainbow Wiring Diagram](../moving-rainbow-wiring-diagram/index.md) -- the hardware the main.py drives.
- [Read–eval–print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) -- what a REPL is, in general.
- [MicroPython](https://en.wikipedia.org/wiki/MicroPython) -- including the boot.py and main.py startup sequence.
