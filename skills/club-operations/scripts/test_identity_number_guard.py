#!/usr/bin/env python3
"""Tests for identity_number_guard.py. Run: python3 -m unittest test_identity_number_guard -v

All numbers below are well-known fakes: 123-45-6789 is the classic sample SSN, and
4111 1111 1111 1111 is the public Visa test card number. None belongs to a person.
"""
import io
import os
import tempfile
import unittest
from contextlib import redirect_stderr, redirect_stdout
from unittest import mock

import identity_number_guard as guard

SSN = "123-45-6789"
CARD = "4111 1111 1111 1111"
LICENSE = "D400-123-456-789"


def kinds(text):
    return [f.kind for f in guard.scan_text(text)]


class ShapeDetectionTests(unittest.TestCase):
    def test_formatted_ssn_is_found_with_dashes_spaces_or_dots(self):
        for text in (f"SSN {SSN}", "id 123 45 6789 ok", "x 123.45.6789 y"):
            self.assertEqual(kinds(text), ["ssn"], text)

    def test_nine_bare_digits_are_not_an_ssn_without_a_keyword(self):
        self.assertEqual(kinds("Order number 123456789 shipped"), [])

    def test_nine_bare_digits_after_an_ssn_keyword_are_found(self):
        for text in ("SSN: 123456789", "my social security number is 123456789.", "my social is 123456789"):
            self.assertEqual(kinds(text), ["ssn"], text)

    def test_valid_card_numbers_are_found_in_common_layouts(self):
        for text in (f"card {CARD}", "4111-1111-1111-1111", "4111111111111111"):
            self.assertEqual(kinds(text), ["payment_card"], text)

    def test_sixteen_digits_that_fail_the_luhn_check_are_not_a_card(self):
        self.assertEqual(kinds("ref 4111 1111 1111 1112"), [])

    def test_an_ssn_with_a_keyword_is_reported_once(self):
        self.assertEqual(kinds(f"SSN: {SSN}"), ["ssn"])


class KeywordDetectionTests(unittest.TestCase):
    def test_license_number_is_found_and_the_whole_token_is_covered(self):
        text = f"His license number is {LICENSE}. Thanks"
        findings = guard.scan_text(text)
        self.assertEqual([f.kind for f in findings], ["drivers_license"])
        self.assertEqual(text[findings[0].start:findings[0].end], LICENSE)

    def test_other_license_phrasings(self):
        for text in ("driver's license: 12345678", "DL# A1234567", "Drivers license number D400 1234 5678",
                     "license no. 99887766"):
            self.assertIn("drivers_license", kinds(text), text)

    def test_license_talk_without_a_number_is_not_flagged(self):
        for text in ("His driver's license expires in December", "driver's license expires 12/2029",
                     "the license number is on the card"):
            self.assertEqual(kinds(text), [], text)

    def test_an_expiry_date_is_skipped_but_the_real_number_after_it_is_still_found(self):
        text = f"His driver's license expires 12/2029 and the number is {LICENSE}"
        findings = guard.scan_text(text)
        self.assertEqual([f.kind for f in findings], ["drivers_license"])
        self.assertEqual(text[findings[0].start:findings[0].end], LICENSE)

    def test_dates_after_a_license_keyword_are_not_numbers(self):
        for text in ("driver's license issued 20190312", "license number 12/2029", "driver's license valid until 2029-12-31"):
            self.assertEqual(kinds(text), [], text)

    def test_passport_and_bank_numbers(self):
        self.assertEqual(kinds("passport number: 123456789"), ["passport"])
        self.assertEqual(kinds("routing number 021000021"), ["bank_account"])


class FalseAlarmTests(unittest.TestCase):
    def test_ordinary_club_text_is_clean(self):
        text = ("Hi Sam, Saturday's session is 2026-09-26 from 10:00 to 12:30 in Room 12. Call 612-555-0123 "
                "or write to leader@example.org. Student S021 has 12 badges; the kit costs $15.25. "
                "Zip 55401-1234. Ratio 3:1. Vendor ref VR-2026-000123.")
        self.assertEqual(guard.scan_text(text), [])


class RedactionTests(unittest.TestCase):
    def test_values_are_replaced_and_the_rest_is_kept(self):
        cleaned, findings = guard.redact_text(f"Dave's SSN is {SSN} and card {CARD}. Please run it.")
        self.assertEqual(len(findings), 2)
        for value in (SSN, CARD, "6789", "1111"):
            self.assertNotIn(value, cleaned)
        self.assertIn("[REDACTED: ssn]", cleaned)
        self.assertIn("[REDACTED: payment_card]", cleaned)
        self.assertTrue(cleaned.startswith("Dave's SSN is"))
        self.assertTrue(cleaned.endswith("Please run it."))

    def test_license_redaction_leaves_no_fragment_behind(self):
        cleaned, _ = guard.redact_text(f"driver's license number is {LICENSE}, thanks")
        self.assertNotIn("D400", cleaned)
        self.assertNotIn("789", cleaned)
        self.assertIn("driver's license number is [REDACTED: drivers_license], thanks", cleaned)

    def test_redacting_twice_changes_nothing(self):
        once, _ = guard.redact_text(f"SSN {SSN}")
        twice, findings = guard.redact_text(once)
        self.assertEqual(once, twice)
        self.assertEqual(findings, [])


class CsvTests(unittest.TestCase):
    CSV = ("mentor_id,name,notes,ssn\n"
           "M001,Ada,ok,\n"
           f"M002,Bo,\"SSN {SSN}\",{SSN}\n"
           f"M003,Cy,paid with {CARD},\n")

    def test_identity_looking_column_names_are_flagged_even_if_empty(self):
        self.assertEqual(guard.identity_columns(["mentor_id", "SSN", "Driver's License", "Card Number", "card"]),
                         ["SSN", "Driver's License", "Card Number"])

    def test_cell_findings_report_row_and_column_but_not_the_value(self):
        hits, flagged = guard.scan_csv(self.CSV)
        self.assertEqual(flagged, ["ssn"])
        self.assertEqual({(h.row, h.column, h.kind) for h in hits},
                         {(3, "notes", "ssn"), (4, "notes", "payment_card")})

    def test_csv_redaction_clears_cells_and_named_columns(self):
        cleaned, _, _ = guard.redact_csv(self.CSV)
        for value in (SSN, CARD, "6789", "1111"):
            self.assertNotIn(value, cleaned)
        self.assertIn("M001,Ada,ok,", cleaned)
        self.assertIn("[REDACTED: identity column]", cleaned)


class CommandLineTests(unittest.TestCase):
    def run_cli(self, argv, stdin_text=None):
        out, err = io.StringIO(), io.StringIO()
        stdin = io.StringIO(stdin_text or "")
        with mock.patch("sys.stdin", stdin), redirect_stdout(out), redirect_stderr(err):
            code = guard.main(argv)
        return code, out.getvalue(), err.getvalue()

    def test_clean_input_exits_zero(self):
        code, out, _ = self.run_cli([], "Just a normal message about Room 12.")
        self.assertEqual((code, out.strip()), (0, "No identity numbers found."))

    def test_finding_exits_one_and_never_prints_the_value(self):
        code, out, err = self.run_cli([], f"Here you go: SSN {SSN}, license number {LICENSE}")
        self.assertEqual(code, 1)
        self.assertIn("ssn", out)
        self.assertIn("drivers_license", out)
        for value in (SSN, LICENSE, "6789", "D400"):
            self.assertNotIn(value, out + err)

    def test_csv_file_is_scanned_by_extension(self):
        with tempfile.TemporaryDirectory() as tmp:
            path = os.path.join(tmp, "roster.csv")
            with open(path, "w") as handle:
                handle.write(f"id,notes\nS1,card {CARD}\n")
            code, out, _ = self.run_cli([path])
        self.assertEqual(code, 1)
        self.assertIn('row 2, column "notes": payment_card', out)
        self.assertNotIn("4111", out)

    def test_redact_mode_prints_clean_text_and_reports_on_stderr(self):
        code, out, err = self.run_cli(["--redact"], f"SSN {SSN} please")
        self.assertEqual(code, 1)
        self.assertNotIn("6789", out)
        self.assertIn("[REDACTED: ssn]", out)
        self.assertNotIn("6789", err)

    def test_redact_needs_exactly_one_input(self):
        code, _, err = self.run_cli(["--redact", "a.txt", "b.txt"])
        self.assertEqual(code, 2)
        self.assertIn("exactly one", err)

    def test_missing_file_exits_two(self):
        code, _, err = self.run_cli(["/no/such/file.txt"])
        self.assertEqual(code, 2)
        self.assertIn("Cannot read input", err)


if __name__ == "__main__":
    unittest.main()
