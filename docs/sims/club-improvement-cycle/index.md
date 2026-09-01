---
title: The Club Improvement Cycle
description: Step one session's observation all the way around the club improvement loop, from raw note to a change in how the club runs.
image: sims/club-improvement-cycle/club-improvement-cycle.png
status: built
library: p5.js
bloom_level: Understand (L2)
---

# The Club Improvement Cycle

<iframe src="main.html" width="100%" height="612" scrolling="no"></iframe>

[Run the The Club Improvement Cycle MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Continuous improvement is easy to say and hard to picture. This MicroSim makes
it concrete by following a single, ordinary problem -- an LED wiring step that
took twice as long as planned -- through all four stages of the loop.

At each stage you see the actual data that moves forward, not a label for it.
Stage 1 is what happened in the room. Stage 2 is the sentence a mentor typed
that night. Stage 3 is the log, where that sentence lands among six accumulated
notes -- and where four of the six, highlighted in amber, turn out to say the
same thing. Stage 4 is the decision that only becomes obvious once those four
are stacked together: color-code the wires. Advance once more and Session 5
starts from an improved baseline.

Stage 3 is the point of the whole diagram. The counter badge on **Lessons
Learned Log** ticks from 5 to 6 as the new note arrives, and the two greyed-out
entries are there to show that the log holds ordinary noise too. One note is an
anecdote. Four notes saying the same thing are a pattern worth changing the club
over.

## How to Use

- **Next** and **Previous** move one stage along the loop. A small amber dot
  travels the arrow so you can see which way the data moved.
- **Reset** returns to Stage 1.
- **Click any of the four boxes** to jump straight to that stage.
- Watch the badge on the Lessons Learned Log node as you pass through Stage 3.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Given a session outcome, the learner traces how it
becomes a post-event note, accumulates in a lessons-learned log, and eventually
produces a club evolution decision.

**Before the sim (5 min).** Ask the group: "Something goes wrong in a session.
What happens to that information?" Collect answers on the board. Most groups say
"we remember it" or "we talk about it next time" -- both of which lose the
information within a week.

**With the sim (10 min).** Have a student drive. Stop at Stage 3 and ask why the
club did not change anything after Session 1, when the problem first appeared.
The answer -- that one report is not yet evidence -- is the hardest idea in the
loop and the reason the log exists.

**After the sim (10 min).** Ask each student to write a Stage 2 note for
something they saw in the last session, in one sentence, the way a mentor would
type it that night. Collect them. That collection is the club's first
lessons-learned log entry set.

**Check for understanding.** Give the group a new Stage 1 observation, such as
"only two students finished the challenge card." Ask them to produce the Stage 2
note, then state what would have to be true before it justifies a Stage 4
change.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/club-improvement-cycle/main.html" width="100%" height="612" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 1: What Is a Coding Club](../../chapters/01-what-is-a-coding-club/index.md).

```text
Type: workflow
**sim-id:** club-improvement-cycle<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Show how a single session's raw observations turn into logged evidence and, eventually, a structural change to the club -- making the abstract idea of "continuous improvement" concrete with one worked example the learner steps through.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a session outcome, the learner traces how it becomes a post-event note, accumulates in a lessons-learned log, and eventually produces a club evolution decision.

Instructional Rationale: This is an Understand-level objective, so the sim uses step-through with a worked example and concrete data at each stage rather than continuous animation. Continuous animation would let the cycle blur past without the learner registering what data actually moves from one stage to the next.

Canvas layout:
- Top (350px): Four nodes arranged in a circle connected by curved arrows, forming a loop: "Session Happens" to "Post-Event Notes" to "Lessons Learned Log" to "Club Evolution" and back to "Session Happens"
- Bottom (150px): A data panel showing the concrete text content of whichever node is currently active

Visual elements:
- Four rounded-rectangle nodes in the loop, sky blue (#4A90D9) by default, amber (#F5A623) when active
- Curved directional arrows between nodes showing the one-way flow of the cycle
- A small counter badge on "Lessons Learned Log" showing how many notes have accumulated so far in the walkthrough

Data Visibility Requirements:
  Stage 1 (Session Happens): Show "Session #4: LED wiring step took 22 minutes, twice as long as planned"
  Stage 2 (Post-Event Notes): Show the raw mentor note as typed that night: "Wiring confusing again -- 3 of 5 students reversed polarity"
  Stage 3 (Lessons Learned Log): Show the log accumulating this note alongside three prior similar notes from Sessions 1, 2, and 3, with matching entries highlighted
  Stage 4 (Club Evolution): Show the resulting decision derived from the pattern: "Starting Session 5, wiring diagrams get color-coded stickers on each wire"
  Loop back: Show "Session Happens" again with the new sticker system now part of the plan

Interactive controls:
- Button: "Next" advances one stage and updates the data panel
- Button: "Previous" steps back
- Button: "Reset" returns to Stage 1
- Click any of the four nodes directly to jump to that stage and see its data

Default parameters: Sim opens at Stage 1, "Session Happens," with the data panel showing the Session #4 example above

Behavior: Advancing a stage animates the active-node highlight moving along the arrow to the next node (a short 300ms transition, not a continuous loop) and swaps the data panel content; the counter badge on "Lessons Learned Log" increments only when that node is reached

Implementation notes:
- Use p5.js for the node/arrow rendering and data panel
- Store the four stages' text content as a simple array of objects so the same sim structure could be reused with a different worked example
- Responsive: canvas width fills container; node circle scales down and data panel text wraps on narrow viewports
```

## References

- [Chapter 1: What Is a Coding Club](../../chapters/01-what-is-a-coding-club/index.md) -- the chapter this MicroSim supports.
- [Plan-Do-Check-Act](https://en.wikipedia.org/wiki/PDCA) -- the general continuous-improvement cycle this loop is a club-sized version of.
- [Lessons Learned](https://en.wikipedia.org/wiki/Lessons_learned) -- how organisations capture experience so it survives staff turnover.
- [After-Action Review](https://en.wikipedia.org/wiki/After-action_review) -- the structured post-event debrief that Stage 2 borrows from.
