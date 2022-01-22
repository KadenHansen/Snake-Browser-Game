let snakeDirection = { x: 0, y: 0 }
let previousDirection = null

window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp": 
            if (previousDirection === "ArrowDown") return
            snakeDirection = { x: 0, y: -1 }
            previousDirection = "ArrowUp"
            break
        case "ArrowDown": 
            if (previousDirection === "ArrowUp") return
            snakeDirection = { x: 0, y: 1 }
            previousDirection = "ArrowDown"
            break
        case "ArrowLeft": 
            if (previousDirection === "ArrowRight") return
            snakeDirection = { x: -1, y: 0 }
            previousDirection = "ArrowLeft"
            break
        case "ArrowRight": 
            if (previousDirection === "ArrowLeft") return
            snakeDirection = { x: 1, y: 0 }
            previousDirection = "ArrowRight"
            break
    }
})

export function changeDirection() {
    return snakeDirection
}