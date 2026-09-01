---
title: Grant Writing and Tracking Workflow
description: Given a grant opportunity at any stage, the learner correctly identifies the next step in the club's grant-writing and tracking process.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Grant Writing and Tracking Workflow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 30: Budgeting, Fundraising, and Grant Writing](../../chapters/30-budgeting-fundraising-grants/index.md)
