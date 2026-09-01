---
title: Matching Mentors and Optimizing a Schedule
description: Given a mentor-student matching graph and a set of candidate schedule slots, the learner examines the scores to identify the strongest mentor-student pairing and the schedule slot that satisfies every stated constraint.
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Matching Mentors and Optimizing a Schedule



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md).

```text
Type: graph-model
**sim-id:** mentor-matching-schedule-optimizer<br/>
**Library:** vis-network<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/organizational-analytics/tree/main/docs/sims/mentor-matching-network

Purpose: Let a learner examine a bipartite mentor-student matching graph alongside a small set of schedule-slot nodes, to see how both AI assisted mentor matching and AI scheduling optimization score multiple candidates before a person picks one.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given a mentor-student matching graph and a set of candidate schedule slots, the learner examines the scores to identify the strongest mentor-student pairing and the schedule slot that satisfies every stated constraint.

Node types:
1. Mentor nodes (blue circles, left column): five mentors, each labeled with one or two interest tags (e.g., "Robotics, Python")
2. Student nodes (green circles, right column): five students, each labeled with one or two interest tags
3. Schedule slot nodes (amber squares, bottom row): three candidate slots (Mon 5pm, Tue/Thu 4:30pm, Wed 6pm), each labeled with which constraint it violates, if any

Edges:
- Mentor-to-student edges weighted by shared-interest score (thicker edge = stronger match), click an edge to reveal the matching score and shared tags
- Dashed lines from each schedule slot to a small "constraints" icon, click to reveal which constraint (mentor availability, venue hours, holiday calendar) that slot satisfies or fails

Interactive features:
- Click any mentor or student node to highlight its strongest-scoring match and dim all other edges
- Click any schedule slot node to reveal its full constraint checklist in a side panel, with failed constraints marked in red and satisfied ones in green
- Button: "Show Top-Ranked Pairing and Slot" -- highlights the single best mentor-student match and the one fully-satisfying schedule slot simultaneously
- Zoom with the mouse wheel, pan by dragging the background

Visual styling: Blue for mentors, green for students, amber for schedule slots; edge thickness maps to match strength

Legend: Node color key (mentor, student, schedule slot) and edge-thickness meaning

Implementation: vis-network JavaScript library, bipartite layout with mentors and students in two columns and schedule slots in a row beneath, canvas size 800x480px.
```

## Related Resources

- [Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md)
