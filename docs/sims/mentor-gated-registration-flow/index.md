---
title: Mentor-Gated Registration Flow
description: Given a mentor sign-up count, the learner correctly calculates the resulting student registration capacity and traces what happens once that capacity is reached.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Mentor-Gated Registration Flow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 11: Choosing a Schedule and Building Registration](../../chapters/11-schedule-and-registration/index.md)
