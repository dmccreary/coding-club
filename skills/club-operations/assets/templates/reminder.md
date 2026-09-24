---
status: DRAFT - NOT SENT
channel: email
audience_segment: active-families
send_by: YYYY-MM-DD       # a day or two before the session
drafted_by: AI (club-operations)
approved_by:
merge_fields: [guardian_first_name, student_first_name, session_date, session_time, room]
---

**Subject:** Reminder: {{club name}} this {{weekday}}

Hi {{guardian_first_name}},

A quick reminder that {{student_first_name}} is registered for {{session_date}} at {{session_time}}
in {{room}}.

- **What to bring:** {{items, or "nothing"}}
- **Can't make it?** Reply to this email so we can offer the seat to a family on the waiting list.

{{OPTIONAL, ONE FAMILY ONLY: one tailored sentence about this student's progress, for example that they are
one challenge away from a badge. Delete this line for every other family. A mentor spot-checks the
batch before it goes out.}}

See you soon,
{{leader name}}
{{club name}}

<!-- Each copy goes to one family, so it may name that family's own child. Never use this template
for a message to more than one family at once. -->
