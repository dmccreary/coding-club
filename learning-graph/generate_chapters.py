#!/usr/bin/env python3
import json, os
from collections import defaultdict

BASE = "/Users/dan/Documents/ws/coding-club"
LG_DIR = os.path.join(BASE, "docs/learning-graph")
CH_DIR = os.path.join(BASE, "docs/chapters")

with open(os.path.join(LG_DIR, "learning-graph.json")) as f:
    data = json.load(f)
with open("/tmp/chapter_chunks.json") as f:
    chunks = json.load(f)  # list of [group_id, [concept_ids]]

nodes = {n['id']: n for n in data['nodes']}
prereqs = defaultdict(set)
for e in data['edges']:
    prereqs[e['from']].add(e['to'])

chapter_map = {}
for i, (g, cids) in enumerate(chunks):
    for cid in cids:
        chapter_map[cid] = i

CHAPTERS = [
    ("What Is a Coding Club", "what-is-a-coding-club",
     "Introduces coding clubs, their setting (school/library/community center), and the continuous-improvement mindset that keeps them sustainable across leadership changes.",
     "This opening chapter defines what a coding club is and where it typically operates -- schools, libraries, bookstores, and community centers. It introduces the central theme of the book: clubs that depend on a single leader tend to fade, while clubs that build sustainable infrastructure and practice continuous improvement survive leadership changes. By the end of this chapter you will be able to describe the core traits of a coding club and explain why documenting lessons learned after every event matters."),
    ("AI, Intelligent Textbooks, and Where Coding Clubs Meet", "ai-and-intelligent-textbooks",
     "Explains how generative AI, intelligent textbooks, and learning graphs are reshaping coding clubs, and frames the club's mission, audience, and vision.",
     "This chapter explains how generative AI and AI agents are changing what a coding club can accomplish, from automating routine communication to powering the intelligent textbook you are reading right now. It introduces MicroSims, learning graphs, and interactive simulations as tools this book itself uses. You will also define your own club's mission, vision, and target audience -- the anchor points the rest of the book builds on."),
    ("Writing Your Club Charter and Safety Policies", "club-charter-and-safety",
     "Covers drafting a charter and values statement plus the safety, consent, and privacy policies that protect students and volunteers.",
     "A club charter and a clear set of values give a coding club its backbone, and this chapter walks through drafting both. It covers the safety-critical policies every club needs before working with minors: background checks, child safety, liability, and data privacy. After this chapter you will be able to draft a charter and the consent and safety paperwork a new club requires."),
    ("Club Roles, Governance Structure, and Branding", "roles-governance-branding",
     "Defines the roles of leaders, mentors, students, and parents, then covers governance structure, legal basics, and club branding.",
     "This chapter defines the roles every coding club needs -- leader, mentor, student, parent, and volunteer coordinator -- and the governance structure that connects them. It also covers the practical basics of registering with a venue, legal compliance, and building a simple brand identity. You will finish able to assign roles and explain your club's governance structure to a new volunteer."),
    ("Gauging Interest and Holding Your First Meeting", "gauging-interest-first-meeting",
     "Walks through surveying interest, founding the club, and running a well-planned first meeting that creates a strong walk-in experience.",
     "Before a club exists, you need to know whether anyone wants it -- this chapter starts with surveying interest and assessing feasibility. It then walks through founding the club and running a well-designed first meeting, ending with attention to the all-important walk-in experience for a family's first visit. You will leave able to plan and run a first meeting that converts interest into attendance."),
    ("Growing, Branding, and Promoting Your Club", "growing-and-promoting-club",
     "Covers scaling a club responsibly, crafting an elevator pitch, and promoting it through outreach, media, and milestone events.",
     "Once a club exists, this chapter covers how it grows: crafting an elevator pitch, deciding whether and how to scale to multiple sites, and building a recognizable brand. It also covers promotion through school and library partnerships, local media, and milestone events like a grand opening or anniversary celebration. You will be able to write a pitch and design a promotion plan for your club."),
    ("Telling Your Club's Story and Designing the Classroom", "club-story-and-classroom-design",
     "Combines success-story sharing and communication channels with the physical classroom layout that supports mentoring.",
     "This chapter pairs two practical topics: capturing and sharing your club's success stories through newsletters and social media, and designing the physical classroom itself. It covers monitor placement, center tables, and challenge card display -- the room layout choices that shape how mentors supervise and students collaborate. You will be able to lay out a session room and choose channels for sharing your club's story."),
    ("Running a Session: Room Layout to Cleanup", "running-a-session",
     "Details the operational flow of a single session, from warm-up through safety zones to cleanup routines.",
     "This chapter walks through a single session end to end: warm-up and wrap-up activities, transitions between stations, and the safety basics (exits, first aid, accessibility) every mentor should know. It closes with the less glamorous but essential routines -- check-in, photography policy, and cleanup -- that keep a session running smoothly. You will be able to run a complete session from open to close."),
    ("Mentors, Students, and the 3:1 Ratio", "mentors-students-ratio",
     "Introduces mentors and students, the recommended 3:1 ratio, and the process of adding and matching both groups.",
     "This chapter introduces the two core people in every coding club -- mentors and students -- and the recommended 3:1 student-to-mentor ratio that keeps sessions manageable. It covers the practical mechanics of adding mentors and students, matching mentor skills to student needs, and grouping students by age and skill level. You will be able to explain why the ratio matters and plan how to add mentors and students to your club."),
    ("Building Mentor-Student Relationships That Last", "mentor-student-relationships",
     "Covers check-in routines, feedback, attendance tracking, mentor recruitment sources, and the trust-building that sustains long-term mentoring pairs.",
     "Building on the previous chapter, this one covers what happens after a mentor and student are paired: check-in routines, feedback collection, and attendance tracking. It also covers where to recruit mentors -- teens, college students, retired professionals -- and how to prevent mentor burnout. You will be able to design a check-in routine and a mentor recruitment plan that builds lasting rapport."),
    ("Choosing a Schedule and Building Registration", "schedule-and-registration",
     "Compares scheduling models (Saturday, weekday, drop-in) and builds a mentor-gated registration system with waiting lists.",
     "This chapter compares the major scheduling models for a coding club -- alternating Saturdays, weekday after-school, semester-based, and drop-in -- and helps you choose one. It then covers building a registration system, including the club's signature practice of registering mentors before students to cap enrollment responsibly. You will be able to choose a schedule model and set up a mentor-gated registration system."),
    ("Running Events and Learning From Retrospectives", "events-and-retrospectives",
     "Covers check-in systems, attendance, post-event surveys, and the retrospective process that captures lessons learned.",
     "This chapter covers the operational side of running events: check-in systems, attendance tracking, and post-event surveys. It places special emphasis on the event retrospective -- debriefing what worked and what didn't after every session -- as the practice that turns one good event into a repeatable one. You will be able to run a post-event survey and lead a retrospective."),
    ("Special Events, Payments, and Term Wrap-Up", "special-events-and-payments",
     "Covers workshops, camps, guest speakers, payment processing, and the policies that close out a term.",
     "This chapter covers the event formats beyond a regular session: workshops, weeklong intensives, field trips, and showcases. It also covers the administrative side -- payment processing, scholarship applications, and the policies that handle weather cancellations and makeup sessions -- through to a term-ending celebration. You will be able to plan a special event and the policies that support it."),
    ("Computational Thinking, Scratch, and Python Basics", "computational-thinking-scratch-python",
     "Introduces the core computational thinking skills, then the Scratch and Python fundamentals used to build coding skill.",
     "This chapter introduces computational thinking -- decomposition, pattern recognition, abstraction, algorithm design, and debugging -- as the mental toolkit underneath all coding instruction. It then walks through the club's typical language progression: keyboarding, Scratch block coding, and an introduction to Python syntax, variables, loops, and conditionals. You will be able to explain the five computational thinking skills and teach a first Scratch or Python lesson."),
    ("Designing a Curriculum With Challenge Cards and Portfolios", "curriculum-challenge-cards",
     "Covers curriculum tracks and pacing, plus challenge cards, portfolios, and peer code review as engagement tools.",
     "This chapter covers how to sequence a curriculum across beginner, intermediate, and advanced tracks, including self-paced learning paths. It introduces challenge cards, concept challenge cards, and student portfolios as the concrete tools that make progress visible, along with practices like peer code review and pair programming. You will be able to design a challenge-card-based curriculum sequence for your club."),
    ("Physical Computing and Electrical Safety Basics", "physical-computing-safety",
     "Introduces breadboards, basic components, and the electrical safety rules that must precede any hands-on circuit work.",
     "This chapter opens the book's physical computing track with breadboards, resistors, LEDs, and the basic circuit vocabulary every mentor needs. Electrical safety rules come first and are treated as a prerequisite to every hands-on activity that follows. You will be able to explain core electronics vocabulary and lead a blinking-LED activity safely."),
    ("Sensors, Displays, Motors, and Robot Chassis", "sensors-displays-motors",
     "Covers the sensor, display, and motor building blocks used across the club's physical computing projects and robots.",
     "Building on basic circuits, this chapter covers the sensor types (light, temperature, humidity, motion, sound, distance) and display types (OLED, LED matrix, seven-segment) used across the club's projects. It introduces motors -- DC, servo, and stepper -- and the robot chassis that many kits are built around. You will be able to identify the right sensor or motor for a given project."),
    ("Robots, USB Basics, and Electronics Workshop Skills", "robots-usb-electronics-workshop",
     "Covers robot assembly and control, USB connectors, and the workshop skills (troubleshooting, datasheets) mentors need.",
     "This chapter covers assembling and controlling floor and table robots, including collision avoidance, before turning to the practical workshop skills every mentor needs: USB connector types, circuit troubleshooting, and reading a datasheet. It closes with safe handling and disposal of electronic components. You will be able to assemble a basic robot and troubleshoot a non-working circuit."),
    ("Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit", "pico-micropython-moving-rainbow",
     "Introduces MicroPython on the Raspberry Pi Pico through the popular Moving Rainbow LED kit and its seasonal patterns.",
     "This chapter introduces the Raspberry Pi Pico and MicroPython programming, then applies both to the club's most popular hardware project: the Moving Rainbow LED kit. It covers wiring the NeoPixel strip and programming color, brightness, and animation patterns, including seasonal projects like Halloween costumes and holiday lights. You will be able to wire and program a Moving Rainbow kit."),
    ("Sensor, Sound, and IoT Project Kits", "sensor-sound-iot-kits",
     "Covers the gyroscope, motion, sound, and IoT kits students use to explore sensing and environmental monitoring.",
     "This chapter covers a family of specialized project kits: gyroscope and motion kits for orientation data, sound and microphone kits (including a classroom-noise-friendly design), and IoT kits that monitor light, temperature, and humidity. Robot face, sound, and display kits round out the set. You will be able to select and assemble the right sensor or sound kit for a lesson."),
    ("Managing Your Kit Inventory and Signal Processing Kits", "kit-inventory-signal-processing",
     "Covers the operational side of kits (storage, loaner programs, documentation) plus signal processing and wearable kits.",
     "This chapter shifts from building kits to managing them: cost comparison, storage, loaner programs, and documentation like wiring diagrams and code templates. It closes with more advanced kits -- real-time audio and Fast Fourier Transform signal processing, plus wearable and smartwatch displays -- for clubs ready to go further. You will be able to set up a kit management system and describe what a signal-processing kit does."),
    ("Purchasing and Configuring Club Devices", "purchasing-configuring-devices",
     "Covers laptop and Chromebook purchasing, account setup, and the security and content-filtering policies needed for a youth setting.",
     "This chapter covers purchasing decisions for club laptops and Chromebooks, then configuring student accounts across Chromebook, Windows, and macOS. It addresses the youth-specific concerns every club must plan for: content filtering, parental controls, and password management for kids. You will be able to select and configure devices appropriate for your club's age range."),
    ("Network, Peripherals, and the Device Lifecycle", "network-peripherals-device-lifecycle",
     "Covers network setup, bookmarks, peripherals, and the full device lifecycle from donation through retirement.",
     "This chapter covers the club's network setup -- Wi-Fi, guest access, and bandwidth planning -- along with managing bookmarks, headphones, and other peripherals. It closes with the full device lifecycle, from donation and refurbishment through end-of-life retirement. You will be able to set up a club network and manage devices through their full lifecycle."),
    ("Tracking Student Data and Managing Club Communication", "student-data-and-communication",
     "Covers student data tracking and privacy, plus the email, calendar, and feedback tools used to run the club.",
     "This chapter covers saving and protecting student data, then tracking student progress with a simple dashboard or spreadsheet. It introduces the communication tools a club relies on -- email, shared calendars, notifications, and feedback forms -- with an emphasis on data privacy and consent. You will be able to set up a basic student-progress tracker and a family communication channel."),
    ("Analyzing Club Data and Choosing the Right Tools", "analyzing-club-data-and-tools",
     "Covers attendance and enrollment analytics, spreadsheet skills, and how to responsibly evaluate third-party data tools.",
     "This chapter goes deeper into club data: analyzing attendance and enrollment trends, tracking skill mastery, and building a digital portfolio system. It closes with practical spreadsheet skills and guidance on vetting third-party tools before trusting them with club or student data. You will be able to analyze basic enrollment trends and evaluate a new data tool for privacy risk."),
    ("Motivation, Badges, and Growth Mindset Coaching", "motivation-badges-growth-mindset",
     "Covers intrinsic and extrinsic motivation, challenge cards, badges, and coaching students through a growth mindset.",
     "This chapter covers what keeps students coming back: the balance between intrinsic motivation and extrinsic rewards like badges and stickers, and how to design a fair challenge system. It introduces growth-mindset coaching and the practice of celebrating small wins publicly. You will be able to design a badge system and coach a student through a setback using growth-mindset language."),
    ("Encouraging Persistence and Student Voice", "persistence-and-student-voice",
     "Covers recognition, encouragement language, handling frustration, and giving students voice and choice in their projects.",
     "This chapter covers the day-to-day encouragement work of mentoring: handling frustration, reframing failure as a learning tool, and coaching persistence. It emphasizes giving students voice and choice in their own projects, including passion-project time and interest surveys. You will be able to respond to a frustrated student and design a project structure that includes student choice."),
    ("Reaching Underserved Communities and Removing Barriers", "underserved-communities-barriers",
     "Covers recruiting a diverse membership and removing cost, transportation, and accessibility barriers to participation.",
     "This chapter covers recruiting a genuinely diverse club membership -- reaching girls, women, and minority students -- and removing the practical barriers that keep families away, from cost to transportation to accessible timing. It explains why a no-fee model matters and how scholarship funds and device loans support it. You will be able to identify and address at least three barriers to access in your own community."),
    ("Building Trust and Representation in Your Club", "trust-and-representation",
     "Covers culturally responsive teaching, representation, and the community partnerships that build lasting trust.",
     "This chapter covers building trust with communities a club has not yet reached, through culturally responsive teaching, curriculum representation, and partnerships with faith-based, rural, urban, and immigrant-serving organizations. It closes with a practical equity audit you can run on your own club. You will be able to run an equity audit and identify one new community partnership to pursue."),
    ("Budgeting, Fundraising, and Grant Writing", "budgeting-fundraising-grants",
     "Covers building a club budget and raising funds through grants, sponsorships, and crowdfunding.",
     "This chapter covers building a club budget from recurring and one-time costs, then raising the funds to support it: grant writing, corporate sponsorship, crowdfunding, and community support drives. You will be able to draft a basic club budget and a short grant proposal."),
    ("Tracking Expenses and Building Funding Partnerships", "expenses-and-funding-partnerships",
     "Covers expense tracking, reimbursement, and the school, library, and community partnerships that fund a club long-term.",
     "This chapter covers the ongoing financial operations of a club: expense tracking, reimbursement, and annual budget review. It closes with the funding partnerships -- school districts, PTAs, libraries, and shared-resource agreements with robotics clubs -- that keep a club financially healthy year over year. You will be able to set up an expense-tracking process and identify a funding partnership relevant to your club."),
    ("AI Agents for Registration, Scheduling, and Communication", "ai-agents-registration-scheduling",
     "Introduces AI agents for operational tasks like registration and scheduling, alongside the human oversight needed to use them responsibly.",
     "This chapter introduces AI agents as tools for the club's operational work: registration, scheduling, reminders, and mentor coaching, plus the influence-graph concept for targeting mentor recruitment. It places equal weight on responsible use -- reviewing AI output, setting guardrails, and keeping a human in the loop -- before any agent goes live. You will be able to describe what an AI agent can safely automate and what oversight it requires."),
    ("AI-Customized Curriculum and Rolling Out New Agents", "ai-customized-curriculum-rollout",
     "Covers using AI to customize curriculum and mentor coaching, and the process for evaluating and rolling out new AI agents.",
     "This chapter covers using AI to customize curriculum and lessons to individual students, plus a set of more specialized AI agents for grant writing, social media, and translation. It closes with the practical rollout process: selecting a vendor, testing integration, and training club leaders to use new AI agents responsibly. You will be able to evaluate an AI tool against selection criteria and plan a rollout for your club."),
    ("Establishing an Oversight Board and Inventory System", "oversight-board-and-inventory",
     "Covers forming an oversight board and building the inventory system that tracks kits and equipment.",
     "This chapter covers forming an oversight board -- its roles, meeting cadence, and term limits -- as a club matures past its founding leader. It pairs this with a practical inventory system: sticker printing, QR codes, and equipment checkout, so kits do not go missing as a club grows. You will be able to outline an oversight board structure and set up a basic inventory system."),
    ("Training Mentors and Building a Club That Outlasts You", "training-mentors-and-succession",
     "Covers advanced mentor training and the succession planning, documentation, and strategic vision that make a club sustainable.",
     "This capstone chapter covers advanced mentor recruiting, training curricula, and certification, then turns to the succession planning that lets a club survive its founder stepping away. It covers documenting procedures, building a club playbook, and setting a multi-year strategic vision -- bringing together the sustainability theme introduced in Chapter 1. You will be able to write a standard operating procedure and outline a succession plan for your own club."),
]

assert len(CHAPTERS) == len(chunks), f"{len(CHAPTERS)} titles vs {len(chunks)} chunks"

# Compute prerequisite chapters (chapters containing at least one dependency
# of a concept in this chapter, excluding this chapter itself)
prereq_chapters = []
for i, (g, cids) in enumerate(chunks):
    referenced = set()
    for cid in cids:
        for dep in prereqs.get(cid, set()):
            dep_ch = chapter_map.get(dep)
            if dep_ch is not None and dep_ch != i:
                referenced.add(dep_ch)
    prereq_chapters.append(sorted(referenced))

os.makedirs(CH_DIR, exist_ok=True)

# --- chapters/index.md ---
lines = ["# Chapters", "",
         f"This textbook is organized into {len(CHAPTERS)} chapters covering {sum(len(c) for _,c in chunks)} concepts.",
         "", "## Chapter Overview", ""]
for i, ((title, slug, short, long_), (g, cids)) in enumerate(zip(CHAPTERS, chunks), 1):
    dirname = f"{i:02d}-{slug}"
    lines.append(f"{i}. [{title}]({dirname}/index.md) - {short}")
lines += ["", "## How to Use This Textbook", "",
    "Chapters are ordered so that every concept appears after its prerequisites -- work through them "
    "in sequence for the smoothest path, though the taxonomy grouping means you can also treat each "
    "block of chapters (governance, curriculum, physical computing, kits, devices, funding, AI agents) "
    "as a semi-independent unit once its own prerequisite chapters are done.",
    "",
    "---", "",
    "**Note:** Each chapter includes a list of concepts covered. Make sure to complete prerequisites "
    "before moving to advanced chapters."]
with open(os.path.join(CH_DIR, "index.md"), "w") as f:
    f.write("\n".join(lines) + "\n")

# --- per-chapter index.md ---
for i, ((title, slug, short, long_), (g, cids)) in enumerate(zip(CHAPTERS, chunks), 1):
    dirname = f"{i:02d}-{slug}"
    chdir = os.path.join(CH_DIR, dirname)
    os.makedirs(chdir, exist_ok=True)

    lines = [f"# {title}", "", "## Summary", "", long_, "",
             "## Concepts Covered", "",
             f"This chapter covers the following {len(cids)} concepts from the learning graph:", "",
             "| Concept | Concept Impact Score |", "|---------|-----------------------|"]
    for cid in cids:
        lines.append(f"| {nodes[cid]['label']} | {nodes[cid].get('cis', 1)} |")
    lines += ["", "## Prerequisites", ""]

    pre = prereq_chapters[i-1]
    if pre:
        lines.append("This chapter builds on concepts from:")
        lines.append("")
        for p in pre:
            ptitle, pslug = CHAPTERS[p][0], CHAPTERS[p][1]
            pdir = f"{p+1:02d}-{pslug}"
            lines.append(f"- [{p+1}. {ptitle}](../{pdir}/index.md)")
    else:
        lines.append("This chapter assumes only the prerequisites listed in the "
                      "[course description](../../course-description.md).")
    lines += ["", "---", "", "TODO: Generate Chapter Content"]

    with open(os.path.join(chdir, "index.md"), "w") as f:
        f.write("\n".join(lines) + "\n")

print(f"Generated chapters/index.md + {len(CHAPTERS)} chapter directories")

# --- print nav YAML block ---
nav_lines = ["  - Chapters:", "      - List of Chapters: chapters/index.md"]
for i, (title, slug, short, long_) in enumerate(CHAPTERS, 1):
    dirname = f"{i:02d}-{slug}"
    # Escape colons in titles for YAML safety by quoting
    safe_title = title.replace('"', '\\"')
    nav_lines.append(f'      - {i}. "{safe_title}": chapters/{dirname}/index.md')
with open("/tmp/chapters_nav_block.yml", "w") as f:
    f.write("\n".join(nav_lines) + "\n")
print("Wrote /tmp/chapters_nav_block.yml")

# Prereq stats
no_prereq_count = sum(1 for p in prereq_chapters if not p)
print(f"Chapters with no cross-chapter prerequisites: {no_prereq_count}")
