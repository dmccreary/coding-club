---
title: Kit Lifecycle Workflow
description: Follow one kit from a gap on the shelf through purchase, prep, circulation, and the three-way decision that decides its fate.
image: sims/kit-lifecycle-workflow/kit-lifecycle-workflow.png
status: built
library: Mermaid
bloom_level: Analyze (L4)
---

# Kit Lifecycle Workflow

<iframe src="main.html" width="100%" height="1042" scrolling="no"></iframe>

[Run the Kit Lifecycle Workflow MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Every term in this chapter is a stage in one loop, and this diagram is that loop
with all of them in place at once.

The shape worth noticing is that most of it is a **cycle**, not a line. A kit that
comes back undamaged goes straight to the storage bin and round again. A kit that
is fixable but dated does not go back to the bin -- it goes back to the
*documentation* step, because an upgrade means the wiring diagram and code
template have to be redrawn before the kit is trustworthy again.

Only the third branch exits the loop. Retiring a kit is not throwing it away: a
working Pico and a bag of jumper wires are salvaged into other bins, which is why
the terminal node says "and salvage parts."

The other loop is smaller and easy to miss. **In Use → Consult Debugging Guide →
In Use** is the club's answer to "it stopped working." The guide gets consulted
before anyone concludes the kit is damaged, and that ordering is what keeps
perfectly good kits out of the repair pile.

## How to Use

- **Hover a stage** to preview it; **click** to pin the full definition.
- The colours group the lifecycle: blue for acquisition, amber for preparation,
  green for circulation, purple for the two decision points.
- Follow the arrows back from **Reuse As-Is** and **Revise and Upgrade** to see
  where each rejoins the loop -- they do not rejoin at the same place.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *differentiate*

**Learning objective:** Given a kit's current lifecycle stage and its
damage-assessment outcome, the learner differentiates whether the kit should be
reused as-is, sent down an upgrade path, or retired.

**Before the sim (5 min).** Put a returned kit on the table with one bent pin and
ask the group what to do with it. Answers will range from "bin it" to "it's
fine." Both are decisions made without a process.

**With the sim (15 min).** Trace the happy path first, then focus on the damage
assessment diamond. For each of its three branches ask two questions: what
condition sends a kit down it, and where does the kit end up? The last question
is the one that separates the reuse and upgrade branches.

**After the sim (15 min).** Take three real kits off the shelf and walk each
through the assessment. Record the outcome and the reasoning on each kit's
documentation sheet.

**Check for understanding.** Ask: "A kit works perfectly but its sensor has been
discontinued and the replacement has a different pin layout. Which branch?"
Upgrade, not retire -- and it must go back through documentation, because the
wiring diagram is now wrong.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/kit-lifecycle-workflow/main.html" width="100%" height="1042" scrolling="no"></iframe>
```

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

## References

- [Chapter 21: Kit Inventory and Signal Processing](../../chapters/21-kit-inventory-signal-processing/index.md) -- the chapter this MicroSim supports.
- [Device Lifecycle Workflow](../device-lifecycle-workflow/index.md) -- the same lifecycle thinking applied to laptops.
- [Product lifecycle](https://en.wikipedia.org/wiki/Product_lifecycle) -- the general framing this borrows.
- [Inventory management](https://en.wikipedia.org/wiki/Inventory_management) -- tracking what you own and where it is.
- [Preventive maintenance](https://en.wikipedia.org/wiki/Preventive_maintenance) -- why the return process quick-tests before restocking.
