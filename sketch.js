/*
Original Code: Daniel D.
1/5/17
*/

bodies = [];
var trails;

function setup() {
  createCanvas(600, 600, WEBGL);
  fill(200);
  stroke(200);
  trails = createCheckbox();
}

function draw() {
  background(51);
  for (let i in bodies) {
    bodies[i].update();
    bodies[i].show();
  }
}

function mousePressed() {
  bodies.push(new Body());
}