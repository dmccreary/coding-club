---
title: "Mentor Matching and Schedule Optimizer"
description: "Five mentors, five students, seven scored pairings, and three candidate slots -- only one of which passes every constraint."
image: sims/mentor-matching-schedule-optimizer/mentor-matching-schedule-optimizer.png
status: built
library: vis-network
bloom_level: Analyze (L4)
---

# Mentor Matching and Schedule Optimizer

<iframe src="main.html" width="100%" height="782px" scrolling="no"></iframe>

[Run the Mentor Matching and Schedule Optimizer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Two jobs people hope an agent will do -- pair mentors with students, and pick a
meeting time -- turn out to be the same job: score several candidates against
stated criteria, then hand a person a shortlist.

The upper two columns are the matching graph. Every line carries a
shared-interest score, and the line's thickness is that score. One pairing scores
2 and the rest score 1, which is exactly the situation a ranking is good at
surfacing and bad at resolving: three students tie, and nothing on the graph
breaks the tie.

The bottom row is the scheduler. Each slot is checked against three constraints
-- mentor availability, venue hours, and the holiday calendar -- and two of the
three slots fail exactly one check. The slot that fails on venue hours is the
instructive one: a scheduler that models only people would have recommended it.

Press **Best pairing** for the combined answer. Read the third paragraph of that
panel too -- the pairings the score is least sure about are the ones a human
should look at, and a system that hides its ties is less useful than one that
shows them.

## How to Use

- **Click a mentor or a student** to read their interests, their best match, and
  where the score is ambiguous.
- **Click a slot** to see its three-constraint checklist, with the failing check
  named.
- **Press Best pairing** to select the strongest match and the only fully
  satisfying slot together.
- **Compare line thickness**: the one thick line is the only score above 1.
- **Hover a line** to enlarge its score label; **drag a node** to untangle a
  crowded area.
- Use the **navigation buttons** to zoom and pan, or open fullscreen for
  mouse-wheel zoom. **Reset** restores the layout.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *examine*

**Learning objective:** Given a mentor-student matching graph and a set of
candidate schedule slots, the learner examines the scores to identify the
strongest mentor-student pairing and the schedule slot that satisfies every
stated constraint.

**Before the sim (5 min).** Ask how the club currently pairs mentors with
students and picks its meeting time. Usually the answer is *whoever was standing
there* and *the time we have always used*. Neither is written down, which is why
neither can be checked.

**With the sim (10 min).** Find the thick line first, then ask what makes it
thick. Then work the slots: have the group predict which slot wins before
clicking, and pay attention to the Wednesday slot -- every mentor is free and it
still fails.

**After the sim (20 min).** Have the group add a sixth mentor and a sixth
student on paper, score the new pairings by shared tags, and see whether the
top-ranked pairing changes. Then add a fourth constraint of their own -- 
transport, a rival activity, a caretaker's finishing time -- and re-check the
three slots.

**Check for understanding.** Point at two students who both score 1 and ask
which should be matched first. There is no answer on the graph, and saying so --
and naming what a person would need to know instead -- is the objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/mentor-matching-schedule-optimizer/main.html" width="100%" height="782px" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md).

```text
Type: graph-model
**sim-id:** mentor-matching-schedule-optimizer<br/>
**Library:** vis-network<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/organizational-analytics/tree/main/docs/sims/mentor-matching-network

Purpose: Let a learner examine a bipartite mentor-student matching graph alongside a small set of schedule-slot nodes, to see how both AI assisted mentor matching and AI scheduling optimization score multiple candidates before a person picks one.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given a mentor-student matching graph and a set of candidate schedule slots, the learner examines the scores to identify the strongest mentor-student pairing and the schedule slot that satisfies every stated constraint.

Node types:
1. Mentor nodes (blue circles, left column): five mentors, each labeled with one or two interest tags (e.g., "Robotics, Python")
2. Student nodes (green circles, right column): five students, each labeled with one or two interest tags
3. Schedule slot nodes (amber squares, bottom row): three candidate slots (Mon 5pm, Tue/Thu 4:30pm, Wed 6pm), each labeled with which constraint it violates, if any

Edges:
- Mentor-to-student edges weighted by shared-interest score (thicker edge = stronger match), click an edge to reveal the matching score and shared tags
- Dashed lines from each schedule slot to a small "constraints" icon, click to reveal which constraint (mentor availability, venue hours, holiday calendar) that slot satisfies or fails

Interactive features:
- Click any mentor or student node to highlight its strongest-scoring match and dim all other edges
- Click any schedule slot node to reveal its full constraint checklist in a side panel, with failed constraints marked in red and satisfied ones in green
- Button: "Show Top-Ranked Pairing and Slot" -- highlights the single best mentor-student match and the one fully-satisfying schedule slot simultaneously
- Zoom with the mouse wheel, pan by dragging the background

Visual styling: Blue for mentors, green for students, amber for schedule slots; edge thickness maps to match strength

Legend: Node color key (mentor, student, schedule slot) and edge-thickness meaning

Implementation: vis-network JavaScript library, bipartite layout with mentors and students in two columns and schedule slots in a row beneath, canvas size 800x480px.
```

## References

- [Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md) -- the chapter this MicroSim supports.
- [AI Agent Roster Network](../ai-agent-roster-network/index.md) -- where the
  matching and scheduling agents sit among the others.
- [AI Agent Rollout Pipeline](../ai-agent-rollout-pipeline/index.md) -- how an
  agent like this gets introduced without breaking the club.
- [Four Scheduling Models](../four-scheduling-models/index.md) -- the meeting
  patterns these slots are drawn from.
- [Mentor Development Pipeline](../mentor-development-pipeline/index.md) -- the
  supply side of the matching problem.
- [Constraint satisfaction](https://en.wikipedia.org/wiki/Constraint_satisfaction)
  -- the general form of the scheduling half of this sim.
