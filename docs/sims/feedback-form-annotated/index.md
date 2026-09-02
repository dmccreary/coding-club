---
title: Annotated Feedback Form
description: Three question types on one short form, and what each one buys and costs.
image: sims/feedback-form-annotated/feedback-form-annotated.png
status: built
library: Infographic overlay (grid-diagram.js)
bloom_level: Understand (L2)
---

# Annotated Feedback Form

<iframe src="main.html" width="100%" height="672" scrolling="no"></iframe>

[Run the Annotated Feedback Form MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Three questions, three types, and each one is a trade rather than a
preference.

**The rating scale** is fastest to answer and trivially averageable, which
makes it the only one of the three that gives you a **trend**. "4.1 this week,
3.4 last week" is a signal you can act on. What it loses is every reason — a
score tells you something changed and never what.

**Multiple choice** tallies into a clean count per option, and it is the right
choice when you already know the possible answers. Its cost is that it forces a
choice: a student who genuinely liked two activities equally has to pick one,
and your count now contains a small lie.

**Short free text** is the only one that can tell you something you did not
think to ask. It is also the hardest to summarise across many responses, which
is why it is **optional and last** — a required free-text box at the top of a
form is the single most reliable way to reduce your response rate.

**Three questions is the length, and that is a decision.** A five-question form
gets fewer responses than a three-question one, and the extra two questions are
almost never worth what they cost in completion. If you want a fourth, drop
one.

One pattern worth stealing: the scale question is about the *session*, not
about the student. "How was tonight?" is safe to answer honestly. "How did you
do tonight?" is not, and gets you politeness instead of data.

## How to Use

- **Click each question** for why that type was chosen and what it gives up.
- Note the order and what it does for the response rate: the fastest question
  is not last, and the optional one is.
- Try **Quiz Me** to practise choosing a type for a purpose.
- Then count the questions on your club's current form. If it is more than
  four, that is the finding.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Given a question on a feedback form, the learner
explains why that question type was chosen over the alternatives.

**Before (5 min).** Show the club's current feedback form, if there is one, and
ask what each question is *for*. Questions that cannot answer that should go.

**With the form (10 min).** Read all three annotations. Then pose the design
question: you may add one question. Which type, and what does it buy?

**After (a session).** Run the three-question form for real and look at the
response rate. Then try five questions the following week and compare — the
drop is usually convincing.

**Check for understanding.** Ask: "Your average rating dropped from 4.2 to 3.1
this week. What does the form tell you about why?" Nothing — the scale gives
you the change and the free-text box is the only place a reason could appear,
which is the argument for keeping it.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/feedback-form-annotated/main.html" width="100%" height="672" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: infographic
**sim-id:** feedback-form-annotated<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free poster + rectangular hover zones)<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/search-microsims/tree/main/docs/sims/feedback-loop-sim

Purpose: Show a sample post-event feedback form with three question types, so a mentor can see why each type was chosen and what it measures well.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a question on a feedback form, the learner explains why that question type was chosen over the alternatives.

Image style: Flat mock-form poster showing three stacked questions with their answer widgets

Image dimensions: 1000x600 (portrait, three stacked question zones)

Zones (3 horizontal bands, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3 bullet facts):

1. `rating-scale-question` -- color #4A90D9 -- boundaries approximately x1:3,y1:70,x2:97,y2:96 -- Summary: "How was tonight's session? (1-5 scale)" Facts: fastest to answer and to average across many responses; best for tracking a trend over time; loses nuance a written comment would capture
2. `multiple-choice-question` -- color #50C878 -- boundaries approximately x1:3,y1:38,x2:97,y2:68 -- Summary: "Which activity did you enjoy most? (pick one)" Facts: easy to tally into a simple count per option; best when the possible answers are already known; forces a choice even if a respondent liked two activities equally
3. `short-text-question` -- color #F5A623 -- boundaries approximately x1:3,y1:4,x2:97,y2:36 -- Summary: "Anything else you'd like us to know? (optional)" Facts: captures detail the fixed question types can't anticipate; optional, so it doesn't slow down a respondent in a hurry; harder to summarize across many responses than the scale or multiple-choice questions above

showLabels: false (question labels are printed in the generated image)

Interactive features: Click or hover any question zone to highlight it and reveal its full fact list in a detail panel; explore mode only.

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the three rectangular hover zones over the generated poster image; `data.json` holds the 3 zones per the overlay-grid-data-json-schema.
```

## References

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md) -- the chapter this MicroSim supports.
- [Data Retention Schedule by Type](../data-retention-schedule/index.md) -- what happens to these responses afterwards.
- [Email List Segments](../email-list-segments-venn/index.md) -- who you send the form to.
- [Club Health Metrics Dashboard](../club-health-metrics-dashboard/index.md) -- where the rating trend ends up.
- [Likert scale](https://en.wikipedia.org/wiki/Likert_scale) -- the rating question, named.
- [Questionnaire construction](https://en.wikipedia.org/wiki/Questionnaire_construction) -- length, order, and response rate.
