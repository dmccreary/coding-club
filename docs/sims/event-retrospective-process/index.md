---
title: "The Event Retrospective Process"
description: "Follow one session from its final minute to a change in the next session, through the debrief, the survey, and the log."
image: sims/event-retrospective-process/event-retrospective-process.png
status: built
library: Mermaid
bloom_level: Apply (L3)
---

# The Event Retrospective Process

<iframe src="main.html" width="100%" height="702" scrolling="no"></iframe>

[Run the The Event Retrospective Process MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Chapter 1 introduced the improvement cycle as an idea. This is the same cycle
with real tools attached and real deadlines on each step.

Two things collect evidence, and they collect different things. The **debrief**
happens the same day, before mentors leave the venue, and captures what the
adults in the room noticed. The **survey** goes to families within 24 hours and
captures what the students and parents experienced. Neither one alone is enough;
a session can feel smooth to mentors and frustrating to half the students.

Both streams land in the same place: the lessons learned log. And the log is only
useful because of the step after it -- somebody actually reads it looking for
themes that repeat. One family's complaint is noise. The same complaint from four
families across three sessions is a curriculum problem.

## How to Use

- **Hover a step** to preview it; **click** to pin the details.
- Blue steps collect evidence, green steps record and review it, and the amber
  step is where the club actually changes.

## Lesson Plan

**Bloom level:** Apply (L3) -- *implement*

**Learning objective:** Given a completed session, the learner follows the correct
sequence from survey collection through a documented, trackable lesson.

**Before the sim (5 min).** Ask what the club currently does after a session ends.
For most clubs the honest answer is "we pack up and go home," which is exactly
the gap this process fills.

**With the sim (10 min).** Note the two deadlines: the debrief is *same day*, the
survey goes out *within 24 hours*. Ask why both are so tight. Then stop at the
review step and ask what makes a log worth keeping.

**After the sim (15 min).** Run a real debrief for the club's most recent session
using the process in the diagram, and write the first entries in the log.

**Check for understanding.** Ask: "A mentor mentions on the drive home that the
projector was hard to see. Where does that go, and what would have to happen for
it to change anything?" Naming the log, and the pattern threshold, is the
objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/event-retrospective-process/main.html" width="100%" height="702" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 12: Running Events and Learning From Retrospectives](../../chapters/12-events-and-retrospectives/index.md).

```text
Type: workflow
**sim-id:** event-retrospective-process<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Show how a single post-event survey and debrief becomes tracked, actionable evidence, connecting this chapter's specific tools back to Chapter 1's continuous improvement cycle.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: implement

Learning objective: Given a completed session, the learner follows the correct sequence from survey collection through a documented, trackable lesson.

Steps (flowchart):
1. Start: "Session Ends" -- click reveals "Post-event survey link goes out to families within 24 hours, while the experience is still fresh."
2. Process: "Event Debriefing Meeting (Same Day)" -- click reveals "Mentors spend 10-15 minutes covering the retrospective checklist before leaving the venue."
3. Process: "Survey Responses Collected and Analyzed" -- click reveals "Responses are reviewed for patterns repeated across multiple families, not single outliers."
4. Process: "Findings Recorded as Tracked Lessons" -- click reveals "Debrief notes and survey patterns both get written into the lessons learned log from Chapter 1."
5. Process: "Club Leader Reviews the Log for Patterns" -- click reveals "Recurring themes across several sessions trigger proactive mentor engagement or a curriculum adjustment."
6. End: "Change Applied to the Next Session" -- click reveals "The cycle repeats -- this is Chapter 1's continuous improvement cycle in its fully operational form."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Blue for data-collection steps, green for the tracking and review steps, amber for the resulting change

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("...")` directives for every node, rendered with a custom infobox panel beneath the diagram
```

## References

- [Chapter 12: Running Events and Learning From Retrospectives](../../chapters/12-events-and-retrospectives/index.md) -- the chapter this MicroSim supports.
- [The Club Improvement Cycle](../club-improvement-cycle/index.md) -- the Chapter 1 cycle this process instantiates.
- [Retrospective](https://en.wikipedia.org/wiki/Retrospective) -- the practice as used in software teams.
- [After-action review](https://en.wikipedia.org/wiki/After-action_review) -- the same-day debrief pattern.
- [Post-occupancy evaluation](https://en.wikipedia.org/wiki/Post-occupancy_evaluation) -- surveying users after the fact, in another field.
