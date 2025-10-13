document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    toggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    //Carrusel de frases
    const quotes = [
        "“Nada es verdad, todo está permitido”",
        "“Somos la luz en la oscuridad. Somos los protectores de la libertad”",
        "“Cuando otros obedecen, nosotros cuestionamos”",
        "“La Hermandad no es un nombre, es un propósito”",
        "“La historia está escrita por quienes se atreven a desafiarla”"
    ];

    const quoteElement = document.getElementById("quote-carousel");
    let currentIndex = 0;

    setInterval(() => {
        quoteElement.classList.add("opacity-0");

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % quotes.length;
            quoteElement.textContent = quotes[currentIndex];
            quoteElement.classList.remove("opacity-0");
        }, 700); // tiempo de transición
    }, 5000); // tiempo entre frases


    document.querySelector(".current__year").textContent = new Date().getFullYear();
});