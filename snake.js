export class Snake {
    constructor(speed) {
        this.body = [{ x: 13, y: 13 }]
        this.bodyID = 0
        this.bodyLength = 0
        this.speed = speed
        this.direction = { x: 0, y: 0 }
        this.isEating = false
    }
    
    create() {
        let gameWorld = document.querySelector(".game-world")

        
        this.body.forEach(snakePiece => {
            let snakeSection = document.createElement("div")
            snakeSection.style.gridRowStart = snakePiece.y
            snakeSection.style.gridColumnStart = snakePiece.x
            snakeSection.classList.add("snake")
            snakeSection.setAttribute("id", `${this.bodyID}`)
            gameWorld.append(snakeSection)
        })
    }
    
    move() {
        if (this.isEating === false) {
            this.removeLast()
        }else {
            this.growSnake()
        }
        this.isEating = false

        if (this.direction.x !== 0 || this.direction.y !== 0) {
            for (let i = this.body.length - 2; i >= 0; i--) {
                this.body[i + 1] = this.body[i]
            }
            this.bodyID++
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

    removeLast() {
        if (this.bodyID !== 0) {
            let oldSnakePiece = document.getElementById(`${this.bodyID - this.bodyLength}`)
            oldSnakePiece.remove()
        } else {
            let snakePieces = document.querySelectorAll(".snake")
            snakePieces.forEach(segment => {
                    segment.remove()
            })
        }
    }

    growSnake() {
        this.bodyLength++
    }

    reset() {
        let snakePieces = document.querySelectorAll(".snake")
        snakePieces.forEach(segment => {
            segment.remove()
        })

        this.body = [{ x: 13, y: 13 }]
        this.direction = { x: 0, y: 0 }
        this.bodyID = 0
        this.bodyLength = 0
    }
}