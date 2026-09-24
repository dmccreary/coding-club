# Events and Registration

Sizing capacity from mentors, processing sign-ups, running the waiting list, check-in, and
closing the loop with the survey and retrospective (Chapters 9, 11 and 12). Hard rules 1 and 3 apply:
you propose, and the leader decides who is in.

Contents: capacity, processing sign-ups, waiting list, before the session, check-in,
after the session, the retrospective.

## Capacity

Mentors register first. Student capacity is then calculated, not guessed:

```
capacity = floor(confirmed mentors x ratio)      # ratio defaults to 3 (the 3:1 ratio)
open seats = capacity - registered students
```

Example: 8 confirmed mentors gives 24 seats. If 31 families sign up, 24 are registered and 7 are
waitlisted in the order they signed up. Show this arithmetic every time and state the ratio and
which mentors you counted (see `volunteer-onboarding.md`, "Feeding capacity").

**When the mentor count changes**, recalculate at once.

- More mentors: propose promoting waitlisted families up to the new capacity.
- Fewer mentors and enrolled students now exceed capacity: **never bump an enrolled child.** Tell the
  leader, and lay out options (recruit a replacement, hold new registrations, split the group). The
  leader chooses.

## Process a sign-up

1. Check the form is complete. If a required field is missing or ambiguous, **flag it for a human
   and do not guess.**
2. Check for a duplicate. A returning student should not have to re-enter data already on file.
3. Confirm the guardian's consent is on file, or attached, before any data is saved.
4. Register the student if a seat is open, otherwise add them to the waiting list in submission order.
5. Draft the confirmation email (`communications.md`), and add a line to the leader's weekly glance
   list if the student was waitlisted.

## The waiting list

- Order is the order of submission. Do not reorder it for any other reason.
- When a seat opens (a cancellation, or more mentors), propose the next family, draft the welcome, and
  wait for the leader.
- **Proposed default, confirm with the leader:** give the family 48 hours to confirm, then offer
  the seat to the next family.

## Before the session

- Send the reminder a day or two before (Chapter 12), and check the confirmed headcount against
  the confirmed mentors so the ratio still holds.
- Decide the check-in method with the mentors. The best one is the one they will actually use
  every week. A QR-code check-in that gets abandoned by week three is worse than a paper sheet.

## After the session

- **Attendance:** enter it in the Attendance sheet. It feeds capacity planning, grant reports and
  visitor check-in.
- **Survey:** draft the invite within 24 hours (`communications.md`), three to five specific questions.
- **Analyze survey responses** for a pattern repeated across several respondents, not one comment.
  One family mentioning noise may be an outlier. Five families independently mentioning it is a
  signal (Chapter 12).

## The retrospective

Prompt a 10 to 15 minute debrief on the same day, then help write it up. The standing checklist
(Chapter 12):

1. Attendance versus registration. Who did not show and why, if known?
2. Any incidents? If yes, point to the Incident or Safety Report Form and keep the shared log to
   what the form says. Do not summarize a specific child's situation in the log.
3. Survey highlights, as patterns.
4. One thing to change next time.

Record the outcome as a row in LessonsLearned: `date, session_id, what_worked, what_to_change, owner,
due, status`. A debrief that is not written down does not count.

**Watch the log for patterns** and flag them to the leader for proactive mentor engagement: for
example, "the Tuesday group has run short on time three sessions in a row". The leader talks to
the mentor. You do not contact a mentor about their performance.
