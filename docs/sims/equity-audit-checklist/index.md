---
title: Equity Audit Checklist
description: Ten items, five categories, and a callout that always names one thing to do rather than a score to feel bad about.
image: sims/equity-audit-checklist/equity-audit-checklist.png
status: built
library: p5.js
bloom_level: Evaluate (L5)
---

# Equity Audit Checklist

<iframe src="main.html" width="100%" height="622" scrolling="no"></iframe>

[Run the Equity Audit Checklist MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Ten items across five categories, scored against the club's actual
practices rather than its intentions. It takes about ten minutes and it is
meant to be run for real, not read.

**The callout is the design decision that matters.** It always names exactly
one category *and* one item. Never "keep improving", never an overall club
rating. A single overall score tells a leader they are doing fine or not doing
fine, and neither of those is an action. "Ask one mentor to run next week's
opening demo" is something somebody can do on Tuesday.

**Ties go to the earlier category on purpose.** The order runs roughly by how
much a fix compounds: what students see in the material, then who they see
teaching, then who is in the room at all. A club with three categories at zero
should start with the curriculum, because it is the cheapest to change and
every student sees it.

Two items are worth reading slowly.

**"Leads visible, front-of-room demonstrations, not only support tasks."** A
mentor team can be diverse on paper and still have the same person doing every
demo. Who is at the front is what students read as "people like me do this",
and that is a rota decision, not a recruiting one.

**"Has been asked directly what accommodation would help them, in the last
term."** Not "we would accommodate anyone who asked". Waiting to be asked puts
the work on the family, and most families do not ask.

Scoring honestly is the whole point. Partial is a real answer and most items
start there.

## How to Use

- Click a category to open it; only one is open at a time so the list stays
  readable.
- Click any item to cycle **Absent → Partial → Present**. Score the club you
  have, not the one you mean to have.
- Watch the **Do this first** callout change as you go. It always names one
  category and one item.
- **Reset audit** clears everything back to absent so you can run it again
  next term and compare.

## Lesson Plan

**Bloom level:** Evaluate (L5) -- *assess*

**Learning objective:** Given the club's own current practices, the learner
scores each of five equity-audit categories on a simple present/partial/absent
scale and identifies the lowest-scoring category as the next priority.

**Before the audit (5 min).** Agree that partial is a normal answer. An audit
where everything comes out Present has not been run honestly, and one where
everything comes out Absent usually means somebody is being hard on a club that
is three weeks old.

**Running it (15 min).** Do it with two or three people, not one. The
disagreements are the useful part — one person's Present is another's Partial,
and working out which is right requires naming actual evidence.

**After (the term).** Do the one action the callout named. Then run it again
next term and see whether that category moved.

**Check for understanding.** Ask: "Your audit comes out at 70 percent overall
with one category at zero. Is the club doing well?" No — the average is hiding
a category with nothing in it, which is exactly why this tool never shows an
overall score.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/equity-audit-checklist/main.html" width="100%" height="622" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 29: Building Trust and Representation in Your Club](../../chapters/29-trust-and-representation/index.md).

```text
Type: microsim
**sim-id:** equity-audit-checklist<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Give a club leader a genuinely usable, run-it-today checklist that scores the club's current practices across the five areas covered in this chapter and names the single lowest-scoring area to fix first.

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: assess

Learning objective: Given the club's own current practices, the learner scores each of five equity-audit categories on a simple present/partial/absent scale and identifies the lowest-scoring category as the next priority.

Canvas layout:
- Top (60px): Title bar and "Reset Audit" button
- Left (65%): Five category panels, each expandable, each containing 2-3 checklist items
- Right (35%): Running score by category (bar per category, 0-100%) and a "Lowest Scoring Category" callout box

Categories and checklist items (each item is a 3-state toggle: Absent = 0, Partial = 1, Present = 2):

1. Curriculum Representation
   - "Named pioneers in our material include more than one gender and one race."
   - "Sample project photos and themes reflect more than one cultural background."

2. Mentor Team
   - "At least one mentor from an underrepresented group leads visible, front-of-room demonstrations, not only support tasks."
   - "Our mentor recruiting reaches beyond one existing personal network."

3. Community Partnership
   - "We have an active partnership with at least one faith-based, rural-hub, urban-neighborhood, or immigrant-serving organization."
   - "That partnership involved us showing up and listening before we asked for anything."

4. Accessibility
   - "We have at least one assistive technology option on hand (switch access, text-to-speech, magnification, captions)."
   - "A student or family has been asked directly what accommodation would help them, in the last term."

5. Marketing Materials
   - "Our flyers and sign-up materials show diverse, non-stereotyped imagery."
   - "Our promotional language has been checked by someone outside the existing mentor team."

Interactive controls:
- Click any checklist item to cycle it through Absent / Partial / Present
- Category panels expand/collapse on click
- "Reset Audit" button clears all items back to Absent
- Automatic "Lowest Scoring Category" callout updates live as items change, naming the category and suggesting the single lowest-scoring item within it as the next concrete action

Behavior: each category's bar fills proportionally to its items' total score out of the category maximum, color-coded red (0-33%), yellow (34-66%), green (67-100%); the callout box always names exactly one category and one item, never a generic "keep improving" message, so the leader leaves with one concrete next step rather than a vague score.

Instructional rationale: This matches the Evaluate-level checklist pattern because the chapter's own closing outcome asks the reader to run an equity audit and identify one concrete next action; a scored, item-level checklist -- rather than a single overall club rating -- produces exactly that one prioritized action instead of an abstract sense of "doing fine" or "needs work."

Implementation: p5.js for the panel layout, toggle states, and color-coded bars; the fifteen checklist items and category structure are stored in a small JavaScript data array, since the fixed item set doesn't need an external data.json file.
```

## References

- [Chapter 29: Building Trust and Representation in Your Club](../../chapters/29-trust-and-representation/index.md) -- the chapter this MicroSim supports.
- [Promotional Materials Recruiting Rubric](../promotional-materials-recruiting-rubric/index.md) -- the marketing category, scored in detail.
- [Access Barrier to Fix Map](../access-barrier-to-fix-map/index.md) -- the barriers behind several of these items.
- [Mentor Recruiting Influence Graph](../mentor-recruiting-influence-graph/index.md) -- reaching beyond one personal network.
- [Universal design](https://en.wikipedia.org/wiki/Universal_design) -- the accessibility category's underlying principle.
- [Assistive technology](https://en.wikipedia.org/wiki/Assistive_technology) -- what the first accessibility item is asking about.
