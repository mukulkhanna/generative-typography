let font
let string = "B"

function preload() {
  font = loadFont('./assets/Raleway-Black.ttf')
}

function setup() {
    createCanvas(500, 500)
    // width and height should be same
    borderStride = width/50
    borderWidth = borderStride
    bounds = font.textToPoints(string, 120, 340, 300)

    borderX = borderWidth
    borderY = borderWidth
}

function draw() {
    background(220, 255, 221)

    if (borderX < width-borderWidth && borderY === borderWidth) {
        borderX+=borderStride
    } else if (borderX == width-borderWidth && borderY < height-borderWidth) {
        borderY+=borderStride
    } else if (borderY === height-borderWidth && borderX > borderWidth) {
        borderX-=borderStride
    } else if (borderX === borderWidth && borderY > borderWidth) {
        borderY-=borderStride
    }
    noStroke()
    ellipse(borderX, borderY, 10)

}
