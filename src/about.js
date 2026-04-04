import "./styles.css"

function createAboutScreen(content) {
    content.replaceChildren()

    const titleCard = document.createElement("div")
    titleCard.classList.add("card")
    const title = document.createElement("h2")
    title.textContent = "About"
    titleCard.appendChild(title)

    content.appendChild(titleCard)
}

const aboutButton = document.querySelector(".about")

aboutButton.addEventListener("click", () => {
    createAboutScreen(content)
})