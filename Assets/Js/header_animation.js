function ejecutarScript() {
    const header = document.querySelector('.header');
    const header_nav = document.querySelector('.header-nav');
    const header_trigger = document.querySelector('.header-trigger');

    // Variables de control
    let animationComplete = false;
    let animation2Complete = true;

    // Funciones de los eventos
    function mostrarMenu() {
        if (animation2Complete) {
            header_trigger.style.animation = 'slideUp 0.3s ease-out forwards';
            header_nav.style.animation = 'slideDown 0.3s ease-out forwards';
            header_nav.style.backdropFilter = 'blur(8px)';
            header_nav.style.display = 'flex';
            animation2Complete = false;

            setTimeout(() => {
                header_trigger.style.display = 'none';
                animationComplete = true;
            }, 300);
        }
    }

    function ocultarMenu() {
        if (animationComplete) {
            header_trigger.style.animation = 'slideDown 0.3s ease-out forwards';
            header_nav.style.animation = 'slideUp 0.3s ease-out forwards';
            header_trigger.style.display = 'flex';
            animationComplete = false;

            setTimeout(() => {
                header_nav.style.display = 'none';
                animation2Complete = true;
            }, 300);
        }
    }

    // Función para agregar o quitar eventos según la resolución
    function gestionarEventos() {
        if (window.innerWidth > 1400) {
            // Agregar eventos si la pantalla es grande
            header_trigger.addEventListener('mouseenter', mostrarMenu);
            header_nav.addEventListener('mouseleave', ocultarMenu);
            console.log("Eventos agregados");
        } else {
            // Eliminar eventos si la pantalla es pequeña
            ocultarMenu();
            header_trigger.removeEventListener('mouseenter', mostrarMenu);
            header_nav.removeEventListener('mouseleave', ocultarMenu);
            console.log("Eventos eliminados");
        }
    }

    // Ejecutar la función al cargar la página y al redimensionar
    window.addEventListener('resize', gestionarEventos);
    gestionarEventos();
}

// Ejecutar el script inicialmente
ejecutarScript();
