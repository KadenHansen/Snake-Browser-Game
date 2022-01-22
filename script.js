import { Snake } from "./snake.js"

const greenSnake = new Snake(2)

let currentFrame = 0
let previousFrame = 0
function main(frame) {
    window.requestAnimationFrame(main)
    currentFrame = (frame - previousFrame) / 1000
    if (currentFrame < 1 / greenSnake.speed) return
    
    previousFrame = frame
    
    countScore()
    greenSnake.move()
    greenSnake.create()
}
window.requestAnimationFrame(main)

function countScore() {
    let scoreDisplay = document.querySelector(".score")
    let score = greenSnake.bodyLength
    scoreDisplay.innerHTML = `Score: ${score}`
}