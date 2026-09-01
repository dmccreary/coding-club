---
title: Mentor Development Pipeline
description: One candidate's whole path: interview, trial, training, tiers, and the pipeline that produces the club's next leader.
image: sims/mentor-development-pipeline/mentor-development-pipeline.png
status: built
library: Mermaid
bloom_level: Analyze (L4)
---

# Mentor Development Pipeline

<iframe src="main.html" width="100%" height="882" scrolling="no"></iframe>

[Run the Mentor Development Pipeline MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Six concepts from this chapter, arranged as one path a real person walks.

The **certification tiers** are the load-bearing idea, and the panel text is
careful about why: each tier unlocks a specific new responsibility rather than
serving as a badge. Trainee means works alongside someone at all times. Certified
means runs a station alone. Lead Mentor means runs a session and supervises
others. A tier that unlocks nothing is decoration.

**Peer support** connects to all three tiers rather than sitting at one stage,
because it runs continuously. A veteran paired with a newer mentor, plus a
standing mentor-only debrief -- structural, so it does not depend on the founder
noticing that someone is struggling.

The tail matters most for clubs that intend to outlast their founder.
**Leadership pipeline development** asks which certified mentors could run the
whole club, and hands them incrementally larger responsibility *long before* any
departure forces the question. Succession planned after the founder announces
they are leaving is not planning.

## How to Use

- **Hover a stage** to preview it; **click** to pin the definition.
- The three tier boxes branch from the certification diamond; all three connect
  to peer support, which runs alongside every tier.
- The leadership pipeline branches only from Lead Mentor.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *sequence and differentiate*

**Learning objective:** Given a mentor candidate's current stage, the learner
sequences the remaining stages of development and differentiates what unlocks
progress to the next one.

**Before the sim (5 min).** Ask what the club's most experienced mentor is allowed
to do that a brand-new one is not. If the answer is vague, the club has no tiers.

**With the sim (15 min).** Walk the path, then focus on the tiers. For each, ask
what specific responsibility it unlocks and what checkable criterion gates it.
Then ask why peer support attaches to all three rather than to Trainee alone.

**After the sim (15 min).** Place every current mentor on a tier and write the one
criterion each would need to meet to advance.

**Check for understanding.** Ask: "Your best Certified mentor wants more
responsibility. What is the next stage, and what has to be true first?" Lead
Mentor, gated by checkable criteria -- and noticing that the leadership pipeline
comes only after that is the sequencing this objective wants.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/mentor-development-pipeline/main.html" width="100%" height="882" scrolling="no"></iframe>
```

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

## References

- [Chapter 35: Training Mentors and Building a Club That Outlasts You](../../chapters/35-training-mentors-and-succession/index.md) -- the chapter this MicroSim supports.
- [Kit Lifecycle Workflow](../kit-lifecycle-workflow/index.md) -- the same lifecycle framing applied to equipment.
- [Succession planning](https://en.wikipedia.org/wiki/Succession_planning) -- why it starts long before a departure.
- [Professional certification](https://en.wikipedia.org/wiki/Professional_certification) -- tiers that gate responsibility rather than status.
- [Mentorship](https://en.wikipedia.org/wiki/Mentorship) -- the pairing model behind peer support.
