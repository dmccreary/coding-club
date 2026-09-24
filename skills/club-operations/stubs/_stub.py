"""Shared helper for the email-messaging stubs. Not a stub itself, and it sends nothing."""

MARKER = "TODO(future agent)"


def todo(what):
    """Raise the standard 'not implemented yet' error, with a pointer to the spec."""
    raise NotImplementedError(
        f"{MARKER}: {what} See references/email-messaging.md and stubs/README.md. "
        "Never send a real email while building or testing this."
    )
