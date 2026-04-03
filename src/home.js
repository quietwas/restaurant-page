import "./styles.css"

function createHomeScreen(content) {
    content.replaceChildren()

    const titleCard = document.createElement("div")
    titleCard.classList.add("card")
    const title = document.createElement("h2")
    title.textContent = "Jezebel's"
    titleCard.appendChild(title)

    const reviewCard = document.createElement("div")
    reviewCard.classList.add("card")
    const review = document.createElement("p")
    const author = document.createElement("p")
    review.textContent = "This place ain't too half bad."
    author.textContent = "- Infernus"
    reviewCard.appendChild(review)
    reviewCard.appendChild(author)

    const hoursCard = document.createElement("div")
    hoursCard.classList.add("card")
    const hours = document.createElement("p")
    hours.textContent = "Everyday 12pm-4am"
    hoursCard.appendChild(hours)

    content.appendChild(titleCard)
    content.appendChild(reviewCard)
    content.appendChild(hoursCard)
}

const homeButton = document.querySelector(".home")

homeButton.addEventListener("click", () => {
    createHomeScreen(content)
})

export {
    createHomeScreen
}