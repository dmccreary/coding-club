---
title: From Scattered Knowledge to a Club Playbook
description: Decide whether a piece of know-how becomes a written procedure or has to be transferred person to person.
image: sims/club-playbook-assembly-workflow/club-playbook-assembly-workflow.png
status: built
library: Mermaid
bloom_level: Analyze (L4)
---

# From Scattered Knowledge to a Club Playbook

<iframe src="main.html" width="100%" height="762" scrolling="no"></iframe>

[Run the From Scattered Knowledge to a Club Playbook MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Not all know-how can be written down, and pretending otherwise produces the two
failure modes this diagram avoids.

The gate asks whether the knowledge is **reducible to steps**. Setting up the
room, running registration, closing down for the night -- these are sequences, and
they become SOPs with a consistent template: Purpose, Materials Needed, Steps,
Troubleshooting.

Judging when a frustrated student needs space rather than help is not a sequence.
Forcing it into an SOP produces a document that is technically accurate and
useless. That knowledge moves the other way: shadowing, co-leading, structured
handoff conversations.

Both branches meet at onboarding, and both end up in the playbook -- the SOPs as
documents, the transferred knowledge as the record that a successor has actually
shadowed and co-led.

The loop back to the start is dashed for a reason. The playbook is never
finished; it grows exactly the way Chapter 1's lessons learned log does.

## How to Use

- **Hover a step** to preview it; **click** to pin the definition.
- The blue branch is for knowledge that reduces to steps; the orange branch is for
  judgement that does not.
- Follow the return arrow -- new know-how keeps appearing, so the loop never
  closes for good.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *differentiate*

**Learning objective:** Given a specific piece of club know-how, the learner
differentiates whether it belongs in a written SOP, requires direct knowledge
transfer, or has already been captured in the club playbook.

**Before the sim (5 min).** Ask what only one person in the club knows how to do.
Every club has at least three answers, and they are the reason this chapter
exists.

**With the sim (10 min).** Walk the gate. For each item from the warm-up, ask the
group to route it, and push back on anything routed to SOP that is really a
judgement call.

**After the sim (20 min).** Write one real SOP using the four-part template, and
schedule one real shadowing session for something that cannot be written.

**Check for understanding.** Ask: "Which branch for 'how we decide whether to
cancel a session for weather'?" It has a written threshold *and* a judgement
component -- so it is genuinely both, and recognising that is better than forcing
one branch.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/club-playbook-assembly-workflow/main.html" width="100%" height="762" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 35: Training Mentors and Building a Club That Outlasts You](../../chapters/35-training-mentors-and-succession/index.md).

```text
Type: workflow
**sim-id:** club-playbook-assembly-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Trace how a single piece of undocumented know-how becomes a written procedure, transfers to a successor, and finally takes its place inside the club playbook -- tying together this chapter's five documentation and knowledge-transfer concepts into one connected path.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a specific piece of club know-how, the learner differentiates whether it belongs in a written SOP, requires direct knowledge transfer, or has already been captured in the club playbook.

Steps (flowchart with a decision diamond and a loop-back arrow):

1. Start: "Undocumented Know-How Exists" -- click reveals the Documenting Club Procedures definition above.
2. Decision: "Reducible to Steps?" -- click reveals "Some know-how is a fixed sequence; other know-how is a judgment call that resists being written as steps."
3a. Branch "Yes" leads to Process: "Write as an SOP" -- click reveals the Standard Operating Procedure definition above.
3b. Branch "No" leads to Process: "Transfer Through Shadowing and Co-Leading" -- click reveals the Knowledge Transfer Process definition above.
4. Process (from both branches): "Incoming Leader Completes Onboarding" -- click reveals the New Leader Onboarding definition above.
5. End: "Filed in the Club Playbook Document" -- click reveals the Club Playbook Document definition above.
6. Loop-back arrow from End to Start, drawn dashed and labeled "New know-how still gets documented as it's discovered" -- click reveals "The playbook is never finished; it grows the same way the lessons learned log from Chapter 1 does."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox, matching the definitions given in this chapter's prose.

Color coding: Blue for the SOP branch, orange for the knowledge-transfer branch, green for onboarding and the final playbook state, with the loop-back arrow dashed to show it is ongoing rather than a one-time path.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan; layout reflows responsively on narrow screens.
```

## References

- [Chapter 35: Training Mentors and Building a Club That Outlasts You](../../chapters/35-training-mentors-and-succession/index.md) -- the chapter this MicroSim supports.
- [Mentor Development Pipeline](../mentor-development-pipeline/index.md) -- who the onboarding step is preparing.
- [The Club Improvement Cycle](../club-improvement-cycle/index.md) -- the Chapter 1 loop this one mirrors.
- [Standard operating procedure](https://en.wikipedia.org/wiki/Standard_operating_procedure) -- the template and its purpose.
- [Tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge) -- the formal name for what cannot be written as steps.
