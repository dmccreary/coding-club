#!/usr/bin/env python3
"""STUB - not implemented. Renders message templates into per-recipient DRAFT files. Sends nothing.

Read references/email-messaging.md before building this. Standing instruction from the author
(2026-09-21): never send a real email while building or testing anything in this skill. Use
example.org addresses and FakeTransport (stubs/send_approved.py). This module must not import a
mail or network library; stubs/test_email_stubs.py fails if it does.

What to build
  python3 mail_merge.py --template assets/templates/reminder.md --recipients recipients.csv \\
      --out club-outputs/2026-09-26-reminder --set weekday=Saturday --set "club name=Robot Club"

  writes  <out>/drafts/<recipient_id>.md   one draft per recipient, status still DRAFT - NOT SENT
          <out>/merge.csv                  recipient_id, email, and the merge fields used

Template rules (see assets/templates/*.md)
  * Front matter is simple `key: value  # comment` lines between `---` fences, plus lists such as
    `[a, b]`. Parse it by hand. Do not add PyYAML: a leader's plain Python has to run this.
  * `merge_fields:` names the machine-filled placeholders, filled per recipient from the CSV.
  * Every OTHER {{...}} is an authoring prompt, for example {{One sentence: what is happening}}.
    It must be resolved with --set (or by the agent) before rendering. If one is left, fail. Never
    write a half-filled message.
  * Known wrinkle: some templates write {{club name}} (authoring) and others {{club_name}} (merge
    field). The `merge_fields:` list decides which is which. Consider normalizing the templates.

Rules to enforce (SKILL.md hard rules 1, 2 and 5)
  * The status header stays `DRAFT - NOT SENT` and `approved_by` stays empty.
  * One recipient per draft file. No draft may contain another family's address.
  * Two modes. `per-recipient` renders one message per family, which may name that family's own
    child (student_* fields). `bcc-group` renders ONE message to many families and must not use any
    student_* field, so no child is named to more than one family.
  * Run identity_number_guard.scan_text over every rendered draft. Refuse to write if it finds anything.
  * Skip recipients whose email_status is bounced or unsubscribed, and say how many were skipped.
"""
import sys
from dataclasses import dataclass, field

from _stub import todo

MODE_PER_RECIPIENT = "per-recipient"
MODE_BCC_GROUP = "bcc-group"
DRAFT_STATUS = "DRAFT - NOT SENT"


@dataclass(frozen=True)
class Template:
    path: str
    front_matter: dict            # status, channel, audience_segment, send_by, merge_fields, ...
    subject: str
    body: str
    merge_fields: tuple = ()
    authoring_placeholders: tuple = ()   # every {{...}} that is not a merge field


@dataclass(frozen=True)
class Recipient:
    recipient_id: str             # guardian_id or mentor_id, never a name
    email: str
    email_status: str = "active"  # active | bounced | unsubscribed
    fields: dict = field(default_factory=dict)


@dataclass(frozen=True)
class RenderedDraft:
    recipient_id: str
    to: tuple                     # one address for per-recipient; several (as BCC) for bcc-group
    subject: str
    body: str
    channel: str
    status: str = DRAFT_STATUS


def load_template(path):
    """Parse a template file into a Template. Detect merge fields and authoring placeholders."""
    todo("Implement load_template: hand-parse the front matter, split subject from body, and sort "
         "each {{...}} into merge_fields or authoring_placeholders.")


def load_recipients(csv_path):
    """Read recipients.csv (recipient_id, email, email_status, plus merge fields) into Recipient objects."""
    todo("Implement load_recipients. Reject rows with a missing or malformed email.")


def fill_authoring_placeholders(template, values):
    """Resolve authoring prompts from --set values. Raise if any prompt is left unresolved."""
    todo("Implement fill_authoring_placeholders.")


def render(template, recipient, mode=MODE_PER_RECIPIENT):
    """Fill one recipient's merge fields. Enforce the mode rule and the identity-number check."""
    todo("Implement render: fail on a missing merge field, on a student_* field in bcc-group mode, "
         "and if identity_number_guard.scan_text finds anything in the result.")


def write_drafts(drafts, out_dir):
    """Write drafts/<recipient_id>.md files with the status header intact. Return the paths."""
    todo("Implement write_drafts. Never overwrite an existing draft that has an approval record.")


def write_merge_csv(drafts, recipients, out_dir):
    """Write merge.csv (recipient_id, email, merge fields). Return the path."""
    todo("Implement write_merge_csv.")


def main(argv=None):
    todo("Implement the command line described in the module docstring. Print counts only, "
         "never message bodies or address lists.")


if __name__ == "__main__":
    sys.exit(main())
