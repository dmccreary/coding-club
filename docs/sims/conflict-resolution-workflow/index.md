---
title: "Handling a Conflict or Complaint"
description: "The step-by-step path a coding club follows from a reported concern to a documented outcome, including when to escalate."
image: sims/conflict-resolution-workflow/conflict-resolution-workflow.png
status: built
library: Mermaid
bloom_level: Apply (L3)
---

# Handling a Conflict or Complaint

<iframe src="main.html" width="100%" height="682" scrolling="no"></iframe>

[Run the Handling a Conflict or Complaint MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

The worst time to invent a complaint process is during a complaint. This
flowchart is the process written down in advance, so a mentor facing an upset
parent on a Saturday morning knows what the next step is without improvising.

The shape of the flow matters as much as the steps. Documentation comes *before*
the safety question, so the facts are recorded while they are still fresh and
before anyone decides how serious the situation is. The single decision diamond
splits the path: safety and harassment escalate the same day, ordinary
disagreements get mediated. Both branches then rejoin -- every path ends with a
documented outcome and an entry in the lessons-learned log.

That last step is deliberate. It hands recurring conflicts back to the
improvement cycle from Chapter 1, so a problem that keeps happening eventually
changes the code of conduct rather than being handled from scratch each time.

## How to Use

- **Hover any step** to preview what it involves.
- **Click a step** to pin its details in the panel while you trace the rest of
  the flow; click it again to unpin.
- Colours group the steps: blue for documentation, amber for the decision point,
  red for the safety-escalation branch, green for resolution and closure.

## Lesson Plan

**Bloom level:** Apply (L3) -- *implement*

**Learning objective:** Given a reported conflict or complaint, the learner
correctly identifies the next step in the club's defined resolution process.

**Before the sim (5 min).** Describe a scenario out loud -- a parent emails to say
another student mocked their child's project -- and ask the group what they would
do first. Note how many answers skip straight to talking to the students.

**With the sim (10 min).** Walk the flow from the top. Stop at
**Club Leader Documents the Report** and ask why documentation comes before the
safety question rather than after it. Then stop at the decision diamond and work
out together which branch the opening scenario takes.

**After the sim (15 min).** Run three scenarios as a group, each learner naming
the next step at each node:

1. Two students argue over whose turn it is on the shared laptop.
2. A student reports that a mentor made them uncomfortable.
3. A parent says their child's kit was taken home by someone else.

Scenario 2 must take the red branch immediately. If anyone routes it to
mediation, that is the misconception worth spending the rest of the session on.

**Check for understanding.** Give a scenario mid-flow -- "the mediation is done,
now what?" -- and ask for the remaining steps. Naming both the family
communication *and* the log entry is the objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/conflict-resolution-workflow/main.html" width="100%" height="682" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 3: Writing Your Club Charter and Safety Policies](../../chapters/03-club-charter-and-safety/index.md).

```text
Type: workflow
**sim-id:** conflict-resolution-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Show the concrete sequence of steps a coding club follows from an initial complaint or conflict report through to a documented outcome, so mentors know exactly what to do rather than improvising in the moment.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: implement

Learning objective: Given a reported conflict or complaint, the learner correctly identifies the next step in the club's defined resolution process.

Steps (flowchart with decision diamond):
1. Start: "Complaint or Conflict Reported" -- click reveals "Any mentor, student, or parent can report a concern to the club leader or assistant leader."
2. Process: "Club Leader Documents the Report" -- click reveals "Date, people involved, and a factual description are written down within 24 hours, before memory fades."
3. Decision: "Does This Involve Safety or Harassment?" -- click reveals "Safety and anti-harassment-policy violations always escalate immediately; ordinary disagreements do not."
4a. Process (if yes): "Escalate to Venue and, If Needed, Authorities" -- click reveals "The venue's own safety contact is notified the same day; law enforcement is contacted immediately for any safety emergency."
4b. Process (if no): "Club Leader Mediates a Conversation" -- click reveals "Both parties are heard separately first, then, if appropriate, brought together with a mentor present."
5. Process: "Outcome Is Documented and Shared With Involved Families" -- click reveals "Families receive a summary of the resolution appropriate to what they need to know, respecting other students' privacy."
6. End: "Entry Added to the Lessons Learned Log" -- click reveals "Recurring conflict types get flagged so the club can adjust its code of conduct or session structure, echoing Chapter 1's continuous improvement cycle."

Interactivity requirement: every node above has a Mermaid `click` directive wired to an infobox showing its revealed text; this is not a decorative flowchart.

Color coding: Blue for documentation steps, yellow for the decision diamond, red for the safety-escalation branch, green for resolution and closure steps

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("...")` directives for every node, rendered with a custom infobox panel beneath the diagram
```

## References

- [Chapter 3: Writing Your Club Charter and Safety Policies](../../chapters/03-club-charter-and-safety/index.md) -- the chapter this MicroSim supports.
- [Anatomy of a Club Charter](../club-charter-anatomy/index.md) -- the code-of-conduct section that defines what counts as a violation here.
- [The Club Improvement Cycle](../club-improvement-cycle/index.md) -- where the final lessons-learned entry goes.
- [Conflict resolution](https://en.wikipedia.org/wiki/Conflict_resolution) -- general methods behind the mediation branch.
- [Mediation](https://en.wikipedia.org/wiki/Mediation) -- the "heard separately first" pattern used in step 4b.
- [Mandated reporter](https://en.wikipedia.org/wiki/Mandated_reporter) -- why the safety branch escalates outside the club immediately.
