export class Snake {
    constructor(speed) {
        this.body = [{ x: 13, y: 13 }]
        this.bodyLength = this.body.length
        this.speed = speed
        this.direction = { x: 0, y: 0 }
        this.previousDirection = null
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
        for (let i = this.body.length - 2; i >=0; i--) {
            this.body[i + 1] = this.body[i]
        }
    
        this.body[0].x += this.direction.x
        this.body[0].y += this.direction.y
    }

    setControls() {
        window.addEventListener("keydown", e => {
            switch (e.key) {
                case "ArrowUp": 
                    if (this.previousDirection === "ArrowDown") break
                    this.direction = { x: 0, y: -1 }
                    this.previousDirection = "ArrowUp"
                    break
                case "ArrowDown": 
                    if (this.previousDirection === "ArrowUp") break
                    this.direction = { x: 0, y: 1 }
                    this.previousDirection = "ArrowDown"
                    break
                case "ArrowLeft": 
                    if (this.previousDirection === "ArrowRight") break
                    this.direction = { x: -1, y: 0 }
                    this.previousDirection = "ArrowLeft"
                    break
                case "ArrowRight": 
                    if (this.previousDirection === "ArrowLeft") break
                    this.direction = { x: 1, y: 0 }
                    this.previousDirection = "ArrowRight"
                    break
            }
        })
    }
}