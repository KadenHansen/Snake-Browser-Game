export class Snake {
    constructor(speed) {
        this.body = [{ x: 13, y: 13 }]
        this.bodyLength = this.body.length
        this.speed = speed
    }
    
    create() {
        let gameWorld = document.querySelector(".game-world")

        this.body.forEach(snakePiece => {
            let snakeSection = document.createElement("div")
            snakeSection.style.gridRowStart = snakePiece.y
            snakeSection.style.gridColumnStart = snakePiece.x
            snakeSection.classList.add("snake")
            gameWorld.append(snakeSection)
        })
    }
    
    move() {
        for (let i = this.body.length - 2; i >=0; i--) {
            this.body[i + 1] = this.body[i]
        }
    
        // used for testing movement 
        // this.body[0].x += 1
        // this.body[0].y += 0
    }
}