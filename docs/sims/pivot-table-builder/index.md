---
title: Pivot Table Builder
description: Given a small raw attendance dataset, the learner constructs a pivot table summarizing session counts by the row and column fields they select.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Pivot Table Builder



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 25: Analyzing Club Data and Choosing the Right Tools](../../chapters/25-analyzing-club-data-and-tools/index.md)
