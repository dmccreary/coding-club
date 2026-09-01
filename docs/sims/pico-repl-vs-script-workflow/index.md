---
title: REPL vs. Saved Script Workflow
description: Given the Pico's REPL prompt, a saved test file, and a saved main.py file, the learner explains the difference between typing a command interactively and running a script automatically at power-up.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# REPL vs. Saved Script Workflow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md)
