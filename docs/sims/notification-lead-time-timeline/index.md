---
title: Notification Lead Time Timeline
description: Two reminders doing two different jobs: one buys planning time, one prevents forgetting, and a single reminder can only do one of them.
image: sims/notification-lead-time-timeline/notification-lead-time-timeline.png
status: built
library: vis-timeline
bloom_level: Apply (L3)
---

# Notification Lead Time Timeline

<iframe src="main.html" width="100%" height="632px" scrolling="no"></iframe>

[Run the Notification Lead Time Timeline MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Two reminders, fourteen days apart, counting down to an event. The pattern looks
trivial until you ask what each one is for.

The **day-14 reminder** is the one that changes what a family does. Two weeks is
long enough to move a shift, arrange a lift, or decline early enough that the
place can go to somebody else. It has to carry the date, the time, the place, and
an ask -- a reminder with no ask is an announcement.

The **day-1 reminder** cannot change plans and should not try. Its job is to stop
people forgetting, so it is short and carries only what matters in the next
twenty-four hours.

Drop either one and you lose a distinct thing: send only the first and people
plan to come and then forget; send only the second and people remember but
cannot rearrange. Add a third and you have not added a third job -- you have
repeated one of the first two, which is the point at which recipients start
filtering the club's mail.

Each reminder in the sim carries a sample message, because the timing argument is
only half of it; the other half is what the message says.

## How to Use

- **Click either reminder** to read its sample message and the reasoning behind
  its timing.
- **Click Event day** for what the two-touch pattern buys over one reminder, and
  what it would cost to add a third.
- **Hover any marker** to preview its day before clicking.
- **Read the axis** right to left as a countdown: the event sits at day zero on
  the right.
- **Reset** clears the selection.

## Lesson Plan

**Bloom level:** Apply (L3) -- *schedule*

**Learning objective:** Given an event date, the learner schedules reminder
notifications at appropriate lead times before it.

**Before the sim (5 min).** Ask the group to recall the last event they meant to
attend and missed. Was the problem that they never knew, or that they forgot? The
two answers need different fixes, which is the whole design of this cadence.

**With the sim (10 min).** Read both sample messages aloud. Ask what would break
if you swapped them -- sending the short one first and the detailed one the day
before. Then click Event day and read the caveat about a third reminder.

**After the sim (15 min).** Pick a real club event on the calendar, count back,
and write both messages now. Put them in a drafts folder with their send dates.
The pattern only helps if the writing happens before the week gets busy.

**Check for understanding.** Give the group an event three days away and ask what
the reminder schedule should be. The honest answer is that the planning reminder
is already impossible and only the nudge is left -- recognising that is the
objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/notification-lead-time-timeline/main.html" width="100%" height="632px" scrolling="no"></iframe>
```

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

## References

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md) -- the chapter this MicroSim supports.
- [Automated Communication Pipeline](../automated-communication-pipeline/index.md)
  -- the system that sends these on schedule.
- [Calendar Setup Workflow](../calendar-setup-workflow/index.md) -- where the
  event date these count back from is created.
- [Consent Collection Workflow](../consent-collection-workflow/index.md) -- the
  other deadline families are reminded about, on a longer lead time.
- [Reminder system](https://en.wikipedia.org/wiki/Reminder_software) -- automated
  reminders and lead time in the wider practice.
