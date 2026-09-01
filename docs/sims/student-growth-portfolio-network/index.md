---
title: Student Growth to Portfolio Network
description: Given a node in the growth-to-portfolio network, the learner explains what data flows into it and where that data goes next.
status: scaffold
library: vis-network
bloom_level: Understand (L2)
---

# Student Growth to Portfolio Network



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 25: Analyzing Club Data and Choosing the Right Tools](../../chapters/25-analyzing-club-data-and-tools/index.md).

```text
Type: graph-model
**sim-id:** student-growth-portfolio-network<br/>
**Library:** vis-network<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/theory-of-knowledge/tree/main/docs/sims/capstone-portfolio-web

Purpose: Show how raw session observations flow through growth metrics and mastery tracking into a portfolio, and finally into a scoped, view-only parent portal, so a mentor can see where each concept sits in the pipeline.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a node in the growth-to-portfolio network, the learner explains what data flows into it and where that data goes next.

Node types:
1. Session Observations (small gray circle) -- a mentor's in-session notes on what a student attempted
2. Student Growth Metrics (blue circle) -- aggregated measurements of a student's progress over time
3. Skill Mastery Tracking (green circle) -- the emerging/practicing/mastered level for each specific skill
4. Digital Portfolio System (amber circle) -- the actual saved work evidencing that mastery
5. Parent Access Portal (purple circle, leaf node) -- the single family's scoped, view-only window into the above

Edges:
1. Session Observations → Student Growth Metrics: "aggregated into"
2. Student Growth Metrics → Skill Mastery Tracking: "classified by skill level"
3. Skill Mastery Tracking → Digital Portfolio System: "evidenced by uploaded work"
4. Digital Portfolio System → Parent Access Portal: "exposed read-only to one family"

Layout: Left-to-right hierarchical, following the data-flow order above

Interactive features:
- Hover any node to show its one-line definition
- Click any node to highlight its direct neighbors and open a side-panel infobox with its full description
- Click any edge to reveal what the edge label means in this pipeline
- Zoom with the mouse wheel, pan by dragging the background

Visual styling: Node size uniform; edge arrows show direction of data flow, left to right

Legend: Node color meanings and an arrow explaining "data flows in this direction"

Implementation: vis-network JavaScript library, hierarchical layout, canvas size 800x450px.
```

## Related Resources

- [Chapter 25: Analyzing Club Data and Choosing the Right Tools](../../chapters/25-analyzing-club-data-and-tools/index.md)
