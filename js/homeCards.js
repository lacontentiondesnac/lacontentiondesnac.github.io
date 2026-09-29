const cardsContainer = document.querySelector("#nac-cards");
const cardTemplate = document.querySelector("#nac-card-template");

const cardText = {
    fr: {
        moreInfo: "Plus d'infos"
    },
    en: {
        moreInfo: "More information"
    }
};

const currentCardText = cardText[currentLang] || cardText.fr;

if (cardsContainer && cardTemplate)
{
    animalData.forEach((animal) =>
    {
        const animalContent = getAnimalContent(animal);
        if (!animalContent)
        {
            return;
        }

        const animalUrl = getAnimalUrl(animal.id);

        const card = cardTemplate.content.cloneNode(true);

        const imageLink = card.querySelector(".image-button");
        const image = card.querySelector("img");
        const imageText = card.querySelector(".image-button span");
        const title = card.querySelector(".card-title");
        const description = card.querySelector(".card-text");
        const button = card.querySelector(".btn");


        imageLink.href = animalUrl;
        imageLink.setAttribute("aria-label", animalContent.imageText);

        image.src = animal.image;
        image.alt = animalContent.imageText;

        imageText.textContent = animalContent.imageText;
        title.textContent = animalContent.titleText;
        description.textContent = animalContent.description;

        button.href = animalUrl;
        button.textContent = currentCardText.moreInfo;

        cardsContainer.appendChild(card);
    });
}