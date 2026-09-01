---
title: Device Lifecycle Workflow
description: Follow one club laptop from imaging through circulation to the three-way condition check that decides what happens next.
image: sims/device-lifecycle-workflow/device-lifecycle-workflow.png
status: built
library: Mermaid
bloom_level: Analyze (L4)
---

# Device Lifecycle Workflow

<iframe src="main.html" width="100%" height="902" scrolling="no"></iframe>

[Run the Device Lifecycle Workflow MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A club laptop is not a laptop. It is an asset with a record, a label, a place to
live, and a defined path back into service after every outing.

Two gates do the real work here. The first asks whether the machine is **leaving
the building**, because that is what determines whether a loaner agreement is
needed -- an in-session laptop needs no paperwork beyond the inventory record.

The second is the condition check on return, and its three branches are
deliberately not "fine / broken." The middle branch, basic repair, exists because
most faults a club sees are inside a mentor's safe boundary: a reseated battery,
a replaced key cap, a cleared port. Machines that pass through it rejoin the cart
exactly like the cleaned ones.

Only the third branch leaves the cycle, and it does not mean the laptop is dead.
It means the fault is past what a mentor should attempt, so the machine is logged
out of service and sent onward.

## How to Use

- **Hover a stage** to preview it; **click** to pin the definition.
- Follow the two decision diamonds: one decides whether paperwork is needed, the
  other decides how a returned machine gets back into service.
- Note that both **Run Cleaning Routine** and **Attempt Basic Repair** lead back
  to the charging cart. Only the third branch exits.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *differentiate*

**Learning objective:** Given a returned laptop's condition, the learner
differentiates whether it should be cleaned and returned to circulation, sent
through basic repair, or flagged for outside repair.

**Before the sim (5 min).** Ask where the club's laptops are right now, and who
has each one. If nobody can answer for every machine, the inventory step is the
gap this diagram fills.

**With the sim (15 min).** Trace the loop, then stop at the condition check. Ask
the group to draw the line between "basic repair" and "outside repair" for their
own club. That boundary is a policy decision, and the diagram is the place to
make it explicit.

**After the sim (15 min).** Write the club's own repair boundary as a short list:
three things a mentor may attempt, three that always go outside.

**Check for understanding.** Ask: "A laptop comes back with a cracked screen. Which
branch, and what happens to its inventory record?" Outside repair, logged as out
of service -- the record change matters as much as the routing.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/device-lifecycle-workflow/main.html" width="100%" height="902" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 22: Purchasing and Configuring Club Devices](../../chapters/22-purchasing-configuring-devices/index.md).

```text
Type: workflow
**sim-id:** device-lifecycle-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Trace one laptop through its full physical-management cycle -- imaging, labeling, inventory, storage, circulation, and the clean/repair decision -- tying together every physical-asset concept from this chapter into one connected path.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a returned laptop's condition, the learner differentiates whether it should be cleaned and returned to circulation, sent through basic repair, or flagged for outside repair.

Steps (flowchart with decision diamonds):
1. Start: "New Laptop Imaged and Configured" -- click reveals the Device Imaging Process definition above.
2. Process: "Apply Label" -- click reveals the Device Labeling System definition above.
3. Process: "Add to Inventory Record" -- click reveals the Device Inventory Tracking definition above.
4. Process: "Store in Charging Cart" -- click reveals the Device Charging Cart definition above.
5. Decision: "Leaving the Building?" -- click reveals "Whether a laptop stays on club premises for in-session use or goes home with a student determines whether a loaner agreement is required."
5a. Branch "Yes" leads to "Sign Loaner Agreement" -- click reveals the Device Loaner Agreement definition above; continues to step 6.
5b. Branch "No" leads to "Used In-Session" -- continues to step 6.
6. Process: "Laptop Returned" -- click reveals "The laptop comes back to the club, either at the end of a session or at the end of a loan period, and its condition is checked before it re-enters storage."
7. Decision: "Condition Check" -- click reveals "A mentor inspects the returned laptop for anything beyond normal wear before deciding its next step."
7a. Branch "Normal Wear" leads to "Run Cleaning Routine" -- click reveals the Device Cleaning Routine definition above; loops back to step 4.
7b. Branch "Minor Hardware Issue" leads to "Attempt Basic Repair" -- click reveals the Device Repair Basics definition above; loops back to step 4 if resolved.
7c. Branch "Beyond Basic Repair" leads to End: "Flag for Outside Repair" -- click reveals "Damage beyond a mentor's safe repair boundary is logged in the inventory as out of service and sent to a manufacturer or repair shop, a path Chapter 23 continues with the club's full device end-of-life planning."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text, matching the definition already given in this chapter's prose.

Color coding: Blue for acquisition steps (imaging, labeling, inventory), amber for storage (charging cart), green for circulation steps (loaner agreement, return), purple for the two decision diamonds, gray for the outside-repair end state.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan.
```

## References

- [Chapter 22: Purchasing and Configuring Devices](../../chapters/22-purchasing-configuring-devices/index.md) -- the chapter this MicroSim supports.
- [Platform Management Workflow](../platform-management-workflow/index.md) -- what happens during the imaging step, per operating system.
- [Kit Lifecycle Workflow](../kit-lifecycle-workflow/index.md) -- the same pattern applied to electronics kits.
- [IT asset management](https://en.wikipedia.org/wiki/IT_asset_management) -- the professional practice this is a club-sized version of.
- [Disk image](https://en.wikipedia.org/wiki/Disk_image) -- what the imaging step actually applies.
