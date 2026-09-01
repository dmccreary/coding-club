---
title: Club Inventory Lifecycle Workflow
description: Given an item's current inventory stage and an audit outcome, the learner differentiates whether the item should return to storage, be flagged overdue, or enter the lost item policy.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Club Inventory Lifecycle Workflow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 34: Establishing an Oversight Board and Inventory System](../../chapters/34-oversight-board-and-inventory/index.md).

```text
Type: workflow
**sim-id:** club-inventory-lifecycle-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Trace one tagged item through its entire inventory lifecycle -- tagging, storage, checkout, return, periodic audit, and the branch into the lost item policy -- tying together every inventory concept from this chapter into one connected path.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given an item's current inventory stage and an audit outcome, the learner differentiates whether the item should return to storage, be flagged overdue, or enter the lost item policy.

Steps (flowchart with decision diamonds):
1. Start: "New Item Arrives" -- click reveals the Club Inventory System definition above.
2. Process: "Print Sticker" -- click reveals the Inventory Sticker Printing definition above.
3. Process: "Generate QR Code" -- click reveals the QR Code On Kits definition above.
4. Process: "Log via Asset Tagging Process" -- click reveals the Asset Tagging Process definition above.
5. Process: "Store on Shelf" -- click reveals "The item sits in general circulation, available for the next checkout."
6. Process: "Scan Out (Checkout System)" -- click reveals the Equipment Checkout System definition above.
7. Decision: "Returned by Due Date?" -- click reveals "The system compares today's date against the due date recorded at checkout."
7a. Branch "Yes" leads to Process: "Scan In (Return Tracking)" -- click reveals the Equipment Return Tracking definition above; loops back to step 5.
7b. Branch "No" leads to Process: "Flag as Overdue" -- click reveals "The mentor dashboard surfaces the overdue item automatically, prompting a follow-up before it becomes an audit surprise."; loops back to step 7a once resolved.
8. Process (periodic, separate branch from step 5): "Semester Audit" -- click reveals the Inventory Audit Process definition above.
9. Decision: "Item Found During Audit?" -- click reveals "Every logged item not currently checked out should be physically present; anything missing moves to the next step."
9a. Branch "Yes" loops back to step 5.
9b. Branch "No" leads to End: "Lost Item Policy" -- click reveals the Lost Item Policy definition above.

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text, matching the definition already given in this chapter's prose.

Color coding: Blue for tagging steps (sticker, QR, asset tagging), green for circulation steps (storage, checkout, return), purple for the decision diamonds, red for the overdue-flag and lost-item-policy end states.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan; layout reflows responsively on narrow screens.
```

## Related Resources

- [Chapter 34: Establishing an Oversight Board and Inventory System](../../chapters/34-oversight-board-and-inventory/index.md)
