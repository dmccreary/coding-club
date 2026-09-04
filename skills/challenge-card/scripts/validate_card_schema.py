#!/usr/bin/env python3
"""Validate a card.yaml against challenge-card-schema.json, and confirm
every concept_ids entry actually exists in the book's learning graph.

Usage:
    python3 validate_card_schema.py --card-dir /path/to/docs/cards/<card-id> \
        [--learning-graph /path/to/docs/learning-graph/learning-graph.json]
"""
import argparse
import json
import sys
from difflib import SequenceMatcher
from pathlib import Path

import jsonschema
import yaml

# Below this label-similarity ratio, a concept_ids entry and its matching
# concept_labels entry are treated as referring to different concepts
# entirely (a hard failure), not just differently-worded (a soft note).
# Calibrated against a real incident: "Python Conditional" vs. the wrong
# id's actual label "Roles And Responsibilities" scores ~0.2; legitimate
# minor rewording of the same concept scores much higher.
LABEL_MISMATCH_THRESHOLD = 0.5

SKILL_DIR = Path(__file__).resolve().parent.parent
SCHEMA_PATH = SKILL_DIR / "assets" / "schema" / "challenge-card-schema.json"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--card-dir", required=True)
    parser.add_argument("--learning-graph", default=None)
    args = parser.parse_args()

    card_dir = Path(args.card_dir).resolve()
    card_yaml_path = card_dir / "card.yaml"

    with open(card_yaml_path) as f:
        card = yaml.safe_load(f)

    with open(SCHEMA_PATH) as f:
        schema = json.load(f)

    errors = []
    validator = jsonschema.Draft7Validator(schema)
    for err in validator.iter_errors(card):
        errors.append(f"schema: {'/'.join(str(p) for p in err.path)}: {err.message}")

    concept_ids = card.get("concept_ids") or []
    concept_labels = card.get("concept_labels") or []
    if concept_ids:
        lg_path = args.learning_graph
        if lg_path is None:
            # Walk up from card_dir to find docs/learning-graph/learning-graph.json
            for ancestor in card_dir.parents:
                candidate = ancestor / "docs" / "learning-graph" / "learning-graph.json"
                if candidate.exists():
                    lg_path = str(candidate)
                    break
        if lg_path and Path(lg_path).exists():
            with open(lg_path) as f:
                graph = json.load(f)
            label_by_id = {n["id"]: n["label"] for n in graph["nodes"]}
            missing = [cid for cid in concept_ids if cid not in label_by_id]
            if missing:
                errors.append(f"concept_ids not found in learning graph: {missing}")

            # concept_ids and concept_labels are meant to be parallel arrays
            # (concept_labels is a human-readable, non-validated copy of
            # each node's real label) -- catch the case where an id points
            # to a real node, but a genuinely different one than intended.
            # This is NOT a check against the node's `cis` field (Concept
            # Impact Score, an unrelated content-budget metric) -- only id
            # vs. id is ever compared here.
            if concept_labels and len(concept_labels) == len(concept_ids):
                for cid, claimed_label in zip(concept_ids, concept_labels):
                    actual_label = label_by_id.get(cid)
                    if actual_label is None:
                        continue  # already reported above
                    ratio = SequenceMatcher(None, actual_label.lower(), claimed_label.lower()).ratio()
                    if ratio < LABEL_MISMATCH_THRESHOLD:
                        errors.append(
                            f"concept_ids/concept_labels mismatch: id {cid} is actually "
                            f"{actual_label!r} in the learning graph, not {claimed_label!r} "
                            "-- concept_labels must list each id's real node label, not a "
                            "CIS Score or other number"
                        )
        else:
            errors.append(
                f"could not locate learning-graph.json to verify concept_ids={concept_ids} "
                "(pass --learning-graph explicitly)"
            )

    if errors:
        print(f"[FAILED] {card.get('card_id', card_dir.name)}:")
        for e in errors:
            print(f"  - {e}")
        return 1

    print(f"[PASSED] {card.get('card_id', card_dir.name)}: schema valid, "
          f"{len(concept_ids)} concept_ids confirmed in learning graph")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
