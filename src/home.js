import "./styles.css"

function createHomeScreen(content) {
    content.replaceChildren()

    const titleCard = document.createElement("div")
    titleCard.classList.add("card")
    const title = document.createElement("h2")
    title.textContent = "Welcome to Jezebel's"
    titleCard.appendChild(title)

    const subHeaderCard = document.createElement("div")
    subHeaderCard.classList.add("card")
    const subHeader = document.createElement("h3")
    subHeader.textContent = "Good music. Interesting people. No belligerence tolerated."
    subHeaderCard.appendChild(subHeader)

    const bodyCard = document.createElement("div")
    bodyCard.classList.add("card")
    const body = document.createElement("p")
    body.textContent = "Located in the heart of the Interdimensional Ritz, Jezebel's is the only neutral ground where a demon from another plane can serve you a drink without setting the tab on fire. Whether you're here to escape the lanes or just to hear the live jazz, pull up a stool. Just remember: Infernus might have mellowed out, but he hasn't forgotten how to dispose of evidence."
    bodyCard.appendChild(body)

    content.appendChild(titleCard)
    content.appendChild(subHeaderCard)
    content.appendChild(bodyCard)
}

const homeButton = document.querySelector(".home")

homeButton.addEventListener("click", () => {
    createHomeScreen(content)
})

export {
    createHomeScreen
}