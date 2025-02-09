// Seleccionamos todos los videos de la página
const videos = document.querySelectorAll('video');

// Variable para rastrear el video actualmente reproduciéndose
let currentlyPlaying = null;

// Agregamos un evento de clic a cada video
videos.forEach((video) => {
    video.addEventListener('click', () => {
        // Si hay un video reproduciéndose y no es el que se pulsó, lo pausamos
        if (currentlyPlaying && currentlyPlaying !== video) {
            currentlyPlaying.pause();
        }

        // Alternamos entre play y pause en el video pulsado
        if (video.paused) {
            video.play();
            currentlyPlaying = video; // Actualizamos el video actualmente reproduciéndose
        } else {
            video.pause();
            currentlyPlaying = null; // No hay ningún video reproduciéndose
        }
    });
});
