---
title: Where a Coding-Help Request Goes
description: Given a student's coding question, the learner differentiates which of the three coding-help agents applies and identifies the mentor's role in that path.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Where a Coding-Help Request Goes



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md).

```text
Type: workflow
**sim-id:** coding-help-agent-handoff<br/>
**Library:** Mermaid<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/modeling-healthcare-data/tree/main/docs/sims/explainable-ai-recommendation-workflow

Purpose: Trace how a student's coding question routes to debugging help, a tutor, or a code review assistant, and show that a mentor stays present at every branch rather than any one agent working with a student unsupervised.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a student's coding question, the learner differentiates which of the three coding-help agents applies and identifies the mentor's role in that path.

Steps (flowchart with a decision diamond):
1. Start: "Student Has a Coding Question" -- click reveals "Something isn't working, isn't understood, or is ready for a second look."
2. Decision: "What Kind of Help Is Needed?" -- click reveals "Routes to one of three coding-help agents based on the actual need."
3a. Branch to "AI Assisted Debugging Help" -- click reveals "Suggests where a bug might be, never fixes the code directly."
3b. Branch to "AI Tutor For Students" -- click reveals "Asks a guiding question back rather than stating the answer."
3c. Branch to "AI Code Review Assistant" -- click reveals "Flags style-level issues before a peer code review session begins."
4. All three branches converge on "Mentor Present and Available" -- click reveals "A mentor stays in the room for all three, ready to step in if the hint, suggestion, or flag isn't landing."
5. End: "Student Does the Actual Fixing, Answering, or Revising" -- click reveals "The agent points; the student -- not the agent -- does the work that builds the skill."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Gray for start/end states, purple for the decision diamond, three distinct accent colors for the three coding-help branches, green for the converged mentor-present step.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox.
```

## Related Resources

- [Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md)
