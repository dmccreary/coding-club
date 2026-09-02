---
title: Four Coding Club Scheduling Models
description: Alternating Saturday, weekday after-school, semester-based, drop-in -- and what each one costs you.
image: sims/four-scheduling-models/four-scheduling-models.png
status: built
library: Infographic overlay (grid-diagram.js)
bloom_level: Evaluate (L5)
---

# Four Coding Club Scheduling Models

<iframe src="main.html" width="100%" height="650" scrolling="no"></iframe>

[Run the Four Coding Club Scheduling Models MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Four models, and none of them is the right answer. The decision is driven by
three things you mostly do not control: **your venue's opening hours, your
mentors' availability, and how far families travel.**

What each one is really trading:

**Alternating Saturday** buys low commitment and pays in momentum. A fortnight
is a long gap for a nine-year-old, and each session spends its first twenty
minutes re-establishing where everyone got to. It fits libraries and community
centres, which is often the deciding factor.

**Weekday after-school** buys the best attendance consistency you can get —
students are already there — and pays in two ways: it competes with every other
after-school activity, and it needs mentors free during working hours. That
second cost quietly determines who your mentors can be.

**Semester-based** buys a clean exit. Families and mentors can stop without
quitting, which sounds minor and is not — it is the difference between a mentor
who takes a term off and one who never comes back. It pays in onboarding: every
term starts from scratch.

**Drop-in** buys the lowest barrier to trying the club and pays in everything
else. You cannot plan mentor capacity, you cannot pair mentors with students
consistently, and you cannot build a curriculum that assumes last week.

The pattern worth noticing: **the models that are easiest for families to say
yes to are the hardest to run well.** Drop-in is the easiest ask and the hardest
club. That is not a reason to avoid it — a drop-in term is a good way to find
your first twenty families — but it is a reason to know what you are choosing.

## How to Use

- **Click each model** for what it suits and what it makes harder.
- Read the third bullet in each panel first. That is the cost, and it is the
  one that gets skipped.
- Try **Quiz Me** to practise matching a described club to a model.
- Then answer it for your own club: which of the three constraints — venue,
  mentors, travel — is actually deciding this?

## Lesson Plan

**Bloom level:** Evaluate (L5) -- *recommend*

**Learning objective:** Given a club's venue, mentor availability, and target
audience, the learner recommends the scheduling model that best fits.

**Before (10 min).** Write down the venue's opening hours and each mentor's
real availability. Most scheduling arguments dissolve once those two lists
exist.

**With the poster (15 min).** Read all four, then eliminate. Usually two are
impossible on the constraints and the decision is between the remaining two.

**After (20 min).** Commit to one for a term, and write down what you expect it
to cost you. Reviewing that note at the end of term is worth more than the
initial choice.

**Check for understanding.** Ask: "Drop-in gets the most families through the
door. Why isn't it the obvious choice?" Because you cannot plan mentor cover,
pair mentors consistently, or build on last week — the easiest model to join is
the hardest to run.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/four-scheduling-models/main.html" width="100%" height="650" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 11: Choosing a Schedule and Building Registration](../../chapters/11-schedule-and-registration/index.md).

```text
Type: infographic-overlay (grid)
**sim-id:** four-scheduling-models<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a founder compare the four dominant scheduling models on the same dimensions before committing, since the right choice depends heavily on venue, mentor, and family constraints that are easy to evaluate one at a time but hard to compare side by side from memory.

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: recommend

Learning objective: Given a club's venue, mentor availability, and target audience, the learner recommends the scheduling model that best fits.

Image style: Flat comparison poster, four vertical columns, each with a bold printed column header baked into the image ("Alternating Saturday," "Weekday After-School," "Semester-Based," "Drop-In")

Image dimensions: 1400x800 (landscape)

Zones (4 columns, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-6 bullet facts):
1. `alternating-saturday` -- color #4A90D9 -- boundaries approximately x1:2,y1:10,x2:25,y2:92 -- Summary: "Meets every other Saturday, all year." Facts: low weekly time commitment for families and mentors; works well for library and community-center venues open on weekends; the two-week gap can weaken momentum for younger students; predictable and easy to plan around long-term
2. `weekday-after-school` -- color #F5A623 -- boundaries approximately x1:27,y1:10,x2:50,y2:92 -- Summary: "Meets weekly, right after the school day." Facts: highest attendance consistency since students are already at or near the venue; competes directly with sports practices and other after-school activities; requires mentor availability during working hours, which favors retired or flexible-schedule mentors; best fit for school-based clubs (Chapter 2)
3. `semester-based` -- color #7ED6A5 -- boundaries approximately x1:52,y1:10,x2:75,y2:92 -- Summary: "Runs for a defined term, then breaks and re-enrolls." Facts: aligns naturally with school-calendar alignment; gives a clean, low-pressure exit point for families and mentors each term; requires a full onboarding process (Chapter 6) at the start of every new term; well suited to a curriculum with defined tracks (Chapter 15)
4. `drop-in` -- color #E67E22 -- boundaries approximately x1:77,y1:10,x2:98,y2:92 -- Summary: "No fixed roster -- students attend whichever sessions work for them." Facts: lowest commitment barrier for families to try the club; hardest model to plan mentor capacity for, since attendance is unpredictable session to session; poor fit for mentor pairing consistency (Chapter 10); works best for high-traffic venues like a bookstore or library with heavy walk-in foot traffic

showLabels: false (column titles are printed in the generated image)

Interactive features: Click or hover any column to highlight its zone and reveal its full fact list in a detail panel; explore mode only

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the four rectangular hover zones over the generated poster image; `data.json` holds the 4 zones per the overlay-grid-data-json-schema
```

## References

- [Chapter 11: Choosing a Schedule and Building Registration](../../chapters/11-schedule-and-registration/index.md) -- the chapter this MicroSim supports.
- [Three Kinds of Mentors](../three-kinds-of-mentors/index.md) -- whose availability the weekday model depends on.
- [Club Feasibility Decision Path](../club-feasibility-decision-path/index.md) -- the venue and mentor constraints, decided earlier.
- [Attendance Enrollment Trend Explorer](../attendance-enrollment-trend-explorer/index.md) -- what each model does to attendance over a term.
- [Extracurricular activity](https://en.wikipedia.org/wiki/Extracurricular_activity) -- what a weekday club is competing with.
