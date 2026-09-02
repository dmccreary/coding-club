---
title: "Club Inventory Lifecycle Workflow"
description: "One tagged item's whole life: sticker, shelf, checkout, return, audit, and the branch into the lost item policy."
image: sims/club-inventory-lifecycle-workflow/club-inventory-lifecycle-workflow.png
status: built
library: Mermaid
bloom_level: Analyze (L4)
---

# Club Inventory Lifecycle Workflow

<iframe src="main.html" width="100%" height="1002" scrolling="no"></iframe>

[Run the Club Inventory Lifecycle Workflow MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Everything before **Store on Shelf** happens once. Everything after it repeats,
possibly for years.

The one-time part is tagging: a sequentially numbered sticker, a QR code that
opens the item's record when scanned, and a log entry tying them together. Do it
once, properly, and every later step is a scan rather than a search.

The repeating part has two loops. The **checkout loop** runs whenever someone
borrows an item, and its gate is simply whether it came back on time. An overdue
item is flagged automatically on the mentor dashboard -- the point being that
somebody follows up in week two rather than discovering it at the semester audit.

The **audit loop** runs each semester and asks a different question: is
everything the log expects actually here? Anything missing enters the lost item
policy, which the panel text is careful to describe as *no-blame*: a grace period
to keep searching, then a clear point at which the item is written off and the log
corrected. A log nobody trusts is worse than no log.

## How to Use

- **Hover a stage** to preview it; **click** to pin the definition.
- Two loops return to **Store on Shelf**: a returned item, and an item confirmed
  present at audit.
- Only one path leaves the lifecycle -- an item the audit cannot find.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *differentiate*

**Learning objective:** Given an item's current inventory stage and an audit
outcome, the learner differentiates whether the item should return to storage, be
flagged overdue, or enter the lost item policy.

**Before the sim (5 min).** Ask how many soldering irons the club owns and where
each one is. The gap between the two answers is what the tagging steps close.

**With the sim (15 min).** Separate the one-time tagging steps from the repeating
loops explicitly -- ask the group where the boundary is. Then trace an overdue
item and an item missing at audit, and ask why they are different problems.

**After the sim (15 min).** Tag five real items end to end, then run a spot audit
of one shelf.

**Check for understanding.** Ask: "An item is overdue by three weeks and the
borrower has left the club. Overdue or lost?" It enters the lost item policy --
and knowing that the policy is no-blame with a grace period is what makes people
willing to report it.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/club-inventory-lifecycle-workflow/main.html" width="100%" height="1002" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 34: Establishing an Oversight Board and Inventory System](../../chapters/34-oversight-board-and-inventory/index.md).

```text
Type: workflow
**sim-id:** club-inventory-lifecycle-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Trace one tagged item through its entire inventory lifecycle -- tagging, storage, checkout, return, periodic audit, and the branch into the lost item policy -- tying together every inventory concept from this chapter into one connected path.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given an item's current inventory stage and an audit outcome, the learner differentiates whether the item should return to storage, be flagged overdue, or enter the lost item policy.

Steps (flowchart with decision diamonds):
1. Start: "New Item Arrives" -- click reveals the Club Inventory System definition above.
2. Process: "Print Sticker" -- click reveals the Inventory Sticker Printing definition above.
3. Process: "Generate QR Code" -- click reveals the QR Code On Kits definition above.
4. Process: "Log via Asset Tagging Process" -- click reveals the Asset Tagging Process definition above.
5. Process: "Store on Shelf" -- click reveals "The item sits in general circulation, available for the next checkout."
6. Process: "Scan Out (Checkout System)" -- click reveals the Equipment Checkout System definition above.
7. Decision: "Returned by Due Date?" -- click reveals "The system compares today's date against the due date recorded at checkout."
7a. Branch "Yes" leads to Process: "Scan In (Return Tracking)" -- click reveals the Equipment Return Tracking definition above; loops back to step 5.
7b. Branch "No" leads to Process: "Flag as Overdue" -- click reveals "The mentor dashboard surfaces the overdue item automatically, prompting a follow-up before it becomes an audit surprise."; loops back to step 7a once resolved.
8. Process (periodic, separate branch from step 5): "Semester Audit" -- click reveals the Inventory Audit Process definition above.
9. Decision: "Item Found During Audit?" -- click reveals "Every logged item not currently checked out should be physically present; anything missing moves to the next step."
9a. Branch "Yes" loops back to step 5.
9b. Branch "No" leads to End: "Lost Item Policy" -- click reveals the Lost Item Policy definition above.

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text, matching the definition already given in this chapter's prose.

Color coding: Blue for tagging steps (sticker, QR, asset tagging), green for circulation steps (storage, checkout, return), purple for the decision diamonds, red for the overdue-flag and lost-item-policy end states.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan; layout reflows responsively on narrow screens.
```

## References

- [Chapter 34: Establishing an Oversight Board and Inventory System](../../chapters/34-oversight-board-and-inventory/index.md) -- the chapter this MicroSim supports.
- [Kit Lifecycle Workflow](../kit-lifecycle-workflow/index.md) -- the kit-level version this generalises.
- [Device Lifecycle Workflow](../device-lifecycle-workflow/index.md) -- the same pattern for laptops.
- [Asset tracking](https://en.wikipedia.org/wiki/Asset_tracking) -- tags, scans, and logs in general.
- [QR code](https://en.wikipedia.org/wiki/QR_code) -- why a phone camera is enough to run this.
