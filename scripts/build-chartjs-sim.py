#!/usr/bin/env python3
"""Generate a Chart.js MicroSim (main.html, style.css, <sim-id>.js) from a data file.

The book's ten Chart.js specs share one layout -- title, chart on the left, a
notes panel on the right carrying the annotation and the key insight -- and one
interaction contract: hover for exact values, click a legend entry to toggle a
series. That shell lives here once; each sim supplies only its own content.

Input: scripts/sim-charts/<sim-id>.json

    {
      "title":  "47 Survey Responses by Age Range and Interest Level",
      "height": 520,                      # CANVAS_HEIGHT; iframe gets +2
      "type":   "bar",                    # any Chart.js type
      "labels": ["6-8", "9-11", ...],
      "datasets": [
        {"label": "Definitely would attend", "data": [4,14,9,2],
         "backgroundColor": "#F5A623"}
      ],
      "options":  {...},                  # merged over the defaults below
      "axisTitles": {"x": "Age range", "y": "Number of responses"},
      "annotation": "...",                # highlighted callout in the panel
      "insight":    "...",                # what the reader should take away
      "note":       "...",                # optional caption under the chart
      "controls":   [ ... ],              # optional, see CONTROL TYPES
      "rankedList": true,                 # optional empty <div id="ranking">
      "extraJs":    "..."                 # optional per-sim behaviour
    }

CONTROL TYPES
    {"type":"toggle","dataset":1,"label":"Prior semester","checked":false}
        show/hide one dataset from a checkbox as well as the legend
    {"type":"select","id":"priority","label":"...","options":[...]}
        a dropdown; react to it in extraJs via the `onControl` hook
    {"type":"button","id":"press","label":"Press the button"}
        a push button; react to it in extraJs via the `onAction` hook

Usage:
    python3 scripts/build-chartjs-sim.py                # all charts
    python3 scripts/build-chartjs-sim.py <sim-id> ...   # just these
"""

import copy
import json
import os
import sys

PROJECT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SIMS = os.path.join(PROJECT, "docs/sims")
CHARTS_DIR = os.path.join(PROJECT, "scripts/sim-charts")

HTML = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="schema" content="https://dmccreary.github.io/intelligent-textbooks/ns/microsim/v1">
    <title>{title}</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<main>
    <div class="container">
        <div class="chart-panel">
            <h2 class="chart-title">{title}</h2>
            <div class="chart-holder"><canvas id="chart"></canvas></div>
{note}{controls}        </div>
        <div class="info-panel">
            <h3>What This Shows</h3>
{annotation}{insight}{ranked}        </div>
    </div>
</main>
    <script src="{sim_id}.js"></script>
</body>
</html>
"""

CSS = """/* {title} - Chart.js MicroSim stylesheet
   Layout: chart panel left, notes panel right. Zero margin for iframe embedding. */

* {{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}}

html, body {{
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
}}

main {{
    display: block;
    width: 100%;
    height: 100%;
}}

.container {{
    display: flex;
    width: 100%;
    height: 100vh;
    /* Capped at CANVAS_HEIGHT so the layout never renders taller than the
       iframe it is embedded in. Keep in sync with CANVAS_HEIGHT. */
    max-height: {height}px;
}}

.chart-panel {{
    width: 68%;
    height: 100%;
    background-color: aliceblue;
    padding: 12px 14px;
    display: flex;
    flex-direction: column;
}}

.chart-title {{
    font-size: 17px;
    color: #222;
    margin-bottom: 8px;
    flex: 0 0 auto;
}}

/* Chart.js needs a parent with a definite size to size its canvas against. */
.chart-holder {{
    position: relative;
    flex: 1 1 auto;
    min-height: 0;
}}

.chart-note {{
    flex: 0 0 auto;
    font-size: 12px;
    color: #555;
    font-style: italic;
    padding-top: 8px;
}}

.controls {{
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    align-items: center;
    padding-top: 10px;
    font-size: 13px;
    color: #333;
}}

.controls label {{
    display: flex;
    align-items: center;
    gap: 5px;
}}

.controls select {{
    font-size: 13px;
    padding: 3px 5px;
}}

.controls button {{
    font-size: 13px;
    padding: 5px 12px;
    border: none;
    border-radius: 5px;
    background-color: #4A90D9;
    color: white;
    font-weight: bold;
    cursor: pointer;
}}

.controls button:hover {{
    background-color: #2E6BA8;
}}

.info-panel {{
    width: 32%;
    height: 100%;
    background-color: #f8f9fa;
    border-left: 1px solid #dee2e6;
    padding: 15px;
    overflow-y: auto;
}}

.info-panel h3 {{
    font-size: 17px;
    color: #333;
    margin-bottom: 10px;
    padding-bottom: 8px;
    border-bottom: 2px solid #4A90D9;
}}

.annotation {{
    background-color: #FFF8E8;
    border-left: 4px solid #F5A623;
    padding: 9px 11px;
    font-size: 13px;
    line-height: 1.5;
    color: #444;
    margin-bottom: 12px;
}}

.insight {{
    font-size: 13px;
    line-height: 1.55;
    color: #444;
}}

.insight strong {{
    color: #2E6BA8;
}}

.ranked {{
    margin-top: 12px;
    font-size: 13px;
    line-height: 1.6;
    color: #444;
}}

.ranked ol {{
    margin-left: 18px;
}}

@media (max-width: 620px) {{
    .chart-title {{ font-size: 15px; }}
    .info-panel {{ width: 38%; }}
    .chart-panel {{ width: 62%; }}
}}
"""

JS = """// {title}
// CANVAS_HEIGHT: {height}
// Generated by scripts/build-chartjs-sim.py from scripts/sim-charts/{sim_id}.json.
// Edit the data file and regenerate rather than editing this file by hand.

const chartData = {data};

const chartOptions = {options};

const ctx = document.getElementById('chart');
const chart = new Chart(ctx, {{
    type: {type},
    data: chartData,
    options: chartOptions
}});

// Checkbox controls mirror the legend, so a series can be toggled without
// knowing that clicking a legend entry does that.
document.querySelectorAll('[data-dataset]').forEach(el => {{
    el.addEventListener('change', () => {{
        const i = parseInt(el.dataset.dataset, 10);
        chart.setDatasetVisibility(i, el.checked);
        chart.update();
    }});
    // apply the initial state declared in the data file
    const i = parseInt(el.dataset.dataset, 10);
    chart.setDatasetVisibility(i, el.checked);
}});
chart.update();

// Dropdown controls call onControl, and buttons call onAction. A sim defines
// whichever it needs in its extraJs block; both are optional.
document.querySelectorAll('select[data-control]').forEach(el => {{
    el.addEventListener('change', () => {{
        if (typeof onControl === 'function') onControl(el.dataset.control, el.value);
    }});
}});

document.querySelectorAll('button[data-action]').forEach(el => {{
    el.addEventListener('click', () => {{
        if (typeof onAction === 'function') onAction(el.dataset.action);
    }});
}});
{extra}"""

# Chart.js defaults every sim inherits; a data file's "options" merge over these.
DEFAULT_OPTIONS = {
    "responsive": True,
    "maintainAspectRatio": False,
    "plugins": {
        "legend": {"position": "top", "align": "end",
                   "labels": {"boxWidth": 14, "font": {"size": 12}}},
        "tooltip": {"titleFont": {"size": 13}, "bodyFont": {"size": 13}},
    },
    "scales": {
        "x": {"ticks": {"font": {"size": 12}}},
        "y": {"beginAtZero": True, "ticks": {"font": {"size": 12}}},
    },
}


def deep_merge(base, over):
    # deepcopy, not dict(): a shallow copy leaves nested dicts shared with
    # DEFAULT_OPTIONS, so writing an axis title into one sim's options mutated
    # the module-level defaults and leaked that title into every later chart.
    out = copy.deepcopy(base)
    for k, v in (over or {}).items():
        if isinstance(v, dict) and isinstance(out.get(k), dict):
            out[k] = deep_merge(out[k], v)
        else:
            out[k] = v
    return out


def build_options(spec):
    opts = deep_merge(DEFAULT_OPTIONS, spec.get("options"))
    titles = spec.get("axisTitles") or {}
    # A radar chart has one radial scale, "r", and no x/y. Drop the inherited x
    # and y while KEEPING any r the data file supplied -- dropping "scales"
    # wholesale silently discarded the radar's tick and range config.
    if spec.get("type") == "radar":
        scales = opts.get("scales") or {}
        r = scales.get("r")
        if r:
            opts["scales"] = {"r": r}
        else:
            opts.pop("scales", None)
    else:
        for axis in ("x", "y"):
            if titles.get(axis):
                opts.setdefault("scales", {}).setdefault(axis, {})["title"] = {
                    "display": True, "text": titles[axis], "font": {"size": 13}
                }
    return opts


def controls_html(spec):
    items = spec.get("controls") or []
    if not items:
        return ""
    rows = []
    for c in items:
        if c["type"] == "toggle":
            checked = " checked" if c.get("checked", True) else ""
            rows.append(f'                <label><input type="checkbox" '
                        f'data-dataset="{c["dataset"]}"{checked}> {c["label"]}</label>')
        elif c["type"] == "button":
            rows.append(f'                <button type="button" '
                        f'data-action="{c["id"]}">{c["label"]}</button>')
        elif c["type"] == "select":
            opts = "".join(f'<option value="{o}">{o}</option>' for o in c["options"])
            rows.append(f'                <label>{c["label"]} '
                        f'<select data-control="{c["id"]}">{opts}</select></label>')
    return '            <div class="controls">\n' + "\n".join(rows) + "\n            </div>\n"


def build(sim_id):
    spec_path = os.path.join(CHARTS_DIR, sim_id + ".json")
    if not os.path.isfile(spec_path):
        return False, "no chart file"
    spec = json.load(open(spec_path, encoding="utf-8"))

    sim_dir = os.path.join(SIMS, sim_id)
    os.makedirs(sim_dir, exist_ok=True)

    note = (f'            <div class="chart-note">{spec["note"]}</div>\n'
            if spec.get("note") else "")
    annotation = (f'            <div class="annotation">{spec["annotation"]}</div>\n'
                  if spec.get("annotation") else "")
    insight = (f'            <div class="insight">{spec["insight"]}</div>\n'
               if spec.get("insight") else "")
    # a container extraJs can populate; emitted here so regeneration keeps it
    ranked = ('            <div class="ranked" id="ranking"></div>\n'
              if spec.get("rankedList") else "")

    with open(os.path.join(sim_dir, "main.html"), "w", encoding="utf-8") as f:
        f.write(HTML.format(title=spec["title"], sim_id=sim_id, note=note,
                            controls=controls_html(spec),
                            annotation=annotation, insight=insight,
                            ranked=ranked))

    with open(os.path.join(sim_dir, "style.css"), "w", encoding="utf-8") as f:
        f.write(CSS.format(title=spec["title"], height=spec["height"]))

    data = {"labels": spec["labels"], "datasets": spec["datasets"]}
    extra = spec.get("extraJs", "")
    with open(os.path.join(sim_dir, sim_id + ".js"), "w", encoding="utf-8") as f:
        f.write(JS.format(
            title=spec["title"], height=spec["height"], sim_id=sim_id,
            data=json.dumps(data, indent=4),
            options=json.dumps(build_options(spec), indent=4),
            type=json.dumps(spec["type"]),
            extra=("\n" + extra + "\n") if extra else "",
        ))
    return True, sim_dir


def main():
    targets = sys.argv[1:] or sorted(
        n[:-5] for n in os.listdir(CHARTS_DIR) if n.endswith(".json"))
    ok = skipped = 0
    for sim_id in targets:
        good, msg = build(sim_id)
        if good:
            ok += 1
            print("built", sim_id)
        else:
            skipped += 1
            print(f"skip {sim_id}: {msg}")
    print(f"\n{ok} built, {skipped} skipped")


if __name__ == "__main__":
    main()
