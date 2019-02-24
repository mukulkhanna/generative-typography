let font
let string = "B"
let elasticity1 = 30
let elasticity2 = 15
let gap = 0
let tension = 0.05
let bounds = []
let bounds2 = []

let counter = 0

function preload() {
  font = loadFont('./assets/Raleway-Black.ttf')
}

function setup() {
    // frameRate(20)
    createCanvas(1000, 500)
    background(192, 242, 192)

    bounds = font.textToPoints(string, 130, 340, 300)
    bounds2 = font.textToPoints(string, 630, 340, 300)
}


function draw() {
    background(173, 237, 173)
    strokeWeight(5)
    line(width/2, 0, width/2, height)
    counter ++

    bounds.forEach(el => {
        strokeWeight(1)
        ellipse(el.x, el.y, 3)
        ellipse( el.x + gap + elasticity1*sin(tension*counter), el.y + gap + elasticity1 * sin(tension*counter), 3)
        stroke(255)
        strokeWeight(1)
        line(el.x, el.y, el.x + gap + elasticity1 * sin(tension*counter), el.y + gap + elasticity1*sin(tension*counter))
    })

    bounds2.forEach(el => {
        ellipse(el.x - elasticity2 * sin(tension*counter), el.y - elasticity2 * sin(tension*counter), 3)
        // ellipse(el.x, el.y, 3)
        ellipse( el.x + gap + elasticity2 * sin(tension*counter), el.y + gap + elasticity2 * sin(tension*counter), 3)
        stroke(255)
        strokeWeight(1)
        line(el.x - elasticity2 * sin(tension*counter), el.y - elasticity2 * sin(tension*counter), el.x + gap + elasticity2 * sin(tension*counter), el.y + gap + elasticity2 * sin(tension*counter))
    })

}
