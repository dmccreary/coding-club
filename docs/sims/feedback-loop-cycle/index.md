---
title: Feedback Loop Cycle
description: The four stages that keep survey responses from disappearing into an unread inbox -- and why the last one is the load-bearing stage.
image: sims/feedback-loop-cycle/feedback-loop-cycle.png
status: built
library: Mermaid
bloom_level: Understand (L2)
---

# Feedback Loop Cycle

<iframe src="main.html" width="100%" height="402" scrolling="no"></iframe>

[Run the Feedback Loop Cycle MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Most clubs do the first three stages of this cycle. Very few do the fourth, and
the fourth is what makes the other three worth doing.

Follow the worked example round the loop. Families say the start time is too
early (**collect**). Several say it, not one (**analyze**). The club moves the
start by fifteen minutes (**act**). And then -- the stage that gets skipped -- a
message goes out saying *we moved the start time because you told us to*
(**report back**).

Skip that message and the change still happened, so it feels like nothing was
lost. What was lost shows up next term, when the survey response rate halves.
Families stop answering surveys that appear to change nothing, and from the
inside that looks like apathy rather than a consequence of the club's own
silence.

The arrow from **Report Back** to **Collect** is the whole diagram. Without it
this is a pipeline, not a loop.

## How to Use

- **Hover a stage** to preview it; **click** to pin the details.
- Follow the return arrow from **Report Back** to **Collect** -- that edge is what
  makes this a cycle rather than a one-way process.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** The learner explains what happens at each stage of a
closed feedback loop, and why skipping the last stage undermines the whole cycle.

**Before the sim (5 min).** Ask who has filled in a survey and never heard anything
back. Every hand goes up. Ask whether they filled in the next one.

**With the sim (10 min).** Walk the four stages with the start-time example. Then
cover the **Report Back** node and ask what the cycle becomes without it: a
pipeline that ends in an inbox.

**After the sim (10 min).** Draft the report-back message for a change the club has
actually made recently but never announced.

**Check for understanding.** Ask: "The club acted on the feedback but never told
anyone. What is the cost, and when does it show up?" A collapsed response rate,
next term -- and the delay is what makes the mistake so easy to keep making.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/feedback-loop-cycle/main.html" width="100%" height="402" scrolling="no"></iframe>
```

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

## References

- [Chapter 24: Student Data and Communication](../../chapters/24-student-data-and-communication/index.md) -- the chapter this MicroSim supports.
- [The Club Improvement Cycle](../club-improvement-cycle/index.md) -- the same loop applied to mentor observations rather than family surveys.
- [Feedback](https://en.wikipedia.org/wiki/Feedback) -- why a loop behaves differently from a chain.
- [Survey methodology](https://en.wikipedia.org/wiki/Survey_methodology) -- including what drives response rates.
- [The Event Retrospective Process](../event-retrospective-process/index.md) -- the club's other evidence-collection loop.
