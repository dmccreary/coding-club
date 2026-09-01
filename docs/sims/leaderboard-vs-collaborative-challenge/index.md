---
title: Leaderboard vs Collaborative Challenge
description: Given a description of a club's mix of skill levels and confidence, the learner recommends the safest competition format for that group.
status: scaffold
library: Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)
bloom_level: Evaluate (L5)
---

# Leaderboard vs Collaborative Challenge



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 26: Motivation, Badges, and Growth Mindset Coaching](../../chapters/26-motivation-badges-growth-mindset/index.md).

```text
Type: infographic-overlay (grid)
**sim-id:** leaderboard-vs-collaborative-challenge<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a mentor evaluate which competition format fits a given session, reinforcing the leaderboard warning above by placing its risk directly beside two safer alternatives.

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: recommend

Learning objective: Given a description of a club's mix of skill levels and confidence, the learner recommends the safest competition format for that group.

Image style: Flat comparison poster, three vertical columns, each with a bold printed column header baked into the image ("Leaderboard," "Friendly Competition," "Collaborative Challenge")

Image dimensions: 1200x800 (landscape)

Zones (3 columns, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-5 bullet facts):
1. `leaderboard-zone` -- color #E74C3C -- boundaries approximately x1:2,y1:10,x2:32,y2:92 -- Summary: "Individual, public, and lasting." Facts: ranks every student by a running total; strugglers see the same low rank week after week; highest risk of discouraging the students who need encouragement most; best reserved for confident, evenly-matched groups
2. `friendly-competition-zone` -- color #F5A623 -- boundaries approximately x1:35,y1:10,x2:65,y2:92 -- Summary: "Team-based and time-boxed." Facts: scored by team, not by individual name; re-pairs teams between rounds so no student stays "on the losing team" all session; framed with humor rather than stakes; gives a quick energy boost without a lasting scoreboard
3. `collaborative-zone` -- color #2ECC71 -- boundaries approximately x1:68,y1:10,x2:98,y2:92 -- Summary: "One shared goal, no ranking at all." Facts: requires combining multiple students' skills into one outcome; no student can finish it alone; builds group identity instead of rivalry; safest choice for a mixed-confidence group

showLabels: false (column titles are printed in the generated image)

Interactive features: Click or hover any column to highlight its zone and reveal its full fact list in a detail panel; a "Pick the Format" quiz mode describes a club scenario and asks the learner to click the recommended column before revealing the suggested answer and rationale

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the three rectangular hover zones over the generated poster image; `data.json` holds the 3 zones plus a bank of quiz-mode scenarios per the overlay-grid-data-json-schema
```

## Related Resources

- [Chapter 26: Motivation, Badges, and Growth Mindset Coaching](../../chapters/26-motivation-badges-growth-mindset/index.md)
