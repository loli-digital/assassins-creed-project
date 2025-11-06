document.addEventListener("DOMContentLoaded", () => {
    const isDesktop = window.innerWidth >= 1024;
    const isTabletLandscape = window.innerWidth >= 768 && window.matchMedia("(orientation: landscape)").matches;

    window.addEventListener("resize", () => {
        const isDesktop = window.innerWidth >= 1024;
        const isTabletLandscape = window.innerWidth >= 768 && window.matchMedia("(orientation: landscape)").matches;

        if (isDesktop || isTabletLandscape) {
            location.reload(); // recarga para activar el lightbox
        }
    });

    if (isDesktop || isTabletLandscape) {
        const pictures = Array.from(document.querySelectorAll("picture[data-lightbox]"));
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        document.body.appendChild(lightbox);

        const closeButton = document.createElement("button");
        closeButton.classList.add("btn_close");
        closeButton.innerHTML =
            `<svg aria-hidden="true"
       xmlns="http://www.w3.org/2000/svg"
       fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd"
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
          clip-rule="evenodd"/>
        </svg>`;

        const prevButton = document.createElement("button");
        prevButton.classList.add("btn_prev");
        prevButton.innerHTML =
            `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
        </svg>`;

        const nextButton = document.createElement("button");
        nextButton.classList.add("btn_next");
        nextButton.innerHTML =
            `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
        </svg>`;

        let currentIndex = 0;

        function showImage(index) {
            const clone = pictures[index].cloneNode(true);

            // Eliminar el efecto de escala al hacer hover en picture ( dentro de lightbox )
            clone.classList.remove("hover:scale-105");

            lightbox.innerHTML = "";
            lightbox.appendChild(clone);
            lightbox.appendChild(closeButton);
            lightbox.appendChild(prevButton);
            lightbox.appendChild(nextButton);
            lightbox.classList.add("active");
            document.body.classList.add("overflow-hidden");
        }

        pictures.forEach((picture, index) => {
            picture.addEventListener("click", () => {
                currentIndex = index;
                showImage(currentIndex);
            });
        });

        closeButton.addEventListener("click", () => {
            lightbox.classList.remove("active");
            document.body.classList.remove("overflow-hidden");
        });

        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + pictures.length) % pictures.length;
            showImage(currentIndex);
        });

        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % pictures.length;
            showImage(currentIndex);
        });

        lightbox.addEventListener("click", e => {
            if (e.target === lightbox) {
                lightbox.classList.remove("active");
                document.body.classList.remove("overflow-hidden");
            }
        });

    }

});