const navbarContainer = document.querySelector("#commonNavbar");
const footerContainer = document.querySelector("#commonFooter");

if (navbarContainer)
{
    navbarContainer.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
            <div class="container">
                <a class="navbar-brand fw-bold brand-color" href="index.html">
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
                                Animals
                            </a>

                            <ul class="dropdown-menu dropdown-menu-end" id="mainNavLinks" aria-labelledby="animalsDropdown">
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="mailto:lacontentiondesnac@gmail.com">Contact</a>
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
                <p class="mb-0">© 2026 La Contention Des NAC — Tous droits réservés</p>
            </div>
        </footer>
    `;
}