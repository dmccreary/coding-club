---
title: From Draft to Delivered — AI Content Pipeline
description: Given one of three AI content-drafting scenarios, the learner differentiates its path through the pipeline and identifies the review step common to all three.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# From Draft to Delivered — AI Content Pipeline



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md)
