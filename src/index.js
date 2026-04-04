import "./load.js"
import "./home.js"
import "./menu.js"
import "./about.js"
import { createHomeScreen } from "./home.js"

const content = document.querySelector("#content")

createHomeScreen(content)