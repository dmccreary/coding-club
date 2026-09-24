# Communications

Drafts for the mailing list, announcements, newsletters, reminders, waitlist notices and survey
invites, plus keeping the list itself clean. Everything here is a draft a person approves
(hard rule 1). Templates are in `assets/templates/`.

Contents: choose a channel, write the message, per-message-type notes, keep the list clean,
mail-merge format, log what was sent.

## Choose a channel (Chapter 24)

- **Urgent or informal** (room change, weather, "we moved to Room 12"): the group messaging app.
- **Formal or worth keeping** (policy, schedule, consent): email from the club account.
- **Monthly narrative:** the newsletter, from the automated template.

When a message is urgent, offer two drafts: a formal one and a short, casual one.

## Write the message

1. Identify the audience segment (see `roster-schema.md`) and the channel.
2. Pull every fact (dates, times, rooms, counts, kit names) from the source data or the leader,
   not from memory. Chapter 32's worked example is an AI newsletter that called a table robot a
   floor robot.
3. Write in the club's voice: short, warm, one clear ask. Aim for a 10th-grade reading level, which
   is the book's target.
4. Use placeholders (`{{guardian_first_name}}`) for anything personal. Never name a child in a message to
   more than one family.
5. Run the four-question quality check from `SKILL.md`, then hand over with the status header
   still saying `DRAFT - NOT SENT`.

## Per-message notes

**Announcement.** One purpose per message. Lead with what changed or what is happening, then
when, where and what to bring, then what the family needs to do.

**Confirmation and reminder.** A confirmation goes out the moment a family registers. A reminder
goes a day or two before the session (Chapter 12). The reminder can carry one tailored line for a
single family, such as a student one badge from finishing a challenge. That copy goes only to that
family, and a mentor spot-checks the batch before it goes out.

**Newsletter paragraph.** Write only the narrative part ("This Month's Highlight"). Dates, badge
counts and session lists come from the automated template (Chapter 25). List every factual claim in
the paragraph in your "Needs your review" list so a mentor can verify it.

**Waitlist promotion.** Only after `events-and-registration.md` says a seat opened. Draft the
welcome, confirm the session details, and state the reply-by time the leader chose.

**Survey invite.** Send within 24 hours of the session while it is fresh. Three to five questions
(Chapter 12). A specific question such as "what is one thing that could be better?" beats "did you
enjoy it?". Say plainly whether answers are anonymous.

**Reply to a parent.** Draft from the club's charter and past messages so it sounds like the club.
Quote the policy accurately, and leave the send decision to the leader. Anything about a specific
child's behavior, health or family situation goes to the leader unsent.

## Keep the list clean

Watch for changes and propose them; never apply them silently. Once a week, produce a table:

| Contact | Current segment | Proposed change | Reason |
|---|---|---|---|
| G014 | Waitlist | Active families | Student S021 enrolled on 2026-09-05 |

Rules:

- **Bounces:** flag for a human. Do not delete the contact.
- **Unsubscribes:** honor them at once and record `email_status = unsubscribed`.
- **Duplicates:** propose a merge and let the leader confirm. Two people with similar names are not always
  one person.
- **Removal or reclassification:** never permanent without a person confirming (Chapter 32).

## Mail-merge format

Delivery is stubbed (`references/email-messaging.md`). Until it is built, fill the templates by hand and
give the leader draft files. Do not write a script that sends.

When the leader wants a merge file, produce a CSV with `guardian_id, email, guardian_first_name`
plus one column per merge field the template uses. It contains addresses, so save it only in
the club's own folder, and say so. Recipients must never see each other's addresses (BCC or
merge).

## Log what was sent

When the leader approves and sends, append a row to the CommsLog (`date, channel, segment,
subject, drafted_by, approved_by, sent_date`). If a family asks whether a message was AI-drafted,
the log answers honestly, and Chapter 32's ethics commitment says the club should.
