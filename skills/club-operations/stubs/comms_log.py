#!/usr/bin/env python3
"""STUB - not implemented. Keeps the CommsLog: a record of what the club sent and who wrote it.

Read references/email-messaging.md first. Standing instruction from the author (2026-09-21): never
send a real email while building or testing anything in this skill. This module only records; it
never sends, and it must not import a mail or network library.

Why it exists: Chapter 32's ethics commitment says a family may ask "was this message AI-drafted?"
and the club answers honestly. This log is how a leader can answer in ten seconds.

Columns (identical to the CommsLog sheet in references/roster-schema.md)
  date, channel, segment, subject, drafted_by, approved_by, sent_date

Rules to enforce
  * Never store the message body or any recipient address. A segment name only ("active-families").
  * drafted_by is `ai` or `human`; approved_by must name a person and must not be blank.
  * Refuse an entry if identity_number_guard.scan_text finds anything in any field.
  * Append only. Never rewrite or delete earlier rows.
  * Create the file with a header row if it does not exist.
"""
import sys
from dataclasses import dataclass

from _stub import todo

FIELDS = ["date", "channel", "segment", "subject", "drafted_by", "approved_by", "sent_date"]


@dataclass(frozen=True)
class CommsLogEntry:
    date: str          # YYYY-MM-DD the message was approved
    channel: str       # email | group-chat
    segment: str       # a segment name, never addresses
    subject: str
    drafted_by: str    # ai | human
    approved_by: str   # a person
    sent_date: str     # YYYY-MM-DD, filled once the leader confirms it went out


def append_entry(log_path, entry):
    """Append one row, creating the file and header if needed."""
    todo("Implement append_entry with the rules in the module docstring.")


def read_entries(log_path):
    """Return every row as a CommsLogEntry, oldest first."""
    todo("Implement read_entries.")


def was_ai_drafted(log_path, subject, sent_date):
    """Answer a family's question. Return True or False, or None if no matching row exists."""
    todo("Implement was_ai_drafted. Match on subject and sent_date; never guess when there is no match.")


def main(argv=None):
    todo("Optional: a small command line to append and to look up an entry.")


if __name__ == "__main__":
    sys.exit(main())
