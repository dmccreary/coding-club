---
title: Growth Mindset Coaching Response Flow
description: Three kinds of student moment, three different right responses -- and one shared goal.
image: sims/growth-mindset-coaching-response-flow/growth-mindset-coaching-response-flow.png
status: built
library: Mermaid
bloom_level: Analyze (L4)
---

# Growth Mindset Coaching Response Flow

<iframe src="main.html" width="100%" height="662" scrolling="no"></iframe>

[Run the Growth Mindset Coaching Response Flow MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A mentor gets about four seconds to decide how to respond to what a student just
did. This diagram is those four seconds, made deliberate.

The three branches are not degrees of the same thing -- they are different tools
for different situations, and using the wrong one costs something real:

- **Struggling** calls for growth-mindset coaching: "not yet" language, plus a
  pointer back to a skill this student has already mastered. Celebrating here
  would ring hollow.
- **A small win** calls for immediate, specific, one-to-one recognition. Within
  seconds, naming the exact thing that went right. Saving it for later drains it.
- **A term milestone** is worth holding for a public recognition event, because
  its size is part of its meaning. Mentioning it quietly in passing wastes it.

Every branch ends in the same place: the student leaves believing their effort
produced a real result. The paths differ only in scale and audience.

## How to Use

- **Hover a step** to preview it; **click** to pin the details.
- The three branch labels describe the moment you observed; each leads to the
  response that fits it.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *differentiate*

**Learning objective:** Given a description of what just happened with a student,
the learner differentiates whether it calls for growth-mindset coaching,
celebrating a small win, or a public recognition event.

**Before the sim (5 min).** Describe a student who has just got an LED to blink
after twenty minutes of failure. Ask the room what they would say. Collect the
answers before showing the diagram.

**With the sim (10 min).** Walk the three branches. For each, ask what would go
wrong if a mentor used one of the *other* two responses instead. That
mis-application question is the differentiation the objective wants.

**After the sim (15 min).** Role-play all three in pairs, with one person
describing a moment and the other responding in character.

**Check for understanding.** Ask: "A student finishes the whole beginner track in
the middle of a session. What do you do right now, and what do you do later?"
Both -- a specific word now, and the public recognition at the term event.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/growth-mindset-coaching-response-flow/main.html" width="100%" height="662" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 26: Motivation, Badges, and Growth Mindset Coaching](../../chapters/26-motivation-badges-growth-mindset/index.md).

```text
Type: workflow
**sim-id:** growth-mindset-coaching-response-flow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Help a mentor decide, in the moment, whether a student's situation calls for private growth-mindset coaching, an immediate small-win celebration, or escalation to a public recognition event.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a description of what just happened with a student, the learner differentiates whether it calls for growth-mindset coaching, celebrating a small win, or a public recognition event.

Steps (flowchart with a decision diamond):
1. Start: "Notice a Student Moment" -- click reveals "A mentor observes something happen -- a student is stuck, a student just succeeded at something small, or a student has finished a whole track."
2. Decision: "What Kind of Moment?" -- click reveals "The right response depends on whether the student is struggling, has a small in-session win, or has reached a large, term-scale milestone."
3a. Branch "Struggling" leads to "Apply Growth Mindset Coaching" -- click reveals "Respond with 'not yet' language, and point back to a skill the student has already mastered to prove ability can grow."
3b. Branch "Small Win" leads to "Celebrate Immediately, One-on-One" -- click reveals "Name the specific thing that just went right, out loud, within seconds -- don't wait for the end of the session."
3c. Branch "Term Milestone" leads to "Save for a Public Recognition Event" -- click reveals "A track completion or major project is significant enough to recognize in front of the whole club and families, not just privately."
4. End (all branches converge): "Student Feels Progress Is Real" -- click reveals "Every path ends the same way: the student leaves believing their effort produced a real, specific result -- whether that recognition happened in ten seconds or at a term-end event."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Gray for the start node, purple for the decision diamond, blue for the coaching branch, amber for the small-win branch, green for the public-event branch, teal for the converged end state.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox.
```

## References

- [Chapter 26: Motivation, Badges, and Growth Mindset Coaching](../../chapters/26-motivation-badges-growth-mindset/index.md) -- the chapter this MicroSim supports.
- [Frustration Escalation Response Flow](../frustration-escalation-response-flow/index.md) -- the companion diagram for moments that are going badly.
- [Mindset](https://en.wikipedia.org/wiki/Mindset) -- Dweck's fixed and growth mindset research.
- [Praise](https://en.wikipedia.org/wiki/Praise) -- why specific praise outperforms general praise.
- [Reinforcement](https://en.wikipedia.org/wiki/Reinforcement) -- why immediacy matters for small wins.
