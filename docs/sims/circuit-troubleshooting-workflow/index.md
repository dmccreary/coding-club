---
title: Circuit Troubleshooting Workflow
description: Work the four checks in the order that eliminates the cheapest and most likely faults first.
image: sims/circuit-troubleshooting-workflow/circuit-troubleshooting-workflow.png
status: built
library: Mermaid
bloom_level: Analyze (L4)
---

# Circuit Troubleshooting Workflow

<iframe src="main.html" width="100%" height="802" scrolling="no"></iframe>

[Run the Circuit Troubleshooting Workflow MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

When an LED does not light, the instinct is to suspect the LED. That is almost
always the last thing wrong with it, and swapping it first tells you nothing
while adding a variable.

The order in this diagram is not arbitrary. It runs from the cheapest and most
common cause to the most expensive and least likely. Power takes ten seconds to
check and is dead more often than anyone expects. Continuity takes a minute and
catches the breadboard's favourite trick -- a jumper one hole off, or a row split
by the centre channel. Orientation catches the backwards LED, which is not
damaged, merely silent. Only then is it worth suspecting the part.

Every step branches straight to **Fault Found** because the checklist is meant to
stop the moment something fails. Continuing past a found fault does not confirm
it; it just adds noise.

## How to Use

- **Hover a check** to preview it; **click** to pin its explanation and a
  concrete example.
- Follow the labelled edges: each check either passes to the next one or drops
  straight to **Fault Found**.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *examine*

**Learning objective:** Given a non-working LED circuit, the learner examines the
four-step troubleshooting order (power, continuity, orientation, component) to
isolate the most likely fault first.

**Before the sim (5 min).** Build a circuit that does not work -- reverse the LED
-- and hand it to a group. Watch what they check first, and time how long it
takes them to find it.

**With the sim (10 min).** Walk the four checks in order and, at each one, ask
what a *pass* rules out. That question is the analysis the objective is after:
passing the continuity check does not mean the circuit works, it means one whole
class of fault is gone.

**After the sim (15 min).** Prepare three broken circuits with different faults.
Groups must name the check that catches each one and justify why the earlier
checks passed.

**Check for understanding.** Ask: "You checked the component first and it was
fine. What have you learned?" Almost nothing -- and understanding why is the
point of the ordering.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/circuit-troubleshooting-workflow/main.html" width="100%" height="802" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 18: Robots, USB Basics, and Electronics Workshop Skills](../../chapters/18-robots-usb-electronics-workshop/index.md).

```text
Type: workflow
**sim-id:** circuit-troubleshooting-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Let a learner click through the four-step troubleshooting order from the worked example above and see what each check actually rules out.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given a non-working LED circuit, the learner examines the four-step troubleshooting order (power, continuity, orientation, component) to isolate the most likely fault first.

Steps: 1. "Check Power — is voltage actually present at the rail?"; 2. "Check Continuity — is there an unbroken path wire by wire?"; 3. "Check Orientation — is every polarized part installed the right way?"; 4. "Test the Component — swap in a known-good part to confirm or rule it out"

Interactivity requirement: Every node MUST carry a `click` directive opening an infobox with that step's full explanation and a concrete example, e.g. `click step1 call showInfo("check-power")`.

Visual style: Vertical Mermaid flowchart, steps 1 through 4 in sequence, with a "Fault Found" end node branching off each step to represent stopping the checklist early once a cause is confirmed.

Implementation: Mermaid flowchart rendered in a wrapper page at the sim-id path, with a JavaScript `showInfo()` callback populating an infobox beneath the diagram on any node click; each infobox reuses the worked-example wording from the chapter (power check, continuity check, orientation check, component check).
```

## References

- [Chapter 18: Robots, USB Basics, and Electronics Workshop Skills](../../chapters/18-robots-usb-electronics-workshop/index.md) -- the chapter this MicroSim supports.
- [Troubleshooting](https://en.wikipedia.org/wiki/Troubleshooting) -- the general method of eliminating causes in order.
- [Continuity test](https://en.wikipedia.org/wiki/Continuity_test) -- what the second check actually measures.
- [Breadboard](https://en.wikipedia.org/wiki/Breadboard) -- why rows split at the centre channel.
- [Ohm's Law Current Calculator](../ohms-law-current-calculator/index.md) -- checking the design before you have to debug the build.
