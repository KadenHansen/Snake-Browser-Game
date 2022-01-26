import { Snake } from "./snake.js"
import { Food } from "./food.js"

const greenSnake = new Snake(5)
    greenSnake.setControls()

let food = new Food()
    food.reset()

let currentFrame = 0
let previousFrame = 0

function main(frame) {
    window.requestAnimationFrame(main)
    currentFrame = (frame - previousFrame) / 1000
    if (currentFrame < 1 / greenSnake.speed) return
    
    previousFrame = frame
    
    onFood()

    console.log(greenSnake.bodyID)
    console.log(greenSnake.bodyLength)

    countScore()
    greenSnake.move()
    greenSnake.create()
    checkLose()
}
window.requestAnimationFrame(main)

function countScore() {
    let scoreDisplay = document.querySelector(".score")
    let score = greenSnake.bodyLength
    scoreDisplay.innerHTML = `Score: ${score}`
}

function isCollision(asset1, asset2) {
    return asset1.some(segment => {
        return (segment.x === asset2.x && segment.y === asset2.y)
    })
}

function onFood() {
    if (isCollision(greenSnake.body, food.coords)) {
        food.reset()
        greenSnake.isEating = true
    }
}

function checkLose() {
    if (
        greenSnake.body[0].x <= 0 ||
        greenSnake.body[0].x > 25 ||
        greenSnake.body[0].y <= 0 ||
        greenSnake.body[0].y > 25
    ) {
        greenSnake.reset()
        food.reset()
    }
}