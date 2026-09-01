---
title: Student Progress Tracking Cycle
description: The four-stage habit that keeps a student's record current, and lets a different mentor pick up where the last one left off.
image: sims/progress-tracking-cycle/progress-tracking-cycle.png
status: built
library: Mermaid
bloom_level: Understand (L2)
---

# Student Progress Tracking Cycle

<iframe src="main.html" width="100%" height="402" scrolling="no"></iframe>

[Run the Student Progress Tracking Cycle MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Progress tracking fails in clubs for one reason: it is treated as a form to fill
in rather than a habit to repeat. This cycle is the habit.

The stage that carries the most weight is **Record**, and specifically *when* it
happens -- before the session ends, while the mentor is still in the room. A
skill recorded on the drive home is recorded from memory, and a skill recorded
next week is not recorded at all.

**Review** is the stage that makes the whole thing worth doing, because it is
usually a *different* mentor reading the row. Club volunteers rotate. A record
that only makes sense to the person who wrote it is a private note, not a
tracking system.

**Adjust** closes the loop by turning the record into a decision: which challenge
card this student gets next. Without it the sheet is an archive.

## How to Use

- **Hover a stage** to preview it; **click** to pin the details.
- Follow the return arrow from **Adjust** back to **Observe** -- the cycle runs
  once per student per session, not once per term.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** The learner explains what happens at each stage of the
ongoing progress-tracking cycle.

**Before the sim (5 min).** Ask a mentor to name, without looking, what the student
they sat with last week has already mastered. The hesitation is the case for the
cycle.

**With the sim (10 min).** Walk the four stages and dwell on the timing of
**Record**. Then ask who the audience for the record is -- the answer "a different
mentor next week" changes how people write.

**After the sim (15 min).** Run one real cycle: observe a student, record before
the session ends, and have a second mentor use the row to pick the next card.

**Check for understanding.** Ask: "What is the difference between this sheet and a
gradebook?" A gradebook records the past; this record chooses the next task.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/progress-tracking-cycle/main.html" width="100%" height="402" scrolling="no"></iframe>
```

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

## References

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md) -- the chapter this MicroSim supports.
- [Feedback Loop Cycle](../feedback-loop-cycle/index.md) -- the club's other four-stage loop, aimed at families rather than students.
- [Formative assessment](https://en.wikipedia.org/wiki/Formative_assessment) -- assessment that changes what happens next.
- [Mastery learning](https://en.wikipedia.org/wiki/Mastery_learning) -- the model behind picking the next card from what is mastered.
