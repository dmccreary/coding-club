#!/usr/bin/env python3
"""STUB - not implemented. Records that a PERSON approved one exact draft.

PARKED: the author chose Paths A and B on 2026-09-21, so this is not planned. Build it only if the
author later chooses Path C (automated sending). Under Paths A and B the leader reviews and sends.

Read references/email-messaging.md first. Standing instruction from the author (2026-09-21): never
send a real email while building or testing anything in this skill. This module approves and
verifies; it never sends, and it must not import a mail or network library.

Why it exists: "the leader approved it" has to mean "the leader approved THIS text". An approval is
a small file beside the draft that holds a hash of the exact content, so an edit after approval
silently voids it.

Design
  drafts/<id>.md                     the draft
  drafts/<id>.md.approval.json       {draft, content_sha256, approved_by, approved_at, expires_at}

  * content_hash covers the canonical content: channel, recipients, subject and body. It must NOT
    cover the `status:` or `approved_by:` header lines, or approving would change the hash.
  * approve() needs a person at a terminal. It must refuse when sys.stdin is not a TTY, so an
    agent running commands cannot approve its own work. Verify that Claude Code's shell tool really
    has no TTY before relying on this, and say so in your test notes.
  * Approvals expire (DEFAULT_TTL_HOURS is a proposal; the author confirms it).
  * verify() raises ApprovalError if the record is missing, expired, or the content changed.
"""
import sys
from dataclasses import dataclass

from _stub import todo

APPROVAL_SUFFIX = ".approval.json"
DEFAULT_TTL_HOURS = 24   # proposed default, author to confirm


class ApprovalError(Exception):
    """The draft is not approved, or its approval no longer applies."""


@dataclass(frozen=True)
class Approval:
    draft: str
    content_sha256: str
    approved_by: str
    approved_at: str     # ISO 8601, UTC
    expires_at: str


def content_hash(draft_path):
    """sha256 of the canonical content (see the module docstring for what is included)."""
    todo("Implement content_hash.")


def approve(draft_path, approver, ttl_hours=DEFAULT_TTL_HOURS):
    """Write the approval record. Refuse unless a person is at a terminal. Return the Approval."""
    todo("Implement approve, including the TTY check and an on-screen summary the person confirms.")


def verify(draft_path):
    """Return the Approval if it is valid now, else raise ApprovalError."""
    todo("Implement verify.")


def revoke(draft_path):
    """Delete the approval record."""
    todo("Implement revoke.")


def main(argv=None):
    todo("Implement: approve <draft>, verify <draft>, revoke <draft>.")


if __name__ == "__main__":
    sys.exit(main())
