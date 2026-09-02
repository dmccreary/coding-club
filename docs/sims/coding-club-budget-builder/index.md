---
title: Coding Club Budget Builder
description: A first-year budget built line by line, split into what recurs and what does not.
image: sims/coding-club-budget-builder/coding-club-budget-builder.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Coding Club Budget Builder

<iframe src="main.html" width="100%" height="562" scrolling="no"></iframe>

[Run the Coding Club Budget Builder MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A first-year budget has two halves that behave completely differently, and
conflating them is the most common mistake in a club's first funding
conversation.

The sample year comes to **$2,660**. That sounds like a $2,660-a-year club and
it is not. **$1,830** of it buys hardware once — Chromebooks, kits, a storage
cart. Only **$830** comes back every September.

Get that backwards and you fail in one of two ways. Ask a funder for $830 to
start and you cannot buy the kit. Tell them the club costs $2,660 a year and
you have promised an ongoing number you do not need and probably cannot
sustain.

**Cost per student is what turns a budget into an argument.** "$2,660" is a
number a principal has to interpret. "$221 per student in year one, $69 a year
after that" is a sentence they can act on — and the second figure is usually
lower than anyone expects, which is exactly why it is worth quoting.

One classification worth arguing about in your own club: a device replacement
fund. It looks one-time because you bought the devices once, and it is
recurring, because they last three years and a club that does not save for
that has a cliff coming.

## How to Use

- The sim opens on the sample year-1 budget. Read the two bars before
  anything else.
- **Add an item** with a name, an amount, and a type; **click the ×** on any
  row to remove it.
- Move a big number between recurring and one-time — remove it and re-add it
  with the other type — and watch the cost per student stay put while the
  ongoing figure moves a lot.
- Change **Students** to your real club size.
- **Clear all** empties the list so you can build your own from scratch.

## Lesson Plan

**Bloom level:** Apply (L3) -- *calculate*

**Learning objective:** Given a set of named recurring and one-time cost line
items and a student count, the learner calculates the total annual budget, the
recurring-versus-one-time split, and the cost per student.

**Before the sim (10 min).** Ask the group to guess what a club costs to run
for a year. The guesses will be either wildly high or wildly low, and both
usually come from not separating setup from running.

**With the sim (15 min).** Build the club's actual budget together. Arguing
about whether a line is recurring is the productive part — snacks obviously
are, a laptop obviously is not, and a replacement fund is a genuine debate.

**After the sim (30 min).** Write the two-sentence version for a funder: what
year one costs, what every year after costs, and what that is per student. That
is the paragraph that gets read.

**Check for understanding.** Ask: "A funder offers to cover your recurring
costs for three years. What have you still not solved?" The one-time costs, and
the replacement of the hardware in year three or four. Recurring funding does
not buy equipment.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/coding-club-budget-builder/main.html" width="100%" height="562" scrolling="no"></iframe>
```

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

## References

- [Chapter 30: Budgeting, Fundraising, and Grant Writing](../../chapters/30-budgeting-fundraising-grants/index.md) -- the chapter this MicroSim supports.
- [Grant Budget Laptop Calculator](../grant-budget-laptop-calculator/index.md) -- sizing the biggest one-time line.
- [Membership Fee Model Comparison](../membership-fee-model-comparison/index.md) -- one way of covering the recurring half.
- [Club Financial Operations Cycle](../club-financial-operations-cycle/index.md) -- tracking the money once it arrives.
- [Operating expense](https://en.wikipedia.org/wiki/Operating_expense) -- the recurring half, named properly.
- [Capital expenditure](https://en.wikipedia.org/wiki/Capital_expenditure) -- and the one-time half.
