---
title: "Pivot Table Builder"
description: "Twenty raw sign-in rows, two dropdowns, and a grand total that never changes."
image: sims/pivot-table-builder/pivot-table-builder.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Pivot Table Builder

<iframe src="main.html" width="100%" height="562" scrolling="no"></iframe>

[Run the Pivot Table Builder MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A pivot table looks like magic and is not. It is the same rows, counted a
different way.

The proof is the grand total. It is **20** for every combination of fields you
can pick, because every raw row lands in exactly one cell. Watching that number
hold still while every other cell in the grid moves is what makes pivots stop
feeling mysterious — and it is also the check that tells you a real pivot has
gone wrong. If your grand total does not match your row count, the pivot
dropped something, usually a blank or a misspelling that did not match any
header.

**Rows and columns are just two grouping choices.** Day of Week by Month
answers "which weekday is busiest, and does that change through the term?".
Student Initials by Month answers "who is drifting away?". Same twenty rows,
entirely different question — and choosing the question is the part that takes
judgement.

The two chosen fields are tinted in the raw data so the connection between the
dropdown and the headers that appear is visible rather than inferred. That link
is the thing people miss when a spreadsheet builds the pivot for them.

**Set Columns to none** to see the simplest possible pivot: one count per row
group. Every pivot is that, optionally split sideways.

## How to Use

- Read the raw rows first. They are unsorted, the way an export from a sign-in
  sheet actually arrives.
- The tinted columns on the left are the two fields you have picked. Change a
  dropdown and watch the tint move.
- Pick a cell in the grid and count it by hand from the raw rows. It will
  match.
- Set **Columns field** to **none** for the simplest pivot: one total per row.
- Try **Student Initials** as the rows field — the same twenty rows now answer
  a question about people rather than days.

## Lesson Plan

**Bloom level:** Apply (L3) -- *construct*

**Learning objective:** Given a small raw attendance dataset, the learner
constructs a pivot table summarizing session counts by the row and column
fields they select.

**Before the sim (5 min).** Show the twenty raw rows and ask which weekday is
busiest. Somebody will start counting by hand, which is exactly the work a
pivot removes.

**With the sim (15 min).** Build two or three pivots and, for each, say out
loud what question it answers. Then verify one cell by hand — the counting
builds the trust.

**After the sim (25 min).** Do it in a real spreadsheet with the club's own
attendance. The first real pivot usually has a grand total that does not match,
because of a blank row or "Tues" alongside "Tue", and finding that is more
valuable than a pivot that works first time.

**Check for understanding.** Ask: "Your pivot's grand total is 18 but the sheet
has 20 rows. What happened?" Two rows have a value that does not match any
header — a blank, a typo, or a stray space. The grand total is the check, which
is why it is worth looking at every time.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/pivot-table-builder/main.html" width="100%" height="562" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 25: Analyzing Club Data and Choosing the Right Tools](../../chapters/25-analyzing-club-data-and-tools/index.md).

```text
Type: microsim
**sim-id:** pivot-table-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner choose which fields become pivot table rows and columns, and watch a small raw attendance dataset reorganize into the resulting summary grid.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: construct

Learning objective: Given a small raw attendance dataset, the learner constructs a pivot table summarizing session counts by the row and column fields they select.

Canvas layout:
- Left (350px): scrolling list of ~20 raw sample rows (Day of Week, Month, Student Initials)
- Right (300px): the resulting pivot grid, rebuilt live as field choices change

Data Visibility Requirements:
  Stage 1: Show the 20 raw rows exactly as they would appear in a real spreadsheet, unsorted
  Stage 2: Show the selected Rows field and Columns field highlighted in the raw data as the learner changes the dropdowns
  Stage 3: Show the pivot grid rebuild with updated row/column headers and recalculated counts in each cell
  Final: Show the grand total row and column, confirming the cell counts sum correctly to the total number of raw rows

Interactive controls:
- Dropdown: "Rows field" (Day of Week / Month / Student Initials)
- Dropdown: "Columns field" (Month / Day of Week / none)
- Button: "Build Pivot"
- Button: "Reset to Default"

Default parameters: Rows field = "Day of Week", Columns field = "Month"; default pivot shows session counts per weekday per month across the 20-row sample dataset

Implementation notes: p5.js canvas with `createSelect` for each field dropdown and `createButton` for Build/Reset; the 20 sample rows and the pivot-aggregation logic live in a small in-memory array, recomputed whenever a dropdown changes, so the grid always reflects the current field selection without a page reload.
```

## References

- [Chapter 25: Analyzing Club Data and Choosing the Right Tools](../../chapters/25-analyzing-club-data-and-tools/index.md) -- the chapter this MicroSim supports.
- [Attendance Enrollment Trend Explorer](../attendance-enrollment-trend-explorer/index.md) -- what the summarised numbers look like over a term.
- [Anonymized Attendance Chart](../anonymized-attendance-chart/index.md) -- publishing these counts without identifying anybody.
- [Pivot table](https://en.wikipedia.org/wiki/Pivot_table) -- the general idea and its history.
- [Group by](https://en.wikipedia.org/wiki/Group_by_(SQL)) -- the same operation, written as a query.
