// Ohm's Law Current Calculator
// CANVAS_HEIGHT: 480
// Bloom: Apply (L3), verb "calculate"
// A mentor sets the supply voltage and the series resistor from a real kit and
// reads the resulting LED current BEFORE powering anything. The LED in the
// diagram brightens with the current and the readout colour states plainly
// whether the value is safe.

// ---------- canvas geometry ----------
let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 80;      // two slider rows
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let sliderLeftMargin = 210;
let defaultTextSize = 16;

// ---------- circuit model ----------
// An LED is not a resistor: it drops a roughly fixed forward voltage before any
// current flows. Only what is left over appears across the series resistor, so
// the current is (supply - forward) / resistance, not supply / resistance.
// A standard red LED drops about 2.0 V.
const LED_FORWARD_V = 2.0;

let supplyV = 5.0;           // volts
let resistance = 220;        // ohms

// Safety bands for a common 5 mm LED, in milliamps.
const SAFE_MA = 20;
const CAUTION_MA = 30;

let supplySlider, resistorSlider;
let flowOffset = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  supplySlider = createSlider(1.5, 9, supplyV, 0.1);
  supplySlider.position(sliderLeftMargin, drawHeight + 12);
  supplySlider.size(canvasWidth - sliderLeftMargin - margin);

  resistorSlider = createSlider(10, 1000, resistance, 10);
  resistorSlider.position(sliderLeftMargin, drawHeight + 47);
  resistorSlider.size(canvasWidth - sliderLeftMargin - margin);

  describe('An Ohm\'s Law calculator for an LED circuit. Two sliders set the ' +
           'supply voltage and the series resistor; the circuit diagram shows the ' +
           'LED brightening with the resulting current, and a panel reports the ' +
           'current in milliamps with a safe, caution, or unsafe verdict.');
}

function currentMilliamps() {
  const across = supplyV - LED_FORWARD_V;
  if (across <= 0) return 0;                 // below the LED's turn-on voltage
  return (across / resistance) * 1000;
}

function verdictFor(mA) {
  if (mA <= 0) return { label: 'LED will not light', col: '#7A8A99' };
  if (mA < SAFE_MA) return { label: 'Safe', col: '#2E7D4F' };
  if (mA <= CAUTION_MA) return { label: 'Caution - at the limit', col: '#B87B12' };
  return { label: 'Unsafe - will damage the LED', col: '#C0392B' };
}

function draw() {
  updateCanvasSize();

  supplyV = supplySlider.value();
  resistance = resistorSlider.value();
  const mA = currentMilliamps();

  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  fill('white');
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text("Ohm's Law Current Calculator", canvasWidth / 2, 12);

  drawCircuit(mA);
  drawReadout(mA);
  drawControlLabels(mA);
}

// Left 60%: a single loop with a battery, the series resistor, and the LED.
function drawCircuit(mA) {
  const w = canvasWidth * 0.60;
  const left = margin + 15;
  const right = w - 25;
  const top = 110;
  const bottom = 320;

  stroke('#33475B');
  strokeWeight(3);
  noFill();
  // wires, with gaps left for the three components
  line(left, top, left + 55, top);            // battery to top-left
  line(left + 145, top, right, top);          // resistor to top-right
  const ledY = bottom - 90;
  line(right, top, right, ledY - 20);         // down to the LED
  line(right, ledY + 20, right, bottom);      // LED to the return wire
  line(left, top + 60, left, bottom);         // battery down-leg
  line(left, bottom, right, bottom);          // return wire

  drawBattery(left, top);
  drawResistor(left + 55, top);
  drawLed(right, ledY, mA);
  drawCurrentFlow(left, right, top, bottom, mA);

  noStroke();
  fill('#33475B');
  textAlign(LEFT, CENTER);
  textSize(14);
  text(nf(supplyV, 1, 1) + ' V supply', left + 26, top + 30);
  textAlign(CENTER, TOP);
  text(resistance + ' Ω', left + 100, top - 40);
}

function drawBattery(x, y) {
  // vertical battery symbol on the left leg: long plate = positive
  stroke('#33475B');
  strokeWeight(3);
  line(x - 16, y + 22, x + 16, y + 22);
  strokeWeight(6);
  line(x - 9, y + 34, x + 9, y + 34);
  strokeWeight(3);
  line(x, y, x, y + 22);
  line(x, y + 34, x, y + 60);
}

function drawResistor(x, y) {
  // zig-zag resistor symbol on the top wire
  stroke('#33475B');
  strokeWeight(3);
  noFill();
  beginShape();
  vertex(x, y);
  const seg = 90 / 6;
  for (let i = 0; i < 6; i++) {
    vertex(x + seg * (i + 0.5), y + (i % 2 === 0 ? -11 : 11));
  }
  vertex(x + 90, y);
  endShape();
}

// The LED's fill opacity tracks the current, so the diagram reads at a glance.
function drawLed(x, y, mA) {
  const lit = constrain(mA / 25, 0, 1);
  noStroke();
  if (lit > 0.02) {
    fill(255, 90, 60, 70 * lit);
    circle(x, y, 62 + 26 * lit);            // glow halo
  }
  stroke('#33475B');
  strokeWeight(3);
  fill(255, 120 - 60 * lit, 90 - 60 * lit, 60 + 195 * lit);
  triangle(x - 15, y - 14, x + 15, y - 14, x, y + 12);
  line(x - 17, y + 12, x + 17, y + 12);     // cathode bar
  noStroke();
  fill('#33475B');
  textAlign(RIGHT, CENTER);
  textSize(14);
  text('LED', x - 46, y - 8);
  textSize(12);
  text(nf(LED_FORWARD_V, 1, 1) + ' V drop', x - 46, y + 10);
}

// Dots travelling the loop; their spacing is fixed but their speed tracks the
// current, so "more current" is visible and not only numeric.
function drawCurrentFlow(left, right, top, bottom, mA) {
  if (mA <= 0) return;
  const perimeter = 2 * (right - left) + 2 * (bottom - top);
  flowOffset = (flowOffset + constrain(mA / 6, 0.2, 6)) % 40;
  noStroke();
  fill('#F5A623');
  for (let d = flowOffset; d < perimeter; d += 40) {
    const p = pointOnLoop(d, left, right, top, bottom);
    circle(p.x, p.y, 7);
  }
}

// Walk the rectangular loop clockwise from the top-left corner.
function pointOnLoop(d, left, right, top, bottom) {
  const wide = right - left;
  const tall = bottom - top;
  if (d < wide) return { x: left + d, y: top };
  d -= wide;
  if (d < tall) return { x: right, y: top + d };
  d -= tall;
  if (d < wide) return { x: right - d, y: bottom };
  d -= wide;
  return { x: left, y: bottom - d };
}

// Right 40%: the arithmetic, spelled out, plus the verdict.
function drawReadout(mA) {
  const x = canvasWidth * 0.62;
  const w = canvasWidth - x - margin / 2;
  const top = 105;
  const v = verdictFor(mA);

  stroke('silver');
  strokeWeight(1);
  fill(255, 255, 255, 235);
  rect(x, top, w, 215, 10);

  const pad = x + 14;
  noStroke();
  textAlign(LEFT, TOP);

  fill('#555555');
  textSize(13);
  text('Current through the LED', pad, top + 14);

  fill(v.col);
  textSize(34);
  text(nf(mA, 1, 1) + ' mA', pad, top + 34);

  fill('#333333');
  textSize(13);
  text('I = (V supply − V forward) / R', pad, top + 84);
  textSize(14);
  text('= (' + nf(supplyV, 1, 1) + ' − ' + nf(LED_FORWARD_V, 1, 1) + ') / ' +
       resistance, pad, top + 104);

  // verdict chip
  fill(v.col);
  rect(pad, top + 134, w - 28, 30, 6);
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(14);
  text(v.label, pad + (w - 28) / 2, top + 149);

  fill('#777777');
  textAlign(LEFT, TOP);
  textSize(12);
  text('Safe below ' + SAFE_MA + ' mA · limit ' + CAUTION_MA + ' mA',
       pad, top + 175);
}

function drawControlLabels() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Supply voltage: ' + nf(supplyV, 1, 1) + ' V', 12, drawHeight + 22);
  text('Series resistor: ' + resistance + ' Ω', 12, drawHeight + 57);
}

// ---------- responsive plumbing (must stay at the end) ----------
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  supplySlider.size(canvasWidth - sliderLeftMargin - margin);
  resistorSlider.size(canvasWidth - sliderLeftMargin - margin);
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  const w = Math.floor(container.width);
  if (w !== containerWidth) {
    containerWidth = w;
    canvasWidth = containerWidth;
    if (typeof width !== 'undefined' && width > 0) {
      resizeCanvas(containerWidth, containerHeight);
      if (supplySlider) supplySlider.size(canvasWidth - sliderLeftMargin - margin);
      if (resistorSlider) resistorSlider.size(canvasWidth - sliderLeftMargin - margin);
    }
  }
}
