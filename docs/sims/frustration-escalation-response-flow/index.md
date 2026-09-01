---
title: Frustration Escalation Response Flow
description: Match the tool to the trigger: a hard moment, a pattern across weeks, or a task that just failed.
image: sims/frustration-escalation-response-flow/frustration-escalation-response-flow.png
status: built
library: Mermaid
bloom_level: Analyze (L4)
---

# Frustration Escalation Response Flow

<iframe src="main.html" width="100%" height="662" scrolling="no"></iframe>

[Run the Frustration Escalation Response Flow MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Frustration looks the same from across the room -- folded arms, silence, the same
failed step repeated without changing anything -- but it comes from three
different places, and the same response does not work for all three.

The diagnostic question is **what triggered it**, and specifically the timescale:

- A **single hard moment** with the task still open calls for encouragement
  language: name the difficulty honestly, then redirect to the specific next
  action. Not "you've got this", which dismisses the struggle.
- **Avoidance building across sessions** is a pattern, not a moment, and needs
  persistence coaching: say the pattern out loud and deliberately reopen the
  abandoned task in a low-stakes way.
- **A task that just ended in failure** calls for a reframe: the wrong result is
  data that narrows the next attempt, not a verdict on the student.

All three aim at the same thing -- the student going back to the problem rather
than quietly abandoning it. The quiet abandonment is the outcome the whole
diagram exists to prevent, because it is the one nobody notices happening.

## How to Use

- **Hover a step** to preview it; **click** to pin the details.
- The branch labels describe the trigger, not the student. Read them as
  timescales: this moment, these weeks, that failed attempt.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *differentiate*

**Learning objective:** Given a description of a student's frustration moment, the
learner differentiates whether it calls for in-the-moment encouragement language,
persistence coaching across sessions, or a failure-as-learning-tool reframe.

**Before the sim (5 min).** Ask mentors to describe the last frustrated student
they saw, and what they said. Most will report some version of "keep going",
which is the generic response this diagram replaces.

**With the sim (10 min).** Walk the three triggers. Stress that the middle one is
only visible across sessions -- it cannot be diagnosed in the moment, which is
why attendance notes matter.

**After the sim (15 min).** Take three real students from recent sessions and
place each on a branch, then script the opening sentence for each.

**Check for understanding.** Ask: "A student has skipped the same activity three
weeks running and seems fine otherwise. Which tool?" Persistence coaching -- and
noticing that nothing is visibly wrong *right now* is exactly what makes it the
hard one to catch.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/frustration-escalation-response-flow/main.html" width="100%" height="662" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 27: Encouraging Persistence and Student Voice](../../chapters/27-persistence-and-student-voice/index.md).

```text
Type: workflow
**sim-id:** frustration-escalation-response-flow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Help a mentor differentiate which of three tools -- encouragement language, persistence coaching, or reframing failure as a learning tool -- fits a given frustration moment, based on how long the frustration has been building and whether a task just ended.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a description of a student's frustration moment, the learner differentiates whether it calls for in-the-moment encouragement language, persistence coaching across sessions, or a failure-as-learning-tool reframe.

Steps (flowchart with a decision diamond):
1. Start: "Notice a Frustration Signal" -- click reveals "Folded arms, silence, muttering, or redoing the same failed step without changing anything -- the early signs handling frustration teaches a mentor to watch for."
2. Decision: "What Triggered It?" -- click reveals "The right tool depends on whether this is a single hard moment, a pattern building across weeks, or a task that just ended in a concrete failure."
3a. Branch "Single Hard Moment, Task Still Open" leads to "Use Encouragement Language" -- click reveals "Name the difficulty honestly and redirect toward the specific next action, without dismissing the struggle as trivial."
3b. Branch "Avoidance Building Across Sessions" leads to "Apply Persistence Coaching" -- click reveals "Notice the pattern out loud and reopen the abandoned task deliberately, in a low-stakes way, rather than leaving it to chance."
3c. Branch "Task Just Ended in Failure" leads to "Reframe as a Learning Tool" -- click reveals "Treat the error or wrong result as data that narrows down the next attempt, not as a verdict on the student's ability."
4. End (all branches converge): "Student Re-Engages With the Task" -- click reveals "Every path aims at the same outcome: the student returns to the problem instead of quietly giving up on it."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Gray for the start node, purple for the decision diamond, blue for the encouragement-language branch, amber for the persistence-coaching branch, orange for the failure-reframe branch, teal for the converged end state.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox.
```

## References

- [Chapter 27: Encouraging Persistence and Student Voice](../../chapters/27-persistence-and-student-voice/index.md) -- the chapter this MicroSim supports.
- [Growth Mindset Coaching Response Flow](../growth-mindset-coaching-response-flow/index.md) -- the companion diagram for moments that are going well.
- [Learned helplessness](https://en.wikipedia.org/wiki/Learned_helplessness) -- what repeated unaddressed frustration produces.
- [Zone of proximal development](https://en.wikipedia.org/wiki/Zone_of_proximal_development) -- why a task can be too hard rather than the student not trying.
- [Grit](https://en.wikipedia.org/wiki/Grit_(personality_trait)) -- persistence as a trainable behaviour rather than a fixed one.
