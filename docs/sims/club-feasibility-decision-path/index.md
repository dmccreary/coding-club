---
title: "Should You Start This Club?"
description: "Walk the four feasibility gates between an encouraging survey result and a real first meeting date."
image: sims/club-feasibility-decision-path/club-feasibility-decision-path.png
status: built
library: Mermaid
bloom_level: Apply (L3)
---

# Should You Start This Club?

<iframe src="main.html" width="100%" height="882" scrolling="no"></iframe>

[Run the Should You Start This Club? MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

An encouraging survey is not a club. Between "eleven families said yes" and a
real first meeting there are three gates, and this flowchart is the order to
take them in.

Notice what the diagram refuses to let you skip. Each orange box is not a
failure -- it is a specific thing to go and do before coming back. The most
expensive mistake a founder makes is announcing a date before the background
checks are back, because those take one to three weeks and the announcement
cannot be quietly un-sent.

Notice also that the gates are ordered by how long they take to fix. A venue can
sometimes be arranged in a week; a co-founder takes longer; a background check is
the longest pole of all and is checked last only because the first two are
cheaper to rule out.

## How to Use

- **Hover a step** to preview what it involves.
- **Click a step** to pin its details while you trace the rest of the path.
- Orange boxes are the "not yet -- go fix this" branches; each one names the
  chapter that covers the fix.

## Lesson Plan

**Bloom level:** Apply (L3) -- *implement*

**Learning objective:** Given survey results and a candidate venue and team, the
learner follows the correct sequence of feasibility checks to decide whether to
establish a new club.

**Before the sim (5 min).** Ask the group what they would do first, the morning
after a survey comes back positive. "Pick a date" is the common answer and the
one this diagram is designed to interrupt.

**With the sim (10 min).** Walk the happy path top to bottom, then go back and
take each "No" branch in turn. Ask what it would cost to discover each problem
*after* announcing a date rather than before.

**After the sim (15 min).** Give each group a fictional scenario missing exactly
one pillar and ask them to name the gate it fails and the remediation step.

**Check for understanding.** Ask: "You have strong survey results, a confirmed
room, and two co-founders, but nobody has been background checked. Can you
announce a date?" No -- and being able to say why, in terms of the last gate,
is the objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/club-feasibility-decision-path/main.html" width="100%" height="882" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 5: Gauging Interest and Holding Your First Meeting](../../chapters/05-gauging-interest-first-meeting/index.md).

```text
Type: workflow
**sim-id:** club-feasibility-decision-path<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Walk a prospective founder through the concrete decision sequence from survey results to a go/no-go decision to establish the club.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: implement

Learning objective: Given survey results and a candidate venue and team, the learner follows the correct sequence of feasibility checks to decide whether to establish a new club.

Steps (flowchart with decision diamonds):
1. Start: "Interest Survey Analyzed" -- click reveals "Confirm at least one age range shows strong concentrated interest, as in the chart above."
2. Decision: "Is a Venue Confirmed?" -- click reveals "A confirmed venue means a specific room, day, and time -- not a vague 'maybe we could use the community room.'"
3a. Process (if no): "Secure a Venue Agreement First" -- click reveals "Return to Chapter 4's venue agreement guidance before proceeding further."
3b. Decision (if yes): "Is a Founding Team of 2+ People Assembled?" -- click reveals "One person can start a club, but a founding team of two to four sharply reduces single leader dependency from day one."
4a. Process (if no): "Recruit at Least One Co-Founder Before Launch" -- click reveals "Even a single committed co-founder splits the paperwork, background-check coordination, and first-session planning."
4b. Decision (if yes): "Is at Least One Background-Checked Mentor Confirmed?" -- click reveals "A club cannot legally run its first session without at least one screened adult present, per Chapter 3."
5a. Process (if no): "Complete Background Checks Before Announcing a Date" -- click reveals "Background checks can take one to three weeks to return -- start them early."
5b. End: "Establish the Club and Set a First Meeting Date" -- click reveals "All four feasibility pillars are in place: evidence of interest, a venue, a team, and a screened mentor."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Blue for assessment/decision steps, yellow for the decision diamonds, orange for "not yet ready" remediation steps, green for the final go decision

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("...")` directives for every node, rendered with a custom infobox panel beneath the diagram
```

## References

- [Chapter 5: Gauging Interest and Holding Your First Meeting](../../chapters/05-gauging-interest-first-meeting/index.md) -- the chapter this MicroSim supports.
- [Anatomy of a Club Charter](../club-charter-anatomy/index.md) -- what to write once the go decision is made.
- [Feasibility study](https://en.wikipedia.org/wiki/Feasibility_study) -- the general practice this checklist is a small instance of.
- [Background check](https://en.wikipedia.org/wiki/Background_check) -- why the last gate takes the longest.
- [Decision tree](https://en.wikipedia.org/wiki/Decision_tree) -- reading a branching diagram like this one.
