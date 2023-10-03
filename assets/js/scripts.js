document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
        // Recolhe o menu
        toggleMenu();
    });
});

function toggleMenu() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}