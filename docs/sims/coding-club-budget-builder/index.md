---
title: Coding Club Budget Builder
description: Given a set of named recurring and one-time cost line items and a student count, the learner calculates the total annual budget, the recurring-versus-one-time split, and the cost per student.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Coding Club Budget Builder



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 30: Budgeting, Fundraising, and Grant Writing](../../chapters/30-budgeting-fundraising-grants/index.md).

```text
Type: microsim
**sim-id:** coding-club-budget-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/economics-course/tree/main/docs/sims/budget-builder

Purpose: Let a club leader build a full first-year budget out of individual line items, then see the recurring/one-time split and the resulting cost per student before committing to a real number.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given a set of named recurring and one-time cost line items and a student count, the learner calculates the total annual budget, the recurring-versus-one-time split, and the cost per student.

Instructional Rationale: A parameter-exploration pattern fits this Apply-level objective because the learner needs to add, remove, and reclassify several line items and immediately see the arithmetic consequences, rather than watch one pre-computed scenario play out.

Canvas layout:
- Left (60%): a stacked bar showing the recurring total and one-time total side by side, plus a large "Cost Per Student" readout
- Right (40%): a scrollable list of line items with add/remove controls, and the number-of-students input

Interactive controls:
- Button row: "Add Recurring Item" and "Add One-Time Item," each opening a name field and a dollar-amount field
- Per-item: a small "x" remove button
- Input (number): Number of students, default 12
- Button: "Load Sample Year-1 Budget" -- prefills the exact worked example above (internet, insurance, snacks, printing as recurring; Chromebooks, Moving Rainbow kits, robot kits, storage cart as one-time)
- Button: "Reset"

Behavior:
- Recurring Total = sum of all items marked recurring
- One-Time Total = sum of all items marked one-time
- Total Budget = Recurring Total + One-Time Total
- Cost Per Student = Total Budget / Number of Students, rounded to the nearest cent
- The stacked bar and the Cost Per Student readout recalculate immediately whenever any item, amount, or the student count changes

Default parameters: loads with the sample Year-1 budget from the worked example (12 students, $830 recurring, $1,830 one-time, $2,660 total, $221.67 per student)

Implementation notes: p5.js canvas with createButton and createInput controls parented to the sketch's own control div; store line items in a JavaScript array of {name, amount, type} objects so items can be added and removed without redrawing the whole layout from scratch.
```

## Related Resources

- [Chapter 30: Budgeting, Fundraising, and Grant Writing](../../chapters/30-budgeting-fundraising-grants/index.md)
