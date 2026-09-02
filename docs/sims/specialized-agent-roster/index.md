---
title: Meet the Specialized Agent Roster
description: Five agents for the occasional jobs -- grants, social media, website copy, translation, voice -- and who reviews each one's output.
image: sims/specialized-agent-roster/specialized-agent-roster.png
status: built
library: vis-network
bloom_level: Understand (L2)
---

# Meet the Specialized Agent Roster

<iframe src="main.html" width="100%" height="702" scrolling="no"></iframe>

[Run the Meet the Specialized Agent Roster MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

These five handle the jobs that come round a few times a year rather than every
week -- and are therefore the ones nobody has a routine for.

The field worth reading on every node is **who reviews it**, because it is
different each time and the difference is the point:

- Grant writing is reviewed by the leader, for **factual accuracy**. An agent
  will happily produce a confident sentence about a programme the club does not
  run.
- Social media is reviewed by the leader, for **un-consented student
  identification** -- a different failure mode entirely, and the one with the
  highest cost.
- Website copy is reviewed for accuracy **against the real walk-in experience**,
  not just internal consistency.
- Translation is reviewed by a **fluent speaker**, not the leader, because the
  leader cannot check what they cannot read.
- Voice assistant use is reviewed by **nobody new**, because it only reads aloud
  text a person already approved.

That last one is not a gap in the review chain. It is what a genuinely low-risk
use of AI looks like, and it is useful to have one on the roster for contrast.

## How to Use

- **Click any agent** to see the task and its reviewer.
- The hub is the shared idea; the five spokes are the specialisations.
- **Reset** restores the layout.

## Lesson Plan

**Bloom level:** Understand (L2) -- *classify*

**Learning objective:** Given a club task outside day-to-day operations, the
learner classifies which of the five specialized agents is the right match for
it.

**Before the sim (5 min).** Ask what the club did last year that it does only once
or twice a year. Those are exactly the tasks nobody has got efficient at.

**With the sim (10 min).** Click all five. Then go round again asking only "who
reviews this, and what are they looking for?" The reviewers differ, and that is
the harder half of the lesson.

**After the sim (15 min).** Name the actual reviewer for each of the five in this
club. If translation has no fluent speaker attached, that agent is not usable
yet.

**Check for understanding.** Ask: "Why does the voice assistant need no new
reviewer?" Because it only speaks already-approved text -- and being able to say
why that is different from the other four is the classification this objective
wants.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/specialized-agent-roster/main.html" width="100%" height="702" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md).

```text
Type: graph-model
**sim-id:** specialized-agent-roster<br/>
**Library:** vis-network<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/ai-strategy-for-education/tree/main/docs/sims/ai-concept-hierarchy

Purpose: Show the five specialized agents as a network around the idea of tasks beyond club operations, so a learner can click any agent type and see the task it handles and who reviews its output.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a club task outside day-to-day operations, the learner classifies which of the five specialized agents is the right match for it.

Node types:
1. Center node "Specialized Agents" (gray hexagon) -- click reveals "Tasks beyond registration, scheduling, and reminders -- less frequent, but still time-consuming without help."
2. AI Assisted Grant Writing (blue circle) -- click reveals "Drafts grant proposal sections from bullet-point facts. Reviewed by: the leader, for factual accuracy."
3. AI Assisted Social Media (green circle) -- click reveals "Drafts a platform-ready post and caption. Reviewed by: the leader, for un-consented student identification."
4. AI Generated Website Content (amber circle) -- click reveals "Drafts public web page copy. Reviewed by: the leader, for accuracy against the real walk-in experience."
5. AI Assisted Translation (purple circle) -- click reveals "Produces a first-pass translation of an existing document. Reviewed by: a fluent speaker, for meaning and tone."
6. AI Voice Assistant Use (teal circle) -- click reveals "Reads existing, already-approved text aloud or answers a simple spoken question. Reviewed by: nobody new -- it only reads what a person already approved."

Edges: One edge from the center node to each of the five agent-type nodes, unlabeled.

Interactive features:
- Hover any node to preview its one-line job description
- Click any node to highlight it and open a side-panel infobox with its full description and reviewer
- Zoom with the mouse wheel, pan by dragging the background

Visual styling: Center node larger and gray; five spoke nodes evenly sized, each a distinct accent color; uniform edge style

Legend: Node color key matching the five agent types plus the center "umbrella" node

Implementation: vis-network JavaScript library, hierarchical or force-directed hub layout, canvas size 800x450px.
```

## References

- [Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md) -- the chapter this MicroSim supports.
- [Meet the Club's AI Agent Roster](../ai-agent-roster-network/index.md) -- the six everyday agents this set sits beside.
- [Human-in-the-Loop Review Workflow](../human-in-the-loop-review-workflow/index.md) -- the review gate all of these pass through.
- [Machine translation](https://en.wikipedia.org/wiki/Machine_translation) -- why a fluent reviewer is not optional.
- [Grant writing](https://en.wikipedia.org/wiki/Grant_writing) -- what the first agent is drafting.
