// Gyroscope Orientation Data Explorer
// CANVAS_HEIGHT: 520
// Bloom: Understand (L2), verb "interpret"
//
// Three numbers, three independent rotations, and the whole difficulty is
// keeping them apart.
//
// Pitch is nose up and down. Roll is one side dipping. Yaw is turning on the
// spot without tilting at all. Each drag handle moves exactly one of them, so
// a learner can watch the other two readouts stay at zero -- which is the
// property that makes three numbers enough to describe any orientation, and
// the property everyone assumes is not true the first time they see it.
//
// The board itself is drawn with a marked front edge, because "pitch went
// positive" is meaningless without knowing which way the thing is facing.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 440;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 42;

const AXES = [
  {key: 'pitch', name: 'Pitch', color: '#4A90D9',
   what: 'nose up and down, about the side-to-side axis',
   drag: 'drag the front or back edge'},
  {key: 'roll', name: 'Roll', color: '#3E9E6E',
   what: 'one side dipping, about the front-to-back axis',
   drag: 'drag the left or right edge'},
  {key: 'yaw', name: 'Yaw', color: '#8E7CC3',
   what: 'turning on the spot, about the vertical axis',
   drag: 'drag the round handle'}
];

// ---- Controls --------------------------------------------------------------
let resetButton;

// ---- State -----------------------------------------------------------------
let angles = {pitch: 0, roll: 0, yaw: 0};
let dragging = null;
let handles = [];
let boardCx = 0, boardCy = 0, boardR = 120;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  resetButton = createButton('Reset to flat');
  resetButton.position(10, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  describe('A rectangular sensor board drawn in perspective with its front ' +
    'edge marked, and three readouts below for pitch, roll, and yaw in ' +
    'degrees. Drag handles on the board tip it forward and back, roll it side ' +
    'to side, and rotate it flat. Each handle changes exactly one of the three ' +
    'readings, leaving the other two at zero.');
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
  text('Gyroscope Orientation Data Explorer', canvasWidth / 2, 8);

  const split = canvasWidth * 0.56;
  drawBoard(margin, TITLE_H, split - margin, drawHeight - TITLE_H - 12);
  drawReadouts(split, TITLE_H, canvasWidth - split - margin,
               drawHeight - TITLE_H - 12);
  drawControlLabels();

  cursor(dragging || handleUnderMouse() ? HAND : ARROW);
}

// A flat rectangle pitching toward a fixed camera only gets shorter, which
// reads as the board shrinking rather than tilting. So the board is a thin
// slab: rotate its eight corners, sort the six faces back to front, and draw
// them. The side faces coming into view are what make a tilt legible.
const ELEV = 0.62;           // camera elevation, radians

function rotate3(px, py, pz) {
  const p = radians(angles.pitch);
  const r = radians(angles.roll);
  const yw = radians(angles.yaw);

  // yaw about the board's vertical axis, then pitch, then roll
  let x = px * cos(yw) - py * sin(yw);
  let y = px * sin(yw) + py * cos(yw);
  let z = pz;

  const y1 = y * cos(p) - z * sin(p);
  const z1 = y * sin(p) + z * cos(p);

  const x2 = x * cos(r) + z1 * sin(r);
  const z2 = -x * sin(r) + z1 * cos(r);

  return {x: x2, y: y1, z: z2};
}

// Screen position, plus a depth used only for face ordering.
function project(px, py, pz) {
  const v = rotate3(px, py, pz);
  return {
    x: boardCx + v.x,
    y: boardCy + v.y * cos(ELEV) - v.z * sin(ELEV),
    depth: v.y * sin(ELEV) + v.z * cos(ELEV)
  };
}

function drawBoard(x, y, w, h) {
  boardCx = x + w / 2;
  boardCy = y + h * 0.40;
  boardR = min(w * 0.30, h * 0.28);

  const L = boardR, W = boardR * 0.66, T = boardR * 0.075;

  // eight corners: 0-3 top face, 4-7 bottom face, front edge is y = -W
  const c = [
    project(-L, -W, T), project(L, -W, T), project(L, W, T), project(-L, W, T),
    project(-L, -W, -T), project(L, -W, -T), project(L, W, -T), project(-L, W, -T)
  ];

  const faces = [
    {i: [0, 1, 2, 3], fill: '#2E7D4F', top: true},     // top
    {i: [4, 5, 6, 7], fill: '#1E5C3E'},                // bottom
    {i: [0, 1, 5, 4], fill: '#256B44', front: true},   // front edge
    {i: [3, 2, 6, 7], fill: '#256B44'},                // back edge
    {i: [0, 3, 7, 4], fill: '#20603C'},                // left edge
    {i: [1, 2, 6, 5], fill: '#20603C'}                 // right edge
  ];

  // Ground shadow, so a tilt does not read as the board floating away.
  push();
  noStroke();
  fill(0, 0, 0, 20);
  ellipse(boardCx, boardCy + h * 0.24, L * 1.8, W * 0.9);
  pop();

  // Painter's algorithm: farthest face first.
  faces.sort((a, b) =>
    b.i.reduce((s, k) => s + c[k].depth, 0) -
    a.i.reduce((s, k) => s + c[k].depth, 0));

  push();
  strokeWeight(1.5);
  for (const f of faces) {
    stroke('#16452D');
    fill(f.fill);
    beginShape();
    for (const k of f.i) vertex(c[k].x, c[k].y);
    endShape(CLOSE);

    if (f.top) {
      // the chip and the marked front edge, drawn only on the top face
      const m = project(0, 0, T);
      const f0 = project(-L, -W, T), f1 = project(L, -W, T);
      stroke('#F5A623');
      strokeWeight(5);
      line(f0.x, f0.y, f1.x, f1.y);
      noStroke();
      fill('#1E2A33');
      const chip = [project(-L * 0.22, -W * 0.3, T), project(L * 0.22, -W * 0.3, T),
                    project(L * 0.22, W * 0.3, T), project(-L * 0.22, W * 0.3, T)];
      beginShape();
      for (const q of chip) vertex(q.x, q.y);
      endShape(CLOSE);
      fill('#CFE3D6');
      textAlign(CENTER, CENTER);
      textSize(10);
      text('sensor', m.x, m.y);
      fill('#F5A623');
      textSize(11);
      text('FRONT', (f0.x + f1.x) / 2, (f0.y + f1.y) / 2 - 14);
      strokeWeight(1.5);
    }
  }
  pop();

  // Drag handles: front edge for pitch, right edge for roll, a knob for yaw.
  const front = project(0, -W, T);
  const right = project(L, 0, T);
  handles = [
    {key: 'pitch', x: front.x, y: front.y, axis: 'pitch'},
    {key: 'roll', x: right.x, y: right.y, axis: 'roll'},
    {key: 'yaw', x: boardCx, y: boardCy + h * 0.38, axis: 'yaw'}
  ];

  for (const hd of handles) {
    const a = AXES.find(o => o.key === hd.axis);
    const on = dragging === hd.key;
    push();
    noStroke();
    fill(a.color);
    circle(hd.x, hd.y, on ? 22 : 17);
    fill(255, 255, 255, 210);
    circle(hd.x, hd.y, on ? 9 : 7);
    pop();
  }

  noStroke();
  fill('#8AA6BF');
  textAlign(CENTER, TOP);
  textSize(11);
  text('yaw', boardCx, boardCy + h * 0.38 + 13);
  text('drag any coloured handle', boardCx, y + h - 16);
}

function drawReadouts(x, y, w, h) {
  const rowH = h / 3.4;

  for (let i = 0; i < AXES.length; i++) {
    const a = AXES[i];
    const ry = y + i * rowH;
    const v = angles[a.key];
    const active = abs(v) > 0.5;

    noStroke();
    fill('white');
    rect(x, ry, w, rowH - 10, 8);
    fill(active ? a.color : '#D4DEE7');
    rect(x, ry, 6, rowH - 10, 3);

    textAlign(LEFT, TOP);
    fill(active ? a.color : '#8AA6BF');
    textSize(15);
    text(a.name, x + 20, ry + 12);

    textAlign(RIGHT, TOP);
    textFont('monospace');
    textSize(30);
    fill(active ? '#2C3A45' : '#B8C4CE');
    text(nf(v, 0, 1) + '°', x + w - 18, ry + 8);
    textFont('sans-serif');

    textAlign(LEFT, TOP);
    fill('#4A5A68');
    textSize(12);
    text(a.what + ' — ' + a.drag, x + 20, ry + 36, w - 40, rowH - 48);
  }

  const moved = AXES.filter(a => abs(angles[a.key]) > 0.5);
  noStroke();
  fill(moved.length === 1 ? '#2E7D4F' : '#5B7186');
  textAlign(LEFT, TOP);
  textSize(13);
  text(moved.length === 0
        ? 'Flat: all three readings are zero. Drag one handle and watch only ' +
          'one number move.'
       : moved.length === 1
        ? 'Only ' + moved[0].name.toLowerCase() + ' changed. The other two ' +
          'axes are genuinely independent — that is what makes three numbers ' +
          'enough to describe any orientation.'
        : moved.length + ' axes moved. Real motion combines them, which is ' +
          'why the readings have to be read together.',
       x, y + 3 * rowH + 2, w, h - 3 * rowH - 6);
}

function drawControlLabels() {
  noStroke();
  fill('dimgray');
  textAlign(LEFT, CENTER);
  textSize(13);
  text('Pitch, roll, and yaw are named from aircraft, and every drone, phone, ' +
       'and game controller uses the same three.', 10, drawHeight + 58);
}

function handleUnderMouse() {
  for (const hd of handles) {
    if (dist(mouseX, mouseY, hd.x, hd.y) < 16) return hd;
  }
  return null;
}

function mousePressed() {
  const hd = handleUnderMouse();
  if (hd) dragging = hd.key;
}

function mouseDragged() {
  if (!dragging) return;
  // Each handle maps a drag direction onto exactly one axis, so the readouts
  // never move together by accident.
  if (dragging === 'pitch') {
    angles.pitch = constrain(angles.pitch + movedY * 0.6, -75, 75);
  } else if (dragging === 'roll') {
    angles.roll = constrain(angles.roll - movedY * 0.6, -75, 75);
  } else {
    angles.yaw = (angles.yaw + movedX * 0.8 + 360) % 360;
  }
}

function mouseReleased() { dragging = null; }

function resetSimulation() {
  angles = {pitch: 0, roll: 0, yaw: 0};
  dragging = null;
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
