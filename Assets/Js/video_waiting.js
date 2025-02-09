// Verificamos si el dispositivo es móvil
const isMobile = /Mobi|Android/i.test(navigator.userAgent);

// Seleccionamos todos los videos de la página
const videos = document.querySelectorAll('video');
const loadingScreen = document.getElementById('loading-screen');
let videosLoaded = 0;
let totalVideos = videos.length;

// Función para verificar si todos los videos están cargados
function checkVideosLoaded() {
    videosLoaded++;
    if (videosLoaded === totalVideos) {
        // Si todos los videos están listos, ocultamos la pantalla de carga
        loadingScreen.style.display = 'none';

        // Cuando los videos estén cargados, lanzamos el evento load para la transición
        window.dispatchEvent(new Event('load'));
    }
}

// Solo cargar el primer video en dispositivos móviles
if (isMobile) {
    const firstVideo = videos[0];
    firstVideo.addEventListener('canplaythrough', checkVideosLoaded, { once: true });
    firstVideo.load();  // Forzamos la carga del primer video
} else {
    // En escritorio, cargamos todos los videos
    videos.forEach((video) => {
        video.addEventListener('canplaythrough', checkVideosLoaded, { once: true });
        video.load();  // Forzamos la carga de todos los videos
    });
}

// Transición después de que los videos hayan cargado o 10 segundos después
window.addEventListener('load', () => {
    const transitionScreen = document.querySelector('.transition-screen-out');
    
    // Timeout para la transición después de 10 segundos
    const timeout = setTimeout(() => {
        if (videosLoaded < totalVideos) {
            // Si no se han cargado todos los videos en 10 segundos, ejecuta la transición
            transitionScreen.style.top = '100%';
            loadingScreen.style.display = 'none';
        }
    }, 10000); // 10 segundos

    // Si los videos se cargan antes de 10 segundos, realizamos la transición inmediatamente
    if (videosLoaded === totalVideos) {
        clearTimeout(timeout);
        transitionScreen.style.top = '100%';
        loadingScreen.style.display = 'none';
    }
});