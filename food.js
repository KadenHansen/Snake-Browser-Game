export class Food {
    constructor() {
        this.coords = { x: 5, y: 20 }
    }

    create() {
        let gameWorld = document.querySelector(".game-world")
        gameWorld.innerHTML = ""
            let food = document.createElement("div")
            food.style.gridRowStart = this.coords.y
            food.style.gridColumnStart = this.coords.x
            food.classList.add("food")
            gameWorld.append(food)
    }
}