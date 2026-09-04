#!/usr/bin/env python3
"""Actually execute a Challenge Card's solution_code in a sandboxed
subprocess and check it runs cleanly. This is real execution, not an
LLM self-assessment of correctness.

Supports solution_language: python (executed directly). MicroPython and
Scratch are NOT executable here -- see references/solution-verification-guide.md
for why, and how those two cases are handled instead (stub-import shim /
manual review).

Usage:
    python3 verify_code_solution.py --card-dir /path/to/docs/cards/<card-id>
"""
import argparse
import ast
import re
import subprocess
import sys
import tempfile
from datetime import datetime, timezone
from pathlib import Path

import yaml

TIMEOUT_SECONDS = 5

# Modules that open a live GUI window and never produce stdout -- running
# them in the subprocess sandbox below would either hang until the
# TIMEOUT_SECONDS kill (no window ever gets closed headlessly) or, worse,
# briefly flash a real window on whatever display the sandbox has access
# to. turtle is also how this book actually teaches these labs: via the
# in-browser Skulpt interpreter (see e.g.
# https://dmccreary.github.io/learning-python/python-labs/02-simple-square/),
# not local desktop Python -- so a local CPython subprocess wouldn't be
# testing the real runtime even if it could run headlessly.
GUI_MODULES = ("turtle",)


def uses_gui_module(code: str) -> bool:
    try:
        tree = ast.parse(code)
    except SyntaxError:
        return False
    for node in ast.walk(tree):
        if isinstance(node, ast.Import):
            if any(alias.name.split(".")[0] in GUI_MODULES for alias in node.names):
                return True
        elif isinstance(node, ast.ImportFrom) and node.module:
            if node.module.split(".")[0] in GUI_MODULES:
                return True
    return False


def run_once(script_path: Path, stdin_text: str) -> subprocess.CompletedProcess:
    return subprocess.run(
        [sys.executable, str(script_path)],
        input=stdin_text,
        capture_output=True,
        text=True,
        timeout=TIMEOUT_SECONDS,
    )


def verify(card: dict) -> tuple[bool, str, str]:
    back = card["back"]
    if back["solution_type"] != "code":
        return False, "solution_type is not 'code' -- use verify_circuit_solution.py instead", "python_sandbox"
    if back.get("solution_language") != "python":
        return False, (
            f"solution_language={back.get('solution_language')!r} cannot be executed "
            "directly (see solution-verification-guide.md for the MicroPython/Scratch path)"
        ), "python_sandbox"

    code = back.get("solution_code")
    if not code or not code.strip():
        return False, "solution_code is empty", "python_sandbox"

    if uses_gui_module(code):
        try:
            ast.parse(code)
        except SyntaxError as e:
            return False, f"syntax error: {e}", "syntax_check_manual_review"
        return True, (
            "solution_code imports a GUI/display module (turtle) that opens a live window "
            "and produces no stdout, so it cannot run through this script's subprocess "
            "sandbox -- see solution-verification-guide.md. Only checked that the code "
            "parses as valid Python (ast.parse); a human must still actually run it and "
            "visually confirm the drawing before status: final."
        ), "syntax_check_manual_review"

    sample_inputs = (card.get("verification") or {}).get("sample_inputs") or [""]
    expected_patterns = (card.get("verification") or {}).get("expected_output_patterns") or []

    with tempfile.TemporaryDirectory() as tmpdir:
        script_path = Path(tmpdir) / "solution.py"
        script_path.write_text(code)

        for stdin_value in sample_inputs:
            try:
                result = run_once(script_path, stdin_value + "\n" if stdin_value else "")
            except subprocess.TimeoutExpired:
                return False, f"timed out after {TIMEOUT_SECONDS}s with stdin={stdin_value!r}", "python_sandbox"

            if result.returncode != 0:
                return False, (
                    f"exited with code {result.returncode} for stdin={stdin_value!r}\n"
                    f"stderr:\n{result.stderr}"
                ), "python_sandbox"
            if not result.stdout.strip():
                return False, f"no stdout produced for stdin={stdin_value!r}", "python_sandbox"
            if expected_patterns:
                missing = [p for p in expected_patterns if not re.search(p, result.stdout)]
                if missing:
                    return False, (
                        f"stdout for stdin={stdin_value!r} did not match required "
                        f"pattern(s) {missing}\nstdout:\n{result.stdout}"
                    ), "python_sandbox"

    return True, f"executed cleanly for {len(sample_inputs)} sample input(s)", "python_sandbox"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--card-dir", required=True)
    args = parser.parse_args()

    card_yaml_path = Path(args.card_dir).resolve() / "card.yaml"
    with open(card_yaml_path) as f:
        card = yaml.safe_load(f)

    passed, message, method = verify(card)

    card.setdefault("verification", {})
    card["verification"]["status"] = "passed" if passed else "failed"
    card["verification"]["method"] = method
    card["verification"]["last_run"] = datetime.now(timezone.utc).isoformat()
    card["verification"]["notes"] = message

    with open(card_yaml_path, "w") as f:
        yaml.safe_dump(card, f, sort_keys=False, width=100, allow_unicode=True)

    status_word = "PASSED" if passed else "FAILED"
    print(f"[{status_word}] {card['card_id']}: {message}")
    return 0 if passed else 1


if __name__ == "__main__":
    raise SystemExit(main())
