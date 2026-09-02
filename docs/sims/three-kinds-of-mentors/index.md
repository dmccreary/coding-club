---
title: Three Kinds of Mentors
description: Volunteer, professional, peer -- three mentor types whose strengths do not overlap.
image: sims/three-kinds-of-mentors/three-kinds-of-mentors.png
status: built
library: Infographic overlay (grid-diagram.js)
bloom_level: Understand (L2)
---

# Three Kinds of Mentors

<iframe src="main.html" width="100%" height="726" scrolling="no"></iframe>

[Run the Three Kinds of Mentors MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Three types, and the useful framing is not "which is best" — it is that their
strengths are almost perfectly complementary, so a club with only one type has
a predictable gap.

**Volunteer mentors** are the backbone. They join for the mission rather than
the subject, they have the most flexible availability of the three, and they
are the largest pool by a wide margin. What they are not is technically deep,
which is fine — most of what a coding club needs is an adult who will sit with
a stuck student and not solve it for them.

**Professional mentors** bring the expertise the others cannot, and have the
least time. That is the whole trade. A club that tries to build its rota out of
professionals will be short-staffed; a club with one professional who comes
monthly can support advanced students nobody else can.

**Peer mentors** — usually teenagers, often club alumni — bring the thing
adults cannot buy: **relatability**. A fourteen-year-old explaining a loop in
kid-to-kid language lands differently, and the peer mentor's own confidence
grows more than anyone's. Least experience, and it matters least.

**The recruiting consequence.** Each type comes from a different place.
Volunteers come from the community and from parents. Professionals come from
employers and user groups. Peer mentors come from your own students, eighteen
months after they joined — which means the peer mentor pipeline is something
you start rather than something you find.

A club that recruits only through the founder's own network gets one type,
usually volunteers, and stays that shape.

## How to Use

- **Click each type** for what it brings and what recruiting it costs.
- Compare the availability line across all three. It is the constraint that
  decides the rota.
- Try **Quiz Me** to practise matching a club need to a mentor type.
- Then ask which type your club is missing, and where that type actually comes
  from.

## Lesson Plan

**Bloom level:** Understand (L2) -- *compare*

**Learning objective:** Given a recruiting scenario, the learner selects the
mentor type whose strengths best fit the club's current need.

**Before (5 min).** List the current mentors and label each one. Most clubs
find they are all the same type.

**With the poster (10 min).** Read all three. The question to sit with is which
students are currently unsupported — advanced students without a professional,
or hesitant beginners without a peer.

**After (a term).** Recruit for the missing type specifically, through the
channel that type actually comes from. A general "we need mentors" post reaches
the type you already have.

**Check for understanding.** Ask: "You need more mentors and you have three
volunteers already. Who do you go after?" It depends what is failing — but
"more volunteers" is only the answer if the gap is capacity rather than
capability, and knowing which is the point.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/three-kinds-of-mentors/main.html" width="100%" height="726" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 9: "Mentors, Students, and the 3:1 Ratio"](../../chapters/09-mentors-students-ratio/index.md).

```text
Type: infographic-overlay (grid)
**sim-id:** three-kinds-of-mentors<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a club leader compare volunteer, professional, and peer mentors side by side on the same dimensions, so recruiting decisions weigh real tradeoffs rather than treating "mentor" as one undifferentiated pool.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: compare

Learning objective: Given a recruiting scenario, the learner selects the mentor type whose strengths best fit the club's current need.

Image style: Flat comparison poster, three vertical columns, each with a bold printed column header baked into the image ("Volunteer Mentor," "Professional Mentor," "Peer Mentor") since grid overlays hide chip labels by default

Image dimensions: 1200x800 (landscape)

Zones (3 columns, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-6 bullet facts):
1. `volunteer-mentor` -- color #4A90D9 -- boundaries approximately x1:2,y1:10,x2:32,y2:92 -- Summary: "The backbone of most clubs -- unpaid adults who join for the mission." Facts: joins out of general interest, not necessarily a tech background; most flexible availability of the three types; typically the largest mentor pool; needs the most initial training via onboarding (Chapter 6)
2. `professional-mentor` -- color #F5A623 -- boundaries approximately x1:35,y1:10,x2:65,y2:92 -- Summary: "Deep technical expertise, but the least available time." Facts: brings real-world software or electronics experience; can mentor advanced students other mentors can't; volunteering competes with a demanding career; best used for occasional guest sessions or the most advanced track (Chapter 15)
3. `peer-mentor` -- color #7ED6A5 -- boundaries approximately x1:68,y1:10,x2:98,y2:92 -- Summary: "Older students mentoring younger ones -- less experience, more relatability." Facts: typically a teenager, often a club alum; explains concepts in kid-to-kid language; builds the peer mentor's own confidence (Chapter 10 covers recruitment); still requires the same background check and code-of-conduct training as an adult mentor

showLabels: false (column titles are printed in the generated image)

Interactive features: Click or hover any column to highlight its hover zone and reveal its full fact list in a detail panel; explore mode only (no quiz mode needed for a 3-column comparison)

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the three rectangular hover zones over the generated poster image; `data.json` holds the 3 zones per the overlay-grid-data-json-schema
```

## References

- [Chapter 9: "Mentors, Students, and the 3:1 Ratio"](../../chapters/09-mentors-students-ratio/index.md) -- the chapter this MicroSim supports.
- [Mentor Recruiting Influence Graph](../mentor-recruiting-influence-graph/index.md) -- where each type is actually found.
- [Four Coding Club Scheduling Models](../four-scheduling-models/index.md) -- which models each type can staff.
- [Equity Audit Checklist](../equity-audit-checklist/index.md) -- the mentor-team category, and why one network is not enough.
- [Mentorship](https://en.wikipedia.org/wiki/Mentorship#Peer_mentoring) -- peer mentoring and what it does for the mentor.
