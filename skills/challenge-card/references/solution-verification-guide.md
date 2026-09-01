# Solution Verification Guide

Never trust an AI-authored "working" solution without actually checking
it. This is the single highest-risk part of authoring a Challenge Card --
a wrong solution reaches a real student holding a laminated card, with no
easy way to patch it mid-session.

## `solution_type: code`, `solution_language: python`

`scripts/verify_code_solution.py` **actually executes** `solution_code`
in a sandboxed `subprocess` (temp file, no network, 5-second timeout) --
real execution, not an LLM re-reading its own code and declaring it
correct. If `card.yaml`'s `verification.sample_inputs` is set (a list of
stdin strings), the script runs once per sample input and, if
`verification.expected_output_patterns` (a list of regexes) is also set,
requires every pattern to match the captured stdout on every run.

**Worked example** (`docs/cards/rock-paper-scissors/card.yaml`): before
trusting the Rock-Paper-Scissors solution, it was executed 90 times (all
3 player choices x 30 random computer draws) with an independent
reference implementation of the win/lose/tie rules cross-checking every
result -- zero mismatches. Only after that did the code get embedded in
the card and the lighter-weight `sample_inputs`/`expected_output_patterns`
check wired in for ongoing re-verification (e.g., if the card is edited
later).

## `solution_language: micropython`

**Cannot be executed against real hardware in this pipeline.** No
MicroPython interpreter or hardware simulator is available here.
`solution_language: micropython` cards currently have NO automated
execution path -- `verify_code_solution.py` will refuse to run them (see
its explicit language check). Until a stub-import shim (fake
`machine`/`neopixel`/`time` modules, syntax-and-logic-only) is built,
these cards require a documented human hardware check before
`status: final`. Do not skip this and do not let `status` advance past
`proofed` on an unverified MicroPython card.

## `solution_type: circuit`

No code to run. `scripts/verify_circuit_solution.py` does a **consistency
check only**: every item in `materials` must be referenced (by a fuzzy
term match) somewhere in `solution_circuit_description` or
`solution_steps`, and vice versa. This catches an author naming a part in
one place and forgetting it in the other -- it does **not** prove the
circuit actually works. `verification.method` must still be set to
`manual_review` (a human who understands the circuit confirms it) before
a circuit card reaches `status: final`.

## `solution_language: scratch`

**No automated check path exists at all** in this repo or environment.
This is a permanent gap, not a TODO -- Scratch projects can't be
meaningfully executed headlessly here. Mark
`verification.status: not_applicable`, require manual review, and don't
pretend otherwise in the card's metadata.

## Explicitly rejected approach: the Docker Python-lab runtime

`ibook-skills/skills/microsim-generator/references/docker-python-lab-guide.md`
describes a **student-facing, in-page "Run" button** service (port 5001)
used by deployed book pages -- it is a runtime dependency for readers,
not an authoring-time verification tool. Requiring that Docker service to
be running just to author a card would be the wrong dependency direction.
The plain `subprocess` sandbox above uses only the Python standard
library and has no service dependency.
