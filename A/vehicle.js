
function Vehicle (x, y) {

    // top left initalisation
    this.pos = p5.Vector.random2D()
        //or
    // random initialisation
    // this.pos = createVector(random(0, width), random(0, height))

    this.vel = p5.Vector.random2D()
    this.acc = createVector()
    this.target = createVector(x, y)
    this.steering = createVector()
    this.maxSpeed = 5

    this.update = function() {
        // velocity changing position
        this.pos.add(this.vel)
        // acceleration changing velocity
        this.vel.add(this.acc)
        // so that forces don't accumulate
        this.acc.mult(0)
    }
    
    this.visualise = function (mark) {
        noStroke()
        fill(255)
        if (mark) {
            ellipse(this.pos.x, this.pos.y, 10)
        } else {
            ellipse(this.pos.x, this.pos.y, 15)
        }
    }

    this.applyForces = function () {
    }
    
    this.seek = function () {
        // only direction
        var desired = p5.Vector.sub(this.target, this.pos)
        
        // adding magnitude to vector
        
        // expand animation (for lower max speeds)
        // desired.setMag(this.maxSpeed * desired.mag()/9)
        
            // or

        // no mapping until desired.mag comes within range
        var speed = this.maxSpeed
        if (desired.mag() < 100) {
            speed = map(desired.mag(), 0, 100, 0, this.maxSpeed)
        }
        desired.setMag(speed)

        var steering = p5.Vector.sub(desired, this.vel)
        this.acc.add(steering)
    }
}