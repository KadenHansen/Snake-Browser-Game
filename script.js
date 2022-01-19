let currentFrame = 0
let previousFrame = 0
let snakeSpeed = 3

function main(frame) {

    window.requestAnimationFrame(main)
    currentFrame = (frame - previousFrame) / 1000
    if (currentFrame < 1 / snakeSpeed) return
    
    previousFrame = frame
    console.log(currentFrame)
}
window.requestAnimationFrame(main)