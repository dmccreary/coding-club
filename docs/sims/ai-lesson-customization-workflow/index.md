---
title: From Observation to Customized Lesson
description: Given a customization scenario, the learner explains which stage of the loop is mentor observation, which is the AI draft, and which is human review.
status: scaffold
library: Mermaid
bloom_level: Understand (L2)
---

# From Observation to Customized Lesson



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md)
