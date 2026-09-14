document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.mobile-click');

    // Menu burger principal
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    // Gestion intelligente du clic sur smartphone
    dropdownToggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            // Si le sous-menu n'est pas encore ouvert, on bloque le lien pour l'ouvrir
            if (!dropdown.classList.contains('open')) {
                e.preventDefault();
                dropdown.classList.add('open');
            }
            // Si le sous-menu est déjà ouvert, le comportement normal reprend (le lien fonctionne)
        }
    });
});
