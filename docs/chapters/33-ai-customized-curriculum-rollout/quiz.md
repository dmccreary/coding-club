# Quiz: AI-Customized Curriculum and Rolling Out New Agents

Test your understanding of using AI to customize curriculum for individual students, specialized agents for grant writing and translation, mentor-supervised coding-help agents, and the responsible process for rolling out a new AI agent with these review questions.

---

#### 1. What does AI assisted debugging help do, and what does it deliberately avoid doing?

<div class="upper-alpha" markdown>
1. It suggests where a bug is likely hiding, such as a mismatched indentation, without fixing the code itself, preserving the student's own debugging skill
2. It rewrites the student's broken code automatically and returns a working version
3. It grades the student's code and assigns a numeric score
4. It deletes the student's code and starts the project over from a blank template
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter's worked example shows the agent suggesting where to look -- whether a block is connected -- rather than rewriting the script, since fixing the bug outright would rob the student of the debugging skill the exercise is meant to build. Option B directly contradicts the chapter's explicit boundary against fixing code automatically. Option C invents a grading function the chapter never describes for this agent. Option D fabricates a destructive action no agent in the chapter performs.

    **Concept Tested:** AI Assisted Debugging Help
    **See:** [AI Assisted Debugging Help](../../glossary.md#ai-assisted-debugging-help)

---

#### 2. How does an AI tutor for students differ from AI assisted debugging help?

<div class="upper-alpha" markdown>
1. They are identical agents, and the chapter simply uses two different names for the same tool
2. An AI tutor for students walks a student through guided hints toward figuring out an answer themselves, asking a question back, while debugging help points toward where a bug might be located without any hinting dialogue
3. An AI tutor for students only works with advanced-track students, while debugging help works with any track
4. Debugging help requires a signed consent form, while an AI tutor does not
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter's worked example shows the tutor asking "what does the block right above your loop tell the program to do before it starts?" rather than stating the fix, nudging the student toward their own answer, unlike debugging help's more direct pointer to a likely location. Option A ignores the chapter's explicit distinction between these two coding-help agents. Option C invents a track restriction the chapter never states for either agent. Option D fabricates a consent-form requirement unrelated to either coding-help tool.

    **Concept Tested:** AI Tutor For Students
    **See:** [AI Tutor For Students](../../glossary.md#ai-tutor-for-students)

---

#### 3. A leader reviewing three months of AI-suggested mentor-student pairings notices every pairing involving one specific mentor went to students from the same two neighborhoods, even though nothing in the mentors' stated interests pointed that direction. What does this illustrate, and what should the leader do?

<div class="upper-alpha" markdown>
1. This is expected behavior and requires no action, since the agent is simply optimizing for convenience
2. This illustrates AI data privacy risk, and the leader should stop using the tool entirely
3. This illustrates AI bias awareness: the agent likely learned to weight home-neighborhood proximity from patterns in its training data, even though proximity was never a stated matching criterion, and the leader should adjust the request to exclude that factor and re-run the pairings
4. This is a sign the mentor should be removed from the volunteer roster
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter's own worked example describes exactly this pattern and fix: the leader realizes the agent weighted neighborhood proximity from training-data patterns rather than any stated criterion, adjusts the request to exclude it, and gets a more mixed result. Option A dismisses a real pattern the chapter explicitly flags as worth investigating. Option B misapplies data privacy risk, a separate concept about data handling, to a pattern-bias issue. Option D is a disproportionate response the chapter never suggests, since the mentor did nothing wrong.

    **Concept Tested:** AI Bias Awareness
    **See:** [AI Bias Awareness](../../glossary.md#ai-bias-awareness)

---

#### 4. An AI drafted social media post names a specific student directly: "Maya's robot completed the obstacle course first try!" The leader edits the caption to remove the name before posting. What does this illustrate?

<div class="upper-alpha" markdown>
1. AI agent cost management, since removing a name reduces the post's character count
2. AI scheduling optimization, since the post is timed for a specific event
3. AI assisted curriculum design, since the post relates to a robotics challenge card
4. AI assisted social media review, where a person reads every draft before posting specifically to catch anything that might identify a specific student without a parent's consent, since not every family had signed a media-release form
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter's own worked example describes exactly this catch: the leader recalls the club's photo-consent policy and edits the caption to remove the name, since not every family had signed a media-release form for that student. Option A misapplies an unrelated cost-tracking concept to a consent issue. Option B confuses this with an unrelated scheduling concept. Option C confuses a social media caption with curriculum design, an unrelated agent type.

    **Concept Tested:** AI Assisted Social Media
    **See:** [AI Assisted Social Media](../../glossary.md#ai-assisted-social-media)

---

#### 5. A leader asks an AI agent to translate the club's make-up-session policy into Spanish. The draft is grammatically correct but uses a phrase that a fluent speaker recognizes as referring to cosmetics rather than a rescheduled class. A bilingual mentor catches and corrects the error before it goes home. What does this illustrate?

<div class="upper-alpha" markdown>
1. AI voice assistant use, since the policy was read aloud
2. AI generated website content, since the policy appears on the registration page
3. AI assisted translation, where a first-pass machine translation is a draft, not a finished document, and a fluent human speaker's correction is still needed before a family ever sees it
4. AI tool selection criteria, since the club is choosing between two translation vendors
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter's own worked example describes exactly this mistranslation and catch, illustrating that a first-pass AI translation is a draft prone to idiom errors that a fluent reviewer exists to catch before a family sees it. Option A confuses this with an unrelated spoken read-aloud tool. Option B confuses a translated flyer with website copy, a different specialized agent. Option D confuses this single-document translation scenario with a vendor-comparison decision, a separate process.

    **Concept Tested:** AI Assisted Translation
    **See:** [AI Assisted Translation](../../glossary.md#ai-assisted-translation)

---

#### 6. A club's AI drafting tool starts charging $15 a month once usage crosses fifty messages, roughly the volume a busy month of newsletters, reminders, and challenge cards generates. The leader estimates the tool saves about three hours a month of drafting time. Using the chapter's own reasoning, what should the leader do, and what is the resulting annual cost?

<div class="upper-alpha" markdown>
1. Adopt the tool, since it saves real volunteer time relative to its cost, and budget the $180 annual cost as its own line item rather than letting it appear as a mid-year surprise
2. Cancel the tool immediately, since any paid subscription is not worth the cost
3. Adopt the tool but hide the cost from the club's budget to avoid a difficult conversation
4. Wait until the tool becomes free again before using it at all
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter's own worked example makes exactly this decision: the leader weighs the $15-a-month cost against roughly three hours saved, decides the trade is worth it, and adds the $180 annual total as its own budget line item rather than a surprise charge. Option B ignores the chapter's actual cost-benefit reasoning, which favors adoption here. Option C directly contradicts the transparent budgeting practice the chapter recommends. Option D is passive and ignores the chapter's point that a worthwhile cost should be planned for, not avoided.

    **Concept Tested:** AI Agent Cost Management
    **See:** [AI Agent Cost Management](../../glossary.md#ai-agent-cost-management)

---

#### 7. A club is adopting a new AI code review assistant. It first maps out exactly where the tool fits in the peer-review process and who reviews its output, then runs it on an already-reviewed past project to see how it performs, before finally letting one mentor try it for two weeks ahead of a club-wide switch. Which three concepts does this sequence illustrate, in order?

<div class="upper-alpha" markdown>
1. AI agent training for leaders, then AI tool selection criteria, then AI agent vendor comparison
2. AI agent workflow design, then AI agent integration testing, then an AI agent rollout plan
3. AI bias awareness, then AI data privacy risk, then AI agent cost management
4. Coaching leaders with AI, then AI agent workflow design, then AI agent training for leaders
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter's rollout pipeline sequences exactly these three steps in this order: workflow design (mapping where the agent fits and who reviews it), integration testing (trying it on low-stakes past material), and a rollout plan (a gradual, one-mentor-first introduction). Option A misapplies three tool-selection concepts that happen earlier in the process, not this sequence. Option C confuses this operational sequence with the earlier risk-assessment concepts used before selecting a tool. Option D reorders the steps incorrectly and substitutes an unrelated leader-coaching concept for workflow design's actual place in the sequence.

    **Concept Tested:** AI Agent Workflow Design
    **See:** [AI Agent Workflow Design](../../glossary.md#ai-agent-workflow-design)

---

#### 8. In the chapter's vendor comparison radar chart, Vendor A scores highest on Cost Fit but lowest on Data Privacy, while Vendor B scores highest on Data Privacy but lower on Cost Fit. A club is choosing a tool that will handle family and financial information for a grant application. Which vendor does the chapter's own reasoning favor, and why?

<div class="upper-alpha" markdown>
1. Vendor A, since cost should always be the deciding factor regardless of context
2. Vendor C, since it scores highest on Output Quality
3. Vendor B, since the club's written criteria weight data privacy most heavily for anything touching family and financial information, even though no vendor wins on every axis
4. Neither vendor, since a tie always means no tool should be adopted
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter's own worked example makes exactly this choice: comparing three grant-writing tools, the leader picks the data-privacy leader over cost or output-quality leaders specifically because the club's written criteria weight privacy most heavily for family and financial information. Option A contradicts the chapter's point that no single criterion automatically wins; the weighting depends on context. Option B ignores the specific context given, privacy-sensitive family and financial data, in favor of an unrelated strength. Option D misreads the scenario as a tie, when the chart shows a clear leader on the criterion that matters most here.

    **Concept Tested:** AI Agent Vendor Comparison
    **See:** [AI Agent Vendor Comparison](../../glossary.md#ai-agent-vendor-comparison)

---

#### 9. Before adopting a new AI code review assistant, a leader reads its terms of service and finds a clause allowing submitted code to be used for "product improvement" without an opt-out, meaning a student's project could be retained and reused indefinitely by the vendor. Evaluate this situation: what should the leader conclude, and why?

<div class="upper-alpha" markdown>
1. The clause is standard fine print that can be safely ignored if the tool's output quality is excellent
2. The clause is irrelevant since the tool is used only by mentors, never directly by students
3. The clause only matters if the club charges fees for its sessions
4. The clause should be treated as a disqualifying flag, and the leader should choose a different tool with a clear data-retention limit and no reuse clause, since a tool can be excellent at its task and still be the wrong choice because of what it does with data behind the scenes
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter's own worked example treats this exact clause as disqualifying, choosing a different tool with a clear retention limit instead, since a genuinely excellent tool can still be the wrong choice based on its data practices. Option A directly contradicts the chapter's explicit warning against treating such clauses as fine print to skip past. Option B misses the point that submitted student code, regardless of who operates the tool, is still the data at risk. Option C invents a fee-based restriction unrelated to data privacy risk.

    **Concept Tested:** AI Data Privacy Risk
    **See:** [AI Data Privacy Risk](../../glossary.md#ai-data-privacy-risk)

---

#### 10. A club leader is designing the rollout of a brand-new AI-assisted lesson customization tool from scratch, following the chapter's full process. Construct the correct order of steps, from choosing the tool to full adoption.

<div class="upper-alpha" markdown>
1. Train every mentor first, then test the tool on real students, then decide selection criteria afterward
2. Skip testing entirely and roll the tool out to every mentor on the same day it is selected
3. Adopt the tool permanently based on a single fifteen-minute demo, with no further steps
4. Apply written selection criteria and compare vendors, design where the tool fits the workflow, run integration testing on low-stakes material, roll it out gradually starting with one mentor, then train the remaining leaders on its prompts, guardrails, and quirks
</div>

??? question "Show Answer"
    The correct answer is **D**. This sequence combines the chapter's selection process -- criteria and vendor comparison -- with its full rollout pipeline -- workflow design, integration testing, a gradual rollout plan, and leader training -- in the order the chapter presents them. Option A reverses the actual order, training mentors before the tool has even been tested. Option B skips the integration testing step the chapter treats as essential before any family sees a tool's output. Option C mirrors the exact mistake the chapter's selection-criteria section warns against, deciding based on demo polish alone.

    **Concept Tested:** AI Agent Rollout Plan
    **See:** [AI Agent Rollout Plan](../../glossary.md#ai-agent-rollout-plan)

---
