import "./styles.css"

function createMenuScreen(content) {
    content.replaceChildren()

    const titleCard = document.createElement("div")
    titleCard.classList.add("card")
    const title = document.createElement("h2")
    title.textContent = "Menu"
    titleCard.appendChild(title)

    content.appendChild(titleCard)
}

const menuButton = document.querySelector(".menu")

menuButton.addEventListener("click", () => {
    createMenuScreen(content)
})