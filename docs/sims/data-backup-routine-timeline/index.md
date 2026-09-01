---
title: Data Backup Routine Timeline
description: Given a semester calendar, the learner schedules backup and restore-verification checkpoints at appropriate intervals.
status: scaffold
library: vis-timeline
bloom_level: Apply (L3)
---

# Data Backup Routine Timeline



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md)
