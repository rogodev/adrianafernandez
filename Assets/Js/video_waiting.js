        // Seleccionamos todos los videos de la página
        const videos = document.querySelectorAll('video');
        const loadingScreen = document.getElementById('loading-screen');
        let videosLoaded = 0;

        // Función para verificar si todos los videos están cargados
        function checkVideosLoaded() {
            videosLoaded++;
            if (videosLoaded === videos.length) {
                // Si todos los videos están listos, ocultamos la pantalla de carga
                loadingScreen.style.display = 'none';

                const transitionScreen = document.querySelector('.transition-screen-out');
                transitionScreen.style.top = '100%';
            }
        }

        // Agregamos un listener para cada video para comprobar cuando estén listos
        videos.forEach((video) => {
            video.addEventListener('canplaythrough', checkVideosLoaded, { once: true });
        });