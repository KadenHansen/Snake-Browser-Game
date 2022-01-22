let snakeDirection = { x: 0, y: 0 }

window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp": 
            snakeDirection = { x: 0, y: -1 }
            break
        case "ArrowDown": 
            snakeDirection = { x: 0, y: 1 }
            break
        case "ArrowLeft": 
            snakeDirection = { x: -1, y: 0 }
            break
        case "ArrowRight": 
            snakeDirection = { x: 1, y: 0 }
            break
    }
})

export function changeDirection() {
    return snakeDirection
}