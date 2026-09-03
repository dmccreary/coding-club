#!/usr/bin/env python3
"""Insert a level-3 letter header before each first-letter group of terms
in docs/glossary.md, so the MkDocs table of contents shows A-Z groupings.

Usage:
    python3 src/utils/add-letter-headers-to-glossary.py
"""

import re
from pathlib import Path

GLOSSARY_PATH = Path(__file__).resolve().parents[2] / "docs" / "glossary.md"

TERM_HEADER_RE = re.compile(r"^#### (.+)$")


def add_letter_headers(text: str) -> str:
    lines = text.splitlines()
    output = []
    current_letter = None

    for line in lines:
        match = TERM_HEADER_RE.match(line)
        if match:
            term = match.group(1).strip()
            letter = term[0].upper()
            if letter != current_letter:
                if output and output[-1] != "":
                    output.append("")
                output.append(f"### {letter}")
                output.append("")
                current_letter = letter
        output.append(line)

    return "\n".join(output) + "\n"


def main() -> None:
    original = GLOSSARY_PATH.read_text(encoding="utf-8")
    updated = add_letter_headers(original)
    GLOSSARY_PATH.write_text(updated, encoding="utf-8")
    print(f"Updated {GLOSSARY_PATH}")


if __name__ == "__main__":
    main()
