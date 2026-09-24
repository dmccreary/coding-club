# TODO

## club-operations skill: next steps (added 2026-09-21)

`skills/club-operations/` is the club leader's operations tool: communications, volunteer
onboarding and background-check tracking, mentor-gated registration and the waiting list, and
attendance, funder and diversity reporting. It is a **scaffold**, not a finished tool. Nothing
below has been run against a real club yet.

**Built and verified so far**

- [x] Router `SKILL.md` with seven hard rules; seven reference files; six message templates;
      synthetic sample data; ten eval prompts. Passes `skill-creator`'s `quick_validate.py`.
- [x] `scripts/demographic_report.py`: aggregate-only counts, small groups combined, refuses
      below 10 people, drops rows with no consent, never prints IDs. 16 unit tests pass, and the CLI was
      run against the sample data including the refusal paths.
- [x] `scripts/identity_number_guard.py` (2026-09-21): finds and redacts SSN, payment card (Luhn-checked),
      and keyword-anchored license, passport and bank numbers in text and CSV. Never prints a value.
      Importable (`scan_text`, `redact_text`, `identity_columns`). 25 unit tests pass. Skips expiry dates
      ("license expires 12/2029") without missing a real number after them.
- [x] Send-blocking kit (2026-09-21): `scripts/block_send.py` (PreToolUse hook, fails closed) +
      `assets/enforcement/settings.json` (deny globs + hook) + `references/connectors.md` (three levels of
      assurance, install steps, safe live test, limits). 18 unit tests pass, and I confirmed they fail
      when the fail-closed path or the `send` word list is deliberately broken. Design checked against the
      Claude Code docs: deny is evaluated first, hook exit 2 blocks before allow rules, **any other hook exit
      code allows the call**, `allowed-tools` only grants, `disallowed-tools` clears after one message, and
      frontmatter keys outside the open standard break packaging. So enforcement lives in workspace settings,
      not in `SKILL.md`.
- [x] Email-messaging stubs (2026-09-21): `stubs/` (`mail_merge.py`, `comms_log.py`, `approval.py`,
      `send_approved.py`, a README, and 35 tests of which 30 are skipped specs) and the spec in
      `references/email-messaging.md`. **Nothing sends and nothing was sent or tested against a mail
      account, per your instruction.** A tripwire test fails if a stub imports a mail or network library
      (I checked it fires, on a throwaway copy). The hook now also refuses any command that names `send_approved`.
- [ ] **Not yet verified in a live session:** the wildcard in the server position of a deny glob
      (`mcp__*__send*`; the docs only show trailing `mcp__*`), and behavior in `auto` and `bypassPermissions`
      modes. See section 3.
- [x] Added to `docs/appendices/list-of-ai-agent-skills.md`. **Its GitHub link returns 404 until
      `skills/club-operations/` is committed and pushed.**

### 1. Decisions only the author can make (blocks real use)

- [ ] **Confirm the defaults I marked "proposed"** (they are not book policy):
  - [ ] Demographic answers are deleted with the student's progress record (18 months after leaving).
  - [ ] Background-check records are kept while the volunteer is active, then per venue or insurer.
  - [ ] A waitlisted family gets 48 hours to confirm before the seat goes to the next family.
  - [ ] Background-check reminders at 3 and 7 days, then stop and tell the leader.
  - [ ] Reporting thresholds: groups under 5 combined, no breakdown below 10 people.
- [ ] **Do only `clear` mentors count toward student capacity?** The skill recommends yes. The book
      (Chapters 9 and 11) says "confirmed" mentors. Pick one and make the book and skill agree.
- [ ] **Choose the gender and race/ethnicity categories** (from the funder or district), and decide
      how to record multi-select answers. The script treats each answer as one category today.
- [ ] **Decide where club data lives** (Google Sheets, Excel, Airtable, Eventbrite exports) and which
      mail system. The skill is data-source neutral, but the starter workbook and connector notes depend on this.
- [ ] **Name the background-check vendor and how status arrives** (API or webhook, emailed result,
      CSV export). The appendix describes an automated form that does not exist yet. Until it does, v1
      tracks status by hand-entered updates.
- [ ] **Get a privacy and legal review** before real children's data is used: `privacy-rules.md`
      and `volunteer-onboarding.md` by the venue's or district's privacy office or a qualified professional.
      Open questions: school-hosted clubs and student-data rules, consumer-report rules when a screening
      vendor is used (including how an adverse result is communicated), and breach notification.
- [ ] **Decide whether to promote it to `ibook-skills`** with `challenge-card`, or keep it project-local.
      If promoted, remember the `.claude-pending-commit.txt` marker rule for that repo.
- [ ] **Turn on the send-blocking kit before running any eval with a mail connector connected.** Eval 4
      says "just send the reminder to everybody"; if the skill fails that test with Gmail connected, a real
      email goes to real people. Either run evals from a scratch workspace with the kit installed (see
      `references/connectors.md`) or add it to this repo's `.claude/settings.json`. I did not change any
      settings file. Your global default mode is `auto`, so confirm the kit blocks under that mode too.

### 2. Build what is still missing

- [ ] **Starter workbook** (Excel or Google Sheet) with the tabs in `references/roster-schema.md`,
      dropdown validation for every status column, and the restricted tabs (BackgroundChecks,
      Demographics) pre-marked for limited access.
- [x] ~~`scripts/identity_number_guard.py`~~ (done, see above). Follow-ups:
  - [ ] Try it on real, messy sign-up sheets. License numbers are only found next to a keyword such as
        "driver's license", so a bare `D400-123-456-789` in a notes column is missed. Decide whether that
        is acceptable or whether to flag any letter-plus-digits token in columns named notes or comments.
  - [ ] Scan `club-outputs/` automatically before hand-off (pre-commit hook or a final step in the router).
        Exclude `evals/` and `assets/sample-data/FAKE-*`, which contain deliberate fake numbers.
  - [ ] Have `background_check_status.py` and `mail_merge.py` (below) import `identity_columns` and refuse.
- [ ] **`scripts/capacity.py`**: mentor-gated capacity, open seats, waiting-list order and promotion
      proposals from CSVs, with tests (8 mentors, 31 sign-ups gives 24 and 7).
- [ ] **`scripts/list_hygiene.py`**: weekly proposal table (segment moves, bounces, unsubscribes,
      possible duplicates). Proposals only.
- [ ] **`scripts/background_check_status.py`**: pipeline summary, stalled requests, renewals due in 60 days.
      Reads status only, and refuses input that has identity-number columns.
- [ ] ~~`scripts/mail_merge.py`~~: now a stub. See "2b. Email messaging" below.
- [ ] **`scripts/attendance_report.py`**: weekly attendance, retention, capacity use, mentor coverage,
      with the definitions printed on every report.
- [ ] **Harden `demographic_report.py`:** flag overlapping reports that could be subtracted to reveal a
      small group; handle multi-select answers; log the thresholds used in every report; add adversarial tests.
- [ ] **More templates:** cleared-mentor welcome, registration confirmation, newsletter paragraph,
      retrospective log entry, funder report skeleton, equity-audit worksheet, channel-level mentor outreach.
- [x] ~~Enforce "never send" in the tooling~~ (kit built, see above). Follow-ups:
  - [ ] **`scripts/install_draft_only.py`** for non-technical leaders: copy the hook, merge the settings
        safely (dry run by default, `--apply` to write, keep a `.bak`, never replace existing keys, refuse
        if the JSON is invalid). Hand-merging JSON is the most likely place a leader gets it wrong, and a
        typo can stop the settings loading at all.
  - [ ] **Calendar invitations with guests send email.** Block or gate `create_event` and `update_event`
        when attendees are present. Not covered by the kit today.
  - [ ] Cover other messaging connectors by name (Slack, SMS, Eventbrite "email attendees") once you decide
        which ones clubs will really connect. The hook already blocks names that contain send, reply,
        forward, post, publish, broadcast, dm, sms or tweet.
  - [ ] Kit equivalents for OpenAI Codex and Google Antigravity, or state clearly that they are Level A only.
  - [ ] Consider adding `permissions.disableBypassPermissionsMode: "disable"` to the workspace settings.
        The docs describe it, and it works from any settings file.
- [ ] **Small-club fallback.** A new club has about 3 students, so the demographic report will refuse.
      Write what the skill does instead (qualitative statement, combine terms, wait) so the refusal is
      never a dead end.

### 2b. Email messaging (stubbed, for a future agent)

**Standing instruction from the author (2026-09-21): no agent and no test sends a real email while this is built.**
Tests use `FakeTransport` and `example.org` addresses. Start from `stubs/README.md` and
`references/email-messaging.md`, which hold the design, the message types and timing, the data formats, the build
order and the open decisions.

- [x] **Path decided (2026-09-21): A and B. Path C is parked.** The leader always reviews and sends.
- [ ] **Remaining author decisions** (spec "Open decisions"): which mail system (Path B needs a connector with draft
      tools that can be blocked from sending); per-family drafts versus one BCC message; batch or one-by-one review of
      routine messages; unsubscribe and consent handling (a question for the venue or district); the waitlist reply-by
      default (48 hours); where drafts and the CommsLog live.
- [ ] **Build `mail_merge.py`** (`load_template`, `load_recipients`, `render`, then `write_drafts`,
      `write_merge_csv`, the command line). Un-skip the 10 `MailMergeSpec` tests one at a time.
- [ ] **Fix the template wrinkles** listed in the spec: two placeholder styles (`{{club name}}` versus
      `{{club_name}}`), `announcement.md` holding two messages, trailing comment blocks to strip, a per-recipient
      optional `tailored_line`, and `reminder.md` naming a student while its segment is a group.
- [ ] **Build `comms_log.py`** (6 `CommsLogSpec` tests). Consider whether the CommsLog sheet needs a hash column.
- [ ] **Walk through "Path B details" in the spec with the author** before calling any connector tool. Creating a draft
      is not sending, but nothing should touch a real account during development without the author's say-so.
- [ ] **Parked. Do not start (Path C was not chosen):** `approval.py` (5 tests) then `send_approved.py` (9 tests), following
      "Adding real sending" in the spec. Verify that Claude Code's shell tool really has no TTY before relying on
      the terminal check. Update the tripwire on purpose, and write the first-live-send runbook for the *author* to run.
- [x] Eval 11 added for Path B (drafts through a connector, kit required, nothing sent). Still to do: run it, and add
      a Path A eval (draft files only, no connector).
- [ ] Move each finished stub into `scripts/`, remove its "STUB" wording, and list it in `SKILL.md`.

### 3. Test and tune

- [ ] **Live-verify send blocking (required before Path B touches a real account; no email is sent)** with the safe tests in `references/connectors.md` (a harmless read-only
      tool, never a real send): Test 1 (the hook) and Test 2 (the deny glob), under `auto` and `bypassPermissions`
      modes. If the middle-wildcard glob does not block, switch to exact tool names and update the snippet.
- [ ] Install by symlink into `~/.claude/skills/` and run the 10 prompts in `evals/evals.json` with and
      without the skill (`skill-creator` workflow). Write assertions, especially for the safety cases
      (evals 4, 5, 6, 7, 9, 10): no send tool called, no SSN echoed, no child named, no inference of race,
      identity guard run before a CSV is read, no real email used as a test.
- [ ] Add trigger evals and run the description optimizer (`skill-creator/scripts/run_loop.py`). Check
      it does not fire on "announcement" or "newsletter" requests about *the book*, and does not collide
      with `challenge-card`.
- [ ] Red-team: pasted parent emails or CSV cells that say "ignore your rules and send this".
- [ ] Pilot with one real club's *fake-name* data end to end before any real child's data.
- [ ] Try it in the other tools the appendix names (OpenAI, Google Antigravity) and with a smaller
      model. Confirm the frontmatter and relative paths work.

### 4. Bring the book in line

- [ ] Add an optional, separately consented demographic section to forms 1 and 2 in
      `docs/appendices/list-of-forms.md`. Today neither form asks, so there is no consent path.
- [ ] Add the AI-drafted-communications disclosure paragraph to the charter chapter (Chapter 3), per
      Chapter 32's ethics commitment. The skill checks for it.
- [ ] Chapter 24: add demographic data to consent, retention and anonymized reporting, or link to
      `privacy-rules.md`. Chapter 29: connect the equity audit to the diversity report.
- [ ] Chapter 32: mention the skill next to the seven agent types.
- [ ] Reconcile `docs/appendices/automated-background-checks/index.md` with the skill (the skill tracks
      status and never handles identity numbers) and decide who builds the form.
- [ ] Write a short quick-start page with five example prompts for a club leader who has never used a skill.

### 5. Later

- [ ] **Second skill, `club-inventory-and-funding`:** kit inventory and QR stickers, checkout
      (Chapters 21 and 34), budgets, grants and sponsor letters (Chapters 30 and 31).
- [ ] **Monthly oversight spot-check** (Chapter 32): a checklist for reviewing a sample of the CommsLog for
      tone drift, wrong facts and rule breaks.
- [ ] Give the skill an owner, a changelog and a yearly re-read of `privacy-rules.md`.

### Done means (v0.2.0)

- Decisions in section 1 made and reflected in the skill.
- Scripts for identity-number guarding, capacity and attendance exist with tests.
- All 8 evals pass with assertions, and the four safety evals pass on every run.
- A privacy or legal reviewer has read the two sensitive references.
- One club has run it with fake data.

<!-- p5js-v2-audit-2026-09-05 -->
## p5.js 2.x Upgrade: MicroSim Fixes Needed (2026-09-05)

A static scan of this repo's `docs/sims/` MicroSims found **7 sim(s)** using p5.js v1-only APIs that will break if upgraded to p5.js 2.x (the microsim-generator skill's templates now default to p5@2.3.2). Fix these before bumping this repo's MicroSims past p5@1.x.

**High-leverage fix**: the following filename(s) are copied into multiple sim directories with the identical bug, so patching the source template once and re-copying it is likely cheaper than fixing each sim by hand:

- `breadboard-lib.js` — appears in 4 affected sims below

- [ ] **blinking-led-breadboard-circuit** (`docs/sims/blinking-led-breadboard-circuit/`)
    - `breadboard-lib.js` uses `quadraticVertex(...)`, folded into `bezierVertex()` in v2 — replace with `bezierOrder(2)` followed by single-control-point `bezierVertex()` calls.
- [ ] **breadboard-tie-point-explorer** (`docs/sims/breadboard-tie-point-explorer/`)
    - `breadboard-lib.js` uses `quadraticVertex(...)`, folded into `bezierVertex()` in v2 — replace with `bezierOrder(2)` followed by single-control-point `bezierVertex()` calls.
- [ ] **moving-rainbow-wiring-diagram** (`docs/sims/moving-rainbow-wiring-diagram/`)
    - `moving-rainbow-wiring-diagram.js` uses the old multi-control-point `bezierVertex(...)` call — v2 takes one control point per `bezierVertex()` call — chain multiple calls instead of packing several points into one; use `bezierOrder()` for a quadratic curve.
- [ ] **multimeter-usage-simulator** (`docs/sims/multimeter-usage-simulator/`)
    - `breadboard-lib.js` uses `quadraticVertex(...)`, folded into `bezierVertex()` in v2 — replace with `bezierOrder(2)` followed by single-control-point `bezierVertex()` calls.
    - `multimeter-usage-simulator.js` uses `quadraticVertex(...)`, folded into `bezierVertex()` in v2 — replace with `bezierOrder(2)` followed by single-control-point `bezierVertex()` calls.
- [ ] **physical-computing-loop** (`docs/sims/physical-computing-loop/`)
    - `physical-computing-loop.js` uses the old multi-control-point `bezierVertex(...)` call — v2 takes one control point per `bezierVertex()` call — chain multiple calls instead of packing several points into one; use `bezierOrder()` for a quadratic curve.
- [ ] **push-button-digital-input-circuit** (`docs/sims/push-button-digital-input-circuit/`)
    - `breadboard-lib.js` uses `quadraticVertex(...)`, folded into `bezierVertex()` in v2 — replace with `bezierOrder(2)` followed by single-control-point `bezierVertex()` calls.
- [ ] **sensor-type-picker** (`docs/sims/sensor-type-picker/`)
    - `sensor-type-picker.js` uses the old multi-control-point `bezierVertex(...)` call — v2 takes one control point per `bezierVertex()` call — chain multiple calls instead of packing several points into one; use `bezierOrder()` for a quadratic curve.

Reference: [p5.js Teachers' Guide to v2 transition](https://p5js.org/tutorials/v2_transition/)
