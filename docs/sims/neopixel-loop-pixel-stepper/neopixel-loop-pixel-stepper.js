// NeoPixel Loop Pixel Stepper
// CANVAS_HEIGHT: 465
// Bloom: Apply (L3), verb "demonstrate"
// A for loop over a NeoPixel strip is the first place students meet an
// off-by-one error with visible consequences. Step the loop one iteration at a
// time and watch exactly which physical pixel lights. Switch the range to start
// at 1 and pixel 0 stays dark for the entire run -- the bug, made visible.

// ---------- canvas geometry ----------
let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 45;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

const AMBER = '#F5A623';
const SKY_BLUE = '#4A90D9';

// ---------- strip model ----------
const PIXEL_COUNT = 30;
let lit = new Array(PIXEL_COUNT).fill(false);

let startIndex = 0;          // 0 (correct) or 1 (the off-by-one)
let i = null;                // the loop variable; null means "not started"
let running = false;
let lastStepMs = 0;
const RUN_INTERVAL_MS = 110;

let stepButton, runButton, resetButton, offByOneCheckbox;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  stepButton = createButton('Step');
  stepButton.position(12, drawHeight + 12);
  stepButton.mousePressed(step);

  runButton = createButton('Run');
  runButton.position(70, drawHeight + 12);
  runButton.mousePressed(toggleRun);

  resetButton = createButton('Reset');
  resetButton.position(130, drawHeight + 12);
  resetButton.mousePressed(reset);

  offByOneCheckbox = createCheckbox(' Start the range at 1 (the off-by-one bug)', false);
  offByOneCheckbox.position(200, drawHeight + 12);
  offByOneCheckbox.changed(reset);

  describe('A NeoPixel strip of 30 pixels above the for loop that drives it. ' +
           'Stepping the loop advances the loop variable and lights the matching ' +
           'physical pixel. An option changes the range to start at 1, which ' +
           'leaves the first pixel dark for the whole run.');
}

function reset() {
  startIndex = offByOneCheckbox.checked() ? 1 : 0;
  lit = new Array(PIXEL_COUNT).fill(false);
  i = null;
  running = false;
  runButton.html('Run');
}

function step() {
  if (i === null) {
    i = startIndex;
  } else if (i < PIXEL_COUNT - 1) {
    i++;
  } else {
    running = false;
    runButton.html('Run');
    return;                  // the loop has finished
  }
  lit[i] = true;
}

function toggleRun() {
  if (i !== null && i >= PIXEL_COUNT - 1) reset();
  running = !running;
  runButton.html(running ? 'Pause' : 'Run');
  lastStepMs = millis();
}

function draw() {
  updateCanvasSize();
  startIndex = offByOneCheckbox.checked() ? 1 : 0;

  if (running && millis() - lastStepMs > RUN_INTERVAL_MS) {
    step();
    lastStepMs = millis();
  }

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
  text('Stepping a Loop Over a NeoPixel Strip', canvasWidth / 2, 12);

  drawStrip();
  drawLoopVariable();
  drawCode();
}

function drawStrip() {
  const left = margin;
  const usable = canvasWidth - margin * 2;
  const gap = 3;
  const w = (usable - gap * (PIXEL_COUNT - 1)) / PIXEL_COUNT;
  const top = 62;
  const h = 34;

  for (let p = 0; p < PIXEL_COUNT; p++) {
    const x = left + p * (w + gap);
    stroke(p === i ? '#B87B12' : '#8A99A8');
    strokeWeight(p === i ? 3 : 1);
    // lit pixels take a hue from their index, the way a rainbow program would
    if (lit[p]) {
      colorMode(HSB, 360, 100, 100);
      fill((p / PIXEL_COUNT) * 300, 85, 95);
      colorMode(RGB, 255);
    } else {
      fill('#2B3440');
    }
    rect(x, top, w, h, 3);
  }

  // index labels every fifth pixel, so the strip stays readable when narrow
  noStroke();
  fill('#666666');
  textAlign(CENTER, TOP);
  textSize(11);
  for (let p = 0; p < PIXEL_COUNT; p += 5) {
    text(p, left + p * (w + gap) + w / 2, top + h + 5);
  }

  // call out pixel 0 when the off-by-one is active and the run is under way
  if (startIndex === 1 && i !== null) {
    stroke('#C0392B');
    strokeWeight(2);
    noFill();
    rect(left - 2, top - 2, w + 4, h + 4, 4);
    noStroke();
    fill('#C0392B');
    textAlign(LEFT, TOP);
    textSize(12);
    text('pixel 0 never lights', left, top + h + 22);
  }
}

function drawLoopVariable() {
  const y = 150;
  noStroke();
  textAlign(LEFT, TOP);
  fill('#555555');
  textSize(14);
  text('Loop variable', margin, y);
  fill(AMBER);
  textSize(42);
  text(i === null ? 'i = —' : 'i = ' + i, margin, y + 20);

  fill('#777777');
  textSize(13);
  if (i === null) {
    text('Press Step to enter the loop.', margin, y + 72);
  } else if (i >= PIXEL_COUNT - 1) {
    text('Loop finished. ' + lit.filter(Boolean).length + ' of ' + PIXEL_COUNT +
         ' pixels were set.', margin, y + 72);
  } else {
    text('This pass sets pixel ' + i + '.', margin, y + 72);
  }
}

// The loop, with the line that is executing highlighted.
function drawCode() {
  const left = margin;
  const top = 240;
  const w = canvasWidth - margin * 2;
  const h = 168;

  stroke('silver');
  strokeWeight(1);
  fill('#1E2733');
  rect(left, top, w, h, 8);

  const lines = [
    'strip = NeoPixel(Pin(0), ' + PIXEL_COUNT + ')',
    'for i in range(' + startIndex + ', ' + PIXEL_COUNT + '):',
    '    strip[i] = wheel(i * 8)',
    '    strip.write()',
  ];
  // line 0 runs once before the loop; lines 2 and 3 run on every pass
  const activeLine = i === null ? 0 : (frameCount % 40 < 20 ? 2 : 3);

  textAlign(LEFT, TOP);
  textSize(15);
  for (let n = 0; n < lines.length; n++) {
    const y = top + 16 + n * 30;
    if (n === activeLine) {
      noStroke();
      fill(245, 166, 35, 45);
      rect(left + 6, y - 5, w - 12, 26, 4);
    }
    noStroke();
    fill(n === activeLine ? AMBER : '#C7D3DF');
    text(lines[n], left + 14, y);
  }

  noStroke();
  fill('#8A99A8');
  textSize(12);
  text('range(' + startIndex + ', ' + PIXEL_COUNT + ') yields ' +
       (PIXEL_COUNT - startIndex) + ' values: ' + startIndex + ' up to ' +
       (PIXEL_COUNT - 1) + ' inclusive.', left + 14, top + h - 24);
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
