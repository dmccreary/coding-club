---
title: From Scattered Knowledge to a Club Playbook
description: Given a specific piece of club know-how, the learner differentiates whether it belongs in a written SOP, requires direct knowledge transfer, or has already been captured in the club playbook.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# From Scattered Knowledge to a Club Playbook



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 35: Training Mentors and Building a Club That Outlasts You](../../chapters/35-training-mentors-and-succession/index.md).

```text
Type: workflow
**sim-id:** club-playbook-assembly-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Trace how a single piece of undocumented know-how becomes a written procedure, transfers to a successor, and finally takes its place inside the club playbook -- tying together this chapter's five documentation and knowledge-transfer concepts into one connected path.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a specific piece of club know-how, the learner differentiates whether it belongs in a written SOP, requires direct knowledge transfer, or has already been captured in the club playbook.

Steps (flowchart with a decision diamond and a loop-back arrow):

1. Start: "Undocumented Know-How Exists" -- click reveals the Documenting Club Procedures definition above.
2. Decision: "Reducible to Steps?" -- click reveals "Some know-how is a fixed sequence; other know-how is a judgment call that resists being written as steps."
3a. Branch "Yes" leads to Process: "Write as an SOP" -- click reveals the Standard Operating Procedure definition above.
3b. Branch "No" leads to Process: "Transfer Through Shadowing and Co-Leading" -- click reveals the Knowledge Transfer Process definition above.
4. Process (from both branches): "Incoming Leader Completes Onboarding" -- click reveals the New Leader Onboarding definition above.
5. End: "Filed in the Club Playbook Document" -- click reveals the Club Playbook Document definition above.
6. Loop-back arrow from End to Start, drawn dashed and labeled "New know-how still gets documented as it's discovered" -- click reveals "The playbook is never finished; it grows the same way the lessons learned log from Chapter 1 does."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox, matching the definitions given in this chapter's prose.

Color coding: Blue for the SOP branch, orange for the knowledge-transfer branch, green for onboarding and the final playbook state, with the loop-back arrow dashed to show it is ongoing rather than a one-time path.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan; layout reflows responsively on narrow screens.
```

## Related Resources

- [Chapter 35: Training Mentors and Building a Club That Outlasts You](../../chapters/35-training-mentors-and-succession/index.md)
