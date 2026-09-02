#!/usr/bin/env python3
"""Generate a vis-timeline MicroSim (main.html, style.css, <sim-id>.js) from a
data file.

The three timelines in this book have the same shape: a horizontal band of
labelled points or ranges, a click-for-detail panel underneath, and a legend.
They differ only in their data, so they share one shell -- same as the
vis-network and Mermaid generators.

Two things this shell does that a bare vis-timeline does not:

  * It uses ordinal positions, not real dates. A club growth path is measured
    in years-since-founding and a reminder cadence in days-before-an-event, so
    the axis is relabelled from a small `ticks` map rather than showing 1970.
  * It fixes the window. A timeline that can be panned into empty space is a
    timeline a reader gets lost in, and none of these has anything to find
    outside its own range.

Input: scripts/sim-timelines/<sim-id>.json

    {
      "title":  "Club Growth Path",
      "height": 560,                     # CANVAS_HEIGHT; iframe gets +2
      "axisLabel": "Club age",
      "panelHeading": "Stage Details",
      "placeholder": "Click any stage.",
      "stats": "4 stages",
      "min": -0.5, "max": 4.5,           # window, in ordinal units
      "ticks": {"0": "Founding year", "1": "Year 1-2"},
      "marker": {"label": "You are here", "at": 0},   # optional, draggable
      "items": [
        {"id":"found", "at":0, "end":1, "label":"Single Site",
         "cls":"resolve",
         "detail":[["What it is","..."],["To advance","..."]]}
      ],
      "legend": [ {"cls":"resolve","text":"Founding"} ]
    }

An item with `end` renders as a range; without one, as a point.

Usage:
    python3 scripts/build-timeline-sim.py                 # all timelines
    python3 scripts/build-timeline-sim.py <sim-id> ...    # just these
"""

import json
import os
import sys

PROJECT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SIMS = os.path.join(PROJECT, "docs/sims")
TL_DIR = os.path.join(PROJECT, "scripts/sim-timelines")

# Same palette and keys as the vis-network and Mermaid generators, so a reader
# moving between diagram types sees one colour language.
CLASSES = {
    "hub":       ("#F5A623", "#B87B12", "#000000"),
    "node":      ("#4A90D9", "#2E6BA8", "#FFFFFF"),
    "resolve":   ("#3E9E6E", "#256E4A", "#FFFFFF"),
    "danger":    ("#D64545", "#8F2B2B", "#FFFFFF"),
    "wait":      ("#8E7CC3", "#5B4B8A", "#FFFFFF"),
    "remediate": ("#E8833A", "#A85718", "#FFFFFF"),
    "neutral":   ("#5B7186", "#33475B", "#FFFFFF"),
}

HTML = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="schema" content="https://dmccreary.github.io/intelligent-textbooks/ns/microsim/v1">
    <title>{title}</title>
    <link rel="stylesheet"
          href="https://unpkg.com/vis-timeline@7.7.3/styles/vis-timeline-graph2d.min.css">
    <script src="https://unpkg.com/vis-timeline@7.7.3/standalone/umd/vis-timeline-graph2d.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<main>
    <div class="container">
        <div class="title">{title}</div>

        <div class="controls">
            <div class="stats">{stats}</div>
            <button class="btn btn-secondary" id="reset-btn">Reset</button>
        </div>

        <div id="timeline"></div>
        <div id="axis-ticks"></div>
        <div class="axis-label">{axis_label}</div>

        <div class="legend">
{legend}        </div>

        <div class="info-panel">
            <div class="info-heading">{panel_heading}</div>
            <div id="info-content">
                <p class="info-placeholder">{placeholder}</p>
            </div>
        </div>
    </div>
</main>

    <script src="{sim_id}.js"></script>
</body>
</html>
"""

CSS = """/* {title} -- vis-timeline MicroSim */

* {{ margin: 0; padding: 0; box-sizing: border-box; }}

body {{
  font-family: Arial, Helvetica, sans-serif;
  background-color: aliceblue;
  color: #212529;
}}

main {{ display: block; }}

.container {{
  width: 100%;
  height: {height}px;
  padding: 10px 16px 12px;
  display: flex;
  flex-direction: column;
  /* The screenshot tool renders 200px taller than the target and crops, so a
     container that sizes itself to the viewport comes out oversized. Cap it. */
  max-height: {height}px;
}}

.title {{
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: #1a3a6c;
  margin-bottom: 8px;
}}

.controls {{
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}}

.stats {{ font-size: 13px; color: #4A5A68; font-weight: bold; }}

.btn {{
  margin-left: auto;
  padding: 5px 14px;
  font-size: 13px;
  font-family: inherit;
  border: none;
  border-radius: 5px;
  background-color: #4A90D9;
  color: white;
  cursor: pointer;
}}

.btn-secondary {{ background-color: #5B7186; }}
.btn:hover {{ filter: brightness(1.1); }}

#timeline {{
  border: 1px solid #C9D6E2;
  border-radius: 6px;
  background: white;
  flex: 0 0 auto;
}}

.axis-label {{
  text-align: center;
  font-size: 12px;
  color: #8AA6BF;
  margin: 4px 0 8px;
}}

.legend {{
  display: flex;
  flex-wrap: wrap;
  gap: 6px 18px;
  margin-bottom: 8px;
}}

.legend-item {{
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #4A5A68;
}}

.legend-color {{
  width: 13px;
  height: 13px;
  border-radius: 3px;
  margin-right: 6px;
  flex: 0 0 auto;
}}

.info-panel {{
  border: 2px solid #4A90D9;
  border-radius: 8px;
  background: white;
  padding: 10px 14px;
  flex: 1 1 auto;
  overflow-y: auto;
}}

.info-heading {{
  font-size: 14px;
  font-weight: bold;
  color: #1a3a6c;
  border-bottom: 1px solid #E2EAF2;
  padding-bottom: 5px;
  margin-bottom: 7px;
}}

.info-placeholder {{ font-size: 13px; color: #7A8A99; font-style: italic; }}
.info-label {{ font-size: 16px; font-weight: bold; margin-bottom: 6px; }}
#info-content p {{ font-size: 13px; line-height: 1.45; margin-bottom: 6px; }}
#info-content strong {{ color: #2C3A45; }}

/* vis-timeline overrides: the defaults are tuned for calendar data and are
   too small and too grey for a diagram that is mostly four labelled blocks. */
.vis-item {{ border-width: 2px; font-size: 13px; }}
.vis-item.vis-selected {{ box-shadow: 0 0 0 3px rgba(245,166,35,0.55); }}
.vis-item .vis-item-content {{ padding: 5px 8px; font-weight: bold; }}
/* vis's own minor labels are suppressed: at one tick per ordinal it sizes
   each label box to a single step (~36px), so "Week 12" clips to "Week",
   and its placement is a third of a step off the gridline it names. The
   #axis-ticks row below draws them instead, from the same linear mapping
   the timeline uses. The axis panel still needs a height for the
   gridlines to have something to hang from. */
.vis-time-axis .vis-text {{ font-size: 12px; color: #5B7186; }}
#timeline .vis-time-axis.vis-foreground {{ min-height: 16px; }}
#axis-ticks {{ position: relative; height: 20px; margin-top: 4px; }}
#axis-ticks span {{
  position: absolute; top: 0; transform: translateX(-50%);
  white-space: nowrap; font-size: 12px; color: #5B7186;
}}
.vis-time-axis .vis-grid.vis-minor {{ border-color: #E9EFF5; }}
.vis-panel.vis-center, .vis-panel.vis-top, .vis-panel.vis-bottom {{
  border-color: #C9D6E2;
}}
.vis-item.marker {{
  background-color: #FDF3DF;
  border-color: #B87B12;
  color: #7A5510;
}}

@media (max-width: 520px) {{
  .title {{ font-size: 18px; }}
  .vis-item {{ font-size: 11px; }}
}}
"""

JS = """// {title}
// CANVAS_HEIGHT: {height}
//
// Generated by scripts/build-timeline-sim.py from
// scripts/sim-timelines/{sim_id}.json -- edit the data file, not this.

const CLASS_COLORS = {class_colors};

const itemData = {items};
const TICKS = {ticks};
const MARKER = {marker};
const WINDOW_MIN = {win_min};
const WINDOW_MAX = {win_max};
const TIMELINE_HEIGHT = {tl_height};

let timeline, items;

// vis-timeline works in dates, and none of these timelines is about dates: one
// counts years since founding, one counts weeks of a semester, one counts down
// to an event. Ordinal positions are mapped onto a fixed epoch and the axis is
// relabelled from TICKS, so the reader never sees a calendar.
const EPOCH = Date.UTC(2000, 0, 1);
const UNIT = 24 * 60 * 60 * 1000;          // one ordinal step = one day

function toDate(n) {{ return new Date(EPOCH + n * UNIT); }}
// vis-timeline hands the axis formatter a Moment and the move handler a Date.
// valueOf() is the one accessor both have.
function toOrdinal(d) {{ return Math.round((d.valueOf() - EPOCH) / UNIT); }}

function styleFor(cls) {{
    const c = CLASS_COLORS[cls] || CLASS_COLORS.neutral;
    return 'background-color:' + c[0] + '; border-color:' + c[1] +
           '; color:' + c[2] + ';';
}}

function buildItems() {{
    const out = itemData.map(it => {{
        const o = {{
            id: it.id,
            content: it.label,
            start: toDate(it.at),
            type: it.end !== undefined ? 'range' : 'box',
            style: styleFor(it.cls),
            title: it.hint || it.label,
            editable: false
        }};
        // Only set `end` when there really is one. vis-timeline's DataSet
        // type-converts every key that is present, so an explicit
        // `end: undefined` makes it call getTime() on undefined and the
        // whole timeline fails to draw.
        if (it.end !== undefined) o.end = toDate(it.end);
        return o;
    }});
    if (MARKER) {{
        out.push({{
            id: '__marker',
            content: MARKER.label,
            start: toDate(MARKER.at),
            type: 'point',
            className: 'marker',
            // The only draggable thing on the timeline: the reader's own
            // bookmark. Everything else is fixed so a stray drag cannot
            // rearrange the content.
            editable: {{ updateTime: true, updateGroup: false, remove: false }}
        }});
    }}
    return out;
}}

// The window is fixed -- no panning, no zooming -- so position maps to pixels
// linearly across the centre panel, and a tick can be placed exactly on the
// gridline it names.
function layoutTicks() {{
    const host = document.getElementById('axis-ticks');
    const panel = document.querySelector('#timeline .vis-panel.vis-center');
    if (!host || !panel) return;
    const hr = host.getBoundingClientRect();
    const pr = panel.getBoundingClientRect();
    const span = WINDOW_MAX - WINDOW_MIN;
    host.innerHTML = '';
    Object.keys(TICKS).forEach(function (k) {{
        const frac = (Number(k) - WINDOW_MIN) / span;
        const el = document.createElement('span');
        el.textContent = TICKS[k];
        el.style.left = ((pr.left - hr.left) + frac * pr.width) + 'px';
        host.appendChild(el);
    }});
}}

function initializeTimeline() {{
    items = new vis.DataSet(buildItems());

    const options = {{
        height: TIMELINE_HEIGHT + 'px',
        min: toDate(WINDOW_MIN),
        max: toDate(WINDOW_MAX),
        start: toDate(WINDOW_MIN),
        end: toDate(WINDOW_MAX),
        // Locked window: there is nothing outside the range, so panning or
        // zooming out of it only loses the reader.
        zoomable: false,
        moveable: false,
        selectable: true,
        stack: true,
        align: 'center',
        margin: {{ item: 12, axis: 18 }},
        orientation: {{ axis: 'bottom', item: 'top' }},
        // One tick per ordinal position. Left to itself vis picks a round
        // step -- 4 days across a 19-day window -- and any label whose
        // position is not a multiple of that step silently never renders.
        // Ticking every position and returning '' for the unlabelled ones
        // puts the TICKS map in charge of what the reader sees.
        timeAxis: {{ scale: 'day', step: 1 }},
        editable: {{ updateTime: true, add: false, remove: false }},
        onMove: function (item, callback) {{
            // Snap the bookmark to whole positions, and never let it leave the
            // range.
            let n = Math.round(toOrdinal(item.start));
            n = Math.max(Math.ceil(WINDOW_MIN), Math.min(Math.floor(WINDOW_MAX), n));
            item.start = toDate(n);
            callback(item);
        }},
        format: {{
            minorLabels: function () {{ return ''; }},
            majorLabels: function () {{ return ''; }}
        }}
    }};

    const container = document.getElementById('timeline');
    timeline = new vis.Timeline(container, items, options);
    timeline.on('select', onSelect);
    timeline.on('changed', layoutTicks);
    window.addEventListener('resize', layoutTicks);
    layoutTicks();
}}

function onSelect(props) {{
    const id = props.items && props.items[0];
    if (!id || id === '__marker') {{ clearInfo(); return; }}
    const it = itemData.find(d => d.id === id);
    if (!it) return;
    const body = (it.detail || [])
        .map(pair => '<p><strong>' + pair[0] + ':</strong> ' + pair[1] + '</p>')
        .join('');
    document.getElementById('info-content').innerHTML =
        '<div class="info-label" style="color:' +
        (CLASS_COLORS[it.cls] || CLASS_COLORS.neutral)[1] + '">' +
        it.label.replace(/<[^>]*>/g, ' ') + '</div>' + body;
}}

function clearInfo() {{
    document.getElementById('info-content').innerHTML =
        '<p class="info-placeholder">{placeholder}</p>';
}}

function reset() {{
    timeline.destroy();
    initializeTimeline();
    clearInfo();
}}

document.addEventListener('DOMContentLoaded', function () {{
    initializeTimeline();
    document.getElementById('reset-btn').addEventListener('click', reset);
}});
"""


def legend_html(spec):
    """A row whose cls is not a colour class renders as a plain note."""
    rows = []
    for item in spec.get("legend", []):
        if item["cls"] in CLASSES:
            bg = CLASSES[item["cls"]][0]
            swatch = (f'<span class="legend-color" '
                      f'style="background-color:{bg}"></span>')
        else:
            swatch = ('<span class="legend-color" '
                      'style="background:transparent"></span>')
        rows.append(f'            <div class="legend-item">'
                    f'{swatch}{item["text"]}</div>')
    return "\n".join(rows) + ("\n" if rows else "")


def build(sim_id):
    path = os.path.join(TL_DIR, sim_id + ".json")
    if not os.path.isfile(path):
        return False, "no timeline file"
    spec = json.load(open(path, encoding="utf-8"))

    sim_dir = os.path.join(SIMS, sim_id)
    os.makedirs(sim_dir, exist_ok=True)

    placeholder = spec.get("placeholder", "Click any item to see its details.")

    with open(os.path.join(sim_dir, "main.html"), "w", encoding="utf-8") as f:
        f.write(HTML.format(title=spec["title"], sim_id=sim_id,
                            stats=spec.get("stats", ""),
                            axis_label=spec.get("axisLabel", ""),
                            legend=legend_html(spec),
                            panel_heading=spec.get("panelHeading", "Details"),
                            placeholder=placeholder))

    with open(os.path.join(sim_dir, "style.css"), "w", encoding="utf-8") as f:
        f.write(CSS.format(title=spec["title"], height=spec["height"]))

    with open(os.path.join(sim_dir, sim_id + ".js"), "w", encoding="utf-8") as f:
        f.write(JS.format(
            title=spec["title"], height=spec["height"], sim_id=sim_id,
            class_colors=json.dumps(CLASSES, indent=4),
            items=json.dumps(spec["items"], indent=4, ensure_ascii=False),
            ticks=json.dumps(spec.get("ticks", {}), indent=4, ensure_ascii=False),
            marker=json.dumps(spec.get("marker"), ensure_ascii=False),
            win_min=spec["min"], win_max=spec["max"],
            tl_height=spec.get("timelineHeight", 240),
            placeholder=placeholder))

    return True, sim_dir


def main():
    targets = sys.argv[1:] or sorted(
        n[:-5] for n in os.listdir(TL_DIR) if n.endswith(".json"))
    ok = skipped = 0
    for sim_id in targets:
        good, msg = build(sim_id)
        if good:
            ok += 1
            print("built " + sim_id)
        else:
            skipped += 1
            print(f"skip {sim_id}: {msg}")
    print(f"\n{ok} built, {skipped} skipped")


if __name__ == "__main__":
    main()
