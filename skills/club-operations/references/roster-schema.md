# Roster Schema

The club's data lives in a handful of sheets. This is the layout the skill assumes. If the
club already has its own columns, map to them instead of forcing a change; the point is that every
field has a stated use, per Chapter 24.

Contents: sheets, field lists, segments, access, IDs.

## IDs

Use opaque IDs (`S001` for students, `G001` for guardians, `M001` for mentors), never names or
email addresses. An ID that reveals nothing lets the sensitive sheets be shared, analyzed and
deleted without exposing who is who.

## Sheets

Each row is `field: what the club uses it for`.

**Families**, one row per guardian:

- `guardian_id`: joins to students
- `name`, `email`: reach the family. The email is the main contact for a minor
- `email_status` (`active`, `bounced`, `unsubscribed`): so bounced and opted-out addresses are not mailed
- `phone` (optional): urgent same-day notices only

**Students**, one row per student:

- `student_id`, `preferred_name`, `grade`, `guardian_id`: identify the student and family
- `group`: the specialty group (Scratch, Python, MicroPython, Robots, Advanced Robots)
- `status` (`active`, `waitlist`, `alumni`): drives the email segment and capacity
- `enrolled_date`, `left_date`: start the 18-month retention clock
- `data_consent_date`, `photo_permission` (`yes`/`no`): kept separate on purpose

**Mentors**, one row per mentor:

- `mentor_id`, `name`, `email`, `phone`: reach them
- `status` (`registered`, `check_requested`, `in_progress`, `clear`, `needs_review`, `active`, `inactive`): the onboarding pipeline
- `training_complete_date`: whether they may lead a group

**MentorAvailability**, one row per mentor per session: `mentor_id`, `session_id`, `confirmed` (`yes`/`no`). Drives capacity.

**BackgroundChecks** (restricted), one row per volunteer:

- `mentor_id`, `requested_date`, `vendor_reference` (the vendor's opaque reference, not a personal number)
- `vendor_status` (`requested`, `in_progress`, `clear`, `needs_review`)
- `decision`, `decided_by`, `decided_date`: filled in **only by a human**
- `expires_date`: drives renewal reminders
- Never store an SSN, license number, date of birth or result detail here

**Sessions**: `session_id`, `date`, `group`, `venue`, `mentors_confirmed`, `capacity`.

**Registrations**: `session_id` (or `term_id`), `student_id`, `submitted_at`, `status` (`registered`, `waitlisted`, `cancelled`), `waitlist_position`.

**Attendance**: `session_date`, `session_id`, `student_id`, `present` (`1`/`0`), `checkin_method`. Feeds capacity planning, grant reports and visitor check-in.

**Demographics** (restricted, optional, consented):

- `person_id`, `person_type` (`student`/`mentor`): the ID, never the name
- `gender`, `race_ethnicity`: as the funder or district defines the categories, with `Prefer not to say` as a normal value
- `source` (`guardian`/`self`), `collected_date`
- `consent_date`: **required**. Rows without it are excluded from every report

**CommsLog**, one row per message sent: `date`, `channel`, `segment`, `subject`, `drafted_by` (`ai`/`human`), `approved_by`, `sent_date`. Lets the leader answer a family who asks whether a message was AI-drafted.

**LessonsLearned**: `date`, `session_id`, `what_worked`, `what_to_change`, `owner`, `due`, `status`. The log from Chapter 1 that closes the retrospective loop.

## Email segments (Chapter 24)

Segments are derived from status, not maintained by hand:

| Segment | Who |
|---|---|
| Active families | Guardians of students with `status = active` |
| Waitlist | Guardians of students with `status = waitlist` |
| Mentors | Mentors with `status` of `clear` or `active` |
| Alumni | Guardians of students with `status = alumni` who opted in to updates |

A contact can be in more than one segment (a parent who also mentors). A student is in exactly
one of active or waitlist.

## Access

| Sheet | Who can open it |
|---|---|
| Families, Students, Registrations, Attendance, CommsLog, LessonsLearned | Leader and mentors who need it |
| Mentors, MentorAvailability | Leader and co-leaders |
| BackgroundChecks | Leader and the named reviewer only |
| Demographics | Leader and named board members only |

Keep everything in club-owned accounts. Never share a sheet as "anyone with the link".
