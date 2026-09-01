---
title: The AI Agent Rollout Pipeline
description: Five stages between choosing a tool and using it club-wide -- and what breaks if you skip each one.
image: sims/ai-agent-rollout-pipeline/ai-agent-rollout-pipeline.png
status: built
library: Mermaid
bloom_level: Understand (L2)
---

# The AI Agent Rollout Pipeline

<iframe src="main.html" width="100%" height="842" scrolling="no"></iframe>

[Run the The AI Agent Rollout Pipeline MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Clubs adopt tools by choosing one and then telling everyone to use it. The five
stages between those two events are what this pipeline names, and each panel says
what goes wrong when that stage is skipped:

- Skip **workflow design** and you have a tool with no owner and no review step.
- Skip **integration testing** and families are the test.
- Skip the **rollout plan** and one bad assumption becomes a club-wide problem in
  a single week.
- Skip **leader training** and you get inconsistent output that everyone blames on
  the tool.

The arrow from **Coaching Leaders With AI** back to **Workflow Design** is the
part clubs forget. Rollout is not one-and-done. A lesson that surfaces during
coaching -- the agent keeps producing a tone nobody likes, the review step lands
on the wrong person -- properly sends a leader back to redesign, not to a
workaround.

## How to Use

- **Hover a stage** to preview it; **click** to pin what it does and what breaks
  without it.
- Follow the return arrow from coaching back to design -- the pipeline is a loop,
  not a checklist.

## Lesson Plan

**Bloom level:** Understand (L2) -- *differentiate*

**Learning objective:** Given a stage of the rollout pipeline, the learner
differentiates it from the stages before and after it and states what would go
wrong if that stage were skipped.

**Before the sim (5 min).** Ask how the club introduced its last new tool. The
answer is usually "we started using it," which is stages one through five
collapsed into none.

**With the sim (10 min).** Walk the five stages. At each, ask the skip question
before revealing the panel text. The answers are more memorable when the group
generates them.

**After the sim (15 min).** Take one tool the club is considering and write a
one-line plan for each of the five stages.

**Check for understanding.** Ask: "You tested the agent and it worked. Why not
give it to everyone on Monday?" Because the rollout plan exists to limit the blast
radius of the assumption your test did not think to check.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/ai-agent-rollout-pipeline/main.html" width="100%" height="842" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md).

```text
Type: workflow
**sim-id:** ai-agent-rollout-pipeline<br/>
**Library:** Mermaid<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/ai-persona-testing/tree/main/docs/sims/multi-agent-workflow-composer

Purpose: Tie workflow design, integration testing, a rollout plan, leader training, and AI-assisted leader coaching into one ordered pipeline, so a learner sees the full sequence a club follows from deciding to adopt a tool to using it club-wide.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a stage of the rollout pipeline, the learner differentiates it from the stages before and after it and states what would go wrong if that stage were skipped.

Steps (flowchart, linear with one feedback loop):
1. Start: "Tool Selected (per Selection Criteria)" -- click reveals "The vendor comparison and selection criteria from earlier in this chapter already happened by this point."
2. Process: "AI Agent Workflow Design" -- click reveals "Map exactly where the new agent fits into an existing club process and who reviews its output."
3. Process: "AI Agent Integration Testing" -- click reveals "Try the agent on real but low-stakes material before any family sees its output."
4. Process: "AI Agent Rollout Plan" -- click reveals "Introduce the tested agent gradually -- one mentor first, not the whole club at once."
5. Process: "AI Agent Training For Leaders" -- click reveals "Teach every mentor who will use it how to prompt it well and what its guardrails and quirks are."
6. Process: "Coaching Leaders With AI" -- click reveals "An ongoing agent-assisted coaching layer for the club's own leadership, drawing on retrospective notes over time."
7. Feedback loop: an arrow from "Coaching Leaders With AI" back to "AI Agent Workflow Design" -- click reveals "Rollout is not one-and-done; a lesson learned during coaching can send a leader back to redesign how the agent fits the workflow."
8. End: "Agent Fully Adopted Club-Wide" -- click reveals "The point every stage above was building toward -- reached deliberately, not by skipping steps."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Gray for start/end states, blue for the five sequential process steps, amber dashed line for the feedback loop back to workflow design.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; the feedback edge drawn with a dashed style and a curved path to distinguish it from the main forward sequence.
```

## References

- [Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md) -- the chapter this MicroSim supports.
- [Human-in-the-Loop Review Workflow](../human-in-the-loop-review-workflow/index.md) -- the review step the design stage has to place.
- [Software deployment](https://en.wikipedia.org/wiki/Software_deployment) -- staged rollout as standard practice.
- [Canary release](https://en.wikipedia.org/wiki/Feature_toggle) -- the one-mentor-first idea, formalised.
- [Change management](https://en.wikipedia.org/wiki/Change_management) -- why training is a stage rather than an email.
