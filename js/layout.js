const navbarContainer = document.querySelector("#commonNavbar");
const footerContainer = document.querySelector("#commonFooter");

// === langage ===
const layoutText = {
    fr: {
        animals: "Animaux",
        contact: "Contact",
        french: "FR",
        english: "EN",
        footer: "© 2026 La Contention Des NAC — Tous droits réservés"
    },
    en: {
        animals: "Animals",
        contact: "Contact",
        french: "FR",
        english: "EN",
        footer: "© 2026 La Contention Des NAC — All rights reserved"
    }
};

const currentLayoutText = layoutText[currentLang] || layoutText.fr;

function getLanguageSwitchUrl(language)
{
    const pageName = window.location.pathname.split("/").pop() || "index.html";
    const params = new URLSearchParams(window.location.search);

    params.set("lang", language);

    const queryString = params.toString();
    const hash = window.location.hash;

    return `${pageName}${queryString ? `?${queryString}` : ""}${hash}`;
}

// === navbar ===
if (navbarContainer)
{
    navbarContainer.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
            <div class="container">
                <a class="navbar-brand fw-bold brand-color" href="index.html?lang=${currentLang}">
                    La Contention Des NAC
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar" aria-expanded="false" aria-label="Afficher le menu">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="mainNavbar">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="animalsDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                ${currentLayoutText.animals}
                            </a>

                            <ul class="dropdown-menu dropdown-menu-end" id="mainNavLinks" aria-labelledby="animalsDropdown">
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="mailto:lacontentiondesnac@gmail.com">${currentLayoutText.contact}</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="${getLanguageSwitchUrl("fr")}">                                ${currentLayoutText.french}                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="${getLanguageSwitchUrl("en")}">                                ${currentLayoutText.english}                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
}

if (footerContainer)
{
    footerContainer.innerHTML = `
        <footer class="footer-section py-4 text-center text-white">
            <div class="container">
                <p class="mb-0">${currentLayoutText.footer}</p>
            </div>
        </footer>
    `;
}