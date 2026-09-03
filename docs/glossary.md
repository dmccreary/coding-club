# Glossary of Terms

### A

#### Abstraction Skill

The ability to focus on information that matters for a purpose while temporarily ignoring irrelevant detail. A useful abstraction makes a problem simpler without removing essential behavior.

**Example:** A mentor helps a student replace twelve repeated lines of turtle-graphics commands with a single `drawSquare()` function, hiding the repeated steps behind one meaningful name.

#### Accelerometer Data

The set of X, Y, and Z acceleration readings a motion kit reports, each one combining any deliberate motion of the board with the constant background pull of gravity.

**Example:** A resting board reports about 1g on its downward axis, while a quick shake produces a brief spike above the chosen threshold.

#### Accessibility Of Space

Whether the room's layout, including the center table height and pathway widths, works for a student using a wheelchair or other mobility aid -- worth checking before, not during, a family's first visit.

**Example:** A leader measures the center project table at 34 inches high and widens the aisle between two tables from two feet to three before a family who uses a wheelchair visits for the first time.

#### Accessible Session Timing

Choosing meeting days and times that fit the widest range of family schedules a community actually has, rather than defaulting to whatever slot is most convenient for the mentors.

**Example:** A club meets every Saturday morning, and attendance is solid for months until a mentor notices three students have quietly stopped coming.

#### Adding Mentors

Recruiting, background-checking, and onboarding new volunteers ahead of demand, not in reaction to it.

**Example:** A club recruits and background-checks two new mentors over the summer, before fall enrollment opens, rather than scrambling to find volunteers after twelve new families have already signed up.

#### Adding Students

The opposite direction: new enrollment should be capped by current mentor capacity, echoing the mentor-gated registration philosophy this book returns to, rather than accepting every interested family and hoping enough mentors show up.

**Example:** After two new mentors complete onboarding, the club opens six additional student seats while preserving its three-to-one ratio.

#### Advanced Mentor Recruiting

Running mentor recruitment as a repeatable, multi-channel process -- posting on professional networks, presenting at local engineering meetups, and asking existing mentors' employers about volunteer-time programs -- rather than relying on the founder's personal contacts.

**Example:** A founder's personal network produced the club's first three mentors over its first year, one conversation at a time.

#### Advanced Track Curriculum

A curriculum stage that takes on multi-concept projects -- combining functions, loops, and conditionals into something like a simple game -- and is often where a professional mentor's deeper expertise matters most.

**Example:** A mentor with professional software experience guides a student through building a simple two-player number-guessing game that combines a loop, a conditional, and two functions.

#### Advisory Committee

A small group of outside volunteers -- often parents, local professionals, or community members -- who provide oversight and guidance without running day-to-day sessions themselves.

**Example:** A club's advisory committee of two parents and a local software engineer meets quarterly to review the budget and suggest new sponsors, without ever running a Tuesday session themselves.

#### After School Program

Any organized activity that runs outside the standard instructional day, typically between the final school bell and a parent's pickup time.

**Example:** A coding club that meets from 3:15 to 5:00 pm, starting right after the final bell and ending before most parents leave work, is an after school program.

#### AI Agent Basics

Introductory knowledge of software that uses artificial intelligence to pursue a goal through planned steps, tool use, and feedback. Human-defined limits and review remain essential.

**Example:** A club leader asks an AI agent to draft Tuesday's session reminder.

#### AI Agent Cost Management

Tracking what AI tools actually cost a club over a full year -- a subscription fee, a per-message usage charge, or a free tier that later requires payment once a club exceeds a usage limit.

**Example:** An AI tool that saves a leader two hours a month is worth a modest subscription; one that costs more than a club's entire kit budget usually is not, no matter how impressive its output.

#### AI Agent Guardrails

The specific, built-in limits a club sets on what an agent is permitted to do without ever changing them per-message -- an agent may draft a reply but may never send anything directly.

**Example:** A club's guardrail states that no AI agent may include a specific student's name in any message sent to more than one family at a time.

#### AI Agent Integration Testing

Trying a new agent out on real but low-stakes club material before any student or family ever sees its output.

**Example:** Skipping this step means the first real test happens live, in front of a family, which is exactly the situation a club wants to avoid.

#### AI Agent Oversight

The ongoing, periodic practice of a person or small team checking that agents are still behaving the way the guardrails intend, over time -- distinct from the guardrails themselves, which are the fixed limits set once.

**Example:** A lead mentor reviews an agent's draft messages every Friday for its first month of use, confirming it still respects the no-student-names guardrail, before letting the review lapse to once a month.

#### AI Agent Rollout Plan

A staged schedule for introducing an AI agent through selection, limited testing, integration, training, monitoring, and review. Each stage has an owner, success measure, and stop condition.

**Example:** Before adopting an AI note-taking assistant club-wide, a leader runs a four-week pilot with two mentors and a defined stop condition: if either mentor reports more corrections than time saved, the rollout stops there.

**See Also:** [The AI Agent Rollout Pipeline](sims/ai-agent-rollout-pipeline/index.md)

#### AI Agent Training For Leaders

A short, hands-on session teaching every mentor who will use a new agent how to write a good prompt for it, what its guardrails are, and what its known quirks are from integration testing.

**Example:** Leaders practice approving a draft, rejecting an unsafe action, reading an audit log, and escalating a privacy concern.

#### AI Agent Vendor Comparison

A side-by-side evaluation of AI providers using the same criteria for privacy, security, capabilities, reliability, accessibility, integration, support, contract terms, and total cost.

**Example:** A side-by-side comparison also makes a switch easier later, since a club that only ever evaluated one tool has no baseline for judging whether a replacement is actually better.

#### AI Agent Workflow Design

Mapping out, before adoption, exactly where a new agent fits into an existing club process -- which step it drafts, who reviews it, and where the human-in-the-loop checkpoint sits.

**Example:** Before adopting a newsletter-drafting agent, a club maps out that it drafts only the opening paragraph, a mentor reviews every draft before it is sent, and the agent never has direct access to family email addresses.

#### AI Assisted Curriculum Design

Using AI to zoom out from a single lesson to the whole sequence -- an agent proposing how to order challenge cards across the beginner, intermediate, and advanced tracks.

**Example:** An agent proposes moving a debugging challenge card earlier in the beginner track after noticing students in other clubs struggle when it appears later in the sequence, and a mentor reviews the suggestion before changing the order.

#### AI Assisted Debugging Help

AI assistance that suggests where a bug is likely hiding in a student's code -- a mismatched indentation, a variable used before it was set -- without fixing the code itself.

**Example:** Fixing the bug outright would rob the student of the exact skill the exercise is meant to build; pointing at where to look keeps the student doing the actual debugging.

#### AI Assisted Grant Writing

Using AI to draft sections of a grant proposal -- a needs statement, a program description, a budget narrative -- from bullet points a leader supplies about the club's mission and the specific funder's stated priorities.

**Example:** The leader checks the draft against the club's actual attendance records before submitting, catching that the agent rounded "35" up to "nearly 40" -- a small but real overstatement corrected before it left the building.

**See Also:** [Grant Writing and Tracking Workflow](sims/grant-writing-tracking-workflow/index.md)

#### AI Assisted Lesson Customization

The use of AI to revise a lesson’s pacing, analogy, difficulty, format, or examples for stated learner needs while preserving the original concept and goal.

**Example:** Because the mentor specified precisely what to change, reviewing the draft took under a minute; a vague request like "make this easier" would have returned a card the mentor had to compare line by line against the original to see what actually changed.

**See Also:** [From Observation to Customized Lesson](sims/ai-lesson-customization-workflow/index.md)

#### AI Assisted Mentor Matching

Using AI to pair a specific mentor with a specific student based on stated skills and interests -- a mentor who lists robotics and Python paired with a student whose challenge card history shows they gravitate toward physical computing.

**Example:** A club with nine mentors and twenty-two students would require thirty-six possible one-to-one comparisons if a leader tried to reason through every combination by hand.

#### AI Assisted Social Media

Using AI to draft a post -- caption, hashtags, and a suggested photo description -- for a specific platform and moment.

**Example:** The agent's draft names one student directly in the caption: "Maya's robot completed the obstacle course first try!" The leader, recalling the club's photo-consent policy, edits the caption to remove the name before posting, since not every family had signed a media-release form for that specific student.

#### AI Assisted Translation

Using AI to produce a first-pass translation of an existing club document -- the registration form, a flyer, the make-up policy parent chatbot already quotes -- into a family's home language.

**Example:** A leader asks an agent to translate the club's make-up-session policy into Spanish for a family who requested it.

#### AI Bias Awareness

Understanding that an AI tool can systematically favor or disadvantage certain groups -- not because anyone intended it to, but because the tool learned patterns from data that already contained those patterns.

**Example:** A mentor matching agent, for instance, could learn to pair mentors and students along lines that track race, gender, or home zip code rather than the actual skills and interests it was supposed to match on, simply because its training data happened to correlate those things.

#### AI Chatbot For Parents

A conversational tool that answers guardians’ routine club questions from approved information. It clearly identifies itself, limits personal data, and routes unusual or sensitive cases to a person.

**Example:** At eleven at night, a parent asks the chatbot what happens if their child misses a session.

#### AI Chatbot For Students

A conversational tool that gives learners approved guidance or navigation help. Age-appropriate limits prevent unsafe topics, personal-data collection, and unsupervised high-stakes advice.

**Example:** When asked for unsafe instructions, the chatbot refuses, gives a brief safety explanation, and directs the student to a mentor.

#### AI Code Review Assistant

An AI tool that examines student code and flags errors, suggests improvements, or raises questions. Mentors verify advice and keep the learner responsible for understanding and changing the program.

**Example:** A student submits a finished project for the club's regular peer code review session.

#### AI Data Privacy Risk

The danger that using an AI tool means sending more information about a student than the task actually requires to a system outside the club's control.

**Example:** The risk is not that AI itself is unsafe; it is that a tool can quietly collect far more than the club, or the family, ever agreed to.

**See Also:** [Bias and Privacy Risk Sorter](sims/bias-privacy-risk-sorter/index.md)

#### AI Drafted Newsletter

A newsletter assembled or written with AI from approved club updates. Human editing confirms accuracy, permissions, tone, audience fit, and the absence of private information.

**Example:** An agent drafts a "This Month's Highlight" paragraph describing a recent robot demonstration, but gets the specific robot kit's name wrong, calling it a "floor robot" when the session actually used a table robot.

#### AI Ethics For Clubs

Written commitments governing acceptable AI use around minors. They keep final decisions with people, limit personal data, require transparency, address bias, and provide a route for concerns.

**Example:** Leaders reject facial recognition for attendance because its convenience does not justify privacy, bias, and consent risks for children.

#### AI Generated Announcement

A public notice drafted by generative AI from verified event details and audience instructions. A club leader checks every claim, date, link, image, and call to action.

**Example:** A mentor needs to announce a last-minute room change five minutes before a session starts.

#### AI Generated Challenge Card

A coding challenge draft produced by AI from specified skills, age, materials, and difficulty. An educator tests the task, hints, answer, safety, and prerequisites before publication.

**Example:** A mentor asks an agent to draft a green beginner-level card teaching the "repeat" block in Scratch, themed around a student's love of skateboarding tricks.

**See Also:** [Anatomy of a Challenge Card](sims/anatomy-of-a-challenge-card/index.md)

#### AI Generated Website Content

Using AI to draft copy for a club's public pages -- an "About Us" section, a description of what a first visit looks like, an FAQ answer -- pulling from the same walk-in-experience details.

**Example:** A leader supplies the real facts about the club; the agent turns them into welcoming, readable web copy.

#### AI In Education

The use of artificial intelligence tools to support teaching, learning, and the administrative work that surrounds both.

#### AI Managed Mailing List

A mailing list whose subscriptions, duplicates, audience segments, or delivery problems are organized with AI assistance. People approve membership changes and control every outgoing message.

**Example:** The agent suggests audience segments and removes duplicate addresses, but a leader approves every subscription change and outgoing message.

#### AI Output Quality Check

A repeatable review of AI-produced content for factual accuracy, completeness, relevance, bias, privacy, tone, and required approvals before the output is used.

**Example:** A club posts a short checklist next to wherever mentors review drafts: are all names, dates, and times correct, does the tone match the club's voice, and has a person approved it before it goes out?

#### AI Powered Club Tools

The specific software products, often built on generative AI, that a club leader can use directly: an AI assistant that drafts newsletters, a registration system that auto-replies to common parent questions.

#### AI Scheduling Optimization

The use of AI to search many combinations of dates, rooms, mentors, and capacity constraints, then rank schedules against goals set by club leaders.

**Example:** A leader needs a weekday schedule that satisfies three mentors' partly overlapping evening availability, avoids the district's early-release Wednesdays, and keeps every session inside the venue's 4-to-6 p.m.

#### AI Sentiment Analysis

Estimating whether a batch of responses leans positive, neutral, or negative in tone, giving a quick emotional temperature check that a numeric rating scale alone can miss.

**Example:** The same post-event survey's 1-5 rating scale averages a healthy 4.2 out of 5, which on its own would suggest nothing needs attention.

#### AI Survey Analysis

The use of AI to group free-text survey responses into recurring themes, questions, or concerns. A person checks the source comments before accepting the summary.

**Example:** After a semester-end survey, a leader uses AI to sort forty open-ended comments into recurring themes such as "wants more robotics time," then rereads the original comments in that theme before acting on it.

#### AI Tool Selection Criteria

The specific questions a club answers before adopting any new AI tool -- not just "does it work," but does it clearly state what happens to submitted data.

**Example:** Measured against the club's written criteria, the plainer tool wins, even though it looked less exciting in the fifteen-minute trial both leaders sat through.

**See Also:** [AI Tool Selection Radar](sims/ai-tool-selection-radar/index.md)

#### AI Tutor For Students

An AI system that explains concepts, asks questions, and gives practice feedback to learners. Educators constrain content, monitor use, and provide human help when needed.

**Example:** Where that chatbot answers a question, a tutor asks one back -- the same Socratic approach a good mentor already uses when a student asks for the answer outright -- and a mentor stays present to make sure the hinting actually helps rather than frustrates.

#### AI Voice Assistant Use

Having an agent read existing club text aloud or answer a simple spoken question hands-free -- reading tomorrow's mentor confirmation list out loud while a leader is packing kits with both hands full.

**Example:** During setup, a leader asks a voice assistant for the approved checklist while keeping student names and private records out of the request.

#### Algorithm Design Skill

The ability to create a clear, ordered procedure that transforms inputs into a desired result. Good designs account for decisions, repetition, edge cases, and termination.

**Example:** A mentor introduces algorithm design skill through a short demonstration, lets learners try a related challenge, and asks them to explain what changed and why.

#### Alternating Saturday Model

A scheduling approach in which club sessions run every other Saturday rather than weekly, doubling the interval between meetings while keeping session length and format unchanged. Its assumptions and limits should remain visible.

**Example:** A club meeting every other Saturday from 10 a.m. to noon skips the Saturday that falls on a holiday weekend and posts the next four confirmed dates on its shared calendar so families can plan around them.

#### Analog Input

A signal read by a microcontroller that can take on a continuous range of values, not just two, typically reported as a number across a wide scale such as 0 to 1023.

**Example:** A potentiometer wired to an analog pin might report 340 when turned partway and 1023 when turned all the way, with every position in between producing its own distinct number.

**See Also:** [Potentiometer Analog Input Explorer](sims/potentiometer-analog-input-explorer/index.md)

#### Analog Output

A signal that appears to a connected device as a continuously variable level, such as a partially dimmed LED, even though most microcontrollers actually produce it by switching a digital output on and off extremely fast.

**Example:** A microcontroller dims an LED to roughly half brightness by switching its output pin on and off rapidly, spending about the same amount of time in each state every cycle.

**See Also:** [PWM Analog Output Brightness Explorer](sims/pwm-analog-output-brightness-explorer/index.md)

#### Animation Timing Code

Code that inserts a short pause inside the main loop between one frame of color and the next, controlling how fast a pattern appears to move -- the same way a flip-book's page-turning speed, not the drawings themselves, sets how fast the animation looks.

**Example:** Nothing about the color math changes between these two versions — only the single number inside time.sleep changes, making animation speed one of the easiest, safest parameters for a student to experiment with independently.

#### Annual Budget Review

A scheduled, typically end-of-year comparison between a club's budgeted amounts and its actual income and spending, checked against goals, requirements, and new evidence. The outcome should record decisions and assigned follow-up actions.

**Example:** An annual budget review is a scheduled, end-of-year comparison between what a club budgeted and what its tracking spreadsheet shows it actually spent and received, used to correct next year's budget rather than simply repeating last year's numbers unchanged.

#### Annual Strategic Plan

A short written plan, reviewed and approved by the oversight board once a year, setting the club's priorities for the coming twelve months -- how many new mentors to recruit.

**Example:** A club's plan for the coming year sets a goal of recruiting four new mentors and opening a second weekly session, reviewed and approved by the oversight board each August.

#### Anonymized Reporting

The practice of summarizing club data as aggregate counts or trends -- total attendance, number of badges earned, average session rating -- with every individual name stripped out before the summary ever leaves the club's own records.

**Example:** Most of the audiences a club reports to, such as a funder, a school administrator, or a board of directors, only ever need the aggregate number, never the underlying names.

#### Anti Harassment Policy

A documented rule that defines prohibited harassing behavior, names who is responsible for responding, and describes the reporting and investigation process participants can expect. It promotes consistent, fair decisions in club safety and shared expectations.

**Example:** A student reports repeated insulting messages to the named safety contact, who follows documented investigation and response steps.

#### App Installation Policy

A documented rule specifying which software may be installed on shared club devices, who can approve exceptions, and how a request for a new tool gets reviewed. It promotes consistent, fair decisions about shared devices, networks, and technical support.

**Example:** A student asks to install a browser extension needed for an upcoming robotics kit's firmware tool.

#### Asset Tagging Process

A repeatable sequence of steps for labeling a piece of club equipment with a numbered sticker and logging it in the inventory record, with clear responsibility assigned at each step. Defining the sequence reduces omissions and supports oversight, leadership continuity, and long-term club sustainability.

**Example:** Skipping any one of those steps -- applying a sticker without logging it, for instance -- creates a numbered item the inventory system cannot actually find.

#### Assistant Leader Role

A role that exists specifically to prevent single leader dependency -- a second person deliberately trained to run any session solo, handle the registration system, and know where the supply inventory lives.

**Example:** When the founding leader has emergency surgery two weeks before a session, the assistant leader already knows the check-in process and where supplies are stored, and runs the night without disruption.

#### Assistive Technology Option

An available device or software feature that helps a learner interact with club materials, such as screen reading, speech input, alternative keyboards, captions, or switch access.

**Example:** A student with limited fine-motor control struggles to double-click precisely enough to run Scratch projects using the club's standard trackpads.

#### Attendance Data Analysis

Examining session-by-session attendance counts for patterns -- which nights consistently draw fewer students, whether a specific week always dips, whether a new time slot helped or hurt turnout.

**Example:** One Tuesday's attendance drops from fourteen to nine students, and a new mentor worries the club is failing.

#### Attendance Sheet

The actual record produced -- who attended which session -- that feeds three separate needs at once: the mentor capacity planning, any grant reporting requirements, and the visitor check-in process.

**Example:** A leader's sheet from a March session shows fourteen signatures, which the treasurer later cites in a grant report and a mentor uses to confirm the club is staying within its three-to-one ratio.

#### Automated Reminder System

A set of tools and procedures that sends session or deadline reminders to families and mentors automatically on a fixed schedule, rather than relying on someone to send each one by hand.

**Example:** A club that sent sixteen weekly reminders by hand last year had two mentors forget on two separate weeks, leaving families without any advance notice for those sessions.

#### Autonomous Robot Behavior

Actions a robot selects from its own program and sensor readings without moment-to-moment human commands. Examples include avoiding obstacles, following lines, and seeking light.

### B

### B

#### Backup Device Plan

A prepared replacement-device arrangement for sessions when a primary computer fails. It identifies ready equipment, stored configuration, access credentials, files, and the person authorized to issue it.

**Example:** When a mentor's laptop won't boot ten minutes before a session, they retrieve the labeled backup Chromebook from the supply closet, already loaded with the club's saved account and current project files.

#### Badge And Sticker Reward

A tangible reward -- a physical sticker on a printed learning map, for instance -- that works especially well with younger students who respond more to a tangible, immediate reward than a digital badge they may never look at again.

**Example:** A student who completes the LED blink challenge peels a robot-shaped sticker onto their printed learning map and beams as three classmates come over to see where they will put theirs.

#### Badge Design

The practice of creating an individual badge that clearly names the specific skill it proves, using a distinct shape or color tied to that skill's domain.

**Example:** A vague badge like "Great Job" teaches a student nothing about what they can now do; a well-designed badge is a small, permanent record of a real capability.

#### Battery Safety

The handling, storage, and inspection practices that keep the batteries powering a club's kits from becoming a fire or chemical hazard.

**Example:** The AA and coin-cell batteries used in most beginner kits are low-risk when handled normally, but rechargeable lithium batteries found in some robot kits carry real fire risk if damaged, and every battery type carries some risk if short-circuited or physically abused.

#### Beginner Track Curriculum

A learning sequence for newcomers that builds keyboard confidence, block-based programming, basic debugging, and small successful projects before introducing more demanding concepts.

**Example:** A mentor introduces beginner track curriculum through a short demonstration, lets learners try a related challenge, and asks them to explain what changed and why.

#### Bias Awareness Training

Training that helps mentors notice their own unconscious assumptions about who "looks like" a good coder, so that attention, encouragement, and opportunities to lead don't quietly flow toward students who happen to resemble a mentor's own background.

**Example:** Mentors review two recruiting flyers, identify whose identities and interests are missing, and revise the images and wording with community feedback.

#### Blinking Light Circuit

A circuit that combines a power source, a resistor, and an LED with a microcontroller's digital output pin, switching the LED on and off in a repeating pattern under program control.

**Example:** Current leaves the power source, passes through a resistor and LED, and returns through ground; opening any point in the path turns the light off.

**See Also:** [Blinking LED Breadboard Circuit](sims/blinking-led-breadboard-circuit/index.md)

#### Block Based To Text Transition

The learning shift from arranging visual programming blocks to writing equivalent commands in a text language. Effective support connects familiar logic with new syntax and typing demands.

**Example:** A mentor introduces block based to text transition through a short demonstration, lets learners try a related challenge, and asks them to explain what changed and why.

#### Board Meeting Cadence

The regular schedule on which an oversight board meets, such as quarterly business meetings plus an annual planning retreat. Extra meetings follow defined urgent-event rules.

**Example:** A board that only meets "when needed" almost never meets at all.

#### Board Member Recruitment

The deliberate search for people to fill open board seats based on the specific skills a seat requires -- financial literacy for a treasurer, public communication for a chair.

**Example:** A board with an open treasurer seat recruits a parent who works as a corporate accountant, rather than filling the seat with whichever volunteer happens to be available first.

#### Board Roles And Duties

The written responsibilities and authority assigned to each oversight-board seat, such as chair, secretary, treasurer, or mentor liaison. Clear duties support accountability and handoffs.

**Example:** The chair sets meeting agendas, moderates discussion, and casts the tie-breaking vote when the board splits evenly.

#### Board Term Limits

Caps on how long any one person may occupy a board seat before rotating off -- commonly two or three years, often renewable once.

**Example:** A board that staggers its five seats instead -- two expiring in year one, two in year two, one in year three -- always has at least three experienced members mentoring the newest arrivals, even in a year when several seats turn over at once.

#### Bookstore Coding Club

A coding club hosted by a bookstore as a community learning event. The venue may provide meeting space, promotion, books, and connections with families interested in educational activities.

**Example:** A local bookstore hosts a Saturday-morning coding club in its children's section, donating table space and listing the sessions in its own event newsletter.

#### Breadboard Basics

The introductory facts, vocabulary, and safe-handling practices a learner needs before beginning hands-on work with a breadboard. This foundation supports supervised practice before learners attempt more complex tasks.

**Example:** Before any wires go in, a mentor shows students how to identify a breadboard's power rails and confirms everyone can point to them before the group builds its first circuit.

#### Brightness Control Code

Code that scales down the intensity of every pixel's color by a single multiplying factor, letting a program dim an entire NeoPixel strip uniformly without changing any of the hue values a pattern calculates.

**Example:** A mentor troubleshooting a kit that dims unexpectedly or resets when a bright pattern starts should check this brightness factor before suspecting a wiring fault — a factor left too high from a previous lesson is a far more common cause than a loose connection.

#### Bringing Out Mentor Strengths

Deliberately matching each mentor's individual talents to the role where those talents matter most, instead of rotating everyone through identical duties.

**Example:** A club that rotates all three types through the same duty gets a mediocre version of all three jobs instead of an excellent version of each.

#### Browser Bookmark Management

The practice of keeping every club laptop's set of saved website links consistent, curated, and organized into folders, rather than letting each browser accumulate its own random, growing list of one-off links over time.

**Example:** Consistency matters here for the same reason imaging process matters for software: a student who sits down at any laptop in the fleet should find the same bookmarks in the same place, not a different, half-organized set on every machine.

#### Budget Line Item

One named category in a budget with an estimated or approved amount, such as laptops, consumable parts, insurance, snacks, or mentor screening.

**Example:** A first-time club leader drafts a budget with a single line: "Materials -- $400." When a local business offers to sponsor "whatever the club needs most," the leader has nothing specific to hand them.

#### Budget Tracking Spreadsheet

A workbook that compares planned amounts with actual income, commitments, and spending by category. Dates, receipts, balances, and responsible people create an auditable record.

**Example:** A mentor’s $42 parts purchase is entered with its date, budget category, receipt link, approver, and remaining balance.

#### Building An Influence Graph

The process of listing relevant people and organizations, then drawing verified trust or communication relationships among them. The graph reveals credible paths for community outreach.

**Example:** A club leader and three mentors brainstorm fifteen community nodes in twenty minutes -- congregations, youth programs, employers, meetups.

**See Also:** [Mentor Recruiting Influence Graph](sims/mentor-recruiting-influence-graph/index.md)

#### Building Student Mental Models

Forming a working picture of what a specific student already understands, what they get stuck on, and what genuinely interests them -- based entirely on what a mentor observes during real sessions.

**Example:** Over three Saturday sessions, a mentor notices that one student lights up whenever a challenge card mentions music or sound, but visibly disengages from anything framed around sports statistics.

#### Building Sustainable Clubs

The work of distributing leadership, documenting operations, developing future leaders, maintaining resources and partnerships, and using evidence to improve so a club can outlast its founders.

**Example:** A club that has built all of this does not become invincible; it becomes something more useful than invincible -- it becomes replaceable, in the best possible sense, so that any one part of it can change hands without the whole thing ending.

#### Building Trust With Students

Trust built consistently over many small moments: remembering a detail from last week's conversation, following through on a promise to look something up, staying calm when a project breaks.

**Example:** A mentor remembers that a student mentioned starting a new video game the previous week and asks how it's going before diving into that day's challenge card, then stays calm and works through the problem alongside the student when a robot's wheels spin backward instead of forward.

### C

### C

#### Cable Management

Building on that by routing every cable along a wall or under a table edge, secured with cable ties or a cord cover.

**Example:** The organizing team applies cable management to a small pilot, gathers participant feedback, and revises the approach before using it throughout the club.

#### Calendar Sync For Families

Letting a family add the club's full schedule directly to their own phone or household calendar with one click, reducing the odds of a forgotten session far more effectively than any number of individual reminders.

**Example:** A family taps one link in the club's registration confirmation email, and every future Tuesday session appears automatically on their phone's calendar app, with no separate reminder text needed.

#### Cancellation Policy

A plain statement of what happens if the club itself cancels a session -- weather, venue closure, insufficient mentors -- and how families are notified, ideally through the same channel as the reminder email so nobody misses it.

**Example:** A session is called off two hours ahead when the venue loses power in a storm, and the same text alert and email that normally reminds families of Tuesday's meeting instead tells them it's cancelled.

#### Celebrating Small Wins

The practice of noticing and naming a small piece of real progress out loud, right when it happens, rather than saving all recognition for a big finished project.

**Example:** Five minutes into a session, a student finally gets a loop to repeat the correct number of times after three failed attempts.

#### Center Table Design

A shared table, typically positioned in the middle of the room, that becomes the natural gathering point for group discussion, show-and-share moments, and a visible home for the session's materials.

**Example:** The organizing team applies center table design to a small pilot, gathers participant feedback, and revises the approach before using it throughout the club.

#### Certificate Of Completion

A dated document recognizing that a learner finished a defined program or set of requirements. It should state the achievement accurately rather than imply an unearned professional credential.

**Example:** A student who has collected a dozen badges across a semester receives a printed certificate at the end-of-term event, signed by their mentor, naming the track they completed.

#### Challenge Based Curriculum

A curriculum organized as increasingly difficult problems with clear success conditions. Learners select or advance through challenges while mentors provide hints and targeted instruction.

**Example:** A club arranges thirty challenge cards from green through black difficulty, and a student who finishes green card twelve chooses either an easier consolidation task or the first blue card.

#### Challenge Card

A single laminated card describing one coding or electronics project, color coded by difficulty track and displayed with enough visual prominence that a student spots it on walking into the classroom.

**Example:** A student arrives, scans the table for challenges, finds a card they had not
done in the past, picks up the card and heads to a computer before a mentor has said a word.

**See Also:** [Anatomy of a Challenge Card](sims/anatomy-of-a-challenge-card/index.md)

#### Challenge Card Display

A carefully designed set of edge color-coded challenge cards laid out where every student can see them on arrival to a coding club event.  Beginning cards have a green border, intermediate cards have a blue border and advanced cards have a black border.

**Example:** A student who arrives ten minutes early scans the green-bordered starter cards on the display table and picks one instead of waiting idly for the session to begin.

**See Also:** [Anatomy of a Challenge Card](sims/anatomy-of-a-challenge-card/index.md)

#### Challenge Card System

A coordinated combination of people, mentor training, student awareness, tools, AI skills, records, stickers, badges and procedures used to manage challenge cards.  Its parts work together to support reliable decisions in student motivation, persistence, and recognition.

**Example:** The system's motivational power comes less from any single card than from the choice itself -- a student who picks their own next challenge from a visible spread feels ownership over the decision in a way that an assigned worksheet never provides.

**See Also:** [Anatomy of a Challenge Card](sims/anatomy-of-a-challenge-card/index.md)

#### Charging Station Setup

Designating one spot, usually near an outlet-equipped wall, where laptops and devices charge between sessions, clearly separate from the active workspace so a charging cable never crosses a walkway.

**Example:** A club plugs a six-outlet power strip into the wall behind the back table and stores its ten Chromebooks there between sessions, well clear of the walkway students use to reach the supply shelf.

#### Child Safety Policy

The concrete behavioral rules that keep students physically and emotionally safe during a session.

#### Chromebook Management

The ongoing administration of a Chromebook fleet through a single cloud-based console, where one login lets a mentor push software policies, reset a forgotten password, or wipe a lost device to every enrolled machine at once.

Chromebooks can be difficult to manage since they often block USB port access by default.  They need to be put in a "Developer Mode" to enable USB ports for physical computing such as programming a Raspberry Pi Pico

**Example:** A club with twenty Chromebooks needs to block a distracting game website discovered mid-semester.

**See Also:** [STEM Classroom Administration Chromebook Management](https://dmccreary.github.io/stem-classroom-admin/chromebook/)

#### Circuit Diagram Reading

The ability to interpret standard symbols and connections in an electrical schematic, then relate them to the physical components and wires in a project.

**Example:** A circuit diagram works the same way: it throws away the breadboard's physical layout and keeps only the wiring topology, which is exactly the information a mentor needs to understand what a circuit does without caring which specific holes a student happened to use.

**See Also:** The [Beginning Electronics Circuit Diagram Generator Skill](https://github.com/dmccreary/beginning-electronics/tree/main/skills/draw-schemdraw-circuit) which allows you to describe a circuit diagram with words and it will generate the circuit diagram.

#### Circuit Troubleshooting

A systematic process for isolating why a circuit is not behaving as expected, checking the most likely and easiest-to-test causes first rather than guessing or swapping parts at random.

**Example:** Only after all three checks pass does a mentor suspect the LED itself has failed, at which point swapping in a known-good LED confirms or rules that out in seconds.

**See Also:** [Circuit Troubleshooting Workflow](sims/circuit-troubleshooting-workflow/index.md)

#### Class Bookmark Folder

A browser folder installed for every club user that contains approved shared links, such as the curriculum, coding tools, help pages, and project galleries.

**Example:** Because it lives inside Chromebook management console (or an equivalent push for Windows and macOS fleets), a mentor updates the folder once and it propagates to every laptop, rather than requiring eighteen separate manual edits.

**See Also:** [Bookmark Folder Structure](sims/bookmark-folder-structure/index.md)

#### Classroom Layout

The overall arrangement of furniture, equipment, and open space that determines how easily a mentor can see and reach every student; it deserves the same deliberate planning as a first meeting agenda.

**Example:** A mentor arranges six tables in a U facing the front screen and keeps a clear center aisle, so no student's laptop is more than a few steps away during a demo.

#### Classroom Noise Challenge

The learning and communication problems caused when sound projects, robots, conversation, and instructions compete in one room. Zones, headphones, schedules, and volume limits reduce interference.

**Example:** A mentor sets six sound kits running simultaneously so each group can see its own display react to sound, expecting each display to respond mainly to noises its own group makes.

#### Cloud Document Sharing

Methods for storing and sharing club files -- spreadsheets, consent forms, portfolios -- through a cloud-based service scoped to the club's own account, with permissions set deliberately rather than left at a platform's default.

Although many small clubs start out with tools like Google Docs, larger clubs often migrate to sites like GitHub that allow agents to automate the use of forms, data, email and messaging.

**Example:** A club keeps its consent-form spreadsheet in a shared folder scoped to the club's own account rather than a mentor's personal drive, so the file stays reachable after that mentor moves on.

#### Cloud Storage for Student Projects

Using a shared, club-managed cloud drive account as the default save location for student files, so work survives independently of which specific laptop or account a student happened to use that day.

**Example:** Instead of saving a project file locally to a PC files system on "Station 3" shared account -- where it would vanish once the next student logs in -- a student saves directly to the club's shared cloud drive folder.

#### Club Anniversary Event

A celebration of an ongoing club's first, fifth, or tenth year with returning alumni, a showcase of past projects, and often a second wave of local media interest.

**Example:** For a fifth-anniversary session, a club invites its very first cohort of students back to show off new projects alongside current members, and the local paper that covered the original launch returns to cover the milestone.

#### Club Benefits

Measurable gains in problem-solving confidence, comfort with failure and iteration, and exposure to careers students might never otherwise encounter.

#### Club Branding

A consistent visual and verbal identity that extends a club's naming and logo choices across every flyer, newsletter, and social post -- the same colors, the same tone of voice, the same logo placement.

**Example:** Every flyer, T-shirt, and social post uses the same two colors and the same logo placement, so a flyer posted at the library is instantly recognizable as the same club running the Instagram account.

#### Club Bylaws

The charter's operating rules -- how often the club meets, how the leadership role changes hands, how the charter itself can be amended.

#### Club Charter

The founding document that states a coding club's purpose, values, membership expectations, governance, and key rules. It gives participants a shared basis for decisions.

**Example:** When two mentors disagree about whether the club should charge dues, they settle it by rereading the funding section of the club charter both signed at founding.

#### Club Evolution

The gradual, observation-based change in a club's format, curriculum, or structure over time. This distinction helps organizers choose a club structure that can last.

**Example:** A club that began as a single after-school Scratch session evolves, after two years of mentor feedback, into two tracks -- one for beginners and one for students moving into Python.

#### Club Feasibility Assessment

A structured check of whether the practical pieces are actually in place, covering at minimum a willing venue, at least one background-checked mentor beyond the founder, a modest starting budget for basic supplies.

**Example:** Strong interest does not justify launch until leaders also confirm a venue, screened mentors, equipment, insurance, and a workable schedule.

#### Club Growth Strategy

An approach to expansion that starts by asking whether growth is actually the goal, rather than assuming bigger is automatically better.

**Example:** Before recruiting new students, a club leader first asks whether doubling enrollment would actually serve the club's goals, or simply strain the two mentors already stretched thin.

#### Club Health Metrics

A small, consistent set of numbers -- enrollment, mentor retention rate, waitlist length, and average session attendance are typical choices -- tracked over time and reviewed at every board meeting.

**Example:** A club that only ever discusses health in impressions risks a founder's optimism masking a real decline until it becomes a crisis.

**See Also:** [Club Health Metrics Dashboard](sims/club-health-metrics-dashboard/index.md)

#### Club History

A record tracing informal, volunteer-run coding groups back to school computer-lab LOGO turtle-graphics sessions and public-library programming nights of the 1980s and 1990s, long before "maker space" or "STEM education" were common terms.

**Example:** A timeline records the club’s 2019 library launch, its move online in 2020, and the later return to monthly in-person sessions.

#### Club Inventory System

A set of unique labels, a shared log, and checkout procedures that let a club track which physical kit or device is where and who has it, so identical-looking items can still be told apart.

**Example:** But when one of the two goes missing after a loaner period, nothing in that shared documentation says which physical kit is unaccounted for, because neither kit has ever been distinguished from the other.

#### Club Leader Role

The role that carries overall responsibility for the club: setting the schedule, maintaining relationships with the venue, keeping the charter and safety paperwork current, and making final calls on anything the decision-making process doesn't explicitly delegate elsewhere.

**Example:** When a venue asks to move the weekly meeting to a different night on short notice, the club leader confirms the new time, updates the shared calendar, and sends the change to families without waiting for a vote.

#### Club Logo Design

The visual mark a club uses on flyers, shirts, and its handbook cover.

**Example:** The organizing team applies club logo design to a small pilot, gathers participant feedback, and revises the approach before using it throughout the club.

#### Club Milestone Tracking

The ongoing habit of recording notable moments -- a student's first working project, the club's fiftieth session, a jump in attendance -- as they happen.

**Example:** The moment a student's LED-blink program finally works, a mentor jots the date and student's name into the shared log, rather than trying to reconstruct the club's timeline from memory at the end of the year.

#### Club Mission Statement

A concise present-tense statement explaining what the club does, whom it serves, and the value it provides. It guides priorities without describing every activity.

**Example:** When two board members disagree about adding a robotics competition team, they settle it by checking whether the idea serves the age group and purpose named in the club's mission statement.

#### Club Naming Convention

The pattern a club follows when choosing its name -- many clubs use a "[Venue] Coding Club" pattern, such as "Riverside Library Coding Club," which doubles as free, self-explanatory advertising.

#### Club Newsletter

A communication -- typically monthly or after each session -- that goes to registered families and highlights recent milestones, upcoming dates, and a featured success story, serving as the most reliable channel since it reaches people who have already opted in.

**Example:** After each session, a club emails registered families a short update naming the project students built that day, the date of the next meeting, and one student's success story from the week.

#### Club Playbook Document

The single master document, typically a shared folder or wiki with one clear table of contents.

**Example:** A successor opens one shared playbook and finds the annual calendar, partner contacts, safety procedures, registration steps, equipment records, budget routine, and emergency instructions.

#### Club Policies Handbook

A single reference that collects approved club rules, safety procedures, reporting routes, and participant expectations. Version dates and named owners keep the handbook authoritative and current.

**Example:** A new mentor checks the version date on the handbook's cover before citing its snack-allergy procedure, since a copy left in the supply closet last year does not reflect this year's updated rule.

#### Club Registration With Venue

Everything else a venue typically requires before a club can start meeting: proof of the volunteer background checks, a copy of the charter or at least its code of conduct.

**Example:** The organizing team applies club registration with venue to a small pilot, gathers participant feedback, and revises the approach before using it throughout the club.

#### Club Social Media Account

A social media presence that extends a club's reach further to people who haven't yet joined, working best when it posts frequently but briefly.

**Example:** A club posts a fifteen-second video of a student's blinking LED circuit every Friday afternoon, rather than saving updates for one long post at the end of the month.

#### Club Sustainability

The capacity of a coding club to keep running smoothly through changes in leadership, venue, or volunteer availability -- to survive the ordinary turbulence every long-running program eventually faces.

**Example:** When the founder moves away, a trained assistant uses the shared calendar, playbook, and partner contacts to continue the next term.

#### Club Values

A small set of public beliefs that guide behavior and decisions, such as curiosity, respect, inclusion, persistence, and shared learning. Daily practices show whether the values are real.

**Example:** A value of curiosity leads mentors to answer a student’s unexpected idea with questions and experimentation instead of dismissing it.

#### Club Vision

The aspirational, longer-horizon statement of the change a club hopes to produce over years.

**Example:** The organizing team applies club vision to a small pilot, gathers participant feedback, and revises the approach before using it throughout the club.

#### Club Website

The permanent home for a club's core content: a simple page with the mission and vision, the current schedule.

**Example:** The organizing team applies club website to a small pilot, gathers participant feedback, and revises the approach before using it throughout the club.

#### Coaching Leaders With AI

The extension of AI-drafted suggestions to a club's own leadership -- a founder or a rotating co-leader -- closing the loop the mentor coaching AI agent started.

**Example:** A new leader asks the tool for options after two mentors resign, then reviews the suggestions with the oversight board before acting.

#### Code Along Session

A scheduled club meeting centered on code along, with defined outcomes, activities, staffing, materials, and closure. Its structure should leave room for questions and learner choice.

**Example:** In a 60-minute session, students type along as the mentor builds a simple guessing game line by line, pausing every ten minutes so students can ask questions or try their own variation.

#### Code Of Conduct

The enforceable behavioral rules, translated from a club's core values, that apply to everyone in the room -- students, mentors, and visiting parents alike.

#### Code Sharing Platform

A digital environment where students can post, view, and comment on each other's code. Its suitability depends on learner access, privacy, ease of use, supported devices, and export options.

**Example:** A club sets up a shared online workspace so a mentor can open any student's in-progress game from a browser, run it, and leave a comment on the line that needs fixing.

#### Coding Club

A voluntary, out-of-school group where students learn programming and physical computing through hands-on projects guided by adult mentors, rather than through graded instruction.

**Example:** Six students meet at a library twice a month to build Scratch games while two volunteer programmers coach and troubleshoot.

#### Coding Vocabulary Building

The consistent use of the same precise terms -- loop, variable, function, debug -- from the very first unplugged activity onward, so that by the time a student reaches Python syntax, the vocabulary is already familiar.

**Example:** A mentor introduces coding vocabulary building through a short demonstration, lets learners try a related challenge, and asks them to explain what changed and why.

#### Collaborative Challenge Design

An approach that replaces competition entirely with a single shared goal requiring the combined skills of several students -- a challenge that cannot be finished by any one student alone, so success depends on cooperation rather than beating a rival.

**Example:** A safer alternative ranks personal best against a student's own prior score, or scores teams instead of individuals, so improvement is always visible even when someone isn't first.

**See Also:** [Leaderboard vs Collaborative Challenge](sims/leaderboard-vs-collaborative-challenge/index.md)

#### College Mentor Recruitment

An approach that reaches computer science or education students at a nearby college, frequently through a professor willing to announce the opportunity or a campus volunteering office, and tends to bring enthusiastic mentors.

**Example:** A computer-science department shares a role description with students seeking service hours, and candidates attend an orientation and supervised trial session.

#### Collision Avoidance Robot

A mobile robot that continuously checks a distance sensor's reading and changes its motor behavior automatically whenever an obstacle gets too close, rather than relying on a student pressing buttons to steer around it.

**Example:** Behavior: As the obstacle approaches, the distance readout counts down live; when the reading crosses the threshold, the robot's state label switches to Stopping, then Reversing, then Turning, then back to Driving Forward, matching the four-step behavior from the worked example.

**See Also:** [Collision Avoidance Control Loop](sims/collision-avoidance-control-loop/index.md)

#### Color Wheel Programming

A technique that maps one numeric position around a color wheel to red, green, and blue values. Advancing the position produces smooth rainbow animations without storing every color.

**Example:** A loop advances the wheel position by one each frame, producing a smooth rainbow that travels along the LED strip.

**See Also:** [Color Wheel Hue Explorer](sims/color-wheel-hue-explorer/index.md)

#### Communication AI Agent

An AI tool configured to draft, adapt, or organize messages for defined club audiences. A person checks facts, tone, recipients, privacy, and timing before sending.

**Example:** The communication agent drafts a reply pulling the exact make-up policy language from the club's charter, phrased warmly rather than as a copy-pasted policy excerpt.

#### Community Center Club

A coding club based in a neighborhood center that already provides local programs and trusted services. Its schedule, equipment, and outreach are coordinated with the center’s operations.

**Example:** A neighborhood center provides a computer room and promotes Saturday coding sessions through its existing family programs.

#### Community Foundation Grant

Funding awarded by a place-based charitable foundation for local benefit. Applications usually connect a documented community need with outcomes, budget, timeline, and reporting.

**Example:** Compared to the smaller, one-time microgrants, a community foundation grant is more likely to renew automatically if a club meets its reporting requirements.

#### Community Outreach

A club proactively reaching beyond its existing family base: a table at a local community fair, a demonstration at a town event, or a presentation at a PTA meeting.

**Example:** The organizing team applies community outreach to a small pilot, gathers participant feedback, and revises the approach before using it throughout the club.

#### Community Support Drive

A coordinated request to local residents and organizations for specified money, equipment, volunteer time, space, or services needed by the club.

**Example:** A club sets up a donation table at a back-to-school night, with a sign stating the specific goal -- "$300 helps us buy ten Moving Rainbow kits" -- rather than a generic "please support our club" message.

#### Community Trust Building

The practice of earning a community's confidence through consistent, low-pressure presence and follow-through, rather than through a single well-worded outreach message.

**Example:** A second leader, in a different town, attends the same kind of community center's open community meeting three times over two months without asking for anything, simply introducing the club and answering questions when asked.

#### Competition Event Scheduling

The organization of participation in an external contest or hackathon, requiring careful coordination with that competition's own registration deadlines and rules.

**Example:** A club registers a team for a regional robotics hackathon months in advance, tracking that contest's own registration deadline and team-size limit separately from the club's usual sign-up process.

#### Component Identification

The skill of recognizing a component's type from its physical package before ever reading a label or datasheet — telling a resistor from a capacitor from a diode by shape and markings alone.

**Example:** Three visual cues cover most of what a club needs to sort a mixed parts bin correctly: - A resistor is a small cylinder with colored bands.

#### Component Storage System

A deliberate scheme for sorting and labeling a club's loose parts — resistors, capacitors, LEDs, connectors, and small hardware.

**Example:** Label every compartment with both the component type and its specific value — "resistors" tells a student almost nothing, but "220Ω resistors" tells them exactly where to reach.

#### Component Testing Procedure

A focused check that confirms whether one specific, isolated component is working correctly — the step a circuit troubleshooting checklist reaches for only after ruling out power, continuity, and orientation as causes.

**Example:** A student's LED circuit stays dark even after confirming power, continuity, and correct orientation, so a mentor removes the LED alone and tests it with a multimeter's diode-test mode.

#### Computational Thinking Skills

The mental habits that make coding possible, independent of any specific language -- the single most foundational concept in this entire chapter's portion of the learning graph.

**Example:** A mentor introduces computational thinking skills through a short demonstration, lets learners try a related challenge, and asks them to explain what changed and why.

**See Also:** [The Five Computational Thinking Skills](sims/five-computational-thinking-skills/index.md)

#### Computer Science Education

The formal study of computation, algorithms, and software systems, typically the discipline behind a college CS degree or an AP Computer Science course.

**Example:** A lesson asks students to compare two search algorithms, measure their steps, and explain why one scales better.

#### Concept Challenge Card

A short challenge card that practices one idea, such as loops, variables, or conditionals, instead of guiding a complete project. It provides quick reinforcement between larger activities.

**Example:** After a lesson on for-loops, a student gets a five-minute challenge card that asks for an LED to blink exactly six times, with no larger project attached.

**See Also:** [Anatomy of a Challenge Card](sims/anatomy-of-a-challenge-card/index.md)

#### Conflict Resolution Process

The defined sequence of steps a club follows once a complaint or conflict is reported -- who receives the report, how it's investigated, and what outcomes are possible.

**See Also:** [Handling a Conflict or Complaint](sims/conflict-resolution-workflow/index.md)

#### Consent For Data Collection

A guardian's informed, advance agreement to a club collecting and using specific pieces of their child's data, obtained before that data is collected rather than disclosed afterward as a policy buried in fine print.

**Example:** Before collecting progress records, the form tells guardians which fields are stored, why they are needed, who can view them, and when they are deleted.

**See Also:** [Guardian Consent Collection Workflow](sims/consent-collection-workflow/index.md)

#### Content Filtering Software

Software that blocks access to specific categories of inappropriate or distracting websites at the network or browser level, automatically, without requiring a mentor to watch every screen in the room.

**Example:** Filtering happens before a page ever loads, rather than relying on a mentor to notice and intervene after the fact.

#### Continuous Improvement

The practice of making small, deliberate adjustments after every single event based on what was actually observed, rather than waiting and overhauling the club only after something breaks badly.

**Example:** After noticing several students finish a challenge card early every week, a mentor raises that card's difficulty rating the same day, instead of waiting for a semester-end review to revisit it.

#### Corporate Sponsorship

An ongoing or annual financial or in-kind commitment from a local business, given in exchange for public acknowledgment -- a logo on the club's flyer, a mention on its website, or a sign at events.

**Example:** A local hardware store agrees to sponsor a club at $500 per year in cash, plus a standing offer of a 10% discount on any tools or supplies the club buys there.

#### Cost Benefit Analysis

The structured examination of information about cost benefit to identify patterns, explanations, or useful decisions. Conclusions should reflect data quality, context, and uncertainty.

**Example:** Leaders compare a $600 charging cart with staff time lost to sorting loose chargers and replacing damaged cables over three years.

#### Cost Per Student Estimate

The expected club cost divided by the number of students served during a defined period. Leaders state which shared, one-time, and recurring expenses are included.

**Example:** A first-year budget of $2,660 divided across twelve students produces an estimated cost of $221.67 per student.

#### Course Reading Level

The grade-level complexity a club's written materials, challenge cards, and any accompanying textbook should target, so that a worksheet written for a college audience doesn't accidentally land in front of a fourth grader.

#### Crowdfunding Campaign

A time-limited online appeal that gathers many small contributions for a specific club goal. The page explains costs, intended beneficiaries, updates, and what happens if the target changes.

**Example:** A club posts a DonorsChoose campaign titled "10 Raspberry Pi Pico Kits for Our After-School Coding Club," listing the exact $150 cost and a photo of a sample kit.

#### Culturally Responsive Teaching

The practice of connecting a lesson's examples, project themes, and challenge-card framing to the cultural backgrounds and everyday experiences already present in the room, instead of defaulting to a single cultural frame and quietly treating it as neutral.

**Example:** A mentor rewrites one challenge-card set so students choose from three project themes instead of one -- a sports-stats tracker, a favorite-recipe organizer, and a music-playlist sorter -- and lets students substitute their own data.

#### Current Basics

Introductory understanding of the flow of electric charge, measured in amperes. Excess current can overheat components, so circuits use suitable loads, resistance, and power sources.

**Example:** The LED itself uses up about 2 volts of that supply once it is lit, leaving 3 volts that a resistor must absorb.

#### Curriculum Design

The deliberate selection and ordering of learning goals, activities, projects, and evidence across a course or club term. The sequence reflects learner needs and prerequisites.

**Example:** A ten-week club schedules conditionals in week six, ahead of loops in week seven, because the week-eight guessing-game project needs both skills already in place.

#### Curriculum Pacing Guide

Roughly how many sessions each part of that curriculum should take, giving a mentor a planning anchor without locking every session to a rigid, inflexible date.

**Example:** A pacing guide for a twelve-week semester allots two sessions to loops, three to conditionals, and one to a review game, so a substitute mentor can see at a glance whether the group is on schedule.

#### Customizing Lessons With AI

The umbrella practice this section builds toward: a mentor, drawing on the mental model they have built of a specific student, asks an AI agent to draft a lesson variant suited to that student.

**Example:** A mentor has two students starting the same loops-and-conditionals concept card on the same afternoon.

### D

### D

#### Data Backup Routine

A short, repeated set of actions, such as copying attendance and project files to a second location on a set schedule, that keeps data backup consistent. A predictable routine reduces confusion and preserves time for responsible club data, communication, and progress tracking.

**Example:** A club's laptop used for attendance tracking is accidentally left on a bus after a session.

**See Also:** [Data Backup Routine Timeline](sims/data-backup-routine-timeline/index.md)

#### Data Entry Standardization

Agreeing on one consistent format for every value entered into a field -- always "Tuesday Group," never "Tues" or "tuesday" or "Tu group" -- so that formulas and later analysis treat matching entries as matching.

**Example:** A club leader runs =COUNTIF(range, "Tuesday Group") expecting eighteen students and gets eleven, because seven rows were entered as "Tues Group" by a different mentor.

#### Data Export Process

A repeatable sequence of actions for pulling student, attendance, or progress records out of one system and into a file or another system, with clear responsibilities and records. Defining the sequence reduces omissions and makes responsible club data, communication, and progress tracking easier to sustain.

**Example:** A leader exports the term's attendance spreadsheet from the registration platform as a CSV file before the platform's free trial expires, rather than losing the records.

#### Data Privacy Policy

How the club stores and protects any student information it collects -- sign-in sheets, email addresses, the consent forms themselves.

**Example:** A club stores paper sign-in sheets in a locked drawer after each session and keeps the digital roster in a password-protected spreadsheet rather than a shared folder anyone with the link can open.

#### Data Retention Policy

A documented rule stating how long the club keeps student records and communications before deleting them, who is responsible, and what participants can expect. It promotes consistent, fair decisions in responsible club data, communication, and progress tracking.

**Example:** A family that left the club four years ago asks what happened to their child's records.

#### Data Sharing Agreement

A documented understanding between the club and an outside organization, such as a vendor or school, that spells out what student data may be shared, the parties, responsibilities, limits, duration, and review conditions. It reduces ambiguity before resources or access are shared.

**Example:** A club considering a new registration platform or portfolio tool should expect this kind of agreement to exist before any student data flows to that vendor.

#### Data Visualization Basics

Matching a chart type to the question being asked: a bar chart compares totals across categories, such as enrollment by semester; a line chart shows a trend over time.

**Example:** A club leader building a board report first tries a pie chart to show attendance across sixteen weeks, and ends up with sixteen thin slices no one can compare.

#### Datasheet Reading

The skill of finding the specific facts a project needs — a component's pinout diagram, its rated voltage and current, and its absolute maximum ratings — inside a manufacturer's official specification document, rather than guessing from a similar-looking part.

**Example:** A datasheet is usually many pages long, but a mentor rarely needs to read it cover to cover; the pinout diagram and the absolute maximum ratings table answer most club-level questions on their own.

#### DC Motor

A motor that spins continuously in one direction at a speed roughly proportional to the voltage applied to it, reverses direction when that voltage is reversed, and has no built-in way to report its own position.

**Example:** Interactive controls: Two toggle switches representing the H-bridge control inputs; a PWM duty-cycle slider (0%-100%); a "swap direction" preset button.

#### Debugging Skill

The ability to locate, explain, and correct the cause of unexpected behavior through observation, controlled tests, and evidence. It applies to code, circuits, processes, and data.

**Example:** When an LED strip stays dark, a student checks the power connection, then the code, then swaps in a known-good LED -- narrowing down the cause one test at a time instead of guessing.

#### Decision Making Process

A repeatable sequence of actions for bringing a club choice, such as a new policy or a major purchase, to a documented resolution with clear responsibilities and records. Defining the sequence reduces omissions and makes club governance, safety, and shared expectations easier to sustain.

**Example:** Before the next session, leaders document the decision making process, assign an owner, and review it with the volunteers who will use it.

#### Decomposition Skill

The ability to divide a complex problem or system into smaller parts that can be understood, solved, and tested separately before being combined.

**Example:** Instead of trying to build a maze game all at once, a student first writes the code that draws the walls, then the code that moves the player, then the code that detects a collision.

#### Designing Challenge Cards

Writing clear, numbered steps at the right reading level for the target track, including a "stretch goal" for students who finish early.

**Example:** A card for the Explorer track numbers eight steps in plain language and ends with a stretch goal: "Bonus: make the LED blink in a pattern you invent yourself."

#### Device Charging Cart

A secure mobile cabinet that stores and charges multiple laptops or tablets. Numbered slots, cable routing, ventilation, and a charging schedule simplify shared-device care.

**Example:** A club currently owns twelve laptops and buys a 16-slot charging cart instead of the exact-fit 12-slot model, anticipating the four additional laptops a pending grant application would add.

#### Device Cleaning Routine

A short, repeated set of actions, such as wiping screens and clearing air vents on a set schedule, that keeps device cleaning consistent. A predictable routine reduces confusion and preserves time for shared devices, networks, and technical support.

**Example:** A mentor's monthly cleaning pass notices one laptop's fan vent is nearly blocked with dust and running unusually hot to the touch.

#### Device Donation Program

A structured process for accepting computers from donors, checking ownership and condition, securely erasing old data, refurbishing suitable machines, and responsibly recycling rejected equipment.

**Example:** A donated laptop still has to pass through full configuration and labeling pipeline before it ever meets a student; a donation skips the purchase decision, not the setup work.

#### Device End Of Life Plan

A documented method for retiring equipment that is unsafe, unsupported, uneconomical to repair, or too old for club software. It covers data erasure, inventory updates, reuse, donation, and recycling.

**Example:** A mentor wipes its stored data following the device security policy, removes its inventory-tracking label, and drops it off with a local certified e-waste recycler -- closing out its inventory record instead of letting it linger as an unaccounted-for entry on the spreadsheet.

**See Also:** [Device End-of-Life Decision Workflow](sims/device-end-of-life-decision-workflow/index.md)

#### Device Imaging Process

A repeatable sequence of actions for copying a tested software configuration onto multiple devices at once, with clear responsibilities and records. Defining the sequence reduces omissions and makes shared devices, networks, and technical support easier to sustain.

**Example:** After setting up one laptop with the club's editor, browser bookmarks, and account settings, a volunteer copies that same configuration onto the other eleven laptops in an afternoon instead of repeating every step by hand.

#### Device Inventory Tracking

The running, written record of every laptop a club owns: its ID number, platform, purchase date, and current status -- in service, loaned out, or in repair.

**Example:** Seeing that gap a week before a big recruitment event, rather than discovering it the night before, gives the club leader time to either speed up the repair or borrow a replacement.

#### Device Labeling System

A coordinated combination of numbered tags, a matching inventory list, and a labeling procedure that ties each physical device to its record. Its parts work together to support reliable decisions in shared devices, networks, and technical support.

**Example:** Without a labeling system, inventory tracking's written record and the physical laptops it describes can drift apart silently -- the spreadsheet says "Laptop 7 is in repair" while nothing on the actual shelf says which one is Laptop 7.

#### Device Loaner Agreement

A documented understanding that lets a student borrow club equipment, such as a laptop, for use off site, spelling out the parties, responsibilities, limits, duration, and review conditions. It reduces ambiguity before resources or access are shared.

**Example:** A student wants to keep practicing MicroPython over a two-week school break.

#### Device Repair Basics

The small set of hardware fixes a trained mentor can safely attempt without special tools or manufacturer support -- reseating a loose battery connection, clearing debris from under a sticking key.

**Example:** A mentor removes the keycap, clears out a small clump of debris underneath, and reseats it -- a basic repair well within bounds.

#### Device Return Checklist

A concise list of items, such as the charger, case, and any accessories, checked when a borrowed device comes back before work is considered complete. It prevents memory-based omissions and supports consistent club practice.

**Example:** A mentor checks a returned laptop against a four-item list -- charger, case, all cables, no visible new damage -- before marking it available for the next student.

#### Device Security Policy

A documented rule stating the passwords, screen locks, update requirements, and physical safeguards required on club devices, who is responsible, and what participants can expect. It promotes consistent, fair decisions in shared devices, networks, and technical support.

**Example:** Where policies are broad commitments a club makes on paper, a device security policy translates those commitments into specific, checkable settings on an actual laptop.

#### Device Setup Time Budget

The staff time reserved to unpack, update, configure, label, test, and document each device before learners use it. Donated devices often require a larger allowance.

**Example:** The IT volunteer tests device setup time budget on one device, documents the working configuration, and then repeats the verified steps on the remaining equipment.

#### Device Software Updates

The operating-system and application patches a laptop needs on an ongoing basis after initial configuration step, scheduled deliberately -- overnight, in the charging cart, on the club's own network.

**Example:** An update that starts downloading while a student is mid-project can freeze the machine, restart it, or eat exactly the bandwidth Network Bandwidth Planning just accounted for at the worst possible moment.

#### Device Troubleshooting Checklist

A concise list of steps, such as checking the power cable, restarting the device, and confirming the network connection, worked through in order before escalating a problem. It prevents memory-based omissions and supports consistent club practice.

**Example:** When a Chromebook won't connect to the projector, a mentor works down the list -- cable seated, correct input selected, display drivers updated -- before assuming the hardware itself is broken.

#### Digital Input

A signal read by a microcontroller that has only two possible states, HIGH or LOW, corresponding to a voltage near the supply voltage or near zero volts.

**Example:** A button releases a clear LOW value and reports HIGH only while pressed, giving the program two dependable states to test.

**See Also:** [Push Button Digital Input Circuit](sims/push-button-digital-input-circuit/index.md)

#### Digital Literacy

The practical ability to use, create with, and reason about digital tools -- everything from typing confidently to recognizing that a blinking cursor after running code usually means the program is still working, not broken.

**Example:** A student sees the terminal go quiet after pressing run and waits a few seconds instead of panicking, recognizing that the program is still working through a loop, not frozen.

#### Digital Output

A signal a microcontroller sends out that also has only two possible states, HIGH or LOW, used to turn something fully on or fully off.

**Example:** A mentor demonstrates the digital output, asks learners to predict what will happen, and checks the wiring and power before the group runs a test.

#### Digital Portfolio System

A coordinated combination of a storage tool, upload steps, and access rules that lets students collect and showcase their project work over time. Its parts work together to support reliable decisions in responsible club data, communication, and progress tracking.

**Example:** A student's portfolio holds screenshots and code files from every term's projects, so a mentor writing a recommendation letter two years later can point to the exact game the student built as a beginner.

#### Disability Accommodation

Adjusting a club's physical space, materials, or session pace so a student with a physical, sensory, or learning disability can participate as fully as any other student.

**Example:** Accommodation is specific to the student in front of a mentor, not a single checklist that treats every disability the same way.

#### Display Basics

The introductory facts, vocabulary, and safe practices needed to begin working with output components that show text, numbers, or images, such as LEDs, seven-segment displays, and small screens. This foundation supports supervised practice before learners attempt more complex tasks.

**Example:** A useful way to sort displays for a club's purposes is by how much visual freedom they offer: a fixed-segment display can only show a small, predetermined set of shapes, while a matrix-style display can show any pattern the code chooses to draw, pixel by pixel.

#### Display Kit

A project set containing a controller, screen, cables, and sample code for showing text, numbers, icons, or graphics from a program.

**Example:** A student connects an OLED to a controller and writes three lines of code that show the sensor value and a warning icon.

#### Distance Sensor

A sensor, most commonly an ultrasonic sensor, that measures how far away the nearest object is by emitting a burst of sound above human hearing range and timing how long the echo takes to return.

**Example:** The distance formula is therefore distance = (echo time × speed of sound) / 2.

#### Documenting Club Procedures

The practice of writing down how a specific recurring task is done -- setting up the room, running registration, closing down for the night -- at the moment someone first does it well.

**Example:** The first time a new mentor asks "what do I set up first?", the founder writes the ten steps down on the spot, in five minutes, rather than making the mentor guess or waiting for a slower, retrospective effort weeks later.

#### Donation Receipt Process

A repeatable sequence of actions for recording a gift of money or equipment and acknowledging the donor, with clear responsibilities and records. Defining the sequence reduces omissions and makes budgeting, fundraising, and community partnerships easier to sustain.

**Example:** A family drops $50 in the donation jar at the back-to-school-night table where the club raised $340 toward its $300 goal.

#### Drop In Model

A club operating approach in which students attend whenever they choose, without registering in advance or committing to a fixed schedule. Its assumptions and limits should remain visible.

**Example:** A library-based club posts open hours every Thursday afternoon; some weeks four students show up and other weeks eleven, and the mentor plans activities that any newcomer can join mid-session.

#### Duplicate Record Cleanup

The process of identifying and merging records that represent the same student, mentor, event, or item. Matching uses multiple fields so similar people are not combined incorrectly.

**Example:** A report shows fifteen students instead of fourteen; staff confirm that “A.K.” and “AK” share the same registration identifier and merge the two rows.

### E

### E

#### Electrical Safety Rules

The set of practices that keep low-voltage hobby electronics work free of shock, burn, fire, and component-damage risk during a supervised club session.

**Example:** Before a breadboard session, a mentor checks that no battery pack is wired backwards and no bare wire ends are touching, and reminds students to disconnect power before rewiring a circuit.

**See Also:** [Electrical Safety Rules Poster](sims/electrical-safety-rules-poster/index.md)

#### Electronics Vocabulary

The shared set of precise terms that lets a mentor describe a circuit problem accurately instead of vaguely.

**Example:** A mentor demonstrates the electronics vocabulary, asks learners to predict what will happen, and checks the wiring and power before the group runs a test.

#### Elevator Pitch

A thirty-second spoken summary of what your club does and why it matters, named for the idea that you should be able to deliver it in the time it takes an elevator to reach its floor.

**Example:** The organizing team applies elevator pitch to a small pilot, gathers participant feedback, and revises the approach before using it throughout the club.

#### Email And Chat Tools

The two channels that together make up a club's full communication toolkit and serve genuinely different needs: email suits anything that benefits from a searchable written record and doesn't need an instant response.

**Example:** A mentor emails the week's homework link to the whole roster because it needs a lasting record, but posts "running 10 minutes late, go ahead and start setup" in the group chat because it needs to reach mentors right now.

#### Email List Segmentation

Dividing a club's full contact list into smaller, purpose-specific groups -- active families, waitlisted families, mentors, alumni -- so a message only reaches the people it's actually relevant to.

**Example:** Segmentation matters because the groups genuinely overlap: a mentor might also be the parent of an active student, and an alumni family might still want event announcements even after their own student has moved on.

**See Also:** [Email List Segments](sims/email-list-segments-venn/index.md)

#### Emergency Contact List

The always-current, easily accessible list of every student's emergency contact and any critical medical information, kept both on paper at the session (in case a device fails) and digitally as a backup.

**Example:** At check-in, staff verify each student’s guardian name, phone number, allergy note, and approved emergency contact.

#### Emergency Exit Awareness

Every mentor, not just the club leader, knowing the room's exits and the evacuation route before the first student arrives -- a detail easy to assume someone else has covered.

**Example:** A substitute mentor arriving for the first time spends two minutes locating both exits and the fire extinguisher before a single student walks in.

#### Emergency Fund Reserve

Money intentionally kept available for urgent, unplanned needs that threaten club operations, rather than committed to routine purchases or optional upgrades.

**Example:** A club sets aside $210 -- about three months of its $830 recurring budget -- into a separate reserve line, funded gradually from a small surplus in its first year's community support drive.

#### Encouragement Language

The specific wording a mentor chooses in the moment of frustration -- phrases that acknowledge the difficulty as real without agreeing that the student is incapable of overcoming it.

**Example:** The difference between "don't worry, it's easy" and "that's a genuinely tricky bug" sounds small, but the first one dismisses what the student is feeling while the second one validates it, and only validated frustration tends to soften.

#### End Of Term Celebration

A closing event that recognizes specific student learning and brings a scheduled program period to a satisfying finish. It may include demonstrations, families, certificates, and reflection.

**Example:** On the last Thursday of the session, each student demos a finished game to family members on a shared projector, then receives a printed certificate listing the skills they practiced.

#### Enrollment Trend Analysis

Examining total headcount across several semesters or years to identify whether a club is growing, holding steady, or shrinking, and connecting that trend to a likely cause -- a new promotion effort, a scheduling change.

**Example:** Unlike retention, which tracks whether the same students return, enrollment trend analysis tracks the club's total size regardless of which specific students make up that total.

**See Also:** [Attendance and Enrollment Trend Explorer](sims/attendance-enrollment-trend-explorer/index.md)

#### Equipment Checkout System

A coordinated combination of a sign-out log or scanning tool, due dates, and a designated owner that tracks which kits and devices are on loan. Its parts work together to support reliable decisions in oversight, leadership continuity, and club sustainability.

**Example:** Scanning a kit records its borrower and due date; scanning it back marks the return and prompts a component check.

#### Equipment Depreciation Planning

The practice of extending the one-time-cost thinking into a standing schedule across every piece of equipment a club owns, not just the laptops -- tracking each item's purchase cost, expected useful life.

**Example:** A club logs its $400 3D printer against an expected five-year useful life, setting aside roughly $80 a year toward its eventual replacement.

#### Equipment Return Tracking

The step that closes the loop the checkout system opens: scanning a returned item's QR code flips its status back to "in storage," time-stamps the return.

**Example:** Three days after a workshop's two-day due date passes with no return scan, the system automatically flags all three items as overdue on the mentor's dashboard.

#### Equity Audit Of Club

A periodic review comparing who can discover, join, attend, participate, and advance in the club. Differences prompt investigation of barriers rather than assumptions about interest.

**Example:** Run it on a fixed schedule, such as once per semester, rather than only when a problem is already visible.

**See Also:** [Equity Audit Checklist](sims/equity-audit-checklist/index.md)

#### Establishing A Budget

Building a complete, written plan for every dollar a club expects to spend in a coming year.

**Example:** A budget is not the same thing as a wish list of things a club would like to own -- it is a commitment to a specific total, broken into specific line items, that someone has to actually raise or already has in hand.

#### Establishing A New Club

The formal decision to move from "we think there's interest" to "we are doing this" -- rarely a single dramatic moment.

**Example:** A group that has talked about starting a club for months finds the real turning point is simply reserving a room for six Tuesday afternoons and telling three interested families to save the date.

#### Event Debriefing Meeting

A short, structured conversation among mentors -- ten to fifteen minutes, ideally right after the session while memory is fresh -- covering what worked, what didn't, and what to try differently next time.

**Example:** Right after a session ends, three mentors spend twelve minutes at a folding table noting that the soldering station ran short on time, and agree to start it five minutes earlier next week.

#### Event Retrospective Checklist

A short, standing list of questions the meeting always covers (attendance versus registration, any incidents, survey highlights, one thing to change).

**Example:** Every debrief opens with the same four questions from the checklist, so a rotating cast of mentors never has to remember what to ask from scratch.

**See Also:** [The Event Retrospective Process](sims/event-retrospective-process/index.md)

#### Eventbrite Case Study

An applied example of using Eventbrite tickets, capacity limits, confirmations, cancellations, and a waiting list to manage coding-club registration. Platform features must be rechecked before adoption.

#### Expense Reporting Process

A repeatable sequence of actions for recording a purchase, its receipt, and its budget category with clear responsibilities and records. Defining the sequence reduces omissions and makes budgeting, fundraising, and community partnerships easier to sustain.

**Example:** A mentor buys $35 in USB cables and mentions it to the club leader in passing at pickup time; two weeks later, neither of them remembers the exact amount, and the purchase never makes it into the spreadsheet.

#### External Storage Device

Removable media, such as a USB flash drive or portable drive, used to transfer or back up files. Encryption and labeling reduce loss and data exposure.

**Example:** A Chromebook's limited local storage makes this an occasional necessity even for a club that otherwise keeps everything in the cloud.

#### Extracurricular Learning

Any learning activity a student pursues outside required coursework, whether or not it happens after school.

**Example:** A student who teaches themselves basic Python from online videos over summer break is engaged in extracurricular learning, even though no club session is meeting at the time.

#### Extrinsic Reward System

A coordinated combination of badges, points, prizes, or recognition rules that a club uses to reinforce specific student behaviors. Its parts work together to support reliable decisions in student motivation, persistence, and recognition.

**Example:** A student earns a sticker after demonstrating a working loop, but mentors also ask what the learner discovered so the prize does not replace curiosity.

### F

### F

#### Failure As Learning Tool

A deliberate mentoring habit of treating a mistake or crash as evidence to examine rather than a result to hide. Its value depends on how mentors respond to the moment -- with curiosity about the cause rather than blame.

**Example:** A failed attempt that produces an error message is not nothing; it is information that narrows down what to try next, and naming that explicitly changes how a student experiences the failure.

#### Faith Based Venue Partnership

A cooperative relationship between a club and a religious congregation that hosts or supports it through shared space, resources, expertise, access, or credibility. A useful partnership has mutual benefit and documented expectations.

**Example:** The partnership works best when a club approaches the congregation's education or youth-program coordinator, not necessarily clergy directly, and when the club is explicit that its own programming stays secular regardless of which building hosts it.

#### Family Night Event

An event that invites parents and siblings to build alongside students for one session, and an open house event invites the broader public in to see what the club does.

**Example:** The organizer applies family night event to the next event, communicates the details to families and mentors, and records issues for the retrospective.

#### Fast Fourier Transform Basics

Introductory understanding of an efficient algorithm that converts sampled signals from a time-based representation into frequency components. It can reveal which pitches dominate recorded sound.

**Example:** A microphone hears a whistle, and the spectrum display shows one dominant frequency band even though the raw waveform changes too quickly to interpret by eye.

#### Feedback Loop Design

Making sure that feedback a club collects actually leads to a visible action and a response back to the people who gave it.

**Example:** The club analyzes the responses, decides to shift the start time by fifteen minutes starting the following month, and sends a short follow-up message explaining the change and crediting the survey for prompting it, so the families who responded can see their feedback actually changed something.

**See Also:** [Feedback Loop Cycle](sims/feedback-loop-cycle/index.md)

#### Female Mentor Recruitment

The deliberate effort to bring women into a club's mentor team specifically, as distinct from recruiting girls as students, which already covered.

**Example:** A club can succeed completely at recruiting girl students and still send the unintended message that computing is something girls learn but men lead, if every adult running a session is male.

#### Field Trip Coordination

Coordination that takes students off-site entirely, to a local tech company or a robotics competition, and requires its own consent paperwork layered on top of the standard parental consent form.

**Example:** The organizer applies field trip coordination to the next event, communicates the details to families and mentors, and records issues for the retrospective.

#### File Naming Convention

A shared rule for constructing filenames from useful fields such as date, project, student identifier, and version. Consistent names make files easier to sort and find.

**Example:** A club adopts the pattern `LastName_ProjectName_v2.py`, so a mentor sorting through forty submitted files can tell at a glance whose project is whose and which draft is the latest.

#### Finding Qualified Mentors

The evaluation step that follows recruiting: judging each candidate not just on the background-check clearance already requires, but on technical comfort with the club's actual kits.

**Example:** One has deep professional experience but grows visibly frustrated when a student's LED strip needs the same wiring fix explained three times; the other has less technical depth but stays calm and patient through the same repeated question.

#### Firewall Basics For Clubs

A simple, default-deny rule for the club's network: block all outbound and inbound traffic except the specific destinations a club's software actually needs -- the platform's update servers, the coding tools' websites.

**Example:** A club initially leaves all outbound network ports open, and a student discovers a game that tunnels its traffic through an unusual port to slip past the category-based content filter.

#### First Aid Kit Location

A location, fixed and known to every mentor, for a kit stocked at minimum with bandages and cold packs for the occasional pinched finger or bumped head.

**Example:** The organizing team applies first aid kit location to a small pilot, gathers participant feedback, and revises the approach before using it throughout the club.

#### First Club Meeting

The club's actual debut session, deserving more deliberate planning than any regular session that follows, because it is the only session with zero returning students to set the tone.

**Example:** A club leader scripts the first ten minutes of the debut session -- greeting each family by name, handing out name tags, running a two-minute icebreaker -- because there are no returning students yet to show newcomers how a normal session goes.

#### First Impression Design

The deliberate small choices that shape a visitor's first impression -- a clearly visible sign-in table, a mentor greeting families at the door by name rather than leaving them to find their own way.

#### First Three Students

A deliberately tiny opening cohort that lets one mentor and one leader test the club experience, equipment, timing, and support routines before accepting wider enrollment.

**Example:** Before opening registration to the whole fourth grade, a new club runs its first month with just three students recruited by word of mouth, giving the mentor room to work out timing and materials with less at stake.

#### Floor Robot

A robot chassis built to drive across an open floor surface, as opposed to a compact tabletop robot sized to stay within the boundary of a desk or table.

**Example:** A floor robot's larger drivable area supports bigger, more visible projects, such as an obstacle course or a maze challenge, but it also demands more classroom space, produces more motor noise, and needs closer supervision so a moving robot does not wander into another group's workspace.

#### Flyer Design

The practice of producing a simple, high-contrast printed or digital flyer -- date, time, venue, target age range, and a one-line hook drawn from the value proposition -- posted where families already look.

**Example:** A one-page flyer for a robotics club reads "Robotics Club - Wednesdays 3:30-5:00 - Grades 4-6 - Build a robot that solves a maze" in large type, printed and pinned to the school's family bulletin board.

#### Forms And Feedback Tools

The online forms a club uses to collect structured input from families and mentors -- a post-event survey, a badge self-assessment, an incident report -- built from a small set of question types.

**Example:** A club that asks "How was tonight's session?" by email gets thirty different reply formats, some one word, some three paragraphs, that take real time to compare.

#### Founding Team

The small group -- typically two to four people -- who share the initial workload of establishing the club: one person securing the venue, another handling the background-check and consent-form paperwork.

**Example:** A founding team of three splits the initial work so one person books the library meeting room, a second collects background-check paperwork from volunteer mentors, and a third builds the online sign-up form.

#### Fourth Of July Pattern

A pattern that swaps the palette again, this time to red, white, and blue, and frequently adds a brief random sparkle layered on top of a slower base pattern.

**Example:** A mentor demonstrates the fourth of july pattern, asks learners to predict what will happen, and checks the wiring and power before the group runs a test.

#### Franchise Model

A model that goes further still: packaging the club's charter, curriculum, and branding so that an entirely different founding team, at a location the original founder has no direct involvement with, can replicate it using a shared playbook.

**Example:** A founder hands a complete playbook -- curriculum, budget templates, branded signage -- to a parent in another city, who opens a same-named club the original founder never visits.

#### Free Device Loan Program

A no-cost system that lends configured computers to learners who lack suitable equipment. Agreements cover care, support, privacy, return dates, and damage without punitive barriers.

**Example:** A club purchases five Chromebooks specifically for loan rather than in-room use, using the configuration steps -- a student login, a saved-work folder, and a class bookmark folder already set up before the laptop ever leaves the building.

#### Frequency Spectrum Display

An electronic output device used to present frequency spectrum through text, numbers, color, or graphics. Its interface, power needs, and readable viewing distance shape project design.

**Example:** A mentor demonstrates the frequency spectrum display, asks learners to predict what will happen, and checks the wiring and power before the group runs a test.

**See Also:** [Frequency Spectrum Display Explorer](sims/frequency-spectrum-display-explorer/index.md)

#### Friendly Competition Design

The practice of building a competitive activity to be low-stakes and short-lived on purpose -- time-boxed to one session, scored by team rather than by individual, and framed with humor.

**Example:** A mentor runs a fifteen-minute "fastest working LED blink" contest, split into pairs rather than solo entrants, with the losing pairs from round one immediately re-paired into new teams for round two.

#### Fundraising Event Planning

Organizing a single scheduled event -- a trivia night, a bake sale, a small coding showcase with an admission suggestion -- specifically to raise money, which requires its own small budget for venue, supplies.

**Example:** A club runs a trivia night at a community center, spending $80 on room rental, snacks, and small prizes.

### G

### G

#### Gamification Elements

Small, optional game-like touches added to a session -- a point, a level, a streak counter -- that make progress feel a little more like play without becoming the club's primary motivation system.

**Example:** A student who has a five-session streak feels a small pull to keep it going, but because the streak is personal and private, it never turns into the kind of public ranking warned against with leaderboards.

#### Gauging Interest Survey

A short questionnaire, typically five to eight questions, distributed to prospective families or a venue's existing patrons to measure demand for a coding club before any resources are committed.

**Example:** A library sends a seven-question survey to the 40 families on its summer-program mailing list and gets 18 "yes, sign my child up" responses before ordering a single kit.

**See Also:** [Interest Survey Results](sims/interest-survey-results/index.md)

#### Generative AI

AI systems that produce new text, images, code, or other content in response to a prompt, rather than simply retrieving or classifying existing content.

**Example:** A club leader asks a generative AI tool to draft five icebreaker questions for the first session, then rewrites two of them before printing the handout.

#### Governance Structure

The overall arrangement of roles, oversight, and reporting lines that determines who is accountable to whom.

**Example:** Session leaders handle weekly operations while an oversight board reviews policy, budget, risk, and succession each quarter.

#### Grand Opening Event

An event that marks a new club's or new site's official launch with extra visibility -- refreshments, a demonstration table, an invitation to local media and elected officials.

**Example:** A new site sets up a demonstration table where last semester's students show off a blinking LED matrix, invites the local paper, and serves punch and cookies for the thirty families who show up.

#### Grant Application Tracking

The practice of recording every grant a club applies for -- the funder's name, amount requested, deadline, current status, and next follow-up date -- in one place.

**Example:** A club applying to more than two or three funders at once needs this discipline, since memory alone stops being reliable past that point.

**See Also:** [Grant Writing and Tracking Workflow](sims/grant-writing-tracking-workflow/index.md)

#### Grant Proposal Structure

The set of standard sections nearly every grant application shares, regardless of funder: a needs statement, a project description, a budget, an evaluation plan, and a short organizational background.

**Example:** A proposal connects the need for loaner laptops to a measurable access goal, itemized budget, timeline, and evaluation method.

#### Grant Writing Basics

What a grant actually is -- money awarded by a foundation, government agency, or company based on a written application that the funder evaluates against its own stated priorities.

**Example:** A first application links a documented need for loaner laptops to an itemized budget, delivery timeline, student access goal, and reporting method.

**See Also:** [Grant Writing and Tracking Workflow](sims/grant-writing-tracking-workflow/index.md)

#### Group Messaging App

A software application used to support group messaging on phones, tablets, or computers. Club leaders should evaluate privacy, accessibility, moderation, cost, and account requirements.

**Example:** Choosing an app most families already have installed lowers the barrier to actually using it; asking every family to install something new just for the club often means several never do.

#### Growth Mindset Coaching

The practice of responding to a student's struggle or failure with language that frames ability as something that grows with effort and practice, rather than as a fixed trait a student either has or doesn't.

**Example:** After a robot fails to turn, the mentor says, “Your test ruled out the sensor. What could you test next?” instead of calling the task easy.

**See Also:** [Growth Mindset Coaching Response Flow](sims/growth-mindset-coaching-response-flow/index.md)

#### Guest Speaker Scheduling

The practice of bringing in an outside professional for a single session -- a software engineer, a game designer -- to talk about their work and answer questions.

**Example:** A mentor invites a local game developer to spend one Thursday session showing students how she debugged a shipped game, then takes questions for the last fifteen minutes.

#### Guest Wifi Access

A separate wireless network, distinct from the club's own managed-device network, offered to visiting parents, siblings, and any personal phone or tablet that isn't part of the club's inventory.

**Example:** A visiting parent connects a phone to the isolated guest network without receiving access to club laptops, printers, or shared drives.

#### Gyroscope Kit

A project set built around a gyroscope that measures rotation about three axes. Learners use its readings to detect turning, orientation changes, or gestures.

**Example:** A student tilts the kit's board slowly, then quickly, and watches how differently the on-screen X, Y, and Z rotation numbers respond to each motion.

#### Gyroscope Orientation Data

The pitch, roll, and yaw values a program calculates from a gyroscope kit's raw rotation readings — pitch describing a tip forward or backward, roll describing a tip left or right.

**Example:** A student tilts and turns the board while watching three axis readings, then identifies which value changes for each motion.

### H

**See Also:** [Gyroscope Orientation Data Explorer](sims/gyroscope-orientation-data-explorer/index.md)

### H

### H

#### Halloween Costume Lighting

An application of the Moving Rainbow kit to a wearable costume, most often swapping the rainbow's full color range for a narrower palette of orange and purple, or adding a strobe-style flicker instead of a smooth fade.

**Example:** A student wraps a NeoPixel strip around a cape and reprograms the usual rainbow fade to alternate orange and purple with a slow strobe for the club's October session.

#### Handling Frustration

A mentor's first-response skill: noticing the early signs that a student is nearing a give-up point -- folded arms, silence, muttering "this is stupid," or redoing the same failed step three times without changing anything.

**Example:** A student whose robot keeps veering left slams a hand on the table and says nothing.

#### Hands On Learning

Learning through direct action, such as writing code, wiring a circuit, or testing a robot. Immediate results help learners connect abstract ideas with observable behavior.

#### Headphone Management

The practice of keeping a shared set of headphones sanitized between students, stored in a labeled bin, and replaced when broken -- extending device cleaning routine to an accessory that touches a different student's ears every session.

**Example:** Between two back-to-back sessions, a mentor wipes down twelve headsets with sanitizing wipes and returns each one to its numbered slot in the storage bin before the next group arrives.

#### Holiday Light Pattern

A pattern that adapts the same strip to a winter-holiday palette — most commonly alternating red and green — and often borrows a "chase" effect where only a handful of lit pixels appear to travel down an otherwise dark strip.

**Example:** For the December session, a club swaps its usual rainbow code for one that alternates red and green pixels and adds a chase effect that appears to travel down the strip.

#### Holiday Schedule Planning

The decision, made well in advance, of which sessions get skipped for holidays and school breaks, published as early as possible so families aren't caught off guard by a canceled session they expected to attend.

**Example:** The organizer applies holiday schedule planning to the next event, communicates the details to families and mentors, and records issues for the retrospective.

#### Human In The Loop Review

The specific workflow requirement that no AI-drafted output reaches its destination without passing through an actual person's approval step first.

**Example:** An agent drafts a cancellation notice, but the event leader verifies the closure, edits the message, and approves the recipient list before sending.

**See Also:** [Human-in-the-Loop Review Workflow](sims/human-in-the-loop-review-workflow/index.md)

#### Humidity Sensor

A sensor that measures the amount of water vapor in the surrounding air, reported as a percentage called relative humidity (%RH).

**Example:** If that same air contacts an exposed circuit board that has cooled below the dew point, for instance sitting near an open window on a cold morning, water condensation can form directly on the board, which is a real short-circuit and corrosion risk.

#### Hybrid Club Model

A club structure, increasingly practical, that blends in-person mentoring sessions with AI-assisted tools handling communication, registration, and content preparation between sessions.

**Example:** Students build hardware together at the library, then join an optional online help hour to finish code from home.

### I

### I

#### Immigrant Family Outreach

An outreach effort that goes beyond translated materials and language accessibility alone: building an ongoing relationship with the specific organizations an immigrant community already relies on, such as a resettlement agency, an ESL program.

**Example:** A caseworker or association leader who vouches for a club in person, even briefly, often does more than any printed material translated into a family's home language.

#### In Kind Donation

A noncash contribution of goods or services, such as laptops, meeting space, printing, or professional time. The club records condition, restrictions, usefulness, and fair value when required.

**Example:** Failing to log it understates how much support a club is actually receiving.

#### Incident Reporting Process

The specific procedure for documenting a physical injury or safety incident -- distinct from the conflict resolution process, which handles interpersonal disputes rather than injuries.

**Example:** After a student pinches a finger in a breadboard clip, the mentor fills out the incident report before the student leaves, noting the time, the first-aid given, and whether a parent was called.

#### Inclusive Marketing Materials

Flyers, web pages, images, and registration forms that welcome varied genders, cultures, languages, abilities, and income levels. They avoid stereotypes and clearly show available access support.

**Example:** A marketing piece is inclusive when someone outside the existing mentor team, ideally from a community the club wants to reach, reviews it before it goes out, not only when it looks diverse to the person who made it.

#### Individual Device Account

A personal login assigned to one learner on a specific or shared device. Separate credentials, files, settings, and permissions protect work from other users.

**Example:** Maya signs in with her own account and finds her Python files unchanged even though three students used the laptop that day.

#### Influence Graph Concept

A network map where nodes represent people, organizations, or venues in a community -- a PTA email list, a faith congregation, a local meetup -- and edges represent a trust or reach relationship between them, such as which organizer's recommendations a group already trusts.

**Example:** A club's influence graph includes a node for its own PTA email list, connected to the families who already receive its announcements, and a separate, unconnected node for a nearby afterschool program the club has never reached.

**See Also:** [Mentor Recruiting Influence Graph](sims/mentor-recruiting-influence-graph/index.md)

#### Informal Learning

Learning that happens outside a structured curriculum, driven by the learner's own curiosity rather than a syllabus.

**Example:** While debugging a robot, one student shows another how a sensor threshold works without a lecture or graded assignment.

#### Insurance Considerations

Questions about which policies cover the club, venue, volunteers, participants, equipment, and activities. Leaders confirm coverage, exclusions, limits, certificates, and reporting duties with qualified advisers.

**Example:** Before booking an off-site robotics competition, an organizer checks whether the club's liability policy covers the venue and asks the host for a certificate of insurance naming the club.

#### Intelligent Textbook

A digital textbook that goes beyond static text and pictures by embedding interactive simulations, adapting to what a learner already knows, and organizing its content around an explicit map of how concepts depend on each other.

**Example:** A learner changes a simulated mentor ratio, observes the capacity result, and follows a recommended prerequisite when the explanation is unclear.

**See Also:** [Levels of Intelligent Textbook Sophistication](sims/book-levels/index.md)

#### Interactive Simulation

The broader category MicroSims belong to: any simulated environment a learner can manipulate and observe.

**Example:** A vis-network graph that a student can drag and click to see how concepts connect is an interactive simulation, even though it isn't built with p5.js like most of this book's MicroSims.

#### Interest Survey Analysis

The process of turning raw responses into a decision: counting how many families gave a genuinely positive answer rather than polite interest.

**Example:** Of 40 survey replies, a mentor counts only the 22 that checked "yes, sign up now" as real interest, setting aside 10 vague "maybe" responses before deciding whether to launch the club.

**See Also:** [Interest Survey Results](sims/interest-survey-results/index.md)

#### Intermediate Track Curriculum

A learning sequence for students ready to move from block-based projects into text programming, combining variables, loops, conditionals, functions, and structured debugging.

**Example:** After finishing block-based Scratch projects, a student moves into the intermediate track and writes a Python program that uses a loop and an if-statement to sort a list of numbers.

#### Intrinsic Motivation

The drive to do something because the activity itself is satisfying -- curiosity, the pleasure of solving a puzzle, or pride in making something work -- with no external reward required.

**Example:** A student's robot keeps veering left instead of driving straight, and pickup time arrives before the bug is fixed.

**See Also:** [Intrinsic vs Extrinsic Motivation Map](sims/intrinsic-vs-extrinsic-motivation-map/index.md)

#### Inventory Audit Process

A repeatable sequence of actions for completing inventory audit with clear responsibilities and records. Defining the sequence reduces omissions and makes missing or damaged equipment easier to catch before it disrupts a session.

**Example:** Each semester, a mentor checks the storage shelf against the master equipment list, noting every kit that is missing, damaged, or filed in the wrong bin.

#### Inventory Sticker Printing

The process of printing a small, durable, sequentially numbered label -- typically from a sheet of adhesive labels through a home printer or a dedicated label maker.

**Example:** A mentor prints labels reading KIT-001 through KIT-024 on a sheet of adhesive labels and sticks one on each robotics kit's lid before the semester starts.

#### IoT Project Kit

A connected-device project set containing sensors, a network-capable controller, and software for sending measurements to a dashboard or service. Privacy and network security remain part of the lesson.

**Example:** An IoT project kit's defining trait is what it measures, not where the data ends up: conditions in a room over time, rather than a single momentary reading a student checks once and moves on from.

#### IT Volunteer Role

The defined responsibilities, authority, and expected contributions of the IT volunteer within the club. Clear boundaries help people coordinate work and know when to seek support.

**Example:** The IT volunteer arrives early to charge and image the laptops before a session but leaves troubleshooting a student's home Wi-Fi to the family.

### J

### J

#### Jumper Wire

A short, flexible wire with a connector on each end, used to carry a connection between two breadboard holes, or between a breadboard and a component like a microcontroller pin.

**Example:** Most experienced mentors also settle on a simple color convention early and stick to it across every kit in the club — red wires for the positive power rail, black or blue for ground, and any other color for signal wires such as a button or sensor connection.

### K

### K

#### Keyboarding Skills

Basic touch-typing proficiency, since a student who has to hunt for each key struggles far more with the mechanics of typing than with the actual logic of the code they're writing.

**Example:** A student who still hunts for each letter takes ten minutes to type a five-line function, growing frustrated well before the code's logic is actually the problem.

#### Kit Assembly Instructions

The ordered, written steps that accompany every kit in the club's bins, specifying which wires connect to which pins, in what order, and what a correctly wired kit should do the moment it is powered on.

**Example:** A laminated card in each sensor kit's bin walks a student through connecting three wires in order and shows a photo of the LED that should blink once the wiring is correct.

#### Kit Bulk Purchasing

Ordering several identical kits in a single order rather than restocking one or two at a time, which typically unlocks a lower per-unit price and -- just as valuable.

**Example:** A club buying microphone kits three separate times across a semester risks three subtly different board revisions in the same bin; a club buying twelve at once gets twelve identical boards that all match one wiring diagram.

#### Kit Code Template

A short, working starter program included with a kit that a mentor runs first to confirm the wiring and hardware are working. It saves setup time and gives a known-good baseline before students write their own code.

**Example:** A code template's job is to prove the wiring works, separately from proving a student's own code works; mixing the two together is what turns a simple wiring mistake into a confusing debugging session.

#### Kit Component Checklist

A concise list of items or actions used to verify kit component before work is considered complete. It prevents memory-based omissions and supports consistent club practice.

**Example:** Discovering that gap during a five-minute morning check costs nothing; discovering it after a student has already wired three of the four needed connections and is waiting on a mentor to find a fourth wire costs real session time and a student's patience.

#### Kit Cost Comparison

An analysis that looks past a kit's sticker price to its full cost per session actually delivered: the purchase price plus shipping and any one-time tools.

**Example:** Once a mentor starts thinking in cost-per-session instead of price-per-kit, a lot of "which kit should we buy" decisions get a lot less subjective.

#### Kit Damage Assessment

The judgment call a mentor makes about a returned kit's condition: whether a problem, if one exists, is purely cosmetic, an easy fix like a loose or bent pin.

**Example:** Before writing the module off as dead, the mentor works through the debugging guide's first two fixes -- checking the power light, then reseating each jumper wire -- and discovers one wire had backed halfway out of its socket during transport.

#### Kit Debugging Guide

A troubleshooting reference organized by symptoms, likely causes, safe tests, and verified fixes for one project kit. It begins with power, wiring, and known-good code checks.

**Example:** When a display stays blank, the guide directs the learner to verify power, check the cable order, run known-good code, and then swap the display.

#### Kit Difficulty Rating

A consistent estimate of the knowledge, assembly, coding, debugging, and supervision a project kit requires. Ratings help leaders match kits with learners and mentors.

**Example:** A gyroscope kit that reports three separate axis numbers a student must interpret together rates higher than a microphone kit that reports one obvious loudness value, even though both wire up in a similar number of steps.

#### Kit Documentation Sheet

A one-page record kept with a kit that lists its contents, purpose, setup steps, known issues, and links to current instructions or code.

**Example:** The mentor who originally wired and tested the club's one gyroscope kit is out sick the morning of a session.

#### Kit Loaner Program

A controlled way for students or mentors to borrow project kits outside sessions. Checkout records, due dates, care instructions, and replacement rules protect access.

**Example:** A student who wants to keep experimenting between sessions signs out a gyroscope kit; the sign-out log records the student's name, the kit's ID, the date it left, and a two-week due date.

#### Kit Return Process

A repeatable sequence of actions for completing kit return with clear responsibilities and records. Defining the sequence reduces omissions and makes reusable project kits and classroom hardware easier to sustain.

**Example:** A student checks a Moving Rainbow kit back in at the end of session, and the mentor confirms every wire and part is present before marking it returned in the log.

#### Kit Reuse Strategy

A chosen approach for improving kit reuse over time by linking goals with priorities, resources, and measures of progress. It guides decisions rather than prescribing every action.

**Example:** At a $12 purchase price divided across thirty sessions, that kit now costs the club $0.40 per session and shows no sign of needing anything more than continued reuse.

#### Kit Safety Checklist

A concise list of items or actions used to verify kit safety before work is considered complete. It prevents memory-based omissions and supports consistent club practice.

**Example:** Before the next session, leaders document the kit safety checklist, assign an owner, and review it with the volunteers who will use it.

#### Kit Storage Bin

A labeled container assigned to one kit or kit type, with compartments for small parts and a checklist showing what belongs inside.

**Example:** An unlabeled box of loose parts forces a mentor to open several bins and guess; a storage bin labeled with the kit's name and difficulty rating turns that search into a two-second glance.

#### Kit Unboxing Procedure

A repeatable intake process for opening a new kit, matching parts to the packing list, inspecting damage, recording identifiers, labeling storage, and testing a basic build.

**Example:** A mentor opens ten microphone kits, checks every part against the list, records missing cables, labels the bins, and runs one test program per kit.

#### Kit Upgrade Path

A planned sequence of optional components or challenges that extends a working kit without forcing the club to replace its core hardware.

**Example:** A mentor rewrites the code template to convert and print degrees instead -- the hardware never changes, but the documentation sheet and code template both get replaced across every bin on the shelf, and the confusion stops.

#### Kit Vendor Selection

The deliberate comparison of suppliers before ordering a kit's parts, weighing unit price against shipping time, part-quality consistency between orders.

**Example:** Two vendors selling what looks like the identical sensor module online can ship boards with different pin orders printed on the silkscreen, which turns a five-minute wiring job into a confusing troubleshooting session the first time a mentor assumes last time's datasheet still applies.

#### Kit Wiring Diagram

A visual reference showing exactly how a kit’s controller, power, sensors, and outputs connect. Labels and wire colors help learners reproduce a known-safe circuit.

**Example:** Two of the club's gyroscope kits came from different vendor batches with SDA and SCL swapped on the physical board.

**See Also:** [Moving Rainbow Wiring Diagram](sims/moving-rainbow-wiring-diagram/index.md)

#### Knowledge Transfer Process

The deliberate set of techniques -- shadowing, co-leading, and structured handoff conversations -- used to move that harder-to-write-down knowledge from one person's head into a successor's, since no checklist alone can transmit judgment.

**Example:** An outgoing club leader co-leads three sessions with her chosen successor, narrating small decisions out loud, like which student to check on first, that a checklist would never capture.

### L

### L

#### Language Accessibility

Making sure a family who speaks a language other than English at home can understand what the club is, when it meets, what it costs, and how to sign up.

**Example:** A club's registration confirmation arrives only in English, and a parent who reads Vietnamese comfortably but not English cannot confirm the meeting time without asking a bilingual neighbor each week.

#### Laptop Configuration

The one-time setup every laptop goes through after purchase and before its first student session: installing required software, connecting the machine to the club's management console.

**Example:** A club leader hands out six brand-new Windows laptops on day one without configuring them first, only to discover mid-session that none of them have the Arduino IDE installed and three still have factory-default admin accounts logged in.

#### Laptop Purchasing

The decision a club leader makes, usually once per grant cycle, about which computer platform to buy for student use -- weighing purchase price against how easily one person can manage many units.

**Example:** Choosing a laptop platform for a club is a lot like choosing vehicles for a small delivery business.

#### Leaderboard Consideration

The deliberate weighing of whether, and how, to use a public ranking of student performance -- a real decision, not a default.

**Example:** Before posting weekly challenge times on a whiteboard, a mentor weighs whether ranking all fourteen students publicly will motivate the top three or discourage the bottom three.

#### Leadership Pipeline Development

A longer question: which certified mentors show early signs of being able to run the entire club, and how does a club hand them incrementally larger responsibility long before any actual departure is imminent?

**Example:** Leadership pipeline development asks a longer question: which certified mentors show early signs of being able to run the entire club, and how does a club hand them incrementally larger responsibility long before any actual departure is imminent?

**See Also:** [Mentor Development Pipeline](sims/mentor-development-pipeline/index.md)

#### Leadership Succession

The deliberate practice of preparing a second and, ideally, a third person capable of running the club solo, well before any departure is imminent -- so that when a leader does eventually step back.

**Example:** A club's founding leader spends a full year co-leading sessions with two mentors so that either one could take over solo if she had to step away suddenly.

#### Learning Graph

A directed graph where each concept is a node and each edge records a dependency, such as "Club Charter depends on Coding Club." Every chapter in this book, including the one you are reading.

**See Also:** [Learning Graph Viewer](sims/graph-viewer/index.md)

#### Learning Map

A visual chart showing every challenge card or skill a club offers, arranged to show which builds on which -- a student-facing version of the skill progression ladder.

**Example:** A poster by the door arranges all thirty challenge cards from Beginner to Advanced, with arrows showing that a student needs the LED Blink card before attempting the Traffic Light card.

#### Learning Map Display

An electronic output device used to present learning map through text, numbers, color, or graphics. Its interface, power needs, and readable viewing distance shape project design.

**Example:** Displaying a map publicly can motivate through visible momentum, but it only works when what's on display is a student's own progress against their own path, not a ranking against everyone else's.

#### LED Basics

The introductory facts, vocabulary, and safe practices needed to begin working with led. This foundation supports supervised practice before learners attempt more complex tasks.

**Example:** A student holding an LED with legs of clearly different lengths orients the longer leg toward the resistor-fed positive column of the breadboard and the shorter leg toward the negative power rail.

#### LED Matrix Display

A grid arrangement of individual LEDs — most commonly 8 rows by 8 columns, 64 LEDs total — each of which can be switched on or off independently to build up a pattern, letter, or simple animation.

**Example:** Rather than wiring all 64 LEDs to 64 separate microcontroller pins, a driver chip such as the MAX7219 handles the wiring internally and lets code control the whole grid using just a few pins.

**See Also:** [LED Matrix Pattern Designer](sims/led-matrix-pattern-designer/index.md)

#### LED Noodle Project

A project that takes the same NeoPixel strip concept and threads it through a length of translucent plastic or fabric tubing — the "noodle" — which diffuses each pixel's sharp point of light into a soft glow.

**Example:** A mentor introducing this project for the first time often demonstrates both versions side by side — the bare strip and the noodle-wrapped strip running the identical code — so students see directly that the diffuser, not the program, is what changed the strip's whole visual character.

#### LED Strip Wiring

The power, ground, and data connections required between an addressable LED strip and its controller. Correct voltage, shared ground, connector direction, and pin assignment prevent damage and errors.

**Example:** A club sticking to its stock kit size never needs to make this change, but it is worth a mentor knowing before a student proposes wrapping a strip around an entire classroom doorway.

#### Legal Compliance Basics

The handful of legal questions worth a quick check before a club operates formally: whether the club needs its own tax identification number or can operate under a host organization's existing nonprofit status.

**Example:** Before opening registration, a club leader confirms with the host library whether the club can operate under the library's existing nonprofit status or needs to apply for its own tax identification number.

#### Lesson Sequencing

The ordering of lessons so each activity uses knowledge learners have already developed. Keyboarding can precede Scratch, while variables and loops can precede functions and larger Python projects.

#### Lessons Learned Log

A running, organized record of patterns across sessions -- recorded together, they become something more useful: evidence.

**Example:** After three separate sessions end with kits missing return cable ties, a mentor's log flags the pattern, and the next kit order includes twice as many ties.

#### Level Up System

A coordinated combination of people, tools, records, and procedures used to track and reward a learner's progress through levels. Its parts work together to support reliable decisions in student motivation, persistence, and recognition.

**Example:** A level change gives a student a discrete, nameable milestone to reach for, which a slowly climbing point total on its own does not.

#### Leveraging AI Agents

Matching a specific club task to the specific kind of agent built for it, rather than expecting one general-purpose tool to handle everything from drafting an email to building next semester's calendar equally well.

**Example:** One agent drafts reminders, another checks registration capacity, and a third proposes schedules; leaders review each output under task-specific rules.

#### Liability Considerations

What happens if something goes wrong despite those precautions: which insurance policy -- the club's own general liability policy, a volunteer accident policy, or the venue's existing coverage.

**Example:** Before robotics sessions begin, the venue and club clarify insurance, supervision duties, equipment risks, and who may authorize activities.

#### Library Coding Club

A coding club hosted by a public or school library, usually using the library’s community access, meeting space, devices, and staff relationships to reach local families.

**Example:** A branch library sets aside its meeting room every other Tuesday afternoon for a coding club, drawing kids whose own schools don't offer one.

#### Library Funding Partnership

A cooperative relationship formed to support library funding through shared resources, expertise, access, or credibility. A useful partnership has mutual benefit and documented expectations.

**Example:** A library provides the room and staff time while the club raises money for kits, giving both partners clear responsibilities and reducing duplicated costs.

**See Also:** [Funding Partnership Fit Map](sims/funding-partnership-fit-map/index.md)

#### Library Partnership Outreach

An outreach approach that works similarly for library-hosted or library-adjacent clubs, where a children's librarian who personally recommends the club to families checking out books reaches exactly the families most likely to attend.

**Example:** A children's librarian mentions the coding club to every family checking out a STEM book for a month, and three new students show up the following Tuesday.

#### Light Sensor

Most commonly a photoresistor or light-dependent resistor (LDR), a component whose electrical resistance changes with the amount of light falling on it — resistance drops as light increases, a property called photoconductivity.

**Example:** A typical LDR reads roughly 1,000 ohms in bright daylight and can climb past 200,000 ohms in near darkness, a huge swing that makes it easy to detect even modest changes in brightness.

#### Light Temp Humidity Monitor

An environmental project that periodically reads light, temperature, and humidity sensors and displays or stores the results. Comparing readings over time reveals patterns in a room.

**Example:** A student sets the monitor on a windowsill at the start of a two-hour club meeting, and a short program appends one line — timestamp, light level, temperature, and humidity — to a simple list every sixty seconds.

#### Lighting Considerations

Both enough light to read a challenge card clearly and low enough glare that a screen remains readable.

**Example:** A club meeting in a repurposed garage keeps the overhead lights on and angles a couple of clip lights toward the workbenches, avoiding the glare that direct sunlight through the garage door would otherwise throw across laptop screens.

#### Limiting Students By Mentors

The resulting math made explicit -- eight confirmed mentors means a hard cap of twenty-four students at 3:1.

#### Live Coding Demonstration

The mentor-led version without student typing: watching a mentor build something in real time, including the mentor's own mistakes and how they debug them, which is often more instructive than a polished, pre-written example.

**Example:** A mentor introduces live coding demonstration through a short demonstration, lets learners try a related challenge, and asks them to explain what changed and why.

#### Local Company Partnership

A cooperative relationship formed to support local company through shared resources, expertise, access, or credibility. A useful partnership has mutual benefit and documented expectations.

**Example:** The relationship usually involves more give-and-take than a sponsorship check: the business commits people or materials, not just money, and the club commits visible, consistent recognition in return.

#### Local Media Coverage

A segment on a local news program or a mention in a community newspaper that can reach families no direct outreach channel touches.

**Example:** A club leader emails a two-paragraph pitch to the education reporter at the local paper before an open house event; the resulting article brings in four new sign-ups the following week.

#### Lost Item Policy

A documented rule that explains how the club handles lost item, who is responsible, and what participants can expect. It promotes consistent, fair decisions in oversight, leadership continuity, and club sustainability.

**Example:** The kit turns up on day nine, still zipped inside a student's backpack from a session two months earlier, and gets logged as returned rather than lost -- the policy's grace period is exactly what kept an honest, unremarkable delay from turning into an accusation.

#### Low Income Family Support

The specific accommodations a club makes so that a family's income never determines whether their student can participate -- not just waiving a registration fee.

**Example:** A club charges no registration fee but asks each family to bring a $15 supply kit for the first project.

### M

### M

#### MacOS Device Management

Administering a fleet of Apple laptops individually or through a paid mobile-device-management (MDM) tool, applying the same kinds of software installation and security settings as Windows management but through Apple's own configuration tools.

**Example:** A club receives a single donated MacBook alongside its usual Chromebook fleet.

#### Maker Space

A shared workshop stocked with tools like 3D printers, soldering irons, and laser cutters, open to makers of any age working on any project.

**Example:** A club without its own laser cutter reserves two hours at the public library's maker space so students can cut acrylic enclosures for their robot builds.

#### Makeup Session Policy

What happens to a canceled session's content -- whether it is simply skipped, folded into the next session, or rescheduled as a standalone add-on -- decided ahead of time rather than improvised the day a cancellation happens.

**Example:** When a winter storm cancels a Tuesday session, the club's written policy already says the missed robotics challenge rolls into the following week instead of being dropped.

#### Managing Email Communication

The practice of sending and organizing the club's outgoing messages -- session reminders, schedule changes, newsletters -- from an account and process the whole club can rely on.

**Example:** A club's email approach usually falls into one of three tiers, each trading setup effort for capability.

#### Meeting Agenda Design

The practice of breaking that first session into short, clearly bounded blocks rather than one long unstructured stretch, since new students and nervous parents both benefit from visible structure.

**Example:** A first session budgets ten minutes for welcome and icebreakers, twenty for a guided build, and the final five for cleanup and a preview of next week's project.

#### Membership Fee Model

A simplified representation of how a club's membership fee, number of paying families, and total costs relate to one another, used to check whether a proposed fee will cover the budget. Its assumptions and limits should remain visible.

**Example:** A club sets a flat $10-per-month membership due, collected from 10 participating families across a nine-month school year, bringing in $900 -- comfortably covering the $830 recurring budget with a small cushion left over.

**See Also:** [Membership Fee Model Comparison](sims/membership-fee-model-comparison/index.md)

#### Mentor

Any screened adult volunteer who guides students directly during a session -- the role, and the single concept every other idea in this book's learning graph connects back to more than any other.

**Example:** A retired software engineer who passes a background check and commits to Tuesday evenings for a semester, pairing with the same three students each week, is a mentor.

#### Mentor Appreciation

The deliberate, regular practice of thanking mentors specifically and publicly -- a shoutout in the newsletter, a small end-of-term gift, or simply the club leader personally naming what a mentor did well that session.

**Example:** At the last session of the fall term, the club leader reads a short note thanking each of the six mentors by name before handing out small gift cards.

#### Mentor Attendance Tracking

Attendance tracking applied the same way to volunteers, so the two together let a club leader spot a real-time ratio problem -- five mentors and eighteen students present tonight is a 3.6:1 ratio worth noting.

#### Mentor Availability Tracking

The ongoing record of which mentors can attend which specific sessions, since a mentor who's nominally "active" but rarely actually shows up doesn't really count toward that session's real capacity.

**Example:** A mentor listed as active hasn't signed up for a session in over a month, so the availability tracker excludes them from Friday's mentor count even though their name is still on the roster.

#### Mentor Burnout Prevention

Watching for the early signs of volunteer fatigue -- a normally reliable mentor missing sessions, seeming short-tempered, or mentioning they're "stretched thin" -- and proactively reducing their load before they quit altogether.

**Example:** After a mentor who has never missed a Tuesday skips two sessions in a row, the club leader quietly reassigns her from leading two stations to just one for the rest of the term.

#### Mentor Capacity Planning

Calculating, at any point in time, how many students the club can responsibly serve given its current mentor count -- a club with nine active mentors can serve up to twenty-seven students at 3:1.

#### Mentor Certification Program

A program that assigns every mentor a named tier -- typically Trainee, Certified, and Lead Mentor -- based on specific, checkable criteria, and each tier unlocks a specific new responsibility rather than serving as a badge with no practical effect.

**Example:** A mentor certification program assigns every mentor a named tier -- typically Trainee, Certified, and Lead Mentor -- based on specific, checkable criteria, and each tier unlocks a specific new responsibility rather than serving as a badge with no practical effect.

#### Mentor Check In Routine

A short, repeated set of actions used to handle mentor check in consistently. A predictable routine reduces confusion and preserves time for supporting mentors, students, parents, and volunteers.

**Example:** Each mentor arrives ten minutes before students, signs the volunteer log, and picks up that day's session plan and any kits already staged on the shelf.

#### Mentor Coaching AI Agent

An AI tool that suggests questions, feedback, or teaching strategies to help mentors support learners. Its guidance supplements training and never replaces safeguarding or human judgment.

**Example:** A mentor describes a learner stuck on loops, and the agent suggests three guiding questions instead of supplying finished code.

#### Mentor Communication Log

A dated record of assignments, availability, feedback, and follow-up messages for mentors. It helps different leaders coordinate without repeatedly asking volunteers for the same information.

**Example:** Where the parent log tracks what a family and the club discussed, the mentor log tracks the club's relationship with the volunteers who run its sessions.

#### Mentor Feedback Collection

A short, periodic check-in -- a quarterly survey or a casual conversation -- asking mentors what's working and what's frustrating them, feeding directly into the lessons learned log.

**Example:** A quarterly survey asks mentors which activities need better instructions, what training they want, and whether the schedule remains manageable.

#### Mentor Gated Enrollment

A registration rule that opens student places only after enough mentors commit. Each added mentor releases a defined number of seats based on the club’s supervision ratio.

**Example:** The organizer applies mentor gated enrollment to the next event, communicates the details to families and mentors, and records issues for the retrospective.

#### Mentor Interview Process

A second, earlier layer wrapped around that trial: a short, structured set of questions -- the same five or six for every candidate -- scored against a simple rubric.

**Example:** The mentor interview process wraps a second, earlier layer around that trial: a short, structured set of questions -- the same five or six for every candidate -- scored against a simple rubric, so two different people interviewing the same candidate independently reach the same conclusion.

#### Mentor Pairing Consistency

The same mentor working with roughly the same small group of students week after week, rather than a different mentor rotating through every session.

**Example:** The same mentor works with the same table of four students every Tuesday for the whole semester, rather than being reassigned to a different group each week.

#### Mentor Peer Support Program

A structural version of that same protection that does not depend on the founder noticing: pairing a newer mentor with a veteran for regular check-ins.

**Example:** At the club's monthly mentor-only debrief -- a standing thirty-minute meeting with no founder present -- two veteran mentors share nearly identical stories from their own first few months and offer a specific fix for the malfunctioning kit.

#### Mentor Praise Technique

A feedback method that names the specific strategy, effort, question, or improvement worth repeating. Specific praise gives learners more useful information than general approval.

**Example:** Instead of saying "good job," a mentor says, "I like how you tested your loop with three different starting numbers before trusting it."

#### Mentor Role

The position in a club's governance structure that sits between the Volunteer Coordinator Role, which recruits and schedules mentors, and the students and parents a mentor works with directly during a session.

**Example:** On the club's governance chart, an arrow labeled "recruits, screens, and schedules" runs from Volunteer Coordinator Role to Mentor Role, and a second arrow labeled "guides directly during sessions" runs from Mentor Role to Student Role.

**See Also:** [Club Governance Map](sims/club-governance-map/index.md)

#### Mentor Skill Matching

Pairing a specific mentor's strengths -- a professional mentor's deep Python knowledge, a peer mentor's patience with total beginners -- to the students or stations where that strength matters most.

**Example:** A club leader sends its one professional software engineer to the advanced robotics table and puts a patient high-school peer mentor with the three newest first-graders.

#### Mentor Student Rapport

A trusting working relationship in which a learner feels safe asking questions and a mentor understands how to challenge, encourage, and communicate with that learner.

**Example:** A student who once only nodded when asked if she understood starts telling her mentor exactly which line of code is confusing her.

#### Mentor To Student Introduction

A deliberate, name-based greeting from the mentor who will be working with them that session, directly reinforcing the walk-in experience and first impression design.

**Example:** As a new student walks in, the mentor assigned to her table crouches to eye level and says, "Hi, you must be Mia -- I'm Mr. Chen, and we're building a NeoPixel strip today," before anything else happens.

#### Mentor Training Curriculum

The fixed sequence of topics every new mentor works through before running any part of a session unsupervised -- electrical safety rules, the specific kits they'll support, the club's optional-attendance philosophy.

**Example:** Week 2 covers the club's philosophy and communication techniques, including a role-play where the trainee explains a wiring mistake to a "student" played by a veteran mentor.

#### Microphone Kit

A project set containing a microphone module and controller code for measuring sound level or sampling audio. Recording speech requires clear privacy rules and consent.

**Example:** A student wires the microphone kit to a Pico and watches a raw loudness number climb sharply the instant someone claps nearby, then decay back toward a quiet baseline over the next second or two.

#### MicroPython Basics

Introductory knowledge for using the Python-based MicroPython language on microcontrollers, including running scripts and controlling hardware pins with limited memory and processing power.

**Example:** Most of the Python syntax a mentor may already know carries over unchanged — variables, if-statements, and functions all look the same — but MicroPython trades away Python's larger libraries in exchange for fitting inside a few hundred kilobytes of memory.

#### MicroPython Loop

A control structure that repeats a block of code a fixed number of times or until a condition changes, and the single most-used structure in every Moving Rainbow and robot program this book covers.

**Example:** A loop's range is also where most students introduce their first bug: writing range(1, 30) instead of range(30) skips pixel index 0 entirely, since MicroPython counts pixel positions starting at zero, not one.

#### MicroPython Syntax

The small set of punctuation and formatting rules — colons, indentation, and parentheses — that MicroPython inherits directly from Python and that determine whether a program runs at all or fails with an error before doing anything.

**Example:** Two mistakes account for the overwhelming majority of syntax errors a mentor will see across a season.

**See Also:** [MicroPython Syntax Checker](sims/micropython-syntax-checker/index.md)

#### MicroSim

A small, focused, interactive simulation -- typically built with p5.js, vis-network, or a similar web library -- that lets a learner manipulate parameters and immediately see the result.

**Example:** A MicroSim shows a slider for the number of NeoPixels in a strip; dragging it redraws the strip instantly so a student can see how the pixel count changes the pattern before ever touching real hardware.

#### Mixed Age Grouping

The practice of intentionally placing students of different ages together -- often pairing an older, more experienced student with a younger one.

**Example:** A twelve-year-old who finished the Moving Rainbow project last term is paired with a seven-year-old building it for the first time, and ends up explaining loops in words that click better than the mentor's.

#### Monitors Facing Inward

Every laptop or display screen oriented so its back faces the room's outer wall and its screen faces toward the center, which lets a mentor standing anywhere in the room see every student's screen at a glance.

**Example:** Tables are arranged in a horseshoe so every laptop lid faces the middle of the room, letting a mentor standing by the door spot a stalled screen from across the room.

#### Motion Kit

A project set using an accelerometer, gyroscope, or both to detect movement and orientation. Programs translate changing axis readings into actions or displays.

**Example:** A student walks across the room holding the kit and watches the on-screen graph spike each time their foot hits the ground.

#### Motion Sensor

A component, most commonly a PIR (passive infrared) sensor, that detects movement by sensing changes in infrared radiation — the heat naturally given off by a warm body — passing across its field of view.

**Example:** Most PIR modules include a cooldown period, typically 2 to 5 seconds, during which the sensor ignores further motion after it fires once.

#### Motivating Students

The overall practice of shaping a club session -- its challenges, its feedback, its social atmosphere -- so that students want to keep participating rather than merely tolerating it until pickup time.

**Example:** A mentor motivates students by giving them real choices about what to build, making progress visible without making comparison painful, and responding to struggle in a way that keeps a student trying rather than quitting.

#### Motor Basics

The introductory facts, vocabulary, and safe practices needed to begin working with motor. This foundation supports supervised practice before learners attempt more complex tasks.

**Example:** A servo motor adds internal gearing and a feedback mechanism that lets it hold a specific angle, typically somewhere within a 0-to-180-degree range, rather than spinning continuously — well suited to a robot arm joint or a steering mechanism that needs to point somewhere and stay there.

#### Mouse And Keyboard Setup

Pairing an external mouse or keyboard to a laptop when the built-in trackpad or keyboard is impractical for a specific project.

**Example:** A club running a MicroPython breadboard project finds students' hands cramped between the laptop's built-in keyboard and the breadboard sitting right next to it.

#### Moving Rainbow Kit

A beginner physical-computing kit containing a microcontroller, addressable LED strip, wiring, and code for animated color patterns. It gives immediate visual feedback from small program changes.

**Example:** A student connects the kit's LED strip and controller, runs the starter program, and watches color sweep down the strip before changing one line to reverse its direction.

**See Also:** [Moving Rainbow Wiring Diagram](sims/moving-rainbow-wiring-diagram/index.md)

#### Moving Rainbow Pattern

A repeatable arrangement or programmed sequence for moving rainbow. Learners can vary parameters such as timing, order, color, or intensity to observe how behavior changes.

**Example:** The % 255 (modulo) keeps the number wrapping back to 0 once it passes 255, rather than growing forever — the same wraparound idea a student may recognize from an odometer rolling from 999999 back to 000000.

**See Also:** [NeoPixel Loop Pixel Stepper](sims/neopixel-loop-pixel-stepper/index.md)

#### Multi Session Series Planning

The process of setting goals and arranging people, time, resources, and contingencies for multi session series. It helps leaders act deliberately and adjust when conditions change.

**Example:** Before a ten-week semester begins, an organizer maps out which topics come first, lines up mentors for the weeks that need extra supervision, and sets aside one session as a buffer in case a meeting gets canceled.

#### Multi Site Expansion

The growth of one club program into two or more locations that share a mission and operating standards. Each site still needs local leaders, mentors, equipment, and community relationships.

**Example:** A second library starts only after it has its own trained leader, mentor pool, equipment set, and local registration process.

#### Multi Year Vision Plan

A plan that looks three to five years ahead rather than the one year an annual strategic plan covers -- describing a larger ambition, such as opening a second location, doubling enrollment.

**Example:** A club's multi-year vision plan sets a target of opening a second weekday location within four years, once its flagship Saturday program has run at full capacity for two consecutive terms.

#### Multimeter Usage

The safe use of a meter to measure voltage, resistance, continuity, or current. Learners select the correct mode and probe placement before touching a powered circuit.

**Example:** Continuity mode, specifically, tells you whether two points are electrically connected at all, by beeping when resistance between its two probes is very low.

### N

**See Also:** [Multimeter Usage Simulator](sims/multimeter-usage-simulator/index.md)

### N

### N

#### NeoPixel LED Strip

A length of flexible circuit board holding a row of individually addressable RGB LEDs, each one capable of showing its own separate color under program control.

**Example:** A program sets the first pixel red, the second green, and the third blue, then calls show to update the entire strip.

#### Network Bandwidth Planning

Estimating, in advance, how much total data a club's internet connection must carry at the busiest moment of a session -- every managed laptop browsing, streaming a tutorial video.

**Example:** Light web browsing needs roughly 1-2 Mbps per device, but a shared video tutorial playing on every laptop at once needs closer to 5 Mbps per device.

#### New Leader Onboarding

A structured handoff in which a successor studies procedures, observes operations, co-leads sessions, practices decisions, meets partners, and demonstrates readiness before assuming full authority.

**Example:** A successor first observes check-in, then co-leads a session, handles a simulated cancellation, meets the venue manager, and finally runs a supervised event.

#### New Student Placement

The deliberate decision of where a first-time student sits and which mentor introduces them.

**Example:** A club leader seats a shy new fourth-grader next to a friendly, talkative returning student and assigns the club's most patient mentor to make the first introduction.

#### Newsletter Automation

A templated digest -- upcoming dates, recent badge highlights, a reminder of the loaner-laptop policy -- generated and sent on a fixed schedule, such as the first of every month.

**Example:** A club that used to send an update "whenever something felt worth sharing" sent three emails in one busy month and none in the next two.

#### NightLight Project

A hands-on project in which learners build a circuit that turns on a light when a light sensor detects darkness, following a plan-build-test-revise cycle that produces working evidence of learning.

**Example:** A gyroscope, a microphone, and a light sensor all plug into that exact same three-step shape — once a student has built one threshold project, they have effectively built the skeleton for all of them.

#### No Fee Club Model

An operating approach in which a club provides its program to families without charging participation fees. Its assumptions and limits should remain visible.

**Example:** Families who joined specifically because the club was free feel misled, and two drop out.

#### No Show Policy

A documented rule that explains how the club handles no show, who is responsible, and what participants can expect. It promotes consistent, fair decisions in supporting mentors, students, parents, and volunteers.

**Example:** After a student misses three sessions in a row without notice, the policy moves their spot to the next family on the waitlist.

#### Noise Level Management

The practice of managing how loud a session gets, which matters more in a coding club than a typical classroom, since hands-on building naturally generates chatter and the occasional celebratory shout when an LED finally blinks correctly.

**Example:** When the room's chatter climbs high enough that a mentor two tables away can't be heard, the club leader flicks the lights once, a pre-taught signal that means everyone drops to a half-volume "library voice."

#### Nonprofit Fiscal Sponsorship

An arrangement in which an established 501(c)(3) nonprofit legally "hosts" a club's finances -- accepting tax-deductible donations and grants on the club's behalf -- because the club itself is not separately incorporated.

**Example:** A fiscal sponsor typically keeps a small percentage of funds received, often around 5%, as an administrative fee for the accounting and legal cover it provides.

#### Notification System

A coordinated combination of people, tools, records, and procedures used to manage notification. Its parts work together to support reliable decisions in responsible club data, communication, and progress tracking.

**Example:** A club sends one reminder email two weeks before a special weekend event, giving families time to plan around it, and a second, shorter reminder the day before, as a same-day-relevant nudge.

### O

### O

#### Offline Coding Environment

A downloaded editor that works better for a club with unreliable internet or a computer lab that restricts new software installs.

**Example:** A club that meets in a church basement with no reliable Wi-Fi installs Thonny on each laptop ahead of time so students can write and run MicroPython code without ever needing a connection.

#### Offline Mode Preparation

Installing and testing the offline-capable version of a club's coding tools -- a desktop app instead of a browser tab, a downloaded copy of a lesson instead of a live web page -- before a session.

**Example:** Before a session, staff download instructions, install local editors, copy starter files, and test a project with Wi-Fi disabled.

#### OLED Display

A screen technology — short for organic light-emitting diode — that produces its image from an array of individually lit pixels that each generate their own light directly, without needing a separate backlight the way older LCD screens do.

**Example:** Every pixel on a 128x64 OLED has an (x, y) coordinate, with (0, 0) at the top-left corner and (127, 63) at the bottom-right.

#### Onboarding New Mentors

The parallel process for adult volunteers -- walking a new mentor through the code of conduct and child safety policy, pairing them with an experienced mentor for their first two sessions.

**Example:** A brand-new mentor shadows a veteran mentor for her first two Tuesdays, running the attendance check-in herself only in week three.

#### Onboarding New Students

Extending that welcome into the first few sessions specifically: pairing a brand-new student with a returning student for peer support.

**Example:** A student's first Tuesday is spent seated next to a returning fifth-grader who shows him where the loaner laptops are kept and walks him through logging into the coding platform.

#### One On One Mentoring

A support arrangement in which one mentor works with one student for focused feedback or specialized help. Safeguarding rules still require visibility and appropriate adult oversight.

**Example:** A mentor spends fifteen minutes each week with one student who is behind on the LED badge, while another adult stays in the room to supervise.

#### One Time Cost Planning

The process of setting goals and arranging people, time, resources, and contingencies for one time cost. It helps leaders act deliberately and adjust when conditions change.

**Example:** A club buys six Chromebooks for $1,500 and books the entire amount as a one-time cost for the year.

#### Online Coding Platform

A tool that runs entirely in a browser with nothing to install, lowering the setup barrier for a club using shared or borrowed devices -- unlike an offline coding environment, which relies on a downloaded editor.

**Example:** The organizing team pilots a online coding platform with one session, checks accessibility and privacy, and expands its use only after volunteers can operate it reliably.

#### Online Registration Form

A form that collects the essentials in one place: student name and age, parent contact information, and a link or reference to the parental consent and photo release forms.

**Example:** The organizer applies online registration form to the next event, communicates the details to families and mentors, and records issues for the retrospective.

#### Open House Event

An event that invites the broader public in to see what the club does, often timed alongside a grand opening or anniversary event.

**Example:** A club holds its open house on the same Saturday afternoon as the community center's spring festival, so families already on-site wander in to watch a robot maze demo.

#### Oversight Board

A group responsible for reviewing a club’s direction, risks, finances, policies, and leadership continuity. It provides accountability without managing every session-level decision.

**Example:** A board is not simply "more adult supervision." A club can already have several capable mentors and still have zero governance, if every one of those mentors defers every real decision back to a single founder.

### P

**See Also:** [Oversight Board Org Chart](sims/oversight-board-org-chart/index.md)

### P

### P

#### Pair Programming

A practice that puts two students at one computer, one actively typing while the other watches and suggests, then switching roles -- a structured, formalized version of peer learning generally.

**Example:** Two students share one laptop for the NeoPixel challenge; one types the color-changing code while the other reads the instructions aloud and catches a missing colon, then they swap roles for the next challenge.

#### Parent Access Portal

A protected online view where authorized guardians can see selected registration, schedule, attendance, or progress information for their child and update allowed details.

**Example:** When that same parent tries to browse to another student's page by guessing a different link, the portal denies access, because view permissions are scoped to one family's own child, never to the roster as a whole.

#### Parent Communication Log

A dated record of important messages, questions, agreements, and follow-up with a student’s parent or guardian. Access is limited because entries may contain personal information.

**Example:** A different mentor, unaware of that earlier call, would otherwise ask the family the same question again at pickup -- but a quick glance at the communication log shows the conversation already happened, letting the mentor instead simply confirm the arrangement is still working.

#### Parent Perception

How a parent judges the club, which tends to focus on safety and organization cues: are there enough adults present, does someone know their child's name, does the space feel supervised.

**Example:** A parent dropping off her son for the first time notices within thirty seconds whether a mentor greets them by name at the door or whether no adult looks up from what they're doing.

#### Parent Role

The adults who consent to a student's participation, pick up and drop off, and receive communication about the club -- a parent is not typically present during a session.

**Example:** A father drops his daughter off at 4pm, signs the sheet at the door, and picks her up ninety minutes later without ever stepping into the session room.

#### Parent Volunteer Role

Often a club's most overlooked mentor source -- a parent already dropping off their own child has a built-in reason to be in the room.

**Example:** A parent who already waits in the lobby during drop-off is invited to sit in for the hour and help two students debug a stuck Scratch script instead of scrolling on a phone in the hallway.

#### Parental Consent Form

The signed document a parent completes before their child can participate. It gives adults a clear basis for safe and consistent decisions.

**Example:** A club leader keeps a binder of signed forms at the check-in table, so a new student is never waved into the room on a parent's verbal say-so alone.

#### Parental Control Software

Operating-system or device software that limits applications, features, content, schedules, or account actions for young users. Settings must match club policy and avoid unnecessary surveillance.

**Example:** The organizing team pilots a parental control software with one session, checks accessibility and privacy, and expands its use only after volunteers can operate it reliably.

#### Partnership Proposal Template

A reusable starting structure for partnership proposal with standard fields and prompts. It saves preparation time while allowing leaders to adapt details to local needs.

**Example:** A leader reuses the same template to pitch both the public library and a local hardware store, changing only the ask and the benefits section for each.

#### Passion Project Time

A block of session time set aside specifically for a student to work on something of their own choosing, with no assigned card and no required technical scope at all.

**Example:** On the last Friday of the month, a student who has finished every assigned card spends the full hour building a personal Scratch project about her cat instead of starting the next card in the deck.

#### Password Management For Kids

Age-appropriate strategies for helping young students create and remember passwords they can actually use -- such as a memorable three-word passphrase instead of a complex string of symbols.

**Example:** The fix is a club-kept password reset log a mentor can check quickly, so a forgotten password becomes a thirty-second mentor lookup instead of a security risk taped to the machine.

#### Pattern Recognition Skill

The ability to notice repeated structures, behaviors, or relationships across problems. Recognizing a familiar pattern can reveal a reusable strategy and reduce unnecessary work.

**Example:** After fixing the same off-by-one loop error in two different programs, a student spots it immediately in a third and fixes it before running the code.

#### Payment Processing For Fees

How money actually changes hands -- typically a built-in payment processor inside the registration platform rather than cash handled in person, which avoids both bookkeeping headaches and safety concerns around minors handling money.

**Example:** A family pays the term's fee directly through the registration platform at signup, and the mentor running the check-in table never has to touch cash or make change.

#### Peer Code Review

One student looking over another's code and suggesting improvements -- most effective once a student has enough working code to review, which is why it typically starts on the intermediate track.

**Example:** Leaders review a small set of relevant records each month and use the findings about peer code review to choose one measurable improvement.

#### Peer Learning

Students teaching and troubleshooting with each other rather than routing every question through a mentor.

**Example:** Two younger students compare their maze programs, and the one who solved the collision bug first walks over to explain it to her neighbor instead of raising a hand for the mentor.

#### Peer Mentor

An older student, typically a teenager, who mentors younger students -- less technically experienced than an adult mentor, but often better at explaining a concept the way another kid would actually understand it.

**Example:** A returning teenager helps a beginner find a Scratch timing bug while an adult mentor remains available and responsible for the group.

#### Peer Recognition Activity

A planned learner task centered on peer recognition with a clear purpose, time limit, materials, and expected participation. It should produce observable practice or reflection.

**Example:** In the last five minutes of a session, a mentor asks each student to turn to a neighbor and name one specific thing about their project they thought was clever.

**See Also:** [Showcase Wall vs Peer Recognition Activity](sims/showcase-wall-vs-peer-recognition/index.md)

#### Peripheral Device Management

Applying inventory and labeling principles to the smaller accessories that plug into a laptop -- headphones, mice, keyboards, storage drives.

**Example:** The IT volunteer tests peripheral device management on one device, documents the working configuration, and then repeats the verified steps on the remaining equipment.

**See Also:** [Peripheral and Storage Management Layers](sims/peripheral-management-layers/index.md)

#### Persistence Coaching

Encouragement language extended across time -- the pattern of language a mentor uses over multiple sessions to help a student keep returning to a hard problem instead of abandoning it after one bad week.

**Example:** Where handling frustration and encouragement language address a single moment, persistence coaching is about the arc: noticing when a student has quietly stopped trying something and reopening it deliberately.

#### Personal Project Choice

The specific mechanism of letting a student pick the topic or theme of a larger project -- within a mentor-set technical scope -- instead of assigning every student the same build.

**Example:** A mentor might require that every project use loops and a sensor, but leave open whether that sensor drives a pet feeder, a nightlight, or a game controller.

#### Photo Release Form

A related but distinct document specifically authorizing, or declining, the use of a student's photo, first name, or project footage in newsletters, social media, or promotional flyers.

**Example:** A parent checks "no" on the release form, so the club's newsletter shows her son's finished robot but crops out his face and leaves his name out of the caption.

#### Photography During Session

The controlled taking and use of session photos under the club’s consent rules. Photographers check permissions, avoid sensitive information, and store or publish images only as approved.

**Example:** Before taking pictures for the newsletter, a mentor checks the sign-in sheet and skips the one student whose family opted out of photos.

#### Physical Computing

The practice of building systems that sense or act on the physical world through electronic hardware controlled by code, rather than systems that only display information on a screen.

**Example:** A Scratch game that only reacts to mouse clicks stays on the screen, but a Raspberry Pi Pico project that lights an LED when a button is pressed reaches out into the physical world.

**See Also:** [The Physical Computing Loop](sims/physical-computing-loop/index.md)

#### Pilot Cohort

A small starting group of perhaps six to ten students that meets for the first several sessions, before the founding team opens enrollment further once it has confirmed the format actually works as planned.

#### Pivot Table Basics

The introductory facts, vocabulary, and correct techniques needed to begin working with a pivot table. This foundation supports supervised practice before learners attempt more complex tasks.

**Example:** Where COUNTIF answers one specific question at a time, a pivot table lets a mentor reshape the same underlying rows to answer many related questions just by changing which fields sit in the rows and columns.

**See Also:** [Pivot Table Builder](sims/pivot-table-builder/index.md)

#### Planning AI Agent

An AI tool configured to draft goals, task sequences, timelines, dependencies, or checklists from leader instructions. People verify assumptions and approve every commitment.

**Example:** A leader asks the agent to draft a six-week outline for a new robotics unit; the agent proposes weekly milestones and a materials list, which the leader edits before sharing it with mentors.

#### Point System Design

The decision of what a point actually measures if a club chooses to use one -- attendance, a card completed, a skill demonstrated.

**Example:** A point awarded purely for showing up teaches a very different lesson than a point awarded only when a skill is demonstrated to a mentor.

#### Portfolio Of Student Work

A collection of a student's finished projects over time -- photos of physical builds, links to shared Scratch or Python projects.

**Example:** A mentor introduces portfolio of student work through a short demonstration, lets learners try a related challenge, and asks them to explain what changed and why.

#### Post Event Notes

Brief observations written immediately after a club event while details are fresh. They capture what happened, surprises, participant reactions, and possible changes for the next session.

**Example:** Right after family night, the leader records that check-in caused a ten-minute line and suggests adding a second volunteer next time.

#### Post Event Survey

A structured set of questions used to gather comparable feedback about a club event after it ends. Organizers define its purpose first, collect only needed information, and interpret responses in context.

**Example:** After a six-week session ends, families answer three quick questions online about pacing, their favorite activity, and whether they would recommend the club to another family.

#### Power Strip Placement

The practice of keeping every power strip along a wall, never running it across open floor where a student could trip, and within reach of the monitor cluster it serves.

**Example:** A club runs its strips along the back wall behind a row of desks and tapes down the one cord that has to cross the walkway to the printer station.

#### Power Supply Selection

The practice of matching a project's voltage and current needs to a power source rated to supply them safely, rather than grabbing whichever wall adapter or battery pack is closest at hand.

**Example:** A robot kit's motors and microcontroller are both rated for 5 volts, and the kit draws up to 1.5 amps total when both motors run at full speed under load.

#### Press Release Writing

The practical tool for that outreach: a short, factual announcement following a standard format (headline, dateline, a quote from the club leader, contact information) sent to local outlets.

**Example:** The organizing team applies press release writing to a small pilot, gathers participant feedback, and revises the approach before using it throughout the club.

#### Printing Challenge Cards

The production of durable physical challenge cards from approved digital designs. Readable type, accurate trimming, consistent levels, and protective stock make them usable across sessions.

**Example:** A mentor introduces printing challenge cards through a short demonstration, lets learners try a related challenge, and asks them to explain what changed and why.

#### Proactive Mentor Engagement

Regular outreach to mentors before problems become resignations. Leaders review attendance and feedback, ask about workload, address recurring barriers, and offer training or schedule adjustments.

**Example:** A leader notices a mentor's attendance dropping and calls to ask about workload before the mentor decides to quit.

#### Professional Mentor

Someone whose day job involves software, electronics, or a related field, bringing deeper technical expertise but often less available time, since their volunteering competes with a demanding career.

**Example:** A software engineer who volunteers every other Thursday can debug a tricky Python error in seconds, but sometimes has to cancel on short notice when a work deadline lands on the same evening.

#### Progress Dashboard

A visual summary of attendance, completed challenges, skill evidence, or other selected measures. Access should match the audience, and indicators should not oversimplify student growth.

**Example:** At the end of a session, a club leader wants to know whether the LED-strip-patterns badge is turning into a bottleneck before planning next week.

**See Also:** [Progress Dashboard Explorer](sims/progress-dashboard-explorer/index.md)

#### Progress Tracker Poster

A classroom display that shows movement through projects, skills, or levels. Public markers should celebrate progress without exposing private performance or embarrassing slower learners.

**Example:** A wall poster shows a star next to each student's name for every completed badge, but leaves off session scores so no one is ranked against classmates.

#### Project Based Curriculum

A curriculum organized around creating meaningful products over several steps. Needed concepts are introduced as learners plan, build, test, present, and revise each project.

**Example:** Instead of ten separate weekly topics, a ten-week trimester is organized around three build-test-revise projects: a nightlight, a game controller, and a weather display.

#### Project Based Learning

An instructional approach in which learners build a meaningful product or solve an authentic problem over time. The project organizes research, practice, feedback, revision, and reflection.

**Example:** Rather than lecturing on loops, a mentor has students spend three sessions building a working traffic-light simulation, picking up conditionals and loops along the way.

#### Promoting First Meeting

The outreach and marketing activities used to publicize a club's first meeting and attract new members, such as flyers, sign-up links, and word of mouth. Clear, welcoming materials help families understand what the club offers and how to join.

**Example:** The library posts one flyer with the date, ages, free registration link, beginner-friendly promise, and a photo of an actual project.

#### Prompt Engineering Basics

Writing a clear, specific instruction to an AI agent so its first draft needs less correction -- naming the audience, the tone, the length, and any must-include detail.

**Example:** A vague prompt isn't wrong so much as underspecified; the agent has to fill in the gaps itself, and it won't always fill them in the way a club actually needs.

#### Prototyping Board

Any board used to build and test a circuit's wiring before making it permanent — most often the solderless breadboard already familiar.

**Example:** A student actively experimenting with a new sensor, still moving wires around and testing different resistor values, belongs on a solderless breadboard, since nothing there requires solder and mistakes cost only a few seconds of rewiring.

#### PTA Partnership Funding

Money a school's Parent-Teacher Association -- or an equivalent parent organization -- chooses to allocate from its own fundraising directly to the coding club.

**Example:** A PTA votes to direct part of its fall bake-sale proceeds toward replacing three aging laptops in the club's kit.

**See Also:** [Funding Partnership Fit Map](sims/funding-partnership-fit-map/index.md)

#### Public Recognition Event

A time-limited club gathering organized around public recognition for learners, families, mentors, or partners. Planning covers purpose, access, staffing, safety, communication, and review.

**Example:** At a family showcase, the host names each student’s specific project achievement without ranking learners against one another.

#### Push Button Switch

A component that closes a circuit connection while pressed and opens it again when released, giving a program a simple, physical way to detect a human action.

**Example:** Wiring a push button into a breadboard circuit typically pairs it with a resistor connected to ground, called a pull-down resistor, so that the connected input pin reads a clear, defined LOW value when the button is not pressed, rather than an unpredictable "floating" value.

**See Also:** [Push Button Digital Input Circuit](sims/push-button-digital-input-circuit/index.md)

#### Python Conditional

A Python statement that runs one code branch when a Boolean condition is true and can select alternative branches when it is false.

**Example:** In a simple quiz game, `if score >= 10:` prints "You win!" only when the condition is true, while an `else` branch can print "Try again" when it is false.

#### Python Function

A reusable sequence of steps grouped under one name -- the text equivalent of a Scratch custom block -- and usually the last of these four core constructs introduced, since it builds on understanding variables, loops.

**Example:** A mentor helps a student turn five lines that draw a square into a function called drawSquare(), so calling it four times draws a whole pattern without retyping the steps.

#### Python Loop

A Python statement that repeats a block of code for each item, a set number of times, or while a condition remains true.

**Example:** A mentor introduces python loop through a short demonstration, lets learners try a related challenge, and asks them to explain what changed and why.

#### Python Programming

The use of the readable, text-based Python language to express algorithms and build programs. Learners type statements, run code, inspect results, and correct errors.

**Example:** A student writes a five-line script that asks for a name and prints a personalized greeting, then runs it immediately in the editor to see the result.

#### Python Syntax Basics

The mechanical rules -- indentation defines a block of code instead of Scratch's visual nesting, and a colon introduces that block.

**Example:** A student who used to nest blocks inside a Scratch repeat loop learns that in Python, everything indented one level under `for i in range(10):` runs inside that loop instead.

#### Python Variable

Something that stores a value a program can reference and change, the text equivalent of a Scratch "variable" block a student has likely already used.

**Example:** A student who already used a Scratch variable named score to track points writes `score = score + 1` in Python to do the same job in text.

### Q

### Q

#### QR Code Check In

An attendance method in which staff scan a participant’s code to retrieve a registration and record arrival. A manual lookup remains necessary for lost codes or device failures.

**Example:** A volunteer scans a student's badge at the door; the system pulls up their registration and marks them present in under two seconds.

#### QR Code On Kits

A machine-readable label attached to a project kit that opens its inventory record, instructions, or checkout page when scanned. The linked destination should remain stable and avoid exposing personal information.

**Example:** The scan opens the kit's wiring diagram directly on the mentor's phone in under five seconds -- the same file already built, just reachable instantly instead of by memory.

### R

### R

#### Raising Funds

The work of obtaining money or donated resources to cover approved club needs. Common methods include grants, sponsorships, community drives, crowdfunding, and fundraising events.

**Example:** To cover its $2,660 first-year budget, a club leader combines a $1,600 startup microgrant (60% of the total), a $665 corporate sponsorship from a local business (25%), and $395 raised through a community support drive at a school open house (15%).

#### Raspberry Pi Pico

A small, low-cost microcontroller board — about the size of a stick of gum — that runs a single MicroPython program continuously, reading its own pins and driving connected components without needing a keyboard, monitor.

**Example:** At roughly $4, it is inexpensive enough that a club can hand one to every student without a fundraising conversation, and durable enough to survive a season of being plugged in, unplugged, and occasionally dropped.

**See Also:** [Raspberry Pi Pico Pinout Explorer](sims/pico-pinout-explorer/index.md)

#### Real Time Audio Processing

The continuous analysis or transformation of audio samples quickly enough for a display or output to respond while the sound is still occurring.

**Example:** The "real time" part is what makes the kit feel alive to a student: clap, and the display reacts within a fraction of a second, not after a noticeable pause.

#### Recruiting Girls And Women

The deliberate effort to close a specific and well-documented gap: computing clubs that promote themselves with images of boys building robots, or that frame the activity as competitive and combative.

**Example:** A flyer replaces a boys-only robot photo with varied students collaborating on art, games, sensors, and robots, then invites girls through trusted school groups.

#### Recruiting Minorities

Intentionally extending a club's invitation into the community spaces where Black, Hispanic, Native American, and other historically under-represented students and families already gather -- a church bulletin, a youth program.

**Example:** The concept isn't about meeting a quota; it's about recognizing that word-of-mouth and a single flyer will always reproduce the network a club already has.

#### Recurring Cost Planning

The practice of identifying every cost that repeats on a predictable schedule -- every session, every month, or every year.

**Example:** A club's $20-per-month internet hotspot plan looks trivial next to a $1,500 laptop purchase, but over a three-year planning horizon it totals $720 -- nearly half the cost of the entire laptop fleet.

#### Recurring Session Series

The practical mechanism for that: a defined, repeating calendar entry (every other Saturday, every Tuesday) rather than re-deciding the date fresh each time.

**Example:** A club sets its calendar to "every other Saturday, 10am to noon," so families save one recurring event on their phone instead of RSVPing to a new invite every two weeks.

#### Refund Policy

A policy applying specifically to any club that charges fees: stating clearly whether a missed or canceled session is refunded, credited toward a future session, or neither.

**Example:** A club's registration page states that a session canceled by the club is fully refunded, but a session a family simply misses is neither refunded nor credited.

#### Refurbished Device Sourcing

Deliberately buying previously used, professionally reconditioned laptops from a vendor instead of new ones, trading a shorter expected lifespan and a shorter warranty for a substantially lower price.

**Example:** A club buys refurbished laptops at a fraction of the retail price, accepting a one-year warranty in place of the three years a new machine would carry.

#### Registering Mentors First

Opening mentor sign-up for a term or session before student registration opens at all, so the club knows its actual mentor capacity before a single family can enroll.

**Example:** A club confirms six mentors for the spring term before it ever opens the student registration link, so it can set a safe enrollment cap before a single family signs up.

#### Registration AI Agent

An AI tool that assists with registration questions, record checks, waiting lists, or capacity calculations under fixed rules. Humans handle exceptions and approve consequential changes.

**Example:** A new sign-up arrives for a Tuesday group already at its 3:1 cap.

#### Registration Capacity Limit

Simply the maximum number of student sign-ups the system allows per session -- set, as the next section covers, by mentor availability rather than by room size alone.

**Example:** A room has thirty chairs, but with only four mentors on hand, the club still caps registration at twenty students rather than filling every seat.

#### Registration Confirmation Email

An email that goes out immediately after sign-up, restating the date, time, venue, and what to bring -- the first concrete proof to a family that their registration actually worked.

**Example:** Minutes after a parent submits the signup form, an automatic email lands in her inbox confirming Saturday's session time and reminding her to bring a laptop.

#### Registration Reminder Email

An email, sent a day or two before the session, catches the family who registered weeks ago and genuinely forgot; most registration systems, including the Eventbrite setup, can automate both without a mentor lifting a finger.

**Example:** The organizer applies registration reminder email to the next event, communicates the details to families and mentors, and records issues for the retrospective.

#### Registration Software Comparison

The process of weighing platforms like Eventbrite against alternatives on cost, ease of setup, and whether they natively support mentor-gated capacity limits.

**Example:** A founding team compares Eventbrite's free tier against a paid competitor and picks Eventbrite because it lets them cap signups by mentor count automatically.

#### Registration System

Whatever mechanism families actually use to sign up for a session or term -- ranging from a paper sign-up sheet at the venue to a full online platform.

**Example:** A brand-new club starts with a clipboard sign-up sheet on the first day, then moves to an online registration platform once it outgrows word-of-mouth enrollment.

#### Reimbursement Policy

A documented rule that explains how the club handles reimbursement, who is responsible, and what participants can expect. It promotes consistent, fair decisions in budgeting, fundraising, and community partnerships.

**Example:** A policy written down once protects both the club's budget and the volunteer who fronted the cash.

#### Reminder AI Agent

An AI tool that prepares or queues timely reminders from approved event and registration data. Sending permissions, recipient rules, and cancellation checks prevent harmful messages.

**Example:** The agent queues a reminder email for Thursday's session two days out, but holds it after a leader marks the session cancelled for weather.

#### Remote Control Distraction Risk

The likelihood that handheld control turns a robot lesson into racing or crashing instead of programming and sensing. Limited test time and autonomous goals protect the intended learning.

**Example:** A mentor hands two students remote-control robots during a session meant to practice sensor code, intending the remotes only for a quick five-minute test drive.

#### Representation In Curriculum

The question of whose faces, names, and stories actually appear inside a club's own material -- the computing pioneers highlighted in a slide, the sample photos on a challenge card.

**Example:** A club's standard slide deck on "computing history" names only two people -- both well-known male tech founders -- across an entire semester.

#### Resistor Basics

The introductory facts, vocabulary, and safe practices needed to begin working with resistor. This foundation supports supervised practice before learners attempt more complex tasks.

**Example:** Club kits typically stock only a handful of common values, most often 220 ohms and 1 kilohm, since those two values cover the large majority of beginner LED and pull-down circuits without needing a full parts drawer of every possible resistance.

#### Restroom Break Policy

A policy stating plainly that students may use the restroom whenever needed without asking special permission, paired with the child safety policy's supervision rules about how a student is escorted if the venue requires it.

**Example:** A student lets the mentor know she's stepping out rather than asking permission, and a second adult walks with her if the venue's rules call for an escort down the hall.

#### Retention Rate Tracking

A measure of the percentage of students from one semester who return for the next one, calculated as returning students divided by prior-semester enrollment, times one hundred.

**Example:** A club enrolls eighteen students in the fall semester, and fourteen of those eighteen return for spring.

#### Retired Professional Mentor

Someone who brings decades of technical or teaching experience and, often, far more flexible weekday availability than a working parent.

**Example:** A retired electrical engineer who mentors every Tuesday afternoon has no work deadline pulling him away, and decades of debugging circuits to draw on when a student's LED won't light.

#### Returning Student

A student who already knows the room, the routines, and often several mentors by name -- exactly the kind of peer-learning resource, and worth deliberately pairing with newcomers rather than only with other returning students.

**Example:** A mentor seats a fourth-session veteran next to a first-timer who is struggling with the same sensor-wiring problem she solved two weeks earlier.

#### Reviewing AI Output

The practice of a person reading every AI-drafted result before it is used, treating the draft as a genuine first draft rather than a finished product, and checking specifically for factual errors, wrong names or dates.

**Example:** Before posting an AI-drafted newsletter blurb, a mentor checks that the event date, the meeting time, and the volunteer's name are all correct, and rewrites a line that oversells what students actually built.

#### Robot Chassis

The physical frame or platform that holds a robot's motors, wheels, battery, and controller board together as one working unit.

**Example:** A mentor demonstrating a simple turn does not need to explain any mechanical steering parts at all — the entire turning behavior comes from independently varying two motor speeds, a detail worth calling out explicitly since it surprises students expecting a robot to steer the way a car does.

#### Robot Display Kit

A project set that adds a screen or LED matrix to a robot for status, sensor readings, icons, or animated expressions.

**Example:** A distance sensor changes a robot face from calm to alert when an obstacle moves within fifteen centimeters.

**See Also:** [Robot Emotion Display Control Panel](sims/robot-emotion-display-control-panel/index.md)

#### Robot Emotion Display

A screen or LED pattern that maps an internal robot state, such as blocked, searching, or successful, to a recognizable face or visual expression.

**Example:** A robot that only blinks an LED when it detects an obstacle is technically communicating, but a robot that switches from a calm, wide-eyed face to a narrow, alert one communicates the same fact in a way a five-year-old sibling in the room immediately understands.

**See Also:** [Robot Emotion Display Control Panel](sims/robot-emotion-display-control-panel/index.md)

#### Robot Face Kit

A display-based project set for programming eyes, mouths, and expressions on a robot. It connects output patterns with ideas such as state, events, and human interpretation.

**Example:** A mentor demonstrates the robot face kit, asks learners to predict what will happen, and checks the wiring and power before the group runs a test.

#### Robot Kit

A reusable project set containing a controller, wheeled chassis, motors, motor driver, power source, and often sensors. Learners assemble and program it to move purposefully.

**Example:** A club buys eight identical robot kits so each pair of students builds, wires, and programs the same chassis independently.

#### Robot Kit Assembly

The ordered sequence of physical steps — mounting the chassis, attaching motors and wheels, wiring the motor driver board, and securing the battery holder.

**Example:** Order matters more than it first appears: several later steps are physically difficult or impossible if an earlier step was skipped or done out of sequence.

**See Also:** [Robot Kit Assembly Sequence](sims/robot-kit-assembly-sequence/index.md)

#### Robot Motor Control

The code layer that turns a decision — "turn right," "back up," "stop" — into the actual speed and direction values sent to each drive motor, closing the loop that robot sensor integration opens.

**Example:** A mentor helping a student build a reusable drive(leftspeed, rightspeed) function, where each argument ranges from -100 (full reverse) to 100 (full forward), turns every future robot behavior into a one-line call.

**See Also:** [H-Bridge Direction and Speed Control](sims/h-bridge-direction-speed-control/index.md)

#### Robot Sensor Integration

The step where a robot's code actually reacts to a sensor's reading, rather than simply printing that reading to a screen for a human to read.

**Example:** A student who wires up a distance sensor and writes only print(distance) has successfully wired the sensor, but has not integrated it, since nothing in the robot's behavior changes based on that number.

#### Robot Sounds Kit

A project set that gives a robot programmed tones, recorded clips, or synthesized speech. Sound cues can communicate state, emotion, warnings, or completion.

**Example:** A robot beeps twice and plays a short rising tone when it finishes a maze, giving students an audible cue without looking at a screen.

#### Robotics Club Overlap Funding

Money or equipment cost split between a coding club and a school's robotics club when the two programs share students, mentors, or hardware.

**Example:** The coding and robotics clubs split the cost of shared microcontrollers after documenting storage, scheduling, repairs, and ownership.

#### Role Model Visibility

The aggregate, lived effect of representation and mentor recruitment combined: whether students actually see an adult who shares their background leading, demonstrating, and being asked hard questions in front of the group.

**Example:** A club can recruit a female mentor and still fail at role model visibility if she is consistently assigned to check-in and supply management while male mentors run every visible project demonstration.

#### Roles And Responsibilities

A written assignment of each club position’s duties, authority, limits, and accountability. Clear assignments prevent essential work from being ignored or duplicated.

**Example:** The document states that only the lead mentor may end a session early, while any volunteer may pause an activity immediately for safety.

#### Room Temperature Comfort

Keeping the room at a comfortable temperature -- easy to overlook until eight laptops and eight bodies have been running in a small room for an hour and the space has noticeably warmed up.

**Example:** A mentor running a two-hour Saturday session in a windowless room cracks the door and turns on a fan halfway through, once eight laptops running at once have made the space noticeably stuffy.

#### Rural Community Outreach

Addressing the specific mix of challenges and existing strengths in a rural area: long driving distances between families, fewer standalone STEM organizations to partner with, but often stronger, longstanding community hubs than a dense city offers.

**Example:** A club forming in a farming county struggles to get sign-ups through the usual school-newsletter channel, since several families homeschool or attend schools outside the county entirely.

### S

### S

#### Safe Disposal Of Electronics

Routing dead boards, batteries, and components to a proper e-waste recycling channel instead of a regular trash can, since electronics contain materials — heavy metals in circuit boards, lithium in rechargeable batteries.

**Example:** Most communities offer at least one free e-waste drop-off point, and keeping the two labeled bins next to the club's regular supply shelf costs nothing but turns proper disposal into the easy default instead of an extra chore no one gets around to.

#### Safety Zone Marking

Visible tape, signs, or barriers that separate higher-risk tools and work areas from normal movement paths. Markings help learners and visitors recognize where extra supervision and caution apply.

**Example:** Yellow tape on the floor marks a two-foot border around the soldering station, reminding students to stay back unless a mentor waves them in.

#### Saving Student Data

The ongoing decision a club leader makes about which pieces of information -- a name, an email address, a badge earned, a photo, a saved code file -- actually get written down and kept.

**Example:** Anything extra is just weight to carry, one more item that could get lost, and one more thing that must be accounted for when the kit comes home.

#### Scaling A Club

Growing the existing single site -- more students, more sessions per week, more mentors -- without adding a second physical location; almost always the right first move before considering anything more ambitious.

**Example:** A club that started with eight students on Tuesdays adds a second weekly session and recruits two more mentors before ever considering a second site across town.

#### Scheduling AI Agent

An AI tool that proposes session times or assignments from calendars, availability, capacity, and constraints. It cannot resolve human priorities unless leaders define them.

**Example:** The agent returns the dates ranked by coverage -- one date with all five mentors free, one with four, and one with only two, which would violate the 3:1 ratio if attendance ran high.

#### Scholarship Application Process

Ensuring fees never become the reason a student can't attend: a simple, low-friction form -- ideally requiring no proof of need beyond a parent's request -- that waives or reduces a fee.

**Example:** Before the next session, leaders document the scholarship application process, assign an owner, and review it with the volunteers who will use it.

#### Scholarship Fund

Money reserved to cover participation fees, transportation, supplies, or other approved costs for learners who would otherwise face a financial barrier.

**Example:** A club is entirely free to attend, but an advanced robotics elective requires a $40 sensor kit per student that the base budget doesn't cover.

#### School Based Club

A coding club operated through a school for enrolled students, often after classes. It follows school calendars, facilities rules, staff supervision, and district requirements.

**Example:** A middle school runs its club every Tuesday from 3:15 to 4:30, using the school's own room, bell schedule, and staff supervision policy.

#### School Calendar Alignment

Syncing directly with the host school's or district's academic calendar -- half-days, teacher in-service days.

**Example:** A club checks the district calendar before locking in fall dates and shifts its usual Thursday session to Wednesday during the week of parent-teacher conferences, when the school lets out at noon.

#### School District Funding

Financial or in-kind support that comes directly from the public school district hosting or partnering with a club -- free classroom space, waived custodial fees, existing wifi and network access.

**Example:** A district waives its usual after-hours custodial fee and lets a club use an unlocked computer lab with existing wifi, worth more to the budget than a cash grant of the same size.

#### School Partnership Outreach

Building a relationship with a school's administration or a specific teacher who can mention the club to families directly -- often the single highest-leverage relationship a community-based club can build, since a teacher's endorsement carries built-in trust.

**Example:** A club leader takes a fifth-grade teacher to coffee, and her two-line mention in the weekly class newsletter brings in more sign-ups than a month of flyers posted around town.

#### Scratch Programming

A visual, block-based coding environment where students snap together colored blocks instead of typing text-based syntax, making it an ideal first language since it removes syntax errors -- missing colons, mismatched parentheses. Block shapes reveal which commands, values, events, loops, and conditions can connect, so an invalid combination is physically impossible to snap together.

**Example:** A student drags a "move 10 steps" block inside a "repeat 10" loop block, and the puzzle-piece shape of each block makes it obvious which ones can snap together and which cannot.

#### Scratch Project Sharing

Publishing a Scratch project to the Scratch community website, where other students -- inside or outside the club -- can view, remix, and build on it.

**Example:** A ten-year-old shares her maze game on the Scratch website, and a student from a different club remixes it by adding a second level.

#### Scratch Sprite

A character or object on the stage that the student's code controls, giving even the most abstract programming concept -- a loop, a conditional -- an immediately visible, animated result.

**Example:** A student wraps a repeat block around a sprite's move-and-turn blocks and watches it trace a hexagon across the stage, seeing the loop's effect immediately instead of just reading code.

#### Screen Time Management

A club's session-level practice of limiting how long students stay continuously on a screen, alternating coding time with hands-on, unplugged activity -- such as the physical kit-building work from Chapters 19 and 20.

**Example:** After twenty minutes of debugging on the laptops, a mentor calls a break and has students build a physical LED circuit for ten minutes before returning to the screen.

#### Seating Arrangement

Typically clustering students in small groups of three to four rather than rows facing a single front, since clustered seating supports the peer learning far better than a lecture-style layout does.

**Example:** A room set up with four tables of four chairs each, rather than six rows facing the front, lets students lean over and troubleshoot a neighbor's code without leaving their seat.

#### Selecting A Date And Time

Weighing three constraints at once: when your venue is actually available, when your mentor pool can realistically commit, and when families in your target audience are free.

**Example:** A leader checks the community center's open evenings, confirms two mentors can make Tuesdays, and picks 4:00 to 5:30 p.m. because that's when most families said in a quick poll they could get kids there.

#### Self Paced Learning Path

A sequenced set of learning choices that students move through at different speeds. Progress depends on demonstrated readiness rather than everyone changing topics together.

**Example:** One student finishes the loops badge in a single session and moves on to a robotics challenge, while a classmate spends three sessions practicing loops before advancing — both following the same path at their own speed.

#### Semester Based Schedule

A recurring club calendar that begins and ends with a school or college term. Enrollment, curriculum goals, and celebrations are planned within that fixed period.

**Example:** The organizer applies semester based schedule to the next event, communicates the details to families and mentors, and records issues for the retrospective.

#### Sensor Basics

The vocabulary and safe-handling practices for connecting a sensor to a microcontroller — identifying what it measures, wiring it correctly, and reading its raw output — before learners attempt more complex, multi-sensor projects.

**Example:** None of these translators speak the microcontroller's native language directly — code always has to interpret the raw reading and convert it into something meaningful, exactly the way the Analog Input concept required rescaling a raw 0-to-1023 potentiometer reading into a usable range.

#### Sensor Kit

A collection of input components that measure conditions such as light, temperature, distance, or motion. Shared connectors and sample code let learners compare sensor behavior.

**Example:** Students compare a light sensor and distance sensor, then choose the input that best supports an automatic nightlight project.

#### Servo Motor

A motor with internal gearing and a feedback mechanism that lets it hold a specific angle, typically somewhere within a 0-to-180-degree range, rather than spinning continuously.

**Example:** A standard hobby servo expects a pulse repeated roughly every 20 milliseconds (a 50-hertz rate), with the pulse's own width ranging from about 1,000 to 2,000 microseconds mapping onto the servo's full 0-to-180-degree range.

#### Session Capacity Planning

Revisiting the mentor-gated math for each specific upcoming session, accounting for any mentors who've indicated they can't attend.

**Example:** A leader planning for Thursday's session learns two of five regular mentors are out, so caps sign-ups at nine students instead of the usual fifteen to hold the 3:1 ratio.

#### Session Check In System

A coordinated combination of people, tools, records, and procedures used to manage session check in. Its parts work together to support reliable decisions in scheduling, registration, attendance, and events.

**Example:** The organizing team pilots a session check in system with one session, checks accessibility and privacy, and expands its use only after volunteers can operate it reliably.

#### Session Cleanup Routine

Closing every session the same way: kits returned to their labeled storage bins, cables coiled and stored, chairs returned to their default arrangement, and the whiteboard wiped -- ideally with students themselves participating.

**Example:** With five minutes left, a mentor calls "cleanup," and each table team returns its own kit to the labeled bin and coils its own cables before anyone is dismissed.

#### Session Reminder Notification

Typically a text or push notification sent the morning of a session, catching families who might miss an email reminder, especially valuable for special events happening outside the normal recurring rhythm.

**Example:** A club sends a text reminder the morning of a rescheduled Saturday field trip, since several families who read the original email reminder had already forgotten the date had changed.

#### Session Scheduling

The overall discipline of deciding when and how often a club meets -- the single concept the club's learning graph treats as more consequential than almost any other in the book.

**Example:** The organizer applies session scheduling to the next event, communicates the details to families and mentors, and records issues for the retrospective.

#### Session Time Block

Distinct chunks of time, each with a clear purpose, similar to the first-meeting agenda but repeated every week rather than just once.

**Example:** A ninety-minute session might allocate ten minutes to warm-up, thirty to direct instruction, forty to hands-on project time, and ten to cleanup and reflection, repeated in that order every week.

#### Session Warm Up Activity

A planned learner task at the start of a session, with a clear purpose, time limit, materials, and expected participation. It should produce observable practice or reflection.

**Example:** Students spend five minutes predicting what a short Scratch loop will draw before opening their main projects.

#### Session Wrap Up Activity

A planned learner task at the end of a session, with a clear purpose, time limit, materials, and expected participation. It should produce observable practice or reflection.

**Example:** In the last five minutes, each student saves their project and tells a partner one thing that worked and one thing they would change next time.

#### Setting Up A Calendar

The one-time task of creating the club's shared calendar -- naming it clearly, choosing who can see it, and adding the semester's recurring session dates.

**Example:** The leader creates a club-owned calendar, enters recurring sessions, adds the venue and time zone, and grants edit rights to two successors.

#### Seven Segment Display

A display that shows a single digit using seven individually controllable LED bars arranged in a figure-eight pattern, labeled a through g by convention, plus an optional decimal point.

**Example:** Lighting a specific combination of those seven segments forms any digit from 0 through 9, and the same idea extends to a handful of letters used in simple digital readouts.

**See Also:** [Seven Segment Display Explorer](sims/seven-segment-display/index.md)

#### Shared Calendar Access

The set of permission levels a club grants to different people viewing or editing that calendar -- typically view-only for parents and students.

**Example:** A club initially gives every mentor edit access, and one mentor accidentally deletes a recurring session while trying to change its time.

#### Shared Device Account

A digital identity and permission set that multiple students share on one device, rather than one account per learner. It should use only the access needed and follow privacy and security practices.

**Example:** Shared accounts are the simpler option to set up, since a club only creates as many logins as it has laptops, not as many as it has students.

#### Shared Drive Organization

The folder-naming convention used inside the club's cloud storage for devices, so that student and class files land in a predictable structure -- one folder per class session, or one folder per student.

**Example:** A club settles on one folder per class session, each named with the session date first (YYYY-MM-DD), so folders sort chronologically instead of alphabetically by topic.

#### Shared Resource Agreement

A documented understanding about shared resource that identifies the parties, responsibilities, limits, duration, and review conditions. It reduces ambiguity before resources or access are shared.

**Example:** Two clubs sharing a school's 3D printer sign an agreement stating each gets Tuesday afternoons, is responsible for cleaning the nozzle after use, and can renew or end the arrangement at the end of the semester.

#### Short Circuit Hazard

The danger created when current takes an unintended low-resistance path, causing excess heat or damage. Power should be disconnected before wiring is inspected or changed.

**Example:** Ohm's law explains why this matters: current equals voltage divided by resistance, so when resistance drops toward zero, the calculated current climbs toward levels a battery or wire was never designed to carry.

**See Also:** [Normal Circuit vs. Short Circuit](sims/normal-circuit-vs-short-circuit/index.md)

#### Show And Tell Session

A scheduled club meeting centered on show and tell, with defined outcomes, activities, staffing, materials, and closure. Its structure should leave room for questions and learner choice.

**Example:** Each of ten students gets ninety seconds to show their finished game to the rest of the club and take two questions before the next student goes.

#### Showcase Event Planning

The process of setting goals and arranging people, time, resources, and contingencies for showcase event. It helps leaders act deliberately and adjust when conditions change.

**Example:** Six weeks before a robotics demo night, the planning team sets a goal of fifty attendees, books the school cafeteria, assigns volunteers to check-in and photography, and prepares a rain-date backup.

#### Sibling Pairing

The deliberate placement of siblings in the same working group for comfort or collaboration. Mentors watch for one sibling taking over and assign separate roles when needed.

**Example:** Two siblings who collaborate well share a robot station, while mentors assign separate roles so each person writes and tests code.

#### Signal Processing Basics

At the level a club mentor actually needs, the general idea of taking a raw, changing signal -- most often sound picked up by a microphone -- and extracting useful information from it, such as loudness.

**Example:** What a mentor actually sees when one of these kits runs is a screen filling with moving bars or a shifting waveform in time with whatever sound the microphone picks up -- visually similar to, but more detailed than, the sound spectrum kit's display.

#### Simple Spreadsheet Tracking

The use of an ordinary table with one row per learner or event and consistent columns for attendance, projects, badges, or skills. It suits clubs with modest reporting needs.

**Example:** One row records a student, while columns record attendance, completed cards, current project, and the date of the latest mentor note.

#### Single Leader Dependency

A club where all the institutional knowledge -- which vendor sells replacement Pico boards, which parent volunteers reliably, how registration actually works this year versus how it worked on paper -- sits with just one person.

**Example:** When the one founding leader who set up the registration spreadsheet and knows the Pico vendor's rep moves away mid-year, no one else can find last year's order history or remembers how the waitlist was supposed to work.

#### Single Session Workshop

A complete learning event delivered in one meeting rather than a series. Its project must fit the available time, including setup, instruction, testing, and cleanup.

**Example:** A two-hour Saturday workshop has every student solder a blinking-LED badge from start to finish, since there will not be a second meeting to complete an unfinished circuit.

#### Skill Badge System

A system that awards a small digital or physical badge for completing a defined skill or set of challenge cards; the simpler version is a badge-and-sticker reward -- a physical sticker on a printed learning map, for instance.

**Example:** A club uses a printed learning map on the wall where each student adds a sticker next to a skill once a mentor signs off, giving newcomers a visual sense of what's still ahead.

#### Skill Mastery Tracking

Recording a student's level on a specific skill using a small ordered scale -- typically emerging, practicing, and mastered -- rather than the simple earned-or-not-earned checkbox a badge represents.

**Example:** A badge tells a mentor a skill was demonstrated once; a mastery level tells a mentor how reliably a student can perform it now.

#### Skill Progression Ladder

A visible sequence of increasingly demanding skills or projects that shows learners what they can try next and which earlier abilities support each step.

**Example:** A mentor introduces skill progression ladder through a short demonstration, lets learners try a related challenge, and asks them to explain what changed and why.

#### Sliding Scale Fee Model

A fee structure that offers families a choice among several price tiers for the same program, letting each family pick what it can afford without proving income. Its assumptions and limits should remain visible.

**Example:** Families choose among $0, $10, or $25 monthly tiers without proving income, and every student receives the same projects and support.

#### Small Group Mentoring

The 3:1 default that balances personal attention against mentor capacity.

**Example:** A club with twelve students recruits four mentors so each one works with three kids at a time, rather than spreading one mentor across the whole room.

#### Small Group Rotation

Dividing students into clusters of three or four who rotate through different short activities together, or station-based learning, where the room itself is divided into fixed stations -- a soldering station, a Scratch station, a debugging-help station.

**Example:** The organizing team applies small group rotation to a small pilot, gathers participant feedback, and revises the approach before using it throughout the club.

#### Smartwatch Display Kit

A wearable project set with a compact screen, microcontroller, buttons or sensors, and battery. Learners design information that remains readable on a small display.

**Example:** Students code a digital watch face that shows the time and a step count on a one-inch screen small enough to fit inside a 3D-printed wristband.

#### SMS Notification

A brief text message sent to a phone for urgent or time-sensitive club information, such as a same-day reminder or weather cancellation.

**Example:** A club needs to tell every family that a session is canceled because of a snow closure, discovered only two hours before start time.

#### Snack And Water Policy

Clarifying whether the club provides snacks, whether students may bring their own, and how any food allergies noted on parental consent forms are handled around shared snack tables.

**Example:** A club with a peanut-allergic student posts a nut-free snack table and asks families to check the consent form before sending a homemade treat.

#### Social Media Promotion

Extending that same message to a venue's or founding team's existing social accounts -- often the fastest way to reach parents who don't visit the venue in person every week.

**Example:** A club posts a photo of last week's robot demo to the community center's existing Instagram account, reaching parents who follow the venue but have never seen a flyer posted on-site.

#### Soldering Safety Basics

The sequence of habits that make it possible to join wires with melted metal solder — using a soldering iron that reaches roughly 315 to 370 degrees Celsius — without a burn.

**Example:** An older student solders under close mentor supervision with eye protection, a stable iron stand, ventilation, and a clear hot-tool zone.

**See Also:** [Soldering Safety Workflow](sims/soldering-safety-workflow/index.md)

#### Sound Kit

A project set for capturing, measuring, generating, or visualizing sound with microphones, speakers, and code. Activities must account for classroom volume and privacy.

**Example:** Every specific audio kit covered in this section (the microphone kit and the sound spectrum kit) is a sound kit; the term itself is what a mentor reaches for when discussing the whole audio-project family, including the room-management issue every one of them shares.

#### Sound Sensor

A component that converts nearby sound pressure into an electrical signal, typically using a small electret microphone paired with an amplifier circuit, and reports either a continuously varying analog voltage or a simple digital trigger once volume crosses an adjustable threshold.

**Example:** The analog version is useful for measuring how loud something is; the digital, threshold-based version is useful for a simple "did a sound just happen" trigger, such as a clap-activated light.

#### Sound Spectrum Kit

A microphone-and-display project that separates captured sound into frequency bands and visualizes their strength. It introduces signal sampling and frequency analysis.

**Example:** When a student claps near the microphone, a row of LED bars lights up taller for the low, bass-heavy frequencies and shorter for the high-pitched ones, showing the frequency spread in real time.

#### Sponsor Recognition Plan

A written schedule for acknowledging sponsors through agreed channels such as websites, events, newsletters, or signs. Recognition matches the contribution and never gives sponsors control over learners.

**Example:** A $500 sponsor's logo appears in the footer of the club's website and gets one mention in the end-of-semester newsletter, but the sponsor has no say in which projects students build.

#### Spreadsheet Formula Basics

The small set of built-in calculations -- SUM to add a column, AVERAGE to find a mean, COUNTIF to count rows matching a condition.

**Example:** Learning a handful of these formulas covers the vast majority of what a club's analysis actually requires.

#### Spreadsheet Template Design

The up-front decision about which columns a tracking spreadsheet will have and how they're organized -- a header row, one block of columns per badge category, a final notes column.

**Example:** A club that instead added new columns wherever there was room, in whatever order a mentor typed them, ends up with a spreadsheet only the original mentor can navigate confidently.

**See Also:** [Spreadsheet Template Zones](sims/spreadsheet-template-zones/index.md)

#### Standard Operating Procedure

Often abbreviated SOP, the specific, formatted document that documenting-procedures work produces: a consistent template -- Purpose, Materials Needed, Steps, Troubleshooting -- applied to one recurring task.

**Example:** The template matters as much as the content, because a mentor searching for "how do I reset a Pico board mid-session" should be able to scan any SOP the same way, without first figuring out how that particular author chose to organize their notes.

#### Starting Small Strategy

Launching with a small, manageable group rather than trying to accommodate everyone who expressed interest at once, even when a survey suggests strong demand for a much larger first cohort.

**Example:** A survey shows forty families interested, but the founding leader caps the first cohort at ten students, planning to add a second session once the first has proven manageable.

#### Static Electricity Precaution

The habits that prevent an invisible buildup of electric charge on your body from damaging a sensitive electronic component when you touch it.

**Example:** A mentor running a session in a dry, carpeted classroom in winter should make this touch-first habit part of every kit hand-out, the same way handing someone scissors point-first is simply how it's done, without needing to re-explain the reasoning every time.

**See Also:** [Static Electricity Precaution Checklist](sims/static-electricity-precaution-checklist/index.md)

#### Static Safe Handling

Taking simple precautions to prevent a static electric discharge — an invisible, often unfelt zap of built-up static electricity — from damaging a sensitive component such as a microcontroller chip.

**Example:** The fix is simple — touch a grounded metal surface before handling any bare board, every single time, not just when you remember.

#### Station Based Learning

A session structure in which small groups rotate among distinct activity areas. Each station has its own task, materials, timing, and mentor support.

**Example:** Twenty students rotate in groups of five through four stations — soldering, Scratch, robotics, and circuit troubleshooting — spending twelve minutes at each before a signal sends them to the next one.

#### STEM Education

Instruction spanning science, technology, engineering, and math; a coding club is one delivery model for it -- but far from the only one.

#### Stepper Motor

A motor that moves in small, fixed-size steps rather than a smooth continuous rotation, and can report its position indirectly simply by counting how many steps it has been told to take — well suited to a project needing precise, repeatable positioning.

**Example:** Energizing coil pair 1, then coil pair 2, then coil pair 3, then coil pair 4, then back to coil pair 1, advances the rotor by one step with each transition in that four-step sequence.

**See Also:** [Stepper Motor Step Sequence](sims/stepper-motor-step-sequence/index.md)

#### Sticker Reward System

A small sticker placed on a card or poster and awarded immediately at the moment of an accomplishment, giving younger students a tangible reward that costs almost nothing and can mark far more moments than a formal badge.

**Example:** A club initially gives a sticker for every single line of code a student writes, and within two sessions the stickers stop meaning anything -- students collect them without looking at them.

**See Also:** [The Tangible Reward Ladder](sims/tangible-reward-ladder/index.md)

#### Storage For Kits

A lockable cabinet or set of labeled bins near the room's entrance that keeps Pico boards and LED strips organized.

**Example:** The organizing team applies storage for kits to a small pilot, gathers participant feedback, and revises the approach before using it throughout the club.

#### Strategic Partnership Building

The broader skill of identifying organizations whose own goals overlap with a club's, beyond the obvious category of funders -- a university computer science club, a regional robotics league, a local maker space.

**Example:** A club leader notices a nearby university's computer science student club runs an annual community-service requirement its members need to fulfill.

#### Student

A young participant who develops computing knowledge and confidence through projects, practice, feedback, and collaboration. Students make meaningful choices while following safety and conduct expectations.

**Example:** A student selects a challenge, follows safety rules, tries two debugging steps before asking for help, and returns the complete kit at cleanup.

#### Student Age Range

The span of ages a club chooses to serve, which affects both project complexity and how much independent focus a student can sustain. It protects dependable support without exhausting volunteers or learners.

**Example:** A club serving ages 8 to 14 finds that a robotics challenge card built for the older kids overwhelms the third graders, so mentors pair a simpler variant of the same challenge for the younger age band.

#### Student Attendance Tracking

Recording who showed up to each session, feeding both the mentor capacity planning and any grant-reporting requirements will cover.

**Example:** Leaders review a small set of relevant records each month and use the findings about student attendance tracking to choose one measurable improvement.

#### Student Bookmark Folder

A personal browser folder where a learner saves project-specific sites without changing the standard class links. Account and sync choices determine whether it follows the student.

**Example:** A student bookmarks the specific GitHub page for their in-progress Scratch remix in their own student folder, while the shared class folder above it still points to the general Scratch editor every student uses.

**See Also:** [Bookmark Folder Structure](sims/bookmark-folder-structure/index.md)

#### Student Check In Routine

A short, repeated set of actions used to handle student check in consistently. A predictable routine reduces confusion and preserves time for supporting mentors, students, parents, and volunteers.

**Example:** At drop-off, a volunteer checks each student's name off a printed roster and hands them a name tag before they head to their seat.

#### Student Confidence Building

Watching a student who once needed constant reassurance start attempting a new challenge card without asking permission first -- often the clearest sign a mentor-student relationship is genuinely working.

#### Student Data Privacy

The set of practices a club follows to limit who can see, copy, or misuse the student data it has decided to save -- covering everything from who has the login to the tracking spreadsheet.

**Example:** Where saving student data decides what to collect, student data privacy decides what happens to it after collection, and it applies to every field a club kept, no matter how minimal that list already is.

#### Student Feedback Collection

Asking the same question from the other side -- often more effectively through an informal conversation than a form.

**Example:** Instead of handing out an end-of-semester survey, a mentor asks a student one-on-one, "What's one thing you'd change about club?" and gets a more honest answer than any form generated all year.

#### Student Goal Setting

The practice of having a student state, in their own words, what they want to be able to do next -- rather than a mentor assigning the next skill from a curriculum sequence.

**Example:** A goal a student writes themselves ("I want my robot to follow a line without bumping into things") tends to sustain more effort than the same skill handed down as an assignment, because the student already has a personal stake in the outcome.

#### Student Grouping Strategy

An approach to combining these two factors into actual seating and station assignments each session.

#### Student Growth Metrics

Measurements of an individual student's progress over time -- the number of distinct skills attempted, the difficulty level of challenge cards completed, the complexity of a student's most recent project compared to their first.

**Example:** Where tracking spreadsheet recorded whether a badge was earned, growth metrics describe the shape of a student's progress across many badges over time.

#### Student Interest Survey

A short set of age-appropriate questions that asks learners which topics, tools, and projects they want to explore. Results guide choices rather than assign ability labels.

**Example:** a one-question survey asking "what's one thing you wish you could build?" at the start of a term surfaces that three students want to build something involving sound, which directly informs which project kits a mentor orders next.

**See Also:** [Interest Survey Results](sims/interest-survey-results/index.md)

#### Student Login Account

A digital identity and permission set created for one specific student to sign in individually, distinct from a shared device account used by several students on one machine. It should use only the access needed and follow privacy and security practices.

**Example:** Every laptop needs at least one working student login before a student can do anything more than stare at a lock screen, which makes this the very first account decision a club makes once a platform is chosen and configured.

#### Student Perception

A student's impression of a club, which tends to focus on whether the room looks fun and whether other kids seem to be enjoying themselves -- a student deciding whether to come back is reading the room's energy, not its paperwork.

**Example:** A club's equipment budget and safety record are fully in order, but a student who visits once and sees kids quietly filling out worksheets decides not to come back, while a louder, messier room down the street full of visibly engaged kids pulls them in.

#### Student Role

The governance-chart position occupied by the young person a club serves, forming the outermost tier of the org chart alongside Parent Role and receiving direct guidance from Mentor Role during each session.

**Example:** On the club's governance chart, Student Role sits in the same outer tier as Parent Role, connected to Mentor Role by an arrow labeled "guides directly during sessions."

**See Also:** [Club Governance Map](sims/club-governance-map/index.md)

#### Student Showcase Wall

A physical or digital display of learner-selected projects, images, and reflections. Publication requires consent and should represent varied interests and stages of development.

**Example:** A student chooses a robot photo and two-sentence reflection for display after the club confirms publication permission.

**See Also:** [Showcase Wall vs Peer Recognition Activity](sims/showcase-wall-vs-peer-recognition/index.md)

#### Student Skill Level

A practical estimate of what a learner can currently do with support or independently. It helps mentors choose suitable challenges without treating ability as fixed.

**Example:** A learner who independently uses loops but has not used functions starts with an intermediate loop challenge and receives a function demonstration later.

#### Student To Mentor Ratio

The number of students assigned to each available mentor during a session. The ratio sets safe enrollment capacity and indicates how quickly learners can receive help.

**Example:** A club caps enrollment at twenty-four students for four mentors, keeping the ratio at six students per mentor so no one waits more than a few minutes for help.

#### Student Voice And Choice

The umbrella practice of giving students real influence over what they build, how they set goals, and how their progress is judged.

**Example:** In one, a mentor hands each student their next card in a fixed order.

#### Substitute Mentor Plan

A plan that names, in advance, who covers for a mentor who cancels last-minute, so a single absence never drops the session below a safe ratio -- exactly the redundancy leadership succession is built to provide.

**Example:** Before the next session, leaders document the substitute mentor plan, assign an owner, and review it with the volunteers who will use it.

#### Success Story Sharing

The communication of a specific participant achievement through a short narrative describing the starting challenge, support provided, result, and learner voice. Publication requires permission.

**Example:** The organizing team applies success story sharing to a small pilot, gathers participant feedback, and revises the approach before using it throughout the club.

#### Succession Planning

A board's written answer, prepared before it is needed, to the question "who leads this club the day the founder cannot" -- naming an acting lead mentor, listing which signing authorities transfer automatically.

**Example:** Steps (flowchart with a decision diamond and a separate trigger branch): 1.

#### Summer Camp Format

A distinct planning mode entirely: a compressed, often daily, multi-day intensive rather than the club's normal weekly rhythm, requiring its own capacity plan, its own registration window.

**Example:** The organizer applies summer camp format to the next event, communicates the details to families and mentors, and records issues for the retrospective.

#### Survey Question Design

The practice of keeping survey questions short, three to five questions, and specific: "what's one thing that could be better?" produces more useful answers than "did you enjoy the session?", which nearly everyone answers yes to regardless of their actual experience.

**Example:** The organizer applies survey question design to the next event, communicates the details to families and mentors, and records issues for the retrospective.

#### Survey Response Analysis

The process of turning survey responses into action the same way interest survey analysis did -- looking for a pattern repeated across multiple respondents rather than reacting to any single comment.

**Example:** Twelve of fifteen end-of-term survey responses mention that the room felt too loud for hearing instructions, so the coordinator moves the next term into a quieter room instead of reacting to the single comment asking for different snacks.

#### Survey Tool Selection

Choosing which specific form-building service a club standardizes on -- a free online form builder, a paid survey platform, or a simple paper form for a low-tech venue -- weighing cost.

**Example:** The club uses survey tool selection only for a stated purpose, limits access to authorized people, and removes information when it is no longer needed.

#### Sustainability Checklist

A short, board-reviewed list of yes-or-no questions run once a year specifically to catch single leader dependency -- the very failure mode this book opened with -- before it becomes a crisis rather than after.

**Example:** - Is the club playbook document up to date within the last twelve months?

### T

### T

#### Table Robot

A small robot chassis built to operate entirely within the boundary of a desk or table, matching the footprint distinction between floor robots and table robots.

**Example:** Picture a club running six simultaneous robot-building stations on a single long table, one student per station.

#### Target Audience

The specific group of students and families a club is designed to serve -- an age range, a skill level, a neighborhood, or a school.

**Example:** A club defines its target audience as girls in grades 4 through 6 living within a single school district, with no coding experience required to join.

#### Targeting Mentor Populations

Using an influence graph specifically to find untapped groups of potential mentors -- a local engineering employer's volunteer program, a Women Who Code meetup, a retired-teachers association.

**Example:** The club's influence graph shows a Women Who Code meetup node with dozens of potential connections but zero current edges to the club.

#### Teen Mentor Program

A program that formalizes peer mentoring by recruiting local high schoolers, often ones who are club alumni themselves, and can double as a service-learning or leadership opportunity a teen can list on a college application.

**Example:** Two juniors who were club members back in sixth grade return to co-run the beginner Scratch station every other Thursday, logging the hours toward their school's community-service requirement.

#### Temperature Sensor

A component that reports the surrounding air or surface temperature, either as an analog voltage that code must convert to degrees or as a ready-made digital reading.

**Example:** A TMP36 reading 0.75 volts converts to temperature using the sensor's own formula, temperature = (voltage − 0.5) × 100, giving (0.75 − 0.5) × 100 = 25°C — a comfortable room temperature.

**See Also:** [Temperature Sensor Reading Explorer](sims/temperature-sensor-reading-explorer/index.md)

#### Testimonial Collection

A short, optional form or a quick conversation at pickup asking a parent or student what changed for them, collected consistently rather than only when a founder happens to remember to ask.

**Example:** At pickup, a mentor asks a parent, "What's one thing your child did today that surprised them?" and jots the answer on an index card to use in the club's next newsletter.

#### Third Party Tool Vetting

A review of an outside service's privacy, security, accessibility, age rules, cost, data export, support, and educational fit before the club adopts it.

**Example:** Before adopting a new project-sharing site, a club checks whether it requires students' real names, whether the club can export and delete all of its data if it switches tools later, and whether the free tier will still work once enrollment passes twenty students.

#### Time Zone Consideration

The need to state which local clock governs a virtual event, deadline, or reminder. An explicit zone prevents participants in different regions from interpreting the same time differently.

**Example:** A virtual coding session is scheduled for 4:00 PM Eastern, and the invitation also lists 1:00 PM Pacific so mentors joining from across the country show up at the right time.

#### Tracking Student Progress

The ongoing practice of recording which skills, badges, or challenge cards a specific student has completed.

**Example:** A regular mentor is out sick, and a substitute steps in for a student they have never met.

**See Also:** [Student Progress Tracking Cycle](sims/progress-tracking-cycle/index.md)

#### Tracking What Was Learned

The step that actually closes the loop -- writing debrief conclusions into the lessons learned log, not just discussing them out loud and letting them evaporate by the next session.

**Example:** The organizer applies tracking what was learned to the next event, communicates the details to families and mentors, and records issues for the retrospective.

#### Trademark And Branding

Considerations that are usually lightweight for a small club: checking that a chosen name isn't already trademarked by another organization in the same space.

**Example:** Before ordering t-shirts, a club searches the trademark database for its planned name and finds it's already registered by an unrelated robotics company, so it tweaks the name slightly before printing anything.

#### Transition Between Activities

The shift from one activity to the next deserves as much planning as the activities themselves; a mentor who gives a two-minute warning before switching tasks ("we're wrapping up this part in two minutes") avoids the abrupt disruption of announcing a change with no notice.

#### Translated Materials

The specific documents -- flyers, registration forms, permission slips, a one-page "what to expect" sheet -- rendered accurately into the languages spoken in a club's community, distinct from language accessibility as a broader goal.

**Example:** A translation only counts as accessible if a fluent speaker checks it, rather than trusting a single pass through a machine-translation tool, since automated tools frequently mangle idioms, technical terms like "sensor," and culturally specific phrasing.

#### Transportation Barrier Solution

A practical response to travel problems that prevent participation, such as transit passes, carpools, a closer venue, remote options, or schedule changes.

**Example:** Solutions range from low-cost to resource-intensive: a carpool network among current families, partnering with an existing after-school bus route, providing public transit passes, or offering a hybrid virtual-attendance option for a session a student genuinely cannot reach in person.

#### Turtle Graphics

Often the first Python project clubs use, because it makes text-based code visual again right when a student needs that reassurance most -- a small on-screen turtle that draws a line as it moves.

**Example:** A mentor introduces turtle graphics through a short demonstration, lets learners try a related challenge, and asks them to explain what changed and why.

#### Turtle Graphics Challenge

A prompt such as "draw a five-pointed star" or "draw a spiral" that gives students a concrete, visually verifiable goal, so they know immediately whether their code worked without needing a mentor to check line by line.

**Example:** Every station receives the same challenge, "draw a five-pointed star using only turtle.forward() and turtle.right()," and each student's screen shows within seconds whether their angle math was correct.

#### Typing Practice Tool

A simple browser-based typing game, not necessarily anything club-specific, that gives students a low-stakes, game-like way to build that speed over a few sessions before moving into Scratch or Python.

**Example:** A club spends the first five minutes of each session on a free typing-game website, so students can find the letter keys quickly once they open Scratch or a Python editor.

### U

### U

#### Underserved Community Outreach

The broader practice of identifying which populations near a specific club location are least likely to hear about it at all -- often families with limited English, families without steady internet access.

**Example:** A club forming inside a community center serves a neighborhood with a large refugee resettlement population, most of whom rely on a resettlement agency's caseworkers for information about local programs rather than a school newsletter.

#### Unplugged Coding Activity

A physical, screen-free activity -- such as giving a "robot" (another student) step-by-step verbal instructions to walk a path -- that teaches a computational thinking concept: sequencing, loops, conditionals.

#### Urban Community Outreach

Recognition that a dense city doesn't mean one citywide audience -- it means many distinct neighborhoods, each with its own trusted local hub: a specific recreation center, a specific library branch, a specific block's community board.

**Example:** A club serving one neighborhood should identify that neighborhood's own recreation center or library branch and build a relationship with the staff there, the same way a rural club builds one with a county extension office.

#### USB A Connector

The older rectangular USB plug commonly found on host computers and chargers. It has a fixed orientation and may carry power, data, or both.

**Example:** USB-A remains common on laptops, wall chargers, and hub-style USB power strips a club might use to charge a dozen devices from a single outlet, even as newer laptops increasingly drop it in favor of USB-C.

**See Also:** [USB Connector Comparison](sims/usb-connector-comparison/index.md)

#### USB C Connector

A small reversible USB connector used by many modern devices. Identical-looking cables can support different power and data capabilities, so labels and testing matter.

**Example:** A mentor whose USB-C robot kit charges painfully slowly from a phone charger, but charges quickly from the kit's own included adapter, is usually running into exactly this mismatch: the phone charger's cable or power brick simply was not built to negotiate the higher wattage the kit expects.

**See Also:** [USB Connector Comparison](sims/usb-connector-comparison/index.md)

#### USB Cable Basics

The vocabulary and safe-handling practices for choosing and using USB cables — recognizing connector types and matching a cable's power and data capabilities to the device — before learners rely on them in more complex projects.

**Example:** Every USB cable follows a version standard that sets its maximum data transfer speed and, critically for a club's electronics projects, the maximum current and voltage it can safely carry.

### V

### V

#### Value Proposition Statement

A one-to-two sentence articulation of the specific benefit a family gets by joining, distinct from a mission statement because it's written to persuade an outside audience rather than to guide internal decisions.

**Example:** A club's value proposition statement reads, "Your child builds and keeps a working robot in six weeks -- no experience needed, and it's always free," aimed at a parent scanning a flyer for thirty seconds, not at a board deciding what the club stands for.

#### Vendor Discount Negotiation

Directly asking a supplier for an educational or nonprofit discount on recurring purchases -- electronic components, craft supplies, printing -- before paying full retail.

**Example:** A club spends roughly $400 a year on electronic components at full retail price.

#### Venue Agreement

The written agreement with a school, library, bookstore, or community center specifying meeting times, any fees, and which party's insurance covers what.

**Example:** A library's venue agreement lets the club meet Tuesdays from 4 to 6 p.m. in the community room at no charge, on the condition that the club carries its own liability insurance.

#### Version Control Basics

An informal introduction to the idea that a project has a history of saved versions a student can return to if a change breaks something -- useful groundwork for the advanced track even without formal Git instruction.

**Example:** Before a student changes their Scratch project's color scheme, a mentor has them save a duplicate copy first, so if the new version breaks, the original is still there to go back to.

#### Visitor Check In Process

A repeatable sequence of actions for completing visitor check in with clear responsibilities and records. Defining the sequence reduces omissions and makes launching a club and creating effective learning sessions easier to sustain.

**Example:** Before the next session, leaders document the visitor check in process, assign an owner, and review it with the volunteers who will use it.

#### Voltage Basics

Introductory understanding of electrical potential difference, measured in volts, which can drive charge through a circuit. Safe projects use voltage levels supported by every connected component.

**Example:** A single AA battery supplies 1.5 volts; four AA batteries wired end to end in a robot kit's battery holder add up to 6 volts; a USB port supplies a steady 5 volts; and a coin-cell watch battery supplies 3 volts.

#### Volunteer Background Check

A formal criminal-history and, in many jurisdictions, child-abuse-registry screening required before any adult mentors unsupervised or in close contact with minors.

**Example:** A new volunteer completes a state criminal-history check and a child-abuse-registry screening two weeks before their first session, and the results are filed with the volunteer coordinator before they're allowed to work with students unsupervised.

#### Volunteer Coordinator Role

Often the club's least visible but most leverage-heavy position: this person recruits new mentors, tracks who has completed a background check and when it expires, and schedules mentor coverage for each session.

**Example:** The volunteer coordinator notices in the tracking spreadsheet that one mentor's background check expires in three weeks and reaches out to schedule the renewal before that mentor has to be pulled from the schedule.

#### Volunteer Mentor

An unpaid adult who joins primarily out of interest in the mission -- a parent, a retiree, a hobbyist -- and forms the backbone of most clubs.

### W

### W

#### Waiting List Management

The fair handling of registration requests once capacity is reached, whether because all seats filled or the mentor-to-student ratio caps enrollment. It preserves order, communicates status, sets response deadlines, and moves families up the list as seats open, whether from a new mentor or a withdrawal.

**Example:** A club's fall session fills all 20 seats, and the 21st family to register lands at the top of the waiting list; when one enrolled family withdraws a week later, the club offers that open seat to the family at the top of the list, giving them twenty-four hours to respond.

#### Walk In Experience

The impression a first-time or returning visitor forms in the first few minutes at a club, shaped by how they are greeted, whether signage tells them where to go, and how quickly someone talks to them. Leaders improve it by observing behavior and inviting direct feedback.

**Example:** The organizing team applies walk in experience to a small pilot, gathers participant feedback, and revises the approach before using it throughout the club.

#### Wearable Electronics Basics

The introductory design and safety practices for electronics worn on the body, including low weight, insulated connections, flexible wiring, secured batteries, low power use, and comfortable placement.

**Example:** A student's wrist-worn step counter uses a flexible silicone band to insulate the battery leads, and a mentor checks that no bare wire touches skin before the student wears it around the room.

#### Weather Cancellation Policy

A statement, made in advance, of how a decision to cancel for snow or severe weather gets made and communicated -- who makes the call, by what time, and through which channel.

**Example:** Before the next session, leaders document the weather cancellation policy, assign an owner, and review it with the volunteers who will use it.

#### Weekday After School Model

A club schedule built around sessions held on weekday afternoons immediately after school lets out, so students can go straight to the club instead of arranging separate transportation. Its assumptions and limits should remain visible.

**Example:** A club meets every Tuesday and Thursday from 3:15 to 4:30 PM, right after the final bell, so students go straight from their classroom to the club room without arranging a special ride.

#### Weeklong Intensive Format

A format that compresses a term's worth of a single topic into consecutive daily sessions, similar in structure to the summer camp format but usable any time school is out.

**Example:** During spring break, a club runs a Python-focused intensive from 9 a.m. to noon, Monday through Friday, covering in five days what a normal term spreads across ten weekly sessions.

#### Welcome Statement Design

The short, warm message every new family receives, whether spoken at the door or printed on a first-session handout, that sets expectations before the session even begins.

**Example:** The organizing team applies welcome statement design to a small pilot, gathers participant feedback, and revises the approach before using it throughout the club.

#### Whiteboard Usage

The planned use of a shared writing surface for the agenda, key instructions, diagrams, questions, timing, and discoveries. Visible information reduces repetition and supports discussion.

**Example:** A mentor lists the day's three tasks on the left side of the board and sketches the LED circuit's wiring diagram on the right, so students can glance up whenever they forget a step.

#### Whole Class Instruction

The format where one mentor briefly addresses every student at once (introducing a new challenge card, for instance); it's efficient for delivering the same information to everyone but should stay brief, since it's the format furthest from hands-on work.

**Example:** A mentor pauses all stations for a seven-minute demonstration of safe motor wiring, then students return to their groups to apply it.

#### Why No Fees Matters

The reasoning behind the no-fees policy, not the policy itself: a fee of even $20 doesn't just remove families who genuinely can't pay it.

**Example:** A family who could technically scrape together $20 but is weighing it against a phone bill or gas money will often just quietly not sign up rather than tell the club they can't afford it -- so the fee filters out far more families than only the ones who are visibly unable to pay.

#### Why Three To One Works

A balance point observed across many clubs: it protects dependable support without exhausting volunteers or learners.

**Example:** At a 3:1 ratio, one mentor calling in sick still leaves two mentors covering nine students comfortably, where a 1:1 ratio would leave the group with no backup at all.

#### Wifi Network Setup

The process of configuring the club's own wireless network -- choosing a network name, setting a password, and placing the access point where its signal reliably reaches every seat in the room.

**Example:** A club tests its new access point with three laptops and gets a strong, fast connection.

#### Windows Device Management

The tools a club uses to keep a Windows laptop fleet consistent -- ranging from a simple shared configuration checklist run by hand on each machine.

**Example:** Because it is managed one machine at a time by default, a Windows fleet's manageability depends heavily on how disciplined a club is about following the same checklist every time.

#### Wire Stripping Technique

The skill of removing exactly the right length of plastic insulation from a wire's end without nicking, thinning, or cutting through any of the thin copper strands underneath.

**Example:** A student strips 3/8 inch of insulation from a 22-gauge wire and checks that all the copper strands underneath are still intact before crimping on a connector.

#### Word Of Mouth Promotion

Simply asking every person already engaged -- survey respondents, founding team members, venue staff.

**Example:** The organizing team applies word of mouth promotion to a small pilot, gathers participant feedback, and revises the approach before using it throughout the club.

#### Word Of Mouth Referral

The highest-converting channel long after the first meeting -- a family that heard about the club from another family they already trust arrives with far less hesitation than one responding to a flyer.

#### Working Around Holidays

A practice that goes a step further than simply skipping a session -- it means proactively checking a full year's holiday calendar against a club's scheduling model before the term starts.

**Example:** A club planning its fall term checks the district calendar in August and finds that Veterans Day and the Wednesday before Thanksgiving both fall on regular meeting days, so it adjusts the term's session count and tells families about the two skipped dates before registration opens.

