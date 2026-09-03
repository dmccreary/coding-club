// Email List Segments Venn
// CANVAS_HEIGHT: 580
// Bloom: Analyze (L4), verb "differentiate"
//
// Four segments a club actually mails, drawn so the overlaps that exist are
// visible and the one that does not exist is visibly absent.
//
// Two facts about the shape carry the whole lesson:
//
//   Active Families and Waitlist do NOT overlap. A contact is in exactly one
//   of them, and moving between them is an event with a date on it. If your
//   list has somebody in both, one of the two is stale.
//
//   Active Families and Mentors DO overlap, because a parent who also mentors
//   is one person with one address. Send the parent newsletter and the mentor
//   briefing separately and they get two emails; forget they are in both and
//   they get neither.
//
// Click a region -- including an overlap -- for what it is and what you would
// actually send to it.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 500;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 42;
const INFO_H = 104;

// ---- Controls --------------------------------------------------------------
let highlightButton, resetButton;

// ---- State -----------------------------------------------------------------
let selected = null;
let flash = 0;               // frames left of the overlap highlight
let circles = [];

// Positions are fractions of the drawing box, chosen so Active and Waitlist
// never touch while Mentors reaches both Active and Alumni.
const SEGMENTS = [
  {key: 'active', name: 'Active Families', color: '#4A90D9',
   u: 0.26, v: 0.34, r: 0.22,
   what: 'Every family with a student currently attending.',
   send: 'Session reminders, closure notices, showcase invitations, the ' +
         'termly newsletter.'},
  {key: 'mentors', name: 'Mentors', color: '#3E9E6E',
   u: 0.46, v: 0.60, r: 0.20,
   what: 'Adults who run or help run sessions.',
   send: 'Rota changes, the week\'s activity plan, safeguarding reminders, ' +
         'kit prep notes.'},
  {key: 'waitlist', name: 'Waitlist', color: '#F5A623',
   u: 0.86, v: 0.24, r: 0.17,
   what: 'Families who have asked to join and have not got a place yet.',
   send: 'Honest position updates and open-day invitations. Nothing that ' +
         'reads as if they are already members.'},
  {key: 'alumni', name: 'Alumni', color: '#8E7CC3',
   u: 0.44, v: 0.92, r: 0.18,
   what: 'Families whose student has moved on.',
   send: 'Once or twice a year: the annual showcase, a fundraising ask, a ' +
         'call for mentors.'}
];

// Overlaps that exist on purpose, and the one that must not.
const OVERLAPS = {
  'active+mentors': {
    name: 'Active Families ∩ Mentors',
    what: 'A parent who also mentors — one person, one address, two roles.',
    send: 'Both mailings, and that is fine as long as you know it. The ' +
          'failure is assuming somebody else covered them, so they get the ' +
          'mentor rota and never hear the session is cancelled.'},
  'mentors+alumni': {
    name: 'Mentors ∩ Alumni',
    what: 'A former family member who stayed on to mentor after their own ' +
          'student left. Small group, and usually your most reliable one.',
    send: 'Mentor mail, obviously. Keep them on alumni mail too — they are ' +
          'the people most likely to answer a fundraising ask.'}
};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  highlightButton = createButton('Highlight overlaps');
  highlightButton.position(10, drawHeight + 8);
  highlightButton.mousePressed(() => { flash = 150; });

  resetButton = createButton('Clear selection');
  resetButton.position(160, drawHeight + 8);
  resetButton.mousePressed(() => { selected = null; flash = 0; });

  describe('Four overlapping circles for a club\'s email segments: active ' +
    'families, mentors, waitlist, and alumni. Mentors overlaps both active ' +
    'families and alumni; active families and waitlist do not overlap at all, ' +
    'because a contact is in exactly one of the two. Clicking any region, ' +
    'including an overlap, names the segments it represents and gives an ' +
    'example of what would be sent to it.');
}

function draw() {
  updateCanvasSize();
  if (flash > 0) flash--;

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Email List Segments', canvasWidth / 2, 8);

  drawVenn(margin, TITLE_H, canvasWidth - margin * 2,
           drawHeight - TITLE_H - INFO_H - 8);
  drawInfo(margin, drawHeight - INFO_H, canvasWidth - margin * 2, INFO_H - 10);
  drawControlLabels();

  cursor(regionUnderMouse() ? HAND : ARROW);
}

function drawVenn(x, y, w, h) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 10);

  // One scale for both axes, or the u/v distances stop meaning what they look
  // like and circles that should clear each other do not.
  const diagW = w * 0.62;
  const scale = min(diagW * 0.78, (h - 24) / 1.12);
  const cx = x + diagW / 2 - scale * 0.53;
  const cy = y + 12;
  drawShapeNotes(x + diagW, y + 16, w - diagW - 16, h - 32);
  circles = SEGMENTS.map(s => ({
    key: s.key, seg: s,
    x: cx + s.u * scale, y: cy + s.v * scale, r: s.r * scale
  }));

  push();
  for (const c of circles) {
    const on = selected === c.key;
    const col = color(c.seg.color);
    noStroke();
    fill(red(col), green(col), blue(col), on ? 105 : 62);
    circle(c.x, c.y, c.r * 2);
    noFill();
    stroke(red(col), green(col), blue(col), on ? 255 : 150);
    strokeWeight(on ? 3.5 : 2);
    circle(c.x, c.y, c.r * 2);
  }

  // The two intended overlaps, flashed on request.
  if (flash > 0 && (floor(flash / 12) % 2 === 0)) {
    for (const key of ['active+mentors', 'mentors+alumni']) {
      const [a, b] = key.split('+').map(k => circles.find(c => c.key === k));
      const mid = {x: (a.x + b.x) / 2, y: (a.y + b.y) / 2};
      noFill();
      stroke('#D64545');
      strokeWeight(3);
      circle(mid.x, mid.y, 42);
    }
  }
  pop();

  // Labels go OUTSIDE each circle, pushed radially away from the middle of the
  // group, so no label ever sits on an overlap region.
  const gx = circles.reduce((a, c) => a + c.x, 0) / circles.length;
  const gy = circles.reduce((a, c) => a + c.y, 0) / circles.length;
  noStroke();
  textSize(14);
  for (const c of circles) {
    const ang = atan2(c.y - gy, c.x - gx);
    const lx = c.x + cos(ang) * (c.r + 14);
    const ly = c.y + sin(ang) * (c.r + 14);
    fill(c.seg.color);
    textAlign(cos(ang) > 0.25 ? LEFT : cos(ang) < -0.25 ? RIGHT : CENTER,
              sin(ang) > 0.25 ? TOP : sin(ang) < -0.25 ? BOTTOM : CENTER);
    text(c.seg.name, lx, ly);
  }

  // The non-overlap, stated where the gap is.
  const a = circles.find(c => c.key === 'active');
  const wl = circles.find(c => c.key === 'waitlist');
  const gapX = (a.x + a.r + wl.x - wl.r) / 2;
  const gapY = (a.y + wl.y) / 2;
  const labelY = min(a.y - a.r, wl.y - wl.r) - 10;
  push();
  stroke('#D64545');
  strokeWeight(1.5);
  drawingContext.setLineDash([4, 4]);
  line(a.x + a.r + 2, gapY, wl.x - wl.r - 2, gapY);
  line(gapX, labelY + 4, gapX, gapY - 4);
  drawingContext.setLineDash([]);
  pop();
  noStroke();
  fill('#C0392B');
  textAlign(CENTER, BOTTOM);
  textSize(11);
  text('never overlap', gapX, labelY);
}

// Which region the pointer is in: the set of circles containing it.
// The three claims the drawing makes, stated in words beside it.
function drawShapeNotes(x, y, w, h) {
  const notes = [
    ['#3E9E6E', 'Active ∩ Mentors',
     'A parent who also mentors is one contact in two segments.'],
    ['#8E7CC3', 'Mentors ∩ Alumni',
     'A former family member who stayed on. Small, and your most reliable.'],
    ['#D64545', 'Active and Waitlist never meet',
     'A contact is in exactly one. In both means one list is stale.']
  ];
  noStroke();
  fill('#8AA6BF');
  textAlign(LEFT, TOP);
  textSize(12);
  text('WHAT THE SHAPE SAYS', x, y);
  for (let i = 0; i < notes.length; i++) {
    const ny = y + 26 + i * 74;
    fill(notes[i][0]);
    rect(x, ny + 2, 4, 56, 2);
    textSize(14);
    text(notes[i][1], x + 14, ny, w - 20);
    fill('#4A5A68');
    textSize(12);
    text(notes[i][2], x + 14, ny + 22, w - 20, 44);
  }
}

function regionUnderMouse() {
  const inside = circles.filter(c => dist(mouseX, mouseY, c.x, c.y) < c.r);
  if (inside.length === 0) return null;
  if (inside.length === 1) return {kind: 'single', key: inside[0].key};
  const key = inside.map(c => c.key).sort().join('+');
  return {kind: 'overlap', key: key};
}

function drawInfo(x, y, w, h) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 8);

  if (!selected) {
    fill('#5B7186');
    textAlign(LEFT, TOP);
    textSize(14);
    text('Click any circle, or any place two circles overlap, to see which ' +
         'segment or segments it represents and what you would actually send ' +
         'to it. Highlight overlaps flashes the two that exist.',
         x + 16, y + 14, w - 32, h - 24);
    return;
  }

  const seg = SEGMENTS.find(s => s.key === selected);
  const ov = OVERLAPS[selected];
  const col = seg ? seg.color : '#D64545';
  const name = seg ? seg.name : (ov ? ov.name : selected);
  const what = seg ? seg.what : ov.what;
  const send = seg ? seg.send : ov.send;

  fill(col);
  rect(x, y, 6, h, 3);
  textAlign(LEFT, TOP);
  fill(col);
  textSize(17);
  text(name, x + 20, y + 12);
  fill('#2C3A45');
  textSize(13);
  text(what, x + 20, y + 36, w - 40);
  fill('#4A5A68');
  text('Send: ' + send, x + 20, y + 58, w - 40, h - 68);
}

function drawControlLabels() {
  noStroke();
  fill('dimgray');
  textAlign(LEFT, CENTER);
  textSize(13);
  text('A contact in both Active Families and Waitlist means one of the two ' +
       'lists is out of date.', 10, drawHeight + 58);
}

function mousePressed() {
  const r = regionUnderMouse();
  if (!r) return;
  // Only the two intended overlaps have entries; anything else falls back to
  // the topmost single segment rather than showing an empty panel.
  if (r.kind === 'overlap' && OVERLAPS[r.key]) selected = r.key;
  else if (r.kind === 'overlap') selected = r.key.split('+')[0];
  else selected = r.key;
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
