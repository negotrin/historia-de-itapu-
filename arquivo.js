document.addEventListener('DOMContentLoaded', () => {
  // ===== MENU RESPONSIVO =====
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
  });

  // ===== ROLAGEM SUAVE =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (navUl.classList.contains('show')) {
        navUl.classList.remove('show'); // Fecha menu no mobile
      }
    });
  });

  // ===== GALERIA INTERATIVA =====
  const galeriaImgs = document.querySelectorAll('.galeria img');
  galeriaImgs.forEach(img => {
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      overlay.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
      document.body.appendChild(overlay);

      overlay.addEventListener('click', () => overlay.remove());
    });
  });

  // ===== MÚSICA DE FUNDO =====
  const audio = document.querySelector('#musica audio');
  const audioContainer = document.createElement('div');
  audioContainer.classList.add('audio-controls');

  document.querySelector('#musica').appendChild(audioContainer);

  const playPauseBtn = document.getElementById('playPause');
  const volumeSlider = document.getElementById('volume');

  audio.volume = 0.5;

  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch(() => console.log('Autoplay bloqueado'));
      playPauseBtn.textContent = '⏸️ Pausar';
    } else {
      audio.pause();
      playPauseBtn.textContent = '▶️ Tocar';
    }
  });

  volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
  });

  // ===== ANIMAÇÃO DAS SEÇÕES =====
  const sections = document.querySelectorAll('main section');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach(section => observer.observe(section));
});
