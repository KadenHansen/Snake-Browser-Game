import { Snake } from "./snake.js"
import { Food } from "./food.js"

const greenSnake = new Snake(5)
    greenSnake.setControls()

let food = new Food()
    food.reset()

let currentFrame = 0
let previousFrame = 0

function update(frame) {
    window.requestAnimationFrame(update)
    currentFrame = (frame - previousFrame) / 1000
    if (currentFrame < 1 / greenSnake.speed) return
    
    previousFrame = frame
    main()
}
window.requestAnimationFrame(update)

function main() {
    checkEating()
    countScore()
    greenSnake.move()
    greenSnake.create()
    checkLose()
    greenSnake.determineBody()
}

function countScore() {
    let scoreDisplay = document.querySelector(".score")
    let score = greenSnake.bodyLength
    scoreDisplay.innerHTML = `Score: ${score}`
}

function isCollision(asset1, asset2) {
    return (asset1.x === asset2.x && asset1.y === asset2.y)
}

function isCollisionArr(asset1, asset2) {
    return asset1.some(segment => {
        return (segment.x === asset2.x && segment.y === asset2.y)
    })
}

function checkEating() {
    if (isCollision(greenSnake.body, food.coords)) {
        food.reset()
        greenSnake.isEating = true
    }
}

function checkLose() {
    if (
        greenSnake.body.x <= 0 ||
        greenSnake.body.x > 25 ||
        greenSnake.body.y <= 0 ||
        greenSnake.body.y > 25 ||
        isCollisionArr(greenSnake.bodyArr, greenSnake.body)
    ) {
        greenSnake.reset()
        food.reset()
    }
}