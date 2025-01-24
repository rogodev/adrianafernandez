document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const sendButton = document.getElementById('sendButton');
  const emailInput = document.getElementById('email');  // El campo de correo electrónico

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que se recargue la página

    // Validamos si el correo electrónico tiene un formato válido
    const emailValue = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Expresión regular para el formato de correo

    if (!emailRegex.test(emailValue)) {
      // Si el correo no es válido, mostramos un mensaje de error y detenemos el envío
      alert('Por favor ingresa un correo electrónico válido.');
      return; // Detiene el envío del formulario
    }

    // Comienza la animación: el botón se convierte en círculo
    sendButton.classList.add('sending');

    // Simula el envío del formulario y muestra el ícono de check
    setTimeout(() => {
      sendButton.classList.remove('sending'); // Ya no es un círculo animado
      sendButton.classList.add('success');    // Se mantiene como un círculo con el check
      sendButton.innerHTML = '<i class="fa-solid fa-check"></i>'; // Agrega el ícono de check

      // Deshabilita el botón para que no se pueda interactuar más
      sendButton.disabled = true;

      // Limpia los campos del formulario
      contactForm.reset(); // Resetea todos los campos del formulario
    }, 1000); // Espera 500ms para la animación
  });
});
