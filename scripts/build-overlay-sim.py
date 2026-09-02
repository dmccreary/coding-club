#!/usr/bin/env python3
"""Generate an interactive infographic overlay MicroSim from a data file.

Follows references/infographic-overlay-guide.md from the microsim-generator
skill. Supports both engines:

  callout  diagram.js + style.css      numbered point markers with leader lines
  grid     grid-diagram.js + grid-overlay.css   rectangular hover zones

Produces, per sim:

  image-prompt.md   the text-to-image prompt (the file a human runs elsewhere)
  data.json         overlay data in the engine's schema
  main.html         from the skill's template, wired to shared-libs

index.md and metadata.json come from the usual build-sim-pages.py and
build-sim-metadata.py.

IMPORTANT: the background image itself cannot be produced here. Each sim is
inert until someone runs its image-prompt.md through a text-to-image model and
saves the result as the `image` filename in the sim directory. build reports
which images are still missing.

Input: scripts/sim-overlays/<sim-id>.json

    {
      "engine": "grid",
      "title":  "Three Kinds of Mentors",
      "image":  {"file":"three-kinds-of-mentors.png","width":1200,"height":800,
                 "background":"#FFFFFF","style":"flat vector comparison poster",
                 "overall":"...", "layoutNotes":"...",
                 "textPolicy":"headers-only"},
      "zones":  [ {... , "draw":{"position":"...","visual":"..."}} ],
      "quiz":   [ {...} ]
    }

textPolicy values:
    none          absolutely no text anywhere (default for callout)
    headers-only  only the listed column/band headers (default for grid)
    custom        the sim supplies image.textException describing what is allowed

Usage:
    python3 scripts/build-overlay-sim.py                 # all overlays
    python3 scripts/build-overlay-sim.py <sim-id> ...    # just these
"""

import json
import os
import sys

PROJECT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SIMS = os.path.join(PROJECT, "docs/sims")
OVER_DIR = os.path.join(PROJECT, "scripts/sim-overlays")

CALLOUT_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} — Interactive Diagram</title>
  <meta name="schema" content="https://dmccreary.github.io/intelligent-textbooks/ns/microsim/v1">
  <link rel="stylesheet" href="../shared-libs/style.css">
</head>
<body>

<div id="layout">
  <svg id="leaders-svg"></svg>

  <div id="diagram-wrapper">
    <img id="diagram-img" src="{image}" alt="{alt}" draggable="false">
    <div id="markers-layer"></div>
  </div>

  <div id="label-panel">
    <!-- label rows injected by diagram.js -->
  </div>
</div>

<div id="controls">
  <button class="mode-btn active" id="btn-explore" onclick="sim.setMode('explore')">Explore</button>
  <button class="mode-btn"        id="btn-quiz"    onclick="sim.setMode('quiz')">Quiz</button>
  <span id="quiz-score" style="display:none">
    Score: <strong id="score-val">0</strong> / <strong id="score-total">0</strong>
  </span>
</div>

<div id="infobox">
  <div id="infobox-prompt">Hover over a numbered marker or a label to learn about that structure.</div>
  <div id="infobox-content">
    <div id="infobox-label"></div>
    <div id="infobox-desc"></div>
    <div id="infobox-ap-tip"></div>
    <button id="quiz-restart" onclick="sim.restartQuiz()">Try Again</button>
  </div>
</div>

<div id="edit-panel">
  <h3>Edit Mode — drag markers to calibrate positions</h3>
  <div id="coord-display">Drag a marker to see its live coordinates.</div>
  <textarea id="json-output" readonly spellcheck="false"></textarea>
  <div id="edit-actions">
    <button id="copy-json-btn" onclick="sim.copyJSON()">Copy JSON</button>
    <span id="copy-confirm"></span>
  </div>
</div>

<script src="../shared-libs/diagram.js"></script>
</body>
</html>
"""

GRID_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="schema" content="https://dmccreary.github.io/intelligent-textbooks/ns/microsim/v1">
  <title>{title} — Interactive Infographic</title>
  <link rel="stylesheet" href="../shared-libs/grid-overlay.css">
</head>
<body>

<div id="image-wrapper">
  <!-- image and zone overlay injected by grid-diagram.js -->
</div>

<div id="controls">
  <button class="mode-btn active" id="btn-explore">Explore</button>
  <button class="mode-btn"        id="btn-quiz">Quiz Me</button>
  <span id="quiz-score" style="display:none">
    Score: <strong id="score-val">0</strong> / <strong id="score-total">0</strong>
  </span>
  <span id="edit-badge">EDIT MODE</span>
</div>

<div id="detail-panel">
  <div id="panel-prompt">{prompt}</div>
  <div id="panel-content">
    <div id="panel-label"></div>
    <div id="panel-summary"></div>
    <ul id="panel-facts"></ul>
  </div>
</div>

<div id="quiz-question"></div>

<div id="edit-panel">
  <h3>Edit Mode — drag corner handles to calibrate zone boundaries</h3>
  <div id="coord-display">Drag a corner handle to see live coordinates.</div>
  <textarea id="json-output" readonly spellcheck="false"></textarea>
  <div id="edit-actions">
    <button id="copy-json-btn" onclick="sim.copyJSON()">Copy JSON</button>
    <span id="copy-confirm"></span>
  </div>
</div>

<script src="../shared-libs/grid-diagram.js"></script>
</body>
</html>
"""

TEXT_RULES = {
    "none": (
        "**This image must contain absolutely no text, labels, arrows, callout lines, "
        "numbers, or annotation marks of any kind — including the diagram's title or any "
        "heading.** Every label, number, and the title itself are added afterwards as an "
        "interactive HTML overlay from a separate data file. Any text baked into the image "
        "will collide with that overlay and make the diagram unusable."
    ),
    "headers-only": (
        "**The only text permitted in this image is the short section header printed at the "
        "top of each panel, listed explicitly below. Nothing else.** No body copy, no bullet "
        "points, no captions, no numbers, no arrows, no callout lines, and no overall poster "
        "title. All of the explanatory content is added afterwards as an interactive HTML "
        "overlay from a separate data file, and any extra text baked into the image will "
        "collide with it."
    ),
}


def text_rule(image):
    policy = image.get("textPolicy", "none")
    if policy == "custom":
        return image["textException"]
    return TEXT_RULES[policy]


def prompt_markdown(sim_id, spec):
    img = spec["image"]
    items = spec.get("callouts") or spec.get("zones") or []
    orientation = ("portrait" if img["height"] > img["width"]
                   else "square" if img["height"] == img["width"] else "landscape")

    lines = [
        f"# {spec['title']} — Image Generation Prompt",
        "",
        "Please generate a new image.",
        "",
        "## Critical Rule",
        "",
        text_rule(img),
        "",
        "---",
        "",
        "## Image Specifications",
        "",
        "- **Format**: PNG",
        f"- **Filename to save as**: `{img['file']}`",
        f"- **Dimensions**: {img['width']} × {img['height']} px ({orientation})",
        f"- **Background**: {img['background']}",
        f"- **Style**: {img['style']}",
        "- **Audience**: a textbook for coding club leaders, mentors, and older students",
        "",
        "---",
        "",
        "## What to Draw",
        "",
        img["overall"],
        "",
    ]

    for i, item in enumerate(items, start=1):
        draw = item.get("draw", {})
        name = item.get("label", f"Region {i}")
        lines += [f"### {i}. {name}", ""]
        if draw.get("position"):
            lines += [f"**Position**: {draw['position']}", ""]
        if draw.get("visual"):
            lines += [f"**Visual**: {draw['visual']}", ""]
        if item.get("color") and spec["engine"] == "grid":
            lines += [f"**Panel accent colour**: `{item['color']}` -- tint this "
                      f"panel's background, header bar, or icons with it", ""]

    lines += [
        "---",
        "",
        "## Layout Notes",
        "",
        img["layoutNotes"],
        "",
        "**Reminder, because image models routinely ignore it:** "
        + text_rule(img),
        "",
    ]
    return "\n".join(lines)


def callout_data(spec):
    # Order the label panel top-to-bottom by marker position and renumber to
    # match. The panel is a vertical list, so listing callouts in an arbitrary
    # order makes the leader lines cross each other over the image. The guide
    # gives this rule for top-bottom/dual-panel; it applies just as much to the
    # single side panel. Set "orderByPosition": false to keep the authored order.
    if spec.get("orderByPosition", True):
        spec["callouts"] = sorted(spec["callouts"], key=lambda c: (c["y"], c["x"]))
        for n, c in enumerate(spec["callouts"], start=1):
            c["id"] = n

    out = {
        "title": spec["title"],
        "orientation": ("portrait" if spec["image"]["height"] > spec["image"]["width"]
                        else "landscape"),
        "image": spec["image"]["file"],
        "layout": spec.get("layout", "side-panel"),
        "showNumbers": True,
        "callouts": [],
    }
    for c in spec["callouts"]:
        entry = {k: c[k] for k in ("id", "label", "x", "y", "radius", "color")}
        if c.get("panel"):
            entry["panel"] = c["panel"]
        entry["hint"] = c["hint"]
        entry["description"] = c["description"]
        if c.get("tip"):
            entry["tip"] = c["tip"]
        out["callouts"].append(entry)
    return out


def grid_data(spec):
    out = {
        "title": spec["title"],
        "image": spec["image"]["file"],
        "layout": "grid",
        "showLabels": spec.get("showLabels", False),
        "zones": [],
    }
    for z in spec["zones"]:
        out["zones"].append({
            "id": z["id"], "label": z["label"], "color": z["color"],
            "x1": z["x1"], "y1": z["y1"], "x2": z["x2"], "y2": z["y2"],
            "summary": z["summary"], "facts": z["facts"],
        })
    if spec.get("quiz"):
        out["quiz"] = spec["quiz"]
    return out


def build(sim_id):
    spec_path = os.path.join(OVER_DIR, sim_id + ".json")
    if not os.path.isfile(spec_path):
        return False, "no overlay file", False
    spec = json.load(open(spec_path, encoding="utf-8"))

    sim_dir = os.path.join(SIMS, sim_id)
    os.makedirs(sim_dir, exist_ok=True)

    with open(os.path.join(sim_dir, "image-prompt.md"), "w", encoding="utf-8") as f:
        f.write(prompt_markdown(sim_id, spec))

    if spec["engine"] == "callout":
        data = callout_data(spec)
        html = CALLOUT_HTML.format(title=spec["title"], image=spec["image"]["file"],
                                   alt=spec["title"])
    else:
        data = grid_data(spec)
        html = GRID_HTML.format(title=spec["title"],
                                prompt=spec.get("panelPrompt",
                                                "Click a section to explore it."))

    with open(os.path.join(sim_dir, "data.json"), "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")
    with open(os.path.join(sim_dir, "main.html"), "w", encoding="utf-8") as f:
        f.write(html)

    has_image = os.path.isfile(os.path.join(sim_dir, spec["image"]["file"]))
    return True, sim_dir, has_image


def main():
    targets = sys.argv[1:] or sorted(
        n[:-5] for n in os.listdir(OVER_DIR) if n.endswith(".json"))
    ok = skipped = 0
    missing = []
    for sim_id in targets:
        good, msg, has_image = build(sim_id)
        if good:
            ok += 1
            if not has_image:
                missing.append(sim_id)
        else:
            skipped += 1
            print(f"skip {sim_id}: {msg}")
    print(f"{ok} built, {skipped} skipped")
    if missing:
        print(f"\n{len(missing)} still awaiting a generated background image:")
        for m in missing:
            print(f"  {m}  ->  docs/sims/{m}/image-prompt.md")


if __name__ == "__main__":
    main()
