
  document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('intro-splash');
    if (!splash) return;
  
    // Espera 5 segundos antes de ocultarlo
    setTimeout(() => {
      splash.classList.add('hide');
  
      // Cuando termine la transición, lo eliminas
      const onEnd = () => {
        splash.removeEventListener('transitionend', onEnd);
        splash.remove();
      };
      splash.addEventListener('transitionend', onEnd);
    }, 5000); // ⬅️ aquí ajustas la duración visible (5s = 5000ms)
  });
  
  