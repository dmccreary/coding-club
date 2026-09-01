---
title: Student Data Privacy Principles
description: Four practices, four specific risks. Click any one to see exactly which failure it prevents.
image: sims/student-data-privacy-principles/student-data-privacy-principles.png
status: built
library: Mermaid
bloom_level: Understand (L2)
---

# Student Data Privacy Principles

<iframe src="main.html" width="100%" height="522" scrolling="no"></iframe>

[Run the Student Data Privacy Principles MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Privacy advice usually arrives as a list of rules with no reasons attached, which
is why it is followed inconsistently. Each spoke here names the **specific
failure** it prevents, so the practice has something to hold onto.

- **Limit access** stops the departing volunteer who still has a working login.
- **No public links** stops the forwarded "anyone with the link" sheet that
  becomes a public roster.
- **Use club accounts** stops the attendance history leaving with the mentor who
  moved away.
- **Ask before posting** stops the well-meant celebration post that identifies a
  child whose family never agreed to that.

The fourth is the one clubs breach most often and worry about least, because it
does not feel like a data practice -- it feels like sharing good news. It undoes
the other three in a single tap.

## How to Use

- **Hover a practice** to preview it; **click** to pin the risk it closes.
- The blue hub is the outcome; the four coloured spokes are the practices that
  protect it.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Given one of the four student data privacy practices, the
learner explains the specific risk that practice reduces.

**Before the sim (5 min).** Ask how many people currently have access to the club's
attendance sheet. Most groups do not know, which is itself the answer.

**With the sim (10 min).** Click each spoke and read the risk aloud. Then ask the
group which of the four the club is weakest on. It is usually **ask before
posting**, because nobody thinks of a photo as data.

**After the sim (15 min).** Audit the club against all four: list who has access,
check every sharing link, confirm the data lives in a club account, and find one
photo posted without a recorded permission.

**Check for understanding.** Ask: "A mentor leaves the club. Which two practices
determine whether that is a problem?" Limit access and use club accounts -- and
explaining why each matters separately is the objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/student-data-privacy-principles/main.html" width="100%" height="522" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: diagram
**sim-id:** student-data-privacy-principles<br/>
**Library:** Mermaid<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/information-systems/tree/main/docs/sims/privacy-regulatory-landscape

Purpose: Show the four privacy practices feeding into one protected outcome, so a mentor can click any practice and see the specific risk it closes.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given one of the four student data privacy practices, the learner explains the specific risk that practice reduces.

Steps (hub-and-spoke diagram):
1. Center node: "Protected Student Data" -- click reveals "The smaller, already-reviewed pile of data a club decided to save, now handled so only the right people can see it."
2. Spoke: "Limit Access" -- click reveals "Only mentors and leaders who need the data get a login, not the entire volunteer roster."
3. Spoke: "No Public Links" -- click reveals "A sharing link set to 'anyone with the link' can spread far beyond the two or three people it was meant for."
4. Spoke: "Use Club Accounts" -- click reveals "Data stored in a personal account leaves the club the moment that mentor does."
5. Spoke: "Ask Before Posting" -- click reveals "A name or photo posted publicly without asking undoes every other privacy practice in one step."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Blue for the central "Protected Student Data" node; four distinct accent colors for the surrounding practice nodes.

Implementation: Mermaid flowchart (`graph TD` with the center node linked to each spoke) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox.
```

## References

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md) -- the chapter this MicroSim supports.
- [Guardian Consent Collection Workflow](../consent-collection-workflow/index.md) -- how the data got here in the first place.
- [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) -- the formal name for "limit access".
- [Information privacy](https://en.wikipedia.org/wiki/Information_privacy) -- the broader field.
- [Data breach](https://en.wikipedia.org/wiki/Data_breach) -- what these four practices are collectively preventing.
