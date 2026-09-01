---
title: Message Channel Decision Tree
description: Given a message's urgency and audience, the learner determines which communication channel is appropriate.
status: scaffold
library: Mermaid
bloom_level: Evaluate (L5)
---

# Message Channel Decision Tree



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md)
