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
import re
import subprocess
import sys
import tempfile
from datetime import datetime, timezone
from pathlib import Path

import yaml

TIMEOUT_SECONDS = 5


def run_once(script_path: Path, stdin_text: str) -> subprocess.CompletedProcess:
    return subprocess.run(
        [sys.executable, str(script_path)],
        input=stdin_text,
        capture_output=True,
        text=True,
        timeout=TIMEOUT_SECONDS,
    )


def verify(card: dict) -> tuple[bool, str]:
    back = card["back"]
    if back["solution_type"] != "code":
        return False, "solution_type is not 'code' -- use verify_circuit_solution.py instead"
    if back.get("solution_language") != "python":
        return False, (
            f"solution_language={back.get('solution_language')!r} cannot be executed "
            "directly (see solution-verification-guide.md for the MicroPython/Scratch path)"
        )

    code = back.get("solution_code")
    if not code or not code.strip():
        return False, "solution_code is empty"

    sample_inputs = (card.get("verification") or {}).get("sample_inputs") or [""]
    expected_patterns = (card.get("verification") or {}).get("expected_output_patterns") or []

    with tempfile.TemporaryDirectory() as tmpdir:
        script_path = Path(tmpdir) / "solution.py"
        script_path.write_text(code)

        for stdin_value in sample_inputs:
            try:
                result = run_once(script_path, stdin_value + "\n" if stdin_value else "")
            except subprocess.TimeoutExpired:
                return False, f"timed out after {TIMEOUT_SECONDS}s with stdin={stdin_value!r}"

            if result.returncode != 0:
                return False, (
                    f"exited with code {result.returncode} for stdin={stdin_value!r}\n"
                    f"stderr:\n{result.stderr}"
                )
            if not result.stdout.strip():
                return False, f"no stdout produced for stdin={stdin_value!r}"
            if expected_patterns:
                if not any(re.search(p, result.stdout) for p in expected_patterns):
                    return False, (
                        f"stdout for stdin={stdin_value!r} matched none of "
                        f"expected_output_patterns={expected_patterns}\nstdout:\n{result.stdout}"
                    )

    return True, f"executed cleanly for {len(sample_inputs)} sample input(s)"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--card-dir", required=True)
    args = parser.parse_args()

    card_yaml_path = Path(args.card_dir).resolve() / "card.yaml"
    with open(card_yaml_path) as f:
        card = yaml.safe_load(f)

    passed, message = verify(card)

    card.setdefault("verification", {})
    card["verification"]["status"] = "passed" if passed else "failed"
    card["verification"]["method"] = "python_sandbox"
    card["verification"]["last_run"] = datetime.now(timezone.utc).isoformat()
    card["verification"]["notes"] = message

    with open(card_yaml_path, "w") as f:
        yaml.safe_dump(card, f, sort_keys=False, width=100, allow_unicode=True)

    status_word = "PASSED" if passed else "FAILED"
    print(f"[{status_word}] {card['card_id']}: {message}")
    return 0 if passed else 1


if __name__ == "__main__":
    raise SystemExit(main())
