document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".image-modal");
    const modalImage = document.querySelector("#modal-image");
    const images = document.querySelectorAll(".container-img img");
    let currentIndex = -1;

    // Función para abrir el modal con la imagen seleccionada
    function openModal(index) {
        currentIndex = index;
        modalImage.src = images[currentIndex].src;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Evita el scroll
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = ""; // Restaura el scroll
    }

    // Función para cambiar de imagen
    function changeImage(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        modalImage.src = images[currentIndex].src;
    }

    // Función para ir a la imagen anterior
    document.querySelector(".arrow-left").addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que el clic se propague al fondo y cierre el modal
        changeImage(-1); // Cambiar a la imagen anterior
    });

    // Función para ir a la imagen siguiente
    document.querySelector(".arrow-right").addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que el clic se propague al fondo y cierre el modal
        changeImage(1); // Cambiar a la imagen siguiente
    });

    // Asignar eventos a cada imagen
    images.forEach((img, index) => {
        img.addEventListener("click", (e) => {
            e.preventDefault();
            openModal(index);
        });
    });

    // Cerrar el modal si se hace clic fuera de la imagen (en el fondo)
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Cerrar el modal con la tecla Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    });
});
