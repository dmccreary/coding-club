---
title: "Leaderboard vs Collaborative Challenge"
description: "Three competition formats on a risk gradient, and the one that hurts the students who need encouragement most."
image: sims/leaderboard-vs-collaborative-challenge/leaderboard-vs-collaborative-challenge.png
status: built
library: Infographic overlay (grid-diagram.js)
bloom_level: Evaluate (L5)
---

# Leaderboard vs Collaborative Challenge

<iframe src="main.html" width="100%" height="726" scrolling="no"></iframe>

[Run the Leaderboard vs Collaborative Challenge MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Three formats, arranged left to right by risk, and the risk is specific: **who
gets hurt, and for how long.**

**A leaderboard is individual, public, and lasting.** Every student is ranked by
a running total, which means the student at the bottom sees the same low rank
week after week. It is a real motivator for the students already near the top —
and those are the students who need it least. A leaderboard reliably
discourages exactly the people a club is trying to keep.

**Friendly competition is team-based and time-boxed**, and two details do the
work. Scores go to teams, not names, so nobody is individually last. And teams
**re-pair between rounds**, so no student spends a whole session on the losing
team. Drop that second detail and you have rebuilt the leaderboard with extra
steps.

**A collaborative challenge has no ranking at all.** One shared goal that
nobody can finish alone, requiring several students' skills combined. It builds
group identity instead of rivalry, and it is the only one of the three that is
safe for a group whose confidence you do not yet know.

**The rule of thumb:** the less you know about your group's confidence, the
further right you should sit. A new club, a new term, a group with a wide skill
spread — collaborative. A settled group who all know they are competent —
friendly competition works fine and is genuinely fun.

Leaderboards are not banned. They work in a group of near-equals who opted in.
That is a narrow set of conditions, and it is worth checking you have them
rather than assuming.

## How to Use

- **Click each format** for who it suits and what it risks.
- Note the re-pairing detail in the middle panel. It is the difference between
  friendly competition and a leaderboard with teams.
- Try **Quiz Me** to practise matching a described group to a format.
- Then ask the honest question about your own group: do you actually know how
  confident the quietest three students are?

## Lesson Plan

**Bloom level:** Evaluate (L5) -- *recommend*

**Learning objective:** Given a description of a club's mix of skill levels and
confidence, the learner recommends the safest competition format for that
group.

**Before (5 min).** Ask who in the club would enjoy a leaderboard. The names
that come up are the students who are already doing fine.

**With the poster (10 min).** Read all three, then apply them to the club's
next planned competitive activity. Most plans move one column right.

**After (a session).** Run a collaborative challenge and watch who talks. It is
usually not the same students who talk during a scored activity, which is the
evidence.

**Check for understanding.** Ask: "Your teams keep the same members all
session. Is that friendly competition?" No — it is a leaderboard with four
names on each row instead of one. The re-pairing is what makes it friendly.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/leaderboard-vs-collaborative-challenge/main.html" width="100%" height="726" scrolling="no"></iframe>
```

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

## References

- [Chapter 26: Motivation, Badges, and Growth Mindset Coaching](../../chapters/26-motivation-badges-growth-mindset/index.md) -- the chapter this MicroSim supports.
- [Intrinsic vs Extrinsic Motivation Map](../intrinsic-vs-extrinsic-motivation-map/index.md) -- why a ranking is the most extrinsic thing a club can run.
- [Showcase Wall vs Peer Recognition Activity](../showcase-wall-vs-peer-recognition/index.md) -- recognising work without ranking it.
- [Conflict Resolution Workflow](../conflict-resolution-workflow/index.md) -- for when a competitive activity goes wrong.
- [Cooperative learning](https://en.wikipedia.org/wiki/Cooperative_learning) -- the evidence behind the right-hand column.
