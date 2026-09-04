#!/usr/bin/env python3
"""Render a Challenge Card's card.yaml into front.html, back.html,
sheet.html, and sheet.pdf.

Usage:
    python3 render_card_pdf.py --card-dir /path/to/docs/cards/<card-id> \
        [--theme-file /path/to/theme.yaml] [--skip-pdf]

The card directory must contain card.yaml. Output files are written into
the same directory.
"""
import argparse
import json
import shutil
import sys
from pathlib import Path

import yaml
from jinja2 import Environment, FileSystemLoader, select_autoescape

SKILL_DIR = Path(__file__).resolve().parent.parent
TEMPLATE_DIR = SKILL_DIR / "assets" / "templates" / "challenge-card"
DEFAULT_THEME_FILE = TEMPLATE_DIR / "difficulty-themes.json"

# Keep in sync with style.css's --panel-height / --panel-padding.
PANEL_HEIGHT_IN = 8.5
PX_PER_IN = 96  # Chromium's fixed CSS px-per-inch for absolute units.
MIN_BOTTOM_GAP_IN = 0.125  # never let text land closer than 1/8in to the border
MIN_FIT_SCALE = 0.8  # floor -- below this, shrinking hurts readability more than it helps
MAX_FIT_ATTEMPTS = 4

# (template, output filename, panel CSS selector, fit-scale context key)
FIT_PANELS = [
    ("front-template.html", "front.html", ".panel--front", "front_fit_scale"),
    ("back-template.html", "back.html", ".panel--back", "back_fit_scale"),
]

_MEASURE_JS = """(sel) => {
    const panel = document.querySelector(sel);
    const prevHeight = panel.style.height;
    const prevOverflow = panel.style.overflow;
    panel.style.height = 'auto';
    panel.style.overflow = 'visible';
    const height = panel.getBoundingClientRect().height;
    panel.style.height = prevHeight;
    panel.style.overflow = prevOverflow;
    return height;
}"""


def load_theme(theme_file: Path, theme_name: str) -> dict:
    with open(theme_file) as f:
        themes = json.load(f)
    if theme_name not in themes:
        raise ValueError(f"Theme '{theme_name}' not found in {theme_file}")
    return themes[theme_name]


ICON_GLYPHS = {
    "motor": "⚙️",     # gear
    "code": "\U0001f4bb",        # laptop
    "led": "\U0001f4a1",         # bulb
    "circuit": "\U0001f50c",     # plug
    None: "⭐",              # star fallback
}


def build_context(card: dict, theme: dict) -> dict:
    track = card["track"]
    difficulty_color = card.get("difficulty_color") or theme["track_to_color"][track]
    difficulty_hex = theme["colors"][difficulty_color]
    icon_key = (card.get("front", {}) or {}).get("icon")
    icon_glyph = ICON_GLYPHS.get(icon_key, ICON_GLYPHS[None])
    icon_image = (card.get("front", {}) or {}).get("icon_image")
    icon_image_alt = (card.get("front", {}) or {}).get("icon_image_alt")

    return {
        "title": card["title"],
        "track": track,
        "difficulty_color": difficulty_color,
        "difficulty_hex": difficulty_hex,
        "font_family": theme.get("font_family", "Arial, sans-serif"),
        "back_rotation_deg": theme.get("back_rotation_deg", 180),
        "concept_tag": card.get("concept_tag"),
        "front": card["front"],
        "back": card["back"],
        "icon_glyph": icon_glyph,
        "icon_image": icon_image,
        "icon_image_alt": icon_image_alt,
        "style_href": "style.css",
        # Overwritten by autofit_fit_scales() before the final render.
        "front_fit_scale": 1.0,
        "back_fit_scale": 1.0,
    }


def render_html(env: Environment, context: dict, card_dir: Path) -> None:
    for template_name, out_name in [
        ("front-template.html", "front.html"),
        ("back-template.html", "back.html"),
        ("sheet-template.html", "sheet.html"),
    ]:
        template = env.get_template(template_name)
        html = template.render(**context)
        (card_dir / out_name).write_text(html)
        print(f"  wrote {card_dir / out_name}")


def autofit_fit_scales(env: Environment, context: dict, card_dir: Path) -> None:
    """Shrink each panel's --fit-scale (mutating `context` in place) just
    enough that its TRUE content height -- measured with `overflow:
    visible; height: auto`, bypassing the `.panel { overflow: hidden }`
    clip -- leaves at least MIN_BOTTOM_GAP_IN before the border, instead
    of letting long content silently clip at the bottom of the printed
    card. See references/print-layout-guide.md "Content-fit autofit".

    Requires Playwright; if it isn't installed, fit-scale stays at 1.0
    (previous behavior) and a warning is printed so clipping isn't silent.
    """
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        print("  WARNING: playwright not installed -- skipping the content-fit "
              "check. Content may clip at the bottom of the card; install "
              "playwright (or run without --skip-pdf) to enable this check.")
        return

    max_natural_in = PANEL_HEIGHT_IN - MIN_BOTTOM_GAP_IN

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        for template_name, out_name, selector, scale_key in FIT_PANELS:
            template = env.get_template(template_name)
            scale = 1.0
            natural_in = None
            for _ in range(MAX_FIT_ATTEMPTS):
                trial_context = {**context, scale_key: round(scale, 3)}
                out_path = card_dir / out_name
                out_path.write_text(template.render(**trial_context))
                page.goto(f"file://{out_path.resolve()}")
                page.evaluate("document.fonts.ready")
                height_px = page.evaluate(_MEASURE_JS, selector)
                natural_in = height_px / PX_PER_IN
                if natural_in <= max_natural_in or scale <= MIN_FIT_SCALE:
                    break
                scale = max(MIN_FIT_SCALE, round(scale * (max_natural_in / natural_in) * 0.98, 3))
            context[scale_key] = round(scale, 3)
            gap_in = PANEL_HEIGHT_IN - natural_in
            if natural_in > PANEL_HEIGHT_IN:
                print(f"  WARNING: {out_name} TEXT WILL BE CLIPPED by the border "
                      f"-- content overflows the panel by {natural_in - PANEL_HEIGHT_IN:.2f}in "
                      f"even at the minimum fit scale ({MIN_FIT_SCALE}). Shorten this "
                      f"panel's content and re-render.")
            elif natural_in > max_natural_in:
                print(f"  WARNING: {out_name} fits without clipping at the minimum "
                      f"fit scale ({MIN_FIT_SCALE}) but only leaves a {gap_in:.3f}in "
                      f"gap before the border (below the {MIN_BOTTOM_GAP_IN}in minimum) "
                      f"-- shorten this panel's content for a comfortable margin.")
            elif scale < 1.0:
                print(f"  {out_name}: shrunk to fit-scale {scale} to keep "
                      f"content off the border (natural height {natural_in:.2f}in, "
                      f"limit {max_natural_in:.2f}in)")
        browser.close()


def render_pdf(card_dir: Path) -> None:
    from playwright.sync_api import sync_playwright

    sheet_html = card_dir / "sheet.html"
    pdf_out = card_dir / "sheet.pdf"

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(f"file://{sheet_html.resolve()}")
        page.evaluate("document.fonts.ready")
        page.emulate_media(media="print")
        page.pdf(
            path=str(pdf_out),
            width="11in",
            height="8.5in",
            print_background=True,
            margin={"top": "0", "right": "0", "bottom": "0", "left": "0"},
        )
        browser.close()
    print(f"  wrote {pdf_out}")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--card-dir", required=True, help="Directory containing card.yaml")
    parser.add_argument("--theme-file", default=str(DEFAULT_THEME_FILE))
    parser.add_argument("--theme-name", default="default")
    parser.add_argument("--skip-pdf", action="store_true", help="Only render HTML, skip Playwright PDF export")
    args = parser.parse_args()

    card_dir = Path(args.card_dir).resolve()
    card_yaml_path = card_dir / "card.yaml"
    if not card_yaml_path.exists():
        print(f"ERROR: {card_yaml_path} not found", file=sys.stderr)
        return 1

    with open(card_yaml_path) as f:
        card = yaml.safe_load(f)

    theme = load_theme(Path(args.theme_file), args.theme_name)
    context = build_context(card, theme)

    # Copy the shared stylesheet alongside the rendered HTML so file://
    # previews and the Playwright PDF render both resolve it locally.
    shutil.copyfile(TEMPLATE_DIR / "style.css", card_dir / "style.css")

    env = Environment(
        loader=FileSystemLoader(str(TEMPLATE_DIR)),
        autoescape=select_autoescape(["html"]),
    )

    print(f"Rendering {card['card_id']} ({card['title']})...")
    autofit_fit_scales(env, context, card_dir)
    render_html(env, context, card_dir)

    if not args.skip_pdf:
        render_pdf(card_dir)

    # Update lifecycle status to 'rendered' if it was still 'drafted'.
    if card.get("status") == "drafted":
        card["status"] = "rendered"
        with open(card_yaml_path, "w") as f:
            yaml.safe_dump(card, f, sort_keys=False, width=100, allow_unicode=True)
        print(f"  status: drafted -> rendered")

    print("Done.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
