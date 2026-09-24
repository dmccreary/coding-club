#!/usr/bin/env python3
"""PreToolUse hook: keep a club workspace draft-only.

Hard rule 1 of club-operations says the agent drafts and never sends. A rule in a
prompt is a request; this hook makes it a fact. Claude Code runs it before every
Bash and MCP tool call, and it refuses any call that would send a message.

Contract (Claude Code hooks reference)
  * The tool call arrives as JSON on stdin (tool_name, tool_input, ...).
  * Exit 2 blocks the call and shows stderr to the model. Exit 0 allows it.
  * ANY OTHER exit code allows the call. So this script must never crash into
    a different code: every failure path here is deliberately turned into exit 2.

What it blocks
  * MCP tools whose name says they send: send_message, send_email, send_draft,
    sendMessage, reply, reply_all, forward, post_message, publish, broadcast, sms...
    Tools that only prepare a draft (create_draft, update_draft, ...) are allowed.
  * Bash commands that call a mail program (sendmail, mutt, msmtp...), use smtplib
    or smtp://, or call a mail/chat/SMS web API.
  * Bash commands that name `send_approved`, the human-run sender planned in stubs/.
    A person runs that in their own terminal; an agent never does.

What it cannot do (be honest with the leader about these)
  * It is a safety net, not a sandbox. A script written to disk and run later, or a
    cleverly disguised command, can get past the Bash check.
  * It cannot see a browser or computer-use agent clicking "Send" in a web mail page.
    Do not connect those tools to a draft-only workspace.
  * A calendar invitation with guests sends email. That is not covered yet.

Options (add to the hook command in settings.json)
  --allow NAME   never block this tool (its short name or full mcp__server__name)
  --block NAME   also block this tool (used for the safe live test in connectors.md)
  --log PATH     append "time<TAB>tool" for each block. The message content is never logged.

Test by hand
  echo '{"tool_name":"mcp__abc__send_message","tool_input":{}}' | python3 block_send.py; echo $?   # 2
"""
import argparse
import json
import re
import sys
from datetime import datetime, timezone

# Words in a tool name that mean "this sends something to another person".
SEND_WORDS = {"send", "sendmail", "resend", "reply", "replyall", "forward", "post",
              "publish", "broadcast", "dm", "sms", "tweet"}
# A draft tool that mentions reply or forward only prepares a message. "send" always wins.
DRAFT_WORDS = {"draft", "drafts"}

BASH_SEND_PATTERNS = [
    re.compile(r"(?<![\w.-])(?:sendmail|ssmtp|msmtp|mutt|mailx|s-nail|swaks)(?![\w-])"),
    re.compile(r"(?<![\w.-])mail\s+-s\b"),
    re.compile(r"smtplib|smtps?://", re.I),
    re.compile(r"api\.sendgrid\.com|api\.mailgun\.net|api\.postmarkapp\.com|mandrillapp\.com|api\.mailchimp\.com", re.I),
    re.compile(r"hooks\.slack\.com|slack\.com/api/chat\.|discord(?:app)?\.com/api/webhooks|api\.twilio\.com", re.I),
    # The human-run sender described in stubs/send_approved.py. An agent must never run it, even as a dry run.
    re.compile(r"(?<![\w-])send_approved(?![\w-])"),
]

BLOCKED_MESSAGE = (
    "Blocked by this club's draft-only policy: {what}. Do not retry, and do not look for "
    "another way to send. Save the text as a draft or a file and tell the leader it is "
    "ready for their review."
)


def name_words(name):
    """Split 'chat_postMessage' or 'SendEmail' into lowercase words."""
    spaced = re.sub(r"(?<=[a-z0-9])(?=[A-Z])", "_", name)
    return {word for word in re.split(r"[^A-Za-z0-9]+", spaced.lower()) if word}


def mcp_tool_name(tool_name):
    """('mcp__server__send_message') -> 'send_message'. None if it is not an MCP tool."""
    parts = tool_name.split("__")
    if parts[0] == "mcp" and len(parts) >= 3:
        return "__".join(parts[2:])
    return None


def blocked_reason(tool_name, tool_input, allow=(), block=()):
    """Return why this call must be blocked, or None to allow it."""
    short = mcp_tool_name(tool_name)
    if short is not None:
        if tool_name in allow or short in allow:
            return None
        if tool_name in block or short in block:
            return BLOCKED_MESSAGE.format(what=f"the tool '{short}' is on the block list")
        words = name_words(short)
        if "send" in words or "sendmail" in words or (words & SEND_WORDS and not words & DRAFT_WORDS):
            return BLOCKED_MESSAGE.format(what=f"the tool '{short}' would send a message")
        return None
    if tool_name == "Bash":
        command = tool_input.get("command") if isinstance(tool_input, dict) else ""
        if isinstance(command, str) and any(p.search(command) for p in BASH_SEND_PATTERNS):
            return BLOCKED_MESSAGE.format(what="that command would send mail or a message")
    return None


def log_block(path, tool_name):
    """Record that a send was attempted. Tool name only, never the content. Never raises."""
    if not path:
        return
    try:
        with open(path, "a", encoding="utf-8") as handle:
            handle.write(f"{datetime.now(timezone.utc).isoformat(timespec='seconds')}\t{tool_name}\n")
    except OSError:
        pass


def main(argv=None, stdin=None):
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("--allow", action="append", default=[])
    parser.add_argument("--block", action="append", default=[])
    parser.add_argument("--log")
    args = parser.parse_args(argv)

    try:
        payload = json.load(stdin if stdin is not None else sys.stdin)
        tool_name = payload["tool_name"]
        if not isinstance(tool_name, str) or not tool_name:
            raise ValueError("tool_name missing")
        reason = blocked_reason(tool_name, payload.get("tool_input"), args.allow, args.block)
    except Exception:
        # Fail closed. Claude Code allows the call on any exit code except 2.
        print("Blocked by this club's draft-only policy: the tool call could not be read, "
              "so it was stopped to be safe.", file=sys.stderr)
        return 2

    if reason:
        log_block(args.log, tool_name)
        print(reason, file=sys.stderr)
        return 2
    return 0


if __name__ == "__main__":
    try:
        code = main()
    except BaseException:  # noqa: BLE001 - a crash must never turn into "allow"
        print("Blocked by this club's draft-only policy: the check itself failed.", file=sys.stderr)
        code = 2
    sys.exit(code)
