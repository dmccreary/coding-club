#!/usr/bin/env python3
"""Tests and acceptance spec for the email-messaging stubs. Run from stubs/:

    python3 -m unittest test_email_stubs -v

The first group runs today and guards the stubs. The SKIPPED tests are the spec: each docstring is
a behavior the finished code must have. When you implement a stub, delete its @STUB decorators and
write the body. Nothing here may send a real email. Use FakeTransport and example.org addresses.
"""
import ast
import os
import sys
import unittest

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import approval          # noqa: E402
import comms_log         # noqa: E402
import mail_merge        # noqa: E402
import send_approved     # noqa: E402
import _stub             # noqa: E402

STUB_FILES = ["mail_merge.py", "comms_log.py", "approval.py", "send_approved.py", "_stub.py"]

# A stub that imports one of these could send something. Adding real delivery is a deliberate
# decision (see "Adding real sending" in references/email-messaging.md): edit this set on purpose.
BANNED_IMPORTS = {"smtplib", "imaplib", "poplib", "nntplib", "socket", "ssl", "http", "urllib",
                  "requests", "httpx", "aiohttp", "aiosmtplib", "twilio", "sendgrid", "slack_sdk",
                  "mailchimp_marketing"}

STUB = unittest.skip("STUB: not implemented yet. This test is the spec. See references/email-messaging.md")
PARKED = unittest.skip("PARKED: Path C was not chosen (2026-09-21). Build only if the author changes that. "
                       "See references/email-messaging.md")


def imported_modules(path):
    with open(path, encoding="utf-8") as handle:
        tree = ast.parse(handle.read())
    names = set()
    for node in ast.walk(tree):
        if isinstance(node, ast.Import):
            names.update(alias.name.split(".")[0] for alias in node.names)
        elif isinstance(node, ast.ImportFrom) and node.module:
            names.add(node.module.split(".")[0])
    return names


class StubGuards(unittest.TestCase):
    """These run now."""

    def test_no_stub_imports_a_mail_or_network_library(self):
        for name in STUB_FILES:
            found = imported_modules(os.path.join(HERE, name)) & BANNED_IMPORTS
            self.assertFalse(found, f"{name} imports {sorted(found)}. If you are adding real sending, read "
                                    "'Adding real sending' in references/email-messaging.md and update "
                                    "BANNED_IMPORTS on purpose.")

    def test_every_stub_says_it_is_a_stub_and_repeats_the_standing_instruction(self):
        for module in (mail_merge, comms_log, approval, send_approved):
            doc = " ".join((module.__doc__ or "").split())   # docstrings wrap lines mid-sentence
            self.assertIn("STUB", doc, module.__name__)
            self.assertIn("never send a real email", doc, module.__name__)

    def test_unimplemented_functions_raise_a_todo_that_points_at_the_spec(self):
        calls = [
            (mail_merge.load_template, ("t.md",)), (mail_merge.load_recipients, ("r.csv",)),
            (mail_merge.fill_authoring_placeholders, (None, {})), (mail_merge.render, (None, None)),
            (mail_merge.write_drafts, ([], "out")), (mail_merge.write_merge_csv, ([], [], "out")),
            (mail_merge.main, ([],)),
            (comms_log.append_entry, ("log.csv", None)), (comms_log.read_entries, ("log.csv",)),
            (comms_log.was_ai_drafted, ("log.csv", "s", "2026-01-01")), (comms_log.main, ([],)),
            (approval.content_hash, ("d.md",)), (approval.approve, ("d.md", "Leader")),
            (approval.verify, ("d.md",)), (approval.revoke, ("d.md",)), (approval.main, ([],)),
            (send_approved.send_approved, ("drafts", send_approved.FakeTransport())), (send_approved.main, ([],)),
            (send_approved.ConnectorTransport().deliver, (None,)), (send_approved.SmtpTransport().deliver, (None,)),
        ]
        for function, args in calls:
            with self.assertRaises(NotImplementedError, msg=function.__qualname__) as caught:
                function(*args)
            self.assertIn(_stub.MARKER, str(caught.exception), function.__qualname__)
            self.assertIn("references/email-messaging.md", str(caught.exception), function.__qualname__)

    def test_fake_transport_records_and_sends_nothing(self):
        transport = send_approved.FakeTransport()
        self.assertEqual(transport.deliver("draft one"), "fake-1")
        self.assertEqual(transport.deliver("draft two"), "fake-2")
        self.assertEqual(transport.delivered, ["draft one", "draft two"])

    def test_the_readme_lists_every_stub(self):
        with open(os.path.join(HERE, "README.md"), encoding="utf-8") as handle:
            readme = handle.read()
        for name in STUB_FILES[:-1]:
            self.assertIn(name, readme)


class MailMergeSpec(unittest.TestCase):
    @STUB
    def test_merge_fields_are_filled_per_recipient(self):
        """render() fills every field named in the template's merge_fields from that recipient's data."""

    @STUB
    def test_an_unresolved_authoring_placeholder_fails_the_render(self):
        """A leftover {{One sentence: ...}} raises. A half-filled message is never written."""

    @STUB
    def test_a_missing_merge_field_fails_and_names_the_field_not_the_value(self):
        """If the CSV lacks guardian_first_name, the error says so without echoing any row."""

    @STUB
    def test_bcc_group_mode_rejects_any_student_field(self):
        """reminder.md (uses student_first_name) renders in per-recipient mode but is refused in bcc-group mode."""

    @STUB
    def test_each_draft_contains_only_its_own_recipients_address(self):
        """In per-recipient mode no draft file contains another family's address."""

    @STUB
    def test_output_containing_an_identity_number_is_refused(self):
        """If a merge value holds 123-45-6789, nothing is written and the error names no value."""

    @STUB
    def test_bounced_and_unsubscribed_recipients_are_skipped_and_counted(self):
        """They get no draft. The summary says how many were skipped and why, with no addresses."""

    @STUB
    def test_the_status_header_stays_draft_and_approved_by_stays_empty(self):
        """Rendered files keep 'status: DRAFT - NOT SENT' and a blank approved_by."""

    @STUB
    def test_an_existing_approved_draft_is_never_overwritten(self):
        """If drafts/<id>.md has an approval record, write_drafts() refuses instead of replacing it."""

    @STUB
    def test_the_command_line_prints_counts_only(self):
        """stdout and stderr contain numbers of drafts and skips, never a body or an address."""


class CommsLogSpec(unittest.TestCase):
    @STUB
    def test_the_first_append_creates_the_file_with_a_header_row(self):
        """The header is exactly FIELDS, in order."""

    @STUB
    def test_an_entry_never_stores_a_body_or_an_address(self):
        """An email address or long body text in any field is rejected."""

    @STUB
    def test_an_entry_containing_an_identity_number_is_refused(self):
        """identity_number_guard.scan_text finds it, and append_entry raises without echoing it."""

    @STUB
    def test_drafted_by_must_be_ai_or_human_and_approved_by_must_name_a_person(self):
        """Blank approved_by, or drafted_by 'robot', raises."""

    @STUB
    def test_the_log_is_append_only(self):
        """A second append leaves the first row untouched."""

    @STUB
    def test_was_ai_drafted_answers_true_false_or_none(self):
        """None means no matching row. It never guesses."""


@PARKED
class ApprovalSpec(unittest.TestCase):
    @STUB
    def test_the_hash_ignores_the_status_and_approved_by_lines(self):
        """Changing only those header lines does not change content_hash."""

    @STUB
    def test_editing_the_body_after_approval_voids_it(self):
        """verify() raises ApprovalError after any change to subject, body, channel or recipients."""

    @STUB
    def test_approve_refuses_when_stdin_is_not_a_terminal(self):
        """With sys.stdin.isatty() False, approve() raises and writes no record."""

    @STUB
    def test_an_expired_approval_fails_verify(self):
        """After ttl_hours, verify() raises ApprovalError."""

    @STUB
    def test_verify_fails_when_there_is_no_record(self):
        """A draft that was never approved raises ApprovalError."""


@PARKED
class SendApprovedSpec(unittest.TestCase):
    @STUB
    def test_the_default_is_a_dry_run_that_delivers_nothing(self):
        """With FakeTransport and dry_run=True, transport.delivered stays empty and counts are printed."""

    @STUB
    def test_real_delivery_needs_both_the_flag_and_a_terminal(self):
        """--really-send without a TTY exits non-zero and delivers nothing."""

    @STUB
    def test_an_unapproved_or_edited_draft_is_skipped_and_counted(self):
        """Only drafts whose approval verifies reach the transport."""

    @STUB
    def test_a_draft_with_an_identity_number_is_never_delivered(self):
        """The guard runs again at send time, not just at render time."""

    @STUB
    def test_a_recipient_who_unsubscribed_after_rendering_is_skipped(self):
        """Suppression is re-checked immediately before each delivery."""

    @STUB
    def test_it_stops_at_the_first_error_and_never_retries(self):
        """A FakeTransport that raises on the third draft leaves deliveries 1 and 2, and stopped_early True."""

    @STUB
    def test_every_delivery_appends_a_comms_log_row(self):
        """One row per delivered draft, with drafted_by and approved_by filled."""

    @STUB
    def test_the_batch_cap_is_respected(self):
        """With batch_cap=2 and five approved drafts, exactly two are delivered and the rest are reported."""

    @STUB
    def test_the_report_and_output_never_include_bodies_or_addresses(self):
        """Counts only."""


if __name__ == "__main__":
    unittest.main()
