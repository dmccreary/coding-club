---
title: Club Roles, Governance Structure, and Branding
description: Defines the people roles a coding club needs, the governance structure and safety logistics that connect them, and the legal and branding basics of naming a club.
generated_by: claude skill chapter-content-generator
date: 2026-08-31 00:00:00
metadata:
  ibook:
    version: 1.10
---

# Club Roles, Governance Structure, and Branding

## Summary

This chapter defines the roles every coding club needs -- leader, mentor, student, parent, and volunteer coordinator -- and the governance structure that connects them. It also covers the practical basics of registering with a venue, legal compliance, and building a simple brand identity. You will finish able to assign roles and explain your club's governance structure to a new volunteer.

## Concepts Covered

This chapter covers the following 16 concepts from the learning graph:

| Concept | CIS Score |
|---------|-----------|
| Mentor Role | 16 |
| Student Role | 15 |
| Parent Role | 14 |
| Volunteer Coordinator Role | 13 |
| Governance Structure | 12 |
| Advisory Committee | 11 |
| Club Policies Handbook | 10 |
| Incident Reporting Process | 9 |
| Emergency Contact List | 8 |
| Insurance Considerations | 7 |
| Venue Agreement | 6 |
| Club Registration With Venue | 5 |
| Legal Compliance Basics | 4 |
| Trademark And Branding | 3 |
| Club Naming Convention | 2 |
| Club Logo Design | 1 |

## Prerequisites

This chapter builds on concepts from:

- [3. Writing Your Club Charter and Safety Policies](../03-club-charter-and-safety/index.md)

---

Chapter 3 named the club leader and assistant leader as the roles your charter's roles-and-responsibilities section defines first. This chapter finishes the cast list -- mentors, students, parents, and a volunteer coordinator -- and connects all of them into a governance structure a new volunteer can understand in five minutes. It closes with the practical, less safety-critical basics of registering with a venue and giving your club a name and a look.

!!! mascot-welcome "Let's meet the whole club"
    ![Circuit waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let's build something great -- and give it a face! By the end of this chapter, every person walking through your door will have a clear role, and your club will have a name and logo people remember.

## The People in Your Club

Four roles round out the roles-and-responsibilities section your charter began in Chapter 3. The **mentor role** covers any adult who has passed a background check and works directly with students during sessions -- guiding a project, answering questions, and applying the child safety policy in the moment. A club with a mentor role clearly defined in its handbook can onboard a new volunteer quickly: "you're a mentor" tells that person exactly what they're cleared to do and what training they've already completed, without a leader having to improvise an explanation each time.

The **student role** is the club's core participant -- the young person building the LED pattern or Scratch game. Defining it formally matters more than it sounds: a charter that specifies a student role's expectations (arrive on time, follow the code of conduct, put shared kits away) treats students as club members with responsibilities, not just passive attendees, which itself reinforces the growth-mindset culture strong clubs cultivate. The **parent role** covers the adults who consent to a student's participation, pick up and drop off, and receive communication about the club -- a parent is not typically present during a session, but the charter should still be explicit about what a parent can expect: consistent start and end times, prompt notice of any incident involving their child, and a channel for questions.

The **volunteer coordinator role** is often the club's least visible but most leverage-heavy position: this person recruits new mentors, tracks who has completed a background check and when it expires, and schedules mentor coverage for each session. A club that grew from three mentors to twelve over two years attributed the growth almost entirely to appointing a dedicated volunteer coordinator -- before that role existed, recruiting new mentors was an occasional afterthought squeezed into the club leader's already full plate.

These four roles, plus the club leader and assistant leader from Chapter 3, only function as a system if the reporting lines between them are clear. That system is the club's **governance structure**: the overall arrangement of roles, oversight, and reporting lines that determines who is accountable to whom. The diagram below shows a typical governance structure for a mid-sized club.

#### Diagram: Club Governance at a Glance

<iframe src="../../sims/club-governance-map/main.html" width="100%" height="762px" scrolling="no"></iframe>

<details markdown="1">
<summary>Club Governance at a Glance</summary>
Type: graph-model
**sim-id:** club-governance-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Purpose: Show how club roles connect through reporting and oversight lines, making the abstract term "governance structure" concrete.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a club's list of roles, the learner explains who reports to whom and who provides outside oversight.

Node types:
1. Top tier -- "Advisory Committee" (gray diamond, oversight, optional -- see note below)
2. Second tier -- "Club Leader" and "Assistant Leader" (amber circles, #F5A623)
3. Third tier -- "Volunteer Coordinator Role" and "Mentor Role" (sky-blue circles, #4A90D9)
4. Fourth tier -- "Student Role" and "Parent Role" (light-green circles, #7ED6A5)

Edges (hierarchical, directional):
- Advisory Committee -- Club Leader: "provides oversight and guidance to"
- Club Leader -- Assistant Leader: "delegates to and trains"
- Club Leader -- Volunteer Coordinator Role: "oversees"
- Volunteer Coordinator Role -- Mentor Role: "recruits, screens, and schedules"
- Mentor Role -- Student Role: "guides directly during sessions"
- Mentor Role -- Parent Role: "communicates session updates to"

Interactive features:
- Click any node to open a side panel with a one-sentence definition and one sentence on that role's single most important responsibility
- Note displayed near the Advisory Committee node: "Not every club has one -- see the Governance Structure discussion for when to add this tier"
- Click-drag to reposition nodes; scroll wheel to zoom

Default state: Hierarchical top-down layout, Advisory Committee at top, no node pre-selected

Layout: Hierarchical (vis-network hierarchical layout option), fixed top-to-bottom tiers

Legend: Fixed corner box explaining node color by tier (gray = oversight, amber = leadership, blue = volunteer/mentor, green = participants and families)

Canvas size: Responsive width, 500px height, minimum 320px width before controls stack vertically

Implementation: vis-network with hierarchical layout enabled; side panel is an absolutely-positioned div updated via vis-network's `selectNode` event listener
</details>

Notice that a governance structure does not need every tier from day one. A brand-new three-student club can run perfectly well with just a club leader and one mentor -- the full diagram above describes where a club is heading as it grows, not a prerequisite for its first session.

!!! mascot-thinking "Governance scales down as easily as it scales up"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Here's the mental shift: don't read that governance diagram as "everything a club must have." Read it as "everything a club might eventually need, and where to slot it in once you do." A tiny club with only two roles filled in is still using this same structure -- just a smaller version of it.

## Governance Structure and Oversight

An **advisory committee** is a small group of outside volunteers -- often parents, local professionals, or community members -- who provide oversight and guidance without running day-to-day sessions themselves. Not every club needs one immediately; the general rule of thumb is that a club adds an advisory committee once it grows large enough that a single leader's judgment alone starts to feel like a risk, echoing the single leader dependency theme from Chapter 1, or once it starts handling a meaningful budget that benefits from more than one set of eyes. A community-center club with fifty regular students formed an advisory committee specifically to review its annual budget and approve any spending over $500, which freed the club leader from being the sole person accountable for financial decisions.

Every role and process this book has described so far belongs together in one reference document: the **club policies handbook**. Where the charter states the club's foundational rules, the handbook is the practical, frequently-updated companion that spells out procedures -- how to submit a background check, what to do if a student needs to leave early, where the supply inventory is tracked. A new mentor should be able to answer most "how do I..." questions by checking the handbook before ever needing to ask the club leader directly.

!!! mascot-tip "Keep the handbook, not the charter, as your living document"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut: update the club policies handbook freely and often, but treat the charter itself as something you change rarely and deliberately. If you find yourself editing the charter every month, the change probably belongs in the handbook instead.

## Safety Logistics and Venue Agreements

Two remaining safety processes round out what Chapter 3 started. The **incident reporting process** is the specific procedure for documenting a physical injury or safety incident -- distinct from the conflict resolution process in Chapter 3, which handles interpersonal disputes rather than injuries. A typical incident report captures what happened, when, who was involved, what first aid or action was taken, and is completed the same day while details are fresh, then filed alongside the club's other safety records. The **emergency contact list** is the always-current, easily accessible list of every student's emergency contact and any critical medical information, kept both on paper at the session (in case a device fails) and digitally as a backup -- a club that only stores this list in one mentor's phone has recreated the single leader dependency problem in miniature, this time with safety-critical consequences.

**Insurance considerations**, introduced briefly as a liability topic in Chapter 3, become concrete once a club formalizes its **venue agreement**: the written agreement with a school, library, bookstore, or community center specifying meeting times, any fees, and which party's insurance covers what. Many venues require a certificate of insurance naming the venue as an "additional insured" before they will sign an agreement at all -- a requirement worth asking about before assuming a handshake deal is sufficient. The broader process of **club registration with venue** covers everything else a venue typically requires before a club can start meeting: proof of the volunteer background checks from Chapter 3, a copy of the charter or at least its code of conduct, and often a simple point of contact who can be reached during club hours.

The table below summarizes how these logistics pieces fit together.

| Logistics Item | What It Covers | Typically Held By |
|---|---|---|
| Incident Reporting Process | Documenting physical injuries or safety incidents | Club leader, filed with other safety records |
| Emergency Contact List | Current contact and medical info for every student | Mentor on-site (paper) plus a digital backup |
| Insurance Considerations | Which policy covers injury or property damage | Club leader, often shared with the venue |
| Venue Agreement | Meeting times, fees, and insurance responsibilities | Club leader and venue contact, both signed |
| Club Registration With Venue | Background checks, charter, and point of contact on file | Venue's program coordinator |

!!! mascot-warning "An unsigned venue agreement is a handshake, not a plan"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Watch out for this: a venue contact saying "yeah, just come by Tuesdays" is not a venue agreement. Get meeting times, insurance responsibility, and cancellation policy in writing before you tell a single family the club is happening -- verbal arrangements are the first thing that falls apart when your venue contact changes jobs.

## Legal Basics and Branding

**Legal compliance basics** cover the handful of legal questions worth a quick check before a club operates formally: whether the club needs its own tax identification number or can operate under a host organization's existing nonprofit status, whether local law has specific requirements for programs serving minors, and whether accepting donations requires any registration. Most small clubs partnering with an existing library or school can rely on that host's legal status rather than incorporating separately, which is worth confirming early rather than assuming.

Once the legal basics are settled, a club benefits from a simple, memorable identity. **Trademark and branding** considerations are usually lightweight for a small club: checking that a chosen name isn't already trademarked by another organization in the same space, and deciding whether the club wants to reserve any rights to its own name and logo. The **club naming convention** is simply the pattern a club follows when choosing its name -- many clubs use a "[Venue] Coding Club" pattern, such as "Riverside Library Coding Club," which doubles as free, self-explanatory advertising. Finally, **club logo design** is the visual mark a club uses on flyers, shirts, and its handbook cover; a simple, high-contrast logo that reproduces well in black and white on a photocopied flyer will serve a club better than an elaborate design that only looks good in full color.

## Chapter Summary

A complete coding club needs six connected roles -- club leader, assistant leader, volunteer coordinator, mentor, student, and parent -- tied together by a governance structure that can scale from a two-role club to one with a full advisory committee. A club policies handbook keeps day-to-day procedures current without disturbing the charter, while an incident reporting process, an emergency contact list, and a signed venue agreement with clear insurance terms keep the club's safety logistics solid. A quick legal compliance check and a simple, memorable name and logo finish the picture.

!!! mascot-celebration "Your club now has a name, a face, and a chain of command"
    ![Circuit celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You can now assign every role your club needs, explain its governance structure to a brand-new volunteer, and describe what belongs in a venue agreement. Next up: gauging real interest before you commit to a first meeting.
