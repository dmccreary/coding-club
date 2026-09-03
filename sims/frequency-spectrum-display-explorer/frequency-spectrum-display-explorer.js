// Frequency Spectrum Display Explorer
// CANVAS_HEIGHT: 480
// Bloom: Understand (L2), verb "interpret"
//
// Twelve bars, low frequency on the left, high on the right. A sound sensor
// reports one loudness number; a spectrum display reports where that loudness
// sits, and that is a different and much more useful question.
//
// The three presets are chosen so the shapes are unmistakably different: a hum
// piles everything into the left few bars, a whistle into a narrow group on the
// right, and chatter spreads across the middle with no clear peak. Reading a
// real display is the same skill -- name the shape, then name the sound.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 400;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 42;
const CAPTION_H = 92;
const BANDS = 12;

// Rough band centres for a 12-band display over the range a cheap sound kit
// covers. Printed on hover so the axis is not just "left is low".
const BAND_HZ = ['60', '95', '150', '240', '380', '600', '950', '1.5k',
                 '2.4k', '3.8k', '6k', '9.5k'];

// ---- Controls --------------------------------------------------------------
let humButton, whistleButton, chatterButton, resetButton;

// ---- State -----------------------------------------------------------------
let heights = new Array(BANDS).fill(0.06);
let target = new Array(BANDS).fill(0.06);
let current = null;

const SOUNDS = {
  hum: {
    name: 'Low hum',
    color: '#4A90D9',
    bars: [0.92, 0.78, 0.46, 0.20, 0.10, 0.06, 0.05, 0.04, 0.04, 0.03, 0.03, 0.03],
    caption: 'Almost everything is in the left-hand bars. A fridge, a fan, a ' +
             'projector, traffic through a wall — the energy sits below about ' +
             '200 Hz and there is nothing at the top of the range.',
    tell: 'The tell: a tall left edge falling away to nothing.'
  },
  whistle: {
    name: 'High whistle',
    color: '#E8833A',
    bars: [0.04, 0.04, 0.05, 0.05, 0.06, 0.08, 0.14, 0.30, 0.88, 0.62, 0.18, 0.08],
    caption: 'One narrow group of tall bars near the right. A whistle is close ' +
             'to a single frequency, so it lights a couple of bands and leaves ' +
             'the rest at the floor.',
    tell: 'The tell: a narrow spike, and a flat baseline either side of it.'
  },
  chatter: {
    name: 'Room chatter',
    color: '#3E9E6E',
    bars: [0.22, 0.34, 0.52, 0.66, 0.72, 0.68, 0.58, 0.46, 0.34, 0.24, 0.16, 0.11],
    caption: 'A broad hump across the middle with no single peak. Speech uses ' +
             'a wide band centred a few hundred hertz up, and twenty people ' +
             'talking averages into exactly this shape.',
    tell: 'The tell: a wide hump, and no bar much taller than its neighbours.'
  }
};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  humButton = createButton('Low hum');
  humButton.position(10, drawHeight + 8);
  humButton.mousePressed(() => play('hum'));

  whistleButton = createButton('High whistle');
  whistleButton.position(92, drawHeight + 8);
  whistleButton.mousePressed(() => play('whistle'));

  chatterButton = createButton('Room chatter');
  chatterButton.position(196, drawHeight + 8);
  chatterButton.mousePressed(() => play('chatter'));

  resetButton = createButton('Silence');
  resetButton.position(306, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  describe('A frequency spectrum display of twelve vertical bars running from ' +
    'low frequency on the left to high on the right. Three controls play a ' +
    'representative low hum, high whistle, or room chatter, and the bars ease ' +
    'into that sound\'s characteristic shape with a caption describing it. ' +
    'Hovering any bar shows its frequency band and current level.');
}

function play(key) {
  current = key;
  target = SOUNDS[key].bars.slice();
}

function draw() {
  updateCanvasSize();

  // Ease toward the target so the shape change is legible as a movement.
  for (let i = 0; i < BANDS; i++) heights[i] = lerp(heights[i], target[i], 0.10);

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Frequency Spectrum Display Explorer', canvasWidth / 2, 8);

  drawSpectrum(margin, TITLE_H, canvasWidth - margin * 2,
               drawHeight - TITLE_H - CAPTION_H - 8);
  drawCaption(margin, drawHeight - CAPTION_H, canvasWidth - margin * 2,
              CAPTION_H - 10);
  drawControlLabels();

  cursor(barUnderMouse() >= 0 ? HAND : ARROW);
}

function drawSpectrum(x, y, w, h) {
  const col = current ? SOUNDS[current].color : '#8AA6BF';
  const plotH = h - 50;
  const bw = w / BANDS;
  const hover = barUnderMouse();

  noStroke();
  fill('#1E2A33');
  rect(x, y, w, h, 8);

  push();
  stroke('#33424E');
  strokeWeight(1);
  for (let i = 1; i < 5; i++) {
    const gy = y + 10 + (plotH * i) / 5;
    line(x + 8, gy, x + w - 8, gy);
  }
  pop();

  for (let i = 0; i < BANDS; i++) {
    const bh = heights[i] * plotH;
    const bx = x + i * bw + bw * 0.16;
    const by = y + 10 + plotH - bh;
    noStroke();
    fill(i === hover ? 'white' : col);
    rect(bx, by, bw * 0.68, bh, 3);
    // a cap, the way a real bar display holds a peak marker
    fill(255, 255, 255, 150);
    rect(bx, by, bw * 0.68, 3, 2);

    fill(i === hover ? 'white' : '#6E8291');
    textAlign(CENTER, TOP);
    textSize(10);
    text(BAND_HZ[i], x + i * bw + bw / 2, y + 14 + plotH);
  }

  noStroke();
  fill('#9DB1BF');
  textAlign(LEFT, TOP);
  textSize(11);
  text('low frequency', x + 10, y + 16 + plotH + 14);
  textAlign(RIGHT, TOP);
  text('high frequency  (Hz)', x + w - 10, y + 16 + plotH + 14);

  if (hover >= 0) {
    const tx = constrain(x + hover * bw + bw / 2, x + 60, x + w - 60);
    noStroke();
    fill(255, 255, 255, 235);
    rect(tx - 58, y + 12, 116, 38, 5);
    fill('#2C3A45');
    textAlign(CENTER, TOP);
    textSize(12);
    text(BAND_HZ[hover] + ' Hz band', tx, y + 17);
    textSize(13);
    text('level ' + nf(heights[hover] * 100, 0, 0) + '%', tx, y + 32);
  }
}

function drawCaption(x, y, w, h) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 8);

  if (!current) {
    fill('#5B7186');
    textAlign(LEFT, TOP);
    textSize(14);
    text('All twelve bars are sitting at the noise floor — this is what the ' +
         'display looks like with nothing to hear. Play one of the three ' +
         'sounds and watch where the energy lands.',
         x + 16, y + 14, w - 32, h - 24);
    return;
  }

  const s = SOUNDS[current];
  fill(s.color);
  rect(x, y, 6, h, 3);
  textAlign(LEFT, TOP);
  fill(s.color);
  textSize(17);
  text(s.name, x + 20, y + 12);
  fill('#2C3A45');
  textSize(13);
  text(s.caption + ' ' + s.tell, x + 20, y + 36, w - 40, h - 44);
}

function drawControlLabels() {
  noStroke();
  fill('dimgray');
  textAlign(LEFT, CENTER);
  textSize(13);
  text('Hover any bar for its frequency band and level.', 10, drawHeight + 58);
}

function barUnderMouse() {
  const x = margin, w = canvasWidth - margin * 2;
  const y = TITLE_H, h = drawHeight - TITLE_H - CAPTION_H - 8;
  if (mouseY < y || mouseY > y + h) return -1;
  const i = floor((mouseX - x) / (w / BANDS));
  return (i >= 0 && i < BANDS) ? i : -1;
}

function resetSimulation() {
  current = null;
  target = new Array(BANDS).fill(0.06);
}

// These two functions must be present for width responsiveness
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
