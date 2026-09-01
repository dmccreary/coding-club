---
title: Mentor Development Pipeline
description: Given a mentor candidate's current stage, the learner sequences the remaining stages of development and differentiates what unlocks progress to the next one.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Mentor Development Pipeline



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 35: Training Mentors and Building a Club That Outlasts You](../../chapters/35-training-mentors-and-succession/index.md).

```text
Type: workflow
**sim-id:** mentor-development-pipeline<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Trace one mentor candidate through every stage of development this chapter covers, from interview through certification tiers to becoming a future club leader, tying together six concepts into one connected path.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: sequence, differentiate

Learning objective: Given a mentor candidate's current stage, the learner sequences the remaining stages of development and differentiates what unlocks progress to the next one.

Steps (flowchart with a decision branch and one ongoing side process):

1. Start: "Candidate Interviewed" -- click reveals the Mentor Interview Process definition above.
2. Process: "Trial Session (Chapter 34)" -- click reveals "A one-session hands-on trial checking technical comfort and patience with students, introduced in Chapter 34."
3. Process: "Training Curriculum" -- click reveals the Mentor Training Curriculum definition above.
4. Process: "Matched to Strengths" -- click reveals the Bringing Out Mentor Strengths definition above.
5. Decision: "Certification Tier?" -- click reveals the Mentor Certification Program definition above; branches to "Trainee," "Certified," and "Lead Mentor" as three small labeled sub-nodes.
6. Side process (connected by a dashed line to every tier, not a single sequential step): "Peer Support Program" -- click reveals the Mentor Peer Support Program definition above, noting it runs continuously rather than at one stage.
7. Process (from "Lead Mentor"): "Leadership Pipeline" -- click reveals the Leadership Pipeline Development definition above.
8. End: "Ready to Co-Lead or Succeed the Founder" -- click reveals "The mentor has practiced real decisions well before any departure, connecting directly into this chapter's documentation and playbook sections."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox, matching the definitions given in this chapter's prose.

Color coding: Blue for the one-time onboarding stages (interview, trial, curriculum, strengths), gold for the three certification tiers, green dashed lines for the continuous peer support connections, purple for the leadership pipeline and end state.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan; layout reflows responsively on narrow screens.
```

## Related Resources

- [Chapter 35: Training Mentors and Building a Club That Outlasts You](../../chapters/35-training-mentors-and-succession/index.md)
