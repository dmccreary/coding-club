# Email-Messaging Stubs

Placeholders for the parts of the club-operations skill that turn drafts into delivered messages.
**Nothing here sends anything.** Every function raises `NotImplementedError` with a pointer to the spec.

**Standing instruction from the author (2026-09-21):** no agent and no test may send a real email
while this is being built. Use `FakeTransport` and `example.org` addresses. `test_email_stubs.py` fails
if a stub imports a mail or network library.

**Decision (2026-09-21): Paths A and B.** Only `mail_merge.py` and `comms_log.py` are planned. `approval.py` and
`send_approved.py` are **parked** for Path C (automated sending), which the author did not choose. They stay as a
design record.

Read [`references/email-messaging.md`](../references/email-messaging.md) first. It has the design, the message types
with their timing, the data formats, the recommended build order and the open decisions.

## What is here

| File | Purpose | Status |
|---|---|---|
| `mail_merge.py` | Render a template into one DRAFT file per recipient, plus `merge.csv` | **Planned** (Paths A and B) |
| `comms_log.py` | Append-only record of what was sent, so a family can be told whether a message was AI-drafted | **Planned** (Paths A and B) |
| `approval.py` | Record that a person approved one exact draft, by content hash | Parked (Path C not chosen) |
| `send_approved.py` | Human-run delivery of approved drafts. Includes a working `FakeTransport` for tests | Parked (Path C not chosen) |
| `_stub.py` | Shared "not implemented" error | Done |
| `test_email_stubs.py` | 5 guards that run now, and 30 skipped tests that specify the behavior | Guards done, spec skipped |

## How to promote a stub

1. Read the spec, then check the open decisions with the author before writing code.
2. Implement one stub at a time, in the order the spec recommends. Work test-first: remove the
   `@STUB` decorator from one test, write its body, make it pass.
3. Keep the tripwire. If a stub genuinely needs a new library, edit `BANNED_IMPORTS` deliberately and
   explain why in the change.
4. When a stub is finished, move it into `scripts/`, drop its "STUB" wording, add it to "Bundled files" in
   `SKILL.md`, and move its tests next to it so `python3 -m unittest discover` in `scripts/` runs them.
5. Update `references/email-messaging.md` and the `TODO.md` entry.

## Run the tests

```bash
cd skills/club-operations/stubs && python3 -m unittest test_email_stubs -v
```

Skipped tests are expected. They are the to-do list.
