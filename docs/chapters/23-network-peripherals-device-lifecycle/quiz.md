# Quiz: Network, Peripherals, and the Device Lifecycle

Test your understanding of club network capacity planning, software and app governance, offline and backup resilience, the full device lifecycle, and peripheral management with these review questions.

---

#### 1. What is network bandwidth planning?

<div class="upper-alpha" markdown>
1. Estimating in advance how much total data a club's internet connection must carry at the busiest moment of a session, so the connection is sized for that peak rather than for a light test
2. Blocking all network traffic except a small list of approved destinations
3. Deciding which software a student may install on a shared laptop
4. Scheduling overnight software updates so they don't interrupt a session
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter defines network bandwidth planning as estimating the peak data demand -- every laptop browsing, streaming, or updating at once -- so the connection is sized for that busiest moment rather than for a quiet test with only a few devices. Option B describes firewall basics for clubs, a related but distinct network concept. Option C describes an app installation policy, an unrelated software-governance topic. Option D describes scheduling device software updates, a separate concept from sizing bandwidth itself.

    **Concept Tested:** Network Bandwidth Planning
    **See:** [Network Bandwidth Planning](../../glossary.md#network-bandwidth-planning)

---

#### 2. What is offline mode preparation?

<div class="upper-alpha" markdown>
1. A firewall rule blocking unapproved websites
2. A checklist run when a laptop is returned from loan
3. A folder structure for organizing student bookmarks
4. Installing and testing the offline-capable version of a club's coding tools before a session, so a Wi-Fi outage interrupts nothing a student is actively doing
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter defines offline mode preparation as installing and testing offline-capable tools, such as a desktop app instead of a browser tab, in advance during setup, so a dropped connection doesn't stop a session. Option A describes firewall basics, an unrelated network-security concept. Option B describes a device return checklist, a different operational tool. Option C describes browser bookmark management, unrelated to network resilience.

    **Concept Tested:** Offline Mode Preparation
    **See:** [Offline Mode Preparation](../../glossary.md#offline-mode-preparation)

---

#### 3. What is a class bookmark folder?

<div class="upper-alpha" markdown>
1. A personal folder where one student saves links to their own in-progress project
2. A folder used only on laptops running offline mode
3. A single, shared bookmark folder, identical across every laptop in the fleet, holding links every student in the club needs
4. A backup copy of a laptop's entire browser history
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter defines a class bookmark folder as a shared folder identical across every laptop, holding links like the coding platform and glossary that every student needs, updated once and pushed to the whole fleet. Option A describes a student bookmark folder instead, the personal counterpart to the class folder. Option B invents a restriction tying bookmark folders to offline mode that the chapter never states. Option D confuses bookmarks with an unrelated browser history backup.

    **Concept Tested:** Class Bookmark Folder
    **See:** [Class Bookmark Folder](../../glossary.md#class-bookmark-folder)

---

#### 4. How does a firewall differ from Chapter 22's content filtering software?

<div class="upper-alpha" markdown>
1. A firewall and content filtering software are two names for the same tool
2. A firewall only works on Windows laptops, while content filtering only works on Chromebooks
3. A firewall requires a mentor to manually approve every website visited
4. A firewall works at the network-connection level, deciding which connections are allowed to exist at all, while content filtering blocks specific website categories at the browser or network level
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter explains that a firewall works one level lower than content filtering, deciding which network connections are allowed to exist at all under a default-deny rule, while content filtering blocks specific website categories -- complementary tools, not substitutes. Option A ignores the chapter's explicit distinction between the two tools. Option B invents a platform restriction the chapter never states for either tool. Option C misdescribes a firewall as requiring manual approval per site, which is closer to a filtering list than a firewall's connection-level rule.

    **Concept Tested:** Firewall Basics For Clubs
    **See:** [Firewall Basics For Clubs](../../glossary.md#firewall-basics-for-clubs)

---

#### 5. Why does the chapter say an app installation policy extends Chapter 22's parental control software rather than replacing it?

<div class="upper-alpha" markdown>
1. Because parental control software technically blocks unapproved installs, but a written policy adds the human process of deciding what belongs on the approved list in the first place
2. Because parental control software cannot run on club-owned laptops at all
3. Because an app installation policy is only needed for donated laptops
4. Because an app installation policy replaces the need for a device security policy
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter explains that a technical block alone just tells a student "no" with no path to "yes, once we've checked it," so the written policy adds the human review process -- checking publisher, permissions, and safe use elsewhere -- that decides what gets approved. Option B contradicts the chapter, which assumes parental control software is already running on club laptops. Option C invents a donation-only restriction not discussed. Option D confuses the app installation policy with an unrelated Chapter 22 security policy.

    **Concept Tested:** App Installation Policy
    **See:** [App Installation Policy](../../glossary.md#app-installation-policy)

---

#### 6. How does a backup device plan differ from Chapter 22's device loaner agreement?

<div class="upper-alpha" markdown>
1. A backup device plan requires a signed form, while a loaner agreement does not
2. A backup device plan keeps spare, pre-imaged laptops ready to swap in when a device fails mid-session, while a loaner agreement governs a laptop leaving the building overnight
3. A backup device plan only applies to donated laptops
4. They are the same concept applied to two different laptop brands
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter explicitly distinguishes the two: a backup device plan is an in-session substitution pool kept in the charging cart, while a loaner agreement is the signed form governing a device leaving club premises overnight. Option A reverses which document actually requires a signature, since the loaner agreement is the signed form. Option C invents a donation-only restriction the chapter never states. Option D ignores the chapter's explicit distinction between these two separate concepts.

    **Concept Tested:** Backup Device Plan
    **See:** [Backup Device Plan](../../glossary.md#backup-device-plan)

---

#### 7. A club has eighteen laptops, and every student streams the same tutorial video at once during a session, each needing about 5 Mbps. Using the chapter's own reference numbers, approximately how much total bandwidth does this activity require?

<div class="upper-alpha" markdown>
1. About 18 Mbps
2. About 90 Mbps
3. About 25 Mbps
4. About 5 Mbps
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter's own worked example computes this exact scenario: eighteen laptops streaming a shared video tutorial together need closer to 90 Mbps of total bandwidth. Option A confuses the laptop count with the total bandwidth figure. Option C is the total bandwidth needed for the same eighteen laptops doing light browsing instead, a different activity in the chapter's example. Option D reports only the per-device figure rather than the total across all eighteen laptops.

    **Concept Tested:** Network Bandwidth Planning
    **See:** [Network Bandwidth Planning](../../glossary.md#network-bandwidth-planning)

---

#### 8. A club has a $2,200 grant. Using the chapter's own worked comparison, roughly how many more laptops can the club buy by choosing refurbished Windows laptops at $220 each instead of new ones at $450 each?

<div class="upper-alpha" markdown>
1. Half as many laptops
2. The exact same number of laptops either way
3. About five more laptops -- ten refurbished laptops instead of roughly five new ones
4. Three more laptops
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter's own worked example computes this exact comparison: a $2,200 budget buys roughly five new Windows laptops at $450 each, or ten refurbished ones at $220 each, doubling the fleet size for the same grant. Option A reverses the actual comparison, since refurbished buying yields more laptops, not fewer. Option B ignores the real price difference the chapter's arithmetic shows. Option D understates the actual gap the chapter's own numbers produce.

    **Concept Tested:** Refurbished Device Sourcing
    **See:** [Refurbished Device Sourcing](../../glossary.md#refurbished-device-sourcing)

---

#### 9. A student saves a project file locally to the "Station 3" shared account, and the file disappears the following week once a different student logs into that same account. What does the chapter say would have prevented this?

<div class="upper-alpha" markdown>
1. Saving the file to the club's shared cloud drive folder instead of locally, so the work survives independently of which laptop or account is used that day
2. Switching the laptop from a shared account to an offline mode
3. Adding the file to the class bookmark folder
4. Running the device troubleshooting checklist before the session started
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter's own worked example describes exactly this problem and its fix: cloud storage for devices lets a student save to a shared cloud drive folder so the file survives a shared-account reset and can be reopened from any laptop the following week. Option B confuses offline mode, a network-resilience tool, with the actual file-persistence problem described. Option C misapplies a bookmark folder, meant for links, to a saved project file. Option D describes an unrelated troubleshooting step for a misbehaving laptop, not a file-storage solution.

    **Concept Tested:** Cloud Storage for Student Projects
    **See:** [Cloud Storage for Student Projects](../../glossary.md#cloud-storage-for-student-projects)

---

#### 10. A laptop is still fully functional but the club no longer needs it, and after checking, no other program or family wants to take it. Following the chapter's device end-of-life decision workflow, what should happen to it?

<div class="upper-alpha" markdown>
1. It should be kept indefinitely in a closet in case a use appears later
2. It should be sent through refurbished device sourcing to be resold
3. It should be donated to the first family that asks, regardless of the earlier check
4. It should be routed to the device end-of-life plan: data wiped per the device security policy, then recycled through a certified e-waste program or its still-working parts donated
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter's workflow routes a functional laptop that no other program can use to the device end-of-life plan, the same destination as a non-functional one, where data is wiped and the device is recycled or its parts donated rather than left unaccounted for. Option A contradicts the chapter's explicit warning against letting a retired laptop sit indefinitely in a closet. Option B misapplies refurbished sourcing, which describes buying used laptops, not a club's own disposal process. Option C skips the workflow's donation-evaluation step, which the scenario states has already been checked and found no taker.

    **Concept Tested:** Device End Of Life Plan
    **See:** [Device End Of Life Plan](../../glossary.md#device-end-of-life-plan)

---
