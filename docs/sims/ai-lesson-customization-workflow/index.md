---
title: "From Observation to Customized Lesson"
description: "Where the mentor's own observation enters an AI customization loop, and where human review still applies."
image: sims/ai-lesson-customization-workflow/ai-lesson-customization-workflow.png
status: built
library: Mermaid
bloom_level: Understand (L2)
---

# From Observation to Customized Lesson

<iframe src="main.html" width="100%" height="762" scrolling="no"></iframe>

[Run the From Observation to Customized Lesson MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Only one stage of this loop is the AI's. The rest belong to the mentor, and that
proportion is the point.

The loop begins with **observation** -- what this student enjoys, where they got
stuck -- and the panel text is emphatic about what that is not: a stored profile.
The club is not building a model of the child. A mentor is noticing something,
this week, and holding it in their head.

The mentor then turns that into a **specific request**. Not "make this easier",
but a prompt naming exactly what should change: the pacing, the analogy, the
difficulty. Specificity is what separates a useful customization from a
regenerated lesson that is different but not better.

The agent drafts. The mentor reviews. The same human-in-the-loop gate Chapter 32
required for messages applies to lessons, for the same reason.

## How to Use

- **Hover a stage** to preview it; **click** to pin the details.
- Blue and amber stages are the mentor's; the orange stage is the AI's; green is
  review and use.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Given a customization scenario, the learner explains which
stage of the loop is mentor observation, which is the AI draft, and which is
human review.

**Before the sim (5 min).** Ask how the club would customize a lesson for a
student who loves music. Listen for whether anyone proposes storing that fact
somewhere.

**With the sim (10 min).** Walk the stages and count how many belong to the mentor.
Four of six. Then ask what the agent is given -- a request, not a student.

**After the sim (15 min).** Write one real customization request for a real
student, specific enough that two different mentors would produce similar drafts
from it.

**Check for understanding.** Ask: "What does the AI agent know about the student?"
Only what the mentor put in the prompt -- and understanding why that is a design
choice rather than a limitation is the objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/ai-lesson-customization-workflow/main.html" width="100%" height="762" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md).

```text
Type: workflow
**sim-id:** ai-lesson-customization-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/ai-strategy-for-education/tree/main/docs/sims/ai-concept-hierarchy

Purpose: Tie building a student mental model, customizing lessons with AI, and AI assisted lesson customization into one traceable loop, so a learner sees where the mentor's own observation enters the process and where the human review step from chapter 32 still applies.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a customization scenario, the learner explains which stage of the loop is mentor observation, which is the AI draft, and which is human review.

Steps (flowchart, no decision diamonds needed):
1. Start: "Mentor Observes a Student in Session" -- click reveals "The mentor's own week-to-week observation -- what a student enjoys, what they get stuck on -- never a stored profile."
2. Process: "Mentor Forms a Mental Model" -- click reveals "A working picture in the mentor's head: 'this student responds well to music-themed examples.'"
3. Process: "Mentor Requests a Specific Customization" -- click reveals "A detailed prompt naming exactly what should change -- pacing, analogy, difficulty -- following the specificity habit from chapter 32's prompt engineering section."
4. Process: "AI Agent Drafts the Customized Lesson" -- click reveals "The agent produces a revised card or lesson, keeping the underlying concept the same."
5. Process: "Mentor Reviews the Draft" -- click reveals "The same human-in-the-loop review chapter 32 required for every AI-drafted output, applied here to a lesson instead of a message."
6. End: "Customized Lesson Used With the Student" -- click reveals "The version that actually reaches the student -- always mentor-approved, never sent straight from the agent."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Blue for the two mentor-observation steps, amber for the AI-drafting step, green for the human-review and final-use steps.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox.
```

## References

- [Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md) -- the chapter this MicroSim supports.
- [Human-in-the-Loop Review Workflow](../human-in-the-loop-review-workflow/index.md) -- the review step this loop reuses.
- [Where a Coding-Help Request Goes](../coding-help-agent-handoff/index.md) -- the student-facing counterpart.
- [Differentiated instruction](https://en.wikipedia.org/wiki/Differentiated_instruction) -- the teaching practice being assisted.
- [Prompt engineering](https://en.wikipedia.org/wiki/Prompt_engineering) -- why specificity in the request matters so much.
