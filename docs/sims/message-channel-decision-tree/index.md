---
title: "Message Channel Decision Tree"
description: "Two questions decide whether a message goes to the group chat, to email, or either."
image: sims/message-channel-decision-tree/message-channel-decision-tree.png
status: built
library: Mermaid
bloom_level: Evaluate (L5)
---

# Message Channel Decision Tree

<iframe src="main.html" width="100%" height="662" scrolling="no"></iframe>

[Run the Message Channel Decision Tree MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Clubs get this wrong in both directions. Urgent messages go out by email and are
read the next morning, after the session everyone missed. Schedule changes go out
by group chat and are unfindable three weeks later when a family needs the date.

Two questions sort it. **Does this need action within the hour?** If yes, the
group messaging app, because it reaches phones now. **Does someone need to find
this again later?** If yes, email, because it is searchable.

The third outcome is the honest one. Plenty of club messages are neither urgent
nor archival -- a friendly note, a photo, a thank-you. For those the tree says so
rather than inventing a rule, and mentor judgment and family preference decide.

Worth naming for the group: the two questions are independent. A message can be
both urgent and archival, in which case it goes to the chat *and* the email -- the
tree gives the first channel, not the only one.

## How to Use

- **Hover a node** to preview it; **click** to pin the details.
- Follow the two decision diamonds in order: urgency first, then whether a
  searchable record is needed.

## Lesson Plan

**Bloom level:** Evaluate (L5) -- *determine*

**Learning objective:** Given a message's urgency and audience, the learner
determines which communication channel is appropriate.

**Before the sim (5 min).** Ask how the club announced its last room change, and
whether everyone found out in time.

**With the sim (10 min).** Walk both diamonds. Then propose messages and have the
group route each one aloud: "session cancelled, starts in two hours", "next
term's dates", "great work at the showcase last night."

**After the sim (15 min).** Write the club's channel rule as two sentences and put
it where mentors will see it.

**Check for understanding.** Ask: "The venue moved next week's session to a
different room. Which channel?" Both -- chat because people need to know, email
because they will need to look it up. Recognising that the two questions are
independent is the evaluation this objective asks for.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/message-channel-decision-tree/main.html" width="100%" height="662" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: workflow
**sim-id:** message-channel-decision-tree<br/>
**Library:** Mermaid<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/token-efficiency/tree/main/docs/sims/conversation-message-structure

Purpose: Help a mentor decide, for a specific message, whether email or the group messaging app is the right channel.

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: determine

Learning objective: Given a message's urgency and audience, the learner determines which communication channel is appropriate.

Steps (decision tree):
1. Start: "New Message to Send" -- click reveals "Any outgoing message a mentor needs to send to families or mentors."
2. Decision: "Needs Action Within the Hour?" -- click reveals "A same-day room change or a running-late notice both count as urgent."
3a. Branch "Yes" leads to "Send via Group Messaging App" -- click reveals "Reaches families checking their phones in real time; not meant to be a permanent record."
3b. Branch "No" leads to Decision: "Needs a Searchable Written Record?" -- click reveals "A schedule change, a newsletter, or anything a family might need to reference weeks later."
4a. Branch "Yes" leads to "Send via Email" -- click reveals "Easily searched later; appropriate for anything semi-official."
4b. Branch "No" leads to "Either Channel Works" -- click reveals "For a low-stakes, non-urgent note, mentor judgment and family preference can decide."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Purple for decision diamonds, green for the group-messaging-app outcome, blue for the email outcome, gray for the "either channel" outcome.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node.
```

## References

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md) -- the chapter this MicroSim supports.
- [Club Calendar Setup Workflow](../calendar-setup-workflow/index.md) -- the third channel, for anything date-shaped.
- [Synchronous and asynchronous communication](https://en.wikipedia.org/wiki/Asynchronous_communication) -- the distinction the first diamond is really testing.
- [Information overload](https://en.wikipedia.org/wiki/Information_overload) -- why sending everything to every channel fails.
