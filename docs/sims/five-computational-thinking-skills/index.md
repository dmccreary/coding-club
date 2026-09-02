---
title: "The Five Computational Thinking Skills"
description: "Decomposition, pattern recognition, abstraction, algorithm design, debugging -- with a club example for each."
image: sims/five-computational-thinking-skills/five-computational-thinking-skills.png
status: built
library: Infographic overlay (grid-diagram.js)
bloom_level: Remember (L1)
---

# The Five Computational Thinking Skills

<iframe src="main.html" width="100%" height="650" scrolling="no"></iframe>

[Run the The Five Computational Thinking Skills MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Five skills, and the reason for a mentor to know them by name is not
vocabulary. It is that **naming what a student is doing turns a stuck moment
into a step.**

"You're debugging" is a more useful thing to say than "keep trying", because it
comes with a method attached: form a hypothesis about the cause, then test it.
The alternative — changing things at random until something works — is what
debugging looks like when nobody has named it.

The five run roughly in the order a project uses them:

**Decomposition** comes first, before any code. "Build a game" becomes draw,
move, collide, score — and an intimidating project becomes four small ones.

**Pattern recognition** is what makes the second project faster than the first.
It strengthens with volume, which is the argument for finishing many small
things rather than one large one.

**Abstraction** is why a beginner can drive a robot. `forward()` hides the
motor physics entirely, and that hiding is a feature. It is also exactly what a
student does the first time they write their own function.

**Algorithm design** is the sketch before the keyboard. Order matters — turn
then move is a different result from move then turn — and that is usually the
first place a student discovers that precision is not pedantry.

**Debugging** is the one students find most frustrating and the one that builds
the most confidence, because it is the only skill on the list that is about
recovering rather than producing.

These are not programming skills. They are how you approach any problem too big
to hold in your head at once, which is why they transfer.

## How to Use

- **Click each skill** for what it means and a concrete club example.
- Read them in order left to right — that is roughly the order a project uses
  them.
- Try **Quiz Me** to practise naming the skill from a described moment.
- Then listen for these in a real session and say the name out loud when you
  see one.

## Lesson Plan

**Bloom level:** Remember (L1) -- *identify*

**Learning objective:** Given a moment in a coding project, the learner
identifies which of the five computational thinking skills is being used.

**Before (5 min).** Describe a student stuck on a game project and ask what to
say to them. "Keep going" is the usual answer, and it is not advice.

**With the poster (10 min).** Read all five, then re-run the stuck-student
scenario. The answer is usually decomposition — the project is too big, not too
hard.

**After (a term).** Say the names out loud in sessions. Students pick the
vocabulary up quickly and start using it on each other, which is the point.

**Check for understanding.** Ask: "A student changes one line at a time until
the sprite moves. Which skill is that?" Debugging, done without a hypothesis —
which is the version worth catching, because naming it is what turns it into
the version with one.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/five-computational-thinking-skills/main.html" width="100%" height="650" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 14: "Computational Thinking, Scratch, and Python Basics"](../../chapters/14-computational-thinking-scratch-python/index.md).

```text
Type: infographic-overlay (grid)
**sim-id:** five-computational-thinking-skills<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/computer-science/tree/main/docs/sims/computational-thinking-pillars

Purpose: Give students and mentors a single reference poster naming and defining all five computational thinking skills, so a mentor can point to "that's decomposition" during a real project rather than the skill staying an abstract vocabulary word.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given a moment in a coding project, the learner identifies which of the five computational thinking skills is being used.

Image style: Flat comparison poster, five vertical columns, each with a bold printed column header baked into the image ("Decomposition," "Pattern Recognition," "Abstraction," "Algorithm Design," "Debugging")

Image dimensions: 1400x800 (landscape)

Zones (5 columns, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-4 bullet facts including a concrete coding-club example):
1. `decomposition` -- color #4A90D9 -- boundaries approximately x1:1,y1:10,x2:20,y2:92 -- Summary: "Breaking a big problem into smaller pieces." Facts: "build a game" becomes draw, move, collide, score; makes an intimidating project feel achievable; the first skill applied before any code is written
2. `pattern-recognition` -- color #F5A623 -- boundaries approximately x1:21,y1:10,x2:40,y2:92 -- Summary: "Noticing similarities to a problem already solved." Facts: a second blinking pattern reuses the first one's loop structure; speeds up new projects by reusing known solutions; strengthens with more projects completed
3. `abstraction` -- color #7ED6A5 -- boundaries approximately x1:41,y1:10,x2:60,y2:92 -- Summary: "Focusing on essential details, ignoring the rest." Facts: "forward" and "turn" hide the motor's actual physics; lets a beginner control a robot without an engineering degree; the same skill behind using any function someone else wrote
4. `algorithm-design` -- color #E67E22 -- boundaries approximately x1:61,y1:10,x2:80,y2:92 -- Summary: "Sequencing precise, ordered steps to solve a problem." Facts: the plan a student sketches before touching a keyboard; order matters -- turning before moving forward produces a different result than the reverse; the direct bridge from an idea to actual code
5. `debugging` -- color #E74C3C -- boundaries approximately x1:81,y1:10,x2:99,y2:92 -- Summary: "Systematically finding and fixing what's wrong." Facts: form a hypothesis about the cause, then test it -- not random guessing; the skill Chapter 1's continuous improvement mindset applies at the level of a single line of code; often the most frustrating and most valuable skill to build confidence in

showLabels: false (column titles are printed in the generated image)

Interactive features: Click or hover any column to highlight its zone and reveal its full fact list, including the coding-club example, in a detail panel; explore mode, plus a simple quiz mode asking "which skill is this?" against short scenario prompts

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the five rectangular hover zones over the generated poster image; a close template already exists at the GitHub URL above (WHAT match score 0.61) and should be adapted rather than built from scratch; `data.json` holds the 5 zones per the overlay-grid-data-json-schema
```

## References

- [Chapter 14: "Computational Thinking, Scratch, and Python Basics"](../../chapters/14-computational-thinking-scratch-python/index.md) -- the chapter this MicroSim supports.
- [Three Curriculum Tracks](../three-curriculum-tracks/index.md) -- where each skill gets practised.
- [Anatomy of a Challenge Card](../anatomy-of-a-challenge-card/index.md) -- decomposition applied to writing an activity.
- [MicroPython Syntax Checker](../micropython-syntax-checker/index.md) -- debugging at its most mechanical.
- [Computational thinking](https://en.wikipedia.org/wiki/Computational_thinking) -- where the five come from and the argument about whether there are five.
