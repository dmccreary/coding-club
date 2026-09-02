#!/usr/bin/env python3
"""Generate a vis-network MicroSim (main.html, style.css, <sim-id>.js) from a data file.

Generalises the two hand-built vis-network sims (coding-club-ecosystem-map and
club-charter-anatomy) so the remaining eight share one shell: fixed node
positions, always-visible edge labels, click-a-node-for-details, a legend, and
the camera logic that took several passes to get right.

Input: scripts/sim-networks/<sim-id>.json

    {
      "title":  "Club Governance at a Glance",
      "height": 700,                       # CANVAS_HEIGHT; iframe gets +2
      "panelHeading": "Role Details",
      "placeholder": "Click any role to see what it does.",
      "stats":  "6 roles",                 # small line above the legend
      "nodes": [
        {"id":"leader","label":"Club Leader","x":0,"y":-200,"cls":"hub",
         "detail":[["What it does","..."],["Example","..."]]}
      ],
      "edges": [ {"from":"leader","to":"assistant","label":"delegates to",
                  "dashes": false,        # optional, a connection not yet made
                  "width": 3} ],          # optional, e.g. an edge weight
      "legend": [ {"cls":"hub","text":"Club leader"} ],
      "arrows": false,                     # optional, directed edges
      "edgeFontSize": 26,                  # optional; drop it on dense chains
                                           # where wide nodes clip long labels
      "nodeWidth": 260,                    # optional; drop it to narrow the
                                           # ellipses and free horizontal room
      "pinned": ["leader"],                # optional, nodes that cannot be dragged
      "spotlight": {                       # optional second button
        "button": "Show the strongest one",
        "nodes": ["leader"],
        "heading": "The strongest pairing",
        "detail": [["Why", "..."]]
      }
    }

Node classes come from CLASSES below. Node sizing and the camera framing are
identical for every sim, which is what keeps them looking like one book.

Usage:
    python3 scripts/build-visnetwork-sim.py                # all networks
    python3 scripts/build-visnetwork-sim.py <sim-id> ...   # just these
"""

import json
import os
import sys

PROJECT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SIMS = os.path.join(PROJECT, "docs/sims")
NETS_DIR = os.path.join(PROJECT, "scripts/sim-networks")

# (background, border, font) -- the book's palette, same keys as the Mermaid
# generator so a reader moving between diagram types sees consistent colours.
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
    <script src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/vis-network/styles/vis-network.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
<main>
    <div class="container">
        <div id="network"></div>

        <div class="title">{title}</div>

        <div class="right-panel">
            <div class="controls">
                <div class="stats">{stats}</div>
{spotlight_btn}                <button class="btn btn-secondary" id="reset-btn">Reset</button>
            </div>

            <div class="legend">
{legend}            </div>

            <div class="info-panel">
                <div class="info-heading">{panel_heading}</div>
                <div id="info-content">
                    <p class="info-placeholder">{placeholder}</p>
                </div>
            </div>
        </div>
    </div>
</main>

    <script src="{sim_id}.js"></script>
</body>
</html>
"""

CSS = """/* {title} - vis-network MicroSim stylesheet
   Full-bleed network canvas with an overlay title and a right-hand panel.
   Zero margin/padding so the sim fills its iframe exactly. */

* {{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}}

body {{
    font-family: Arial, Helvetica, sans-serif;
    background-color: aliceblue;
}}

main {{
    display: block;
    width: 100%;
    height: 100%;
}}

.container {{
    position: relative;
    width: 100%;
    height: 100vh;
    /* Capped at CANVAS_HEIGHT so the layout never renders taller than the
       iframe it is embedded in. Keep this in sync with CANVAS_HEIGHT. */
    max-height: {height}px;
}}

#network {{
    width: 100%;
    height: 100%;
    background-color: aliceblue;
}}

.title {{
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    font-weight: bold;
    color: black;
    background-color: aliceblue;
    padding: 2px 10px;
    white-space: nowrap;
    z-index: 10;
}}

.right-panel {{
    position: absolute;
    top: 44px;
    right: 10px;
    width: 230px;
    max-height: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 10;
}}

.controls {{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.95);
    padding: 8px 12px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}}

.stats {{
    font-size: 12px;
    font-weight: bold;
    color: #333;
}}

.btn {{
    padding: 6px 12px;
    font-size: 12px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}}

.btn-secondary {{
    background-color: #757575;
    color: white;
}}

.btn-secondary:hover {{
    background-color: #616161;
}}

.legend {{
    display: flex;
    flex-wrap: wrap;
    gap: 4px 14px;
    padding: 8px 12px;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}}

.legend-item {{
    display: flex;
    align-items: center;
    font-size: 11.5px;
}}

.legend-note {{
  background: transparent !important;
  border: none !important;
}}

.legend-color {{
    width: 13px;
    height: 13px;
    border-radius: 50%;
    margin-right: 5px;
    border: 2px solid #333;
    flex-shrink: 0;
}}

.info-panel {{
    background-color: rgba(255, 255, 255, 0.97);
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 2px solid #4A90D9;
    overflow-y: auto;
}}

.info-heading {{
    font-weight: bold;
    font-size: 13px;
    color: #2E6BA8;
    margin-bottom: 6px;
    padding-bottom: 4px;
    border-bottom: 1px solid #dee2e6;
}}

.info-label {{
    font-size: 15px;
    font-weight: bold;
    color: #B87B12;
    margin-bottom: 4px;
}}

.info-relation {{
    font-size: 12px;
    font-style: italic;
    color: #555;
    margin-bottom: 8px;
}}

#info-content p {{
    font-size: 12.5px;
    line-height: 1.45;
    color: #333;
    margin-bottom: 8px;
}}

.info-placeholder {{
    color: #888;
    font-style: italic;
}}

@media (max-width: 620px) {{
    .title {{ font-size: 15px; }}
    .right-panel {{ width: 190px; }}
    .legend-item {{ font-size: 10px; }}
}}
"""

JS = """// {title}
// CANVAS_HEIGHT: {height}
// Generated by scripts/build-visnetwork-sim.py from scripts/sim-networks/{sim_id}.json.
// Edit the data file and regenerate rather than editing this file by hand.

const CLASS_COLORS = {class_colors};

const nodeData = {nodes};

const edgeData = {edges};

const PINNED = {pinned};

// Label wrap width for a node. Narrower nodes wrap onto more lines but leave
// more horizontal room for edge labels, which vis-network draws beneath nodes.
const NODE_WIDTH = {node_width};

// Screen pixels the right-hand panel and the title band take out of the canvas.
const RIGHT_PANEL_PX = 250;
const TITLE_BAND_PX = 46;
// vis draws its navigation buttons in the bottom corners of the canvas, and
// they are the only way to pan or zoom while the sim is inside a chapter
// iframe. A sim whose layout puts nodes down in those corners sets
// "navClearance": true and gets a reserved band; the rest keep the full
// height, because reserving it unconditionally costs scale on every
// portrait-shaped graph that never reached the corners anyway.
const NAV_BAND_PX = {nav_band};

// Half-extents of the largest node, used to frame the camera. Measured from
// vis-network's own rendering at the font and widthConstraint set below.
// Framing half-extents, derived from the configured node width rather than
// fixed: a sim that widens its nodes was previously framed as if they were
// still 280 wide, so the outermost column ran off the edge of the view.
const NODE_HALF_W = (NODE_WIDTH + 60) / 2 + 20;
const NODE_HALF_H = 100;

let nodes, edges, network;

// Wheel zoom and drag-pan would fight with page scrolling inside a chapter
// iframe, so they are enabled only when main.html is opened on its own.
// Navigation buttons are always available.
function isInIframe() {{
    try {{
        return window.self !== window.top;
    }} catch (e) {{
        return true;
    }}
}}

function buildNodes() {{
    return nodeData.map(n => {{
        const c = CLASS_COLORS[n.cls] || CLASS_COLORS.node;
        // Emphasis (bigger font, wider label box) defaults to the hub class,
        // which is right when one node is the focus. A sim where four nodes
        // share the class wants the colour without the size -- four emphasised
        // nodes overlap each other and run off the canvas -- so it sets
        // "emphasis": false on them.
        const isHub = n.emphasis !== undefined ? n.emphasis : n.cls === 'hub';
        const pinned = PINNED.indexOf(n.id) !== -1;
        return {{
            id: n.id,
            label: n.label,
            x: n.x,
            y: n.y,
            shape: 'ellipse',
            color: {{
                background: c[0],
                border: c[1],
                highlight: {{ background: c[0], border: '#222222' }}
            }},
            font: {{ color: c[2], size: isHub ? 40 : 32, face: 'Arial' }},
            borderWidth: isHub ? 3 : 2,   // thin: the fonts are large, the borders are not
            widthConstraint: {{ maximum: isHub ? NODE_WIDTH + 60 : NODE_WIDTH }},
            margin: isHub ? 32 : 20,
            fixed: {{ x: pinned, y: pinned }}
        }};
    }});
}}

// vis-network draws edge labels beneath nodes, so on a chain of wide ellipses a
// long label gets its ends covered. Sims with that shape drop the size.
const EDGE_FONT = {{ size: {edge_font}, face: 'Arial', color: '#333333',
                    strokeWidth: 8, strokeColor: '#F0F8FF', align: 'horizontal' }};
const EDGE_FONT_HOVER = {{ size: {edge_font_hover}, face: 'Arial', color: '#B87B12',
                          strokeWidth: 10, strokeColor: '#F0F8FF', align: 'horizontal' }};

function buildEdges() {{
    // A dashed edge is drawn lighter as well as broken, so "this connection does
    // not exist yet" reads at a glance rather than only on close inspection.
    return edgeData.map((e, i) => {{
        const o = {{
            id: i,
            from: e.from,
            to: e.to,
            label: e.label || undefined,
            dashes: e.dashes ? [8, 6] : false,
            color: {{ color: e.dashes ? '#AFBDC8' : '#7A8A99',
                     highlight: '#B87B12', hover: '#B87B12' }},
            width: e.width || (e.dashes ? 2 : 3),
            font: EDGE_FONT
        }};
        // Two edges that cross a symmetric grid share a midpoint, and
        // vis draws both labels there, one on top of the other. A curve
        // bows one of them away so both labels can be read. Positive
        // curves clockwise, negative anticlockwise.
        if (e.curve) {{
            o.smooth = {{ type: e.curve > 0 ? 'curvedCW' : 'curvedCCW',
                         roundness: Math.abs(e.curve) }};
        }}
        return o;
    }});
}}

function initializeNetwork() {{
    const enableMouse = !isInIframe();

    nodes = new vis.DataSet(buildNodes());
    edges = new vis.DataSet(buildEdges());

    const options = {{
        layout: {{ improvedLayout: false }},
        physics: {{ enabled: false }},
        interaction: {{
            hover: true,
            selectConnectedEdges: false,
            dragNodes: true,
            dragView: enableMouse,
            zoomView: enableMouse,
            navigationButtons: true,
            keyboard: {{ enabled: false }}
        }},
        nodes: {{
            shadow: {{ enabled: true, color: 'rgba(0,0,0,0.2)', size: 5, x: 2, y: 2 }}
        }},
        edges: {{
            arrows: {{ to: {{ enabled: {arrows}, scaleFactor: 0.9 }} }},
            smooth: {{ type: 'continuous', roundness: 0.2 }}
        }}
    }};

    const container = document.getElementById('network');
    network = new vis.Network(container, {{ nodes: nodes, edges: edges }}, options);

    network.on('selectNode', params => showNodeInfo(params.nodes[0]));
    network.on('deselectNode', clearNodeInfo);
    network.on('hoverEdge', p => edges.update({{ id: p.edge, width: 5, font: EDGE_FONT_HOVER }}));
    network.on('blurEdge', p => edges.update(
        {{ id: p.edge,
           width: edgeData[p.edge].width || (edgeData[p.edge].dashes ? 2 : 3),
           font: EDGE_FONT }}));

    // vis-network runs its own fit() after the first draw, which would clobber a
    // one-shot camera call. Re-assert the view on every draw instead; applyView
    // is a no-op once the view matches, so the redraw loop settles immediately.
    network.on('afterDrawing', applyView);
}}

// Extent of the laid-out graph, from the AUTHORED coordinates plus a fixed
// allowance. Deliberately not network.getBoundingBox(), which reports
// view-dependent coordinates and made repeated fits compound their own offset.
function graphBounds() {{
    const xs = nodeData.map(n => n.x);
    const ys = nodeData.map(n => n.y);
    return {{
        width: (Math.max.apply(null, xs) + NODE_HALF_W) - (Math.min.apply(null, xs) - NODE_HALF_W),
        height: (Math.max.apply(null, ys) + NODE_HALF_H) - (Math.min.apply(null, ys) - NODE_HALF_H),
        cx: (Math.max.apply(null, xs) + Math.min.apply(null, xs)) / 2,
        cy: (Math.max.apply(null, ys) + Math.min.apply(null, ys)) / 2
    }};
}}

// Size the graph against the strip of canvas clear of the panel and the title,
// then move the camera so it re-centres inside that strip. moveTo takes graph
// units, hence dividing the pixel offsets by the scale.
function computeView() {{
    const el = document.getElementById('network');
    const reserved = Math.min(RIGHT_PANEL_PX, el.clientWidth * 0.5);
    const availW = el.clientWidth - reserved;
    const availH = el.clientHeight - TITLE_BAND_PX - NAV_BAND_PX;
    const bb = graphBounds();
    if (!(bb.width > 0) || !(bb.height > 0) || availW <= 0 || availH <= 0) return null;

    const scale = Math.min(availW / bb.width, availH / bb.height) * 0.94;
    return {{
        scale: scale,
        position: {{
            x: bb.cx + (reserved / 2) / scale,
            y: bb.cy - (TITLE_BAND_PX / 2) / scale + (NAV_BAND_PX / 2) / scale
        }}
    }};
}}

function applyView() {{
    const target = computeView();
    if (!target) return;
    const scale = network.getScale();
    const pos = network.getViewPosition();
    if (Math.abs(scale - target.scale) < 1e-4 &&
        Math.abs(pos.x - target.position.x) < 0.5 &&
        Math.abs(pos.y - target.position.y) < 0.5) {{
        return;   // already framed - do not trigger another redraw
    }}
    network.moveTo({{ position: target.position, scale: target.scale, animation: false }});
}}

function showNodeInfo(nodeId) {{
    const n = nodeData.find(d => d.id === nodeId);
    if (!n) return;
    const rel = edgeData.find(e => e.to === nodeId && e.label);
    const relLine = rel ? '<div class="info-relation">' + rel.label + '</div>' : '';
    const body = (n.detail || [])
        .map(pair => '<p><strong>' + pair[0] + ':</strong> ' + pair[1] + '</p>')
        .join('');
    document.getElementById('info-content').innerHTML =
        '<div class="info-label">' + n.label + '</div>' + relLine + body;
}}

function clearNodeInfo() {{
    document.getElementById('info-content').innerHTML =
        '<p class="info-placeholder">{placeholder}</p>';
}}

const SPOTLIGHT = {spotlight};

// Selects a named set of nodes and prints a prepared note. Used for the "show
// me the answer" control some of these graphs need -- the reader can find it
// unaided, and the button is there for when they have stopped looking.
function spotlight() {{
    if (!SPOTLIGHT) return;
    network.selectNodes(SPOTLIGHT.nodes, false);
    const body = (SPOTLIGHT.detail || [])
        .map(pair => '<p><strong>' + pair[0] + ':</strong> ' + pair[1] + '</p>')
        .join('');
    document.getElementById('info-content').innerHTML =
        '<div class="info-label">' + SPOTLIGHT.heading + '</div>' + body;
}}

function reset() {{
    network.destroy();
    initializeNetwork();
    clearNodeInfo();
}}

document.addEventListener('DOMContentLoaded', function () {{
    initializeNetwork();

    // Keep the graph framed when the container is resized.
    if (typeof ResizeObserver !== 'undefined') {{
        new ResizeObserver(() => {{ if (network) applyView(); }})
            .observe(document.getElementById('network'));
    }}

    document.getElementById('reset-btn').addEventListener('click', reset);
    const sb = document.getElementById('spotlight-btn');
    if (sb) sb.addEventListener('click', spotlight);
}});
"""


def spotlight_btn_html(spec):
    """Optional second control: 'show me the strongest one'."""
    sp = spec.get("spotlight")
    if not sp:
        return ""
    return ('                <button class="btn" id="spotlight-btn">'
            f'{sp["button"]}</button>\n')


def legend_html(spec):
    """Legend rows. A row whose cls is not a node class is rendered as a plain
    note with no swatch -- for things like "arrows read need-to-partner" that
    belong in the legend but are not a colour key."""
    rows = []
    for item in spec.get("legend", []):
        if item["cls"] in CLASSES:
            bg = CLASSES[item["cls"]][0]
            swatch = (f'<span class="legend-color" '
                      f'style="background-color:{bg}"></span>')
        else:
            swatch = '<span class="legend-color legend-note"></span>'
        rows.append(f'                <div class="legend-item">'
                    f'{swatch}{item["text"]}</div>')
    return "\n".join(rows) + ("\n" if rows else "")


def build(sim_id):
    spec_path = os.path.join(NETS_DIR, sim_id + ".json")
    if not os.path.isfile(spec_path):
        return False, "no network file"
    spec = json.load(open(spec_path, encoding="utf-8"))

    sim_dir = os.path.join(SIMS, sim_id)
    os.makedirs(sim_dir, exist_ok=True)

    placeholder = spec.get("placeholder", "Click any node to see its details.")

    with open(os.path.join(sim_dir, "main.html"), "w", encoding="utf-8") as f:
        f.write(HTML.format(title=spec["title"], sim_id=sim_id,
                            stats=spec.get("stats", ""),
                            legend=legend_html(spec),
                            spotlight_btn=spotlight_btn_html(spec),
                            panel_heading=spec.get("panelHeading", "Details"),
                            placeholder=placeholder))

    with open(os.path.join(sim_dir, "style.css"), "w", encoding="utf-8") as f:
        f.write(CSS.format(title=spec["title"], height=spec["height"]))

    with open(os.path.join(sim_dir, sim_id + ".js"), "w", encoding="utf-8") as f:
        f.write(JS.format(
            title=spec["title"], height=spec["height"], sim_id=sim_id,
            class_colors=json.dumps(CLASSES, indent=4),
            nodes=json.dumps(spec["nodes"], indent=4, ensure_ascii=False),
            edges=json.dumps(spec["edges"], indent=4, ensure_ascii=False),
            spotlight=json.dumps(spec.get("spotlight"), indent=4,
                                 ensure_ascii=False),
            pinned=json.dumps(spec.get("pinned", [])),
            arrows="true" if spec.get("arrows") else "false",
            node_width=spec.get("nodeWidth", 260),
            edge_font=spec.get("edgeFontSize", 26),
            nav_band=72 if spec.get("navClearance") else 0,
            edge_font_hover=spec.get("edgeFontSize", 26) + 8,
            placeholder=placeholder.replace("'", "\\'"),
        ))
    return True, sim_dir


def main():
    targets = sys.argv[1:] or sorted(
        n[:-5] for n in os.listdir(NETS_DIR) if n.endswith(".json"))
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
