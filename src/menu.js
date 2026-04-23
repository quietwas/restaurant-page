import "./styles.css"

const items = {
    "The Catalyst Cocktail": "A spew of 'napalm' (spiced rum) that slows your worries and amplifies your night.",
    "Afterburn Wings" : "Prepared with a supernatural mastery of fire. The heat builds up with every bite—refresh the burn with a side of ranch.",
    "Flame Dash Soda" : "A high-speed caffeine kick that leaves a trail of citrus behind. Perfect for those who need to swoop in for a late-night shift.",
    "Abrams' Rye" : "Straight rye whiskey. No frills. Exactly the way the regular patrons like it."
}

import placeholder from "./images/placeholder.png"

function createMenuScreen(content) {
    content.replaceChildren()

    const titleCard = document.createElement("div")
    titleCard.classList.add("card")
    const title = document.createElement("h2")
    title.textContent = "Ixian Infusions"
    titleCard.appendChild(title)

    content.appendChild(titleCard)

    Object.entries(items).forEach(([key, value]) => {
        const itemCard = document.createElement("div")
        itemCard.classList.add("card")
        const item = document.createElement("h3")
        item.textContent = key
        const itemImage = document.createElement("img");
        itemImage.src = placeholder
        itemImage.width = 150;
        itemImage.height = 150;
        const desc = document.createElement("p")
        desc.textContent = value
        itemCard.appendChild(item)
        itemCard.appendChild(itemImage)
        itemCard.appendChild(desc)
        content.appendChild(itemCard)
    })
}

const menuButton = document.querySelector(".menu")

export {
    createMenuScreen,
    menuButton
}