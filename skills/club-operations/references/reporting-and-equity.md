# Reporting and Equity

Attendance, retention and enrollment reports, funder and grant reports, diversity reporting, the
equity audit, and survey summaries (Chapters 24, 25 and 29). Every number leaves the club as an
aggregate. Hard rule 4 applies to anything about gender, race or ethnicity.

Contents: what may leave the club, standard reports, diversity report step by step, equity audit,
survey summaries, funder reports.

## What may leave the club

Counts, rates and trends with no names and no way to pick out one child. A funder's question,
such as "consistent attendance", is almost always answered by a weekly total. If a funder asks for
individual-level data, **stop and tell the leader.** That needs a data sharing agreement
(Chapter 25), not a spreadsheet export.

## Standard reports

State the definition in every report so a reader in another year interprets it the same way.

| Report | Definition | Source |
|---|---|---|
| Weekly attendance | Students present per session | Attendance |
| Retention | Students who attended in term N and again in term N+1, divided by students who attended in term N | Attendance |
| Enrollment trend | Registered students per term | Registrations |
| Capacity use | Registered divided by capacity; attended divided by registered | Sessions, Registrations |
| Waiting list | Families waiting at each session | Registrations |
| Mentor coverage | Students per confirmed mentor, per session | Sessions |

Report a small number as a small number. Do not turn "3 of 5" into a percentage that sounds like a trend.

## Diversity report, step by step

1. **Confirm consent and purpose.** Ask what the report is for, and confirm the demographic
   section of the registration form has its own consent line. If not, stop and tell the leader
   (see `privacy-rules.md`).
2. **Confirm the categories.** Use the funder's or district's categories. Do not invent them.
3. **Choose the population.** Students who attended in a date range is usually right, because it
   describes who actually came, not who registered.
4. **Run the script, one attribute at a time:**

   ```bash
   python3 scripts/demographic_report.py --demographics Demographics.csv --attribute gender \
       --attendance Attendance.csv --from 2026-09-01 --to 2026-12-15
   python3 scripts/demographic_report.py --demographics Demographics.csv --attribute race_ethnicity \
       --attendance Attendance.csv --from 2026-09-01 --to 2026-12-15
   ```

5. **If it refuses**, do not work around it. Explain that too few children have answered to report
   safely without identifying them, and offer: a longer period, combining terms, or a qualitative
   statement ("the club serves students from several backgrounds").
6. **Add context only from figures the leader supplies** (for example, the school's demographics),
   and cite where they came from.
7. **Write the summary in plain language.** Describe what the numbers show without ranking children or
   claiming causes. Say that the data is voluntary and self-reported.
8. **Do not publish overlapping breakdowns** without the leader's decision (differencing risk;
   see `privacy-rules.md`).

**Mentors.** A mentor team is usually under 10 people, so the script will normally refuse. That is
correct. Cover the mentor team through the equity audit checklist below, answered by the leader,
without listing or counting individuals.

## Equity audit (Chapter 29)

Prepare the once-a-semester audit around its five areas: curriculum representation, mentor team,
community partnership, accessibility and marketing materials. Each item is scored absent, partial
or present. Pre-fill what you can verify from the club's records, such as the partnerships on
file and the flyers in circulation, and leave judgment items to the leader. End with **exactly one
lowest-scoring area and one concrete next action**, never a vague "keep improving".

## Survey and sentiment summaries

- Summarize themes that repeat across several respondents. Note how many said it.
- Do not quote a comment that could identify a family.
- Follow the retention default: summarize, then discard the original responses within 90 days.
- Flag survey text about a specific child to the leader without repeating it in the summary.

## Funder and grant reports

1. Get the funder's exact definitions and required numbers first.
2. Build a table from the standard reports above with those definitions.
3. Attach no roster and no row-level data.
4. Include the demographic breakdown only if the funder asks and the script produced it.
5. Put "needs your review" on every number the leader will sign.
