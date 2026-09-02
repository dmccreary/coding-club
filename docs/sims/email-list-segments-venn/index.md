---
title: "Email List Segments"
description: "Four club mailing segments, drawn so the overlaps that exist are visible and the one that must not is visibly absent."
image: sims/email-list-segments-venn/email-list-segments-venn.png
status: built
library: p5.js
bloom_level: Analyze (L4)
---

# Email List Segments

<iframe src="main.html" width="100%" height="582" scrolling="no"></iframe>

[Run the Email List Segments MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Four segments a club actually mails, and the shape of the diagram carries two
facts worth more than the labels.

**Active Families and Waitlist never overlap.** A contact is in exactly one of
them, and moving between them is an event with a date on it. If your list has
somebody in both, one of the two is stale — almost always a family who got a
place months ago and was never taken off the waitlist. They are now receiving
"you are still on the list" emails while attending every week, which is exactly
as confusing as it sounds.

**Active Families and Mentors do overlap**, because a parent who also mentors
is one person with one address. That is fine as long as you know it. The
failure is the other way round: assuming the mentor mailing covered them, so
they get the rota and never hear that the session is cancelled.

**Mentors and Alumni overlap slightly** — the former family member who stayed
on after their own student left. Small group, usually the most reliable one you
have, and the people most likely to answer a fundraising ask.

The practical consequence: **segment membership is a property of a contact, not
a list they live on.** A tool that makes you copy addresses between four
separate lists will drift within a term. A tool that tags one contact record
will not.

## How to Use

- **Click any circle** for what that segment is and what you would send to it.
- **Click where two circles overlap** for the contact who is in both, and what
  that means for your mailings.
- Press **Highlight overlaps** to flash the two that exist.
- Look at the gap between Active Families and Waitlist. That gap is the point.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *differentiate*

**Learning objective:** Given a sample contact, the learner differentiates
which segment or segments that contact belongs to.

**Before the sim (5 min).** Ask how many email lists the club has. Then ask
whether anybody is on two of them. The pause is the lesson starting.

**With the sim (10 min).** Read out five described contacts — a parent who
mentors, a family who joined last month, a mentor with no children in the club,
a family who left in July, a family who enquired in September — and place each
one as a group.

**After the sim (20 min).** Audit the real lists. Look specifically for
addresses appearing in both Active Families and Waitlist; every one of those is
a family getting the wrong emails right now.

**Check for understanding.** Ask: "A parent who mentors gets the session-cancelled
email twice. Is that a bug?" No — it is the correct behaviour of two segments
that both contain them, and it is much better than the alternative, which is
each mailing assuming the other one covered them.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/email-list-segments-venn/main.html" width="100%" height="582" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: diagram
**sim-id:** email-list-segments-venn<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Show how a club's four common email segments overlap, so a mentor can see why one contact might belong to more than one group.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a sample contact, the learner differentiates which segment or segments that contact belongs to.

Visual style: Four overlapping circles (a Venn-style diagram): Active Families, Mentors, Waitlist, Alumni

Overlaps of interest:
- Active Families and Mentors overlap (a parent who also mentors)
- Waitlist does not overlap with Active Families (a contact is in exactly one of the two)
- Alumni overlaps only slightly with Mentors (a former family member who stayed on as a mentor)

Interactive controls:
- Click any region (including an overlap region) to see which segment(s) it represents and a sample message type sent to it
- Button: "Highlight Overlaps" -- flashes the two overlapping regions to draw attention to them

Default parameters: All four circles visible at load; no region pre-selected

Implementation notes: p5.js canvas drawing four semi-transparent circles positioned so the two intended overlaps are visible; a lookup table maps each region (including overlaps) to its label and example message, checked against mouse position on click.
```

## References

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md) -- the chapter this MicroSim supports.
- [Automated Communication Pipeline](../automated-communication-pipeline/index.md) -- sending to these segments without doing it by hand.
- [Saving Student Data Decision Tool](../saving-student-data-decision-tool/index.md) -- deciding what you hold about each contact in the first place.
- [Email marketing](https://en.wikipedia.org/wiki/Email_marketing#Segmentation) -- segmentation as a general practice.
- [Venn diagram](https://en.wikipedia.org/wiki/Venn_diagram) -- and what a gap between two circles means.
