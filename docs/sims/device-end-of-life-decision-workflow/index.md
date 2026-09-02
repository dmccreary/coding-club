---
title: "Device End-of-Life Decision Workflow"
description: "Route a retiring laptop to donation or to responsible disposal, and see how one club's retirement becomes another's intake."
image: sims/device-end-of-life-decision-workflow/device-end-of-life-decision-workflow.png
status: built
library: Mermaid
bloom_level: Analyze (L4)
---

# Device End-of-Life Decision Workflow

<iframe src="main.html" width="100%" height="742" scrolling="no"></iframe>

[Run the Device End-of-Life Decision Workflow MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A retiring laptop has two possible futures, and the gate between them is simply
whether it still works.

If it does, it is worth somebody's while even if it is no longer worth this
club's. The donation branch exists because a machine too slow for this year's
curriculum is perfectly adequate for a club just starting out. The last node makes
that concrete: the same flow, viewed from the receiving end, is
**refurbished device sourcing** -- how a club on a tight budget stocks its shelf.

If it does not work, or nobody can use it, the end-of-life plan takes over. Note
what that plan starts with: **wipe the data**. Not recycle, not dispose -- wipe.
A laptop leaving the club with student work or saved logins on it is a privacy
incident regardless of where it ends up, and it is the single step most likely to
be skipped when someone is clearing a cupboard in a hurry.

## How to Use

- **Hover a step** to preview it; **click** to pin the details.
- Both decision diamonds can send a laptop to the same end-of-life node -- there
  is more than one way to reach it.
- The orange node is the same flow seen from the other side: one club's donation
  is another club's refurbished purchase.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *differentiate*

**Learning objective:** Given a retiring laptop's condition, the learner
differentiates whether it should be routed to a donation program or to the club's
end-of-life plan.

**Before the sim (5 min).** Ask what the club currently does with a laptop that is
too slow to use. The honest answer in most clubs is "it is in a cupboard," which
is neither branch.

**With the sim (10 min).** Trace both gates. Point out that the end-of-life node
has two incoming arrows: a broken laptop and a working one nobody wants both end
up there. Then ask what has to happen before either leaves the building.

**After the sim (15 min).** Draft the club's own end-of-life plan in five lines,
starting with the wipe step and naming an actual certified recycler.

**Check for understanding.** Ask: "You are donating a working laptop to another
club. Name the step that must happen first, and why it matters even though the
receiving club is trustworthy." Wiping the data -- because the obligation is to
the students whose work is on it, not to the recipient.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/device-end-of-life-decision-workflow/main.html" width="100%" height="742" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 23: Network, Peripherals, and the Device Lifecycle](../../chapters/23-network-peripherals-device-lifecycle/index.md).

```text
Type: workflow
**sim-id:** device-end-of-life-decision-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Show how a laptop reaching the end of its useful service life is routed to donation or responsible retirement, and how that same flow can bring a refurbished device into a different club's fleet.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a retiring laptop's condition, the learner differentiates whether it should be routed to a donation program or to the club's end-of-life plan.

Steps (flowchart with decision diamonds):
1. Start: "Laptop Flagged for Retirement" -- click reveals "Arrives either from Chapter 22's repair workflow (beyond basic repair) or from simply reaching the end of its expected service life."
2. Decision: "Still Functional?" -- click reveals "A working-but-outdated laptop has more options than a laptop that no longer powers on or holds a charge."
3a. Branch "Yes" leads to "Evaluate for Donation" -- click reveals the Device Donation Program definition above.
4. Decision: "Another Program Can Use It?" -- click reveals "Some still-working laptops fit another club or family's needs even after this club retires them."
4a. Branch "Yes" leads to End: "Donated Outward" -- click reveals "Data is wiped per the device security policy, then the laptop is donated to another program through the club's donation program."
4b. Branch "No" leads to End: "Device End-of-Life Plan" -- click reveals the Device End Of Life Plan definition above.
3b. Branch "No" (not functional) leads directly to the same End: "Device End-of-Life Plan" node.
5. Side node (dashed connector): "Refurbished Device Sourcing" -- click reveals the Refurbished Device Sourcing definition above; connects back into Chapter 22's "New Laptop Arrives" step, showing how one club's donated-outward laptop can become another club's refurbished purchase.

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text, matching the definition already given in this chapter's prose.

Color coding: Gray for the start node, purple for the two decision diamonds, green for the donated-outward end state, amber for the device end-of-life end state, blue dashed for the refurbished-sourcing side node and its connector.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan.
```

## References

- [Chapter 23: Network, Peripherals, and the Device Lifecycle](../../chapters/23-network-peripherals-device-lifecycle/index.md) -- the chapter this MicroSim supports.
- [Device Lifecycle Workflow](../device-lifecycle-workflow/index.md) -- the repair workflow that feeds laptops into this one.
- [Electronic waste](https://en.wikipedia.org/wiki/Electronic_waste) -- why certified recycling matters.
- [Data remanence](https://en.wikipedia.org/wiki/Data_remanence) -- why deleting files is not wiping a disk.
- [Refurbishment (electronics)](https://en.wikipedia.org/wiki/Refurbishment_(electronics)) -- the receiving end of the donation flow.
