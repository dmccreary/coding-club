---
title: Student Progress Tracking Cycle
description: The learner explains what happens at each stage of the ongoing progress-tracking cycle.
status: scaffold
library: Mermaid
bloom_level: Understand (L2)
---

# Student Progress Tracking Cycle



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: workflow
**sim-id:** progress-tracking-cycle<br/>
**Library:** Mermaid<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/reading-for-kindergarten/tree/main/docs/sims/reading-progress-path

Purpose: Show the repeating cycle a mentor follows to keep a student's tracked progress current, so the practice reads as an ongoing habit rather than a one-time form to fill out.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: The learner explains what happens at each stage of the ongoing progress-tracking cycle.

Steps (circular flowchart):
1. "Observe" -- click reveals "A mentor watches a student work through a challenge card or kit during a session."
2. "Record" -- click reveals "The mentor marks the completed skill or badge in the tracking sheet before the session ends."
3. "Review" -- click reveals "Before the next session, a mentor -- often a different one -- reviews the student's row to see what's already mastered."
4. "Adjust" -- click reveals "The mentor picks the next appropriate challenge card based on what the record shows, then the cycle repeats at 'Observe.'"

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Four evenly spaced colors around the cycle, with an arrow from "Adjust" back to "Observe" to make the repeating nature visible.

Implementation: Mermaid flowchart (`graph LR` arranged to suggest a loop, with an explicit arrow from the last node back to the first) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node.
```

## Related Resources

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md)
