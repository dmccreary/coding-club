// Seasonal LED Pattern Gallery
// CANVAS_HEIGHT: 480
// Bloom: Analyze (L4), verb "differentiate"
//
// Four strips running at once, and the same animation code behind all of them.
// What changes between the rainbow and its seasonal variants is not the
// algorithm -- it is a palette and a couple of numbers.
//
// That is the point of showing them side by side. A student who thinks
// "Halloween mode" is a different program will rewrite it from scratch. A
// student who can see that it is the base pattern with a two-colour palette and
// a slower step will make their own variant in five minutes.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 400;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let sliderLeftMargin = 150;
let defaultTextSize = 16;

const TITLE_H = 42;
const PIXELS = 30;

// ---- Controls --------------------------------------------------------------
let speedSlider, resetButton;

// ---- State -----------------------------------------------------------------
let phase = 0;
let selected = null;
let stripBoxes = [];

// Each pattern is one function returning a colour per pixel per frame, plus
// the handful of values that make it different from the base rainbow.
const PATTERNS = [
  {
    key: 'rainbow', name: 'Rainbow', accent: '#4A90D9',
    params: [['palette', 'full hue wheel, 0–360°'],
             ['hue step', '360 / 30 per pixel'],
             ['scroll', '+2° per frame']],
    what: 'The base pattern. Each pixel takes its hue from its position along ' +
          'the strip, and the whole wheel shifts by a couple of degrees every ' +
          'frame. Everything below is this, with the palette narrowed.',
    color: (i, t) => hsb((i * 360 / PIXELS + t * 2) % 360, 85, 100)
  },
  {
    key: 'halloween', name: 'Halloween', accent: '#E8833A',
    params: [['palette', 'orange 25° and purple 285° only'],
             ['blend', 'hard switch, no gradient'],
             ['scroll', '+1° per frame — half speed']],
    what: 'Two hues instead of 360, and a hard switch between them rather than ' +
          'a gradient. The slower scroll is what makes it read as a crawl ' +
          'rather than a shimmer.',
    color: (i, t) => {
      const band = floor((i + t * 0.08) / 3) % 2;
      return hsb(band ? 25 : 285, 90, 100);
    }
  },
  {
    key: 'holiday', name: 'Holiday', accent: '#D64545',
    params: [['palette', 'red 0° and green 130° only'],
             ['blend', 'alternating pixels'],
             ['twinkle', 'every 7th pixel dimmed on a cycle']],
    what: 'Alternating pixels rather than blocks, plus a twinkle: one pixel in ' +
          'seven drops its brightness on a slow cycle. The twinkle is the only ' +
          'thing here that is not in the base pattern.',
    color: (i, t) => {
      const base = (i % 2 === 0) ? 0 : 130;
      const tw = ((i + floor(t * 0.06)) % 7 === 0) ? 45 : 100;
      return hsb(base, 88, tw);
    }
  },
  {
    key: 'july4', name: 'Fourth of July', accent: '#8E7CC3',
    params: [['palette', 'red 0°, white 0% sat, blue 220°'],
             ['blend', 'three-pixel bands'],
             ['scroll', '+3° per frame — faster than base']],
    what: 'Three colours in repeating bands, and white is the interesting one: ' +
          'it is not a hue at all, it is zero saturation. A palette that ' +
          'includes white needs saturation as a parameter, not just hue.',
    color: (i, t) => {
      const band = floor((i + t * 0.12) / 3) % 3;
      if (band === 0) return hsb(0, 88, 100);
      if (band === 1) return hsb(0, 0, 100);
      return hsb(220, 88, 100);
    }
  }
];

// Small helper so each pattern function can just return a hue/sat/bri triple.
function hsb(h, s, b) { return {h: h, s: s, b: b}; }

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  resetButton = createButton('Show all four');
  resetButton.position(10, drawHeight + 8);
  resetButton.mousePressed(() => { selected = null; });

  speedSlider = createSlider(0, 200, 100, 5);
  speedSlider.position(sliderLeftMargin, drawHeight + 46);
  speedSlider.size(canvasWidth - sliderLeftMargin - margin);

  describe('Four thirty-pixel LED strip previews animating at once, labelled ' +
    'Rainbow, Halloween, Holiday, and Fourth of July. A shared speed slider ' +
    'changes all four together. Clicking a strip enlarges it, pauses the ' +
    'others, and lists the two or three parameter values — palette, blend, and ' +
    'timing — that make it different from the base rainbow pattern.');
}

function draw() {
  updateCanvasSize();
  phase += speedSlider.value() / 100;

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Seasonal LED Pattern Gallery', canvasWidth / 2, 8);

  if (selected) drawDetail();
  else drawGallery();
  drawControlLabels();

  cursor(stripUnderMouse() ? HAND : ARROW);
}

function drawGallery() {
  const x = margin, y = TITLE_H + 6;
  const w = canvasWidth - margin * 2;
  const h = drawHeight - y - 14;
  const rowH = h / PATTERNS.length;
  stripBoxes = [];

  for (let i = 0; i < PATTERNS.length; i++) {
    const p = PATTERNS[i];
    const by = y + i * rowH;
    stripBoxes.push({x: x, y: by, w: w, h: rowH - 8, key: p.key});

    noStroke();
    fill('white');
    rect(x, by, w, rowH - 8, 8);
    fill(p.accent);
    rect(x, by, 5, rowH - 8, 3);

    fill(p.accent);
    textAlign(LEFT, CENTER);
    textSize(15);
    text(p.name, x + 18, by + (rowH - 8) / 2);

    drawStrip(p, x + 168, by + (rowH - 8) / 2 - 14, w - 190, 28, phase);
  }

  noStroke();
  fill('#8AA6BF');
  textAlign(CENTER, BOTTOM);
  textSize(12);
  text('click a strip to see what makes it different', canvasWidth / 2,
       drawHeight - 2);
}

function drawDetail() {
  const p = PATTERNS.find(o => o.key === selected);
  const x = margin, y = TITLE_H + 6;
  const w = canvasWidth - margin * 2;
  const h = drawHeight - y - 14;
  stripBoxes = [];

  noStroke();
  fill('white');
  rect(x, y, w, h, 10);
  fill(p.accent);
  rect(x, y, w, 5, 3);

  fill(p.accent);
  textAlign(LEFT, TOP);
  textSize(22);
  text(p.name, x + 20, y + 18);

  drawStrip(p, x + 20, y + 56, w - 40, 46, phase);

  // What changed, relative to the base rainbow.
  textFont('monospace');
  textSize(14);
  for (let i = 0; i < p.params.length; i++) {
    const py = y + 128 + i * 26;
    fill('#8AA6BF');
    text(p.params[i][0], x + 24, py);
    fill('#2C3A45');
    text(p.params[i][1], x + 150, py);
  }
  textFont('sans-serif');

  fill('#4A5A68');
  textSize(14);
  text(p.what, x + 20, y + 128 + p.params.length * 26 + 14, w - 40,
       h - (128 + p.params.length * 26 + 28));

  // The others, still visible as small swatches so the comparison survives.
  const sw = 68;
  let sx = x + w - 20 - sw * (PATTERNS.length - 1);
  for (const o of PATTERNS) {
    if (o.key === p.key) continue;
    stripBoxes.push({x: sx, y: y + 14, w: sw - 6, h: 26, key: o.key});
    drawStrip(o, sx, y + 14, sw - 6, 26, phase);
    sx += sw;
  }
}

function drawStrip(p, x, y, w, h, t) {
  const cell = w / PIXELS;
  push();
  noStroke();
  fill('#1E2A33');
  rect(x - 4, y - 4, w + 8, h + 8, 4);
  colorMode(HSB, 360, 100, 100);
  for (let i = 0; i < PIXELS; i++) {
    const c = p.color(i, t);
    fill(c.h, c.s, c.b);
    rect(x + i * cell + cell * 0.12, y, cell * 0.76, h, 2);
  }
  colorMode(RGB, 255);
  pop();
}

function drawControlLabels() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  const v = speedSlider.value();
  text('Speed: ' + (v === 0 ? 'paused' : v + '%'), 10, drawHeight + 58);
}

function stripUnderMouse() {
  for (const b of stripBoxes) {
    if (mouseX > b.x && mouseX < b.x + b.w &&
        mouseY > b.y && mouseY < b.y + b.h) return b;
  }
  return null;
}

function mousePressed() {
  const b = stripUnderMouse();
  if (b) selected = b.key;
}

// These two functions must be present for width responsiveness
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  speedSlider.size(canvasWidth - sliderLeftMargin - margin);
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
