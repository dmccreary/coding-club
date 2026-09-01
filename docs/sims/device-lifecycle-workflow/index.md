---
title: Device Lifecycle Workflow
description: Given a returned laptop's condition, the learner differentiates whether it should be cleaned and returned to circulation, sent through basic repair, or flagged for outside repair.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Device Lifecycle Workflow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 22: Purchasing and Configuring Club Devices](../../chapters/22-purchasing-configuring-devices/index.md).

```text
Type: workflow
**sim-id:** device-lifecycle-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Trace one laptop through its full physical-management cycle -- imaging, labeling, inventory, storage, circulation, and the clean/repair decision -- tying together every physical-asset concept from this chapter into one connected path.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a returned laptop's condition, the learner differentiates whether it should be cleaned and returned to circulation, sent through basic repair, or flagged for outside repair.

Steps (flowchart with decision diamonds):
1. Start: "New Laptop Imaged and Configured" -- click reveals the Device Imaging Process definition above.
2. Process: "Apply Label" -- click reveals the Device Labeling System definition above.
3. Process: "Add to Inventory Record" -- click reveals the Device Inventory Tracking definition above.
4. Process: "Store in Charging Cart" -- click reveals the Device Charging Cart definition above.
5. Decision: "Leaving the Building?" -- click reveals "Whether a laptop stays on club premises for in-session use or goes home with a student determines whether a loaner agreement is required."
5a. Branch "Yes" leads to "Sign Loaner Agreement" -- click reveals the Device Loaner Agreement definition above; continues to step 6.
5b. Branch "No" leads to "Used In-Session" -- continues to step 6.
6. Process: "Laptop Returned" -- click reveals "The laptop comes back to the club, either at the end of a session or at the end of a loan period, and its condition is checked before it re-enters storage."
7. Decision: "Condition Check" -- click reveals "A mentor inspects the returned laptop for anything beyond normal wear before deciding its next step."
7a. Branch "Normal Wear" leads to "Run Cleaning Routine" -- click reveals the Device Cleaning Routine definition above; loops back to step 4.
7b. Branch "Minor Hardware Issue" leads to "Attempt Basic Repair" -- click reveals the Device Repair Basics definition above; loops back to step 4 if resolved.
7c. Branch "Beyond Basic Repair" leads to End: "Flag for Outside Repair" -- click reveals "Damage beyond a mentor's safe repair boundary is logged in the inventory as out of service and sent to a manufacturer or repair shop, a path Chapter 23 continues with the club's full device end-of-life planning."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text, matching the definition already given in this chapter's prose.

Color coding: Blue for acquisition steps (imaging, labeling, inventory), amber for storage (charging cart), green for circulation steps (loaner agreement, return), purple for the two decision diamonds, gray for the outside-repair end state.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan.
```

## Related Resources

- [Chapter 22: Purchasing and Configuring Club Devices](../../chapters/22-purchasing-configuring-devices/index.md)
