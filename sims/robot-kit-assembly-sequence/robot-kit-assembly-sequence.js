// Robot Kit Assembly Sequence
// CANVAS_HEIGHT: 500
// Bloom: Apply (L3), verb "sequence"
//
// Six steps, one order that works, and five that end with someone taking the
// chassis apart again.
//
// Every constraint here is mechanical rather than arbitrary: a screw you can no
// longer reach, a wire you can no longer thread, a battery holder that is now
// underneath the board it needs to plug into. That is why "Why this order?"
// matters more than the order itself -- a mentor who knows the reasons can
// adapt when the kit in front of them is not quite this kit.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 420;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 42;

// ---- Controls --------------------------------------------------------------
let checkButton, whyCheckbox, shuffleButton;

// ---- State -----------------------------------------------------------------
let order = [];              // current arrangement, holding STEP indices
let dragIndex = -1;          // which slot is being dragged
let dragX = 0;
let checked = false;
let cardBoxes = [];

// Listed here in the correct order; `order` is what the learner rearranges.
const STEPS = [
  {name: 'Standoffs',  icon: 'standoff',
   why: 'The standoffs bolt on from underneath. Once anything is mounted on ' +
        'top of the chassis you cannot get a screwdriver to them.'},
  {name: 'Chassis mount', icon: 'chassis',
   why: 'The motors bolt to the chassis, and the chassis has to be standing ' +
        'on its standoffs before there is anywhere to bolt them to.'},
  {name: 'Motor wiring', icon: 'motor',
   why: 'Motor wires thread through the chassis holes. Do this before the ' +
        'driver board goes on, while you can still see and reach the holes.'},
  {name: 'Driver board', icon: 'board',
   why: 'The board mounts on top and covers the wiring channel. It goes on ' +
        'after the wires it will hide, and its terminals stay reachable.'},
  {name: 'Battery holder', icon: 'battery',
   why: 'The holder sits under the chassis and plugs up into the driver ' +
        'board. Fit it after the board exists to plug into, before the shell ' +
        'closes over both.'},
  {name: 'Final closure', icon: 'closure',
   why: 'The top shell goes on last, because every screw underneath it is ' +
        'unreachable afterwards. If anything needs testing, test it now.'}
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  checkButton = createButton('Check order');
  checkButton.position(10, drawHeight + 8);
  checkButton.mousePressed(() => { checked = true; });

  shuffleButton = createButton('Shuffle again');
  shuffleButton.position(112, drawHeight + 8);
  shuffleButton.mousePressed(shuffleCards);

  whyCheckbox = createCheckbox(' Why this order?', false);
  whyCheckbox.position(232, drawHeight + 10);

  shuffleCards();

  describe('Six numbered assembly step cards for a robot kit — standoffs, ' +
    'chassis mount, motor wiring, driver board, battery holder, and final ' +
    'closure — that the learner drags into the correct build order. A check ' +
    'control marks each card green or red against the correct sequence, and a ' +
    'toggle reveals the mechanical reason each step has to come before the ' +
    'next.');
}

// A shuffle that is guaranteed not to hand back the correct order.
// Named shuffleCards, not shuffle: p5 has its own global shuffle(array)
// and installs it after this script is parsed, so it would win.
function shuffleCards() {
  do {
    order = [0, 1, 2, 3, 4, 5];
    for (let i = order.length - 1; i > 0; i--) {
      const j = floor(random(i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
  } while (isCorrect());
  checked = false;
}

function isCorrect() {
  return order.every((v, i) => v === i);
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
  text('Robot Kit Assembly Sequence', canvasWidth / 2, 8);

  drawCards(margin, TITLE_H + 24, canvasWidth - margin * 2,
            drawHeight - TITLE_H - 70);
  drawVerdict();
  drawControlLabels();

  cursor(dragIndex >= 0 || cardUnderMouse() >= 0 ? HAND : ARROW);
}

function drawCards(x, y, w, h) {
  const n = STEPS.length;
  const cw = w / n;
  const cardW = cw - 10;
  const cardH = whyCheckbox.checked() ? h : min(h, 200);
  cardBoxes = [];

  noStroke();
  fill('#8AA6BF');
  textAlign(LEFT, BOTTOM);
  textSize(12);
  text('first', x, y - 6);
  textAlign(RIGHT, BOTTOM);
  text('last', x + w, y - 6);

  for (let slot = 0; slot < n; slot++) {
    const stepIdx = order[slot];
    const st = STEPS[stepIdx];
    const isDragging = dragIndex === slot;
    const bx = isDragging ? dragX - cardW / 2 : x + slot * cw + 5;
    const by = y + (isDragging ? -6 : 0);
    cardBoxes.push({x: x + slot * cw + 5, y: y, w: cardW, h: cardH,
                    slot: slot});

    // Correct means "this step is in the slot it belongs in".
    const right = stepIdx === slot;
    push();
    if (isDragging) {
      noStroke();
      fill(0, 0, 0, 30);
      rect(bx + 3, by + 5, cardW, cardH, 10);
    }
    noStroke();
    fill('white');
    rect(bx, by, cardW, cardH, 10);
    if (checked) {
      fill(right ? '#3E9E6E' : '#D64545');
      rect(bx, by, cardW, 6, 3);
    } else {
      fill('#B8C4CE');
      rect(bx, by, cardW, 6, 3);
    }
    pop();

    noStroke();
    fill('#8AA6BF');
    textAlign(LEFT, TOP);
    textSize(13);
    text(slot + 1, bx + 10, by + 12);

    push();
    translate(bx + cardW / 2, by + 54);
    drawStepIcon(st.icon, min(28, cardW * 0.30),
                 checked ? (right ? '#3E9E6E' : '#D64545') : '#4A90D9');
    pop();

    fill('#2C3A45');
    textAlign(CENTER, TOP);
    textSize(13);
    text(st.name, bx + 6, by + 88, cardW - 12);

    if (whyCheckbox.checked()) {
      fill('#4A5A68');
      textAlign(LEFT, TOP);
      textSize(11);
      text(st.why, bx + 10, by + 128, cardW - 20, cardH - 138);
    }
  }
}

// Small line icons, drawn centred on the origin.
function drawStepIcon(kind, r, col) {
  push();
  stroke(col);
  strokeWeight(2.5);
  noFill();
  if (kind === 'standoff') {
    for (const dx of [-r * 0.6, r * 0.6]) {
      line(dx, -r, dx, r * 0.6);
      circle(dx, r * 0.8, r * 0.5);
    }
  } else if (kind === 'chassis') {
    rect(-r, -r * 0.5, r * 2, r, 3);
    line(-r * 1.3, r * 0.4, r * 1.3, r * 0.4);
  } else if (kind === 'motor') {
    fill(col);
    noStroke();
    rect(-r * 0.9, -r * 0.5, r * 1.2, r, 2);
    noFill();
    stroke(col);
    line(r * 0.3, -r * 0.2, r * 1.1, -r * 0.6);
    line(r * 0.3, r * 0.2, r * 1.1, r * 0.6);
  } else if (kind === 'board') {
    rect(-r, -r * 0.7, r * 2, r * 1.4, 3);
    fill(col);
    noStroke();
    rect(-r * 0.3, -r * 0.25, r * 0.6, r * 0.5, 1);
  } else if (kind === 'battery') {
    rect(-r, -r * 0.55, r * 1.8, r * 1.1, 3);
    fill(col);
    noStroke();
    rect(r * 0.8, -r * 0.22, r * 0.25, r * 0.44, 1);
  } else {
    // closure: a lid dropping onto a base
    line(-r, r * 0.5, r, r * 0.5);
    fill(col);
    noStroke();
    rect(-r * 0.9, -r * 0.6, r * 1.8, r * 0.5, 2);
    triangle(0, r * 0.3, -r * 0.3, -r * 0.05, r * 0.3, -r * 0.05);
  }
  pop();
}

function drawVerdict() {
  const y = drawHeight - 38;
  noStroke();
  textAlign(LEFT, TOP);
  textSize(14);

  if (!checked) {
    fill('#5B7186');
    text('Drag the cards into the order you would actually build the kit, then ' +
         'press Check order.', margin, y);
    return;
  }

  const wrong = order.filter((v, i) => v !== i).length;
  fill(wrong === 0 ? '#2E7D4F' : '#C0392B');
  textSize(16);
  text(wrong === 0
        ? '✓ That is the order. Every step leaves the next one reachable.'
        : '✗ ' + wrong + ' card' + (wrong === 1 ? '' : 's') +
          ' out of place — turn on Why this order? for the mechanical reason.',
       margin, y);
}

function drawControlLabels() {
  noStroke();
  fill('dimgray');
  textAlign(LEFT, CENTER);
  textSize(13);
  text('The rule behind all six: never fit something that blocks access to a ' +
       'fastener you still need.', 10, drawHeight + 58);
}

function cardUnderMouse() {
  for (const b of cardBoxes) {
    if (mouseX > b.x && mouseX < b.x + b.w &&
        mouseY > b.y && mouseY < b.y + b.h) return b.slot;
  }
  return -1;
}

function mousePressed() {
  const s = cardUnderMouse();
  if (s >= 0) { dragIndex = s; dragX = mouseX; }
}

function mouseDragged() {
  if (dragIndex < 0) return;
  dragX = mouseX;
  // Swap with whichever slot the card is now over, so the row reflows live.
  const over = cardUnderMouse();
  if (over >= 0 && over !== dragIndex) {
    [order[dragIndex], order[over]] = [order[over], order[dragIndex]];
    dragIndex = over;
    checked = false;
  }
}

function mouseReleased() { dragIndex = -1; }

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
