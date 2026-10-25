# Coding Club Data

This directory stores all the data for coding clubs.

`parts-list.csv` is the main data file.

## parts-list.csv

The master list of every distinct part used in the coding-club STEM kits, with
current prices. Skills and scripts read it, so keep it machine-friendly.

**Maintainer:** Hank, Dan's Hardware Manager. Hank keeps it current when prices,
parts or kits change. Send corrections to Hank, not as hand edits.

### Conventions

- UTF-8, RFC 4180 CSV (CRLF line endings, fields quoted only when needed), one header row.
- One row per distinct part. Synonyms are merged into one row (for example, the
  kit pages' "Momentary Push Buttons" and the Purchasing Guides' 6x6 mm buttons).
- Rows are sorted by `category`, then `part_id`.
- Prices are US dollars, numbers only (no `$`, no `~`). Unknown values are left
  blank; prices and URLs are never guessed.
- Multi-value fields use `;` with no spaces.
- Dates are ISO `YYYY-MM-DD`, or `YYYY-MM` when only the month is known.
- Image paths are relative to `~/Documents/ws`, so they start with the repo name
  (for example `moving-rainbow/docs/img/breadboard.jpg`).
- Sources: the Personal Knowledge Graph (`pkg/docs/data/pkg.json`, part nodes and
  kit `uses` edges), the kit catalog (`docs/kits/*/index.md`), and the
  Purchasing Guides in moving-rainbow, clocks-and-watches, open-study-buddy and
  fft-benchmarking.

### Columns

| Column | Type | Meaning |
|---|---|---|
| `part_id` | kebab-case string, unique | Stable id. Equals the PKG part node id without the `part-` prefix when one exists. Never renamed once published |
| `name` | string | Display name, as used on kit pages |
| `category` | enum | One of `microcontroller`, `display`, `sensor`, `actuator`, `audio`, `led`, `power`, `prototyping`, `cable`, `passive`, `mechanical`, `kit`. Input devices such as encoders, touch and RFID are `sensor`; buttons, potentiometers and switches are `passive`; real-time clocks are `sensor`; commercial starter kits are `kit` |
| `role` | string | Short role, like the one-pager role column |
| `controller_or_driver` | `;`-list | Chip or driver names (for example `GC9A01`, `SH1106`, `WS2812B`, `RP2040`) |
| `key_specs` | string | Size, resolution, interface and similar facts |
| `unit_price_usd` | number | The current best price per unit, the one used in handouts. Blank if there is no confirmed single price |
| `price_low_usd` | number | Lowest price seen or estimated |
| `price_high_usd` | number | Highest price seen or estimated |
| `qty_per_pack` | integer | Units per pack when the price comes from a multi-pack (unit price is per unit) |
| `vendor` | string | Where the `unit_price_usd` comes from (AliExpress, eBay, Amazon, Micro Center, ...) |
| `seller` | string | Store or seller on that vendor |
| `listing_url` | URL | A specific listing for the unit price, when one was captured |
| `lead_time_days_typical` | integer | Typical days to arrive from `vendor` (upper end of the measured range) |
| `price_checked` | date | When the price was last checked |
| `pkg_node_id` | string | PKG node id (`part-...`), blank for parts not yet in the PKG |
| `used_in_kits` | `;`-list | coding-club kit slugs (folders in `docs/kits/`) that use the part |
| `kit_count` | integer | Number of slugs in `used_in_kits` |
| `image_path` | path | A photo of the part, relative to `~/Documents/ws` |
| `notes` | string | Price caveats, approximate PKG price text and other context |
