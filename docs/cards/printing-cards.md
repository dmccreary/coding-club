# Printing Challenge Cards for Retail Sale

This page summarizes research into producing a **boxed retail deck** of
Challenge Cards -- similar in concept to
[*The Official Scratch Coding Cards*](https://www.google.com/books/edition/The_Official_Scratch_Coding_Cards_Scratc/UkCQEAAAQBAJ) --
for sale through a STEM bookstore. It is a planning reference for the
author, not student-facing content.

## Two different products, two different problems

| | Classroom prototype | Retail deck |
|---|---|---|
| Made by | `challenge-card` skill (this repo) | An outside print vendor |
| Format | One 8.5x11 sheet, printed one-sided, folded in half, laminated | Individual 5.5"x8.5" cards, cut to size, boxed |
| Quantity per run | A handful of copies for classroom use | 25-100+ decks for retail sale |
| Fold/lamination | Required -- see `skills/challenge-card/references/print-layout-guide.md` | Not used -- cards are printed, cut, and boxed by the vendor |

The skill in this repo produces the *content* (front/back HTML and PDF per
card). It does not produce a retail-ready boxed deck; that requires an
outside print vendor.

## The key economics insight: unique cards, not copies

A deck like this has **76 different card designs** -- every front and back
is unique. That is fundamentally different from ordering "500 copies of one
postcard," which is how most consumer print shops (GotPrint, PrintPlace,
FedEx Office, Printkeg, Moo, PrintPPS) price their jobs: cheap per-unit
because the press runs the *same* plate over and over.

Printing a deck of 76 unique designs is closer to how an actual card-game
deck (Tarot, a board game's card set) gets manufactured: the vendor images
every unique card once per deck, then reprints that same *set* of 76 designs
for however many decks you order. The right vendor category is **card-deck /
game-component manufacturers**, not general postcard/flyer printers.

This also means the total order size that actually matters is **decks**,
not "76 cards" -- 1 deck of 76 unique cards costs far more per card than 100
decks of the same 76 designs, because the second scenario reprints each of
the 76 designs 100 times (bulk-copy economics kick back in at the deck
level).

## Sizing note

5.5"x8.5" is **not a standard size** at any vendor found in this research.
Published card sizes top out around Tarot (2.75"x4.75") or "Jumbo"
(2.75"x4.75" to 3.5"x5") at most card-deck printers; only one vendor
(TheGameCrafter) publishes a size large enough (8.25"x10.5" "Large" custom
slug) to comfortably fit 5.5"x8.5" with margin. Every price below is
therefore a **planning estimate**, scaled up from smaller reference cards --
not a quote for this exact size. Get a live quote before committing.

## Vendor recommendations

### Best fit -- card-deck / game-component manufacturers

| Vendor | Fits 5.5"x8.5"? | Minimum order | Notes |
|---|---|---|---|
| [Mr. Playing Card](https://www.mrplayingcard.com/products/flash) | Custom size, needs confirmation | 15 decks | Published tiers: $18.99/deck at 15, $6.55/deck at 100, $2.59/deck at 1,000 (280gsm stock, standard-size reference cards). Tuck box add-on ~$1.19/deck at the 1,000-unit tier. |
| [TheGameCrafter](https://www.thegamecrafter.com/make/pricing) | Yes -- "Large" custom slug is 8.25"x10.5" | None (true print-on-demand) | ~$0.09/card average (blended across all their sizes, so directional only) + $0.89/game handling fee + box cost. |
| [Greenerprinter](https://www.greenerprinter.com/products/custom-flashcard-printing) | Custom size, needs confirmation | None stated | Offers soft-touch lamination and rounded corners -- closest to the actual look/feel of the Scratch cards. No published price; live calculator only. |
| [MakePlayingCards.com](https://www.makeplayingcards.com/) | Will do fully custom sizes on request | Varies | No self-serve price for a card this large; requires contacting their sales team directly. |

### Not cost-effective at this scale

| Vendor | Why to skip for now |
|---|---|
| [PrintNinja](https://printninja.com/custom-playing-cards/custom-card-game-sizes/) | Charges a **$500 one-time die fee** for any non-standard card size -- adds $5-20/deck at a 25-100 deck run. Revisit at much higher volume. |
| [QinPrinting](https://www.qinprinting.com/flash-card-printing/) | 200-set minimum order, above the 25-100 deck target range. |

### Wrong category -- standard postcard/flyer printers

These print cheap bulk copies of *one* design and were the first hits in
this research, but they don't fit a deck of 76 unique cards -- listed here
so future research doesn't retread this path.

- [GotPrint](https://www.gotprint.com/products/postcards/pages/5-5x8-5.html)
- [PrintPlace](https://www.printplace.com/cheap-postcards)
- [Printkeg](https://www.printkeg.com/products/5-5x8-5-postcards-flyers)
- [PrintPPS.com](https://printpps.com/5.5-x-8.5-custom-postcards/)
- [FedEx Office](https://www.office.fedex.com/default/quick-postcards.html)
- [Moo](https://www.moo.com/us/postcards/original)

### Packaging-only specialists (if a deck vendor doesn't include a box)

- [Half Price Packaging](https://www.halfpricepackaging.com/rigid-boxes/custom-two-piece-boxes)
- [Plus Printers](https://www.plusprinters.com/product/two-piece-rigid-box/)
- [Boxlark](https://boxlark.com/custom-2-piece-boxes/)
- [The Legacy Printing](https://thelegacyprinting.com/two-piece-rigid-boxes/)
- [Print247](https://print247.us/rigid-two-piece)

## Rough cost estimate

Scaling the Mr. Playing Card benchmark up for the larger card area (a rough
2-3x multiplier vs. their standard-size reference pricing) and adding a
basic tuck box. **Planning-level range, not a quote.**

| Deck quantity | Est. cost/deck | Est. total order |
|---|---|---|
| 25 decks | ~$31-47 | ~$775-$1,175 |
| 50 decks | ~$21-33 | ~$1,050-$1,650 |
| 100 decks | ~$15-23 | ~$1,500-$2,300 |

## Recommended next step

Get 2-3 live quotes with the actual specs (76 cards, 5.5"x8.5", full color
both sides, 25/50/100 decks, tuck box). Start with:

- [Mr. Playing Card's quote calculator](https://www.mrplayingcard.com/quote)
- [TheGameCrafter's "Build a Quote" tool](https://www.thegamecrafter.com/make/pricing)

Both accept exact custom dimensions and return a real number in a few
minutes, unlike the static price pages this research was based on.

## Sources

| Source | Specializes in |
|---|---|
| [Mr. Playing Card](https://www.mrplayingcard.com/) | Custom playing-card and flashcard decks with a low (15-deck) minimum order and a live pricing calculator. |
| [TheGameCrafter](https://www.thegamecrafter.com/) | Print-on-demand board/card game components (no minimum order), with custom card sizes up to 8.25"x10.5". |
| [Greenerprinter](https://www.greenerprinter.com/) | Eco-focused custom flashcard and playing-card printing with no minimum order and soft-touch lamination finishes. |
| [MakePlayingCards.com](https://www.makeplayingcards.com/) | Custom playing-card decks, tuck boxes, and fully custom card sizes via direct sales contact. |
| [PrintNinja](https://printninja.com/) | Overseas board-game and card-deck manufacturing at high volume (500+ decks); charges a die fee for non-standard sizes. |
| [QinPrinting](https://www.qinprinting.com/) | Card deck and flash card manufacturing with a 200-set minimum order. |
| [GotPrint](https://www.gotprint.com/) | Bulk postcard, flyer, and business-card printing (many copies of one design). |
| [PrintPlace](https://www.printplace.com/) | Bulk postcard and marketing-material printing (many copies of one design). |
| [Printkeg](https://www.printkeg.com/) | Fast-turnaround (1-2 day) small-batch postcard and flyer printing. |
| [PrintPPS.com](https://printpps.com/) | Bulk postcard printing with a published price table by quantity and cardstock weight. |
| [FedEx Office](https://www.office.fedex.com/) | Retail same-day postcard, flyer, and document printing. |
| [Moo](https://www.moo.com/) | Premium-finish business cards and postcards for small businesses. |
| [Half Price Packaging](https://www.halfpricepackaging.com/) | Custom two-piece rigid gift/product boxes at wholesale prices. |
| [Plus Printers](https://www.plusprinters.com/) | Custom two-piece rigid box packaging with flexible minimum order quantities. |
| [Boxlark](https://boxlark.com/) | Custom two-piece box packaging with low minimum order quantities. |
| [The Legacy Printing](https://thelegacyprinting.com/) | Offset-printed two-piece rigid box packaging, minimum 100 boxes. |
| [Print247](https://print247.us/) | In-house-produced two-piece rigid setup boxes at economical pricing. |
