import "./styles.css"

function createAboutScreen(content) {
    content.replaceChildren()

    const titleCard = document.createElement("div")
    titleCard.classList.add("card")
    const title = document.createElement("h2")
    title.textContent = "From Arson to Ale"
    titleCard.appendChild(title)
    const bodyCard = document.createElement("div")
    bodyCard.classList.add("card")
    const body = document.createElement("p")
    body.textContent = "Infernus wasn't always the chillest guy behind the bar. His youth was a whirlwind of rebellion, impetuous fire-mastery, and the occasional bit of arson. Today, he prefers the rhythm of a cocktail shaker over the crackle of a burning building. Jezebel’s is his sanctuary for those who appreciate the 'Why' behind a good drink as much as the 'How'. Step inside, mind your manners, and don't make him dust off his old skills"
    bodyCard.appendChild(body)

    content.appendChild(titleCard)
    content.appendChild(bodyCard)
}

const aboutButton = document.querySelector(".about")

export {
    createAboutScreen,
    aboutButton
}