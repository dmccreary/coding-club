# Quiz: AI Agents for Registration, Scheduling, and Communication

Test your understanding of AI agents that draft club communications and scheduling, influence graphs for outreach, and the guardrails and human-in-the-loop review that keep a mentor in charge with these review questions.

---

#### 1. What are AI agent guardrails?

<div class="upper-alpha" markdown>
1. A periodic spot-check of already-sent AI-drafted messages
2. A checklist a mentor runs before approving any single draft
3. A network map of community trust relationships
4. The specific, built-in limits a club sets on what an agent is permitted to do without ever changing them per-message, such as never sending a message directly or never pairing a specific student's name with sensitive information
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter defines guardrails as fixed limits decided once in advance -- an agent may draft but never send, may propose but never publish -- rather than re-litigated every time an agent runs. Option A describes AI agent oversight, a separate ongoing practice. Option B describes an AI output quality check, a per-draft review tool rather than a fixed limit. Option C describes an influence graph, an unrelated outreach-mapping concept.

    **Concept Tested:** AI Agent Guardrails
    **See:** [AI Agent Guardrails](../../glossary.md#ai-agent-guardrails)

---

#### 2. How does AI survey analysis differ from AI sentiment analysis?

<div class="upper-alpha" markdown>
1. AI survey analysis only works on numeric ratings, while sentiment analysis only works on free text
2. AI survey analysis groups responses into recurring themes -- what people are talking about -- while AI sentiment analysis estimates whether responses lean positive, neutral, or negative -- how people feel about it
3. They are the same tool described with two different names
4. AI sentiment analysis requires a signed data sharing agreement, while AI survey analysis does not
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter explicitly distinguishes the two: survey analysis groups forty free-text responses into themes like "start time too early," while sentiment analysis separately estimates the emotional tone within those themes, revealing a frustrated cluster a 4.2/5 average score hid. Option A misstates which tool works on which input type. Option C ignores the chapter's explicit distinction between the two analysis tools. Option D fabricates a data-sharing-agreement requirement not discussed in the chapter.

    **Concept Tested:** AI Sentiment Analysis
    **See:** [AI Sentiment Analysis](../../glossary.md#ai-sentiment-analysis)

---

#### 3. Why does the chapter treat AI agent oversight as distinct from AI agent guardrails?

<div class="upper-alpha" markdown>
1. Guardrails are fixed limits set once in advance, while oversight is the ongoing, periodic practice of checking that agents are still behaving as those guardrails intend, since even a well-guardrailed agent's output can quietly drift over time
2. Oversight only applies to chatbots, while guardrails apply to every other agent type
3. Guardrails are optional, while oversight is legally required
4. They are the same practice, and the chapter uses both terms interchangeably
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter's worked example shows a monthly spot-check catching a reminder agent's tone drifting toward an oddly formal style even though no guardrail was technically violated, illustrating why oversight checks for drift that fixed guardrails alone cannot catch. Option B invents a chatbot-only restriction on oversight not stated in the chapter. Option C fabricates a legal-requirement distinction the chapter never makes. Option D ignores the chapter's explicit distinction between the two practices.

    **Concept Tested:** AI Agent Oversight
    **See:** [AI Agent Oversight](../../glossary.md#ai-agent-oversight)

---

#### 4. A new sign-up arrives for a Tuesday group already at its 3:1 ratio cap. What does the chapter say the registration AI agent does with this sign-up, and what does it not do?

<div class="upper-alpha" markdown>
1. It rejects the family outright and tells them to try a different club
2. It immediately overrides the ratio cap to accept the family anyway
3. It silently ignores the sign-up until a mentor happens to notice it
4. It automatically places the family on the waitlist in submission order and flags the entry for a leader's routine review, but it does not make the final decision to accept or reject a specific child
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter's own worked example describes exactly this: the agent recognizes the group is full, places the family on the waitlist in order, and flags it for a leader's weekly glance -- it automates the bookkeeping but never makes the actual accept-or-reject decision itself. Option A describes an outright rejection the chapter never has the agent perform. Option B contradicts the entire chapter's emphasis that an agent never overrides a ratio cap the club has set. Option C contradicts the chapter's explicit description of the agent actively flagging the entry, not ignoring it.

    **Concept Tested:** Registration AI Agent
    **See:** [Registration AI Agent](../../glossary.md#registration-ai-agent)

---

#### 5. A club leader types the prompt "write a reminder" and gets back a generic, three-paragraph, formal email with no specific date. Following the chapter's prompt engineering guidance, what change produces a usable draft close enough to send with one small edit?

<div class="upper-alpha" markdown>
1. Repeating the exact same vague prompt a second time
2. Asking a different AI agent type, such as a scheduling agent, to draft the same reminder instead
3. Naming the audience, tone, length, and a must-include detail -- for example, "write a two-sentence, friendly reminder for Tuesday's 4pm session, mention we still need one more mentor volunteer, and sign it as Tuesday Coding Club"
4. Disabling human-in-the-loop review so the agent can send the message directly
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter's own worked example shows exactly this specific prompt producing a draft close enough to send with a single small edit, contrasted with the vague prompt's generic three-paragraph output. Option A would simply reproduce the same generic result, since nothing about the prompt changed. Option B misapplies a different agent type built for a different kind of task, not prompt specificity. Option D directly contradicts the chapter's non-negotiable human-in-the-loop review requirement.

    **Concept Tested:** Prompt Engineering Basics
    **See:** [Prompt Engineering Basics](../../glossary.md#prompt-engineering-basics)

---

#### 6. A mentor coaching AI agent reviews a badge-completion dashboard and notices only six of fourteen students in a cohort have completed a specific badge. It drafts two challenge-card framing ideas for the mentor to try, without ever naming which six students are behind. What principle does this illustrate?

<div class="upper-alpha" markdown>
1. AI ethics for clubs, since it involves a written charter commitment
2. The agent coaches the mentor from aggregated, anonymized cohort-level patterns, never from one specific, identified student's individual record, keeping the same minimal-identifiability habit used throughout this book
3. AI agent guardrails, since it involves a fixed limit on message content
4. Building an influence graph, since it involves identifying a pattern across a group
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter defines the mentor coaching agent's core boundary as drawing only from aggregated, anonymized patterns across a cohort, never from an individual identified student's record, matching the minimal-identifiability habit from earlier data chapters. Option A confuses this specific agent behavior with the broader written ethics commitment, a related but distinct concept. Option C misapplies the term guardrails, which describes fixed permission limits, not the aggregation behavior itself. Option D confuses cohort-level coaching with an unrelated community-outreach mapping tool.

    **Concept Tested:** Mentor Coaching AI Agent
    **See:** [Mentor Coaching AI Agent](../../glossary.md#mentor-coaching-ai-agent)

---

#### 7. How does the boundary of an AI chatbot for parents differ from the boundary of an AI chatbot for students?

<div class="upper-alpha" markdown>
1. The parent chatbot answers from the club's written policies and hands off anything outside that scope to a mentor, while the student chatbot answers curriculum troubleshooting questions and redirects personal or off-topic questions to a mentor
2. The parent chatbot can access a student's full academic record, while the student chatbot cannot
3. Both chatbots are configured identically and serve the same audience
4. The student chatbot is permitted to send messages directly to a mailing list, while the parent chatbot is not
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter's worked examples show the parent chatbot answering policy questions like a make-up policy while handing off an interpersonal-incident question to a mentor, and the student chatbot answering LED troubleshooting questions while declining any personal or off-topic question. Option B invents an academic-record-access distinction the chapter never describes. Option C ignores the chapter's explicit distinction between the two chatbots' scopes and audiences. Option D contradicts the chapter's universal human-in-the-loop requirement, which applies to every agent type, including both chatbots.

    **Concept Tested:** AI Chatbot For Students
    **See:** [AI Chatbot For Students](../../glossary.md#ai-chatbot-for-students)

---

#### 8. A club's influence graph shows a Women Who Code meetup node with dozens of potential connections but zero current edges to the club, alongside a PTA email list already well connected. Following the chapter's targeting mentor populations guidance, what should the leader do?

<div class="upper-alpha" markdown>
1. Ignore the Women Who Code node entirely and focus only on channels already connected
2. Post ten generic "mentors wanted" flyers at random locations around town
3. Send one personal outreach message to the Women Who Code meetup's organizer, the highest-leverage under-reached node, rather than spreading the same effort across many lower-leverage channels
4. Wait for the meetup to contact the club first before making any outreach attempt
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter's own worked example describes exactly this reasoning: one personal message to the highest-leverage under-reached node reaches far more qualified candidates than the same effort spread across ten cold flyers. Option A ignores the entire point of building an influence graph, which is to find and act on under-reached nodes. Option B describes the less effective broadcast approach the chapter explicitly contrasts against targeted outreach. Option D passively waits rather than acting on the leverage the graph reveals, the opposite of the chapter's recommended approach.

    **Concept Tested:** Targeting Mentor Populations
    **See:** [Targeting Mentor Populations](../../glossary.md#targeting-mentor-populations)

---

#### 9. A scheduling agent drafts a same-day room-change announcement fifteen minutes before a session starts. The mentor on duty reads the one-sentence draft, confirms the new room number, and sends it herself -- the whole review taking about fifteen seconds. Evaluate whether this satisfies the chapter's human-in-the-loop review requirement.

<div class="upper-alpha" markdown>
1. No, because human-in-the-loop review requires at least five minutes of deliberation regardless of the message's length or urgency
2. No, because urgent, time-pressured messages are exempt from human-in-the-loop review under the chapter's policy
3. Yes, because the club's human-in-the-loop policy makes no exception for urgency -- a person still reviewed and approved the message before it was sent, even though the review itself took only fifteen seconds
4. Yes, but only because the mentor is the club leader; a regular mentor's approval would not count
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter's own worked example uses this exact scenario to make its point: the review step takes fifteen seconds, not fifteen minutes, but it still happens, because the policy makes no exception for urgency. Option A invents a minimum-time requirement the chapter never states. Option B directly contradicts the chapter's explicit point that urgency creates no exception. Option D fabricates a leader-only approval restriction not discussed anywhere in the chapter.

    **Concept Tested:** Human In The Loop Review
    **See:** [Human In The Loop Review](../../glossary.md#human-in-the-loop-review)

---

#### 10. A club wants to deploy AI agents to help with Sunday-night planning tasks -- drafting Tuesday's reminder, checking the waitlist, sketching next month's newsletter, and answering a parent's device-loan question -- while keeping every family-facing message reviewed by a person first. Which combination best constructs a responsible rollout of this chapter's concepts?

<div class="upper-alpha" markdown>
1. Deploy one general-purpose AI tool for all four tasks and skip human review for any draft that looks obviously fine
2. Route each task to the matching agent type (reminder, registration, communication, and newsletter-drafting agents), require every draft to pass a guardrail check and a human quality-check review before sending, and schedule periodic oversight spot-checks to catch any drift in tone over time
3. Wait until the club has a written AI ethics commitment before using any agent for any purpose, even drafting
4. Use only a chatbot for all four tasks, since chatbots can handle any request regardless of topic
</div>

??? question "Show Answer"
    The correct answer is **B**. This combination applies the chapter's leveraging-AI-agents principle of matching each task to its purpose-built agent type, while layering in the guardrail check, human quality-check review, and ongoing oversight the chapter treats as non-negotiable for any agent output reaching a family. Option A directly contradicts the chapter's explicit warning against skipping review for drafts that seem obviously fine. Option C is unnecessarily sequential, since the chapter's ethics commitment and agent deployment are described as complementary, not strictly ordered. Option D misapplies chatbots, which the chapter scopes narrowly to specific question types and explicitly requires redirecting anything outside that scope.

    **Concept Tested:** Leveraging AI Agents
    **See:** [Leveraging AI Agents](../../glossary.md#leveraging-ai-agents)

---
