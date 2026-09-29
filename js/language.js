const supportedLanguages = ["fr", "en"];

const urlParams = new URLSearchParams(window.location.search);
const urlLanguage = urlParams.get("lang");

const currentLang = supportedLanguages.includes(urlLanguage) ? urlLanguage : "fr";

function getAnimalUrl(animalId)
{
    return `animal.html?animal=${animalId}&lang=${currentLang}`;
}

function getAnimalContent(animal)
{
    if (!animal.content)
    {
        console.error(`Missing content for animal: ${animal.id}`);
        return null;
    }

    return animal.content[currentLang] || animal.content.fr;
}