---
title: "Mentor-Gated Registration Flow"
description: "See how registering mentors first turns a 3:1 ratio into a capacity limit the software enforces, instead of a rule mentors have to police."
image: sims/mentor-gated-registration-flow/mentor-gated-registration-flow.png
status: built
library: Mermaid
bloom_level: Apply (L3)
---

# Mentor-Gated Registration Flow

<iframe src="main.html" width="100%" height="762" scrolling="no"></iframe>

[Run the Mentor-Gated Registration Flow MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Most clubs write "we aim for three students per mentor" in the charter and then
discover, on the first Saturday, that twenty-two students have signed up and four
mentors have shown up.

The fix is an ordering, not a rule. Mentors register **first**. The confirmed
mentor count is multiplied by three, and *that number* becomes the capacity the
registration form will accept. The ratio stops being an aspiration a mentor has
to enforce at the door and becomes a limit the form enforces at sign-up time.

The last step is the one clubs forget. Capacity is not set once. When a mentor
joins in week three, capacity rises and the waiting list moves; when one drops
out, capacity falls. Wiring that recalculation in from the start is what keeps
the ratio true all term.

## How to Use

- **Hover a step** to preview it; **click** to pin the details.
- The green steps are where the capacity number is computed and recomputed.
- The orange branch is what a family sees once capacity is reached -- a waiting
  list place, not a rejection.

## Lesson Plan

**Bloom level:** Apply (L3) -- *implement*

**Learning objective:** Given a mentor sign-up count, the learner correctly
calculates the resulting student registration capacity and traces what happens
once that capacity is reached.

**Before the sim (5 min).** Ask: "Six mentors have signed up. How many students
can we take?" Then ask the harder question: "Who stops the twenty-first family
from registering?"

**With the sim (10 min).** Trace the flow from mentor registration through the
capacity calculation. Stop at the decision diamond and ask what the family
experiences on each branch. Then follow the arrow back to the recalculation step
and ask when it fires.

**After the sim (10 min).** Work three numbers together: 4 mentors, 7 mentors, and
7 mentors where one drops out the week before.

**Check for understanding.** Ask: "A mentor cancels on Thursday and you are at
capacity. What should the system do?" Recalculating capacity downward -- and what
that means for families already registered -- is the judgement call worth
discussing.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/mentor-gated-registration-flow/main.html" width="100%" height="762" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 11: Choosing a Schedule and Building Registration](../../chapters/11-schedule-and-registration/index.md).

```text
Type: workflow
**sim-id:** mentor-gated-registration-flow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Show, step by step, how registering mentors first turns into a hard, enforced student capacity limit rather than an aspirational guideline mentors are expected to police manually.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: implement

Learning objective: Given a mentor sign-up count, the learner correctly calculates the resulting student registration capacity and traces what happens once that capacity is reached.

Steps (flowchart with decision diamond):
1. Start: "Mentor Registration Opens" -- click reveals "Mentor sign-up for the term opens first, before any student registration link is shared."
2. Process: "Mentors Confirm Availability" -- click reveals "Each mentor confirms which specific sessions they can attend, per mentor availability tracking from Chapter 9."
3. Process: "System Calculates Capacity (Mentors x 3)" -- click reveals "Confirmed mentor count is multiplied by the 3:1 ratio to set the hard student registration capacity limit."
4. Process: "Student Registration Opens at That Capacity" -- click reveals "The online registration form now accepts sign-ups only up to the calculated limit."
5. Decision: "Is Capacity Reached?" -- click reveals "The registration system checks this automatically on every new sign-up attempt."
6a. Process (if no): "Student Registers Normally" -- click reveals "Confirmation email sent immediately, per the registration confirmation process."
6b. Process (if yes): "Student Joins the Waiting List" -- click reveals "Added to the waiting list signup in order, notified automatically if a spot opens."
7. End: "Capacity Re-Calculated Whenever Mentor Count Changes" -- click reveals "A new mentor joining, or one dropping out, immediately updates the capacity and can move waiting-list families in."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Blue for mentor-side steps, green for the capacity calculation, yellow for the decision diamond, orange for the waiting-list branch

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("...")` directives for every node, rendered with a custom infobox panel beneath the diagram
```

## References

- [Chapter 11: Choosing a Schedule and Building Registration](../../chapters/11-schedule-and-registration/index.md) -- the chapter this MicroSim supports.
- [Student–teacher ratio](https://en.wikipedia.org/wiki/Student%E2%80%93teacher_ratio) -- the general measure the 3:1 target is a version of.
- [Waiting list](https://en.wikipedia.org/wiki/Waiting_list) -- how ordered queues are normally managed.
- [Capacity management](https://en.wikipedia.org/wiki/Capacity_management) -- matching demand to available supply.
