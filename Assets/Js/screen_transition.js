document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Evita la navegación instantánea
      const targetUrl = this.href;
  
      // Activa la transición de la pantalla blanca
      const transitionScreen = document.querySelector('.transition-screen');
      transitionScreen.style.bottom = '0';
  
      // Redirige después de la transición
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 1200); // Debe coincidir con la duración de la transición en CSS
    });
  });