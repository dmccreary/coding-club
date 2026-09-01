---
title: Guardian Consent Collection Workflow
description: Trace where 'collection begins' sits relative to 'consent obtained' -- and why the order is not negotiable.
image: sims/consent-collection-workflow/consent-collection-workflow.png
status: built
library: Mermaid
bloom_level: Analyze (L4)
---

# Guardian Consent Collection Workflow

<iframe src="main.html" width="100%" height="702" scrolling="no"></iframe>

[Run the Guardian Consent Collection Workflow MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

There is exactly one ordering constraint in this diagram and everything else
follows from it: **the signature comes before the collection.** Not the same
evening, not retroactively at the end of term. Before.

Two things about the shape are worth pointing out. First, the notice is drafted
*before* the guardian sees it, and it lists what will **not** be collected as
well as what will. A notice that only says what you take reads as a blank cheque.

Second, both branches converge. Declining is not an exit from the process -- the
declined form is filed exactly like a signed one, and the student attends
sessions exactly like anyone else. The only difference is that the club keeps no
records that depend on collected data. A club that treats "no" as an
administrative problem has misread the whole point of asking.

## How to Use

- **Hover a step** to preview it; **click** to pin the details.
- Follow both branches from the consent gate to the shared end node -- a declined
  form is filed too.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *sequence*

**Learning objective:** Given the steps of a club's consent process, the learner
sequences them correctly and identifies which step must precede any data
collection.

**Before the sim (5 min).** Ask when the club currently starts recording
attendance for a new student. If the answer is "the first session," ask when the
consent form is signed.

**With the sim (10 min).** Walk the sequence and stop at the gate. Ask what
happens on the "No" branch -- most groups assume the student cannot attend, and
correcting that assumption is half the lesson.

**After the sim (15 min).** Draft the club's own data-collection notice, including
the list of what is *not* collected.

**Check for understanding.** Ask: "A guardian declines. What can the club still
do, and what must it not do?" The student attends; no data-dependent records are
kept; the declined form is filed anyway.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/consent-collection-workflow/main.html" width="100%" height="702" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: workflow
**sim-id:** consent-collection-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/health-education/tree/main/docs/sims/consent-requirements-explorer

Purpose: Trace the sequence from drafting a data-collection notice through filing a signed consent form, so a mentor can see exactly where "collection begins" sits relative to "consent obtained."

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: sequence

Learning objective: Given the steps of a club's consent process, the learner sequences them correctly and identifies which step must precede any data collection.

Steps (flowchart with a decision diamond):
1. Start: "Draft Data-Collection Notice" -- click reveals "Lists exactly what will be collected and exactly what will not, in plain language."
2. Process: "Guardian Reviews Notice" -- click reveals "Sent before the student's first session, giving the family time to ask questions."
3. Decision: "Guardian Signs?" -- click reveals "A club may only collect data for a student whose guardian has signed; declining is always an option."
4a. Branch "Yes" leads to "Data Collection Begins" -- click reveals "Only the fields listed in the notice are collected, starting from this point forward."
4b. Branch "No" leads to "No Data Collected" -- click reveals "The student may still participate in sessions; the club simply keeps no data-collection-dependent records for them."
5. Both branches converge on End: "Signed or Declined Form Filed" -- click reveals "The form itself is kept on file for as long as the data it covers is retained, per the club's retention policy."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Gray for the start and process nodes, purple for the decision diamond, green for the "Yes" branch, amber for the "No" branch, gray for the converged end state.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox.
```

## References

- [Chapter 24: Student Data and Communication](../../chapters/24-student-data-and-communication/index.md) -- the chapter this MicroSim supports.
- [Student Data Privacy Principles](../student-data-privacy-principles/index.md) -- how the collected data is then protected.
- [Informed consent](https://en.wikipedia.org/wiki/Informed_consent) -- why the notice must be in plain language.
- [FERPA](https://en.wikipedia.org/wiki/Family_Educational_Rights_and_Privacy_Act) -- the US student-records law this practice aligns with.
- [Data minimization](https://en.wikipedia.org/wiki/Data_minimization) -- why the notice lists what is not collected.
