# Connectors and "Never Send"

Hard rule 1 says the agent drafts and never sends. A rule in a prompt is a request, and requests
fail: under pressure, after a long conversation, or when a message contains instructions.
This file makes "never send" a fact of the workspace instead. It is written for Claude Code. See
"Other tools" at the end.

Contents: choose a level, what the kit is, install, test it safely, what it cannot stop, why
this is not in `SKILL.md`, other tools.

## Choose a level

| Level | Setup | Assurance |
|---|---|---|
| **A. No mail or chat connector** | Nothing. The agent writes drafts and a mail-merge CSV to files. The leader sends from their own mail account or mail-merge tool | Strongest. There is no send capability to misuse. **Recommended for a club's first term** |
| **B. Draft-only connector** | Connect mail, and install the send-blocking kit below | Strong for connector tools; see the limits |
| **C. B plus hardening** | Also disable bypass mode and restrict network access from shell commands (see the Claude Code permissions and sandboxing docs) | Strongest with a connector |

Mail providers do not offer a draft-only permission: an app that can create drafts can usually
send. So blocking has to happen in the agent's tool layer, which is what the kit does.

## What the kit is

| File | Job |
|---|---|
| `assets/enforcement/settings.json` | Layer 1: `permissions.deny` globs that remove send, reply and forward tools from the agent's tool list. Layer 2: registers the hook |
| `scripts/block_send.py` | Layer 2: a PreToolUse hook that blocks any MCP tool whose name says it sends, and Bash commands that call mail programs or mail APIs |

The two layers fail differently on purpose. The deny globs need no Python. The hook understands
tool names ("create_draft" is fine, "send_draft" is not) and fails closed: Claude Code allows a call on
*any* hook exit code except 2, so the script turns every error, crash and malformed input into exit 2.
Draft tools stay available.

## Install

1. **Use a dedicated club workspace folder** (for example `~/club-workspace`) and start the agent
   there. The kit only affects sessions started in that folder, so it never gets in the way of
   other work.
2. **Copy the hook:**

   ```bash
   mkdir -p ~/club-workspace/.claude/hooks
   cp <path-to-skill>/scripts/block_send.py ~/club-workspace/.claude/hooks/
   ```

3. **Add the settings.** If `~/club-workspace/.claude/settings.json` does not exist, copy
   `assets/enforcement/settings.json` there. If it exists, **merge**: add the three deny entries
   to its `permissions.deny` array and the hook entry to its `hooks.PreToolUse` array. Do not replace
   the file. Check the result is valid JSON with
   `python3 -m json.tool ~/club-workspace/.claude/settings.json`.
4. **Start a new session in that folder** and run `/hooks`. Confirm the PreToolUse hook is listed.
5. **Run the safe tests below** before connecting any real mail account.

Attempts are recorded in `.claude/blocked-sends.log` (time and tool name only, never the message). Read
it at the monthly oversight check: a blocked attempt means the skill or a prompt misbehaved.

## Test it safely

Do not test by asking the agent to send a real email. The author's standing instruction is that nothing in
this skill's development may send one (see `references/email-messaging.md`). Test with a harmless, read-only tool, so a
broken control cannot hurt anyone. These steps use a mail connector's "list labels" tool; any read-only
tool works.

**Test 1: the hook.** Temporarily add `--block list_labels` to the end of the hook `command`.
Start a new session and ask the agent to list your mail labels. Expected: the call is refused with
"Blocked by this club's draft-only policy... on the block list". Then remove the flag.

**Test 2: the deny globs.** Temporarily add `"mcp__*__list_labels"` to `permissions.deny`.
Start a new session and ask the same thing. Expected: the tool is unavailable or refused. Then remove it.

If Test 2 does **not** block, your Claude Code version does not accept a wildcard in the server part
of a deny pattern. Replace the three globs with your server's exact tool names (for example
`mcp__<your-server>__send_message`, `__reply`, `__forward`). The hook still protects you meanwhile.

Also test under the permission mode you really use. Auto and bypass modes change what the agent
is asked about, so confirm the tests above still block.

## What it cannot stop

- **A browser or computer-use agent clicking "Send" in a web mail page.** It uses click tools, not
  a send tool. Do not connect those tools to a draft-only workspace, or add
  `mcp__computer-use__*` and `mcp__claude-in-chrome__*` to `permissions.deny`.
- **Disguised shell commands and scripts.** The Bash check is a heuristic. A program written to
  a file and run later can get past it. Treat the kit as a safety net, not a sandbox.
- **Calendar invitations with guests**, which send email. Not covered yet (see `TODO.md`).
- **A connector added later** under an unusual tool name. Re-run the tests when you add one.
- **The leader.** A person can always send from their own mail. That is the point: a person decides.

## Why this is not in `SKILL.md`

The Claude Code skills documentation (checked 2026-09-21) says:

- `allowed-tools` **grants** permission; it does not restrict anything.
- `disallowed-tools` exists, but its restriction "clears when you send your next message", so it does not
  hold across a conversation.
- Frontmatter keys outside the open Agent Skills standard (`disallowed-tools`, `hooks`, and others)
  cause packaging or upload to fail, and other agent tools would not honor them.

So enforcement lives in the workspace's settings, where it lasts and where deny rules and hook
blocks are applied before prompts and allow rules.

## Other tools

The kit is specific to Claude Code. For OpenAI or Google agent tools, use Level A (no mail
connector) and keep that tool's own approval prompts turned on. Do not rely on the prompt alone.

## Verification status

Confirmed against the Claude Code documentation: deny rules are evaluated first, a hook exit code of 2
blocks a call before allow rules, other exit codes allow it, hook matchers are regular expressions,
and deny globs are accepted in the tool-name position. Confirmed by unit tests, including a check
that breaking the fail-closed path makes them fail: the hook's behavior and the settings file.

**Not yet confirmed by a live session:** the wildcard in the server position of a deny glob, and
behavior in auto and bypass modes. Run the safe tests above.
