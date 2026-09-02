---
title: "Board Governance Cycle"
description: "The routine seat-rotation cycle a board runs on, and the separate trigger a founder's departure fires."
image: sims/board-governance-cycle/board-governance-cycle.png
status: built
library: Mermaid
bloom_level: Analyze (L4)
---

# Board Governance Cycle

<iframe src="main.html" width="100%" height="822" scrolling="no"></iframe>

[Run the Board Governance Cycle MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

There are two things in this diagram and the objective is to stop confusing them.

The **cycle** on the left is routine. A seat is filled, duties are assigned,
the board meets on its cadence, and eventually a term limit is reached and the
seat rotates off -- back to the top, for that seat only. The word *staggered*
matters: seats vacate on their own schedules, never all at once, so a board never
loses all its experience in one year.

The **trigger** on the right is not part of that cycle at all. A founder or lead
mentor departing is an event, not a stage, and it fires the written succession
plan regardless of where any seat happens to be in its term.

Clubs conflate these, and the cost is specific: they treat succession planning as
something the board will get to during a normal meeting, which means it does not
exist on the day it is needed. A plan improvised under pressure is the failure
mode the right-hand branch exists to prevent.

## How to Use

- **Hover a step** to preview it; **click** to pin the definition.
- Follow the loop from **Meet on a Fixed Cadence** through the term check and back
  -- that is the routine cycle.
- The red nodes are the separate departure trigger; nothing in the cycle leads
  into them.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *differentiate*

**Learning objective:** Given a board's current state, the learner differentiates
the routine seat-rotation cycle from the one-time succession-plan trigger that a
founder's departure activates.

**Before the sim (5 min).** Ask who runs the club if the founder is unavailable
next Saturday. Then ask if that answer is written down anywhere.

**With the sim (10 min).** Walk the cycle first, then the trigger. Ask what
connects them -- the answer is nothing, and that is the point. The trigger fires
on its own timing.

**After the sim (15 min).** Draft the succession plan's three concrete parts: who
acts as lead, which signing authorities transfer, and where the document lives.

**Check for understanding.** Ask: "A treasurer's term expires the same month the
founder steps down. Which path handles which?" Two separate paths running at
once, and being able to keep them apart is the objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/board-governance-cycle/main.html" width="100%" height="822" scrolling="no"></iframe>
```

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

## References

- [Chapter 34: Establishing an Oversight Board and Inventory System](../../chapters/34-oversight-board-and-inventory/index.md) -- the chapter this MicroSim supports.
- [Mentor Development Pipeline](../mentor-development-pipeline/index.md) -- where the successor comes from.
- [Board of directors](https://en.wikipedia.org/wiki/Board_of_directors) -- roles, terms, and staggered boards.
- [Succession planning](https://en.wikipedia.org/wiki/Succession_planning) -- preparing before the vacancy exists.
- [Term limit](https://en.wikipedia.org/wiki/Term_limit) -- why rotation is built in deliberately.
