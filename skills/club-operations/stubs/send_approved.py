#!/usr/bin/env python3
"""STUB - not implemented. The optional, HUMAN-RUN step that delivers approved drafts.

PARKED: the author chose Paths A and B on 2026-09-21, so this is not planned. Under those paths
the leader sends from their own mail account. Keep this file only as a design record in case the
author later chooses Path C.

Read references/email-messaging.md first. Standing instruction from the author (2026-09-21): never
send a real email while building or testing anything in this skill. In tests use FakeTransport
below and example.org addresses. Nothing in this file sends anything.

Do not build this until the author has chosen Path C in references/email-messaging.md. The
recommended default is that the leader sends from their own mail account and this file never exists.

Who runs it: a person, in a terminal. The agent must never run it. The send-blocking hook
(scripts/block_send.py) refuses any Bash command that names it, and it must also refuse to run
when sys.stdin is not a TTY.

What it must do, in order
  1. Default to a dry run that prints counts only. Real delivery needs `--really-send` AND a TTY.
  2. For every draft: approval.verify() must pass, and identity_number_guard.scan_text must find nothing.
  3. Skip recipients who are bounced or unsubscribed. Re-check just before delivery, not just at render time.
  4. Deliver one message at a time through a Transport, with a batch cap and a pause between messages.
  5. After each delivery, append a CommsLog row (comms_log.append_entry). Stop at the FIRST error.
     Never retry automatically, because a retry after an unclear failure can send twice.
  6. Print a report of counts: delivered, skipped (with reasons), failed. Never print bodies or addresses.
"""
import sys
from dataclasses import dataclass, field

from _stub import todo

DEFAULT_BATCH_CAP = 50           # proposed default, author to confirm
DEFAULT_PAUSE_SECONDS = 1.0      # proposed default, author to confirm


class Transport:
    """Anything that can deliver one rendered draft. Implementations return a delivery id."""

    def deliver(self, draft):
        raise NotImplementedError


class FakeTransport(Transport):
    """A test double. Records what it was asked to deliver and sends NOTHING. Use it in every test."""

    def __init__(self):
        self.delivered = []

    def deliver(self, draft):
        self.delivered.append(draft)
        return f"fake-{len(self.delivered)}"


class ConnectorTransport(Transport):
    """Deliver through a mail connector's send tool. Agent-level, not a script (see the spec)."""

    def deliver(self, draft):
        todo("Decide whether this should exist at all. Connector tools are called by the agent, not "
             "by Python, and the club workspace blocks them on purpose.")


class SmtpTransport(Transport):
    """Deliver through the club's own mail server. Do not implement before Path C is approved."""

    def deliver(self, draft):
        todo("Implement only after the author approves Path C, and never exercise it in tests.")


@dataclass
class SendReport:
    delivered: int = 0
    skipped: dict = field(default_factory=dict)   # reason -> count
    failed: int = 0
    stopped_early: bool = False


def send_approved(drafts_dir, transport, dry_run=True, batch_cap=DEFAULT_BATCH_CAP,
                  pause_seconds=DEFAULT_PAUSE_SECONDS):
    """Deliver every approved draft in drafts_dir through transport. Return a SendReport."""
    todo("Implement send_approved following the ordered steps in the module docstring.")


def main(argv=None):
    todo("Implement the command line: --drafts DIR, --dry-run (default), --really-send, --batch-cap N. "
         "Refuse to run without a TTY.")


if __name__ == "__main__":
    sys.exit(main())
