---
title: Data Retention Schedule by Type
description: Four kinds of club data, four different clocks -- and what event starts each one.
image: sims/data-retention-schedule/data-retention-schedule.png
status: built
library: Infographic overlay (grid-diagram.js)
bloom_level: Understand (L2)
---

# Data Retention Schedule by Type

<iframe src="main.html" width="100%" height="752" scrolling="no"></iframe>

[Run the Data Retention Schedule by Type MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Four kinds of data, four different rules, and the thing that makes a retention
policy work is not the durations — it is **naming the event that starts the
clock.** "Keep for eighteen months" is not actionable. "Eighteen months from the
day a student stops attending" is, because somebody can look at a record and
work out the date.

**Contact information** is the strictest: kept only while a family is actively
enrolled, deleted promptly when they are not. The temptation is to keep it "in
case they come back", and that is precisely the thing to refuse — a list of
former families' email addresses is a liability with no current purpose.

**Progress records** get eighteen months from the last session. Long enough to
write a reference or welcome a student back, short enough that the club is not
holding a decade of children's skill records.

**Survey responses** are the interesting case, because they are handled by
*transformation* rather than deletion. Individual free-text responses are
summarised and the originals discarded within 90 days; the anonymised summary
can be kept indefinitely, because it is no longer about identifiable people.
That is how you keep year-over-year comparison without keeping the data.

**Consent forms** have no clock of their own — they live exactly as long as the
data they authorise. That is the right rule and it is easy to get backwards:
deleting the consent form while keeping the data leaves you holding data with
no record of permission for it.

One practical note: a retention policy nobody executes is worse than none,
because it documents an intention you are visibly not meeting. Put the deletion
on the calendar.

## How to Use

- **Click each band** for the retention period and, more importantly, the event
  that starts it.
- Read the survey band twice. It is the only one where the answer is
  transformation rather than deletion.
- Try **Quiz Me** to practise placing a record.
- Then check your own club: which of the four do you actually delete on
  schedule?

## Lesson Plan

**Bloom level:** Understand (L2) -- *classify*

**Learning objective:** Given a type of club data, the learner classifies how
long it is retained and what event starts the deletion clock.

**Before (5 min).** Ask what the club currently deletes and when. "We haven't
deleted anything" is the common and honest answer.

**With the poster (10 min).** Read all four bands. Then, for each, name the
event that starts the clock — that is the part that turns a policy into a task.

**After (30 min).** Put four recurring calendar entries in, one per data type.
A retention policy is a calendar problem, not a writing problem.

**Check for understanding.** Ask: "A family left two years ago. What do you
still hold?" An anonymised survey summary, and nothing else — their contact
details went when they left, and their progress records went six months ago.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/data-retention-schedule/main.html" width="100%" height="752" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: infographic
**sim-id:** data-retention-schedule<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a mentor see how long each type of club data is kept and what triggers its deletion, so a retention question can be answered by glancing at one poster instead of hunting through a written policy document.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a type of club data, the learner classifies how long it is retained and what event starts the deletion clock.

Image style: Flat stacked-band poster, four full-width horizontal bands from bottom to top, each with a bold printed band label baked into the image since grid overlays hide chip labels by default

Image dimensions: 1000x700 (portrait, to accommodate four stacked bands)

Zones (4 horizontal bands, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3 bullet facts), ordered bottom to top from longest-kept to shortest-kept:

1. `consent-forms` -- color #4A90D9 -- boundaries approximately x1:3,y1:76,x2:97,y2:96 -- Summary: "Kept as long as the data they cover is retained." Facts: signed or declined guardian consent forms; retained alongside whatever data they authorize; deleted only when the covered data is deleted
2. `progress-records` -- color #50C878 -- boundaries approximately x1:3,y1:52,x2:97,y2:74 -- Summary: "Retained eighteen months after a student leaves." Facts: badge, attendance, and skill-tracking records; clock starts the day a student stops attending; deleted automatically once the window passes
3. `contact-information` -- color #F5A623 -- boundaries approximately x1:3,y1:28,x2:97,y2:50 -- Summary: "Retained only while a family is actively enrolled." Facts: name and one contact email; removed promptly once a family is no longer active; never kept "just in case" of future re-enrollment
4. `survey-responses` -- color #9B6BC7 -- boundaries approximately x1:3,y1:4,x2:97,y2:26 -- Summary: "Kept in anonymized form only, indefinitely." Facts: individual free-text responses are summarized and the originals discarded within 90 days; anonymized summaries may be kept for year-over-year comparison; no names are ever attached to a retained summary

showLabels: false (band titles are printed in the generated image)

Interactive features: Click or hover any band to highlight its hover zone and reveal its full fact list, including the specific event that starts its deletion clock, in a detail panel; explore mode only.

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the four rectangular hover zones over the generated poster image; `data.json` holds the 4 zones per the overlay-grid-data-json-schema.
```

## References

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md) -- the chapter this MicroSim supports.
- [Saving Student Data Decision Tool](../saving-student-data-decision-tool/index.md) -- deciding whether to collect it at all.
- [Consent Collection Workflow](../consent-collection-workflow/index.md) -- the forms in the top band.
- [Spreadsheet Template Zones](../spreadsheet-template-zones/index.md) -- where the progress records live.
- [Data retention](https://en.wikipedia.org/wiki/Data_retention) -- the general practice.
- [Data anonymization](https://en.wikipedia.org/wiki/Data_anonymization) -- what makes the survey rule work.
