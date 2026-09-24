---
status: DRAFT - NOT SENT
channel: email
audience_segment: one-family          # sent to a single waitlisted family
send_by: YYYY-MM-DD
drafted_by: AI (club-operations)
approved_by:                          # the leader approves BEFORE this is sent
merge_fields: [guardian_first_name, student_first_name, session_date, session_time, room, reply_by]
---

**Subject:** A seat opened up for {{student_first_name}}

Hi {{guardian_first_name}},

Good news: a seat opened up, and {{student_first_name}} can join us on {{session_date}} at
{{session_time}} in {{room}}.

Please reply by **{{reply_by}}** to confirm. If we don't hear from you by then, we'll offer the
seat to the next family on the list, and you'll stay on the waiting list for future openings.

We'd love to see you there.

{{leader name}}
{{club name}}

<!-- Leader: the reply-by time is a club decision. The proposed default is 48 hours.
Waiting-list order is the order of sign-up; do not skip a family without a reason you can explain. -->
