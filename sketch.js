/*
Original Code: Daniel D - https://github.com/Gastr.
1/5/17
*/
bodies = [];
var trails;
var initialX, initialY;
var diffX = 0;
var diffY = 0;
var dragged = false;

function setup() {
  createCanvas(600, 600, WEBGL);
  fill(200);
  stroke(0);
  strokeWeight(0.3);
  trails = createCheckbox();
}

function draw() {
  background(51);
  rotateX(diffY * 0.01);
  rotateY(diffX * 0.01);
  for (let i in bodies) {
    bodies[i].update();
    bodies[i].show();
  }
}

function mousePressed() {
  initialX = mouseX;
  initialY = mouseY;
}

function mouseReleased() {
  if (!dragged) {
    bodies.push(new Body());
  }
  dragged = false;
}

function mouseDragged() {
  dragged = true;
  diffX = initialX - mouseX;
  diffY = initialY - mouseY;
}