---
title: Growth Mindset Coaching Response Flow
description: Given a description of what just happened with a student, the learner differentiates whether it calls for growth-mindset coaching, celebrating a small win, or a public recognition event.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Growth Mindset Coaching Response Flow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 26: Motivation, Badges, and Growth Mindset Coaching](../../chapters/26-motivation-badges-growth-mindset/index.md)
