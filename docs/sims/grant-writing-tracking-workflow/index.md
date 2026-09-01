---
title: Grant Writing and Tracking Workflow
description: From spotting an opportunity to logging the outcome -- and why every branch ends at the tracking spreadsheet.
image: sims/grant-writing-tracking-workflow/grant-writing-tracking-workflow.png
status: built
library: Mermaid
bloom_level: Apply (L3)
---

# Grant Writing and Tracking Workflow

<iframe src="main.html" width="100%" height="802" scrolling="no"></iframe>

[Run the Grant Writing and Tracking Workflow MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A first grant application usually fails for a boring reason: the club described
itself in its own words rather than the funder's. The second step here is the fix
-- not inventing new activities, but describing the real ones using the funder's
own stated priority terms.

The shape that matters is the ending. Both branches -- awarded and declined --
converge on **Update Tracking Spreadsheet**, and that is deliberate. An award is
not the finish line; it is the start of a set of report deadlines, each of which
needs its own tracked row. A missed report is the most common way a club loses a
renewal it had already won.

A decline is not the end either. Most funders will give brief feedback if asked,
and that feedback is the single most valuable thing an unsuccessful application
produces. Logging the decline without asking wastes it.

[Chapter 30: Budgeting, Fundraising, and Grant Writing](../../chapters/30-budgeting-fundraising-grants/index.md) covers the proposal structure itself.

## How to Use

- **Hover a step** to preview it; **click** to pin the details.
- Follow both outcome branches to the same end node -- tracking closes every
  path, not just the successful one.

## Lesson Plan

**Bloom level:** Apply (L3) -- *implement*

**Learning objective:** Given a grant opportunity at any stage, the learner
correctly identifies the next step in the club's grant-writing and tracking
process.

**Before the sim (5 min).** Ask whether the club has ever applied for a grant, and
if so, where that application is recorded now. "In someone's email" is the common
answer and the problem.

**With the sim (10 min).** Walk the sequence. Stop at **Submit** and note that
logging happens immediately, not later. Then walk both outcome branches and ask
why the awarded branch has *more* work after it, not less.

**After the sim (15 min).** Build the tracking spreadsheet: one row per
application, with columns for status, funder, deadline, and every report date.

**Check for understanding.** Ask: "You were awarded 2,000 dollars in March with a
report due in October. How many rows does that create?" At least two, and knowing
why is the objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/grant-writing-tracking-workflow/main.html" width="100%" height="802" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 30: Budgeting, Fundraising, and Grant Writing](../../chapters/30-budgeting-fundraising-grants/index.md).

```text
Type: workflow
**sim-id:** grant-writing-tracking-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Show the full sequence from spotting a grant opportunity through writing, submitting, and tracking it to a final outcome, so a first-time grant writer knows exactly what step comes next.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: implement

Learning objective: Given a grant opportunity at any stage, the learner correctly identifies the next step in the club's grant-writing and tracking process.

Steps (flowchart with a decision diamond):
1. Start: "Grant Opportunity Identified" -- click reveals "A foundation, company, or government program with funding priorities that plausibly match the club's mission."
2. Process: "Match Club Facts to Funder's Language" -- click reveals "Rewrite the club's real activities using the funder's own stated priority terms, per Grant Writing Basics."
3. Process: "Draft Using Standard Proposal Structure" -- click reveals "Needs statement, project description, budget, evaluation plan, organizational background."
4. Process: "Submit Before Deadline" -- click reveals "Log the submission immediately in the tracking spreadsheet with status 'Submitted.'"
5. Decision: "Funder Response?" -- click reveals "Most funders reply within 4-12 weeks; if no reply by the funder's stated window, a tracked follow-up email is due."
6a. Process (if awarded): "Log Award and Any Report Deadlines" -- click reveals "Update status to 'Awarded' and add every required report deadline as its own tracked row, not just the grant deadline itself."
6b. Process (if declined): "Log Outcome and Request Feedback" -- click reveals "Update status to 'Declined'; many funders will share brief feedback on request, useful for the next application."
7. End: "Update Tracking Spreadsheet" -- click reveals "Every branch above ends here -- the tracking step is what prevents a missed report or a forgotten reapplication next cycle."

Interactivity requirement: every node has a Mermaid `click` directive wired to an infobox showing its revealed text; this is not a decorative flowchart.

Color coding: Blue for drafting steps, yellow for the decision diamond, green for the awarded branch, orange for the declined branch

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("...")` directives for every node, rendered with a custom infobox panel beneath the diagram.
```

## References

- [Chapter 30: Budgeting, Fundraising, and Grant Writing](../../chapters/30-budgeting-fundraising-grants/index.md) -- the chapter this MicroSim supports.
- [Club Financial Operations Cycle](../club-financial-operations-cycle/index.md) -- where the money goes once it arrives.
- [Grant writing](https://en.wikipedia.org/wiki/Grant_writing) -- proposal structure and common pitfalls.
- [Logic model](https://en.wikipedia.org/wiki/Logic_model) -- the framework behind most evaluation-plan sections.
- [Grant (money)](https://en.wikipedia.org/wiki/Grant_(money)) -- how funders think about reporting obligations.
