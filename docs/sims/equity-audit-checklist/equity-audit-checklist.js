// Equity Audit Checklist
// CANVAS_HEIGHT: 620
// Bloom: Evaluate (L5), verb "assess"
//
// Fifteen items across five categories, each scored absent / partial / present.
// Run it in ten minutes with the club's actual practices in mind.
//
// The design decision that matters is the callout. It always names exactly one
// category AND one item -- never "keep improving", never an overall club
// rating. A single overall score tells a leader they are doing fine or not
// doing fine, and both of those are useless. One named item is something
// somebody can do on Tuesday.
//
// Ties go to the earlier category on purpose. The order below is roughly the
// order in which a fix compounds: what students see in the material, then who
// they see teaching, then who is in the room at all.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 540;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 42;
const STATES = ['Absent', 'Partial', 'Present'];
const STATE_COLOR = ['#D64545', '#F5A623', '#3E9E6E'];

// ---- Controls --------------------------------------------------------------
let resetButton;

// ---- State -----------------------------------------------------------------
let itemBoxes = [];
let headerBoxes = [];

const CATEGORIES = [
  {
    name: 'Curriculum Representation', open: true,
    items: [
      {text: 'Named pioneers in our material include more than one gender ' +
             'and one race.',
       fix: 'Add two named pioneers to the next session\'s slides — not a ' +
            'poster, the actual material students read.', state: 0},
      {text: 'Sample project photos and themes reflect more than one ' +
             'cultural background.',
       fix: 'Swap one project theme in the next challenge card set for one ' +
            'a student suggested.', state: 0}
    ]
  },
  {
    name: 'Mentor Team', open: false,
    items: [
      {text: 'At least one mentor from an underrepresented group leads ' +
             'visible, front-of-room demonstrations, not only support tasks.',
       fix: 'Ask one mentor to run next week\'s opening demo. Who is at the ' +
            'front is what students read as "people like me do this".',
       state: 0},
      {text: 'Our mentor recruiting reaches beyond one existing personal ' +
             'network.',
       fix: 'Post the mentor ask through one organisation nobody on the ' +
            'current team already belongs to.', state: 0}
    ]
  },
  {
    name: 'Community Partnership', open: false,
    items: [
      {text: 'We have an active partnership with at least one faith-based, ' +
             'rural-hub, urban-neighborhood, or immigrant-serving ' +
             'organisation.',
       fix: 'Pick one organisation and attend something of theirs. That is ' +
            'the whole first step.', state: 0},
      {text: 'That partnership involved us showing up and listening before ' +
             'we asked for anything.',
       fix: 'If the first contact was an ask, go back and do the listening ' +
            'part late rather than not at all.', state: 0}
    ]
  },
  {
    name: 'Accessibility', open: false,
    items: [
      {text: 'We have at least one assistive technology option on hand ' +
             '(switch access, text-to-speech, magnification, captions).',
       fix: 'Turn on the operating system\'s built-in magnifier and ' +
            'text-to-speech on every club machine. Costs nothing, takes ten ' +
            'minutes.', state: 0},
      {text: 'A student or family has been asked directly what accommodation ' +
             'would help them, in the last term.',
       fix: 'Add one line to the sign-up form: "Is there anything that would ' +
            'make it easier for your student to take part?"', state: 0}
    ]
  },
  {
    name: 'Marketing Materials', open: false,
    items: [
      {text: 'Our flyers and sign-up materials show diverse, ' +
             'non-stereotyped imagery.',
       fix: 'Look at the current flyer and count who is in the photo. If it ' +
            'is one kind of person, that is the fix.', state: 0},
      {text: 'Our promotional language has been checked by someone outside ' +
             'the existing mentor team.',
       fix: 'Send the flyer to one parent who is not already involved and ' +
            'ask what it makes them think the club is for.', state: 0}
    ]
  }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  resetButton = createButton('Reset audit');
  resetButton.position(10, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  describe('An equity audit checklist with five categories — curriculum ' +
    'representation, mentor team, community partnership, accessibility, and ' +
    'marketing materials — each holding two items scored absent, partial, or ' +
    'present. Category bars fill proportionally and are colour-coded, and a ' +
    'callout always names exactly one category and one specific item as the ' +
    'next thing to do.');
}

function categoryScore(cat) {
  const got = cat.items.reduce((a, it) => a + it.state, 0);
  return {got: got, max: cat.items.length * 2,
          pct: got / (cat.items.length * 2)};
}

// Always one category and one item, never a generic message. Ties go to the
// earlier category, whose order is roughly the order in which a fix compounds.
function weakest() {
  let best = null;
  for (const cat of CATEGORIES) {
    const s = categoryScore(cat);
    if (!best || s.pct < best.pct - 1e-9) {
      const item = cat.items.reduce((lo, it) => it.state < lo.state ? it : lo,
                                    cat.items[0]);
      best = {cat: cat, item: item, pct: s.pct};
    }
  }
  return best;
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
  text('Equity Audit Checklist', canvasWidth / 2, 8);

  const split = canvasWidth * 0.62;
  drawCategories(margin, TITLE_H, split - margin * 2,
                 drawHeight - TITLE_H - 12);
  drawScores(split, TITLE_H, canvasWidth - split - margin,
             drawHeight - TITLE_H - 12);
  drawControlLabels();

  cursor(itemUnderMouse() || headerUnderMouse() ? HAND : ARROW);
}

function drawCategories(x, y, w, h) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 10);

  itemBoxes = [];
  headerBoxes = [];
  let cy = y + 12;

  for (const cat of CATEGORIES) {
    const s = categoryScore(cat);
    headerBoxes.push({x: x + 10, y: cy, w: w - 20, h: 30, cat: cat});

    noStroke();
    fill('#EDF2F6');
    rect(x + 10, cy, w - 20, 30, 5);
    fill(STATE_COLOR[s.pct <= 0.33 ? 0 : s.pct <= 0.66 ? 1 : 2]);
    rect(x + 10, cy, 5, 30, 2);
    fill('#2C3A45');
    textAlign(LEFT, CENTER);
    textSize(14);
    text((cat.open ? '▾ ' : '▸ ') + cat.name, x + 24, cy + 15);
    textAlign(RIGHT, CENTER);
    fill('#5B7186');
    textSize(12);
    text(s.got + ' / ' + s.max, x + w - 22, cy + 15);
    cy += 34;

    if (!cat.open) continue;

    for (const it of cat.items) {
      const rowH = 46;
      itemBoxes.push({x: x + 22, y: cy, w: w - 34, h: rowH, item: it});

      noStroke();
      fill('#F7FAFC');
      rect(x + 22, cy, w - 34, rowH - 4, 4);

      // The state chip, which is also the control: clicking the row cycles it.
      fill(STATE_COLOR[it.state]);
      rect(x + 28, cy + 8, 62, rowH - 20, 4);
      fill('white');
      textAlign(CENTER, CENTER);
      textSize(11);
      text(STATES[it.state], x + 59, cy + 8 + (rowH - 20) / 2);

      fill('#2C3A45');
      textAlign(LEFT, TOP);
      textSize(12);
      text(it.text, x + 98, cy + 6, w - 118, rowH - 10);
      cy += rowH;
    }
    cy += 6;
  }
}

function drawScores(x, y, w, h) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 10);

  textAlign(LEFT, TOP);
  fill('#2C3A45');
  textSize(15);
  text('Score by category', x + 16, y + 12);

  const barH = 16;
  for (let i = 0; i < CATEGORIES.length; i++) {
    const s = categoryScore(CATEGORIES[i]);
    const by = y + 42 + i * 46;
    fill('#5B7186');
    textAlign(LEFT, TOP);
    textSize(11);
    text(CATEGORIES[i].name, x + 16, by);
    textAlign(RIGHT, TOP);
    text(round(s.pct * 100) + '%', x + w - 16, by);

    noStroke();
    fill('#E9EFF5');
    rect(x + 16, by + 16, w - 32, barH, 4);
    fill(STATE_COLOR[s.pct <= 0.33 ? 0 : s.pct <= 0.66 ? 1 : 2]);
    rect(x + 16, by + 16, (w - 32) * s.pct, barH, 4);
  }

  // The callout: one category, one item, one action.
  const wk = weakest();
  const cy = y + 42 + CATEGORIES.length * 46 + 6;
  noStroke();
  fill('#FDF3DF');
  rect(x + 12, cy, w - 24, (y + h) - cy - 12, 8);
  fill('#B8860B');
  rect(x + 12, cy, 5, (y + h) - cy - 12, 3);

  textAlign(LEFT, TOP);
  fill('#B8860B');
  textSize(12);
  text('DO THIS FIRST', x + 26, cy + 10);
  fill('#2C3A45');
  textSize(15);
  text(wk.cat.name, x + 26, cy + 28, w - 44);
  fill('#4A5A68');
  textSize(12);
  text(wk.item.fix, x + 26, cy + 52, w - 44, (y + h) - (cy + 52) - 16);
}

function drawControlLabels() {
  noStroke();
  fill('dimgray');
  textAlign(LEFT, CENTER);
  textSize(13);
  text('Click a category to open it; click any item to cycle absent → ' +
       'partial → present.', 108, drawHeight + 22);
  text('The callout always names one category and one item, because "keep ' +
       'improving" is not an action.', 10, drawHeight + 58);
}

function itemUnderMouse() {
  for (const b of itemBoxes) {
    if (mouseX > b.x && mouseX < b.x + b.w &&
        mouseY > b.y && mouseY < b.y + b.h) return b;
  }
  return null;
}

function headerUnderMouse() {
  for (const b of headerBoxes) {
    if (mouseX > b.x && mouseX < b.x + b.w &&
        mouseY > b.y && mouseY < b.y + b.h) return b;
  }
  return null;
}

function mousePressed() {
  const it = itemUnderMouse();
  if (it) { it.item.state = (it.item.state + 1) % 3; return; }
  const hd = headerUnderMouse();
  if (hd) {
    // One open at a time, so the list never outgrows the panel.
    const wasOpen = hd.cat.open;
    for (const c of CATEGORIES) c.open = false;
    hd.cat.open = !wasOpen;
  }
}

function resetSimulation() {
  for (const c of CATEGORIES) {
    for (const it of c.items) it.state = 0;
    c.open = false;
  }
  CATEGORIES[0].open = true;
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
