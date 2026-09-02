---
title: "Where a Coding-Help Request Goes"
description: "Three coding-help agents, three different questions they answer -- and the mentor who stays in the room for all of them."
image: sims/coding-help-agent-handoff/coding-help-agent-handoff.png
status: built
library: Mermaid
bloom_level: Analyze (L4)
---

# Where a Coding-Help Request Goes

<iframe src="main.html" width="100%" height="762" scrolling="no"></iframe>

[Run the Where a Coding-Help Request Goes MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A student saying "it doesn't work" can mean three different things, and the three
agents in this chapter answer three different questions:

- Something is **broken** -- debugging help suggests where the bug might be, and
  pointedly does not fix it.
- Something is **not understood** -- the tutor asks a guiding question back
  instead of stating the answer.
- Something is **ready for a second look** -- the code review assistant flags
  style issues before a peer review, so human review time goes to substance.

The structural point is what happens after all three. Every branch converges on
**Mentor Present and Available**, and then on the student doing the actual work.
No branch lets an agent work with a student unsupervised, and no branch ends with
the agent producing the finished answer.

That last constraint is the one worth defending in a session. An agent that hands
over a working fix has technically solved the problem and pedagogically wasted
it.

## How to Use

- **Hover a step** to preview it; **click** to pin the details.
- The three branch labels describe the student's actual need, not the tool.
- Note that all three paths pass through the mentor node before reaching the
  student.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *differentiate*

**Learning objective:** Given a student's coding question, the learner
differentiates which of the three coding-help agents applies and identifies the
mentor's role in that path.

**Before the sim (5 min).** Collect three real questions students asked last
session. Most will be phrased identically -- "it doesn't work" -- which is why
the routing question exists.

**With the sim (10 min).** Walk each branch and, for each, ask what the agent is
forbidden from doing. Debugging help does not fix; the tutor does not answer; the
review assistant does not rewrite.

**After the sim (15 min).** Route the three real questions from the warm-up and
script what the mentor says while each agent is being used.

**Check for understanding.** Ask: "A student's code runs but is a mess, and they
want to know if it is any good. Which agent, and what is the mentor doing?" Code
review assistant, with the mentor ready to step in if a flag does not land.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/coding-help-agent-handoff/main.html" width="100%" height="762" scrolling="no"></iframe>
```

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

## References

- [Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md) -- the chapter this MicroSim supports.
- [Human-in-the-Loop Review Workflow](../human-in-the-loop-review-workflow/index.md) -- the same supervision principle for outgoing messages.
- [Intelligent tutoring system](https://en.wikipedia.org/wiki/Intelligent_tutoring_system) -- the tradition the tutor agent belongs to.
- [Code review](https://en.wikipedia.org/wiki/Code_review) -- why automating the style pass frees human attention.
- [Scaffolding (education)](https://en.wikipedia.org/wiki/Instructional_scaffolding) -- support that is designed to be withdrawn.
