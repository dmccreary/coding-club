---
title: Human-in-the-Loop Review Workflow
description: Given an AI agent's draft output, the learner determines whether it is ready to send by tracing it through the club's guardrail check, quality check, and human review steps.
status: scaffold
library: Mermaid
bloom_level: Evaluate (L5)
---

# Human-in-the-Loop Review Workflow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md).

```text
Type: workflow
**sim-id:** human-in-the-loop-review-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/conversational-ai/tree/main/docs/sims/feedback-loop-system-architecture

Purpose: Tie reviewing AI output, quality checks, guardrails, and oversight into one integrated workflow, so a learner sees how the practices fit together as a single system rather than four separate rules to memorize.

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: determine

Learning objective: Given an AI agent's draft output, the learner determines whether it is ready to send by tracing it through the club's guardrail check, quality check, and human review steps.

Steps (flowchart with decision diamonds):
1. Start: "Agent Produces a Draft" -- click reveals "Any of the seven agent types covered in this chapter, producing any kind of draft output."
2. Decision: "Passes Guardrail Check?" -- click reveals "An automated check for the club's fixed limits, such as never naming a specific student in a group message."
3a. Branch "No" leads to "Automatic Rewrite Required" -- click reveals "The draft never reaches a human reviewer in this form; the agent must produce a new draft."
3b. Branch "Yes" leads to "Human Applies Quality Check" -- click reveals "A person runs the short, repeatable checklist: accuracy, tone, no inappropriate student mentions, matches club voice."
4. Decision: "Quality Check Passes?" -- click reveals "The reviewer's honest judgment call, not a rubber stamp."
5a. Branch "No" leads back to "Automatic Rewrite Required" -- click reveals "Sent back for a new draft, same as a guardrail failure."
5b. Branch "Yes" leads to "Human Approves and Sends" -- click reveals "The single moment a person, not the agent, actually causes the message to reach a family."
6. Process (ongoing, connected to all of the above): "AI Agent Oversight" -- click reveals "A periodic, separate check -- monthly spot-checks of already-sent messages -- that catches drift the per-message steps above might miss over time."
7. End: "Family Receives a Human-Approved Message" -- click reveals "Every message a family sees passed through this exact workflow, regardless of which agent drafted it."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Gray for start and end states, purple for decision diamonds, red for the rewrite-required outcome, green for the approved-and-sent outcome, amber for the ongoing oversight process box.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; the oversight node is drawn with a dashed border and a separate connecting line to signal it runs alongside the per-message flow rather than as a step within it.
```

## Related Resources

- [Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md)
