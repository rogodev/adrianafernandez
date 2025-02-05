document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const sendButton = document.getElementById('sendButton');
  const emailInput = document.getElementById('email'); // Campo de correo electrónico

  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    // Validación del correo
    const emailValue = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailValue)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    // Animación: botón a estado de envío
    sendButton.classList.add('sending');
    sendButton.innerText = 'Sending...';

    // Crear los datos en formato que entiende FormSubmit
    const formData = new FormData(contactForm);

    try {
      // Enviar los datos a FormSubmit
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Si la solicitud es exitosa
        setTimeout(() => {
          sendButton.classList.remove('sending');
          sendButton.classList.add('success');
          sendButton.innerHTML = '<i class="fa-solid fa-check"></i>'; // Ícono de éxito
          sendButton.disabled = true; // Deshabilita el botón
          contactForm.reset(); // Resetea el formulario
        }, 1000);
      } else {
        // Si la solicitud falla
        throw new Error('Hubo un problema al enviar el mensaje.');
      }
    } catch (error) {
      // Mostrar mensaje de error
      alert(error.message || 'No se pudo enviar el formulario. Inténtalo más tarde.');
      sendButton.classList.remove('sending');
      sendButton.innerText = 'Send'; // Restablece el texto original del botón
    }
  });
});