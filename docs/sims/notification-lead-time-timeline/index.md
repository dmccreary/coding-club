---
title: Notification Lead-Time Timeline
description: Given an event date, the learner schedules reminder notifications at appropriate lead times before it.
status: scaffold
library: vis-timeline
bloom_level: Apply (L3)
---

# Notification Lead-Time Timeline



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: timeline
**sim-id:** notification-lead-time-timeline<br/>
**Library:** vis-timeline<br/>
**Status:** Specified

Purpose: Show a recommended two-touch reminder cadence counting down to an event, so a mentor can see when each reminder should go out and why.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: schedule

Learning objective: Given an event date, the learner schedules reminder notifications at appropriate lead times before it.

Time period: 14 days before an event through the event itself

Orientation: Horizontal, counting down to a fixed "Event Day" marker

Events:
- Day -14: "First Reminder Sent" -- gives families time to plan around the event
- Day -1: "Second Reminder Sent" -- a short, same-day-relevant nudge
- Day 0: "Event Day"

Visual style: Horizontal countdown timeline with the event day marked distinctly at the right edge

Color coding: Blue for the first reminder, amber for the second reminder, green for event day

Interactive features:
- Click either reminder event to see a sample message and the reasoning behind its timing
- Hover the event-day marker to see a summary comparing this two-touch pattern's attendance outcome to a single-reminder baseline

Implementation: vis-timeline library rendered in main.html with a `select` event handler opening a detail panel for the clicked item.
```

## Related Resources

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md)
