/* Main script file for the Schachclub SV Dettingen/Erms Jugend website */

document.addEventListener('DOMContentLoaded', function() {
    const animateButton = document.getElementById('animateButton');
    if (animateButton) {
        animateButton.addEventListener('click', function() {
            document.body.classList.add('fade-in');
        });
    }
});
