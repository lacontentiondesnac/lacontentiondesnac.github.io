const animalPageParams = new URLSearchParams(window.location.search);
const currentAnimalId = animalPageParams.get("animal");

const currentAnimal = animalData.find((animal) => animal.id === currentAnimalId);

const animalPageTitle = document.querySelector("#animal-page-title");
const animalVideoSections = document.querySelector("#animal-video-sections");
const animalVideoTemplate = document.querySelector("#animal-video-template");
const backButton = document.querySelector("#back-button");

const animalPageText =
    {
        fr: {
            back: "Retour",
        },
        en: {
            back: "Back",
        }
    };

const currentAnimalPageText = animalPageText[currentLang] || animalPageText.fr;

if (backButton)
{
    backButton.textContent = currentAnimalPageText.back;
    backButton.href = `index.html?lang=${currentLang}#nac-list`;
}

if (currentAnimal)
{
    const animalContent = getAnimalContent(currentAnimal);

    if (animalPageTitle)
    {
        animalPageTitle.textContent = animalContent.pageTitle || animalContent.titleText;
        document.title = `${animalContent.titleText} - La Contention Des NAC`;
    }

    if (animalVideoSections && animalVideoTemplate)
    {
        animalContent.videos.forEach((video, index) =>
        {
            const videoSection = animalVideoTemplate.content.cloneNode(true);

            const row = videoSection.querySelector(".animal-video-section");
            const iframe = videoSection.querySelector("iframe");
            const title = videoSection.querySelector("h2");
            const textContainer = videoSection.querySelector(".animal-video-text");

            if (index % 2 === 1)
            {
                row.classList.add("flex-lg-row-reverse");
            }

            iframe.src = video.url;
            iframe.title = video.title;

            title.textContent = video.title;

            video.text.forEach((paragraphText) =>
            {
                const paragraph = document.createElement("p");
                paragraph.textContent = paragraphText;
                textContainer.appendChild(paragraph);
            });

            animalVideoSections.appendChild(videoSection);
        });
    }
}