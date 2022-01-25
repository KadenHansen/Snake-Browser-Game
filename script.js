import { Snake } from "./snake.js"
import { Food } from "./food.js"

const greenSnake = new Snake(4)
let food = new Food()
greenSnake.setControls()
food.create()

let currentFrame = 0
let previousFrame = 0
function main(frame) {
    window.requestAnimationFrame(main)
    currentFrame = (frame - previousFrame) / 1000
    if (currentFrame < 1 / greenSnake.speed) return
    
    previousFrame = frame
    
    onFood()
        
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

function isCollision(asset1, asset2) {
    return asset1.some(segment => {
        return (segment.x === asset2.x && segment.y === asset2.y)
    })
}

function onFood() {
    if (isCollision(greenSnake.body, food.coords)) {
        console.log("food was eaten")
        food.remove()
        let newCoords = food.getNewCoords()
        // let newCoords = food.createNewFood()
        food.coords = { x: newCoords.x, y: newCoords.y }
        food.create()
    }
}