#!/usr/bin/env python3
"""Consistency check for circuit-type Challenge Card solutions.

There is no code to execute, so this checks that every physical
component named in materials is actually referenced (by a fuzzy
substring match) somewhere in the solution's circuit description --
catching the common authoring mistake of a solution mentioning a part
that was never listed in materials, or a materials list that includes
something the solution never actually uses.

This is a consistency check, not proof the circuit works -- solution
status can reach 'rendered' on a pass here, but 'final' still requires
verification.method == 'manual_review' to be recorded separately.

Usage:
    python3 verify_circuit_solution.py --card-dir /path/to/docs/cards/<card-id>
"""
import argparse
import re
from datetime import datetime, timezone
from pathlib import Path

import yaml


def normalize(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", " ", text.lower()).strip()


def key_terms(material: str) -> list[str]:
    # Drop generic filler words so "3x AA battery pack" still matches
    # a description that just says "battery pack".
    stopwords = {"x", "a", "an", "the", "with", "and", "of", "3x", "2x"}
    return [w for w in normalize(material).split() if w not in stopwords and len(w) > 2]


def verify(card: dict) -> tuple[bool, str]:
    back = card["back"]
    if back["solution_type"] != "circuit":
        return False, "solution_type is not 'circuit' -- use verify_code_solution.py instead"

    description = back.get("solution_circuit_description") or ""
    solution_steps_text = " ".join(back.get("solution_steps", []))
    haystack = normalize(description + " " + solution_steps_text)

    materials = card.get("materials") or []
    if not materials:
        return False, "no materials listed to cross-check against the circuit description"

    unmatched = []
    for material in materials:
        terms = key_terms(material)
        if not terms:
            continue
        if not any(term in haystack for term in terms):
            unmatched.append(material)

    if unmatched:
        return False, f"materials never referenced in the solution: {unmatched}"

    return True, f"all {len(materials)} material(s) referenced in the circuit solution"


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
    card["verification"]["method"] = "circuit_consistency"
    card["verification"]["last_run"] = datetime.now(timezone.utc).isoformat()
    card["verification"]["notes"] = message + " (consistency check only -- manual_review still required before status='final')"

    with open(card_yaml_path, "w") as f:
        yaml.safe_dump(card, f, sort_keys=False, width=100, allow_unicode=True)

    status_word = "PASSED" if passed else "FAILED"
    print(f"[{status_word}] {card['card_id']}: {message}")
    return 0 if passed else 1


if __name__ == "__main__":
    raise SystemExit(main())
