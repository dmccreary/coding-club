---
title: Board Governance Cycle
description: Given a board's current state, the learner differentiates the routine seat-rotation cycle from the one-time succession-plan trigger that a founder's departure activates.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Board Governance Cycle



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 34: Establishing an Oversight Board and Inventory System](../../chapters/34-oversight-board-and-inventory/index.md).

```text
Type: workflow
**sim-id:** board-governance-cycle<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Trace how recruitment, roles, meeting cadence, and term limits run as one continuous cycle for a board seat, and show succession planning as the separate event that fires the moment a founder or lead mentor actually departs.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a board's current state, the learner differentiates the routine seat-rotation cycle from the one-time succession-plan trigger that a founder's departure activates.

Steps (flowchart with a decision diamond and a separate trigger branch):
1. Start: "Board Seat Vacant" -- click reveals "A seat with no current holder, either because the club is forming its first board or a term has just expired."
2. Process: "Recruit for the Seat" -- click reveals the Board Member Recruitment definition above.
3. Process: "Assign Roles and Duties" -- click reveals the Board Roles And Duties definition above.
4. Process: "Meet on a Fixed Cadence" -- click reveals the Board Meeting Cadence definition above.
5. Decision: "Term Limit Reached?" -- click reveals the Board Term Limits definition above; "No" loops back to step 4.
6. Process (from "Yes"): "Seat Rotates Off (Staggered)" -- click reveals "The seat vacates on its own staggered schedule, never at the same time as every other seat."; loops back to step 1 for that one seat.
7. Separate trigger, drawn off to the side and connected by a dashed line rather than the main cycle: "Founder or Lead Mentor Departs" -- click reveals "An unplanned or planned departure, the event succession planning exists to prepare for."
8. Process (from trigger): "Execute Written Succession Plan" -- click reveals the Succession Planning definition above.
9. End (from step 8): "Acting Lead Named, Signing Authority Transfers" -- click reveals "The board's prepared answer takes effect immediately, rather than being improvised under pressure."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text, matching the definitions already given in this chapter's prose.

Color coding: Blue for the recruitment-and-assignment steps, gold for the recurring meeting-and-term-limit cycle, the dashed trigger branch and its two downstream nodes in red to visually separate a rare, high-stakes event from routine governance.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan; layout reflows responsively on narrow screens.
```

## Related Resources

- [Chapter 34: Establishing an Oversight Board and Inventory System](../../chapters/34-oversight-board-and-inventory/index.md)
