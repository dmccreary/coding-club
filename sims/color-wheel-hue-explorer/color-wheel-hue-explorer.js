// Color Wheel Hue Explorer
// CANVAS_HEIGHT: 445
// Bloom: Apply (L3), verb "calculate"
// Every Moving Rainbow program calls wheel(pos): give it a number from 0 to 255
// and it hands back an (r, g, b) triple. Drag the marker round the wheel and the
// panel shows which of the three branches of that function ran and what it
// returned, so the code stops being a black box.

// ---------- canvas geometry ----------
let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 45;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

const AMBER = '#F5A623';

// ---------- state ----------
let pos = 0;                 // 0..255, the wheel() argument
let dragging = false;
let posInput, sampleButton;
let sampleIndex = 0;
const SAMPLES = [0, 85, 170];

let wheelCx, wheelCy;
const WHEEL_R = 118;
const RING = 34;             // thickness of the coloured ring

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  posInput = createInput(String(pos), 'number');
  posInput.position(150, drawHeight + 10);
  posInput.size(70);
  posInput.input(() => {
    const v = parseInt(posInput.value(), 10);
    if (!isNaN(v)) pos = constrain(v, 0, 255);
  });

  sampleButton = createButton('Show three sample positions');
  sampleButton.position(255, drawHeight + 10);
  sampleButton.mousePressed(() => {
    pos = SAMPLES[sampleIndex % SAMPLES.length];
    sampleIndex++;
    posInput.value(String(pos));
  });

  describe('A color wheel explorer for the Moving Rainbow wheel() function. ' +
           'Drag a marker around a 0 to 255 color wheel, or type a position, and ' +
           'see the red, green, and blue values the function would return, along ' +
           'with which of its three branches produced them.');
}

// The standard NeoPixel wheel(): the 0-255 range is split into three 85-wide
// ramps, each fading one channel down while another fades up.
function wheelColor(p) {
  p = constrain(Math.round(p), 0, 255);
  if (p < 85) return { r: 255 - p * 3, g: p * 3, b: 0, branch: 1 };
  if (p < 170) { const q = p - 85; return { r: 0, g: 255 - q * 3, b: q * 3, branch: 2 }; }
  const q = p - 170;
  return { r: q * 3, g: 0, b: 255 - q * 3, branch: 3 };
}

const BRANCH_TEXT = {
  1: ['pos < 85', 'red fades out, green fades in'],
  2: ['85 ≤ pos < 170', 'green fades out, blue fades in'],
  3: ['pos ≥ 170', 'blue fades out, red fades in'],
};

function draw() {
  updateCanvasSize();
  wheelCx = canvasWidth * 0.27;
  wheelCy = 205;
  const c = wheelColor(pos);

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
  text('Color Wheel: what wheel(pos) returns', canvasWidth / 2, 12);

  drawWheel();
  drawMarker(c);
  drawPanel(c);
  drawControlLabels();
}

// The ring is drawn as 256 thin wedges, one per legal wheel() position, so the
// picture is literally the function's output rather than an approximation.
function drawWheel() {
  noStroke();
  for (let p = 0; p < 256; p++) {
    const c = wheelColor(p);
    fill(c.r, c.g, c.b);
    const a0 = radians(p / 256 * 360 - 90);
    const a1 = radians((p + 1.4) / 256 * 360 - 90);
    arc(wheelCx, wheelCy, WHEEL_R * 2, WHEEL_R * 2, a0, a1, PIE);
  }
  // punch out the middle to leave a ring
  noStroke();
  fill('aliceblue');
  circle(wheelCx, wheelCy, (WHEEL_R - RING) * 2);

  noStroke();
  fill('#666666');
  textAlign(CENTER, CENTER);
  textSize(12);
  for (const s of SAMPLES) {
    const a = radians(s / 256 * 360 - 90);
    const r = WHEEL_R + 16;
    text(String(s), wheelCx + cos(a) * r, wheelCy + sin(a) * r);
  }
}

function drawMarker(c) {
  const a = radians(pos / 256 * 360 - 90);
  const r = WHEEL_R - RING / 2;
  const mx = wheelCx + cos(a) * r;
  const my = wheelCy + sin(a) * r;

  stroke('white');
  strokeWeight(4);
  fill(c.r, c.g, c.b);
  circle(mx, my, 30);
  noFill();
  stroke('#33475B');
  strokeWeight(2);
  circle(mx, my, 30);

  noStroke();
  fill('#333333');
  textAlign(CENTER, CENTER);
  textSize(20);
  text(pos, wheelCx, wheelCy - 8);
  textSize(12);
  fill('#666666');
  text('pos', wheelCx, wheelCy + 14);
}

function drawPanel(c) {
  const x = canvasWidth * 0.55;
  const w = canvasWidth - x - margin / 2;
  const top = 60;

  stroke('silver');
  strokeWeight(1);
  fill(255, 255, 255, 235);
  rect(x, top, w, 292, 10);

  const pad = x + 14;
  noStroke();
  textAlign(LEFT, TOP);

  // colour swatch
  stroke('#33475B');
  strokeWeight(2);
  fill(c.r, c.g, c.b);
  rect(pad, top + 14, w - 28, 56, 6);

  noStroke();
  fill('#555555');
  textSize(13);
  text('wheel(' + pos + ') returns', pad, top + 82);

  fill('#C0392B'); textSize(22); text('R ' + c.r, pad, top + 102);
  fill('#2E7D4F'); text('G ' + c.g, pad + 78, top + 102);
  fill('#2E6BA8'); text('B ' + c.b, pad + 156, top + 102);

  stroke('#DDDDDD'); strokeWeight(1);
  line(pad, top + 140, x + w - 14, top + 140);
  noStroke();

  fill('#555555');
  textSize(13);
  text('Branch taken', pad, top + 150);
  fill(AMBER);
  textSize(17);
  text(BRANCH_TEXT[c.branch][0], pad, top + 170);
  fill('#333333');
  textSize(13);
  text(BRANCH_TEXT[c.branch][1], pad, top + 194);

  fill('#777777');
  textSize(12);
  text('Only two channels are ever non-zero at', pad, top + 224);
  text('once. That is why the wheel has three', pad, top + 240);
  text('pure corners and no white or grey.', pad, top + 256);
}

function drawControlLabels() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Position:', 12, drawHeight + 22);
}

// ---------- dragging ----------
function mousePressed() {
  if (dist(mouseX, mouseY, wheelCx, wheelCy) < WHEEL_R + 18) {
    dragging = true;
    setPosFromMouse();
  }
}

function mouseReleased() { dragging = false; }

function mouseDragged() { if (dragging) setPosFromMouse(); }

function setPosFromMouse() {
  const a = degrees(atan2(mouseY - wheelCy, mouseX - wheelCx)) + 90;
  pos = Math.round(((a % 360) + 360) % 360 / 360 * 256) % 256;
  posInput.value(String(pos));
}

// ---------- responsive plumbing (must stay at the end) ----------
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
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
    }
  }
}
