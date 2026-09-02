---
title: "From Draft to Delivered - AI Content Pipeline"
description: "Three AI drafting agents, three different jobs, one review gate every draft must pass."
image: sims/ai-content-drafting-pipeline/ai-content-drafting-pipeline.png
status: built
library: Mermaid
bloom_level: Analyze (L4)
---

# From Draft to Delivered - AI Content Pipeline

<iframe src="main.html" width="100%" height="842" scrolling="no"></iframe>

[Run the From Draft to Delivered - AI Content Pipeline MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Three agents, three genuinely different jobs. The mailing-list agent proposes
moving a contact between segments. The announcement agent drafts a one-off,
situation-specific message. The newsletter agent writes fresh narrative prose.

The learning objective is not really about telling them apart -- the branch labels
do that. It is about noticing the shape: all three converge on **Human Reviews
Draft**, and none of them can reach a family without passing it.

That convergence is the design. It would be easy to argue that a segment update
is too trivial to need review, and that is exactly the argument that eventually
moves a family to the wrong list. One gate, no exceptions, is simpler to operate
than three different rules about which drafts need checking.

The decline branch loops back to review rather than straight to sending, so a
redrafted message gets checked too.

## How to Use

- **Hover a step** to preview it; **click** to pin the details.
- Trace each of the three branches to the review node -- they differ before it
  and are identical after it.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *differentiate*

**Learning objective:** Given one of three AI content-drafting scenarios, the
learner differentiates its path through the pipeline and identifies the review
step common to all three.

**Before the sim (5 min).** Ask which of the club's outgoing messages would be
safe to send without anyone reading them first. The instinct is to name the small
ones.

**With the sim (10 min).** Walk all three branches, then cover the review node and
ask what changes. Every branch becomes an agent talking directly to families.

**After the sim (15 min).** Name who performs the review for each content type in
this club, by name. An unassigned gate is not a gate.

**Check for understanding.** Ask: "Which of the three paths could safely skip
review?" None -- and being able to argue why the trivial-looking one is not an
exception is the objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/ai-content-drafting-pipeline/main.html" width="100%" height="842" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md).

```text
Type: workflow
**sim-id:** ai-content-drafting-pipeline<br/>
**Library:** Mermaid<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/organizational-analytics/tree/main/docs/sims/ai-content-detection

Purpose: Trace how an AI managed mailing list, an AI generated announcement, and an AI drafted newsletter each flow through a human review step before reaching a family, so a learner sees the shared review gate underneath three different content types.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given one of three AI content-drafting scenarios, the learner differentiates its path through the pipeline and identifies the review step common to all three.

Steps (flowchart with a decision diamond):
1. Start: "Content Need Identified" -- click reveals "A segment needs updating, an urgent situation needs an announcement, or the month needs a newsletter paragraph."
2. Decision: "Which Content Type?" -- click reveals "Routes to one of three drafting agents based on what's needed."
3a. Branch to "AI Managed Mailing List Drafts Segment Update" -- click reveals "Proposes moving a contact between segments, such as Waitlist to Active Families."
3b. Branch to "AI Generated Announcement Drafts Message" -- click reveals "Drafts one or more versions of a one-off, situation-specific message."
3c. Branch to "AI Drafted Newsletter Writes Monthly Paragraph" -- click reveals "Writes fresh narrative prose highlighting the month's events."
4. All three branches converge on "Human Reviews Draft" -- click reveals "Every draft, regardless of type, is checked by a person before anything happens with it."
5. Decision: "Approved?" -- click reveals "The reviewer can approve as-is, edit and approve, or send it back for a new draft."
6a. Branch "Yes" leads to "Sent or Merged" -- click reveals "A segment update is applied, an announcement goes out on the channel chapter 24's decision tree selects, or a newsletter paragraph merges into chapter 25's automated template."
6b. Branch "No" leads back to the relevant drafting step -- click reveals "A rejected draft returns to the same agent with feedback, not to a different one."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Gray for start/end states, purple for decision diamonds, three distinct accent colors for the three drafting branches, green for the converged "Sent or Merged" outcome.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox.
```

## References

- [Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md) -- the chapter this MicroSim supports.
- [Human-in-the-Loop Review Workflow](../human-in-the-loop-review-workflow/index.md) -- the review gate itself, in detail.
- [Automated Communication Pipeline](../automated-communication-pipeline/index.md) -- how an approved message then reaches a family.
- [Content management](https://en.wikipedia.org/wiki/Content_management) -- editorial review as a stage rather than an afterthought.
- [Email marketing](https://en.wikipedia.org/wiki/Email_marketing) -- where list segmentation comes from.
