---
title: "Human-in-the-Loop Review Workflow"
description: "Trace an AI draft through a guardrail check, a human quality check, and the single moment a person actually sends it."
image: sims/human-in-the-loop-review-workflow/human-in-the-loop-review-workflow.png
status: built
library: Mermaid
bloom_level: Evaluate (L5)
---

# Human-in-the-Loop Review Workflow

<iframe src="main.html" width="100%" height="862" scrolling="no"></iframe>

[Run the Human-in-the-Loop Review Workflow MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Four practices that are usually taught as four separate rules are one system, and
this is its shape.

The **guardrail check** is automated and runs first, before any human time is
spent. It enforces the club's fixed limits -- never naming a specific student in
a group message, for instance. A draft that fails never reaches a reviewer.

The **quality check** is a person with a short checklist: accuracy, tone, no
inappropriate student mentions, matches club voice. The panel text says it
plainly -- a reviewer who never rejects anything is not reviewing.

Both failures land on the same rewrite node and loop back. That shared path is
the point: the agent gets another turn, and no partly-fixed draft slips forward.

**Human approves and sends** is the load-bearing node. It is the single moment a
person, not an agent, causes a message to reach a family. And **oversight** hangs
off it as a periodic sample, because per-message checks cannot catch drift that
only shows up across dozens of messages.

## How to Use

- **Hover a step** to preview it; **click** to pin the details.
- Both the guardrail and quality failures route to the same rewrite node, which
  loops back to a new draft.
- The oversight branch is sampled monthly rather than run per message.

## Lesson Plan

**Bloom level:** Evaluate (L5) -- *determine*

**Learning objective:** Given an AI agent's draft output, the learner determines
whether it is ready to send by tracing it through the club's guardrail check,
quality check, and human review steps.

**Before the sim (5 min).** Show an AI-drafted club message that reads well and
names a student. Ask whether it is ready to send. The plausible tone is exactly
what makes the guardrail necessary.

**With the sim (15 min).** Trace a passing draft, then a guardrail failure, then a
quality failure. Ask what the two failures have in common -- both produce a new
draft, neither produces a patched one.

**After the sim (15 min).** Write the club's guardrail list (fixed, automatable
limits) and its quality checklist (human judgement) as two separate documents,
because they are two separate things.

**Check for understanding.** Ask: "Which single step in this diagram, if removed,
means an unreviewed message could reach a family?" Human approves and sends -- and
recognising that the automated guardrail is not a substitute for it is the
evaluation this objective asks for.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/human-in-the-loop-review-workflow/main.html" width="100%" height="862" scrolling="no"></iframe>
```

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

## References

- [Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md) -- the chapter this MicroSim supports.
- [Where a Coding-Help Request Goes](../coding-help-agent-handoff/index.md) -- the same principle applied to student-facing agents.
- [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop) -- the general control pattern.
- [AI alignment](https://en.wikipedia.org/wiki/AI_alignment) -- why guardrails and oversight are separate mechanisms.
- [Quality assurance](https://en.wikipedia.org/wiki/Quality_assurance) -- sampling already-shipped work to catch drift.
