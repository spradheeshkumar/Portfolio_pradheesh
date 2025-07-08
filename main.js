document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    if (hamburger && navbar) {
        hamburger.onclick = () => {
            navbar.classList.toggle('active');
            hamburger.classList.toggle('active');
        };
    }
});

var typed = new Typed (".text", {
strings: ["Computer Science Engineer", "Cybersecurity Enthusiast", "Web Developer"],
typeSpeed: 100,
backSpeed: 100,
backDelay: 1000,
loop: true
});
