#!/usr/bin/env python3
"""Generate a Mermaid MicroSim (main.html, style.css, script.js) from a data file.

This book has 31 Mermaid workflow specs that share one interaction contract:
a coloured flowchart on the left, a details panel on the right, hover to
preview a step and click to pin it. Hand-writing that shell 31 times invites
31 slightly different versions of it, so the shell lives here once and each
sim supplies only its own content.

Input: scripts/sim-flows/<sim-id>.json

    {
      "title":     "Handling a Conflict or Complaint",
      "height":    680,                     # CANVAS_HEIGHT; iframe gets +2
      "direction": "TD",                    # optional, default TD
      "nodes": [
        {"id":"Report","shape":"round","label":"Complaint or<br/>Conflict Reported",
         "cls":"doc","title":"...","info":"..."},
        ...
      ],
      "edges": [ {"from":"Report","to":"Document"},
                 {"from":"Check","to":"Escalate","label":"Yes"} ],
      "legend": [ {"cls":"doc","text":"Documentation step"} ]
    }

shape: round | box | diamond | stadium      cls: any key in CLASSES below.

The `info` text of every node is wired to the panel, so a generated diagram is
never merely decorative -- that is the requirement these specs all state.

Usage:
    python3 scripts/build-mermaid-sim.py                # all flows
    python3 scripts/build-mermaid-sim.py <sim-id> ...   # just these
"""

import json
import os
import sys

PROJECT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SIMS = os.path.join(PROJECT, "docs/sims")
FLOWS_DIR = os.path.join(PROJECT, "scripts/sim-flows")

# The book's palette. Keys are what a node's "cls" refers to.
CLASSES = {
    "doc":      ("#4A90D9", "#2E6BA8", "#fff"),   # documentation / neutral step
    "decision": ("#F5A623", "#B87B12", "#333"),   # decision diamond
    "danger":   ("#D64545", "#8F2B2B", "#fff"),   # escalation / stop / risk
    "resolve":  ("#3E9E6E", "#256E4A", "#fff"),   # resolution / closure / success
    "start":    ("#5B7186", "#33475B", "#fff"),   # entry point
    "wait":     ("#8E7CC3", "#5B4B8A", "#fff"),   # waiting / queued / external
    "remediate":("#E8833A", "#A85718", "#fff"),   # not ready yet: go fix this first
}

SHAPES = {
    "round":   ('("', '")'),
    "box":     ('["', '"]'),
    "diamond": ('{"', '"}'),
    "stadium": ('(["', '"])'),
}


def mermaid_source(flow):
    direction = flow.get("direction", "TD")
    lines = [f"flowchart {direction}"]
    for n in flow["nodes"]:
        open_s, close_s = SHAPES[n.get("shape", "box")]
        lines.append(f'    {n["id"]}{open_s}{n["label"]}{close_s}:::{n["cls"]}Node')
    lines.append("")
    for e in flow["edges"]:
        if e.get("label"):
            lines.append(f'    {e["from"]} -->|{e["label"]}| {e["to"]}')
        else:
            lines.append(f'    {e["from"]} --> {e["to"]}')
    lines.append("")
    used = []
    for n in flow["nodes"]:
        if n["cls"] not in used:
            used.append(n["cls"])
    for cls in used:
        bg, border, fg = CLASSES[cls]
        lines.append(
            f"    classDef {cls}Node fill:{bg},stroke:{border},"
            f"stroke-width:2px,color:{fg},font-size:16px"
        )
    lines.append("")
    lines.append("    linkStyle default stroke:#7A8A99,stroke-width:2px,font-size:16px")
    return "\n".join(lines)


def legend_html(flow):
    rows = []
    for item in flow.get("legend", []):
        rows.append(
            f'                    <div class="legend-item">'
            f'<span class="swatch sw-{item["cls"]}"></span>{item["text"]}</div>'
        )
    if not rows:
        return ""
    return ('                <div class="legend">\n'
            + "\n".join(rows) + "\n                </div>\n")


def node_info_js(flow):
    entries = []
    for n in flow["nodes"]:
        if not n.get("info"):
            continue
        title = json.dumps(n.get("title") or n["label"].replace("<br/>", " "))
        info = json.dumps(n["info"])
        entries.append(f"            {json.dumps(n['id'])}: {{\n"
                       f"                title: {title},\n"
                       f"                description: {info}\n"
                       f"            }}")
    return ",\n".join(entries)


HTML = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="schema" content="https://dmccreary.github.io/intelligent-textbooks/ns/microsim/v1">
    <title>{title}</title>
    <script type="module">
        import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
        mermaid.initialize({{
            startOnLoad: true,
            theme: 'default',
            flowchart: {{
                useMaxWidth: true,
                htmlLabels: true,
                curve: 'basis',
                subGraphTitleMargin: {{ top: 10, bottom: 14 }}
            }}
        }});
    </script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<main>
    <div class="container">
        <div class="diagram-panel">
            <div class="mermaid">
{mermaid}
            </div>
        </div>
        <div class="info-panel">
            <h3>Step Details</h3>
            <div id="info-display">
                <p class="info-placeholder">Hover a step to preview it, or click a step to pin its details here.</p>
{legend}            </div>
        </div>
    </div>
</main>

    <!-- Node information data - one entry per node in the flowchart above -->
    <script>
        const nodeInfo = {{
{node_info}
        }};
    </script>
    <!-- Load interaction script after nodeInfo is defined -->
    <script src="script.js"></script>
</body>
</html>
"""


def build(sim_id):
    flow_path = os.path.join(FLOWS_DIR, sim_id + ".json")
    if not os.path.isfile(flow_path):
        return False, "no flow file"
    flow = json.load(open(flow_path, encoding="utf-8"))

    sim_dir = os.path.join(SIMS, sim_id)
    os.makedirs(sim_dir, exist_ok=True)

    html = HTML.format(
        title=flow["title"],
        mermaid=mermaid_source(flow),
        legend=legend_html(flow),
        node_info=node_info_js(flow),
    )
    with open(os.path.join(sim_dir, "main.html"), "w", encoding="utf-8") as f:
        f.write(html)

    # style.css and script.js are identical for every Mermaid sim in the book,
    # so they are copied from the reference implementation rather than forked.
    ref = os.path.join(SIMS, "conflict-resolution-workflow")
    for name in ("style.css", "script.js"):
        src = open(os.path.join(ref, name), encoding="utf-8").read()
        if name == "style.css":
            src = src.replace("Handling a Conflict or Complaint", flow["title"])
            src = src.replace("max-height: 680px;", f"max-height: {flow['height']}px;")
        else:
            src = src.replace("Handling a Conflict or Complaint", flow["title"])
        with open(os.path.join(sim_dir, name), "w", encoding="utf-8") as f:
            f.write(src)

    return True, sim_dir


def main():
    targets = sys.argv[1:] or sorted(
        n[:-5] for n in os.listdir(FLOWS_DIR) if n.endswith(".json")
    )
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
