---
title: Club Financial Operations Cycle
description: Follow one dollar from the moment it is spent or given through to the annual budget review.
image: sims/club-financial-operations-cycle/club-financial-operations-cycle.png
status: built
library: Mermaid
bloom_level: Apply (L3)
---

# Club Financial Operations Cycle

<iframe src="main.html" width="100%" height="802" scrolling="no"></iframe>

[Run the Club Financial Operations Cycle MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Money moves through a club in two directions and each needs a different piece of
paper. An expense needs a **reimbursement**; a donation needs a **receipt**. That
is the only decision in this diagram, and getting it wrong is how mentors end up
out of pocket and donors end up without their tax documentation.

Two steps are worth calling out because they are the ones that get skipped.

On the expense side, the attached receipt photo. An approver cannot check an
expense against policy without it, so a report filed without one is not a report
-- it is a request to remember.

On the donation side, the written acknowledgment. It reads like a courtesy. For
many donors it is a tax document, and a club that does not send one reliably will
find that repeat donations quietly stop.

Both paths converge on the annual review, which is the only reason any of the
recording matters: it is what turns a year of transactions into a comparison
against the budget the club actually set.

## How to Use

- **Hover a step** to preview it; **click** to pin the details.
- The green path handles money going out; the orange path handles money coming
  in. Both end at the same annual roll-up.

## Lesson Plan

**Bloom level:** Apply (L3) -- *implement*

**Learning objective:** Given a financial event (an expense, a reimbursement
request, or a donation), the learner correctly identifies which operational step
handles it next.

**Before the sim (5 min).** Ask who in the club is currently owed money for
something they bought. In most clubs at least one hand goes up, and the amount
has been outstanding for weeks.

**With the sim (10 min).** Walk both branches. Ask what document each produces and
who it is for. Then ask what the annual review can say if neither was recorded.

**After the sim (15 min).** Process one real backlogged expense and one real
donation, all the way through to a spreadsheet row.

**Check for understanding.** Ask: "A family donates a used laptop worth about 200
dollars. Which branch, and what does the club produce?" Donation branch, written
acknowledgment, income row categorised to its source.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/club-financial-operations-cycle/main.html" width="100%" height="802" scrolling="no"></iframe>
```

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

## References

- [Chapter 31: Tracking Expenses and Building Funding Partnerships](../../chapters/31-expenses-and-funding-partnerships/index.md) -- the chapter this MicroSim supports.
- [Grant Writing and Tracking Workflow](../grant-writing-tracking-workflow/index.md) -- where grant income enters this cycle.
- [Expense report](https://en.wikipedia.org/wiki/Expense_report) -- the standard fields and why receipts matter.
- [Bookkeeping](https://en.wikipedia.org/wiki/Bookkeeping) -- the practice this is a small instance of.
- [Donation](https://en.wikipedia.org/wiki/Donation) -- acknowledgment requirements for charitable giving.
