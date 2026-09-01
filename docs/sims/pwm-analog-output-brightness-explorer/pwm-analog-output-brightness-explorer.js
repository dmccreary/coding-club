// PWM Analog Output Brightness Explorer
// CANVAS_HEIGHT: 480
// Bloom: Understand (L2), verb "explain"
// A Pico cannot output half a volt to an LED. It can only switch full-on and
// full-off, very fast. "Brightness" is the fraction of each cycle spent on --
// the duty cycle. The top half shows what the eye sees; the bottom half shows
// the square wave actually driving the pin. Slow motion drops the switching
// rate until the two views visibly disagree.

// ---------- canvas geometry ----------
let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let sliderLeftMargin = 180;
let defaultTextSize = 16;

// ---------- palette ----------
const AMBER = '#F5A623';
const SKY_BLUE = '#4A90D9';

// ---------- state ----------
let duty = 50;               // percent
let slowMotion = false;
let phase = 0;               // 0..1 position within the current PWM cycle

// Real PWM on a Pico runs near 1 kHz -- far too fast to see. Slow motion drops
// it to a couple of cycles per second so individual pulses become visible.
const NORMAL_CYCLES_PER_SEC = 8;
const SLOW_CYCLES_PER_SEC = 0.6;

let dutySlider, slowCheckbox;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  dutySlider = createSlider(0, 100, duty, 1);
  dutySlider.position(sliderLeftMargin, drawHeight + 12);
  dutySlider.size(canvasWidth - sliderLeftMargin - margin);

  slowCheckbox = createCheckbox(' Slow motion (watch the pulses)', false);
  slowCheckbox.position(12, drawHeight + 46);

  describe('A pulse width modulation explorer. A slider sets the duty cycle. ' +
           'The top of the canvas shows an LED at the brightness a viewer would ' +
           'perceive; the bottom shows the square wave actually driving the pin. ' +
           'A slow motion option reduces the switching rate until the LED can be ' +
           'seen blinking rather than dimming.');
}

function draw() {
  updateCanvasSize();
  duty = dutySlider.value();
  slowMotion = slowCheckbox.checked();

  const cycles = slowMotion ? SLOW_CYCLES_PER_SEC : NORMAL_CYCLES_PER_SEC;
  phase = (phase + (deltaTime / 1000) * cycles) % 1;

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
  text('PWM Duty Cycle and LED Brightness', canvasWidth / 2, 12);

  drawLedPanel();
  drawWaveform();
  drawControlLabels();
}

// Is the pin high at this instant?
function pinIsHigh() {
  return phase < duty / 100;
}

function drawLedPanel() {
  const cx = canvasWidth * 0.26;
  const cy = 130;

  // In slow motion the LED follows the ACTUAL pin state, so it blinks. At
  // normal speed the switching outruns the eye, so it is drawn at the average
  // brightness a viewer would perceive -- which is exactly the duty cycle.
  const lit = slowMotion ? (pinIsHigh() ? 1 : 0) : duty / 100;

  noStroke();
  if (lit > 0.02) {
    fill(255, 190, 60, 90 * lit);
    circle(cx, cy, 120 + 60 * lit);
  }
  stroke('#8A6A18');
  strokeWeight(3);
  fill(255, 210 - 40 * lit, 90, 55 + 200 * lit);
  circle(cx, cy, 92);

  noStroke();
  fill('#333333');
  textAlign(CENTER, TOP);
  textSize(15);
  text(slowMotion ? 'What the pin is doing right now'
                  : 'What your eye sees', cx, cy + 62);
  textSize(13);
  fill('#666666');
  text(slowMotion ? (pinIsHigh() ? 'ON (3.3 V)' : 'OFF (0 V)')
                  : duty + '% of full brightness', cx, cy + 84);

  // the duty cycle, stated plainly, next to the LED
  const px = canvasWidth * 0.55;
  textAlign(LEFT, TOP);
  fill('#555555');
  textSize(14);
  text('Duty cycle', px, cy - 56);
  fill(AMBER);
  textSize(40);
  text(duty + '%', px, cy - 34);
  fill('#333333');
  textSize(13);
  text('of every cycle the pin is HIGH', px, cy + 16);
  fill('#666666');
  textSize(12);
  text(slowMotion ? 'Switching at about 0.6 Hz so you can count the pulses.'
                  : 'A real Pico switches near 1 kHz - far too fast to see.',
       px, cy + 38);
}

// A literal square-wave plot: two full cycles, with the HIGH portion shaded and
// a cursor showing where in the cycle the LED above currently is.
function drawWaveform() {
  const left = margin + 40;
  const right = canvasWidth - margin;
  const top = 250;
  const high = top + 20;
  const low = top + 105;
  const cycles = 2;
  const cycleW = (right - left) / cycles;

  // axes
  stroke('#AAB4BE');
  strokeWeight(1);
  line(left, low, right, low);
  line(left, high - 10, left, low + 10);

  noStroke();
  fill('#666666');
  textAlign(RIGHT, CENTER);
  textSize(12);
  text('3.3 V', left - 8, high);
  text('0 V', left - 8, low);

  // shaded HIGH regions, then the wave outline on top
  const onW = cycleW * (duty / 100);
  noStroke();
  fill(245, 166, 35, 60);
  for (let c = 0; c < cycles; c++) {
    if (onW > 0) rect(left + c * cycleW, high, onW, low - high);
  }

  stroke(SKY_BLUE);
  strokeWeight(3);
  noFill();
  beginShape();
  for (let c = 0; c < cycles; c++) {
    const x0 = left + c * cycleW;
    vertex(x0, duty > 0 ? high : low);
    vertex(x0 + onW, duty > 0 ? high : low);
    vertex(x0 + onW, low);
    vertex(x0 + cycleW, low);
  }
  endShape();

  // cursor tying the waveform to the LED above
  const cursorX = left + phase * cycleW;
  stroke(AMBER);
  strokeWeight(2);
  line(cursorX, high - 12, cursorX, low + 12);
  noStroke();
  fill(AMBER);
  circle(cursorX, pinIsHigh() ? high : low, 11);

  fill('#333333');
  textAlign(LEFT, TOP);
  textSize(13);
  text('The actual signal on the pin (two cycles shown)', left, low + 22);
}

function drawControlLabels() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Duty cycle: ' + duty + '%', 12, drawHeight + 22);
}

// ---------- responsive plumbing (must stay at the end) ----------
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  dutySlider.size(canvasWidth - sliderLeftMargin - margin);
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
      if (dutySlider) dutySlider.size(canvasWidth - sliderLeftMargin - margin);
    }
  }
}
