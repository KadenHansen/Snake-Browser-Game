import { changeDirection } from "./controls.js"

export class Snake {
    constructor(speed) {
        this.body = [{ x: 13, y: 13 }]
        this.bodyLength = this.body.length
        this.speed = speed
    }
    
    create() {
        let gameWorld = document.querySelector(".game-world")
        gameWorld.innerHTML = ""
        this.body.forEach(snakePiece => {
            let snakeSection = document.createElement("div")
            snakeSection.style.gridRowStart = snakePiece.y
            snakeSection.style.gridColumnStart = snakePiece.x
            snakeSection.classList.add("snake")
            gameWorld.append(snakeSection)
        })
    }
    
    move() {
    let direction = changeDirection()

        for (let i = this.body.length - 2; i >=0; i--) {
            this.body[i + 1] = this.body[i]
        }
    
        this.body[0].x += direction.x
        this.body[0].y += direction.y
    }
}