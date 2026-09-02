// Photoresistor Voltage Divider Explorer
// CANVAS_HEIGHT: 520
// Bloom: Apply (L3), verb "calculate"
//
// A microcontroller cannot measure resistance. It measures voltage. So to read
// a photoresistor you put it in a divider with a fixed resistor and read the
// voltage at the junction:
//
//     Vout = Vcc x Rfixed / (Rldr + Rfixed)
//
// Drag the light slider and both numbers move together. The fixed-resistor
// selector is the part worth playing with: it decides *where* in the light
// range the output voltage actually swings, which is the whole design decision
// behind picking one.
//
// The LDR curve is the standard log-log approximation -- roughly 1 MΩ in the
// dark falling to about 1 kΩ in bright light. A real part's numbers differ;
// the shape does not.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 440;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let sliderLeftMargin = 160;
let defaultTextSize = 16;

const TITLE_H = 44;
const VCC = 3.3;             // a Pico's supply and ADC reference
const ADC_MAX = 65535;       // MicroPython's read_u16() range

// ---- Controls --------------------------------------------------------------
let lightSlider, fixedSelect, resetButton;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  resetButton = createButton('Reset');
  resetButton.position(10, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  fixedSelect = createSelect();
  fixedSelect.option('1 kΩ');
  fixedSelect.option('10 kΩ');
  fixedSelect.option('100 kΩ');
  fixedSelect.selected('10 kΩ');
  fixedSelect.position(200, drawHeight + 8);

  lightSlider = createSlider(0, 100, 50, 1);
  lightSlider.position(sliderLeftMargin, drawHeight + 46);
  lightSlider.size(canvasWidth - sliderLeftMargin - margin);

  describe('A voltage divider circuit diagram with a photoresistor above a ' +
    'fixed resistor and an analog input tapped at the junction. A sun icon ' +
    'brightens and dims with a light-level slider, and the panel beside the ' +
    'circuit shows the photoresistor resistance, the divider formula with the ' +
    'live numbers substituted in, and the resulting output voltage. A selector ' +
    'swaps the fixed resistor between 1, 10, and 100 kilohms.');
}

function fixedOhms() {
  return {'1 kΩ': 1000, '10 kΩ': 10000, '100 kΩ': 100000}[fixedSelect.value()];
}

// Log-linear light response: 1 MΩ dark, 1 kΩ in full light. Real LDRs follow
// this shape closely over their working range, which is why a divider works.
function ldrOhms() {
  const light = lightSlider.value() / 100;
  return pow(10, 6 - 3 * light);
}

function vout() {
  const rf = fixedOhms();
  return VCC * rf / (ldrOhms() + rf);
}

function formatOhms(r) {
  if (r >= 1e6) return nf(r / 1e6, 0, 2) + ' MΩ';
  if (r >= 1e3) return nf(r / 1e3, 0, 1) + ' kΩ';
  return nf(r, 0, 0) + ' Ω';
}

function draw() {
  updateCanvasSize();

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Photoresistor Voltage Divider Explorer', canvasWidth / 2, 10);

  const split = canvasWidth * 0.52;
  drawCircuit(margin, TITLE_H, split - margin * 2, drawHeight - TITLE_H - 12);
  drawPanel(split, TITLE_H, canvasWidth - split - margin,
            drawHeight - TITLE_H - 12);
  drawControlLabels();
}

// ---------------------------------------------------------------------------
// Schematic
// ---------------------------------------------------------------------------

function drawCircuit(x, y, w, h) {
  const light = lightSlider.value() / 100;
  const cx = x + w * 0.60;         // the vertical run the divider sits on
  const top = y + 34;
  const bot = y + h - 40;
  const midY = (top + bot) / 2;

  drawSun(x + w * 0.16, top + 44, min(52, w * 0.20), light);

  push();
  stroke('#2C3A45');
  strokeWeight(2);

  // Supply rail at the top, ground at the bottom
  line(cx - 60, top, cx + 70, top);
  drawGround(cx, bot);

  // Upper leg: the photoresistor
  line(cx, top, cx, midY - 62);
  drawLdrSymbol(cx, midY - 34, light);
  line(cx, midY - 6, cx, midY + 6);

  // Lower leg: the fixed resistor
  drawResistorSymbol(cx, midY + 40);
  line(cx, midY + 68, cx, bot - 14);

  // The analog input tap, at the junction between the two
  stroke('#3E9E6E');
  line(cx, midY, cx + 66, midY);
  pop();

  noStroke();
  fill('#3E9E6E');
  circle(cx, midY, 7);
  const boxW = min(86, w * 0.30);
  rect(cx + 66, midY - 15, boxW, 30, 5);
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(12);
  text('ADC in', cx + 66 + boxW / 2, midY);

  fill('#D64545');
  textAlign(LEFT, BOTTOM);
  textSize(13);
  text(nf(VCC, 0, 1) + ' V', cx - 58, top - 4);

  fill('#4A5A68');
  textAlign(LEFT, CENTER);
  textSize(13);
  text('LDR\n' + formatOhms(ldrOhms()), cx + 18, midY - 34);
  text('R\n' + fixedSelect.value(), cx + 18, midY + 40);

  fill('#3E9E6E');
  textAlign(CENTER, TOP);
  textSize(15);
  text(nf(vout(), 0, 2) + ' V', cx + 66 + boxW / 2, midY + 18);
}

function drawSun(x, y, r, light) {
  push();
  const disc = lerpColor(color('#9AA5AD'), color('#FFD23F'), light);
  noStroke();
  fill(255, 214, 79, 25 + light * 95);
  circle(x, y, r * (1.6 + light * 0.9));
  fill(disc);
  circle(x, y, r);
  stroke(disc);
  strokeWeight(3);
  for (let i = 0; i < 8; i++) {
    const a = (i * TWO_PI) / 8;
    const r1 = r * 0.62, r2 = r * (0.78 + light * 0.42);
    line(x + cos(a) * r1, y + sin(a) * r1, x + cos(a) * r2, y + sin(a) * r2);
  }
  pop();
  noStroke();
  fill('#4A5A68');
  textAlign(CENTER, TOP);
  textSize(12);
  text(lightSlider.value() + '% light', x, y + r * 1.5);
}

// A photoresistor is a resistor symbol with two arrows pointing at it -- the
// standard schematic way of saying "light does something to this part".
function drawLdrSymbol(cx, cy, light) {
  drawResistorSymbol(cx, cy);
  push();
  stroke(lerpColor(color('#B9A55A'), color('#E8A317'), light));
  strokeWeight(2);
  for (let i = 0; i < 2; i++) {
    const y0 = cy - 26 + i * 18;
    const x1 = cx - 54, y1 = y0;
    const x2 = cx - 20, y2 = y0 + 16;
    line(x1, y1, x2, y2);
    line(x2, y2, x2 - 10, y2 - 2);
    line(x2, y2, x2 - 2, y2 - 10);
  }
  pop();
}

// IEC-style rectangle. The book's other schematics use the same box, so a
// student reading one can read the other.
function drawResistorSymbol(cx, cy) {
  push();
  stroke('#2C3A45');
  strokeWeight(2);
  fill('white');
  rectMode(CENTER);
  rect(cx, cy, 22, 56, 2);
  pop();
}

function drawGround(cx, y) {
  push();
  stroke('#2C3A45');
  strokeWeight(2);
  line(cx, y - 14, cx, y);
  line(cx - 15, y, cx + 15, y);
  line(cx - 9, y + 5, cx + 9, y + 5);
  line(cx - 4, y + 10, cx + 4, y + 10);
  pop();
}

// ---------------------------------------------------------------------------
// Numbers panel
// ---------------------------------------------------------------------------

function drawPanel(x, y, w, h) {
  const rl = ldrOhms(), rf = fixedOhms(), v = vout();

  noStroke();
  fill('white');
  rect(x, y, w, h, 8);
  fill('#F5A623');
  rect(x, y, w, 5, 3);

  textAlign(LEFT, TOP);
  fill('#B8860B');
  textSize(17);
  text('Working the divider', x + 16, y + 16);

  textFont('monospace');
  textSize(15);
  fill('#8E7CC3');
  text('Vout = Vcc × Rf / (Rldr + Rf)', x + 16, y + 48);
  fill('black');
  text('Vout = ' + nf(VCC, 0, 1) + ' × ' + formatOhms(rf), x + 16, y + 74);
  text('       / (' + formatOhms(rl) + ' + ' + formatOhms(rf) + ')',
       x + 16, y + 96);
  textSize(22);
  fill('#3E9E6E');
  text('Vout = ' + nf(v, 0, 2) + ' V', x + 16, y + 122);
  textFont('sans-serif');

  // What the code will actually see, which is not volts.
  fill('#4A5A68');
  textSize(13);
  text('read_u16() would return about ' + nf(v / VCC * ADC_MAX, 0, 0) +
       ' of ' + ADC_MAX + '.', x + 16, y + 158);

  drawResponseCurve(x + 16, y + 190, w - 32, h - 210);
}

// The curve is the argument for the fixed-resistor selector: swap it and the
// steep part of the response slides to a different part of the light range.
function drawResponseCurve(x, y, w, h) {
  const rf = fixedOhms();
  const plotH = min(h, 120);
  const y0 = y + 22;

  noStroke();
  fill('#4A5A68');
  textAlign(LEFT, TOP);
  textSize(12);
  text('Output vs light level, with this fixed resistor', x, y);

  push();
  stroke('#D4DEE7');
  strokeWeight(1);
  line(x, y0 + plotH, x + w, y0 + plotH);
  line(x, y0, x, y0 + plotH);

  stroke('#4A90D9');
  strokeWeight(2.5);
  noFill();
  beginShape();
  for (let p = 0; p <= 100; p += 2) {
    const r = pow(10, 6 - 3 * (p / 100));
    const vv = VCC * rf / (r + rf);
    vertex(x + (p / 100) * w, y0 + plotH - (vv / VCC) * plotH);
  }
  endShape();

  // Where the slider currently sits on that curve
  const px = x + (lightSlider.value() / 100) * w;
  const py = y0 + plotH - (vout() / VCC) * plotH;
  stroke('#D64545');
  strokeWeight(1);
  line(px, y0, px, y0 + plotH);
  noStroke();
  fill('#D64545');
  circle(px, py, 8);
  pop();

  noStroke();
  fill('#8AA6BF');
  textSize(11);
  textAlign(LEFT, TOP);
  text('dark', x, y0 + plotH + 3);
  textAlign(RIGHT, TOP);
  text('bright', x + w, y0 + plotH + 3);
  textAlign(LEFT, BOTTOM);
  text(nf(VCC, 0, 1) + ' V', x + 3, y0 + 12);
  textAlign(LEFT, TOP);
  text('0 V', x + 3, y0 + plotH - 12);
}

function drawControlLabels() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Fixed resistor:', 80, drawHeight + 22);
  text('Light level: ' + lightSlider.value() + '%', 10, drawHeight + 58);
}

function resetSimulation() {
  lightSlider.value(50);
  fixedSelect.selected('10 kΩ');
}

// These two functions must be present for width responsiveness
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  lightSlider.size(canvasWidth - sliderLeftMargin - margin);
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
