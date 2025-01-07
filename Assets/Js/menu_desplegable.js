// Seleccionar los elementos
const menuIcon = document.querySelector('.menu-open-button');
const menuOverlay = document.querySelector('.menu-overlay');
const closeBtn = document.querySelector('.close-btn');

// Abrir el menú al hacer clic en la imagen
menuIcon.addEventListener('click', () => {
    menuOverlay.style.top = '0';
});

// Cerrar el menú al hacer clic en el botón de cierre
closeBtn.addEventListener('click', () => {
    menuOverlay.style.top = '-100%';
});