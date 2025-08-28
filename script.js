// TOGGLE MENU MOBILE
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// ANIMASI SCROLL
window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".card, .about-text, .about-img, .testi-card, .logo-grid");
    elements.forEach( el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});