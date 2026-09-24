# Privacy Rules

Read this the first time in a session you touch people data. The short version is in the hard
rules of `SKILL.md`; this file gives the reasoning and the details so you can handle cases the
rules do not spell out.

Contents: principles, retention defaults, demographic data, identity numbers, messages and AI
tools, who decides, when something goes wrong.

## Principles (Chapter 24)

- **Collect the least.** Every field the club saves is something it must protect, back up and
  eventually delete. Ask of each field: "What does the club actually do with this?"
- **Consent before collection.** A guardian agrees, in writing, before the club collects data
  about their child. Adding a new kind of data later needs a fresh, specific consent.
- **Say how long you keep it.** Retention is a stated duration, written in the charter or handbook,
  not "as long as we might need it".
- **Report in aggregate.** Funders, boards and administrators need counts, not names.
- **Use the club's accounts.** Data lives in club-owned accounts, never a personal inbox or drive
  that leaves with a departing mentor.
- **Check permissions before sharing a link.** "Anyone with the link" is the classic near-miss.

## Retention defaults

Use the club's own written policy if it has one. Otherwise these fill the gap.

| Data | Default | Source |
|---|---|---|
| Signed or declined consent forms | Kept as long as the data they cover is kept | Book, Chapter 24 |
| Progress and attendance records | 18 months after the student stops attending | Book, Chapter 24 |
| Contact information | Only while the family is actively enrolled | Book, Chapter 24 |
| Survey responses | Summarize, then discard the originals within 90 days; keep only anonymized summaries | Book, Chapter 24 |
| Demographic answers | Delete row-level answers when the student's progress record is deleted; aggregate tables may be kept | **Proposed**, author to confirm |
| Background-check records | Status, decision and dates while the volunteer is active, then as the venue or insurer requires | **Proposed**, confirm with the venue |

When you use a "Proposed" default, say so and ask the leader to confirm it.

## Demographic data

Clubs collect gender and race or ethnicity to check whether they reach the families they mean
to (the Chapter 29 equity audit) and because funders ask. That is a legitimate purpose, and
it is also the most sensitive data a club can hold about children. These rules keep it that way.

**Collecting it**

- It is **optional**, and answering never affects a child's place in the club.
- It sits in its own section of the registration form with a plain purpose statement and its own
  consent line, separate from the general data-collection consent and from photo permission.
- **"Prefer not to say" is a normal answer**, counted like any other, never treated as missing.
- A parent or guardian answers for a minor. Mentors answer for themselves.
- Use the categories the funder or district requires. If none are required, ask the leader.
  Do not invent a category list.

**Storing it**

- Keep it in a separate restricted sheet (`Demographics` in `roster-schema.md`), keyed by an
  opaque ID, not by name. Only the leader and named board members can open it.

**Reporting it**

- Run `scripts/demographic_report.py`. It refuses to run below 10 people with consent, combines
  every group smaller than 5, drops people with no consent on file, and never prints IDs.
- Report **one attribute at a time**. Cross-tabulations such as gender by race produce cells of one
  or two children in a small club.
- **Differencing:** two overlapping reports (all students, and all students except one group, or two
  adjacent terms) can be subtracted to reveal a small group. Do not produce overlapping
  breakdowns for publication without telling the leader.
- Compare against local context only with figures the leader supplies (school or community
  demographics). Never make up a comparison figure.

**Never**

- Infer gender, race or ethnicity from a name, photo, handwriting or anything else. It is often
  wrong, and it is not your call about a child.
- Fill in a blank value. Blank means "Not provided".
- Show a table or chart that lets a reader pick out one child, even without a name.

## Identity numbers

Do not request, accept, repeat or store Social Security numbers, driver's license numbers or
payment card numbers. If one appears in the conversation, reply along these lines and do not
repeat the number:

> That looks like a Social Security number. Please delete that message, and enter it only in
> the screening service's secure form. I only track whether the check is requested, in progress
> or complete, and never need the number itself.

To check files, run `python3 scripts/identity_number_guard.py <file>` before you read them, and again on
`club-outputs/` before handing work back. It reports the kind and location of anything it finds, never the
value, and `--redact` writes a clean copy. It cannot remove what someone already typed into the chat, so
the reply above still matters. Sign-up sheets and "notes" columns are where these numbers usually turn up.

## Messages and AI tools

- No child's name in a message that goes to more than one family. A message to one family may
  mention that family's own child.
- Use placeholders such as `{{student_first_name}}` in drafts and let the mail-merge fill them in.
- Do not paste a roster, or a child's name with anything sensitive, into a third-party tool the club
  has not vetted (Chapter 25, third-party tool vetting).
- Never send. Drafts only. See hard rule 1.

## Who decides

| Question | Who decides |
|---|---|
| What the club collects and keeps | The leader, with the oversight board |
| What the law requires (school-hosted clubs, background-check rules, breach notification) | The venue's or district's privacy office, or a qualified professional. The book puts this out of scope |
| Whether a flagged volunteer serves | The named human reviewer |
| Whether a report leaves the club | The leader |

For a legal question, say: "I can't tell you what the law requires for your situation. Your venue's
or district's privacy office can, so please ask them before you finalize this."

## When something goes wrong

A link was public, a message went to the wrong list, a file was shared too widely:

1. Stop and tell the leader immediately. Do not try to quietly fix or delete evidence.
2. Help the leader write it up on the Incident or Safety Report Form (`docs/appendices/list-of-forms.md`, form 11).
3. Who must be notified is a legal question for the venue or district. Do not decide it.
