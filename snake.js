export class Snake {
    constructor(speed) {
        this.body = [{ x: 13, y: 13 }]
        this.bodyLength = this.body.length
        this.speed = speed
        this.direction = { x: 0, y: 0 }
    }
    
    create() {
        let gameWorld = document.querySelector(".game-world")
        let snakePieces = document.querySelectorAll(".snake")
        // gameWorld.innerHTML = ""
        snakePieces.forEach(segment => {
            segment.remove()
        })

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
                    if (this.direction.y !== 0) break
                    this.direction = { x: 0, y: -1 }
                    break
                case "ArrowDown": 
                    if (this.direction.y !== 0) break
                    this.direction = { x: 0, y: 1 }
                    break
                case "ArrowLeft": 
                    if (this.direction.x !== 0) break
                    this.direction = { x: -1, y: 0 }
                    break
                case "ArrowRight": 
                    if (this.direction.x !== 0) break
                    this.direction = { x: 1, y: 0 }
                    break
            }
        })
    }
}