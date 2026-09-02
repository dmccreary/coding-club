// Membership Fee Model Comparison
// CANVAS_HEIGHT: 560
// Bloom: Apply (L3), verb "calculate"
//
// A flat fee and a sliding scale, side by side, against the same set of
// families. The arithmetic is trivial; the decision is not.
//
// With the sample mix the flat model raises more money -- $900 against $855 --
// and that gap is exactly the point of the sim rather than an argument against
// sliding scale. What the flat model does not show on its bar is that three of
// the ten families cannot pay $10 a month, so under a flat fee they are not in
// the club at all, and the $900 is $630 from seven families.
//
// So the sim reports both revenues AND the reach. A model that raises less from
// more families is not obviously worse, and putting the two numbers next to
// each other is what makes that a decision instead of a preference.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 445;
let controlHeight = 115;     // 3 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let sliderLeftMargin = 210;
let defaultTextSize = 16;

const TITLE_H = 42;
const TIERS = [0, 5, 10, 15, 25];
const SAMPLE = [3, 0, 4, 2, 1];

// ---- Controls --------------------------------------------------------------
let flatSlider, monthsInput, sampleButton, resetButton;
let tierSliders = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  sampleButton = createButton('Load sample family mix');
  sampleButton.position(10, drawHeight + 8);
  sampleButton.mousePressed(loadSample);

  resetButton = createButton('Reset');
  resetButton.position(178, drawHeight + 8);
  resetButton.mousePressed(loadSample);

  monthsInput = createInput('9', 'number');
  monthsInput.size(50);
  monthsInput.position(370, drawHeight + 8);

  flatSlider = createSlider(0, 30, 10, 1);
  flatSlider.position(sliderLeftMargin, drawHeight + 46);
  flatSlider.size(canvasWidth - sliderLeftMargin - margin);

  // The five tier sliders live over the right-hand panel, beside the tier they
  // control: five more rows under the canvas would push the sim off screen.
  for (let i = 0; i < TIERS.length; i++) {
    const s = createSlider(0, 15, SAMPLE[i], 1);
    s.size(120);
    tierSliders.push(s);
  }
  layoutTierSliders();

  describe('Two revenue bars side by side, one for a flat monthly membership ' +
    'fee and one for a self-selected sliding scale, computed from the same ' +
    'set of families. Sliders set how many families sit at each of the five ' +
    'sliding-scale tiers and what the flat fee would be, and a readout shows ' +
    'total families, revenue under each model, and how many families pay ' +
    'nothing.');
}

function panelX() { return canvasWidth * 0.56; }

function layoutTierSliders() {
  const px = panelX();
  const top = TITLE_H + 74;
  for (let i = 0; i < tierSliders.length; i++) {
    tierSliders[i].position(px + 76, top + i * 44);
    tierSliders[i].size(max(70, canvasWidth - px - 76 - margin - 44));
  }
}

function loadSample() {
  for (let i = 0; i < tierSliders.length; i++) tierSliders[i].value(SAMPLE[i]);
  flatSlider.value(10);
  monthsInput.value('9');
}

function counts() { return tierSliders.map(s => s.value()); }

function draw() {
  updateCanvasSize();

  const c = counts();
  const families = c.reduce((a, b) => a + b, 0);
  const months = max(1, int(monthsInput.value()) || 1);
  const flatFee = flatSlider.value();

  const flatRevenue = flatFee * families * months;
  let slidingRevenue = 0;
  for (let i = 0; i < TIERS.length; i++) slidingRevenue += TIERS[i] * c[i] * months;

  // Under a flat fee, a family that selected $0 could not have paid it.
  const cannotPay = c[0];
  const flatReach = families - cannotPay;

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Membership Fee Model Comparison', canvasWidth / 2, 8);

  drawBars(margin, TITLE_H, panelX() - margin * 2, drawHeight - TITLE_H - 12,
           flatRevenue, slidingRevenue, families, flatReach, cannotPay, months);
  drawTiers(panelX(), TITLE_H, canvasWidth - panelX() - margin,
            drawHeight - TITLE_H - 12, c, families);
  drawControlLabels();
}

function drawBars(x, y, w, h, flatRev, slideRev, families, flatReach,
                  cannotPay, months) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 10);

  const barTop = y + 62;
  const barH = h * 0.40;
  const maxV = max(flatRev, slideRev, 1);
  const bw = min(96, w * 0.22);
  const cx = x + w / 2;
  const gap = w * 0.15;

  const bars = [
    {label: 'Flat fee', v: flatRev, col: '#4A90D9', bx: cx - gap - bw,
     reach: flatReach},
    {label: 'Sliding scale', v: slideRev, col: '#3E9E6E', bx: cx + gap,
     reach: families}
  ];

  for (const b of bars) {
    const bh = (b.v / maxV) * barH;
    noStroke();
    fill(b.col);
    rect(b.bx, barTop + barH - bh, bw, bh, 4);
    fill('#2C3A45');
    textAlign(CENTER, BOTTOM);
    textSize(18);
    text('$' + nfc(b.v, 0), b.bx + bw / 2, barTop + barH - bh - 6);
    fill(b.col);
    textAlign(CENTER, TOP);
    textSize(14);
    text(b.label, b.bx + bw / 2, barTop + barH + 8);
    fill('#5B7186');
    textSize(12);
    text('reaches ' + b.reach + ' famil' + (b.reach === 1 ? 'y' : 'ies'),
         b.bx + bw / 2, barTop + barH + 26);
  }

  push();
  stroke('#D4DEE7');
  strokeWeight(1);
  line(x + 20, barTop + barH, x + w - 20, barTop + barH);
  pop();

  noStroke();
  fill('#8AA6BF');
  textAlign(LEFT, TOP);
  textSize(12);
  text('OVER ' + months + ' MONTHS, ' + families + ' FAMILIES', x + 18, y + 16);

  // The comparison in words, because the two bars alone say the wrong thing.
  const diff = flatRev - slideRev;
  fill('#4A5A68');
  textSize(13);
  let msg;
  if (cannotPay === 0) {
    msg = 'No family selected the $0 tier, so both models reach everyone. ' +
          'With that mix the comparison really is just revenue.';
  } else if (diff > 0) {
    msg = 'The flat fee raises $' + nfc(diff, 0) + ' more — but ' + cannotPay +
          ' famil' + (cannotPay === 1 ? 'y' : 'ies') + ' selected $0, and ' +
          'under a flat fee ' + (cannotPay === 1 ? 'that family is' :
          'those families are') + ' not in the club at all. The question is ' +
          'not which bar is taller; it is whether $' + nfc(diff, 0) +
          ' is worth ' + cannotPay + ' famil' +
          (cannotPay === 1 ? 'y' : 'ies') + '.';
  } else {
    msg = 'The sliding scale raises $' + nfc(-diff, 0) + ' more AND reaches ' +
          cannotPay + ' more famil' + (cannotPay === 1 ? 'y' : 'ies') + '. ' +
          'When the mix looks like this the decision is not close.';
  }
  text(msg, x + 18, y + h - 92, w - 36, 84);
}

function drawTiers(x, y, w, h, c, families) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 10);

  textAlign(LEFT, TOP);
  fill('#2C3A45');
  textSize(15);
  text('Families at each tier', x + 16, y + 14);
  textAlign(RIGHT, TOP);
  fill('#8AA6BF');
  textSize(12);
  text(families + ' families total', x + w - 16, y + 17);

  const top = y + 74;
  for (let i = 0; i < TIERS.length; i++) {
    const ry = top + i * 44;
    fill(TIERS[i] === 0 ? '#D64545' : '#2C3A45');
    textAlign(LEFT, CENTER);
    textSize(15);
    text('$' + TIERS[i], x + 18, ry + 8);
    textAlign(RIGHT, CENTER);
    fill('#5B7186');
    textSize(14);
    text(c[i], x + w - 16, ry + 8);
  }

  const noteY = top + TIERS.length * 44 + 8;
  fill('#4A5A68');
  textSize(12);
  text('The $0 tier is the one that matters. A sliding scale with no $0 ' +
       'option is a flat fee with extra steps, and one that asks families to ' +
       'prove hardship is worse than a flat fee.',
       x + 18, noteY, w - 36, (y + h) - noteY - 14);
}

function drawControlLabels() {
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(14);
  fill('#2C3A45');
  text('Months per year:', 250, drawHeight + 22);
  textSize(defaultTextSize);
  text('Flat monthly fee: $' + flatSlider.value(), 10, drawHeight + 58);
  fill('dimgray');
  textSize(13);
  text('Sliding scale means families choose their own tier, with no ' +
       'application and nobody asked to prove anything.',
       10, drawHeight + 94);
}

// These two functions must be present for width responsiveness
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  flatSlider.size(canvasWidth - sliderLeftMargin - margin);
  layoutTierSliders();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
