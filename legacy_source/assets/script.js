document.addEventListener('DOMContentLoaded', function() {
    const animateButton = document.getElementById('animateButton');
    const ctaSection = document.querySelector('.cta-section'); // Oder ein anderes Element, das animiert werden soll

    if (animateButton && ctaSection) {
        animateButton.addEventListener('click', function() {
            // Beispiel: Eine Klasse hinzufügen, um eine CSS-Animation auszulösen
            ctaSection.classList.remove('fade-in'); // Entfernen, um erneute Animation zu ermöglichen
            void ctaSection.offsetWidth; // Wichtig: Reflow erzwingen
            ctaSection.classList.add('fade-in'); 

            // Oder eine komplexere JS-Animation
            console.log("Button geklickt, Animation gestartet!");
        });
    }

    // Dynamisches Jahr im Footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Aktiven Navigationslink hervorheben (optional, falls serverseitig nicht möglich)
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Sicherstellen, dass nur der aktuelle Link aktiv ist
        }
    });
     // Wenn Startseite ohne "index.html" in URL, trotzdem markieren
    if (currentPage === "" && window.location.pathname.endsWith('/')) {
        const homeLink = document.querySelector('nav ul li a[href="index.html"]');
        if (homeLink) homeLink.classList.add('active');
    }
});