---
title: Intrinsic vs Extrinsic Motivation Map
description: Three columns, and the middle one is the only place a reward belongs.
image: sims/intrinsic-vs-extrinsic-motivation-map/intrinsic-vs-extrinsic-motivation-map.png
status: built
library: Infographic overlay (grid-diagram.js)
bloom_level: Understand (L2)
---

# Intrinsic vs Extrinsic Motivation Map

<iframe src="main.html" width="100%" height="726" scrolling="no"></iframe>

[Run the Intrinsic vs Extrinsic Motivation Map MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Three columns, and the one that matters is the middle.

**Intrinsic** motivation comes from the activity: curiosity about how something
works, pride in a robot that finally drives straight, the specific pleasure of
fixing a bug that has resisted you for twenty minutes. This is the fuel that
lasts, and it is the thing a club is really trying to produce.

**Extrinsic** motivation comes from an outside reward alone: a sticker for
every card attempted, points for turning up, a prize for finishing first. These
work — briefly — and they carry a real risk. When a reward is attached to
something a student was already enjoying, the reward can *replace* the
enjoyment rather than adding to it. Stop the stickers and the behaviour stops
too, because you have quietly taught that the sticker was the point.

**The middle column is the design target.** A reward tied to real, demonstrated
skill does not compete with intrinsic motivation, it *names* it. A badge called
after the specific skill it proves. A certificate for a track genuinely
completed. A sticker given after a student explains what they built, not for
showing up.

The test is one question: **would this reward mean anything to somebody who did
not get it?** "She earned the loops badge" carries information. "He got a
sticker" does not.

The practical version for a club: reward *what was demonstrated*, not what was
attended. Attendance points are the easiest system to run and the one most
likely to hollow out the thing it was meant to encourage.

## How to Use

- **Click each column** for what belongs there and club examples.
- Read the middle column carefully — every example there has the same shape: a
  reward attached to a specific, demonstrated thing.
- Try **Quiz Me** to practise classifying a proposed motivator.
- Then classify what your club already gives out. Anything landing in the right
  column is worth redesigning rather than removing.

## Lesson Plan

**Bloom level:** Understand (L2) -- *classify*

**Learning objective:** Given a proposed club motivator, the learner classifies
it as primarily intrinsic, primarily extrinsic, or a well-designed blend of the
two.

**Before (5 min).** Ask what the club currently rewards. If any answer is
"attendance", that is the worked example.

**With the poster (10 min).** Classify five real club practices. The
disagreements are about the middle column, which is exactly the conversation
worth having.

**After (30 min).** Take one purely extrinsic practice and redesign it into the
middle column. Usually this means attaching it to a demonstration: not "you
came", but "you showed me it working and explained how".

**Check for understanding.** Ask: "What's wrong with a sticker for every
challenge card attempted?" It rewards attempting rather than achieving, so it
says nothing about what a student can do — and it risks replacing the
satisfaction of finishing the card with the satisfaction of collecting the
sticker.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/intrinsic-vs-extrinsic-motivation-map/main.html" width="100%" height="726" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 26: Motivation, Badges, and Growth Mindset Coaching](../../chapters/26-motivation-badges-growth-mindset/index.md).

```text
Type: infographic-overlay (grid)
**sim-id:** intrinsic-vs-extrinsic-motivation-map<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a mentor classify a proposed motivator as intrinsic, extrinsic, or a blend of both, and see concrete club examples of each, reinforcing the overjustification-effect warning above with real cases where a badge supports rather than undercuts intrinsic drive.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a proposed club motivator, the learner classifies it as primarily intrinsic, primarily extrinsic, or a well-designed blend of the two.

Image style: Flat comparison poster, two vertical columns plus a narrower center column, each with a bold printed column header baked into the image ("Intrinsic Motivators," "Well-Designed Blend," "Extrinsic Motivators")

Image dimensions: 1200x800 (landscape)

Zones (3 columns, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-5 bullet facts):
1. `intrinsic-column` -- color #4A90D9 -- boundaries approximately x1:2,y1:10,x2:32,y2:92 -- Summary: "Driven by the activity itself." Facts: curiosity about how something works; pride in a working robot; the pleasure of finally fixing a stubborn bug; enjoyment of building alongside a friend
2. `blend-column` -- color #7ED6A5 -- boundaries approximately x1:35,y1:10,x2:65,y2:92 -- Summary: "External rewards tied to real, demonstrated skill." Facts: a badge named after the specific skill it proves; a certificate marking a track genuinely completed; a sticker given after a student explains what they built, not just for showing up
3. `extrinsic-column` -- color #F5A623 -- boundaries approximately x1:68,y1:10,x2:98,y2:92 -- Summary: "Driven by an outside reward alone." Facts: a sticker for every card attempted regardless of outcome; points awarded purely for attendance; a prize tied to finishing first rather than finishing well; risk of the overjustification effect when overused on already-loved tasks

showLabels: false (column titles are printed in the generated image)

Interactive features: Click or hover any column to highlight its zone and reveal its full fact list in a detail panel; a "Sort the Motivator" quiz mode presents a new example motivator and asks the learner to click the correct column before revealing the right answer

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the three rectangular hover zones over the generated poster image; `data.json` holds the 3 zones plus a bank of quiz-mode example motivators per the overlay-grid-data-json-schema
```

## References

- [Chapter 26: Motivation, Badges, and Growth Mindset Coaching](../../chapters/26-motivation-badges-growth-mindset/index.md) -- the chapter this MicroSim supports.
- [The Tangible Reward Ladder](../tangible-reward-ladder/index.md) -- six extrinsic tools, and when each earns its place.
- [Leaderboard vs Collaborative Challenge](../leaderboard-vs-collaborative-challenge/index.md) -- the same question applied to competition.
- [Showcase Wall vs Peer Recognition Activity](../showcase-wall-vs-peer-recognition/index.md) -- recognition that is not a reward at all.
- [Overjustification effect](https://en.wikipedia.org/wiki/Overjustification_effect) -- the documented way a reward can reduce the motivation it was meant to raise.
- [Motivation](https://en.wikipedia.org/wiki/Motivation#Intrinsic_and_extrinsic) -- the distinction, in general.
