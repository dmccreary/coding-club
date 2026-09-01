---
title: Club Calendar Setup Workflow
description: The five one-time steps that set up a shared club calendar correctly, in the order that avoids rework.
image: sims/calendar-setup-workflow/calendar-setup-workflow.png
status: built
library: Mermaid
bloom_level: Apply (L3)
---

# Club Calendar Setup Workflow

<iframe src="main.html" width="100%" height="642" scrolling="no"></iframe>

[Run the Club Calendar Setup Workflow MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

This is a short sequence and every step is easy. The value is entirely in doing
them in this order, because three of the five are painful to retrofit.

**A separate calendar, not a personal one.** Club sessions on a mentor's own
calendar leave when that mentor does. This is the single most common setup
mistake and the hardest to undo.

**Visibility before sharing.** Set the default to view-only *before* the link goes
out. Change it afterwards and you are chasing people who already subscribed under
the old permissions.

**One recurring event, not fifteen.** A recurrence rule is also a single place to
edit when a date moves. Fifteen individual events is fifteen edits and at least
one that gets missed.

The last step hands off deliberately: once the link is shared, the club's shared
calendar access rules take over from this diagram.

## How to Use

- **Hover a step** to preview it; **click** to pin the details.
- The steps are a single linear sequence -- there are no branches, because there
  is only one correct order.

## Lesson Plan

**Bloom level:** Apply (L3) -- *sequence*

**Learning objective:** The learner sequences the steps required to set up a new
shared club calendar correctly the first time.

**Before the sim (5 min).** Ask whose calendar the club's sessions are on right
now. If the answer is a person's name rather than the club's, you have found the
problem.

**With the sim (10 min).** Walk the five steps and, at each one, ask what it would
cost to do it later instead. Visibility and the separate-calendar step are the
two with real costs.

**After the sim (15 min).** Actually create the calendar, following the diagram,
and stop at the share step.

**Check for understanding.** Ask: "You shared the link and then realised everyone
has edit access. What is the cost of fixing it now versus before?" Naming the
already-subscribed families is the point.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/calendar-setup-workflow/main.html" width="100%" height="642" scrolling="no"></iframe>
```

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

## References

- [Chapter 24: Student Data and Communication](../../chapters/24-student-data-and-communication/index.md) -- the chapter this MicroSim supports.
- [Calendaring software](https://en.wikipedia.org/wiki/Calendaring_software) -- how shared calendars and subscriptions work.
- [iCalendar](https://en.wikipedia.org/wiki/ICalendar) -- the format behind the shareable link.
- [Recurrence relation](https://en.wikipedia.org/wiki/Recurring_event) -- why one rule beats fifteen events.
