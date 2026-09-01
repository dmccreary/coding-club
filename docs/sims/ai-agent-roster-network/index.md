---
title: Meet the Club's AI Agent Roster
description: Given a club task, the learner classifies which of the six AI agent types is the right match for it.
status: scaffold
library: vis-network
bloom_level: Understand (L2)
---

# Meet the Club's AI Agent Roster



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md).

```text
Type: graph-model
**sim-id:** ai-agent-roster-network<br/>
**Library:** vis-network<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/ai-strategy-for-education/tree/main/docs/sims/ai-concept-hierarchy

Purpose: Show the six specific AI agent types as a network around the umbrella idea of leveraging AI agents, so a learner can click any agent type and see the club task it handles and a one-line example.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a club task, the learner classifies which of the six AI agent types is the right match for it.

Node types:
1. Center node "Leveraging AI Agents" (gray hexagon) -- click reveals "Matching a task to the agent type built for it, rather than one tool trying to do everything."
2. Planning AI Agent (blue circle) -- click reveals "Drafts a sequence of dates or steps toward a goal, respecting stated constraints. Example: a proposed semester calendar."
3. Communication AI Agent (green circle) -- click reveals "Drafts a reply or announcement pulling from the club's own policies. Example: a make-up-policy email reply."
4. Registration AI Agent (amber circle) -- click reveals "Processes new sign-ups against the club's ratio cap and waitlist rules. Example: moving a family off the waitlist."
5. Scheduling AI Agent (purple circle) -- click reveals "Cross-references mentor availability against venue hours. Example: proposing which of three dates has full mentor coverage."
6. Reminder AI Agent (red circle) -- click reveals "Drafts a reminder tailored to the specific family and moment, beyond a fixed timer. Example: mentioning a badge a student is one session from finishing."
7. Mentor Coaching AI Agent (teal circle) -- click reveals "Drafts coaching suggestions from aggregated, anonymized patterns, never from one identified student's record. Example: flagging a badge that's become a bottleneck for a whole cohort."

Edges: One edge from the center node to each of the six agent-type nodes, unlabeled (the hub-and-spoke layout itself communicates that all six are varieties of the same underlying idea).

Interactive features:
- Hover any node to preview its one-line job description
- Click any node to highlight it and open a side-panel infobox with its full description and example
- Zoom with the mouse wheel, pan by dragging the background

Visual styling: Center node larger and gray; six spoke nodes evenly sized, each a distinct accent color; uniform edge style

Legend: Node color key matching the six agent types plus the center "umbrella" node

Implementation: vis-network JavaScript library, hierarchical or force-directed hub layout, canvas size 800x450px.
```

## Related Resources

- [Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md)
