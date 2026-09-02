---
title: "Spreadsheet Template Zones"
description: "Three zones in a tracking spreadsheet, and why the order of the columns is not arbitrary."
image: sims/spreadsheet-template-zones/spreadsheet-template-zones.png
status: built
library: Infographic overlay (grid-diagram.js)
bloom_level: Understand (L2)
---

# Spreadsheet Template Zones

<iframe src="main.html" width="100%" height="592" scrolling="no"></iframe>

[Run the Spreadsheet Template Zones MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Three zones, left to right, and the left-to-right order is the point.

**Identity columns** — name (or initials) and join date — come first and are
**never reordered**. They are the only columns a substitute mentor needs to
find a specific student, and a tracker whose first column moves is a tracker
nobody trusts.

**Badge columns** are the middle block, one per skill, arranged in the order
they are typically earned. That ordering is what makes progress *scannable*: a
student's row reads left to right as a filled prefix and an empty tail, and you
can see where somebody is without reading a single date. Break the order and
you lose that, permanently, because nobody re-sorts a live spreadsheet.

Each badge cell holds a **completion date, not a checkmark**. A tick tells you
it happened; a date tells you when, which is what you need to answer "is this
student still progressing?" — the question that actually matters and the one a
tick cannot answer.

**The notes column is always rightmost**, and that placement is doing real
work. New badges get added to the right of the badge block, and a notes column
sitting in the middle would either block that or get pushed around every time.
Rightmost means the badge block can grow without anything moving.

Notes should be short and factual — context the next mentor needs. It is not
the place for a communication log with a parent, which belongs somewhere with
dates and its own retention rule.

## How to Use

- **Click each zone** for which columns belong to it and why.
- Note the rule attached to each: identity never reorders, badges stay in
  earning order, notes stay rightmost.
- Try **Quiz Me** to practise placing a column.
- Then look at your club's real tracker and find the column that is in the
  wrong zone. There usually is one.

## Lesson Plan

**Bloom level:** Understand (L2) -- *classify*

**Learning objective:** Given a column from a tracking spreadsheet, the learner
classifies which template zone it belongs to and why.

**Before (5 min).** Open the club's actual tracker and ask a mentor who did not
build it to find a specific student's loops badge. How long that takes is the
diagnosis.

**With the poster (10 min).** Read all three zones, then apply them to the real
sheet. The common finding is a notes column somewhere in the middle.

**After (20 min).** Reorder the sheet once, properly, and agree that the badge
block only ever grows to the right.

**Check for understanding.** Ask: "You want to add a new badge for sensors.
Where does the column go?" At the right-hand end of the badge block, left of
notes — and if notes were in the middle, you would have discovered why that is
the rule.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/spreadsheet-template-zones/main.html" width="100%" height="592" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: infographic
**sim-id:** spreadsheet-template-zones<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Show the three functional zones of a well-designed tracking spreadsheet template, so a new mentor can recognize why the columns are grouped the way they are.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a column from a tracking spreadsheet, the learner classifies which template zone it belongs to and why.

Image style: Flat mock-spreadsheet poster showing a header row and a few sample rows, with three vertical column-block zones outlined

Image dimensions: 1000x500 (landscape, to resemble an actual spreadsheet)

Zones (3 vertical column blocks, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3 bullet facts):

1. `identity-columns` -- color #4A90D9 -- boundaries approximately x1:3,y1:5,x2:30,y2:95 -- Summary: "Who the row is about." Facts: name (or initials) and join date; never reordered once set; the only columns a substitute mentor needs to find a specific student
2. `badge-columns` -- color #50C878 -- boundaries approximately x1:32,y1:5,x2:75,y2:95 -- Summary: "What has been mastered, and when." Facts: one column per badge or skill, in the order they're typically earned; each cell holds a completion date, not just a checkmark; grouped together so progress is scannable left to right
3. `notes-column` -- color #F5A623 -- boundaries approximately x1:77,y1:5,x2:97,y2:95 -- Summary: "Anything that doesn't fit a fixed column." Facts: free-text field for context a mentor wants the next mentor to see; kept to short, factual notes, not a substitute for the parent communication log; always the rightmost column so it never disrupts the badge block

showLabels: false (zone titles are printed in the generated image)

Interactive features: Click or hover any zone to highlight it and reveal its full fact list in a detail panel; explore mode only.

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the three rectangular hover zones over the generated poster image; `data.json` holds the 3 zones per the overlay-grid-data-json-schema.
```

## References

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md) -- the chapter this MicroSim supports.
- [Pivot Table Builder](../pivot-table-builder/index.md) -- summarising the rows this template holds.
- [Data Retention Schedule by Type](../data-retention-schedule/index.md) -- how long these rows are kept.
- [Saving Student Data Decision Tool](../saving-student-data-decision-tool/index.md) -- whether a proposed new column should exist.
- [Spreadsheet](https://en.wikipedia.org/wiki/Spreadsheet) -- and why a stable column order is worth protecting.
