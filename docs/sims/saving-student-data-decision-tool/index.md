---
title: Saving Student Data Decision Tool
description: Two questions, in order, applied to any field somebody wants to collect.
image: sims/saving-student-data-decision-tool/saving-student-data-decision-tool.png
status: built
library: p5.js
bloom_level: Evaluate (L5)
---

# Saving Student Data Decision Tool

<iframe src="main.html" width="100%" height="522" scrolling="no"></iframe>

[Run the Saving Student Data Decision Tool MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Two questions, and the order is the whole method:

1. **Does a specific, current club task need this?**
2. **Is there a less identifying version that would still work?**

Question 2 is only reached if question 1 passed. That ordering matters more
than either question, because it blocks the most common failure in a
data-protection conversation: arguing about how to store a field safely before
establishing that it should exist at all. **The safest place to keep a home
address is nobody's spreadsheet.** There is nothing to encrypt, nothing to
leak, and nothing to delete later.

**Question 1 has a test attached.** Name the task, name who does it, name when.
If you cannot name all three, it is a no. "It might be useful one day" is the
sound of a field failing question 1.

**Question 2 is where most fields land.** Very few need to go, and very few
need to be collected in full. A birth year instead of a full date of birth. A
first name and a last initial instead of a full name. Same job, far less to
lose.

A field that passes both questions is not finished — it has just earned its
place, and now the other obligations start: say why you hold it, keep it only
while the task lasts, and delete it when the task ends.

**Custom fields deliberately have no stored answer.** The tool asks both
questions and you do the reasoning, because a lookup table would quietly do the
part that is the objective.

## How to Use

- Pick a field, or choose **Custom field…** and type your own.
- Answer **question 1** honestly. Name the task, who does it, and when — out
  loud if you are doing this with a group.
- If it passes, **question 2** appears. If it fails, question 2 is not asked at
  all, and the panel says why.
- Read the verdict and the reason. Then **Try another field**.
- Walk **Allergy information** twice: once as a club that serves snacks, once
  as a club that does not. The right answer changes, and it should.

## Lesson Plan

**Bloom level:** Evaluate (L5) -- *justify*

**Learning objective:** Given a proposed data field, the learner justifies
whether the club should collect it by walking through a minimal-data-first
decision path.

**Before the sim (10 min).** Put the club's current sign-up form on the screen
and read the fields aloud. Somebody will not be able to say why one of them is
there, and that field is your worked example.

**With the sim (15 min).** Run three or four fields as a group. Home address
and parent employer usually fail question 1 and the room usually agrees
quickly; date of birth is the one worth arguing about.

**After the sim (30 min).** Redesign the actual form. Every field that survives
should have a one-line note beside it saying which task needs it — that note is
your privacy notice, mostly written already.

**Check for understanding.** Ask: "Somebody proposes collecting parent phone
numbers 'in case of emergency'. Justify a verdict." There is a real task if you
run offsite trips, and there is not if you meet in a school with its own
emergency contacts. A student who asks *which* before answering has the method.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/saving-student-data-decision-tool/main.html" width="100%" height="522" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: microsim
**sim-id:** saving-student-data-decision-tool<br/>
**Library:** p5.js<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/data-science-course/tree/main/docs/sims/data-selection-playground-microsim

Purpose: Let a club leader test a proposed data field (such as "home address," "email," or "allergy") against a minimal-data-first decision path before deciding whether to collect it at all.

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: justify

Learning objective: Given a proposed data field, the learner justifies whether the club should collect it by walking through a minimal-data-first decision path.

Instructional Rationale: An Evaluate-level objective needs the learner to weigh a real field against explicit criteria and reach a justified decision, not watch a pre-scripted animation -- a step-through decision path with the criteria visible at each stage keeps the reasoning, not the visuals, in front of the learner.

Canvas layout:
- Left (450px): the current field name plus two stacked decision questions, each answered Yes/No
- Right (150px): a running verdict panel reading "Collect it," "Don't collect it," or "Collect a safer substitute"

Data Visibility Requirements:
  Stage 1: Show the field name, typed or chosen from a dropdown of examples (name, email, home address, allergy, birthdate, photo, parent employer)
  Stage 2: Show Question 1 -- "Does a specific, current club task need this?" -- with Yes/No buttons
  Stage 3: If Yes, show Question 2 -- "Is there a less identifying version that would still work?" (for example, birth year instead of a full birthdate)
  Stage 4: If a safer substitute exists, show it as the recommended field instead of the original
  Final: Show the verdict plus a one-line reason, such as "Don't collect -- no current club task needs a home address"

Interactive controls:
- Dropdown: choose an example field, or select "custom" to type one
- Button pair per question: "Yes" / "No"
- Button: "Try Another Field"

Default parameters: Field = "Home Address"; walking the default through the two questions ends in "Don't collect it -- no current task needs it."

Implementation notes: p5.js canvas with createSelect for the field dropdown and createButton for each Yes/No pair; store the seven example fields and their correct verdicts in a lookup table so the tool gives consistent, correct feedback regardless of the path taken; a text input allows a custom field name, in which case the tool asks both questions without a pre-loaded answer and lets the learner reason it through independently.
```

## References

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md) -- the chapter this MicroSim supports.
- [Consent Collection Workflow](../consent-collection-workflow/index.md) -- what to do once a field has earned its place.
- [Data Retention Schedule Timeline](../data-retention-schedule/index.md) -- deleting it when the task ends.
- [Email List Segments](../email-list-segments-venn/index.md) -- how the contact records you keep get used.
- [Data minimization](https://en.wikipedia.org/wiki/Data_minimization) -- the principle these two questions implement.
- [Personally identifiable information](https://en.wikipedia.org/wiki/Personal_data) -- what makes a full date of birth stronger than a birth year.
