---
title: "Promotional Materials Recruiting Rubric"
description: "Five criteria, ten points, three sample flyers -- and the lowest row matters more than the total."
image: sims/promotional-materials-recruiting-rubric/promotional-materials-recruiting-rubric.png
status: built
library: p5.js
bloom_level: Evaluate (L5)
---

# Promotional Materials Recruiting Rubric

<iframe src="main.html" width="100%" height="622" scrolling="no"></iframe>

[Run the Promotional Materials Recruiting Rubric MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Five criteria, ten points, and three flyers to practise on before you have to
judge your own without help.

The three samples are ordered worst to best, and none of them is a caricature.
**Flyer 1 — "Build. Compete. Win."** is a real flyer that a well-meaning club
produces and is proud of. It is exciting. It also tells a student who does not
already see themselves as a competitor that this is not for them, shows two
boys and a robot, never mentions cost, and offers a web form as the only way to
make contact.

**The lowest-scoring row matters more than the total.** A flyer at 7 out of 10
with a zero in language accessibility is not "pretty good" — it is invisible to
a section of the community, and the total is what hides that. The tool
colour-codes the total but reveals the weakest row, in that order deliberately.

The criteria that surprise people:

**Low-effort contact method.** A web form is the highest-effort way to say
hello and the easiest to abandon. A number that accepts text messages costs
nothing and converts far better, particularly with families who do not check
email.

**States there is no cost, plainly.** Not implied, not "no fees required" in
small print at the bottom. A family that has to work out whether they can
afford it usually does not ask.

The suggested scores are a starting point. Override any of them — but be ready
to say why, because that is the skill this is building.

## How to Use

- Pick a flyer from the selector. The suggested scores load automatically.
- **Click any criterion row** to see the full 0 / 1 / 2 scale, and the plus and
  minus controls to change the score if you disagree.
- Read the total's colour, then press **Reveal weakest criterion** for the one
  concrete fix.
- Run all three flyers. Then do the same with your club's actual flyer, which
  is the only run that matters.

## Lesson Plan

**Bloom level:** Evaluate (L5) -- *critique*

**Learning objective:** Given a description of a sample club flyer or web page,
the learner scores it against five recruiting-equity criteria and identifies
the single lowest-scoring criterion to fix first.

**Before the sim (5 min).** Show flyer 1's description and ask whether it looks
fine. It does, which is the point — nobody produces a flyer they think excludes
people.

**With the sim (15 min).** Score all three as a group, arguing about the ones
where you disagree with the suggestion. Flyer 2 is the interesting one: it is
genuinely well-intentioned and still scores zero on language.

**After the sim (30 min).** Score the club's real flyer, fix the lowest row,
and score it again. One fix per revision is enough; a flyer rewritten wholesale
usually loses whatever was working.

**Check for understanding.** Ask: "Two flyers both score 6. One has 2,2,2,0,0
and the other has 1,1,1,1,2. Which is more urgent?" The first — two criteria at
zero means two whole groups the flyer does not reach, which an even spread of
partial scores does not.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/promotional-materials-recruiting-rubric/main.html" width="100%" height="622" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 28: Reaching Underserved Communities and Removing Barriers](../../chapters/28-underserved-communities-barriers/index.md).

```text
Type: microsim
**sim-id:** promotional-materials-recruiting-rubric<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Give a mentor practice critiquing a club's own promotional materials against the goal of recruiting women, minorities, and under-served communities, before they have to judge their own flyer without guidance.

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: critique

Learning objective: Given a description of a sample club flyer or web page, the learner scores it against five recruiting-equity criteria and identifies the single lowest-scoring criterion to fix first.

Canvas layout:
- Top (100px): Dropdown to select one of three sample flyer descriptions, each shown as a short text summary rather than a real photo
- Left (60%): Five criteria rows, each clickable
- Right (40%): Running score display (0-10 total) and a "weakest criterion" callout

Sample flyers (described in text, not real images):
1. "Build. Compete. Win." -- photo described as two boys pointing at a robot, English only, no cost mentioned, generic email sign-up form
2. "Coding Club -- All Welcome" -- photo described as a mixed-gender, mixed-race group mid-conversation, states "no cost to join," English only, phone number listed
3. "Club de Programacion -- Gratis!" -- bilingual flyer, mixed-group photo, states no cost, lists both an email and a text-message contact, notes an accessible entrance

Criteria (5 clickable rows, each worth 0-2 points):
1. Diverse, non-stereotyped imagery -- click reveals: "0 = only one gender/race shown, 1 = mixed but incidental, 2 = clearly and intentionally diverse"
2. States there is no cost, plainly -- click reveals: "0 = cost unclear or unmentioned, 1 = implied, 2 = stated in plain language"
3. Language accessibility noted -- click reveals: "0 = English only with no note, 1 = a translation exists elsewhere, 2 = bilingual or multilingual flyer itself"
4. Low-effort contact method -- click reveals: "0 = web form only, 1 = email listed, 2 = phone or text listed"
5. Accessibility/accommodation mentioned -- click reveals: "0 = not mentioned, 1 = implied by venue, 2 = explicitly stated"

Interactive controls:
- Dropdown: select sample flyer (auto-fills a suggested score per criterion, editable)
- Click each criterion row: reveal its 0/1/2 rubric description in an infobox
- Plus/minus buttons per criterion to set the learner's own score
- Button: "Reveal Weakest Criterion" -- highlights the lowest-scoring row and names one concrete fix

Behavior: selecting a sample flyer loads a suggested score per criterion, which the learner can review and override; the total updates live and is color-coded (red under 4, yellow 4-7, green 8-10); "Reveal Weakest Criterion" is available at any score.

Instructional rationale: This matches the Evaluate-level Rubric Rater pattern because the course's own Evaluate outcome asks the reader to critique promotional materials against a specific recruiting goal; scoring against explicit, discrete criteria -- rather than an unstructured gut reaction -- builds the exact judgment skill the reader needs to apply unaided to their own club's materials.

Implementation: p5.js for the layout, score display, and color-coded total; criteria and sample flyers stored in a small JavaScript data array, since the fixed dataset doesn't need an external data.json.
```

## References

- [Chapter 28: Reaching Underserved Communities and Removing Barriers](../../chapters/28-underserved-communities-barriers/index.md) -- the chapter this MicroSim supports.
- [Equity Audit Checklist](../equity-audit-checklist/index.md) -- the wider audit this rubric is one category of.
- [Access Barrier to Fix Map](../access-barrier-to-fix-map/index.md) -- the barriers these criteria are trying to remove.
- [Club Growth Path](../club-growth-path/index.md) -- what recruiting is for.
- [Plain language](https://en.wikipedia.org/wiki/Plain_language) -- the standard behind "states there is no cost, plainly".
