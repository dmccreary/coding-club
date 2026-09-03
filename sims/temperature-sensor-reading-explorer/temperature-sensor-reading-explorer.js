// Temperature Sensor Reading Explorer
// CANVAS_HEIGHT: 500
// Bloom: Apply (L3), verb "calculate"
//
// A TMP36 does not report a temperature. It reports a voltage, and your code
// has to do the conversion:
//
//     temperature (°C) = (V - 0.5) × 100
//
// The formula is rewritten every frame with the current slider value
// substituted, so the arithmetic is visible rather than implied. The digital
// mode exists for contrast: the same reading with the conversion already done
// inside the chip, and nothing for the learner to get wrong.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 420;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let sliderLeftMargin = 190;
let defaultTextSize = 16;

const TITLE_H = 44;
// TMP36: 10 mV per °C with a 500 mV offset, so 0.5 V is 0 °C.
const OFFSET_V = 0.5;
const MV_PER_C = 10;
const T_MIN = -50, T_MAX = 100;

// ---- Controls --------------------------------------------------------------
let voltageSlider, digitalCheckbox, resetButton;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  resetButton = createButton('Reset');
  resetButton.position(10, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  digitalCheckbox = createCheckbox(' Digital sensor instead', false);
  digitalCheckbox.position(80, drawHeight + 10);

  voltageSlider = createSlider(0, 1.5, 0.75, 0.01);
  voltageSlider.position(sliderLeftMargin, drawHeight + 46);
  voltageSlider.size(canvasWidth - sliderLeftMargin - margin);

  describe('A thermometer graphic beside a live conversion panel. A slider sets ' +
    'the analog voltage a TMP36 temperature sensor is producing, from 0 to 1.5 ' +
    'volts, and the panel rewrites the conversion formula with that number ' +
    'substituted in and shows the resulting temperature in Celsius and ' +
    'Fahrenheit. A toggle switches to a digital sensor, which reports the ' +
    'temperature directly with no formula for the learner to apply.');
}

function celsius() {
  return (voltageSlider.value() - OFFSET_V) * (1000 / MV_PER_C);
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
  text('Temperature Sensor Reading Explorer', canvasWidth / 2, 10);

  const split = canvasWidth * 0.42;
  drawThermometer(split / 2, TITLE_H, drawHeight - TITLE_H - 12);
  drawPanel(split, TITLE_H, canvasWidth - split - margin,
            drawHeight - TITLE_H - 12);
  drawControlLabels();
}

function drawThermometer(cx, top, h) {
  const c = celsius();
  const bulbR = 26;
  const tubeW = 30;
  const tubeTop = top + 26;
  const tubeBot = top + h - bulbR * 2 - 46;
  const frac = constrain((c - T_MIN) / (T_MAX - T_MIN), 0, 1);
  const fillTop = lerp(tubeBot, tubeTop, frac);

  push();
  // Tube
  stroke('#5B7186');
  strokeWeight(2);
  fill('white');
  rect(cx - tubeW / 2, tubeTop, tubeW, tubeBot - tubeTop + 6, tubeW / 2);
  circle(cx, tubeBot + bulbR, bulbR * 2);

  // Mercury. Colour tracks temperature so cold and hot are distinguishable at
  // a glance, not only by height.
  const col = frac < 0.5
    ? lerpColor(color('#4A90D9'), color('#F5A623'), frac * 2)
    : lerpColor(color('#F5A623'), color('#D64545'), (frac - 0.5) * 2);
  noStroke();
  fill(col);
  circle(cx, tubeBot + bulbR, bulbR * 1.6);
  rect(cx - tubeW / 2 + 6, fillTop, tubeW - 12, tubeBot + 6 - fillTop,
       (tubeW - 12) / 2);

  // Scale
  stroke('#8AA6BF');
  strokeWeight(1);
  textAlign(LEFT, CENTER);
  textSize(11);
  for (let t = T_MIN; t <= T_MAX; t += 25) {
    const y = lerp(tubeBot, tubeTop, (t - T_MIN) / (T_MAX - T_MIN));
    line(cx + tubeW / 2, y, cx + tubeW / 2 + 7, y);
    noStroke();
    fill('#5B7186');
    text(t + '°', cx + tubeW / 2 + 11, y);
    stroke('#8AA6BF');
  }
  pop();

  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(28);
  text(nf(c, 0, 1) + ' °C', cx, top + h - 34);
}

function drawPanel(x, y, w, h) {
  const v = voltageSlider.value();
  const c = celsius();
  const digital = digitalCheckbox.checked();

  noStroke();
  fill('white');
  rect(x, y, w, h, 8);
  fill(digital ? '#3E9E6E' : '#4A90D9');
  rect(x, y, w, 5, 3);

  textAlign(LEFT, TOP);
  fill(digital ? '#3E9E6E' : '#4A90D9');
  textSize(18);
  text(digital ? 'Digital sensor (DS18B20, DHT22, …)'
               : 'Analog sensor (TMP36)', x + 18, y + 16);

  if (digital) {
    fill('black');
    textSize(15);
    text('The sensor reports:', x + 18, y + 56);
    textFont('monospace');
    textSize(26);
    text(nf(c, 0, 1) + ' °C', x + 18, y + 80);
    textFont('sans-serif');

    fill('#4A5A68');
    textSize(14);
    text('No formula, and no voltage to convert. A digital sensor does this ' +
         'conversion inside the chip and hands your code a number over a data ' +
         'line.\n\nThe trade: a digital sensor costs more, needs a library, and ' +
         'updates only a few times a second. An analog one is cheap, instant, ' +
         'and needs you to get the arithmetic right — which is what the other ' +
         'mode is for.',
         x + 18, y + 124, w - 36, h - 140);
    return;
  }

  fill('black');
  textSize(15);
  text('The sensor reports a voltage:', x + 18, y + 52);
  textFont('monospace');
  textSize(22);
  text(nf(v, 0, 2) + ' V', x + 18, y + 74);

  // The formula, rebuilt with the live value substituted in. Seeing the
  // number land in the same slot every time is the point.
  textSize(15);
  fill('#4A5A68');
  textFont('sans-serif');
  text('Convert it:', x + 18, y + 112);

  textFont('monospace');
  textSize(17);
  fill('#8E7CC3');
  text('°C = (V − 0.5) × 100', x + 18, y + 136);
  fill('black');
  text('°C = (' + nf(v, 0, 2) + ' − 0.5) × 100',
       x + 18, y + 162);
  text('°C = ' + nf(v - OFFSET_V, 0, 2) + ' × 100', x + 18, y + 188);
  textSize(24);
  fill('#D64545');
  text('°C = ' + nf(c, 0, 1), x + 18, y + 214);
  textFont('sans-serif');

  fill('#4A5A68');
  textSize(13);
  text('Also ' + nf(c * 9 / 5 + 32, 0, 1) + ' °F. The 0.5 V offset is what ' +
       'lets a TMP36 report temperatures below freezing on a supply that ' +
       'cannot go negative: 0 °C sits at half a volt, not at zero.',
       x + 18, y + 254, w - 36, h - 268);
}

function drawControlLabels() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  const v = voltageSlider.value();
  text(digitalCheckbox.checked()
        ? 'Temperature at the sensor: ' + nf(celsius(), 0, 1) + ' °C'
        : 'Sensor voltage: ' + nf(v, 0, 2) + ' V',
       10, drawHeight + 58);
}

function resetSimulation() {
  voltageSlider.value(0.75);
  digitalCheckbox.checked(false);
}

// These two functions must be present for width responsiveness
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  voltageSlider.size(canvasWidth - sliderLeftMargin - margin);
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
