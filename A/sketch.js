let font
let string = "A"
let vehicles = []
let bounds
let counter = 0
let borderWidth

let borderX
let borderY
let borderStride

function preload() {
  font = loadFont('./assets/Montserrat-Black.ttf')
}

function setup() {
    createCanvas(500, 500)
    // width and height should be same
    borderStride = width/50
    borderWidth = borderStride
    bounds = font.textToPoints(string, 120, 340, 300)
    bounds.forEach((el,ind) => {
        vehicles[ind] = new Vehicle(el.x, el.y)
    })

    borderX = borderWidth
    borderY = borderWidth
}

function draw() {
    background(242, 131, 196)
    if (counter === vehicles.length) {
        counter = 0
    }
    vehicles.forEach((el,ind) => {
        if (ind === counter) {
            el.visualise(false)
        } else {
            el.visualise(true)
        }
        el.update()
        el.seek()
    })
    counter++

    if (borderX < width-borderWidth && borderY === borderWidth) {
        borderX+=borderStride
    } else if (borderX == width-borderWidth && borderY < height-borderWidth) {
        borderY+=borderStride
    } else if (borderY === height-borderWidth && borderX > borderWidth) {
        borderX-=borderStride
    } else if (borderX === borderWidth && borderY > borderWidth) {
        borderY-=borderStride
    }
    ellipse(borderX, borderY, 10)

}
