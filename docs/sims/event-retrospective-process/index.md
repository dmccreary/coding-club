---
title: The Event Retrospective Process
description: Given a completed session, the learner follows the correct sequence from survey collection through a documented, trackable lesson.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# The Event Retrospective Process



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 12: Running Events and Learning From Retrospectives](../../chapters/12-events-and-retrospectives/index.md)
