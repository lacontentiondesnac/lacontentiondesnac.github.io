const urlParams = new URLSearchParams(window.location.search);
const currentAnimalId = urlParams.get("animal");

const currentAnimal = animals.find((animal) => animal.id === currentAnimalId);

const animalPageTitle = document.querySelector("#animal-page-title");
const animalVideoSections = document.querySelector("#animal-video-sections");
const animalVideoTemplate = document.querySelector("#animal-video-template");

if (currentAnimal && animalPageTitle)
{
    animalPageTitle.textContent = currentAnimal.pageTitle || currentAnimal.titleText;
    document.title = `${currentAnimal.titleText} - La Contention Des NAC`;
}

if (currentAnimal && animalVideoSections && animalVideoTemplate)
{
    currentAnimal.videos.forEach((video, index) =>
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