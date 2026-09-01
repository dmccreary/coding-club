---
title: Device End-of-Life Decision Workflow
description: Given a retiring laptop's condition, the learner differentiates whether it should be routed to a donation program or to the club's end-of-life plan.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Device End-of-Life Decision Workflow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 23: Network, Peripherals, and the Device Lifecycle](../../chapters/23-network-peripherals-device-lifecycle/index.md)
