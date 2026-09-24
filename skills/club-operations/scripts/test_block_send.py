#!/usr/bin/env python3
"""Tests for block_send.py and the settings snippet. Run: python3 -m unittest test_block_send -v

The exit code is the whole safety contract (Claude Code blocks on 2 and allows on
everything else), so most tests run the script as a real subprocess and check it.
"""
import fnmatch
import json
import os
import re
import subprocess
import sys
import tempfile
import unittest

import block_send as hook

HERE = os.path.dirname(os.path.abspath(__file__))
SCRIPT = os.path.join(HERE, "block_send.py")
SNIPPET = os.path.join(HERE, "..", "assets", "enforcement", "settings.json")
SERVER = "mcp__609b52d7-9da5-4425-b531-b48ffac261b4"   # a UUID-style server name, as connectors use


def run_hook(tool_name, tool_input=None, extra_args=(), raw=None):
    payload = raw if raw is not None else json.dumps({"tool_name": tool_name, "tool_input": tool_input or {},
                                                      "hook_event_name": "PreToolUse"})
    proc = subprocess.run([sys.executable, SCRIPT, *extra_args], input=payload,
                          capture_output=True, text=True, timeout=20)
    return proc.returncode, proc.stderr


class SendToolsAreBlocked(unittest.TestCase):
    def test_send_tools_exit_2_whatever_the_server_is_called(self):
        for tool in ("send_message", "reply", "forward", "send_email", "send_draft", "reply_all",
                     "sendMessage", "slack_send_message", "chat_postMessage", "post_message",
                     "publish_post", "broadcast", "send_sms", "resend_message", "schedule_send"):
            code, err = run_hook(f"{SERVER}__{tool}", {"to": "someone@example.org", "body": "SECRET BODY"})
            self.assertEqual(code, 2, tool)
            self.assertIn("draft-only", err, tool)
            self.assertNotIn("SECRET BODY", err, tool)
            self.assertNotIn("someone@example.org", err, tool)

    def test_draft_and_read_tools_are_allowed(self):
        for tool in ("create_draft", "update_draft", "delete_draft", "get_draft", "list_drafts",
                     "search_threads", "get_thread", "list_labels", "create_reply_draft",
                     "list_sent_messages", "get_sender_info", "label_message"):
            code, _ = run_hook(f"{SERVER}__{tool}")
            self.assertEqual(code, 0, tool)

    def test_send_wins_over_draft_in_the_same_name(self):
        self.assertEqual(run_hook(f"{SERVER}__send_draft")[0], 2)

    def test_non_mcp_tools_other_than_bash_are_left_alone(self):
        for tool in ("Read", "Edit", "Write", "SendMessage", "PushNotification"):
            self.assertEqual(run_hook(tool)[0], 0, tool)


class AllowAndBlockOptions(unittest.TestCase):
    def test_allow_overrides_by_short_or_full_name(self):
        self.assertEqual(run_hook(f"{SERVER}__post_comment", extra_args=["--allow", "post_comment"])[0], 0)
        self.assertEqual(run_hook(f"{SERVER}__post_comment", extra_args=["--allow", f"{SERVER}__post_comment"])[0], 0)
        self.assertEqual(run_hook(f"{SERVER}__post_comment")[0], 2)

    def test_block_adds_a_harmless_tool_for_the_live_test(self):
        self.assertEqual(run_hook(f"{SERVER}__list_labels")[0], 0)
        code, err = run_hook(f"{SERVER}__list_labels", extra_args=["--block", "list_labels"])
        self.assertEqual(code, 2)
        self.assertIn("block list", err)


class BashCommands(unittest.TestCase):
    def test_mail_programs_and_web_apis_are_blocked(self):
        for command in ('echo hi | sendmail bob@example.org', 'mutt -s Hi bob@example.org < body.txt',
                        'mail -s "Hello" bob@example.org', 'python3 -c "import smtplib"',
                        'curl smtp://mail.example.org', 'curl https://api.sendgrid.com/v3/mail/send',
                        'curl -X POST https://hooks.slack.com/services/T0/B0/x', '/usr/sbin/sendmail -t',
                        'sh -c "msmtp bob@example.org"',
                        'python3 stubs/send_approved.py --really-send', 'python3 scripts/send_approved.py --dry-run',
                        'cd stubs && python3 send_approved.py'):
            code, err = run_hook("Bash", {"command": command})
            self.assertEqual(code, 2, command)
            self.assertNotIn("bob@example.org", err, command)

    def test_ordinary_club_commands_are_allowed(self):
        for command in ("python3 scripts/demographic_report.py --demographics d.csv --attribute gender",
                        "python3 scripts/identity_number_guard.py roster.csv",
                        'git commit -m "resend the survey template"', "mkdocs build --strict",
                        "ls club-outputs/2026-09-21-announcement", 'echo "please send the draft to Sam"',
                        "python3 -m unittest test_email_stubs", "python3 stubs/mail_merge.py --help",
                        "python3 approval.py verify drafts/G014.md"):
            self.assertEqual(run_hook("Bash", {"command": command})[0], 0, command)

    def test_bash_without_a_command_is_allowed(self):
        self.assertEqual(run_hook("Bash", {})[0], 0)


class FailsClosed(unittest.TestCase):
    def test_unreadable_input_blocks(self):
        for raw in ("", "not json", "[]", "null", "{}", '{"tool_name": ""}', '{"tool_name": 5}'):
            code, err = run_hook("ignored", raw=raw)
            self.assertEqual(code, 2, raw)
            self.assertIn("draft-only", err, raw)

    def test_bad_command_line_arguments_block_instead_of_crashing_open(self):
        code, _ = run_hook(f"{SERVER}__create_draft", extra_args=["--no-such-option"])
        self.assertEqual(code, 2)  # argparse exits 2, which also blocks

    def test_a_crash_inside_the_check_is_turned_into_a_block(self):
        crash = ("import block_send\n"
                 "def boom(*a, **k): raise RuntimeError('boom')\n"
                 "block_send.blocked_reason = boom\n"
                 "import sys\n"
                 "sys.exit(block_send.main())\n")
        proc = subprocess.run([sys.executable, "-c", crash], input='{"tool_name":"mcp__x__create_draft"}',
                              capture_output=True, text=True, cwd=HERE, timeout=20)
        self.assertEqual(proc.returncode, 2)


class Logging(unittest.TestCase):
    def test_log_records_tool_name_and_time_but_never_content(self):
        with tempfile.TemporaryDirectory() as tmp:
            path = os.path.join(tmp, "blocked-sends.log")
            run_hook(f"{SERVER}__send_message", {"to": "a@example.org", "body": "SECRET BODY"},
                     extra_args=["--log", path])
            with open(path) as handle:
                text = handle.read()
        self.assertIn("send_message", text)
        self.assertNotIn("SECRET BODY", text)
        self.assertNotIn("a@example.org", text)

    def test_an_unwritable_log_does_not_change_the_decision(self):
        code, _ = run_hook(f"{SERVER}__send_message", extra_args=["--log", "/no/such/dir/x.log"])
        self.assertEqual(code, 2)


class SettingsSnippet(unittest.TestCase):
    def setUp(self):
        with open(SNIPPET) as handle:
            self.settings = json.load(handle)

    def test_the_snippet_is_valid_json_with_both_layers(self):
        self.assertTrue(self.settings["permissions"]["deny"])
        self.assertTrue(self.settings["hooks"]["PreToolUse"])

    def test_deny_globs_match_send_tools_and_not_draft_tools(self):
        patterns = self.settings["permissions"]["deny"]
        for tool in ("send_message", "reply", "forward", "send_draft", "reply_all", "sendMessage", "schedule_send"):
            self.assertTrue(any(fnmatch.fnmatchcase(f"{SERVER}__{tool}", p) for p in patterns), tool)
        for tool in ("create_draft", "update_draft", "get_draft", "list_drafts", "search_threads", "list_labels"):
            self.assertFalse(any(fnmatch.fnmatchcase(f"{SERVER}__{tool}", p) for p in patterns), tool)

    def test_hook_matcher_routes_bash_and_mcp_calls_only(self):
        entry = self.settings["hooks"]["PreToolUse"][0]
        matcher = re.compile(entry["matcher"])   # the docs say matchers are unanchored regexes
        for tool in ("Bash", f"{SERVER}__send_message", f"{SERVER}__create_draft"):
            self.assertTrue(matcher.search(tool), tool)
        for tool in ("Read", "Edit", "Write"):
            self.assertFalse(matcher.search(tool), tool)

    def test_hook_command_points_at_the_installed_script(self):
        command = self.settings["hooks"]["PreToolUse"][0]["hooks"][0]["command"]
        self.assertIn("block_send.py", command)
        self.assertIn("${CLAUDE_PROJECT_DIR}", command)


if __name__ == "__main__":
    unittest.main()
