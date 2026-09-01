---
title: Feedback Loop Cycle
description: The learner explains what happens at each stage of a closed feedback loop, and why skipping the last stage undermines the whole cycle.
status: scaffold
library: Mermaid
bloom_level: Understand (L2)
---

# Feedback Loop Cycle



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: workflow
**sim-id:** feedback-loop-cycle<br/>
**Library:** Mermaid<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/xapi-course/tree/main/docs/sims/instructional-design-feedback-loop

Purpose: Show the four-stage cycle that keeps feedback from disappearing into an unread inbox, using the start-time worked example to make each stage concrete.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: The learner explains what happens at each stage of a closed feedback loop, and why skipping the last stage undermines the whole cycle.

Steps (circular flowchart):
1. "Collect" -- click reveals "A post-event survey gathers responses, such as families noting the start time is too early."
2. "Analyze" -- click reveals "The club reviews responses for a pattern, such as several families raising the same start-time concern."
3. "Act" -- click reveals "The club makes a real change, such as shifting the start time by fifteen minutes."
4. "Report Back" -- click reveals "A follow-up message tells families what changed and credits the survey, then the cycle repeats at 'Collect.'"

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Four evenly spaced colors around the cycle, with an arrow from "Report Back" back to "Collect" to make the repeating nature visible.

Implementation: Mermaid flowchart (`graph LR` arranged to suggest a loop, with an explicit arrow from the last node back to the first) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node.
```

## Related Resources

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md)
