#!/usr/bin/env python3
"""Rebuild the index.md lesson pages for the first five implemented MicroSims.

Each page keeps the specification text verbatim from docs/sims/TODO/<sim>.json
so the lesson page and the spec never drift apart, and adds the sections the
book's MicroSim validator expects: About, How to Use, Lesson Plan, an embedding
snippet, and References.

Run from the project root:  python3 scripts/build-first5-index-pages.py
"""

import json
import os

SIMS_DIR = "docs/sims"
TODO_DIR = os.path.join(SIMS_DIR, "TODO")

PAGES = {
    "club-improvement-cycle": {
        "title": "The Club Improvement Cycle",
        "description": "Step one session's observation all the way around the club improvement loop, from raw note to a change in how the club runs.",
        "height": 612,
        "chapter": ("Chapter 1: What Is a Coding Club", "01-what-is-a-coding-club"),
        "about": """Continuous improvement is easy to say and hard to picture. This MicroSim makes
it concrete by following a single, ordinary problem -- an LED wiring step that
took twice as long as planned -- through all four stages of the loop.

At each stage you see the actual data that moves forward, not a label for it.
Stage 1 is what happened in the room. Stage 2 is the sentence a mentor typed
that night. Stage 3 is the log, where that sentence lands among six accumulated
notes -- and where four of the six, highlighted in amber, turn out to say the
same thing. Stage 4 is the decision that only becomes obvious once those four
are stacked together: color-code the wires. Advance once more and Session 5
starts from an improved baseline.

Stage 3 is the point of the whole diagram. The counter badge on **Lessons
Learned Log** ticks from 5 to 6 as the new note arrives, and the two greyed-out
entries are there to show that the log holds ordinary noise too. One note is an
anecdote. Four notes saying the same thing are a pattern worth changing the club
over.""",
        "howto": """- **Next** and **Previous** move one stage along the loop. A small amber dot
  travels the arrow so you can see which way the data moved.
- **Reset** returns to Stage 1.
- **Click any of the four boxes** to jump straight to that stage.
- Watch the badge on the Lessons Learned Log node as you pass through Stage 3.""",
        "lesson": """**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Given a session outcome, the learner traces how it
becomes a post-event note, accumulates in a lessons-learned log, and eventually
produces a club evolution decision.

**Before the sim (5 min).** Ask the group: "Something goes wrong in a session.
What happens to that information?" Collect answers on the board. Most groups say
"we remember it" or "we talk about it next time" -- both of which lose the
information within a week.

**With the sim (10 min).** Have a student drive. Stop at Stage 3 and ask why the
club did not change anything after Session 1, when the problem first appeared.
The answer -- that one report is not yet evidence -- is the hardest idea in the
loop and the reason the log exists.

**After the sim (10 min).** Ask each student to write a Stage 2 note for
something they saw in the last session, in one sentence, the way a mentor would
type it that night. Collect them. That collection is the club's first
lessons-learned log entry set.

**Check for understanding.** Give the group a new Stage 1 observation, such as
"only two students finished the challenge card." Ask them to produce the Stage 2
note, then state what would have to be true before it justifies a Stage 4
change.""",
        "refs": """- [Chapter 1: What Is a Coding Club](../../chapters/01-what-is-a-coding-club/index.md) -- the chapter this MicroSim supports.
- [Plan-Do-Check-Act](https://en.wikipedia.org/wiki/PDCA) -- the general continuous-improvement cycle this loop is a club-sized version of.
- [Lessons Learned](https://en.wikipedia.org/wiki/Lessons_learned) -- how organisations capture experience so it survives staff turnover.
- [After-Action Review](https://en.wikipedia.org/wiki/After-action_review) -- the structured post-event debrief that Stage 2 borrows from.""",
    },
    "coding-club-ecosystem-map": {
        "title": "Coding Club Ecosystem Map",
        "description": "Place a coding club precisely among six neighbouring educational contexts, and see what makes it distinct from each one.",
        "height": 562,
        "chapter": ("Chapter 1: What Is a Coding Club", "01-what-is-a-coding-club"),
        "about": """"Coding club" gets used as a loose synonym for maker space, STEM program, or
after-school activity. It overlaps with all of them and is identical to none.

This map puts a coding club at the centre and connects it to six neighbouring
contexts. Each connection carries the phrase that names the relationship, so the
map states something specific rather than just drawing lines: a club *is one
delivery model for* STEM education, but it only *teaches a subset of* computer
science education, and it merely *is commonly scheduled as* an after-school
program.

Clicking any circle gives you the definition of that context plus the sentence
that matters most -- how a coding club differs from it. That second sentence is
what turns the map from a picture into a working definition.""",
        "howto": """- **Click any blue circle** to read what that context is and how a coding club
  differs from it.
- **Hover any connecting line** to enlarge its label.
- **Drag a circle** to reposition it; the amber Coding Club node stays pinned at
  the centre.
- Use the **navigation buttons** in the corner to zoom and pan, or open the sim
  fullscreen to use the mouse wheel.
- **Reset** restores the original layout.""",
        "lesson": """**Bloom level:** Understand (L2) -- *differentiate*

**Learning objective:** Given a set of related program types, the learner
distinguishes what makes a coding club distinct while recognising legitimate
overlap.

**Before the sim (5 min).** Write "coding club" on the board and ask the group to
name other things it is "basically the same as." You will get maker space, STEM
club, and computer class. Leave the list up.

**With the sim (10 min).** Work through the six nodes together. For each one, read
the edge phrase aloud first, then the difference sentence. Compare against the
list on the board and cross out the ones the sim shows are not the same thing.

**After the sim (10 min).** Split into pairs. Give each pair a real local program
-- a library robotics night, a school CS elective, a weekend hackathon -- and ask
them to place it on the map and defend the placement in one sentence using the
edge phrasing.

**Check for understanding.** Ask: "Our club meets on Saturday mornings, so it is
not an after-school program. Is it still a coding club?" A learner who has met
the objective answers yes and can say why the schedule is not the defining
property.""",
        "refs": """- [Chapter 1: What Is a Coding Club](../../chapters/01-what-is-a-coding-club/index.md) -- the chapter this MicroSim supports.
- [Hackerspace](https://en.wikipedia.org/wiki/Hackerspace) -- background on maker spaces and shared tool workshops.
- [STEM education](https://en.wikipedia.org/wiki/Science,_technology,_engineering,_and_mathematics) -- the curriculum-wide goal a coding club can help deliver.
- [Computer science education](https://en.wikipedia.org/wiki/Computer_science_education) -- the full field a club teaches a chosen subset of.
- [Digital literacy](https://en.wikipedia.org/wiki/Digital_literacy) -- the outcome a coding club builds toward.
- [Extracurricular activity](https://en.wikipedia.org/wiki/Extracurricular_activity) -- the broad category a coding club belongs to.""",
    },
    "book-levels": {
        "title": "Levels of Intelligent Textbook Sophistication",
        "description": "Six rungs from a static PDF to an adaptive AI tutor, with a marker showing where this book actually sits.",
        "height": 517,
        "chapter": ("Chapter 2: AI, Intelligent Textbooks, and Where Coding Clubs Meet", "02-ai-and-intelligent-textbooks"),
        "about": """"Intelligent textbook" is not a yes-or-no property. It is a spectrum, and books
sit at different points on it for reasons that have more to do with engineering
effort than marketing.

This MicroSim lays out six levels. Each rung adds one capability the rung below
it lacks: the web adds navigation, MicroSims add manipulation, a learning graph
adds an explicit dependency order, personalisation adds per-reader routing, and
an AI tutor adds generated explanation on demand.

The amber marker sits on **Level 4**, which is where this book actually is. Every
chapter here was generated by walking the book's learning graph in dependency
order, so no chapter assumes a concept you have not met. What this book does
*not* yet do is Level 5 or 6 work: it does not track what you personally already
know, and it does not generate a fresh explanation for your particular
confusion.""",
        "howto": """- **Click any bar** to read what that level adds and see a concrete example.
- **Next** and **Previous** step through the levels in order.
- **This Book** jumps back to Level 4, the rung this textbook occupies.""",
        "lesson": """**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Explain how intelligent textbooks range from static
content to fully AI-driven, adaptive learning experiences, and place this book
on that spectrum.

**Before the sim (5 min).** Ask the group what makes a textbook "intelligent."
Most answers jump straight to Level 6 -- a chatbot that answers questions. Note
those answers; you will come back to them.

**With the sim (10 min).** Step up from Level 1. At each rung ask what a reader
can do now that they could not do one rung below. Stop at Level 4 and point out
the marker: this book is the thing they are holding, and it is not the chatbot
they described.

**After the sim (10 min).** Ask students to name a book, site, or app they use and
place it on the spectrum, defending the placement by naming the capability it has
and the one it lacks.

**Check for understanding.** Ask: "This book has AI-generated chapters. Why is it
Level 4 and not Level 6?" The distinction -- generated *once* for everyone versus
generated *live* for one reader -- is the idea this sim exists to install.""",
        "refs": """- [Chapter 2: AI, Intelligent Textbooks, and Where Coding Clubs Meet](../../chapters/02-ai-and-intelligent-textbooks/index.md) -- the chapter this MicroSim supports.
- [This book's Learning Graph Viewer](../graph-viewer/index.md) -- the Level 4 capability described here, running on this book's own content.
- [Intelligent tutoring system](https://en.wikipedia.org/wiki/Intelligent_tutoring_system) -- the research tradition behind Levels 5 and 6.
- [Adaptive learning](https://en.wikipedia.org/wiki/Adaptive_learning) -- how per-reader routing works at Level 5.
- [Knowledge graph](https://en.wikipedia.org/wiki/Knowledge_graph) -- the structure a learning graph is a specialised form of.
- [Original version of this MicroSim](https://dmccreary.github.io/tracking-ai-course/sims/book-levels/) -- the version in the *Tracking AI* course this one is adapted from.""",
    },
    "club-charter-anatomy": {
        "title": "Anatomy of a Club Charter",
        "description": "A club charter is one document made of five distinct sections. See what each section governs and how they differ.",
        "height": 562,
        "chapter": ("Chapter 3: Writing Your Club Charter and Safety Policies", "03-club-charter-and-safety"),
        "about": """Charter, values, code of conduct, bylaws, decision-making process, roles and
responsibilities. Read as a list, those six terms sound like six words for
roughly the same thing. They are not.

This map shows the charter as a container and the other five as the distinct
sections inside it. Each connection states what that section governs in five
words: values state *what we believe*, the code of conduct states *how we
behave*, bylaws state *our operating rules*, the decision-making process states
*how we decide*, and roles state *who does what*.

Clicking a section gives you the definition plus a concrete example from a real
club, because the difference between "values" and "code of conduct" only becomes
obvious once you see one of each written down.""",
        "howto": """- **Click any blue circle** to read what that section governs and see an example.
- **Hover any connecting line** to enlarge its label.
- **Drag a circle** to reposition it; the amber Club Charter node stays pinned at
  the centre.
- Use the **navigation buttons** to zoom and pan, or open the sim fullscreen to
  use the mouse wheel.
- **Reset** restores the original layout.""",
        "lesson": """**Bloom level:** Understand (L2) -- *differentiate*

**Learning objective:** Given the term "club charter," the learner identifies the
five sections it typically contains and states what each one governs.

**Before the sim (5 min).** Write the five section names on the board in random
order and ask the group to sort them into "what we believe," "how we behave," and
"how we run." Most groups disagree, which is the point.

**With the sim (10 min).** Click each section in turn. Read the definition, then
the example. The examples are chosen so the boundary between neighbouring
sections is visible: "everyone gets keyboard time" is a value, "no laughing at
anyone else's code" is conduct, "meetings are the first and third Saturday" is a
bylaw.

**After the sim (15 min).** In small groups, draft one line for each of the five
sections for a club the students would actually want to run. Compare drafts and
argue about any line that landed in the wrong section.

**Check for understanding.** Give the group a sentence such as "Changing this
charter requires a two-thirds vote" and ask which section it belongs in. Bylaws
is the answer, and being able to say why -- because it is an operating rule about
the organisation, not a belief or a behaviour -- is the objective met.""",
        "refs": """- [Chapter 3: Writing Your Club Charter and Safety Policies](../../chapters/03-club-charter-and-safety/index.md) -- the chapter this MicroSim supports.
- [Handling a Conflict or Complaint](../conflict-resolution-workflow/index.md) -- the workflow the code of conduct section triggers.
- [By-law](https://en.wikipedia.org/wiki/By-law) -- how bylaws function in an organisation generally.
- [Code of conduct](https://en.wikipedia.org/wiki/Code_of_conduct) -- background and common structure.
- [Charter](https://en.wikipedia.org/wiki/Charter) -- the founding-document tradition a club charter borrows from.""",
    },
    "conflict-resolution-workflow": {
        "title": "Handling a Conflict or Complaint",
        "description": "The step-by-step path a coding club follows from a reported concern to a documented outcome, including when to escalate.",
        "height": 682,
        "chapter": ("Chapter 3: Writing Your Club Charter and Safety Policies", "03-club-charter-and-safety"),
        "about": """The worst time to invent a complaint process is during a complaint. This
flowchart is the process written down in advance, so a mentor facing an upset
parent on a Saturday morning knows what the next step is without improvising.

The shape of the flow matters as much as the steps. Documentation comes *before*
the safety question, so the facts are recorded while they are still fresh and
before anyone decides how serious the situation is. The single decision diamond
splits the path: safety and harassment escalate the same day, ordinary
disagreements get mediated. Both branches then rejoin -- every path ends with a
documented outcome and an entry in the lessons-learned log.

That last step is deliberate. It hands recurring conflicts back to the
improvement cycle from Chapter 1, so a problem that keeps happening eventually
changes the code of conduct rather than being handled from scratch each time.""",
        "howto": """- **Hover any step** to preview what it involves.
- **Click a step** to pin its details in the panel while you trace the rest of
  the flow; click it again to unpin.
- Colours group the steps: blue for documentation, amber for the decision point,
  red for the safety-escalation branch, green for resolution and closure.""",
        "lesson": """**Bloom level:** Apply (L3) -- *implement*

**Learning objective:** Given a reported conflict or complaint, the learner
correctly identifies the next step in the club's defined resolution process.

**Before the sim (5 min).** Describe a scenario out loud -- a parent emails to say
another student mocked their child's project -- and ask the group what they would
do first. Note how many answers skip straight to talking to the students.

**With the sim (10 min).** Walk the flow from the top. Stop at
**Club Leader Documents the Report** and ask why documentation comes before the
safety question rather than after it. Then stop at the decision diamond and work
out together which branch the opening scenario takes.

**After the sim (15 min).** Run three scenarios as a group, each learner naming
the next step at each node:

1. Two students argue over whose turn it is on the shared laptop.
2. A student reports that a mentor made them uncomfortable.
3. A parent says their child's kit was taken home by someone else.

Scenario 2 must take the red branch immediately. If anyone routes it to
mediation, that is the misconception worth spending the rest of the session on.

**Check for understanding.** Give a scenario mid-flow -- "the mediation is done,
now what?" -- and ask for the remaining steps. Naming both the family
communication *and* the log entry is the objective met.""",
        "refs": """- [Chapter 3: Writing Your Club Charter and Safety Policies](../../chapters/03-club-charter-and-safety/index.md) -- the chapter this MicroSim supports.
- [Anatomy of a Club Charter](../club-charter-anatomy/index.md) -- the code-of-conduct section that defines what counts as a violation here.
- [The Club Improvement Cycle](../club-improvement-cycle/index.md) -- where the final lessons-learned entry goes.
- [Conflict resolution](https://en.wikipedia.org/wiki/Conflict_resolution) -- general methods behind the mediation branch.
- [Mediation](https://en.wikipedia.org/wiki/Mediation) -- the "heard separately first" pattern used in step 4b.
- [Mandated reporter](https://en.wikipedia.org/wiki/Mandated_reporter) -- why the safety branch escalates outside the club immediately.""",
    },
}

TEMPLATE = """---
title: {title}
description: {description}
image: sims/{sim_id}/{sim_id}.png
status: built
library: {library}
bloom_level: {bloom}
---

# {title}

<iframe src="main.html" width="100%" height="{height}" scrolling="no"></iframe>

[Run the {title} MicroSim fullscreen](main.html){{ .md-button .md-button--primary }}

## About This MicroSim

{about}

## How to Use

{howto}

## Lesson Plan

{lesson}

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/{sim_id}/main.html" width="100%" height="{height}" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[{chapter_title}](../../chapters/{chapter_dir}/index.md).

```text
{spec}
```

## References

{refs}
"""


def main():
    for sim_id, page in PAGES.items():
        with open(os.path.join(TODO_DIR, sim_id + ".json"), encoding="utf-8") as f:
            todo = json.load(f)

        chapter_title, chapter_dir = page["chapter"]
        body = TEMPLATE.format(
            sim_id=sim_id,
            title=page["title"],
            description=page["description"],
            library=todo.get("library") or "p5.js",
            bloom=todo.get("bloom_level") or "Understand (L2)",
            height=page["height"],
            about=page["about"],
            howto=page["howto"],
            lesson=page["lesson"],
            chapter_title=chapter_title,
            chapter_dir=chapter_dir,
            spec=todo["specification"],
            refs=page["refs"],
        )

        out = os.path.join(SIMS_DIR, sim_id, "index.md")
        with open(out, "w", encoding="utf-8") as f:
            f.write(body)
        print("wrote", out)


if __name__ == "__main__":
    main()
