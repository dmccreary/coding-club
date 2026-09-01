---
title: Kit Lifecycle Workflow
description: Given a kit's current lifecycle stage and its damage-assessment outcome, the learner differentiates whether the kit should be reused as-is, sent down an upgrade path, or retired.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Kit Lifecycle Workflow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 21: Managing Your Kit Inventory and Signal Processing Kits](../../chapters/21-kit-inventory-signal-processing/index.md).

```text
Type: workflow
**sim-id:** kit-lifecycle-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Trace one kit through its entire lifecycle -- purchase, preparation, documentation, storage, circulation, and the reuse/upgrade/retire decision -- tying together every kit-management concept from this chapter into one connected path.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a kit's current lifecycle stage and its damage-assessment outcome, the learner differentiates whether the kit should be reused as-is, sent down an upgrade path, or retired.

Steps (flowchart with decision diamonds):
1. Start: "New Kit Type Needed" -- click reveals "A mentor identifies a gap in the shelf, such as no kit yet existing for a sensor a new lesson calls for."
2. Process: "Select a Vendor" -- click reveals the Kit Vendor Selection definition above.
3. Process: "Compare Total Cost" -- click reveals the Kit Cost Comparison definition above.
4. Decision: "Order 10 or More?" -- click reveals the Kit Bulk Purchasing definition above; both the Yes and No branches continue to the next step.
5. Process: "Unbox and Test" -- click reveals the Kit Unboxing Procedure definition above.
6. Process: "Run Safety Checklist" -- click reveals the Kit Safety Checklist definition above.
7. Process: "Write Documentation Sheet" -- click reveals the Kit Documentation Sheet definition above.
7a. Process (branch of 7): "Draw Wiring Diagram" -- click reveals the Kit Wiring Diagram definition above.
7b. Process (branch of 7): "Save Code Template" -- click reveals the Kit Code Template definition above.
8. Process: "Store in Labeled Bin" -- click reveals the Kit Storage Bin definition above.
9. Process: "Loan Out for a Session" -- click reveals the Kit Loaner Program definition above.
10. Process: "In Use -- Stuck?" -- click reveals "If a kit stops behaving as expected while in use, a mentor consults its debugging guide before assuming damage."
10a. Process (branch of 10): "Consult Debugging Guide" -- click reveals the Kit Debugging Guide definition above; loops back to step 10.
11. Process: "Kit Returned" -- click reveals the Kit Return Process definition above.
12. Decision: "Damage Assessment" -- click reveals the Kit Damage Assessment definition above; three branches follow.
12a. Branch "No Damage Found" leads to "Reuse As-Is" -- click reveals the Kit Reuse Strategy definition above; loops back to step 8.
12b. Branch "Fixable, but Outdated" leads to "Revise and Upgrade" -- click reveals the Kit Upgrade Path definition above; loops back to step 7.
12c. Branch "Unrepairable" leads to End: "Retire and Salvage Parts" -- click reveals "A kit with unsafe or unrepairable damage is retired; any still-good parts, such as a working Pico or jumper wires, are salvaged into other kits' bins rather than thrown away."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text, matching the definition already given in this chapter's prose.

Color coding: Blue for acquisition steps (vendor, cost, bulk order), amber for preparation steps (unboxing, safety, documentation), green for circulation steps (storage, loan, return), purple for the three decision diamonds, gray for the retire end state.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan.
```

## Related Resources

- [Chapter 21: Managing Your Kit Inventory and Signal Processing Kits](../../chapters/21-kit-inventory-signal-processing/index.md)
