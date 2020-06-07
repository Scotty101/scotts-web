function setup() {
  createCanvas(windowWidth, windowHeight);
  background("cyan");
}

function draw() {
  drawHead();
  drawEyebrow(100);
  drawEyebrow(400);
  drawEye(200);
  drawEye(500);
  drawSunglasses();
  drawMouth();
  drawNose();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawHead() {
  fill(168, 98, 45);
  ellipse(250, 200, 820, 820);
}

function drawEyebrow(x) {
  line(x, 60, x + 200, 60);
}

function drawEye(x) {
  noStroke();
  fill('white');
  ellipse(x, 200, 200, 200);
  //pupil
  fill('black');
  ellipse(x, 200, 50, 50);
}

function drawSunglasses() {
  fill(143, 75, 3, 200);
  stroke('black');
  strokeWeight(5);
  ellipse(200, 200, 250, 250);
  ellipse(500, 200, 250, 250);
  line(325, 200, 375, 200);
  line(0, 190, 75, 200);
  line(625, 200, 655, 190);
}

function drawMouth() {
  fill('hotpink');
  arc(345, 400, 250, 250, 0, PI, CHORD);
}

function drawNose() {
  stroke('black');
  noFill();
  triangle(350, 250, 300, 350, 400, 350);
}
