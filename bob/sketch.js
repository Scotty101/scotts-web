function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("cyan");
  fill(168, 98, 45);
  // head
  ellipse(250, 200, 820, 820);
  line(100, 60, 300, 60); //eyebrow1
  line(400, 60, 600, 60); //eyebrow2

  fill('white');
  noStroke();
  // eye 1
  ellipse(200, 200, 200, 200);
  // eye 2
  ellipse(500, 200, 200, 200);
  fill('black');
  //pupil 1
  ellipse(200, 200, 50, 50);
  //pupil 2
  ellipse(500, 200, 50, 50);
  // Sunglasses
  fill(143, 75, 3, 200);
  stroke('black');
  strokeWeight(5);
  ellipse(200, 200, 250, 250);
  ellipse(500, 200, 250, 250);
  line(325, 200, 375, 200);
  line(0, 190, 75, 200);
  line(625, 200, 655, 190);
  // mouth
  fill('hotpink');
  //ellipse(345, 400, 550, 50);
  arc(345, 400, 250, 250, 0, PI, CHORD);
  // nose
  stroke('black');
  noFill();
  triangle(350, 250, 300, 350, 400, 350);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}