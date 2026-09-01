---
title: Building and Reading an Influence Graph
description: Given a sample influence graph of a local community, the learner examines it to identify under-reached populations of mentors and students.
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Building and Reading an Influence Graph



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md).

```text
Type: graph-model
**sim-id:** mentor-recruiting-influence-graph<br/>
**Library:** vis-network<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/organizational-analytics/tree/main/docs/sims/mentor-matching-network

Purpose: Let a learner examine a sample community influence graph, distinguishing connected outreach channels from under-reached populations, and practice identifying the highest-leverage node for mentor recruiting.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given a sample influence graph of a local community, the learner examines it to identify under-reached populations of mentors and students.

Node types:
1. Club Outreach (center, gray square) -- the club's current announcement channel
2. Connected nodes (green circles): PTA Email List, Library Bulletin Board -- already linked to Club Outreach
3. Under-reached nodes (amber circles, no current edge to Club Outreach): Neighborhood Congregation, Boys & Girls Club Program, Women Who Code Meetup, Local Engineering Employer

Edges:
- Solid green edges from Club Outreach to each connected node, labeled "reaches"
- Dashed gray edges (present but unhighlighted by default) from each under-reached node toward the community it represents, labeled "would reach"

Interactive features:
- Click any node to see its population size estimate and whether it currently has an edge to Club Outreach
- Button: "Highlight Under-Reached Nodes" -- turns all amber nodes and their labels bold and pulses them briefly
- Button: "Show Highest-Leverage Node" -- highlights the Women Who Code Meetup node specifically and reveals why it was chosen (largest untapped population with a plausible single point of contact)
- Zoom with the mouse wheel, pan by dragging the background

Visual styling: Green fill for connected nodes, amber fill for under-reached nodes, gray for the central club node; edge color matches the source node's connection status

Legend: Node color key (connected vs. under-reached) and edge label meaning

Implementation: vis-network JavaScript library, force-directed layout with the Club Outreach node pinned near center, canvas size 800x500px.
```

## Related Resources

- [Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md)
