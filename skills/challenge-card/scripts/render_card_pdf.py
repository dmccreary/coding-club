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
        "style_href": "style.css",
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


def render_pdf(card_dir: Path) -> None:
    from playwright.sync_api import sync_playwright

    sheet_html = card_dir / "sheet.html"
    pdf_out = card_dir / "sheet.pdf"

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(f"file://{sheet_html.resolve()}")
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
