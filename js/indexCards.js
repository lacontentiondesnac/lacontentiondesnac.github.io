const cardsContainer = document.querySelector("#nac-cards");
const cardTemplate = document.querySelector("#nac-card-template");

if (cardsContainer && cardTemplate) {
    animals.forEach((animal) => {
        const card = cardTemplate.content.cloneNode(true);

        const imageLink = card.querySelector(".image-button");
        const image = card.querySelector("img");
        const imageText = card.querySelector(".image-button span");
        const title = card.querySelector(".card-title");
        const description = card.querySelector(".card-text");
        const button = card.querySelector(".btn");

        imageLink.href = animal.href;
        imageLink.setAttribute("aria-label", animal.imageText);

        image.src = animal.image;
        image.alt = animal.imageText;

        imageText.textContent = animal.imageText;
        title.textContent = animal.titleText;
        description.textContent = animal.description;

        button.href = animal.href;

        cardsContainer.appendChild(card);
    });
}