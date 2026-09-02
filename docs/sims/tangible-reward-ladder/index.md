---
title: The Tangible Reward Ladder
description: Six recognition tools on six rungs, ordered by the size of the thing they mark.
image: sims/tangible-reward-ladder/tangible-reward-ladder.png
status: built
library: Infographic overlay (diagram.js)
bloom_level: Understand (L2)
---

# The Tangible Reward Ladder

<iframe src="main.html" width="100%" height="954" scrolling="no"></iframe>

[Run the The Tangible Reward Ladder MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Six tools, one ladder, ordered by **how big a thing each one marks** — not by
how much it costs or how much students like it.

That ordering is the whole idea, and it is what makes the set work as a system
rather than as six separate good ideas:

1. **Challenge cards** — the smallest unit. One activity, one session.
2. **Badges** — a named skill, proven.
3. **Stickers** — visible, frequent, cheap.
4. **Learning map** — where a student is on a longer route.
5. **Progress tracker poster** — a whole track's worth of progress, in public.
6. **Certificate** — an entire track finished. The largest and least frequent.

**Frequency runs opposite to size,** and that is the design. Something at the
bottom happens every session; something at the top happens once or twice a
year. A club that hands out certificates weekly has not been generous, it has
spent the top rung and has nothing left to mark a real completion with.

**The mistake to avoid is skipping rungs.** A club with only challenge cards
and certificates has nothing to recognise the months in between, which is
exactly the stretch where students drift away. The middle four are not
decoration — they are what covers the gap between "I did a thing today" and "I
finished a track".

One caution the ladder does not show: every rung here is *extrinsic*. These
tools work when they mark something real and stop working when they are handed
out for turning up.

## How to Use

- **Hover each rung** from the bottom up. The order is by size of
  accomplishment, not by value or cost.
- Note that the frequency runs the other way: the bottom rung happens every
  session, the top one twice a year.
- Ask which rungs your club actually has. Most have the bottom and the top and
  a gap in the middle.
- Switch to **Quiz** to be asked instead of told.

## Lesson Plan

**Bloom level:** Understand (L2) -- *summarize*

**Learning objective:** Given an unlabeled illustration of a six-rung ladder,
the learner identifies which reward tool sits at each rung and what scale of
accomplishment it marks.

**Before (5 min).** List what the club currently gives out. Most lists have two
items and a gap.

**With the ladder (10 min).** Name all six, then map the club's actual
practice onto it. The gap is the finding.

**After (20 min).** Pick one missing middle rung and design it — most clubs get
the most from a badge set, because it is the rung that names skills rather than
effort.

**Check for understanding.** Ask: "What goes wrong if you give a certificate
every month?" It stops marking a track completion, and now nothing does. The
ladder only works while each rung marks a different size of thing.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/tangible-reward-ladder/main.html" width="100%" height="954" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 26: Motivation, Badges, and Growth Mindset Coaching](../../chapters/26-motivation-badges-growth-mindset/index.md).

```text
Type: infographic-overlay (callout)
**sim-id:** tangible-reward-ladder<br/>
**Library:** Interactive Infographic Overlay (diagram.js, annotation-free illustration + numbered callouts)<br/>
**Status:** Specified

Purpose: Show a new mentor how the six tangible reward tools in this chapter fit together as an escalating ladder, from a single completed challenge card up to a full track certificate, so the choice of which reward to use for which moment becomes a checklist rather than guesswork.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: summarize

Learning objective: Given an unlabeled illustration of a six-rung ladder, the learner identifies which reward tool sits at each rung and what scale of accomplishment it marks.

Image style: Flat illustration of a six-rung wooden ladder leaning against a wall, each rung a different color matching the reward it represents, with small icons resting on each rung (a card icon, a badge icon, a sticker sheet icon, a small map icon, a poster-square icon, and a ribboned certificate icon at the very top). No text baked into the image beyond the icons themselves; all labels are added by the overlay engine.

Image dimensions: 900x1200 (portrait)

Layout: side-panel (image left 65%, labels right 35%)

Structures to label (callouts, 6 total, each with name, 1-2 sentence description, approximate position, marker color):
1. "Challenge Card System" -- bottom rung -- color #4A90D9 -- "Marks choosing and starting a single challenge; the entry point of the whole ladder."
2. "Badge Design" -- second rung -- color #F5A623 -- "Marks one specific skill demonstrated and explained, named after exactly what it proves."
3. "Sticker Reward System" -- third rung -- color #E67E22 -- "Marks a small, immediate moment of progress, reserved for real completions rather than every attempt."
4. "Learning Map Display" -- fourth rung -- color #7ED6A5 -- "Marks a student's growing personal path, visible to them without ranking them against peers."
5. "Progress Tracker Poster" -- fifth rung -- color #9B59B6 -- "Marks the whole club's shared momentum, one filled square at a time."
6. "Certificate Of Completion" -- top rung -- color #16A085 -- "Marks an entire track finished -- the largest, least frequent reward on the ladder."

Interactive features: Explore mode (hover/click each rung to reveal its description); Quiz mode (learner is shown a short scenario, such as "a student just explained how their loop works to a mentor," and asked to click the rung it belongs on)

Implementation: Interactive Infographic Overlay Guide (callout engine) -- `diagram.js` + `style.css` render numbered markers and leader lines over the generated ladder illustration; `data.json` holds the 6 callouts with x/y percentage positions plus a bank of quiz-mode scenarios
```

## References

- [Chapter 26: Motivation, Badges, and Growth Mindset Coaching](../../chapters/26-motivation-badges-growth-mindset/index.md) -- the chapter this MicroSim supports.
- [Intrinsic vs Extrinsic Motivation Map](../intrinsic-vs-extrinsic-motivation-map/index.md) -- every rung here is extrinsic, and when that is fine.
- [Anatomy of a Challenge Card](../anatomy-of-a-challenge-card/index.md) -- the bottom rung, in detail.
- [Showcase Wall vs Peer Recognition Activity](../showcase-wall-vs-peer-recognition/index.md) -- recognition that does not come from a mentor at all.
- [Gamification](https://en.wikipedia.org/wiki/Gamification) -- and the well-documented ways it backfires.
