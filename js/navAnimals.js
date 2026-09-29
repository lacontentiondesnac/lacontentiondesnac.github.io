const mainNavLinks = document.querySelector("#mainNavLinks");

if (mainNavLinks)
{
    animalData.forEach((animal) =>
    {
        const animalContent = getAnimalContent(animal);
        if (!animalContent)
        {
            return;
        }

        const navItem = document.createElement("li");

        const navLink = document.createElement("a");
        navLink.className = "dropdown-item";
        navLink.href = getAnimalUrl(animal.id);
        navLink.textContent = animalContent.imageText;

        navItem.appendChild(navLink);
        mainNavLinks.appendChild(navItem);
    });
}