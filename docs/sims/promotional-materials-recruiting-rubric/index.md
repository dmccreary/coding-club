---
title: Promotional Materials Recruiting Rubric
description: Given a description of a sample club flyer or web page, the learner scores it against five recruiting-equity criteria and identifies the single lowest-scoring criterion to fix first.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Promotional Materials Recruiting Rubric



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 28: Reaching Underserved Communities and Removing Barriers](../../chapters/28-underserved-communities-barriers/index.md)
