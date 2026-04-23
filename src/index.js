import "./load.js"
import "./home.js"
import "./menu.js"
import "./about.js" 
import { createHomeScreen, homeButton } from "./home.js"
import { createAboutScreen, aboutButton } from "./about.js"
import { createMenuScreen, menuButton } from "./menu.js"

const content = document.querySelector("#content")

createHomeScreen(content)

// Tab Switching Logic

homeButton.addEventListener("click", () => {
    createHomeScreen(content)
})

menuButton.addEventListener("click", () => {
    createMenuScreen(content)
})

aboutButton.addEventListener("click", () => {
    createAboutScreen(content)
})
