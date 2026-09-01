---
title: Coding Club Equity Audit Checklist
description: Given the club's own current practices, the learner scores each of five equity-audit categories on a simple present/partial/absent scale and identifies the lowest-scoring category as the next priority.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Coding Club Equity Audit Checklist



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 29: Building Trust and Representation in Your Club](../../chapters/29-trust-and-representation/index.md)
