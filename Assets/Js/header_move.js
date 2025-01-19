// Selecciona el header
const header = document.querySelector('.header');

// Agrega un evento de scroll
window.addEventListener('scroll', () => {
  console.log("Hola");
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#ffffff';
    header.style.color = '#000000';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.color = '#ffffff';
  }
});