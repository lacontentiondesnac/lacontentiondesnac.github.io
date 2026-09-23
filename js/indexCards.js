const animals = [
    {
        image: "images/photos/lapin.jpg",
        imageText: "Lapin",
        titleText: "Lapin",
        description: "Lapin.",
        href: "Lapin.html"
    },
    {
        image: "",
        imageText: "Cochon d’Inde",
        titleText: "Cochon d’Inde",
        description: "Cochon d’Inde.",
        href: "CochonDinde.html"
    },
    {
        image: "",
        imageText: "Furet",
        titleText: "Furet",
        description: "Furet.",
        href: "Furet.html"
    },
    {
        image: "",
        imageText: "Rat et souris",
        titleText: "Rat et souris",
        description: "Rat et souris.",
        href: "RatSouris.html"
    },
    {
        image: "",
        imageText: "Poule",
        titleText: "Poule",
        description: "Poule.",
        href: "Poule.html"
    },
    {
        image: "",
        imageText: "Oiseau de petite taille",
        titleText: "Oiseau de petite taille",
        description: "Oiseau de petite taille.",
        href: "OiseauPetit.html"
    },
    {
        image: "",
        imageText: "Oiseau de grande taille",
        titleText: "Oiseau de grande taille",
        description: "Oiseau de grande taille.",
        href: "OiseauGrand.html"
    },
    {
        image: "",
        imageText: "Lézard",
        titleText: "Lézard",
        description: "Lézard.",
        href: "Lezard.html"
    },
    {
        image: "",
        imageText: "Tortue",
        titleText: "Tortue",
        description: "Tortue.",
        href: "Tortue.html"
    },
    {
        image: "",
        imageText: "Serpent",
        titleText: "Serpent",
        description: "Serpent.",
        href: "Serpent.html"
    }
];

const cardsContainer = document.querySelector("#nac-cards");
const cardTemplate = document.querySelector("#nac-card-template");
const mainNavLinks = document.querySelector("#mainNavLinks");

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

animals.forEach((animal) => {
    const navItem = document.createElement("li");
    navItem.className = "nav-item";

    const navLink = document.createElement("a");
    navLink.className = "nav-link";
    navLink.href = animal.href;
    navLink.textContent = animal.imageText;

    navItem.appendChild(navLink);
    mainNavLinks.appendChild(navItem);
});