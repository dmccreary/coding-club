---
title: Showcase Wall vs Peer Recognition Activity
description: A standing display of finished work, or a five-minute circle at the end of every session -- they solve different problems.
image: sims/showcase-wall-vs-peer-recognition/showcase-wall-vs-peer-recognition.png
status: built
library: Infographic overlay (grid-diagram.js)
bloom_level: Evaluate (L5)
---

# Showcase Wall vs Peer Recognition Activity

<iframe src="main.html" width="100%" height="832" scrolling="no"></iframe>

[Run the Showcase Wall vs Peer Recognition Activity MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Two formats that sound like alternatives and are not — they differ on three
axes at once, and a club usually wants both.

**Who does the recognising.** A showcase wall is curated by mentors. A peer
recognition circle is students recognising each other. That is the biggest
difference and the one that changes what it feels like to receive: praise from
an adult is expected, praise from a peer is not.

**How often.** The wall updates when a project finishes — which for a beginner
might be a month. The circle happens every session, in about five minutes.
That frequency gap matters most for the students who take longest to finish
something, because they are the ones who go longest without recognition.

**Who sees it.** The wall reaches parents, visitors, and the head teacher —
people who decide whether the club continues. The circle reaches nobody outside
the room. If your recognition goal is partly about the club's standing with
adults, only one of these does that.

**So which?** If the goal is *evidence* — showing what the club produces to
people with budgets — the wall. If the goal is *belonging* — making students
feel seen weekly — the circle. Most clubs need both, and most clubs build only
the wall, because it is the one that is visible to them.

One caution about the wall: it displays *finished* work, which quietly means it
displays the fastest students. A wall that only ever shows the same four names
is a leaderboard in a different shape, and it is worth deliberately putting up
work in progress.

## How to Use

- **Click each format** for what it does and who it reaches.
- Compare the frequency lines. A month versus every session is the gap that
  matters for slower finishers.
- Try **Quiz Me** to practise matching a goal to a format.
- Then check your wall: how many different names are on it this term?

## Lesson Plan

**Bloom level:** Evaluate (L5) -- *recommend*

**Learning objective:** Given a description of a club's recognition goal, the
learner recommends whether a student showcase wall or a peer recognition
activity fits it better.

**Before (5 min).** Ask when a student last heard something good about their
work from another student rather than from a mentor. In most clubs the answer
is never, because nothing has been set up for it.

**With the poster (10 min).** Read both, then name the club's actual goal.
"Recognise students" is not a goal; "make the quiet students feel seen" and
"show the head teacher what we do" are different goals with different answers.

**After (one session).** Run a five-minute shout-out circle at the end. It
costs nothing and it is the fastest thing in this chapter to try.

**Check for understanding.** Ask: "Your showcase wall has the same four names
on it all term. What does that tell you?" That it is displaying speed rather
than effort — and that the students not on it have now had a term of watching
other people be recognised.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/showcase-wall-vs-peer-recognition/main.html" width="100%" height="832" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 27: Encouraging Persistence and Student Voice](../../chapters/27-persistence-and-student-voice/index.md).

```text
Type: infographic-overlay (grid)
**sim-id:** showcase-wall-vs-peer-recognition<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a mentor decide which recognition format fits a given goal -- giving a finished project a longer public life, or giving students frequent recognition from each other -- reinforcing the audience/frequency table above with concrete examples of each.

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: recommend

Learning objective: Given a description of a club's recognition goal, the learner recommends whether a student showcase wall or a peer recognition activity fits it better.

Image style: Flat comparison poster, two vertical columns, each with a bold printed column header baked into the image ("Student Showcase Wall," "Peer Recognition Activity")

Image dimensions: 1000x800 (landscape)

Zones (2 columns, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-5 bullet facts):
1. `showcase-wall-zone` -- color #4A90D9 -- boundaries approximately x1:4,y1:10,x2:47,y2:92 -- Summary: "A standing display of finished work." Facts: bulletin board, photo album, or webpage; updated whenever a project finishes; visible to parents and visitors, not just club members; gives a student's work a life beyond the session it was built in; pairs each project with the student's name and a one-sentence description
2. `peer-recognition-zone` -- color #2ECC71 -- boundaries approximately x1:53,y1:10,x2:96,y2:92 -- Summary: "Student-to-student recognition, every session." Facts: a shout-out circle or kudos card at the end of a session; recognition comes from peers, not a mentor; happens frequently, in minutes rather than as a standing display; lands differently because it comes from someone facing the same challenges; costs almost nothing to run every week

showLabels: false (column titles are printed in the generated image)

Interactive features: Click or hover either column to highlight its zone and reveal its full fact list in a detail panel; a "Pick the Format" quiz mode describes a club scenario (such as "a parent asks what their child has been building all semester") and asks the learner to click the recommended column before revealing the suggested answer and rationale

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the two rectangular hover zones over the generated poster image; `data.json` holds the 2 zones plus a bank of quiz-mode scenarios per the overlay-grid-data-json-schema
```

## References

- [Chapter 27: Encouraging Persistence and Student Voice](../../chapters/27-persistence-and-student-voice/index.md) -- the chapter this MicroSim supports.
- [Leaderboard vs Collaborative Challenge](../leaderboard-vs-collaborative-challenge/index.md) -- why a wall of the same four names is a ranking.
- [The Tangible Reward Ladder](../tangible-reward-ladder/index.md) -- where a showcase sits among the other recognition tools.
- [Intrinsic vs Extrinsic Motivation Map](../intrinsic-vs-extrinsic-motivation-map/index.md) -- peer recognition is the least extrinsic thing on this list.
- [Peer feedback](https://en.wikipedia.org/wiki/Peer_feedback) -- what students get from giving it, not just receiving it.
