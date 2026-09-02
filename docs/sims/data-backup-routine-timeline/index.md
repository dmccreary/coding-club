---
title: "Data Backup Routine Timeline"
description: "A semester of backups in five checkpoints, only two of which need a person -- and the one that matters is the restore test, not the backup."
image: sims/data-backup-routine-timeline/data-backup-routine-timeline.png
status: built
library: vis-timeline
bloom_level: Apply (L3)
---

# Data Backup Routine Timeline

<iframe src="main.html" width="100%" height="602px" scrolling="no"></iframe>

[Run the Data Backup Routine Timeline MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Sixteen weeks, five checkpoints, two of which need a human. That ratio is the
argument for the routine: it is cheap precisely because it is mostly automatic.

The blue checkpoints are the quiet weeks, and they are on the timeline for a
reason. An automatic backup you never look at feels identical to one that
stopped in week two. Marking the weeks where nothing happens is what makes the
two amber ones legible as the entire manual workload for a semester.

The week 8 checkpoint is the one worth arguing about. It is not *check that the
backup exists* -- it is restore a real file and open it. Corrupted archives,
expired permissions, and a sync that quietly stopped all look exactly like a
working backup right up until the day you need one. **A backup you have never
restored from is a hypothesis, not a backup.**

Week 16 pairs the same test with archiving, because the end of a semester is when
the retention clock starts on most of the club's records, and setting those
deletion dates while somebody is already looking at the data costs nothing extra.

## How to Use

- **Click any checkpoint** to read what it involves and roughly how long it
  takes.
- **Hover a checkpoint** to preview its title and week before clicking.
- **Compare the colours**: blue is automatic and needs nothing; amber is a date
  somebody has to put in a calendar.
- **Reset** clears the selection and returns the panel to its prompt.

## Lesson Plan

**Bloom level:** Apply (L3) -- *schedule*

**Learning objective:** Given a semester calendar, the learner schedules backup
and restore-verification checkpoints at appropriate intervals.

**Before the sim (5 min).** Ask who in the room has ever restored a file from a
backup. Then ask who has a backup. The gap between those two counts is the
subject of this sim.

**With the sim (10 min).** Walk the five checkpoints left to right. At week 8,
stop and ask what could be wrong with a backup that still looks healthy in the
sync status. The panel lists three; groups usually get one.

**After the sim (15 min).** Open the club's real calendar and put the two amber
checkpoints in it as dated entries with an owner's name. A routine with no named
owner is a routine nobody runs.

**Check for understanding.** Ask: it is week 10 and the spreadsheet has been
corrupted. What did the week 8 checkpoint buy you? Answering *the knowledge that
the backup actually opens*, rather than *a backup*, is the objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/data-backup-routine-timeline/main.html" width="100%" height="602px" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: timeline
**sim-id:** data-backup-routine-timeline<br/>
**Library:** vis-timeline<br/>
**Status:** Specified

Purpose: Show a recommended backup and restore-verification cadence across a semester, so a club leader can see when backups happen and when they should actually be tested.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: schedule

Learning objective: Given a semester calendar, the learner schedules backup and restore-verification checkpoints at appropriate intervals.

Time period: One 16-week semester

Orientation: Horizontal

Events:
- Week 1: "Confirm Cloud Sync Is Active" -- automatic backup enabled on the tracking spreadsheet and consent-form folder
- Week 4: "Automatic Backup Running" -- ongoing, no action needed
- Week 8: "Mid-Semester Restore Test" -- restore one file from backup to confirm it isn't silently broken
- Week 12: "Automatic Backup Running" -- ongoing, no action needed
- Week 16: "End-of-Semester Restore Test and Archive" -- verify backups again and archive the semester's records per the retention policy

Visual style: Horizontal timeline with alternating above/below event placement

Color coding: Blue for ongoing automatic backup events, amber for the two manual restore-test checkpoints

Interactive features:
- Click any event to see what it involves and roughly how long it takes
- Hover to preview the event title before clicking

Implementation: vis-timeline library rendered in main.html with a `select` event handler opening a detail panel for the clicked item.
```

## References

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md) -- the chapter this MicroSim supports.
- [Data Retention Schedule](../data-retention-schedule/index.md) -- what the week
  16 archive step is following.
- [Spreadsheet Template Zones](../spreadsheet-template-zones/index.md) -- the
  tracking spreadsheet these backups protect.
- [Consent Collection Workflow](../consent-collection-workflow/index.md) -- the
  other folder in the week 1 checkpoint, and the more sensitive one.
- [Backup](https://en.wikipedia.org/wiki/Backup) -- restore testing and the
  3-2-1 rule in the wider practice.
