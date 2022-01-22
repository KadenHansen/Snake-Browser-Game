let currentFrame = 0
let previousFrame = 0
let snakeSpeed = 1
let gameWorld = document.querySelector(".game-world")
let snake = [{ x: 13, y: 13 }]
let scoreDisplay = document.querySelector(".score")

function main(frame) {
    
    window.requestAnimationFrame(main)
    currentFrame = (frame - previousFrame) / 1000
    if (currentFrame < 1 / snakeSpeed) return
    
    previousFrame = frame

    let score = snake.length
    scoreDisplay.innerHTML = `Score: ${score}`
    gameWorld.innerHTML = ""
    moveSnake()
    createSnake(gameWorld)
}
window.requestAnimationFrame(main)

function moveSnake() {
    for (let i = snake.length - 2; i >=0; i--) {
        snake[i + 1] = snake[i]
    }

    // used for testing movement 
    // snake.x += 0
    // snake.y += 0
}

function createSnake(grid) {
    snake.forEach(snakePiece => {
        let snakeSection = document.createElement("div")
        snakeSection.style.gridRowStart = snakePiece.y
        snakeSection.style.gridColumnStart = snakePiece.x
        snakeSection.classList.add("snake")
        grid.append(snakeSection)
    })
}