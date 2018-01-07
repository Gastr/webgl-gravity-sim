function Body() {
  this.pos = createVector(mouseX - width / 2, mouseY - width / 2, random(10, -10));
  this.mass = random(10, 30);
  this.r;
  this.g = this.mass * 2;
  this.force = createVector(0, 0, 0);
  this.acc = createVector(0, 0, 0);
  this.vel = createVector(0, 0, 0);
  this.trail = [];

  this.update = function() {
    for (let n in bodies) {
      if (bodies[n] != this) {
        this.r = dist(this.pos.x, this.pos.y, bodies[n].pos.x, bodies[n].pos.y);
        this.force.set(this.g * ((this.mass * bodies[n].mass) / sq(this.r)), this.g * ((this.mass * bodies[n].mass) / sq(this.r)), this.g * ((this.mass * bodies[n].mass) / sq(this.r)));
        if (bodies[n].pos.x < this.pos.x) {
          this.force.x *= -1;
        }
        if (bodies[n].pos.y < this.pos.y) {
          this.force.y *= -1;
        }
        if (bodies[n].pos.z < this.pos.z) {
          this.force.z *= -1;
        }
        this.acc.set(this.force.div(this.mass), this.force.div(this.mass), this.force.div(this.mass));
        this.vel.add(this.acc);
        this.pos.add(this.vel);
      }
    }
    this.trail.push(this.pos);
    if (this.trail.length > 30) {
      this.trail.shift();
    }
  }

  this.show = function() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    sphere(this.mass);

    pop();
  }
}