---
title: Should You Start This Club?
description: Given survey results and a candidate venue and team, the learner follows the correct sequence of feasibility checks to decide whether to establish a new club.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Should You Start This Club?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Gauging Interest and Holding Your First Meeting](../../chapters/05-gauging-interest-first-meeting/index.md).

```text
Type: workflow
**sim-id:** club-feasibility-decision-path<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Walk a prospective founder through the concrete decision sequence from survey results to a go/no-go decision to establish the club.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: implement

Learning objective: Given survey results and a candidate venue and team, the learner follows the correct sequence of feasibility checks to decide whether to establish a new club.

Steps (flowchart with decision diamonds):
1. Start: "Interest Survey Analyzed" -- click reveals "Confirm at least one age range shows strong concentrated interest, as in the chart above."
2. Decision: "Is a Venue Confirmed?" -- click reveals "A confirmed venue means a specific room, day, and time -- not a vague 'maybe we could use the community room.'"
3a. Process (if no): "Secure a Venue Agreement First" -- click reveals "Return to Chapter 4's venue agreement guidance before proceeding further."
3b. Decision (if yes): "Is a Founding Team of 2+ People Assembled?" -- click reveals "One person can start a club, but a founding team of two to four sharply reduces single leader dependency from day one."
4a. Process (if no): "Recruit at Least One Co-Founder Before Launch" -- click reveals "Even a single committed co-founder splits the paperwork, background-check coordination, and first-session planning."
4b. Decision (if yes): "Is at Least One Background-Checked Mentor Confirmed?" -- click reveals "A club cannot legally run its first session without at least one screened adult present, per Chapter 3."
5a. Process (if no): "Complete Background Checks Before Announcing a Date" -- click reveals "Background checks can take one to three weeks to return -- start them early."
5b. End: "Establish the Club and Set a First Meeting Date" -- click reveals "All four feasibility pillars are in place: evidence of interest, a venue, a team, and a screened mentor."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Blue for assessment/decision steps, yellow for the decision diamonds, orange for "not yet ready" remediation steps, green for the final go decision

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("...")` directives for every node, rendered with a custom infobox panel beneath the diagram
```

## Related Resources

- [Chapter 5: Gauging Interest and Holding Your First Meeting](../../chapters/05-gauging-interest-first-meeting/index.md)
