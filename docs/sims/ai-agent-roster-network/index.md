---
title: Meet the Club's AI Agent Roster
description: Six AI agent types around one umbrella idea -- click any to see the club task it handles and a real example.
image: sims/ai-agent-roster-network/ai-agent-roster-network.png
status: built
library: vis-network
bloom_level: Understand (L2)
---

# Meet the Club's AI Agent Roster

<iframe src="main.html" width="100%" height="702" scrolling="no"></iframe>

[Run the Meet the Club's AI Agent Roster MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

The umbrella idea at the centre is the useful one: **matching a task to the agent
type built for it, rather than one tool trying to do everything.**

Six spokes, six distinct jobs. A planning agent drafts a sequence toward a goal.
A communication agent drafts a reply from the club's own policies. A registration
agent applies the ratio cap and waitlist rules. A scheduling agent
cross-references availability against venue hours. A reminder agent writes
something specific to one family and moment. A mentor coaching agent draws on
aggregated patterns.

That last one carries the constraint worth reading aloud: it works from
**anonymized, aggregated** patterns, never from one identified student's record.
The distinction is not a technical detail -- it is the difference between "the
debugging badge is a bottleneck for this cohort" and a profile of a named child.

Click each spoke and the club task and example are concrete enough to test
against a real week's work.

## How to Use

- **Click any agent** to see the task it handles and an example.
- The hub is the idea the six share; the spokes are the specialisations.
- **Drag a node** to reposition it; the hub stays pinned. **Reset** restores the
  layout.

## Lesson Plan

**Bloom level:** Understand (L2) -- *classify*

**Learning objective:** Given a club task, the learner classifies which of the six
AI agent types is the right match for it.

**Before the sim (5 min).** List five things the club did by hand last month.
Keep the list.

**With the sim (10 min).** Click through all six. Then classify each item from the
warm-up list, and note the ones that fit no agent -- those are the tasks that
still need a person.

**After the sim (15 min).** Pick the single agent type that would save the club
the most hours and write down what it would need access to in order to work.

**Check for understanding.** Ask: "You want to know which student is falling
behind. Which agent?" None of them, as specified -- the coaching agent works on
cohort patterns, not individuals. Noticing that the roster deliberately has no
agent for that question is the classification this objective wants.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/ai-agent-roster-network/main.html" width="100%" height="702" scrolling="no"></iframe>
```

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

## References

- [Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md) -- the chapter this MicroSim supports.
- [Human-in-the-Loop Review Workflow](../human-in-the-loop-review-workflow/index.md) -- what every one of these agents' output passes through.
- [From Draft to Delivered - AI Content Pipeline](../ai-content-drafting-pipeline/index.md) -- three of these agents in one pipeline.
- [Student Data Privacy Principles](../student-data-privacy-principles/index.md) -- why the coaching agent works on aggregates.
- [Intelligent agent](https://en.wikipedia.org/wiki/Intelligent_agent) -- the general idea of a task-specific agent.
