let currentFrame = 0
let previousFrame = 0
let snakeSpeed = 1
let gameWorld = document.querySelector(".game-world")
let snake = { x: 13, y: 13 }

function main(frame) {
    
    window.requestAnimationFrame(main)
    currentFrame = (frame - previousFrame) / 1000
    if (currentFrame < 1 / snakeSpeed) return
    
    previousFrame = frame
    createSnake(gameWorld)
}
window.requestAnimationFrame(main)


function createSnake(grid) {
    let snakeSection = document.createElement("div")
    snakeSection.style.gridRowStart = snake.x
    snakeSection.style.gridColumnStart = snake.y
    snakeSection.classList.add("snake")
    grid.append(snakeSection)
}