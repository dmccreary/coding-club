---
title: "Mentor Recruiting Influence Graph"
description: "Two outreach channels the club already uses, four it does not, and the question of which single new connection would reach the most new people."
image: sims/mentor-recruiting-influence-graph/mentor-recruiting-influence-graph.png
status: built
library: vis-network
bloom_level: Analyze (L4)
---

# Mentor Recruiting Influence Graph

<iframe src="main.html" width="100%" height="702px" scrolling="no"></iframe>

[Run the Mentor Recruiting Influence Graph MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

An influence graph is a map of who your announcements can actually reach. The
club sits in the middle. Solid lines run to the channels it already uses; dashed
lines run to channels it could use but does not.

The uncomfortable finding is visible immediately. Both existing channels -- the
PTA email list and the library bulletin board -- draw from the same population:
people already inside the school community. Working harder on either one reaches
more of the people the club already reaches.

The four dashed nodes are the untapped ones, and they are not equivalent. Each
carries a population estimate and a note on what connecting would actually take,
because a channel of 300 people you cannot address is worth less than a channel
of 120 people you can. The **Highest-leverage node** button names the one that
has both properties, and explains why the other three do not.

The numbers here are a worked sample, not a survey of your town. The method --
list the channels, estimate the population, ask whether a single point of contact
exists -- is the part that transfers.

## How to Use

- **Click any node** to read its population estimate, whether the club currently
  reaches it, and what connecting would require.
- **Press Highest-leverage node** to have the sim select the strongest candidate
  and explain the two properties that make it strongest.
- **Hover a line** to enlarge its label. Solid lines read *reaches*; dashed,
  lighter lines read *would reach* -- a connection that does not exist yet.
- **Drag any node** to reposition it. The grey Club Outreach node stays pinned at
  the centre.
- Use the **navigation buttons** to zoom and pan, or open the sim fullscreen for
  mouse-wheel zoom.
- **Reset** restores the original layout and clears the selection.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *examine*

**Learning objective:** Given a sample influence graph of a local community, the
learner examines it to identify under-reached populations of mentors and
students.

**Before the sim (5 min).** Ask: where does your club announce itself? Write the
list up. Then ask, for each one, who *cannot* see it. The second list is usually
much longer than anyone expects and is the whole subject of this sim.

**With the sim (10 min).** Click the two green nodes first and notice that their
populations overlap. Then click each amber node in turn. Before pressing the
button, ask the group to vote on which is highest-leverage, then press it and
compare. Groups usually pick the employer, because 250 staff sounds like a lot;
the reasoning in the panel is about reachability, not size.

**After the sim (20 min).** Have the group draw their own influence graph on
paper for their actual town: club in the middle, current channels solid, at
least four candidates dashed, a population estimate on each. Then apply the same
two tests -- how many people, and is there one person who can reach them all.

**Check for understanding.** Present two candidate channels, one large and
unaddressable, one smaller with a named organiser, and ask which to approach
first. Choosing the smaller one for the right reason is the objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/mentor-recruiting-influence-graph/main.html" width="100%" height="702px" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md).

```text
Type: graph-model
**sim-id:** mentor-recruiting-influence-graph<br/>
**Library:** vis-network<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/organizational-analytics/tree/main/docs/sims/mentor-matching-network

Purpose: Let a learner examine a sample community influence graph, distinguishing connected outreach channels from under-reached populations, and practice identifying the highest-leverage node for mentor recruiting.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given a sample influence graph of a local community, the learner examines it to identify under-reached populations of mentors and students.

Node types:
1. Club Outreach (center, gray square) -- the club's current announcement channel
2. Connected nodes (green circles): PTA Email List, Library Bulletin Board -- already linked to Club Outreach
3. Under-reached nodes (amber circles, no current edge to Club Outreach): Neighborhood Congregation, Boys & Girls Club Program, Women Who Code Meetup, Local Engineering Employer

Edges:
- Solid green edges from Club Outreach to each connected node, labeled "reaches"
- Dashed gray edges (present but unhighlighted by default) from each under-reached node toward the community it represents, labeled "would reach"

Interactive features:
- Click any node to see its population size estimate and whether it currently has an edge to Club Outreach
- Button: "Highlight Under-Reached Nodes" -- turns all amber nodes and their labels bold and pulses them briefly
- Button: "Show Highest-Leverage Node" -- highlights the Women Who Code Meetup node specifically and reveals why it was chosen (largest untapped population with a plausible single point of contact)
- Zoom with the mouse wheel, pan by dragging the background

Visual styling: Green fill for connected nodes, amber fill for under-reached nodes, gray for the central club node; edge color matches the source node's connection status

Legend: Node color key (connected vs. under-reached) and edge label meaning

Implementation: vis-network JavaScript library, force-directed layout with the Club Outreach node pinned near center, canvas size 800x500px.
```

## References

- [Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md) -- the chapter this MicroSim supports.
- [Mentor Recruiting Channel Effectiveness](../mentor-recruiting-channel-effectiveness/index.md)
  -- what each channel yields once you are connected to it.
- [Three Kinds of Mentors](../three-kinds-of-mentors/index.md) -- who you are
  recruiting through these channels, and why the mix matters.
- [Mentor Development Pipeline](../mentor-development-pipeline/index.md) -- what
  happens after a recruit says yes.
- [Automated Communication Pipeline](../automated-communication-pipeline/index.md)
  -- the agent that carries messages once the channels exist.
- [Social network analysis](https://en.wikipedia.org/wiki/Social_network_analysis)
  -- the wider field this kind of reach-and-leverage reading comes from.
