  // Selecciona el video
const video = document.getElementById('video');
const animatedDiv = document.querySelector('.intro');

    // Escucha el evento 'ended'
video.addEventListener('ended', function() {
    // Regresa el div a su posición después de 3 segundos
    setTimeout(() => {
        animatedDiv.style.transform = 'translateY(100%)';
    }, 200);
});