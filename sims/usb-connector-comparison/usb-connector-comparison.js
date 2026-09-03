// USB Connector Comparison
// CANVAS_HEIGHT: 540
// Bloom: Analyze (L4), verb "differentiate"
//
// Two plug shapes, three differences that matter on a club bench: which way up
// it goes in, what it plugs into, and how much power it can carry.
//
// Flip It is the point of the whole thing. Rotate a USB-A plug 180 degrees and
// it does not fit; rotate a USB-C plug and nothing changes. That single
// property is why the newer connector exists and why a box of USB-C cables
// saves a mentor more session time than any other cable decision.

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
const INFO_H = 104;

// ---- Controls --------------------------------------------------------------
let flipAButton, flipCButton, resetButton;

// ---- State -----------------------------------------------------------------
let selected = null;         // {plug, i}
let flip = {a: 0, c: 0};     // current rotation in degrees
let target = {a: 0, c: 0};   // where it is rotating to
let hotspots = [];

const PLUGS = {
  a: {
    name: 'USB-A',
    color: '#4A90D9',
    reversible: false,
    verdict: 'Rotated 180° it will not go in. There is a plastic tongue on ' +
             'one side of the socket and a matching gap on one side of the ' +
             'plug, and they have to line up.',
    callouts: [
      {label: 'Rectangular, one way up',
       text: 'The flat rectangular shell fits its socket in exactly one ' +
             'orientation. The tongue inside the plug sits on the side with ' +
             'the USB logo, and that side faces up on a horizontal port — ' +
             'which is the rule everybody forgets under a desk.'},
      {label: 'The host end',
       text: 'USB-A is almost always the computer or hub end of a cable. If ' +
             'a cable has a USB-A plug, that plug is the one that goes into ' +
             'the thing supplying power.'},
      {label: 'Usually about 5 V, 0.5–2.4 A',
       text: 'A plain USB-A port supplies 5 V and somewhere between half an ' +
             'amp and a couple of amps. Enough for a Pico, a keyboard, or a ' +
             'small sensor board; not enough for motors, which is why motor ' +
             'projects need their own supply.'}
    ]
  },
  c: {
    name: 'USB-C',
    color: '#3E9E6E',
    reversible: true,
    verdict: 'Rotated 180° it still fits. The connector is symmetrical and ' +
             'the pins are duplicated on both sides, so there is no wrong way ' +
             'up.',
    callouts: [
      {label: 'Oval, reversible',
       text: 'The shell is symmetrical and the contacts are mirrored top and ' +
             'bottom, so either orientation works. On a bench with twenty ' +
             'students plugging things in, this removes a whole category of ' +
             '"it is not working".'},
      {label: 'Either end of the cable',
       text: 'USB-C turns up on both hosts and devices, and a C-to-C cable ' +
             'has no fixed direction. Which end goes where is negotiated ' +
             'electrically rather than fixed by the plug shape.'},
      {label: 'Up to 5 A, and up to 20 V with PD',
       text: 'USB-C can carry far more power, and with Power Delivery it can ' +
             'negotiate higher voltages. Worth knowing that the cable matters: ' +
             'a cheap C cable may only be rated for the basic 3 A, and it ' +
             'looks identical to one that is not.'}
    ]
  }
};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  flipAButton = createButton('Flip the USB-A');
  flipAButton.position(10, drawHeight + 8);
  flipAButton.mousePressed(() => { target.a = target.a === 0 ? 180 : 0; });

  flipCButton = createButton('Flip the USB-C');
  flipCButton.position(140, drawHeight + 8);
  flipCButton.mousePressed(() => { target.c = target.c === 0 ? 180 : 0; });

  resetButton = createButton('Reset');
  resetButton.position(272, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  describe('A USB-A plug and a USB-C plug drawn side by side at large scale, ' +
    'each with three numbered callout points covering shape and orientation, ' +
    'which end of a cable it usually is, and how much power it carries. ' +
    'Clicking a callout opens its explanation. A flip control rotates each ' +
    'plug 180 degrees: the USB-C still fits, marked with a green tick, and the ' +
    'USB-A does not, marked with a red cross.');
}

function draw() {
  updateCanvasSize();

  // ease the rotation toward its target
  for (const k of ['a', 'c']) flip[k] = lerp(flip[k], target[k], 0.16);

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('USB Connector Comparison', canvasWidth / 2, 8);

  hotspots = [];
  const half = (canvasWidth - margin * 3) / 2;
  const plotH = drawHeight - TITLE_H - INFO_H - 16;
  drawPlugPanel('a', margin, TITLE_H, half, plotH);
  drawPlugPanel('c', margin * 2 + half, TITLE_H, half, plotH);
  drawInfo(margin, drawHeight - INFO_H, canvasWidth - margin * 2, INFO_H - 12);
  drawControlLabels();

  cursor(hotspotUnderMouse() ? HAND : ARROW);
}

function drawPlugPanel(key, x, y, w, h) {
  const p = PLUGS[key];
  const flipped = abs(flip[key] - 180) < 12;

  noStroke();
  fill('white');
  rect(x, y, w, h, 10);
  fill(p.color);
  rect(x, y, w, 5, 3);

  textAlign(CENTER, TOP);
  fill(p.color);
  textSize(20);
  text(p.name, x + w / 2, y + 14);

  const cx = x + w * 0.40;
  const cy = y + h * 0.45;
  const zoom = min(w * 0.0034, h * 0.0060);

  push();
  translate(cx, cy);
  scale(zoom, zoom * cos(radians(flip[key])));
  if (key === 'a') drawUsbA(); else drawUsbC();
  pop();

  // Flip verdict
  if (flipped) {
    noStroke();
    fill(p.reversible ? '#2E7D4F' : '#C0392B');
    textAlign(CENTER, TOP);
    textSize(30);
    text(p.reversible ? '✓' : '✗', x + w * 0.86, y + h * 0.30);
    textSize(12);
    text(p.reversible ? 'still fits' : 'will not fit', x + w * 0.86,
         y + h * 0.30 + 34);
  }

  // Three numbered callout markers down the right of the drawing.
  for (let i = 0; i < p.callouts.length; i++) {
    const mx = x + w * 0.16 + i * (w * 0.24);
    const my = y + h - 34;
    const on = selected && selected.plug === key && selected.i === i;
    hotspots.push({x: mx, y: my, r: 15, plug: key, i: i});

    noStroke();
    fill(on ? p.color : 'white');
    stroke(p.color);
    strokeWeight(2);
    circle(mx, my, 30);
    noStroke();
    fill(on ? 'white' : p.color);
    textAlign(CENTER, CENTER);
    textSize(15);
    text(i + 1, mx, my + 1);
  }

  noStroke();
  fill('#8AA6BF');
  textAlign(CENTER, BOTTOM);
  textSize(11);
  text('click a number', x + w / 2, y + h - 54);
}

// Both plugs are drawn in a 100-unit-wide local frame and scaled to fit.
function drawUsbA() {
  push();
  // cable boot
  noStroke();
  fill('#5B7186');
  rectMode(CENTER);
  rect(56, 0, 62, 62, 8);
  // metal shell
  fill('#C9D2DA');
  stroke('#8AA6BF');
  strokeWeight(2);
  rect(-6, 0, 86, 46, 2);
  // The plastic tongue sits hard against ONE side of the shell, leaving an
  // obvious empty gap on the other. That gap is the whole reason a USB-A plug
  // only goes in one way up, so it is drawn to be unmissable.
  noStroke();
  fill('#2C3A45');
  rect(-14, 13, 64, 16, 1);
  fill('#E0B44A');
  for (let i = 0; i < 4; i++) rect(-36 + i * 15, 13, 9, 10, 1);
  // the empty half of the shell
  fill('#EDF2F6');
  rect(-14, -10, 64, 14, 1);
  // the USB logo, which is always on the tongue side
  fill('#8AA6BF');
  circle(56, 18, 11);
  pop();
}

function drawUsbC() {
  push();
  noStroke();
  fill('#5B7186');
  rectMode(CENTER);
  rect(56, 0, 62, 62, 8);
  // oval shell, fully symmetrical top to bottom
  fill('#C9D2DA');
  stroke('#8AA6BF');
  strokeWeight(2);
  rect(-6, 0, 86, 34, 17);
  // centre blade with contacts duplicated on BOTH sides
  noStroke();
  fill('#2C3A45');
  rect(-14, 0, 64, 13, 6);
  fill('#E0B44A');
  for (let i = 0; i < 5; i++) {
    rect(-38 + i * 13, -3.5, 7, 4, 1);
    rect(-38 + i * 13, 3.5, 7, 4, 1);
  }
  pop();
}

function drawInfo(x, y, w, h) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 8);

  if (!selected) {
    fill('#5B7186');
    textAlign(LEFT, TOP);
    textSize(14);
    text('Click a numbered point on either connector to read about that ' +
         'difference — or press one of the flip buttons and watch what ' +
         'happens to each plug.',
         x + 16, y + 14, w - 32, h - 24);
    return;
  }

  const p = PLUGS[selected.plug];
  const c = p.callouts[selected.i];
  fill(p.color);
  rect(x, y, 6, h, 3);
  textAlign(LEFT, TOP);
  textSize(17);
  text(p.name + ' — ' + c.label, x + 20, y + 12, w - 40);
  fill('#2C3A45');
  textSize(14);
  text(c.text, x + 20, y + 38, w - 40, h - 46);
}

function drawControlLabels() {
  noStroke();
  fill('dimgray');
  textAlign(LEFT, CENTER);
  textSize(13);
  text('Flipping shows whether the plug still fits its socket upside down.',
       10, drawHeight + 58);
}

function hotspotUnderMouse() {
  for (const h of hotspots) {
    if (dist(mouseX, mouseY, h.x, h.y) < h.r + 4) return h;
  }
  return null;
}

function mousePressed() {
  const h = hotspotUnderMouse();
  if (h) selected = {plug: h.plug, i: h.i};
}

function resetSimulation() {
  selected = null;
  target = {a: 0, c: 0};
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
