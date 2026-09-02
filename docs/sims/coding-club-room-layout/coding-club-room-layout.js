// Coding Club Room Layout
// CANVAS_HEIGHT: 590
// Bloom: Apply (L3), verb "apply"
//
// A top-down floor plan of a well-arranged club room, with every placement
// decision clickable. The argument the plan makes is spatial, not textual:
// monitors face inward so one adult standing at the centre table can see every
// screen, and power runs along the baseboard so no cable crosses the floor
// anyone walks on.
//
// Drag the mentor marker anywhere and turn on Show Sightlines to test the first
// claim yourself. A screen counts as readable only when the mentor is inside its
// viewing cone -- an LCD seen from more than about 70 degrees off-axis is a grey
// smear, which is the actual reason facing them inward matters. The centre table
// blocks nothing: it is waist height, and you can see over it.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 900;
let drawHeight = 510;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 42;
const PANEL_W = 250;         // the info panel on the right
const PANEL_MIN_CANVAS = 700;  // below this the panel becomes a strip on top

const C_MONITOR = '#4A90D9';
const C_TABLE   = '#F5A623';
const C_SEATING = '#3E9E6E';
const C_POWER   = '#D64545';
const C_STORAGE = '#8E7CC3';

// ---- Controls --------------------------------------------------------------
let cableCheckbox, sightlineCheckbox, resetButton;

// ---- State -----------------------------------------------------------------
let selected = null;         // an element object
let mentor = {u: 0.5, v: 0.70};   // mentor position in room coordinates (0-1)
let draggingMentor = false;
let room = null;             // {x, y, w, h} recomputed every frame

// Every element is placed in room coordinates (0-1 across the room rectangle)
// so the plan rescales cleanly with the canvas.
//
// kind drives both the drawing and the legend.
const ELEMENTS = [
  // Eight monitors, all on the perimeter, screens facing inward.
  {kind: 'monitor', u: 0.10, v: 0.06, face: 'down',  name: 'Monitors Facing Inward'},
  {kind: 'monitor', u: 0.30, v: 0.06, face: 'down',  name: 'Monitors Facing Inward'},
  {kind: 'monitor', u: 0.70, v: 0.06, face: 'down',  name: 'Monitors Facing Inward'},
  {kind: 'monitor', u: 0.90, v: 0.06, face: 'down',  name: 'Monitors Facing Inward'},
  {kind: 'monitor', u: 0.06, v: 0.62, face: 'right', name: 'Monitors Facing Inward'},
  {kind: 'monitor', u: 0.94, v: 0.62, face: 'left',  name: 'Monitors Facing Inward'},
  {kind: 'monitor', u: 0.30, v: 0.94, face: 'up',    name: 'Monitors Facing Inward'},
  {kind: 'monitor', u: 0.70, v: 0.94, face: 'up',    name: 'Monitors Facing Inward'},

  // Four seating clusters, each near a monitor group but angled toward the middle.
  {kind: 'seating', u: 0.20, v: 0.24, name: 'Seating Arrangement'},
  {kind: 'seating', u: 0.80, v: 0.24, name: 'Seating Arrangement'},
  {kind: 'seating', u: 0.20, v: 0.80, name: 'Seating Arrangement'},
  {kind: 'seating', u: 0.80, v: 0.80, name: 'Seating Arrangement'},

  // Power strips on the wall beneath each monitor cluster.
  {kind: 'power', u: 0.20, v: 0.02, name: 'Power Strip Placement'},
  {kind: 'power', u: 0.80, v: 0.02, name: 'Power Strip Placement'},
  {kind: 'power', u: 0.02, v: 0.70, name: 'Power Strip Placement'},
  {kind: 'power', u: 0.98, v: 0.70, name: 'Power Strip Placement'},
  {kind: 'power', u: 0.50, v: 0.98, name: 'Power Strip Placement'},

  {kind: 'table',   u: 0.50, v: 0.52, name: 'Center Table Design'},
  {kind: 'cards',   u: 0.50, v: 0.52, name: 'Challenge Card Display'},
  {kind: 'storage', u: 0.09, v: 0.90, name: 'Storage For Kits'}
];

const INFO = {
  'Monitors Facing Inward': {
    color: C_MONITOR,
    what: 'Eight workstations sit against the walls with every screen turned ' +
          'in toward the middle of the room.',
    why: 'An adult standing anywhere near the centre is in front of all eight ' +
         'screens at once. Turn a monitor to face the wall and the only place ' +
         'it can be read from is directly behind the student — which means ' +
         'supervision becomes a lap of the room, and nobody does that often ' +
         'enough.'
  },
  'Center Table Design': {
    color: C_TABLE,
    what: 'One large table in the middle of the room, kept clear of computers.',
    why: 'It is where hardware gets built, where a demo gets shown to everyone ' +
         'at once, and where a mentor stands to keep every screen in view.'
  },
  'Challenge Card Display': {
    color: C_TABLE,
    what: 'A rack of printed challenge cards laid out on the centre table.',
    why: 'A student who finishes early walks to the middle of the room and ' +
         'picks up the next thing to do, instead of waiting for a mentor to ' +
         'notice they are idle.'
  },
  'Seating Arrangement': {
    color: C_SEATING,
    what: 'Chairs in clusters of three or four, near the perimeter monitors but ' +
          'angled toward each other and toward the centre table.',
    why: 'Pairs and small groups form without moving furniture, and no chair ' +
         'has its back to the centre — which is where announcements and demos ' +
         'happen.'
  },
  'Power Strip Placement': {
    color: C_POWER,
    what: 'Surge-protected strips mounted on the wall beneath each monitor ' +
          'cluster.',
    why: 'Every device reaches a socket without a cable leaving the wall. One ' +
         'strip in the middle of the room would force cables across the floor.'
  },
  'Cable Management': {
    color: C_POWER,
    what: 'Cable runs follow the baseboard around the perimeter.',
    why: 'A cable across open floor is the most common injury in a club room ' +
         'and the fastest way to pull a monitor off a desk. Turn on Show Cable ' +
         'Routes and check that none of them cross the middle.'
  },
  'Storage For Kits': {
    color: C_STORAGE,
    what: 'A shelf of labelled bins beside the entrance holding kits, spares, ' +
          'and tools.',
    why: 'By the door means setup and pack-down happen without walking through ' +
         'the working area, and a mentor can check what is missing on the way ' +
         'out.'
  }
};

const LEGEND = [
  ['Monitor', C_MONITOR], ['Centre table', C_TABLE], ['Seating', C_SEATING],
  ['Power strip', C_POWER], ['Storage', C_STORAGE]
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  resetButton = createButton('Reset');
  resetButton.position(10, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  cableCheckbox = createCheckbox(' Show cable routes', false);
  cableCheckbox.position(80, drawHeight + 8);

  sightlineCheckbox = createCheckbox(' Show sightlines', false);
  sightlineCheckbox.position(240, drawHeight + 8);

  describe('A top-down floor plan of a coding club room. Eight monitors sit ' +
    'around the perimeter with screens facing inward, four seating clusters are ' +
    'angled toward a large centre table holding challenge cards, power strips ' +
    'line the walls, and a storage shelf stands by the entrance. Clicking any ' +
    'element explains what it is and why it is placed there. Toggles draw the ' +
    'cable routes along the baseboard and sightlines from a draggable mentor ' +
    'marker to every screen, marking each screen readable or too far off-axis.');
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
  text('Coding Club Room Layout', canvasWidth / 2, 8);

  computeRoom();
  drawRoom();
  if (cableCheckbox.checked()) drawCables();
  drawElements();
  if (sightlineCheckbox.checked()) drawSightlines();
  drawMentor();
  drawLegend();
  drawPanel();

  cursor(draggingMentor || overMentor() || elementUnderMouse() ? HAND : ARROW);
}

// The plan keeps a 3:2 aspect ratio, and the info panel drops to a strip under
// the title when the canvas gets too narrow to carry both side by side.
function computeRoom() {
  const wide = canvasWidth >= PANEL_MIN_CANVAS;
  const availW = canvasWidth - margin * 2 - (wide ? PANEL_W + margin : 0);
  const top = TITLE_H + (wide ? 0 : 74);
  const availH = drawHeight - top - 34;      // 34 leaves room for the legend
  const w = min(availW, availH * 1.5);
  const h = w / 1.5;
  room = {x: margin + (availW - w) / 2, y: top + (availH - h) / 2, w: w, h: h,
          wide: wide};
}

function rx(u) { return room.x + u * room.w; }
function ry(v) { return room.y + v * room.h; }

function drawRoom() {
  push();
  fill('white');
  stroke('#5B7186');
  strokeWeight(3);
  rect(room.x, room.y, room.w, room.h, 4);

  // The doorway, in the wall the storage shelf sits beside.
  stroke('aliceblue');
  strokeWeight(5);
  line(room.x, ry(0.80), room.x, ry(0.97));
  pop();

  noStroke();
  fill('#7A8A99');
  textAlign(LEFT, CENTER);
  textSize(12);
  textSize(11);
  text('entrance', room.x + 8, ry(0.78));
}

// Cable runs follow the baseboard. Drawn as a dashed perimeter rectangle just
// inside the walls so it is obvious nothing crosses the middle.
function drawCables() {
  const inset = 7;
  push();
  stroke(C_POWER);
  strokeWeight(2.5);
  drawingContext.setLineDash([7, 6]);
  noFill();
  rect(room.x + inset, room.y + inset, room.w - inset * 2, room.h - inset * 2, 4);
  drawingContext.setLineDash([]);
  pop();

  noStroke();
  fill(C_POWER);
  textAlign(CENTER, TOP);
  textSize(12);
  text('cable runs follow the baseboard — nothing crosses open floor',
       room.x + room.w / 2, room.y + room.h + 6);
}

function drawElements() {
  for (const e of ELEMENTS) {
    const on = selected && selected.name === e.name;
    if (e.kind === 'monitor') drawMonitor(e, on);
    else if (e.kind === 'seating') drawSeating(e, on);
    else if (e.kind === 'power') drawPower(e, on);
    else if (e.kind === 'table') drawTable(e, on);
    else if (e.kind === 'cards') drawCards(e, on);
    else if (e.kind === 'storage') drawStorage(e, on);
  }
}

// A monitor is drawn as its desk plus a thick bar on the screen side, so the
// direction it faces is visible at a glance rather than needing a label.
function drawMonitor(e, on) {
  const w = room.w * 0.075, h = room.h * 0.055;
  const vert = e.face === 'left' || e.face === 'right';
  const bw = vert ? h : w, bh = vert ? w : h;
  const x = rx(e.u), y = ry(e.v);

  push();
  rectMode(CENTER);
  stroke(on ? 'black' : '#8AA6BF');
  strokeWeight(on ? 2.5 : 1);
  fill('#E4EDF5');
  rect(x, y, bw, bh, 2);

  // the screen face
  noStroke();
  fill(C_MONITOR);
  const t = 4;
  if (e.face === 'down')  rect(x, y + bh / 2 - t / 2, bw, t);
  if (e.face === 'up')    rect(x, y - bh / 2 + t / 2, bw, t);
  if (e.face === 'right') rect(x + bw / 2 - t / 2, y, t, bh);
  if (e.face === 'left')  rect(x - bw / 2 + t / 2, y, t, bh);
  pop();
}

function drawSeating(e, on) {
  const r = room.w * 0.015;
  const x = rx(e.u), y = ry(e.v);
  // Chairs sit on an arc on the far side of the cluster and face the centre of
  // the room, which is what "angled toward each other and toward the table"
  // looks like from above. The seat back is drawn on the outside edge.
  const toward = atan2(ry(0.52) - y, rx(0.5) - x);
  push();
  for (let i = 0; i < 4; i++) {
    const a = toward + PI + (i - 1.5) * 0.85;
    const cx = x + cos(a) * r * 3.6;
    const cy = y + sin(a) * r * 3.6;
    stroke(on ? 'black' : C_SEATING);
    strokeWeight(on ? 2 : 1);
    fill(on ? C_SEATING : '#D7EDE0');
    circle(cx, cy, r * 2);
    // seat back, on the side away from the room centre
    noFill();
    stroke(on ? 'black' : C_SEATING);
    strokeWeight(2);
    arc(cx, cy, r * 2.4, r * 2.4, a - 0.7, a + 0.7);
  }
  pop();
}

function drawPower(e, on) {
  const s = room.w * 0.022;
  push();
  rectMode(CENTER);
  stroke(on ? 'black' : C_POWER);
  strokeWeight(on ? 2 : 1);
  fill(C_POWER);
  rect(rx(e.u), ry(e.v), s * 1.8, s, 2);
  pop();
}

function drawTable(e, on) {
  push();
  rectMode(CENTER);
  stroke(on ? 'black' : '#C98A15');
  strokeWeight(on ? 3 : 1.5);
  fill('#FCEBCB');
  rect(rx(e.u), ry(e.v), room.w * 0.30, room.h * 0.24, 6);
  pop();
  noStroke();
  fill('#8A6410');
  textAlign(CENTER, CENTER);
  textSize(min(13, room.w * 0.018));
  text('centre table', rx(e.u), ry(e.v) - room.h * 0.075);
}

function drawCards(e, on) {
  const n = 4;
  const cw = room.w * 0.030, ch = room.h * 0.055;
  push();
  rectMode(CENTER);
  for (let i = 0; i < n; i++) {
    stroke(on ? 'black' : '#C98A15');
    strokeWeight(on ? 2 : 1);
    fill(on ? C_TABLE : 'white');
    rect(rx(e.u) + (i - (n - 1) / 2) * cw * 1.25, ry(e.v) + room.h * 0.02,
         cw, ch, 2);
  }
  pop();
}

function drawStorage(e, on) {
  push();
  rectMode(CENTER);
  stroke(on ? 'black' : C_STORAGE);
  strokeWeight(on ? 2.5 : 1.5);
  fill('#E4DEF2');
  rect(rx(e.u), ry(e.v), room.w * 0.07, room.h * 0.09, 3);
  stroke(C_STORAGE);
  strokeWeight(1);
  for (let i = 1; i < 3; i++) {
    const yy = ry(e.v) - room.h * 0.045 + (room.h * 0.09 * i) / 3;
    line(rx(e.u) - room.w * 0.035, yy, rx(e.u) + room.w * 0.035, yy);
  }
  pop();
}

// An LCD is only legible from in front of it. Past roughly 70 degrees off the
// screen normal it washes out, and from behind there is nothing to see at all.
// So a sightline counts when the mentor stands inside the screen's viewing cone
// -- which is precisely the property "monitors facing inward" is bought with.
const VIEW_CONE_DEG = 70;

const FACE_NORMAL = {
  down: {x: 0, y: 1}, up: {x: 0, y: -1},
  right: {x: 1, y: 0}, left: {x: -1, y: 0}
};

function screenReadable(e) {
  // Work in room proportions, not the 0-1 coordinates: the room is 3:2, so a
  // unit step across is 1.5 times a unit step down.
  const dx = (mentor.u - e.u) * 1.5;
  const dy = (mentor.v - e.v);
  const len = sqrt(dx * dx + dy * dy);
  if (len < 1e-4) return true;
  const n = FACE_NORMAL[e.face];
  const cosang = (dx * n.x + dy * n.y) / len;
  return degrees(acos(constrain(cosang, -1, 1))) <= VIEW_CONE_DEG;
}

function drawSightlines() {
  const mx = rx(mentor.u), my = ry(mentor.v);
  let blocked = 0;
  push();
  for (const e of ELEMENTS) {
    if (e.kind !== 'monitor') continue;
    const clear = screenReadable(e);
    if (!clear) blocked++;
    stroke(clear ? color(74, 144, 217, 120) : color(214, 69, 69, 190));
    strokeWeight(clear ? 1.5 : 2);
    if (!clear) drawingContext.setLineDash([5, 5]);
    line(mx, my, rx(e.u), ry(e.v));
    drawingContext.setLineDash([]);
  }
  pop();

  noStroke();
  fill(blocked ? C_POWER : '#2E7D4F');
  textAlign(CENTER, TOP);
  textSize(13);
  text(blocked === 0
        ? 'All 8 screens readable from here'
        : blocked + ' of 8 screens too far off-axis to read from here',
       room.x + room.w / 2, room.y - 20);
}

function drawMentor() {
  const x = rx(mentor.u), y = ry(mentor.v);
  const r = min(15, room.w * 0.022);
  push();
  noStroke();
  fill(0, 0, 0, 40);
  circle(x + 2, y + 3, r * 2);
  fill('#1F3D5A');
  circle(x, y, r * 2);
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(r * 1.1);
  text('M', x, y + 1);
  pop();

  if (sightlineCheckbox.checked()) {
    noStroke();
    fill('#1F3D5A');
    textAlign(CENTER, TOP);
    textSize(11);
    text('drag me', x, y + r + 3);
  }
}

function drawLegend() {
  const y = room.y + room.h + (cableCheckbox.checked() ? 24 : 8);
  let x = room.x;
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(12);
  for (const [label, col] of LEGEND) {
    fill(col);
    rect(x, y + 3, 11, 11, 2);
    fill('#4A5A68');
    text(label, x + 16, y + 9);
    x += 22 + textWidth(label);
  }
}

function drawPanel() {
  const wide = room.wide;
  const px = wide ? canvasWidth - margin - PANEL_W : margin;
  const py = wide ? TITLE_H + 4 : TITLE_H + 2;
  const pw = wide ? PANEL_W : canvasWidth - margin * 2;
  const ph = wide ? drawHeight - py - 12 : 66;

  noStroke();
  fill('white');
  rect(px, py, pw, ph, 8);

  textAlign(LEFT, TOP);
  if (!selected) {
    fill('#5B7186');
    textSize(14);
    text('Click any element on the plan — a monitor, the centre table, a ' +
         'seating cluster, a power strip, or the storage shelf — to see what ' +
         'it is and why it goes there.',
         px + 14, py + 12, pw - 28, ph - 24);
    return;
  }

  const info = INFO[selected.name];
  fill(info.color);
  rect(px, py, pw, 5, 3);
  textSize(16);
  text(selected.name, px + 14, py + 16, pw - 28);

  const nameH = wide ? 46 : 20;
  fill('black');
  textSize(13);
  text(info.what, px + 14, py + 16 + nameH, pw - 28, ph - nameH - 40);

  if (wide) {
    fill('#4A5A68');
    textSize(13);
    text('Why here: ' + info.why, px + 14, py + 150, pw - 28, ph - 164);
  }
}

// Hit testing walks the list backwards so the small things drawn last (cards,
// storage) win over the large things drawn under them.
function elementUnderMouse() {
  for (let i = ELEMENTS.length - 1; i >= 0; i--) {
    const e = ELEMENTS[i];
    const x = rx(e.u), y = ry(e.v);
    let hw, hh;
    if (e.kind === 'monitor') {
      const vert = e.face === 'left' || e.face === 'right';
      hw = (vert ? room.h * 0.055 : room.w * 0.075) / 2 + 3;
      hh = (vert ? room.w * 0.075 : room.h * 0.055) / 2 + 3;
    } else if (e.kind === 'seating') { hw = room.w * 0.055; hh = room.w * 0.055; }
    else if (e.kind === 'power')     { hw = room.w * 0.025; hh = room.w * 0.020; }
    else if (e.kind === 'cards')     { hw = room.w * 0.075; hh = room.h * 0.045; }
    else if (e.kind === 'table')     { hw = room.w * 0.15;  hh = room.h * 0.12; }
    else                             { hw = room.w * 0.04;  hh = room.h * 0.05; }
    if (abs(mouseX - x) < hw && abs(mouseY - y) < hh) return e;
  }
  return null;
}

function overMentor() {
  const r = min(15, room.w * 0.022) + 4;
  return dist(mouseX, mouseY, rx(mentor.u), ry(mentor.v)) < r;
}

function mousePressed() {
  if (overMentor()) { draggingMentor = true; return; }
  const e = elementUnderMouse();
  if (e) selected = e;
}

function mouseDragged() {
  if (!draggingMentor) return;
  mentor.u = constrain((mouseX - room.x) / room.w, 0.03, 0.97);
  mentor.v = constrain((mouseY - room.y) / room.h, 0.03, 0.97);
}

function mouseReleased() { draggingMentor = false; }

function resetSimulation() {
  selected = null;
  mentor = {u: 0.5, v: 0.70};
  cableCheckbox.checked(false);
  sightlineCheckbox.checked(false);
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
