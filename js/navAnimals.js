const mainNavLinks = document.querySelector("#mainNavLinks");

if (mainNavLinks) {
    animals.forEach((animal) => {
        const navItem = document.createElement("li");

        const navLink = document.createElement("a");
        navLink.className = "dropdown-item";
        navLink.href = animal.href;
        navLink.textContent = animal.imageText;

        navItem.appendChild(navLink);
        mainNavLinks.appendChild(navItem);
    });
}