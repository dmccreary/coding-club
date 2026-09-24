# Email Messaging (Stubbed)

Turning drafts into delivered messages: mail merge, drafts in the leader's mail account, approval,
sending, and the log. **All of it is stubbed. Nothing in this skill sends email.**

**Standing instruction from the author (2026-09-21):** no agent and no test may send a real email
while this is being built. Use `stubs/send_approved.py`'s `FakeTransport` and `example.org` addresses. Do not
call a mail connector's tools during development unless the author says so for that step.

**Decision (2026-09-21): the author chose Paths A and B.** The agent writes draft files (A) and may create drafts in the
leader's mail account through a draft-only connector (B). The leader always reviews and sends. **Path C, automated sending,
is parked.** Only `mail_merge.py` and `comms_log.py` need building. `approval.py` and `send_approved.py` stay as parked
stubs in case the decision changes. The Paths here are not the Levels in `references/connectors.md`: Path A needs no
connector (Level A), and Path B needs the send-blocking kit (Level B or C).

Contents: what to do right now, then a spec for the agent who builds it: ground rules, architecture,
paths, Path B details, message types, data formats, template wrinkles, build order, parked Path C, open decisions.

## Right now (the agent running the skill)

The stubs are not runnable. Do this instead:

1. **Fill the template by hand** into a file under `club-outputs/`, keeping the status header
   `DRAFT - NOT SENT`. Add a `to:` line for a one-family message, or leave recipients to the leader.
2. **If a mail connector is connected and the send-blocking kit is installed**
   (`references/connectors.md`), you may create a *draft* in the leader's account with the connector's
   draft tool (for example `create_draft`), one per family. Load the tool's schema first. Use only
   draft tools (`create_draft`, `update_draft`, `get_draft`, `list_drafts`, `delete_draft`).
   Never `send_message`, `reply` or `forward`. If the kit is not installed, do not use the connector; save files.
3. **Tell the leader the drafts are ready** and where they are. The leader reviews and sends.
4. **When the leader says it went out,** add a row to their CommsLog sheet by hand.

Then stop. Do not write a script that sends.

## Ground rules for the implementer

- Hard rules 1, 2 and 5 in `SKILL.md` apply to every line of this code. Read them first.
- The agent never sends. If sending is ever automated, a **person runs it, in a terminal**, after approving the
  exact text. The hook in `scripts/block_send.py` already refuses any command that names `send_approved`.
- Tests use `FakeTransport` and `example.org` addresses. A test that could reach a real inbox is a bug.
- Scripts run on a leader's plain Python: standard library only (no PyYAML, no third-party mail SDKs).
- Output shows **counts, never bodies or address lists.**
- Run `scripts/identity_number_guard.py` on every rendered draft and every log row.

## Architecture

```text
template + recipients.csv
        |  mail_merge.py            fill merge fields per recipient; reject leftovers; guard for identity numbers
        v
club-outputs/<date>-<slug>/drafts/<id>.md   +   merge.csv          (status: DRAFT - NOT SENT)
        |
        +--> Path A/B: the agent may create DRAFTS in the mail account; the leader reviews and sends
        |          v
        |      the leader says what went out --> comms_log.py appends a row per message
        |
        +--> Path C (PARKED):  approval.py approve   (a person, at a terminal, sees the exact text)
                     v
                 send_approved.py  (a person, at a terminal; dry run by default)
                     v
                 comms_log.py  appends a row per delivery
```

## Paths

| Path | Status | What happens | Build cost | Risk |
|---|---|---|---|---|
| **A** | **Chosen** | Agent writes draft files; the leader copies them into their own mail tool | `mail_merge.py`, `comms_log.py` | Lowest |
| **B** | **Chosen** | Agent also creates drafts in the leader's mail account through a draft-only connector; the leader sends | Path A, plus the connector steps below and the send-blocking kit | Low |
| **C** | **Parked** | A human-run tool delivers drafts whose exact content a person approved | `approval.py`, `send_approved.py`, a real transport | Highest |

Paths A and B need only `mail_merge.py` and `comms_log.py`. Start there.

## Path B details

Path B is the only place an agent touches a real mail account, so it has the most rules.

- **Preconditions.** The send-blocking kit is installed and its safe tests have been run (`references/connectors.md`), a
  connector with draft tools is connected, and the leader has agreed which account.
- **Draft tools only:** `create_draft`, `update_draft`, `get_draft`, `list_drafts`, `delete_draft`. Names can differ by
  provider. Load a tool's schema before calling it. Anything that sends, replies or forwards is blocked by the kit, and
  you must not look for a way around that.
- **One draft per family** for per-recipient messages. For a bcc-group message, make **one** draft with the families in
  BCC, never a draft that shows other families in To or Cc.
- **The rendered file stays the source of truth.** Create the mailbox draft from it. Record the connector's draft id per
  `recipient_id` (ids, never addresses) in `club-outputs/<date>-<slug>/mailbox-drafts.csv`, so a changed template can update or
  delete the right drafts.
- **Stay in your lane.** Only read drafts this skill created (`get_draft`, `list_drafts`). Do not search or summarize the
  leader's other mail.
- **You cannot see the leader press Send.** A draft that has disappeared from the drafts list is only a hint, so do not
  infer. Ask the leader which messages went out, then append the CommsLog rows with `sent_date`.
- **No connector calls during development** without the author's say-so for that step. The Path B behavior is covered by eval 11.

## Message types

| Type | Template | Audience and mode | Timing | Notes |
|---|---|---|---|---|
| Registration confirmation | none yet | One family, per-recipient | Right after sign-up (Ch. 12) | Usually the registration platform's own email. Decide whether the skill drafts it |
| Session reminder | `reminder.md` | Active families, per-recipient | A day or two before (Ch. 12) | One optional tailored line; a mentor spot-checks the batch |
| Waitlist promotion | `waitlist-promotion.md` | One family | When a seat opens | Reply-by 48 hours is a proposed default |
| Survey invite | `survey-invite.md` | Active families | Within 24 hours of the session (Ch. 12) | Three to five specific questions |
| Announcement | `announcement.md` | A segment; email or group chat | As needed | Offer a formal and a short version when urgent |
| Background-check invite | `background-check-invite.md` | One volunteer | After mentor registration | Links to the vendor's form; never asks for identity numbers |
| Background-check reminder | `background-check-reminder.md` | One volunteer | 3 and 7 days after the invite, then stop (proposed) | Says nothing about any result |
| Newsletter paragraph | none | Active families | Monthly | Narrative only; the Chapter 25 template supplies dates and counts |

`per-recipient` means one message per family, which may name that family's own child. `bcc-group` means one
message to many families and must not name any child.

## Data formats

**recipients.csv** (the leader's export; keep it in the club account):
`recipient_id,email,email_status,<merge fields...>`. `recipient_id` is a guardian or mentor ID, never a name.
`email_status` is `active`, `bounced` or `unsubscribed`.

**Draft file:** the template's front matter with `status: DRAFT - NOT SENT` and a blank `approved_by:`, plus a `to:`
line (per-recipient) or `bcc:` line (bcc-group), then `**Subject:** ...` and the body.

**Approval record** (`drafts/<id>.md.approval.json`):

```json
{
  "draft": "drafts/G014.md",
  "content_sha256": "<hash of channel, recipients, subject and body>",
  "approved_by": "Leader Name",
  "approved_at": "2026-09-24T18:02:11Z",
  "expires_at": "2026-09-25T18:02:11Z"
}
```

**CommsLog:** `date, channel, segment, subject, drafted_by, approved_by, sent_date`, as in `references/roster-schema.md`.
A segment name only. Never a body or an address.

## Template wrinkles the current templates have

Found while reading `assets/templates/*.md`. Fix the templates or handle them in `mail_merge.py`.

1. **Two placeholder styles.** `merge_fields:` lists the machine-filled fields. Every other `{{...}}` is an authoring prompt the agent must
   resolve first. But some templates write `{{club name}}` (authoring) and others `{{club_name}}` (merge field). Normalize them.
2. **`announcement.md` holds two messages.** The email version and the short group-chat version, separated by a horizontal rule. The
   renderer needs a `--variant email|group-chat` option, or the template should be split in two.
3. **Comment blocks.** Each template ends with an `<!-- ... -->` note to the writer. Strip these from rendered drafts.
4. **A per-recipient optional line.** `reminder.md` has an optional tailored sentence for one family. That is a per-recipient field
   (an optional `tailored_line` column), not a global `--set` value. A blank value removes the line.
5. **`reminder.md` uses `student_first_name` but its segment is a group.** That is allowed only because each family gets its own copy.
   The mode check in `render()` is what enforces it.

## Build order

1. `mail_merge.py`: `load_template`, `load_recipients`, `render`. These are pure functions, so test them first.
2. `comms_log.py`: append and lookup.
3. `mail_merge.py`: `write_drafts`, `write_merge_csv`, the command line, and the identity-number check.
4. Walk through "Path B details" with the author, and add the connector draft steps to the routine. Paths A and B are then complete.
5. **Parked:** `approval.py` and `send_approved.py`, only if the author later chooses Path C.

Work test-first: each `@STUB` test in `stubs/test_email_stubs.py` names a behavior. Un-skip one, write its body, make it pass.

## Adding real sending (Path C, parked)

**Parked.** The author chose Paths A and B on 2026-09-21, so none of this is planned. It stays as a checklist in case the
decision changes. Do not start it until the author has chosen Path C in writing (record it in `TODO.md`).

- Implement delivery in `send_approved.py` only. No other script may deliver anything.
- The transport is injected. Tests use `FakeTransport`; the real transport gets no automated test that calls it.
- The first live send is a manual runbook the **author** runs, to their own address. An agent does not run it.
- Update `BANNED_IMPORTS` in `stubs/test_email_stubs.py` on purpose, and say why in the change.
- Keep the dry-run default, the batch cap and the pause. Stop at the first error, and never retry automatically.
- Re-check unsubscribes and bounces immediately before each delivery.
- Confirm the send-blocking hook is installed and blocks the sender by name. Add a test.
- Have the venue or district review list consent, unsubscribe handling and (for text messages) separate consent.
- Write what to do when a wrong message goes out: tell the leader immediately, use the Incident form, and let a person decide who to notify.

## Open decisions for the author

1. ~~Path A, B or C?~~ **Decided 2026-09-21: Paths A and B. Path C is parked.**
2. Which mail system: Google, Microsoft, a newsletter service, or the registration platform's own email? Path B needs one whose
   connector offers draft tools and can be blocked from sending.
3. Per-family drafts or one BCC message for announcements and surveys?
4. Under Paths A and B the leader reviews drafts before sending. May the leader review routine messages (confirmations, reminders) as a batch, or one by one?
5. Unsubscribe and consent handling for the mailing list, and separate consent for text messages. This is a question for the venue or district.
6. Defaults: waitlist reply-by (48 hours). The approval lifetime (24 hours), batch cap (50) and pause between messages (1 second) matter only for the parked Path C.
7. Where drafts and the CommsLog live: files, or the club's spreadsheet.

## Done means

Every `@STUB` test is un-skipped and passing, the tripwire is intact or was changed deliberately, `SKILL.md` lists the
new scripts, an eval covers "email the families", and the author has reviewed the flow with fake data.
