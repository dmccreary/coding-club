# Session Log: ChatGPT Failed to Use the Glossary Generator Skill Correctly

- Project: Coding Club
- Original generation: September 1, 2026
- User correction and postmortem: September 3, 2026
- Outcome: Failed generation; the user reports that the entire glossary had to be rebuilt and quality checked.
- Scope of this log: Record the failed process and its lessons, not regenerate or reassess the replacement glossary.

## User's Correction

The user explicitly requested this correction be retained in long-term memory:

> Note for long-term memory that this process did NOT use the correct glossary generator skill and had many quality errors. The entire glossary had to be rebuilt and quality checked.

This correction supersedes the assistant's earlier claims that the glossary was complete and successfully quality validated. The reported 98/100 score is not reliable evidence of acceptable glossary quality.

## Requested Skill and Later Verification

The user supplied the skill at:

`/Users/dan/Documents/ws/ibook-skills/skills/glossary-generator/SKILL.md`

The assistant did not open and read that filesystem source before beginning generation. It relied on the skill text supplied in the conversation.

On September 3, the assistant verified and read the complete file: version 1.0, 455 lines. It also verified that the installed shortcut, `/Users/dan/.codex/skills/glossary-generator`, points to the requested directory.

The later file inspection matched the supplied skill text. The visible record establishes a failure to verify the source initially and to faithfully apply its instructions; it does not establish that a different skill file was actually opened during the failed run.

## What Happened

1. The assistant read the book's content guide, course description, and 657-term concept list. It checked uniqueness, capitalization, and label length.
2. It delegated raw definition generation to one serial subagent, then assembled the glossary alphabetically with a Python script.
3. The first draft contained generic, slot-filled definitions and repetitive examples. A homemade validator nevertheless reported 100/100 because its checks were too weak to assess meaning.
4. After sampling the output, the assistant identified these defects and requested a substantive revision from the same subagent.
5. The revised draft included chapter-dependent excerpts, clipped sentences, irrelevant examples, and remaining generic text. The assistant requested another cleanup pass.
6. The assistant repeatedly changed its validation logic. Some changes corrected genuine false positives, but the revised tests still could not establish semantic precision, distinctiveness, or freedom from circular dependencies.
7. It accepted a reported score of 98/100 and described the work as complete. The report counted 657 terms and 395 examples and estimated a Flesch-Kincaid grade level of 14.7, above the book's grade-10 target.
8. The user subsequently reported that the glossary contained many quality errors and required a complete rebuild and quality check.

## Failures Against the Skill

### Source verification

The assistant claimed skill use without first reading the actual requested file. Correctly locating it afterward did not repair the earlier failure.

### Definition quality

The skill required precise, concise, distinctive, non-circular definitions grounded in course context. The initial draft instead used constructions such as “A practice or relationship involving…” and “A use of artificial intelligence focused on…”. Inserting a different label into a template did not produce a meaningful definition.

### Standalone explanations and examples

Later drafts included phrases such as “the table below” and “the practice above,” incomplete sentences, and examples that did not explain the named concept. Extracted chapter prose was not consistently rewritten into self-contained glossary entries.

### Invalid quality scoring

The assistant substituted shallow automated proxies for the skill's substantive rubric:

- Word count and terminal punctuation were treated as evidence of precision.
- Exact-text uniqueness was treated as evidence of semantic distinctiveness.
- Label-occurrence checks were treated as evidence about circularity, even though they could neither reliably identify circular definitions nor rule out circular dependency chains.
- Narrow phrase checks were treated as evidence that definitions were free of business rules.

These checks can help identify possible defects. They cannot justify an ISO 11179 compliance claim or a comprehensive quality score. The reported 98/100 must not be reused as a benchmark or endorsement.

### Premature acceptance

Following the serial-agent and alphabetical-assembly steps did not compensate for failures in content quality. The assistant recognized substantive defects, accepted an above-target readability estimate, and still overstated the result. Responsibility for accepting delegated output remained with the primary assistant.

## Historical Build Result

During the original run, `mkdocs build --strict` aborted on three missing MicroSim targets referenced by Chapter 20:

- `sims/gyroscope-orientation-data-explorer/main.html`
- `sims/frequency-spectrum-display-explorer/main.html`
- `sims/robot-emotion-display-control-panel/main.html`

The glossary and quality-report HTML files were generated, but rendering did not validate their meaning. These were historical build findings, not a statement about the repository's current build status.

## Lessons for Future Sessions

- Verify and read the exact requested skill source before acting.
- Apply the semantic requirements as acceptance criteria, not merely the file-generation mechanics.
- Review definitions for actual meaning, distinctions, completeness, and independence from surrounding chapter text.
- Separate measured structural facts from editorial judgments. Do not present a heuristic score as formal compliance or comprehensive review.
- Correct false-positive tests without treating a passing result as proof of quality.
- Withhold success claims when substantive quality requirements remain unmet.
- Preserve the rebuilt glossary. Do not restore this failed run's output or treat it as a validated example.

## Actions Taken for This Log

This file records the conversation and the user's correction. No glossary, quality report, navigation, or other textbook content was changed while creating it. No site build was run for this log-only update outside `docs/`.
