# TODO

<!-- p5js-v2-audit-2026-09-05 -->
## p5.js 2.x Upgrade: MicroSim Fixes Needed (2026-09-05)

A static scan of this repo's `docs/sims/` MicroSims found **7 sim(s)** using p5.js v1-only APIs that will break if upgraded to p5.js 2.x (the microsim-generator skill's templates now default to p5@2.3.2). Fix these before bumping this repo's MicroSims past p5@1.x.

**High-leverage fix**: the following filename(s) are copied into multiple sim directories with the identical bug, so patching the source template once and re-copying it is likely cheaper than fixing each sim by hand:

- `breadboard-lib.js` — appears in 4 affected sims below

- [ ] **blinking-led-breadboard-circuit** (`docs/sims/blinking-led-breadboard-circuit/`)
    - `breadboard-lib.js` uses `quadraticVertex(...)`, folded into `bezierVertex()` in v2 — replace with `bezierOrder(2)` followed by single-control-point `bezierVertex()` calls.
- [ ] **breadboard-tie-point-explorer** (`docs/sims/breadboard-tie-point-explorer/`)
    - `breadboard-lib.js` uses `quadraticVertex(...)`, folded into `bezierVertex()` in v2 — replace with `bezierOrder(2)` followed by single-control-point `bezierVertex()` calls.
- [ ] **moving-rainbow-wiring-diagram** (`docs/sims/moving-rainbow-wiring-diagram/`)
    - `moving-rainbow-wiring-diagram.js` uses the old multi-control-point `bezierVertex(...)` call — v2 takes one control point per `bezierVertex()` call — chain multiple calls instead of packing several points into one; use `bezierOrder()` for a quadratic curve.
- [ ] **multimeter-usage-simulator** (`docs/sims/multimeter-usage-simulator/`)
    - `breadboard-lib.js` uses `quadraticVertex(...)`, folded into `bezierVertex()` in v2 — replace with `bezierOrder(2)` followed by single-control-point `bezierVertex()` calls.
    - `multimeter-usage-simulator.js` uses `quadraticVertex(...)`, folded into `bezierVertex()` in v2 — replace with `bezierOrder(2)` followed by single-control-point `bezierVertex()` calls.
- [ ] **physical-computing-loop** (`docs/sims/physical-computing-loop/`)
    - `physical-computing-loop.js` uses the old multi-control-point `bezierVertex(...)` call — v2 takes one control point per `bezierVertex()` call — chain multiple calls instead of packing several points into one; use `bezierOrder()` for a quadratic curve.
- [ ] **push-button-digital-input-circuit** (`docs/sims/push-button-digital-input-circuit/`)
    - `breadboard-lib.js` uses `quadraticVertex(...)`, folded into `bezierVertex()` in v2 — replace with `bezierOrder(2)` followed by single-control-point `bezierVertex()` calls.
- [ ] **sensor-type-picker** (`docs/sims/sensor-type-picker/`)
    - `sensor-type-picker.js` uses the old multi-control-point `bezierVertex(...)` call — v2 takes one control point per `bezierVertex()` call — chain multiple calls instead of packing several points into one; use `bezierOrder()` for a quadratic curve.

Reference: [p5.js Teachers' Guide to v2 transition](https://p5js.org/tutorials/v2_transition/)
