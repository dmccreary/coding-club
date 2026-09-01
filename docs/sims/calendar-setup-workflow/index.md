---
title: Club Calendar Setup Workflow
description: The learner sequences the steps required to set up a new shared club calendar correctly the first time.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Club Calendar Setup Workflow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: workflow
**sim-id:** calendar-setup-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Sequence the one-time steps of creating a club calendar, ending at the point where shared access -- covered next -- takes over.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: sequence

Learning objective: The learner sequences the steps required to set up a new shared club calendar correctly the first time.

Steps (flowchart):
1. "Create New Calendar" -- click reveals "A calendar distinct from any mentor's personal calendar."
2. "Name It Clearly" -- click reveals "For example, 'Tuesday Coding Club 2026,' not the default 'Calendar 3.'"
3. "Set Default Visibility" -- click reveals "Typically view-only for anyone with the link, reserving edit access for the lead mentor."
4. "Add Recurring Sessions" -- click reveals "Every session date for the semester added as one recurring weekly event, not one at a time."
5. "Share the Link" -- click reveals "The link goes out to families and mentors, and shared calendar access rules take over from here."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: A single consistent color for all five steps, since this is a simple linear sequence rather than a branching decision.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node.
```

## Related Resources

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md)
