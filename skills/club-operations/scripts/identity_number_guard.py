#!/usr/bin/env python3
"""Find, and optionally redact, identity numbers before they spread.

Hard rule 2 of club-operations: the agent never handles Social Security numbers,
driver's license numbers or payment card numbers. This script makes that checkable.
Run it on any file a leader hands you before you read it, and on `club-outputs/`
before you hand anything back.

What it can and cannot do
  * It cannot un-send something a person already typed into a chat. It stops the
    numbers spreading further: into drafts, sheets, logs and other scripts.
  * It never prints a value it finds. Reports give a kind and a location only.
  * Detection is pattern based. Social Security and card numbers have a recognisable
    shape (cards are also Luhn-checked). License, passport and bank numbers do not,
    so those are found only when a keyword such as "driver's license" sits just
    before them. Expect a few false alarms and, rarely, a miss; a false alarm
    costs a moment, a miss costs a leak, so the bias is toward flagging.

Usage
  python3 identity_number_guard.py roster.csv notes.txt      # report, exit 1 if anything found
  python3 identity_number_guard.py --redact roster.csv > roster.clean.csv
  pbpaste | python3 identity_number_guard.py                 # stdin

Other scripts can import `scan_text`, `redact_text` and `identity_columns`.

Exit codes: 0 nothing found, 1 something found, 2 could not run.
"""
import argparse
import csv
import io
import re
import sys
from dataclasses import dataclass

REDACTION = "[REDACTED: {kind}]"
COLUMN_REDACTION = "[REDACTED: identity column]"
CLOSING_ADVICE = ("Do not copy these into drafts, messages, sheets or logs. Remove them from the source, "
                  "and have the person enter them only in the screening vendor's secure form.")


@dataclass(frozen=True)
class Finding:
    kind: str
    start: int
    end: int


# --- Shape-based detectors ---------------------------------------------------

# 123-45-6789, 123 45 6789, 123.45.6789. Flagged whatever the digits are.
SSN_FORMATTED = re.compile(r"(?<!\d)\d{3}[- .]\d{2}[- .]\d{4}(?!\d)")

# 13 to 19 digits with optional spaces or hyphens between them.
CARD_CANDIDATE = re.compile(r"(?<!\d)(?:\d[ -]?){12,18}\d(?!\d)")


def luhn_valid(digits):
    total = 0
    for position, char in enumerate(reversed(digits)):
        n = int(char)
        if position % 2 == 1:
            n *= 2
            if n > 9:
                n -= 9
        total += n
    return total % 10 == 0


def looks_like_card(candidate):
    digits = re.sub(r"\D", "", candidate)
    return 13 <= len(digits) <= 19 and digits[0] in "3456" and luhn_valid(digits)


# --- Keyword-context detectors ----------------------------------------------

def _digits(token):
    return re.sub(r"\D", "", token)


def _alnum(token):
    return re.sub(r"[^A-Za-z0-9]", "", token)


KEYWORD_RULES = [
    # (kind, regex for the keyword, does the token that follows look right?)
    ("ssn",
     re.compile(r"\b(?:ssn|social\s+security(?:[\s_-]*(?:number|no\.?|num|#))?|ss\s*#|social)\b", re.I),
     lambda token: len(_digits(token)) == 9),
    ("drivers_license",
     re.compile(r"\b(?:driver'?s?[\s_-]*licen[sc]e|licen[sc]e[\s_-]*(?:number|no\.?|num|#)"
                r"|dl\s*[:#]|dl\s*(?:number|no\.?|num)\b|dln\b)", re.I),
     lambda token: 5 <= len(_alnum(token)) <= 20),
    ("passport",
     re.compile(r"\bpassport(?:[\s_-]*(?:number|no\.?|num|#))?", re.I),
     lambda token: 6 <= len(_alnum(token)) <= 9),
    ("bank_account",
     re.compile(r"\b(?:routing|account|acct)[\s_-]*(?:number|no\.?|num|#)", re.I),
     lambda token: 6 <= len(_digits(token)) <= 17),
]

MAX_WORDS_SKIPPED = 6   # filler between the keyword and the number: "is", "for Dave:", ...
MAX_TOKEN_WORDS = 4     # some licenses are written "D400 1234 5678"

# "driver's license expires 12/2029" is talk about a date, not a number to protect.
DATE_WORDS = {"expires", "expired", "expiry", "expiration", "issued", "renewed", "renewal", "valid", "until", "exp"}
DATE_SHAPED = re.compile(r"\d{1,2}/\d{1,2}/\d{2,4}|\d{1,2}/\d{4}|\d{4}-\d{2}-\d{2}|\d{4}/\d{2}(?:/\d{2})?")
WRAP_OPEN = "([{\"'#:=<"
WRAP_CLOSE = ")]}\"'.,;:!?>"


def _trimmed(word):
    return word.lstrip(WRAP_OPEN).rstrip(WRAP_CLOSE)


def _token_after(text, position):
    """Span of the first digit-bearing word after `position` on the same line, or None."""
    line_end = text.find("\n", position)
    line_end = len(text) if line_end == -1 else line_end
    window = text[position:min(line_end, position + 100)]
    words = list(re.finditer(r"\S+", window))
    i = skipped = 0
    date_coming = False  # saw "expires"/"issued": the next number is a date, so keep looking
    while i < len(words):
        word = words[i].group()
        if re.search(r"\d", word):
            if date_coming or DATE_SHAPED.fullmatch(_trimmed(word)):
                date_coming = False
            else:
                break
        elif word.lower().strip(".,;:") in DATE_WORDS:
            date_coming = True
        i += 1
        skipped += 1
        if skipped > MAX_WORDS_SKIPPED:
            return None
    if i == len(words):
        return None
    start, end = words[i].start(), words[i].end()
    j = i + 1
    while j < len(words) and j - i < MAX_TOKEN_WORDS and re.search(r"\d", words[j].group()):
        end = words[j].end()
        j += 1
    raw = window[start:end]
    lead = len(raw) - len(raw.lstrip(WRAP_OPEN))
    trail = len(raw) - len(raw.rstrip(WRAP_CLOSE))
    if lead + trail >= len(raw):
        return None
    return position + start + lead, position + end - trail


def _merge(findings):
    """Combine overlapping findings so each stretch of text is reported and redacted once."""
    merged = []
    for finding in sorted(findings, key=lambda f: (f.start, -f.end)):
        if merged and finding.start < merged[-1].end:
            last = merged[-1]
            merged[-1] = Finding(last.kind, last.start, max(last.end, finding.end))
        else:
            merged.append(finding)
    return merged


def scan_text(text):
    """Return the identity numbers in `text` as a sorted list of Finding."""
    found = [Finding("ssn", m.start(), m.end()) for m in SSN_FORMATTED.finditer(text)]
    found += [Finding("payment_card", m.start(), m.end())
              for m in CARD_CANDIDATE.finditer(text) if looks_like_card(m.group())]
    for kind, keyword, token_ok in KEYWORD_RULES:
        for match in keyword.finditer(text):
            span = _token_after(text, match.end())
            if span and token_ok(text[span[0]:span[1]]):
                found.append(Finding(kind, *span))
    return _merge(found)


def redact_text(text):
    """Return (text with identity numbers replaced, findings)."""
    findings = scan_text(text)
    for finding in reversed(findings):
        text = text[:finding.start] + REDACTION.format(kind=finding.kind) + text[finding.end:]
    return text, findings


# --- CSV support -------------------------------------------------------------

IDENTITY_COLUMN_NAMES = re.compile(
    r"ssn|social_security(?:_(?:number|no))?|drivers?_licen[sc]e(?:_(?:number|no|num))?"
    r"|dl(?:_(?:number|no|num))?|licen[sc]e_(?:number|no|num)|passport(?:_(?:number|no|num))?"
    r"|(?:credit_|debit_)?card_(?:number|no|num)|credit_card|debit_card|cc_(?:number|no|num)|cvv|cvc"
    r"|routing(?:_(?:number|no|num))?|account_(?:number|no|num)|acct_(?:number|no|num)"
)


def identity_columns(headers):
    """Header names that suggest a column holds identity numbers, even if it is empty."""
    flagged = []
    for header in headers:
        normalized = re.sub(r"[^a-z0-9]+", "_", re.sub(r"['’]", "", header.strip().lower())).strip("_")
        if IDENTITY_COLUMN_NAMES.fullmatch(normalized):
            flagged.append(header)
    return flagged


@dataclass(frozen=True)
class CsvHit:
    row: int          # 1 is the header row
    column: str
    kind: str


def scan_csv(text):
    """Return (hits, flagged_columns) for a CSV. Cell values are never included."""
    rows = list(csv.reader(io.StringIO(text)))
    if not rows:
        return [], []
    headers = rows[0]
    flagged = identity_columns(headers)
    hits = []
    for row_number, row in enumerate(rows[1:], start=2):
        for index, cell in enumerate(row):
            column = headers[index] if index < len(headers) else f"column {index + 1}"
            if column in flagged:
                continue  # the whole column is reported once, by name
            for finding in scan_text(cell):
                hits.append(CsvHit(row_number, column, finding.kind))
    return hits, flagged


def redact_csv(text):
    """Return (redacted CSV text, hits, flagged_columns)."""
    hits, flagged = scan_csv(text)
    rows = list(csv.reader(io.StringIO(text)))
    if not rows:
        return text, hits, flagged
    headers = rows[0]
    out = io.StringIO()
    writer = csv.writer(out, lineterminator="\n")
    writer.writerow(headers)
    for row in rows[1:]:
        cleaned = []
        for index, cell in enumerate(row):
            column = headers[index] if index < len(headers) else ""
            if column in flagged and cell.strip():
                cleaned.append(COLUMN_REDACTION)
            else:
                cleaned.append(redact_text(cell)[0])
        writer.writerow(cleaned)
    return out.getvalue(), hits, flagged


# --- Command line ------------------------------------------------------------

def _read(source):
    if source == "-":
        return sys.stdin.read()
    with open(source, newline="", encoding="utf-8", errors="replace") as handle:
        return handle.read()


def _report_lines(name, text, is_csv):
    """Human-readable location lines for one source. Values are never included."""
    lines = []
    if is_csv:
        hits, flagged = scan_csv(text)
        lines += [f'{name} column "{column}": column name suggests identity numbers' for column in flagged]
        lines += [f'{name} row {hit.row}, column "{hit.column}": {hit.kind}' for hit in hits]
    else:
        lines += [f"{name} line {text.count(chr(10), 0, f.start) + 1}: {f.kind}" for f in scan_text(text)]
    return lines


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("files", nargs="*", help="Files to check. Use '-' or nothing for stdin.")
    parser.add_argument("--redact", action="store_true",
                        help="Print a redacted copy of ONE input to stdout instead of a report.")
    parser.add_argument("--csv", action="store_true", help="Treat input as CSV (automatic for .csv files).")
    args = parser.parse_args(argv)

    sources = args.files or ["-"]
    if args.redact and len(sources) != 1:
        print("--redact works on exactly one input at a time.", file=sys.stderr)
        return 2

    try:
        texts = [(source, _read(source)) for source in sources]
    except OSError as err:
        print(f"Cannot read input: {err.strerror or err}", file=sys.stderr)
        return 2

    if args.redact:
        source, text = texts[0]
        if args.csv or source.lower().endswith(".csv"):
            cleaned, hits, flagged = redact_csv(text)
            count = len(hits) + len(flagged)
        else:
            cleaned, findings = redact_text(text)
            count = len(findings)
        sys.stdout.write(cleaned)
        if count:
            print(f"Redacted {count} item(s). Values were not printed.", file=sys.stderr)
        return 1 if count else 0

    report = []
    for source, text in texts:
        name = "input" if source == "-" else source
        report += _report_lines(name, text, args.csv or source.lower().endswith(".csv"))
    if not report:
        print("No identity numbers found.")
        return 0
    print("Possible identity numbers found (values are not shown):")
    for line in report:
        print(f"  {line}")
    print(CLOSING_ADVICE)
    return 1


if __name__ == "__main__":
    sys.exit(main())
