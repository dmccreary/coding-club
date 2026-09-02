---
title: Robot Kit Assembly Sequence
description: Six build steps to drag into order, each with the mechanical reason it has to come when it does.
image: sims/robot-kit-assembly-sequence/robot-kit-assembly-sequence.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Robot Kit Assembly Sequence

<iframe src="main.html" width="100%" height="502" scrolling="no"></iframe>

[Run the Robot Kit Assembly Sequence MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

There is one order that works and several that end with somebody taking the
chassis apart again. Every constraint here is mechanical, not arbitrary:

> **Never fit something that blocks access to a fastener you still need.**

That single rule generates the whole sequence. Standoffs bolt on from
underneath, so they go first — once anything is mounted on top you cannot get a
screwdriver to them. Motor wires thread through chassis holes, so they go in
while you can still see the holes, before the driver board covers the channel.
The top shell goes last because every screw underneath it becomes unreachable.

**The reasons matter more than the order.** The kit in front of you will not be
exactly this kit — a different chassis, a battery pack that mounts on top, a
board with its terminals on the wrong edge. A mentor who memorised six card
names is stuck. A mentor who knows the rule works out the new order in thirty
seconds.

One step is worth flagging for a live session: **test before the closure.** The
last card is the point of no return, and finding a loose motor wire after the
shell is on costs everything you just did.

## How to Use

- The cards start shuffled. **Drag them** into the order you would actually
  build the kit.
- Press **Check order**. Correct cards get a green bar, misplaced ones red.
- Turn on **Why this order?** to read the mechanical reason under each card.
- **Shuffle again** for another go — the shuffle never hands you the correct
  order to start with.

## Lesson Plan

**Bloom level:** Apply (L3) -- *sequence*

**Learning objective:** Given a robot kit's loose parts, the learner sequences
the assembly steps in the order that avoids blocking a later step, and explains
why each step precedes the next.

**Before the sim (10 min).** Tip an actual kit out on the table and ask the
group what they would do first. Do not correct anyone yet — the wrong orders
are the material for the next part.

**With the sim (10 min).** Order the cards as a group, then turn on the reasons
and check them against the wrong orders from the warm-up. Each one will have
blocked something specific.

**After the sim (45 min).** Build it. The order will hold for about four steps
and then something kit-specific will come up, and applying the rule to that is
the real exercise.

**Check for understanding.** Ask: "Your kit's battery holder mounts on *top* of
the chassis instead of underneath. Where does it move to in the order?" Later —
after the driver board, before the shell — and the reason is the same rule
running on different geometry.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/robot-kit-assembly-sequence/main.html" width="100%" height="502" scrolling="no"></iframe>
```

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

## References

- [Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md) -- the chapter this MicroSim supports.
- [Differential Drive Chassis Explorer](../differential-drive-chassis-explorer/index.md) -- what the finished chassis does.
- [H-Bridge Direction and Speed Control](../h-bridge-direction-speed-control/index.md) -- the driver board on card four.
- [Club Inventory Lifecycle Workflow](../club-inventory-lifecycle-workflow/index.md) -- keeping kit parts together between sessions.
- [Design for assembly](https://en.wikipedia.org/wiki/Design_for_assembly) -- the engineering discipline this rule belongs to.
