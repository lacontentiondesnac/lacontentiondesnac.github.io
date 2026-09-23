const animals = [
    {
        name: "Lapin",
        href: "Lapin.html",
        image: "images/photos/lapin.jpg",
        alt: "Lapin",
        ariaLabel: "Lire les informations sur le lapin",
        description: "Lapin."
    },
    {
        name: "Cochon d’Inde",
        href: "cochon-inde.html",
        image: "",
        alt: "Cochon d’Inde",
        ariaLabel: "Lire la fiche sur le cochon d’Inde",
        description: "Cochon d’Inde."
    },
    {
        name: "Furet",
        href: "furet.html",
        image: "",
        alt: "Furet",
        ariaLabel: "Lire la fiche sur le furet",
        description: "Furet."
    },
    {
        name: "Rat et souris",
        href: "ratSouris.html",
        image: "",
        alt: "Rat domestique",
        ariaLabel: "Lire la fiche sur les rats et souris",
        description: "Rat et souris."
    },
    {
        name: "Poule",
        href: "Poule.html",
        image: "",
        alt: "Poule",
        ariaLabel: "Lire la fiche sur les poules",
        description: "Poule."
    },
    {
        name: "Oiseau de petite taille",
        href: "oiseauPetit.html",
        image: "",
        alt: "Oiseau de petite taille",
        ariaLabel: "Lire la fiche sur les oiseaux de petite taille",
        description: "Oiseau de petite taille."
    },
    {
        name: "Oiseau de grande taille",
        href: "oiseauGrand.html",
        image: "",
        alt: "Oiseau de grande taille",
        ariaLabel: "Lire la fiche sur les oiseaux de grande taille",
        description: "Oiseau de grande taille."
    },
    {
        name: "Lézard",
        href: "Lezard.html",
        image: "",
        alt: "Lézard",
        ariaLabel: "Lire la fiche sur les lézards",
        description: "Lézard."
    },
    {
        name: "Tortue",
        href: "Tortue.html",
        image: "",
        alt: "Tortue",
        ariaLabel: "Lire la fiche sur les tortues",
        description: "Tortue."
    },
    {
        name: "Serpent",
        href: "Serpent.html",
        image: "",
        alt: "Serpent",
        ariaLabel: "Lire la fiche sur les serpents",
        description: "Serpent."
    }
];

const cardsContainer = document.querySelector("#nac-cards");
const cardTemplate = document.querySelector("#nac-card-template");

animals.forEach((animal) => {
    const card = cardTemplate.content.cloneNode(true);

    const imageLink = card.querySelector(".image-button");
    const image = card.querySelector("img");
    const imageText = card.querySelector(".image-button span");
    const title = card.querySelector(".card-title");
    const description = card.querySelector(".card-text");
    const button = card.querySelector(".btn");

    imageLink.href = animal.href;
    imageLink.setAttribute("aria-label", animal.ariaLabel);

    image.src = animal.image;
    image.alt = animal.alt;

    imageText.textContent = animal.name;
    title.textContent = animal.name;
    description.textContent = animal.description;

    button.href = animal.href;

    cardsContainer.appendChild(card);
});