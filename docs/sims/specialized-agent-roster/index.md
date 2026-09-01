---
title: Meet the Specialized Agent Roster
description: Given a club task outside day-to-day operations, the learner classifies which of the five specialized agents is the right match for it.
status: scaffold
library: vis-network
bloom_level: Understand (L2)
---

# Meet the Specialized Agent Roster



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md).

```text
Type: graph-model
**sim-id:** specialized-agent-roster<br/>
**Library:** vis-network<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/ai-strategy-for-education/tree/main/docs/sims/ai-concept-hierarchy

Purpose: Show the five specialized agents as a network around the idea of tasks beyond club operations, so a learner can click any agent type and see the task it handles and who reviews its output.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a club task outside day-to-day operations, the learner classifies which of the five specialized agents is the right match for it.

Node types:
1. Center node "Specialized Agents" (gray hexagon) -- click reveals "Tasks beyond registration, scheduling, and reminders -- less frequent, but still time-consuming without help."
2. AI Assisted Grant Writing (blue circle) -- click reveals "Drafts grant proposal sections from bullet-point facts. Reviewed by: the leader, for factual accuracy."
3. AI Assisted Social Media (green circle) -- click reveals "Drafts a platform-ready post and caption. Reviewed by: the leader, for un-consented student identification."
4. AI Generated Website Content (amber circle) -- click reveals "Drafts public web page copy. Reviewed by: the leader, for accuracy against the real walk-in experience."
5. AI Assisted Translation (purple circle) -- click reveals "Produces a first-pass translation of an existing document. Reviewed by: a fluent speaker, for meaning and tone."
6. AI Voice Assistant Use (teal circle) -- click reveals "Reads existing, already-approved text aloud or answers a simple spoken question. Reviewed by: nobody new -- it only reads what a person already approved."

Edges: One edge from the center node to each of the five agent-type nodes, unlabeled.

Interactive features:
- Hover any node to preview its one-line job description
- Click any node to highlight it and open a side-panel infobox with its full description and reviewer
- Zoom with the mouse wheel, pan by dragging the background

Visual styling: Center node larger and gray; five spoke nodes evenly sized, each a distinct accent color; uniform edge style

Legend: Node color key matching the five agent types plus the center "umbrella" node

Implementation: vis-network JavaScript library, hierarchical or force-directed hub layout, canvas size 800x450px.
```

## Related Resources

- [Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md)
