---
title: Club Financial Operations Cycle
description: Given a financial event (an expense, a reimbursement request, or a donation), the learner correctly identifies which operational step handles it next.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Club Financial Operations Cycle



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 31: Tracking Expenses and Building Funding Partnerships](../../chapters/31-expenses-and-funding-partnerships/index.md).

```text
Type: workflow
**sim-id:** club-financial-operations-cycle<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Show how a single dollar moves through a club's day-to-day financial operations, from being spent or donated through being recorded, reported, reimbursed or receipted, and finally rolled up into the annual review.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: implement

Learning objective: Given a financial event (an expense, a reimbursement request, or a donation), the learner correctly identifies which operational step handles it next.

Steps (flowchart with a decision diamond):
1. Start: "Financial Event Occurs" -- click reveals "A mentor spends money, a family donates, or a grant check arrives -- the trigger for every step that follows."
2. Decision: "Expense or Donation?" -- click reveals "The two paths differ: an expense needs reimbursement, a donation needs a receipt."
3a. Process (if expense): "Mentor Files Expense Report" -- click reveals "Per the Expense Reporting Process: date, amount, category, and an attached receipt or photo of one."
4a. Process: "Checked Against Reimbursement Policy" -- click reveals "Approver confirms the expense is reimbursable, within the submission window, and under any approval threshold."
5a. Process: "Reimbursement Paid" -- click reveals "Payment issued to the mentor; the amount is logged in the Budget Tracking Spreadsheet against its matching category."
3b. Process (if donation): "Donation Logged and Receipted" -- click reveals "Per the Donation Receipt Process: donor name, amount or item, date, and a written acknowledgment provided."
4b. Process: "Recorded in Tracking Spreadsheet" -- click reveals "Income row added, categorized to match the funding source it came from."
6. End: "Rolled Into Annual Budget Review" -- click reveals "Every expense and every donation recorded this way becomes the actual-spending data the Annual Budget Review compares against the original budget."

Interactivity requirement: every node has a Mermaid `click` directive wired to an infobox showing its revealed text; this is not a decorative flowchart.

Color coding: Blue for recording steps, yellow for the decision diamond, green for the reimbursement branch, purple for the donation branch

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("...")` directives for every node, rendered with a custom infobox panel beneath the diagram.
```

## Related Resources

- [Chapter 31: Tracking Expenses and Building Funding Partnerships](../../chapters/31-expenses-and-funding-partnerships/index.md)
