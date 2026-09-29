const homeText = {
    fr: {
        title: "La contention des NAC",
        subtitle: "Cliquez sur un animal.",
        contactTitle: "Contact",
        contactButton: "Envoyer un message",
        moreInfo: "Plus d'infos"
    },
    en: {
        title: "NAC restraint",
        subtitle: "Click on an animal.",
        contactTitle: "Contact",
        contactButton: "Send a message",
        moreInfo: "More information"
    }
};

const currentHomeText = homeText[currentLang] || homeText.fr;

const homeTitle = document.querySelector("#home-title");
const homeSubtitle = document.querySelector("#home-subtitle");
const contactTitle = document.querySelector("#contact-title");
const contactButton = document.querySelector("#contact-button");

if (homeTitle)
{
    homeTitle.textContent = currentHomeText.title;
}

if (homeSubtitle)
{
    homeSubtitle.textContent = currentHomeText.subtitle;
}

if (contactTitle)
{
    contactTitle.textContent = currentHomeText.contactTitle;
}

if (contactButton)
{
    contactButton.textContent = currentHomeText.contactButton;
}