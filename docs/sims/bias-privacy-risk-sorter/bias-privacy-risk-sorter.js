// Bias Privacy Risk Sorter
// CANVAS_HEIGHT: 560
// Bloom: Evaluate (L5), verb "classify"
//
// Eight scenarios, four bins, and one distinction that is easy to state and
// hard to apply:
//
//   A BIAS risk is about the answers the tool gives -- who gets recommended
//   what, and whether that pattern tracks something it should not.
//
//   A PRIVACY risk is about the data the tool holds -- what it keeps, where it
//   sends it, and for how long.
//
// They are independent. A tool can be scrupulous about data and still produce
// skewed recommendations; a tool can recommend perfectly and still ship a
// family's address to a server in another country. Two of the eight scenarios
// here are Neither, on purpose -- a sorter where everything is a risk teaches
// suspicion rather than judgement.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 480;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 42;
const ZONES = ['Bias risk', 'Privacy risk', 'Both', 'Neither'];
const ZONE_COLOR = ['#8E7CC3', '#4A90D9', '#D64545', '#3E9E6E'];

// ---- Controls --------------------------------------------------------------
let nextButton, resetButton;

// ---- State -----------------------------------------------------------------
let index = 0;
let placed = -1;             // zone index the card was dropped into
let dragging = false;
let cardPos = null;
let dragOff = {x: 0, y: 0};
let zoneBoxes = [];
let score = 0;
let answered = 0;

const SCENARIOS = [
  {text: 'A matching agent pairs mentors and students along neighbourhood ' +
         'lines nobody asked it to use.',
   answer: 0,
   why: 'The data handling may be spotless. What is wrong is the pattern in ' +
        'the answers: neighbourhood is standing in for something, and the ' +
        'agent found that correlation on its own.'},
  {text: 'A code review tool\'s terms allow it to keep and reuse submitted ' +
         'student code indefinitely.',
   answer: 1,
   why: 'Nothing here is about who gets recommended what. It is about what ' +
        'happens to the work after it is submitted, and "indefinitely" is ' +
        'the word doing the damage.'},
  {text: 'A scheduling agent proposes a Tuesday/Thursday slot after checking ' +
         'three mentors\' availability.',
   answer: 3,
   why: 'A real agent doing a real task with data it was given for that ' +
        'task. Not everything an AI tool does is a risk, and treating it ' +
        'that way makes the genuine risks harder to hear.'},
  {text: 'A tutoring chatbot logs and stores every question a student ever ' +
         'asks, tied to their full name, with no stated deletion policy.',
   answer: 1,
   why: 'The questions a student asks are a record of what they do not ' +
        'understand. Tied to a full name and kept forever, that is one of ' +
        'the more sensitive things a club could hold.'},
  {text: 'A challenge-card generator, asked for "more advanced" cards, ' +
         'disproportionately suggests them to students with certain last ' +
         'names, in its own uncorrected pattern.',
   answer: 0,
   why: 'Nobody wrote that rule and no data leaked. The tool learned a ' +
        'pattern from something in its training and is now applying it to ' +
        'who gets stretched.'},
  {text: 'A translation tool sends the full text of a family\'s home address ' +
         'to an external server just to translate a one-line reminder.',
   answer: 1,
   why: 'The translation is fine. Sending far more than the task needs, to ' +
        'somebody else\'s server, is the risk — and it is the same ' +
        'minimal-data question as any paper form.'},
  {text: 'A grant-writing agent drafts a paragraph using only the bullet ' +
         'points a leader typed in, stored nowhere after the session ends.',
   answer: 3,
   why: 'No student data, no recommendation about a person, nothing ' +
        'retained. This is the shape of a low-risk use, and it is worth ' +
        'being able to recognise so you do not block it.'},
  {text: 'A mentor-coaching agent consistently under-recommends advanced ' +
         'material to students from one zip code, and stores that zip code ' +
         'permanently in an external log.',
   answer: 2,
   why: 'Both, and they are separate problems needing separate fixes. ' +
        'Deleting the log does not correct the recommendations, and ' +
        'correcting the recommendations does not empty the log.'}
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  nextButton = createButton('Next scenario ▶');
  nextButton.position(10, drawHeight + 8);
  nextButton.mousePressed(nextScenario);

  resetButton = createButton('Start over');
  resetButton.position(140, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  describe('A classification exercise. One scenario card at a time describes ' +
    'an AI tool\'s behaviour in a club, and the learner drags it into one of ' +
    'four bins: bias risk, privacy risk, both, or neither. The card is then ' +
    'marked correct or not, with a one-sentence justification, and a running ' +
    'score tracks a pass through all eight scenarios.');
}

function cardHome() {
  return {x: margin + 20, y: TITLE_H + 40};
}

function cardSize() {
  return {w: min(360, canvasWidth * 0.40), h: 190};
}

function draw() {
  updateCanvasSize();
  if (!cardPos) cardPos = cardHome();

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Bias and Privacy Risk Sorter', canvasWidth / 2, 8);

  drawZones();
  drawCard();
  drawFeedback();
  drawControlLabels();

  cursor(dragging || overCard() ? HAND : ARROW);
}

function drawZones() {
  const x = canvasWidth * 0.50;
  const w = canvasWidth - x - margin;
  const y = TITLE_H;
  const h = drawHeight - TITLE_H - 130;
  const cw = (w - 12) / 2, ch = (h - 12) / 2;
  zoneBoxes = [];

  for (let i = 0; i < ZONES.length; i++) {
    const bx = x + (i % 2) * (cw + 12);
    const by = y + floor(i / 2) * (ch + 12);
    zoneBoxes.push({x: bx, y: by, w: cw, h: ch, i: i});

    const isDrop = placed === i;
    const isRight = placed >= 0 && i === SCENARIOS[index].answer;
    const hover = dragging && zoneUnderPoint(cardCentre()) === i;

    noStroke();
    fill(isRight ? '#E8F5EE' : isDrop ? '#FDECEC' : hover ? '#FDF3DF' : 'white');
    rect(bx, by, cw, ch, 10);
    noFill();
    stroke(isRight ? '#3E9E6E' : isDrop ? '#D64545'
           : hover ? '#F5A623' : '#D4DEE7');
    strokeWeight(isRight || isDrop || hover ? 3 : 2);
    if (!isRight && !isDrop && !hover) drawingContext.setLineDash([7, 5]);
    rect(bx, by, cw, ch, 10);
    drawingContext.setLineDash([]);

    noStroke();
    fill(ZONE_COLOR[i]);
    textAlign(CENTER, CENTER);
    textSize(17);
    text(ZONES[i], bx + cw / 2, by + ch / 2);
  }
}

function drawCard() {
  const s = cardSize();
  noStroke();
  fill(0, 0, 0, 22);
  rect(cardPos.x + 3, cardPos.y + 4, s.w, s.h, 10);
  fill('white');
  rect(cardPos.x, cardPos.y, s.w, s.h, 10);
  fill(placed < 0 ? '#5B7186'
       : placed === SCENARIOS[index].answer ? '#3E9E6E' : '#D64545');
  rect(cardPos.x, cardPos.y, s.w, 6, 3);

  textAlign(LEFT, TOP);
  fill('#8AA6BF');
  textSize(12);
  text('SCENARIO ' + (index + 1) + ' OF ' + SCENARIOS.length,
       cardPos.x + 18, cardPos.y + 18);
  fill('#2C3A45');
  textSize(15);
  text(SCENARIOS[index].text, cardPos.x + 18, cardPos.y + 40, s.w - 36,
       s.h - 60);

  if (placed < 0) {
    fill('#8AA6BF');
    textSize(11);
    textAlign(CENTER, BOTTOM);
    text('drag me into a bin', cardPos.x + s.w / 2, cardPos.y + s.h - 8);
  }
}

function drawFeedback() {
  const y = drawHeight - 118;
  const w = canvasWidth - margin * 2;
  noStroke();
  fill('white');
  rect(margin, y, w, 106, 8);

  if (placed < 0) {
    fill('#5B7186');
    textAlign(LEFT, TOP);
    textSize(14);
    text('Two questions settle every one of these. Is the problem in the ' +
         'answers the tool gives, or in the data it holds? It can be both, ' +
         'and it can be neither.', margin + 16, y + 14, w - 32, 80);
    return;
  }

  const sc = SCENARIOS[index];
  const right = placed === sc.answer;
  fill(right ? '#3E9E6E' : '#D64545');
  rect(margin, y, 6, 106, 3);
  textAlign(LEFT, TOP);
  fill(right ? '#2E7D4F' : '#C0392B');
  textSize(16);
  text(right ? '✓ Correct — ' + ZONES[sc.answer]
             : '✗ That is ' + ZONES[sc.answer] + ', not ' + ZONES[placed],
       margin + 20, y + 12, w - 40);
  fill('#2C3A45');
  textSize(13);
  text(sc.why, margin + 20, y + 38, w - 40, 60);
}

function drawControlLabels() {
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(14);
  fill('#2C3A45');
  text('Score ' + score + ' / ' + answered, 250, drawHeight + 22);
  fill('dimgray');
  textSize(13);
  text('Bias is about the answers. Privacy is about the data. Two of the ' +
       'eight are neither.', 10, drawHeight + 58);
}

function cardCentre() {
  const s = cardSize();
  return {x: cardPos.x + s.w / 2, y: cardPos.y + s.h / 2};
}

function overCard() {
  const s = cardSize();
  return mouseX > cardPos.x && mouseX < cardPos.x + s.w &&
         mouseY > cardPos.y && mouseY < cardPos.y + s.h;
}

function zoneUnderPoint(p) {
  for (const b of zoneBoxes) {
    if (p.x > b.x && p.x < b.x + b.w && p.y > b.y && p.y < b.y + b.h) return b.i;
  }
  return -1;
}

function mousePressed() {
  if (placed >= 0) return;          // one placement per scenario
  if (!overCard()) return;
  dragging = true;
  dragOff = {x: mouseX - cardPos.x, y: mouseY - cardPos.y};
}

function mouseDragged() {
  if (!dragging) return;
  cardPos = {x: mouseX - dragOff.x, y: mouseY - dragOff.y};
}

function mouseReleased() {
  if (!dragging) return;
  dragging = false;
  const z = zoneUnderPoint(cardCentre());
  if (z < 0) { cardPos = cardHome(); return; }
  placed = z;
  answered++;
  if (z === SCENARIOS[index].answer) score++;
}

function nextScenario() {
  index = (index + 1) % SCENARIOS.length;
  placed = -1;
  cardPos = cardHome();
}

function resetSimulation() {
  index = 0;
  placed = -1;
  score = 0;
  answered = 0;
  cardPos = cardHome();
}

// These two functions must be present for width responsiveness
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  cardPos = cardHome();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
