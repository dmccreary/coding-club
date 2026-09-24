#!/usr/bin/env python3
"""Aggregate-only demographic counts with small-cell suppression.

Why this is a script and not something the agent does by eye: counting has to be
exact, and small cells have to be hidden every time. In a club of 12 children most
categories hold one or two kids, and a table that says "Category C: 1" identifies
a child. So every report goes through this one code path.

What it does
  * Reads a demographics CSV (and, optionally, an attendance CSV) and reports
    ONE attribute at a time (for example gender OR race_ethnicity).
  * Drops rows with no consent_date, counting them but never describing them.
  * Refuses to report at all when fewer than --min-total people remain.
  * Combines every category smaller than --min-cell into one pooled row, and
    pulls in the next-smallest category if the pool would still be too small
    to hide anyone.
  * Never prints an ID, a name, or a row.

What it deliberately does not do: cross-tabulate two attributes (the cells get
too small too fast) or guess a value for a blank one.

Usage
  python3 demographic_report.py --demographics demographics.csv --attribute gender
  python3 demographic_report.py --demographics demographics.csv --attribute race_ethnicity \\
      --attendance attendance.csv --from 2026-09-01 --to 2026-12-15

Exit codes: 0 report printed, 2 refused (too few people, bad input).
"""
import argparse
import csv
import json
import sys
from collections import Counter
from datetime import date

NOT_PROVIDED = "Not provided"
PREFER_NOT = "Prefer not to say"
POOL_LABEL = "All other categories (combined)"
PERCENT_MIN_TOTAL = 20  # percentages of tiny totals mislead, so show counts only below this

# Columns that identify a person. Reporting on one would defeat the whole point.
REFUSED_ATTRIBUTES = {
    "person_id", "student_id", "mentor_id", "name", "email", "phone",
    "consent_date", "collected_date",
}
ATTRIBUTE_LABELS = {"gender": "Gender", "race_ethnicity": "Race and ethnicity"}
PRESENT_VALUES = {"1", "y", "yes", "true", "present"}
PREFER_NOT_VALUES = {"prefer not to say", "prefer_not_to_say", "prefer not to answer", "decline"}


class Refused(Exception):
    """The report cannot be produced safely. The message is shown to the user."""


def read_csv(path):
    try:
        with open(path, newline="", encoding="utf-8") as handle:
            return list(csv.DictReader(handle))
    except OSError as err:
        raise Refused(f"Cannot read {path}: {err}")


def need_columns(rows, path, columns):
    if not rows:
        raise Refused(f"{path} has no data rows.")
    missing = [c for c in columns if c not in rows[0]]
    if missing:
        raise Refused(f"{path} is missing column(s): {', '.join(missing)}")


def ids_who_attended(path, id_column, start, end):
    """Return the set of IDs marked present at least once in [start, end]."""
    rows = read_csv(path)
    need_columns(rows, path, [id_column, "session_date", "present"])
    ids = set()
    for row in rows:
        try:
            day = date.fromisoformat(row["session_date"].strip())
        except ValueError:
            raise Refused(f"{path}: session_date must be YYYY-MM-DD, got {row['session_date']!r}")
        if start and day < start:
            continue
        if end and day > end:
            continue
        if row["present"].strip().lower() in PRESENT_VALUES:
            ids.add(row[id_column].strip())
    return ids


def normalize(value):
    value = (value or "").strip()
    if not value:
        return NOT_PROVIDED
    if value.lower() in PREFER_NOT_VALUES:
        return PREFER_NOT
    return value


def suppress(counts, min_cell):
    """Return (shown, pooled_total, pooled_any). Categories below min_cell are pooled.

    If the pool is non-empty but still smaller than min_cell it would identify
    the children in it, so the smallest visible category is pulled in until the
    pool is big enough.
    """
    shown = {label: n for label, n in counts.items() if n >= min_cell}
    pooled = sum(n for label, n in counts.items() if n < min_cell)
    pooled_any = pooled > 0
    while pooled_any and pooled < min_cell and shown:
        smallest = min(shown, key=shown.get)
        pooled += shown.pop(smallest)
    if pooled_any and pooled < min_cell:
        raise Refused("Not enough people to hide the small groups. Report a longer period or skip this breakdown.")
    return shown, pooled, pooled_any


def build_report(demographics_rows, attribute, person_type="student",
                 allowed_ids=None, min_cell=5, min_total=10):
    if attribute.lower() in REFUSED_ATTRIBUTES:
        raise Refused(f"Refusing to report on {attribute!r}: it identifies people.")
    need_columns(demographics_rows, "demographics file",
                 ["person_id", "person_type", attribute, "consent_date"])

    rows = [r for r in demographics_rows if r["person_type"].strip().lower() == person_type]
    if allowed_ids is not None:
        rows = [r for r in rows if r["person_id"].strip() in allowed_ids]

    with_consent = [r for r in rows if r["consent_date"].strip()]
    excluded = len(rows) - len(with_consent)
    total = len(with_consent)
    if total < min_total:
        raise Refused(f"Only {total} {person_type}(s) with consent on file; the minimum for a "
                      f"breakdown is {min_total}. Combine terms or report without this breakdown.")

    display = {}   # case-folded value -> first spelling seen
    counts = Counter()
    for row in with_consent:
        value = normalize(row[attribute])
        key = value.casefold()
        display.setdefault(key, value)
        counts[display[key]] += 1

    shown, pooled, pooled_any = suppress(counts, min_cell)
    categories = sorted(shown.items(), key=lambda item: (-item[1], item[0]))
    if pooled_any:
        categories.append((POOL_LABEL, pooled))

    with_percent = total >= PERCENT_MIN_TOTAL
    return {
        "attribute": attribute,
        "person_type": person_type,
        "total": total,
        "excluded_no_consent": excluded,
        "min_cell": min_cell,
        "categories": [
            {"category": label, "count": n,
             **({"percent": round(100 * n / total)} if with_percent else {})}
            for label, n in categories
        ],
        "small_groups_combined": pooled_any,
    }


def to_markdown(report, title):
    noun = report["person_type"] + "s"
    show_pct = any("percent" in c for c in report["categories"])
    header = f"| Category | {noun.title()} |" + (" Share |" if show_pct else "")
    divider = "|---|---:|" + ("---:|" if show_pct else "")
    lines = [f"### {title}", "", header, divider]
    for c in report["categories"]:
        row = f"| {c['category']} | {c['count']} |"
        if show_pct:
            row += f" {c['percent']}% |"
        lines.append(row)
    lines.append(f"| **Total** | **{report['total']}** |" + (" |" if show_pct else ""))
    lines.append("")
    notes = ["Self-reported and voluntary. Counts only; no names or records are included."]
    if report["small_groups_combined"]:
        notes.append(f"Categories with fewer than {report['min_cell']} {noun} are combined so that no "
                     "individual can be identified.")
    if report["excluded_no_consent"]:
        notes.append(f"{report['excluded_no_consent']} excluded: no data-collection consent on file.")
    lines.append("_" + " ".join(notes) + "_")
    return "\n".join(lines)


def parse_day(text):
    try:
        return date.fromisoformat(text) if text else None
    except ValueError:
        raise Refused(f"Dates must be YYYY-MM-DD, got {text!r}")


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("--demographics", required=True, help="CSV: person_id, person_type, <attribute>, consent_date")
    parser.add_argument("--attribute", required=True, help="Column to report, e.g. gender or race_ethnicity")
    parser.add_argument("--person-type", default="student", choices=["student", "mentor"])
    parser.add_argument("--attendance", help="Optional CSV: session_date, present, <id column>. Limits the report to people who attended.")
    parser.add_argument("--attendance-id-column", default="student_id")
    parser.add_argument("--from", dest="start", help="First session date, YYYY-MM-DD")
    parser.add_argument("--to", dest="end", help="Last session date, YYYY-MM-DD")
    parser.add_argument("--min-cell", type=int, default=5, help="Smallest group shown on its own (default 5)")
    parser.add_argument("--min-total", type=int, default=10, help="Refuse to report below this many people (default 10)")
    parser.add_argument("--format", choices=["markdown", "json"], default="markdown")
    parser.add_argument("--title", help="Heading for the markdown table")
    args = parser.parse_args(argv)

    try:
        if args.min_cell < 2:
            raise Refused("--min-cell below 2 would show individual people; refusing.")
        allowed = None
        if args.attendance:
            allowed = ids_who_attended(args.attendance, args.attendance_id_column,
                                       parse_day(args.start), parse_day(args.end))
        rows = read_csv(args.demographics)
        report = build_report(rows, args.attribute, args.person_type, allowed,
                              args.min_cell, args.min_total)
    except Refused as err:
        print(f"REFUSED: {err}", file=sys.stderr)
        return 2

    if args.format == "json":
        print(json.dumps(report, indent=2))
    else:
        label = ATTRIBUTE_LABELS.get(args.attribute, args.attribute.replace("_", " ").capitalize())
        title = args.title or f"{label} of {args.person_type}s"
        print(to_markdown(report, title))
    return 0


if __name__ == "__main__":
    sys.exit(main())
