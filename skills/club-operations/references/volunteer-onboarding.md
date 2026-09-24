# Volunteer Onboarding

Bringing mentors from "interested" to "cleared and leading a group", including the background
check. The skill tracks and nudges; a named person decides. Hard rules 2 and 3 apply throughout.

Contents: name the reviewer, the pipeline, per-stage work, reminders, renewals, recruiting,
feeding capacity.

## Name the reviewer first

Before any check is requested, ask the leader for a **named reviewer and a named backup** who will
judge any "needs review" result. The background-check appendix identifies a single person's calendar
as the failure that stalls the whole process, so one name is not enough. Record both in the
club's data. If the leader cannot name them, stop and say so, because there is no safe place to
route a flagged result.

## The pipeline

| Status | Meaning | Agent does | Human does |
|---|---|---|---|
| `registered` | Signed up as a mentor | Confirms the form is complete; drafts the check invite | Approves and sends the invite |
| `check_requested` | Volunteer was sent the vendor's secure form | Starts the reminder clock | |
| `in_progress` | Volunteer submitted; vendor is processing | Tracks date; drafts reminder if stalled | Sends reminders |
| `clear` | Vendor reports a clear result | Updates status; proposes activation | Confirms activation |
| `needs_review` | Vendor reports anything other than clear | Notifies the named reviewer; changes nothing else | Reviews and decides |
| `active` | Cleared, trained, on the roster | Adds to the Mentors segment and availability | |
| `inactive` | Stepped back | Proposes removal from active segments | Confirms |

Only a human can write the `decision` column in BackgroundChecks. The agent may write
`vendor_status` only, copied from what the vendor reported.

## Per-stage work

**Invite.** Use `assets/templates/background-check-invite.md`. It links to the vendor's secure form
and tells the volunteer never to email or message identity numbers. Never build your own form for
identity numbers and never collect them by any other route. If the leader shares a mentor sign-up
sheet, run `scripts/identity_number_guard.py` on it first, because a "notes" column is where
volunteers paste them.

**Needs review.** Write a short note **to the reviewer, not the volunteer**: who, when it was
requested, that the status is `needs_review`, and nothing about why (you do not know, and you should
not guess). Then stop. If the leader asks for a message to the volunteer, keep it neutral ("we are
finishing a routine step and will be in touch") and tell the leader that the rules for
communicating an adverse result are set by law and by the screening vendor's process, so they should
confirm with the venue or vendor before sending anything.

**Clear.** Draft a welcome that says they are cleared and lists the next step (training,
first session). Update the roster only after the leader confirms.

**Training.** Use the club's own mentor training checklist. If it does not have one, say so and
suggest the leader write one (Chapter 35 covers training). A mentor counts toward group leadership
once `training_complete_date` is filled.

## Reminders (proposed defaults, confirm with the leader)

- Volunteer has not submitted the form: reminder at 3 days, again at 7 days, then tell the leader
  and stop. Do not keep nagging.
- Check `in_progress` for more than the vendor's normal turnaround: tell the leader to contact the vendor.
- Draft only. The leader sends (hard rule 1).

## Renewals

Ask the leader how often the venue or insurer requires re-checks. Set `expires_date`, and produce a
"coming due in 60 days" list. Do not assume an interval.

## Recruiting

Chapter 32 uses an influence graph to find populations of mentors the club is missing. To help:

- Work at the level of **organizations and channels** (a university club, an employer's volunteer
  program, a library, a faith community), not individual people.
- Propose outreach targets and a message per channel. The leader decides who to contact.
- Do not infer anyone's gender, race or background, and do not compile information about named
  individuals from public sources.
- Recruiting messages follow the inclusive-marketing check in Chapter 29, including a review by someone outside the
  current mentor team.

## Feeding capacity

Capacity for student registration comes from mentors who are **confirmed for the session**. Ask the
leader whether the club counts only mentors whose check is `clear` (recommended) or any confirmed
mentor. Use `events-and-registration.md` for the math, and state the policy you used.
