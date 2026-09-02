// LED Matrix Pattern Designer
// CANVAS_HEIGHT: 540
// Bloom: Create (L6), verb "construct"
//
// Draw on an 8x8 grid and watch the eight bytes that would produce it appear
// beside the picture. The point is the correspondence: a row of lit pixels IS
// a binary number, and 0b01111110 is not a code you look up, it is a picture
// of the row you just drew.
//
// Bit order matters and is easy to get backwards. Column 0 is the leftmost
// pixel and carries bit 7 -- the most significant -- so the binary string reads
// left to right in the same order the pixels do. Get that wrong and every
// pattern comes out mirrored, which is the classic first bug.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 460;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 42;
const N = 8;

// ---- Controls --------------------------------------------------------------
let clearButton, presetSelect, invertButton;

// ---- State -----------------------------------------------------------------
let grid = [];
let gridBox = null;          // {x, y, cell} recomputed each frame

// Each preset is written as eight strings so the pattern is legible in the
// source -- a row of bits you can read is worth more than a hex literal.
const PRESETS = {
  'Blank': [
    '........', '........', '........', '........',
    '........', '........', '........', '........'],
  'Heart': [
    '.##..##.', '########', '########', '########',
    '.######.', '..####..', '...##...', '........'],
  'Arrow up': [
    '...##...', '..####..', '.##..##.', '##.##.##',
    '...##...', '...##...', '...##...', '........'],
  'Smiley': [
    '..####..', '.######.', '##.##.##', '########',
    '##.##.##', '##....##', '.######.', '..####..'],
  'Letter A': [
    '..####..', '.##..##.', '##....##', '##....##',
    '########', '##....##', '##....##', '........']
};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  loadPreset('Blank');

  clearButton = createButton('Clear');
  clearButton.position(10, drawHeight + 8);
  clearButton.mousePressed(() => loadPreset('Blank'));

  invertButton = createButton('Invert');
  invertButton.position(72, drawHeight + 8);
  invertButton.mousePressed(invertGrid);

  presetSelect = createSelect();
  for (const name of Object.keys(PRESETS)) presetSelect.option(name);
  presetSelect.selected('Blank');
  presetSelect.position(210, drawHeight + 8);
  presetSelect.changed(() => loadPreset(presetSelect.value()));

  describe('An eight by eight grid of clickable squares standing in for an LED ' +
    'matrix, beside a panel listing the eight bytes that would drive it. Each ' +
    'row is shown as its lit pixels, its binary value, and its hexadecimal ' +
    'value, and a copy-ready MicroPython list of the whole pattern sits ' +
    'underneath. Clicking a square toggles that LED and its row byte updates ' +
    'immediately.');
}

function loadPreset(name) {
  const rows = PRESETS[name];
  grid = rows.map(r => r.split('').map(c => c === '#'));
}

function invertGrid() {
  grid = grid.map(row => row.map(v => !v));
}

// Column 0 is the leftmost pixel and the most significant bit, so the binary
// string reads in the same direction as the picture.
function rowByte(r) {
  let v = 0;
  for (let c = 0; c < N; c++) if (grid[r][c]) v |= 1 << (N - 1 - c);
  return v;
}

function toBinary(v) {
  let s = '';
  for (let b = N - 1; b >= 0; b--) s += (v >> b) & 1;
  return s;
}

function toHex(v) {
  return '0x' + v.toString(16).toUpperCase().padStart(2, '0');
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
  text('LED Matrix Pattern Designer', canvasWidth / 2, 8);

  const split = canvasWidth * 0.52;
  drawGrid(margin, TITLE_H, split - margin * 2, drawHeight - TITLE_H - 12);
  drawBytes(split, TITLE_H, canvasWidth - split - margin,
            drawHeight - TITLE_H - 12);
  drawControlLabels();

  cursor(cellUnderMouse() ? HAND : ARROW);
}

function drawGrid(x, y, w, h) {
  const cell = min(w, h - 26) / N;
  const gx = x + (w - cell * N) / 2;
  const gy = y + 20;
  gridBox = {x: gx, y: gy, cell: cell};

  push();
  // the matrix body
  noStroke();
  fill('#2C3A45');
  rect(gx - 8, gy - 8, cell * N + 16, cell * N + 16, 8);

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      const cx = gx + c * cell + cell / 2;
      const cy = gy + r * cell + cell / 2;
      const on = grid[r][c];
      if (on) {
        // a lit LED gets a halo, the way a real one does
        noStroke();
        fill(214, 69, 69, 60);
        circle(cx, cy, cell * 0.95);
      }
      noStroke();
      fill(on ? '#FF4A4A' : '#41505C');
      circle(cx, cy, cell * 0.62);
    }
  }
  pop();

  // Hover highlight, so it is obvious the grid is clickable
  const hit = cellUnderMouse();
  if (hit) {
    push();
    noFill();
    stroke('#F5A623');
    strokeWeight(2);
    rect(gx + hit.c * cell, gy + hit.r * cell, cell, cell, 3);
    pop();
  }

  noStroke();
  fill('#5B7186');
  textAlign(CENTER, TOP);
  textSize(12);
  text('click any LED to toggle it', gx + cell * N / 2, gy + cell * N + 14);
}

function drawBytes(x, y, w, h) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 8);
  fill('#4A90D9');
  rect(x, y, w, 5, 3);

  textAlign(LEFT, TOP);
  fill('#2C3A45');
  textSize(15);
  text('One byte per row', x + 14, y + 16);

  textFont('monospace');
  textSize(13);
  fill('#8AA6BF');
  text('row   binary      hex', x + 14, y + 42);

  const rowH = 22;
  for (let r = 0; r < N; r++) {
    const v = rowByte(r);
    const ry = y + 62 + r * rowH;
    // Highlight the row the pointer is over, so grid and bytes are linked.
    const hit = cellUnderMouse();
    if (hit && hit.r === r) {
      noStroke();
      fill('#FDF3DF');
      rect(x + 10, ry - 3, w - 20, rowH - 2, 3);
    }
    fill('#8AA6BF');
    text(r, x + 16, ry);
    fill(v === 0 ? '#B8C4CE' : '#2C3A45');
    text('0b' + toBinary(v), x + 52, ry);
    fill(v === 0 ? '#B8C4CE' : '#4A90D9');
    text(toHex(v), x + 168, ry);
  }

  // The line a student would actually paste into their sketch.
  const py = y + 62 + N * rowH + 12;
  fill('#8AA6BF');
  textSize(12);
  text('pattern = [' + Array.from({length: N}, (_, r) => toHex(rowByte(r)))
       .join(', ') + ']', x + 14, py, w - 28, h - (py - y) - 10);
  textFont('sans-serif');
}

function drawControlLabels() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Preset:', 148, drawHeight + 22);
  fill('dimgray');
  textSize(13);
  text('Bit 7 is the leftmost pixel, so the binary reads the way the row looks.',
       10, drawHeight + 58);
}

function cellUnderMouse() {
  if (!gridBox) return null;
  const c = floor((mouseX - gridBox.x) / gridBox.cell);
  const r = floor((mouseY - gridBox.y) / gridBox.cell);
  if (r < 0 || r >= N || c < 0 || c >= N) return null;
  return {r: r, c: c};
}

function mousePressed() {
  const hit = cellUnderMouse();
  if (hit) grid[hit.r][hit.c] = !grid[hit.r][hit.c];
}

// Dragging paints, which is how anybody expects a pixel grid to behave.
function mouseDragged() {
  const hit = cellUnderMouse();
  if (hit) grid[hit.r][hit.c] = true;
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
