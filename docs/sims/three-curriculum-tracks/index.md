---
title: Three Curriculum Tracks
description: Beginner, intermediate, advanced -- what each track actually contains, and where the hard transition sits.
image: sims/three-curriculum-tracks/three-curriculum-tracks.png
status: built
library: Infographic overlay (grid-diagram.js)
bloom_level: Understand (L2)
---

# Three Curriculum Tracks

<iframe src="main.html" width="100%" height="726" scrolling="no"></iframe>

[Run the Three Curriculum Tracks MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Three tracks, and the interesting one is the middle.

**Beginner** is keyboarding and first Scratch projects, with a lot of unplugged
activity. That last part surprises people: the vocabulary — loop, condition,
sequence — is easier to build away from a screen, and a student who has the
words learns the blocks faster.

**Intermediate is where clubs lose students**, because it contains the
block-to-text transition. Dragging a block always works; typing `for i in
range(10):` fails on a missing colon, and a student who has never seen a
SyntaxError concludes they are bad at this. That is why the track introduces
Python one construct at a time and leans on turtle graphics — turtle gives
immediate visual confirmation that the typed thing did what you meant, which is
the reassurance the transition needs.

**Advanced** is where projects stop being single-concept. Combining functions,
loops, and conditionals into one working game is a different skill from knowing
each separately. And students on this track start peer mentoring, which is not
a side effect — explaining a loop to a beginner is the thing that consolidates
it.

**Tracks are not ages and not year groups.** A twelve-year-old who has never
typed belongs on beginner, and a nine-year-old who has outgrown Scratch belongs
on intermediate. Placing by age is the most common way to lose both of them.

Students also move at different speeds through different parts. Somebody can be
intermediate on Python and beginner on hardware, and a club that runs both
should expect that rather than treat it as a problem.

## How to Use

- **Click each track** for what students there are actually doing.
- Spend the time on the intermediate panel. The block-to-text transition is
  where the attrition is.
- Try **Quiz Me** to practise placing a described student.
- Then place your current students. The disagreements are the useful part.

## Lesson Plan

**Bloom level:** Understand (L2) -- *classify*

**Learning objective:** Given a student's current skills, the learner
classifies which curriculum track best fits them.

**Before (5 min).** Ask how the club currently decides what a new student
starts on. If the answer involves their age, that is the thing to change.

**With the poster (10 min).** Read all three, then place three real students as
a group. Argue about the borderline one — that is where the criteria get
sharp.

**After (20 min).** Write the one-question placement check the club will
actually use. "Have you written code you typed rather than dragged?" separates
beginner from intermediate better than anything about age.

**Check for understanding.** Ask: "A confident Scratch student types their
first Python line, gets an error, and says they are rubbish at this. What is
actually happening?" They have hit the transition, and the fix is turtle
graphics and one construct at a time — not going back to blocks.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/three-curriculum-tracks/main.html" width="100%" height="726" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 15: Designing a Curriculum With Challenge Cards and Portfolios](../../chapters/15-curriculum-challenge-cards/index.md).

```text
Type: infographic-overlay (grid)
**sim-id:** three-curriculum-tracks<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a mentor quickly see what a student at each track level is typically working on, so a new mentor can place a student in the right track within their first session or two.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a student's current skills, the learner classifies which curriculum track best fits them.

Image style: Flat comparison poster, three vertical columns, each with a bold white printed column header baked into a dark green, blue, or black header bar ("Beginner Track," "Intermediate Track," "Advanced Track")

Image dimensions: 1200x800 (landscape)

Zones (3 columns, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-5 bullet facts):
1. `beginner-track` -- color #2E7D32 -- boundaries approximately x1:2,y1:10,x2:32,y2:92 -- Summary: "Keyboarding and first Scratch projects." Facts: typing practice tool sessions; first Scratch sprite and block-coding projects; heavy use of unplugged coding activities to build vocabulary before screens; success measured by finishing and sharing one complete project
2. `intermediate-track` -- color #1565C0 -- boundaries approximately x1:35,y1:10,x2:65,y2:92 -- Summary: "The block-to-text transition and core Python." Facts: block-based to text transition begins; Python variables, loops, and conditionals introduced one at a time; turtle graphics challenges provide visual verification; peer code review starts here as students have enough code to review
3. `advanced-track` -- color #000000 -- boundaries approximately x1:68,y1:10,x2:98,y2:92 -- Summary: "Multi-concept projects and mentoring others." Facts: combines functions, loops, and conditionals into a single project like a simple game; pair programming and live coding demonstrations become regular practice; students often begin serving as peer mentors (Chapter 9) themselves; strongest fit for professional mentor involvement

showLabels: false (column titles are printed in the generated image)

Interactive features: Click or hover any column to highlight its zone and reveal its full fact list in a detail panel; explore mode only

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the three rectangular hover zones over the generated poster image; `data.json` holds the 3 zones per the overlay-grid-data-json-schema
```

## References

- [Chapter 15: Designing a Curriculum With Challenge Cards and Portfolios](../../chapters/15-curriculum-challenge-cards/index.md) -- the chapter this MicroSim supports.
- [Anatomy of a Challenge Card](../anatomy-of-a-challenge-card/index.md) -- the border colour that tells a student which track a card is for.
- [The Five Computational Thinking Skills](../five-computational-thinking-skills/index.md) -- what all three tracks are really building.
- [MicroPython Syntax Checker](../micropython-syntax-checker/index.md) -- the two errors that make the transition hard.
- [Scratch (programming language)](https://en.wikipedia.org/wiki/Scratch_(programming_language)) -- and what it deliberately makes impossible to get wrong.
