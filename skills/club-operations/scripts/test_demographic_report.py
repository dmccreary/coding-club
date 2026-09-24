#!/usr/bin/env python3
"""Tests for demographic_report.py. Run: python3 -m unittest test_demographic_report -v"""
import csv
import io
import os
import tempfile
import unittest
from contextlib import redirect_stderr, redirect_stdout

import demographic_report as dr


def make_rows(gender_counts, person_type="student", consent="2026-09-01", start_id=1):
    """Build demographics rows from {gender: how_many}."""
    rows, n = [], start_id
    for gender, how_many in gender_counts.items():
        for _ in range(how_many):
            rows.append({"person_id": f"S{n:03d}", "person_type": person_type,
                         "gender": gender, "consent_date": consent})
            n += 1
    return rows


def labels(report):
    return {c["category"]: c["count"] for c in report["categories"]}


class SuppressionTests(unittest.TestCase):
    def test_small_groups_are_pooled_and_not_named(self):
        report = dr.build_report(make_rows({"Girl": 9, "Boy": 12, "Non-binary": 2, "Other": 3}), "gender")
        shown = labels(report)
        self.assertEqual(shown["Girl"], 9)
        self.assertEqual(shown["Boy"], 12)
        self.assertNotIn("Non-binary", shown)
        self.assertNotIn("Other", shown)
        self.assertEqual(shown[dr.POOL_LABEL], 5)  # 2 + 3 pooled

    def test_pool_that_is_still_too_small_pulls_in_the_smallest_visible_group(self):
        # One group of 2 alone would be identifiable; it must be combined with the next smallest (6).
        report = dr.build_report(make_rows({"Girl": 6, "Boy": 12, "Non-binary": 2}), "gender")
        shown = labels(report)
        self.assertNotIn("Non-binary", shown)
        self.assertNotIn("Girl", shown)
        self.assertEqual(shown[dr.POOL_LABEL], 8)
        self.assertEqual(shown["Boy"], 12)

    def test_totals_always_add_up(self):
        report = dr.build_report(make_rows({"Girl": 6, "Boy": 12, "Non-binary": 2, "Other": 1}), "gender")
        self.assertEqual(sum(c["count"] for c in report["categories"]), report["total"])

    def test_nothing_pooled_when_every_group_is_large_enough(self):
        report = dr.build_report(make_rows({"Girl": 8, "Boy": 9}), "gender")
        self.assertFalse(report["small_groups_combined"])
        self.assertNotIn(dr.POOL_LABEL, labels(report))

    def test_case_variants_count_as_one_group(self):
        report = dr.build_report(make_rows({"girl": 3, "Girl": 4, "Boy": 8}), "gender")
        self.assertEqual(labels(report)["girl"], 7)


class RefusalTests(unittest.TestCase):
    def test_refuses_below_minimum_total(self):
        with self.assertRaises(dr.Refused):
            dr.build_report(make_rows({"Girl": 4, "Boy": 5}), "gender")

    def test_people_without_consent_are_excluded_and_counted(self):
        rows = make_rows({"Girl": 8, "Boy": 8}) + make_rows({"Girl": 3}, consent="", start_id=100)
        report = dr.build_report(rows, "gender")
        self.assertEqual(report["total"], 16)
        self.assertEqual(report["excluded_no_consent"], 3)

    def test_consent_shortfall_can_trigger_refusal(self):
        rows = make_rows({"Girl": 6}) + make_rows({"Boy": 8}, consent="", start_id=100)
        with self.assertRaises(dr.Refused):
            dr.build_report(rows, "gender")

    def test_identifying_columns_cannot_be_reported(self):
        rows = make_rows({"Girl": 8, "Boy": 8})
        for column in ("person_id", "student_id", "email", "consent_date"):
            with self.assertRaises(dr.Refused):
                dr.build_report(rows, column)

    def test_min_cell_of_one_is_refused_on_the_command_line(self):
        with redirect_stderr(io.StringIO()):
            self.assertEqual(dr.main(["--demographics", "x.csv", "--attribute", "gender", "--min-cell", "1"]), 2)


class FilterAndFormatTests(unittest.TestCase):
    def test_only_the_requested_person_type_is_counted(self):
        rows = make_rows({"Girl": 8, "Boy": 8}) + make_rows({"Girl": 20}, person_type="mentor", start_id=200)
        self.assertEqual(dr.build_report(rows, "gender", person_type="student")["total"], 16)

    def test_allowed_ids_limit_the_population(self):
        rows = make_rows({"Girl": 10, "Boy": 10})
        report = dr.build_report(rows, "gender", allowed_ids={f"S{n:03d}" for n in range(1, 13)})
        self.assertEqual(report["total"], 12)

    def test_percentages_only_appear_for_larger_totals(self):
        small = dr.build_report(make_rows({"Girl": 6, "Boy": 6}), "gender")
        large = dr.build_report(make_rows({"Girl": 12, "Boy": 12}), "gender")
        self.assertNotIn("percent", small["categories"][0])
        self.assertEqual(large["categories"][0]["percent"], 50)

    def test_blank_and_prefer_not_to_say_are_kept_visible_categories(self):
        rows = make_rows({"Girl": 6, "Boy": 6, "prefer_not_to_say": 5, "": 5})
        shown = labels(dr.build_report(rows, "gender"))
        self.assertEqual(shown[dr.PREFER_NOT], 5)
        self.assertEqual(shown[dr.NOT_PROVIDED], 5)

    def test_markdown_output_has_no_ids_and_states_the_suppression_rule(self):
        report = dr.build_report(make_rows({"Girl": 9, "Boy": 12, "Non-binary": 2, "Other": 3}), "gender")
        text = dr.to_markdown(report, "Gender of students")
        self.assertNotIn("S0", text)
        self.assertIn("fewer than 5", text)
        self.assertNotIn("Non-binary", text)


class EndToEndTests(unittest.TestCase):
    def test_attendance_filter_through_the_command_line(self):
        with tempfile.TemporaryDirectory() as tmp:
            demo = os.path.join(tmp, "demographics.csv")
            att = os.path.join(tmp, "attendance.csv")
            rows = make_rows({"Girl": 8, "Boy": 8})
            with open(demo, "w", newline="") as handle:
                writer = csv.DictWriter(handle, fieldnames=list(rows[0]))
                writer.writeheader()
                writer.writerows(rows)
            with open(att, "w", newline="") as handle:
                writer = csv.writer(handle)
                writer.writerow(["session_date", "student_id", "present"])
                for n in range(1, 13):                       # 12 students attend in range
                    writer.writerow(["2026-10-03", f"S{n:03d}", "1"])
                writer.writerow(["2026-08-01", "S016", "1"])  # out of range, must not count
                writer.writerow(["2026-10-03", "S015", "0"])  # absent, must not count
            out = io.StringIO()
            with redirect_stdout(out):
                code = dr.main(["--demographics", demo, "--attribute", "gender", "--attendance", att,
                                "--from", "2026-09-01", "--to", "2026-12-15", "--format", "json"])
            self.assertEqual(code, 0)
            self.assertIn('"total": 12', out.getvalue())


if __name__ == "__main__":
    unittest.main()
