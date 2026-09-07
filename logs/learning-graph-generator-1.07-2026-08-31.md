# Learning Graph Generator Session Log

- **Skill version:** 1.07
- **Date:** 2026-08-31
- **Book:** Coding Clubs

## Tool versions used

| Tool | Version |
|---|---|
| `csv-to-json.py` | 1.05 |
| `analyze-graph.py` | (as shipped with skill v1.07) |
| `taxonomy-distribution.py` | (as shipped with skill v1.07) |
| `validate-learning-graph.py` / `.sh` | (as shipped with skill v1.07) |
| `build_learning_graph.py` | custom, authored this session |

## Steps performed

1. **Step 1 (quality assessment) skipped** — `docs/course-description.md` already carried `quality_score: 95` in its frontmatter (set in a prior session), above the 85 threshold.
2. **Concept generation** — user requested up to 700 concepts given the course's breadth (club operations, hardware, pedagogy, AI agent management), above the skill's normal 600 cap. Authored a custom Python generator (`build_learning_graph.py`) defining 657 concepts across 15 taxonomy categories, each concept ≤32 characters, Title Case, no duplicates (validated programmatically).
3. **Dependency graph generation** — initial design used a "prev + prev-2" skip-link chain within each category, which produced a valid DAG but caused Fibonacci-like exponential growth in Concept Impact Score (CIS) over the longest chain (89 nodes spanning PHYS→KITS→BOARD), with CIS values in the 10^17-10^18 range. Per the skill's guidance to sanity-check the CIS top 10, this was diagnosed as a structural artifact of the generation algorithm (not an edge-direction inversion) and fixed by switching to a linear "prev only" chain with a sparse secondary link back to the category anchor every 6th concept. Re-run produced sane CIS values (max ~8,883) with "Coding Club" correctly ranking first.
4. **Quality validation** (`analyze-graph.py`) — valid DAG, 0 cycles, 0 self-dependencies, 0 orphaned nodes, 1 connected component, 4 foundational (zero-dependency) concepts, average 1.24 dependencies/concept, 15 terminal nodes (2.3%, below the 5-40% healthy range — informational only, expected given the topic-clustered category structure).
5. **Taxonomy** — 15 categories (skill guideline is ~12 ±2-3; justified by course breadth), all under the 30% over-representation threshold (max 10.7%, LAUNCH).
6. **JSON generation** (`csv-to-json.py` v1.05) — 657 nodes, 812 edges, 15 groups. Schema validation passed (`validate-learning-graph.sh`).
7. **Taxonomy distribution report** — generated with `taxonomy-names.json` for human-readable category names.
8. **index.md** — generated from `index-template.md`, `TEXTBOOK_NAME` replaced with "Coding Clubs"; leftover `index-template.md` removed from `docs/learning-graph/` after use.
9. **mkdocs.yml nav** — uncommented and added all five Learning Graph sub-pages (Course Description Assessment was already present from a prior session).
10. **Build verification** — `mkdocs build --strict` passes clean (exit 0), no orphaned nav pages.

## Files created

- `concept-list.md` (657 concepts)
- `learning-graph.csv` (ConceptID, ConceptLabel, Dependencies, TaxonomyID)
- `concept-taxonomy.md`
- `taxonomy-names.json`
- `color-config.json`
- `metadata.json`
- `learning-graph.json` (657 nodes, 812 edges, 15 groups — schema-valid)
- `quality-metrics.md`
- `taxonomy-distribution.md`
- `index.md`
- `build_learning_graph.py` (custom generator, kept in repo for future regeneration/editing)

## Notable deviation from default skill behavior

Concept count (657) exceeds the skill's default 600 cap. This was explicitly requested by the user with a stated reason (course breadth across club operations, hardware, pedagogy, and AI agent management), which the skill's own guidance permits ("Do not exceed 600 concepts unless you have good reason and the user approves this decision").
