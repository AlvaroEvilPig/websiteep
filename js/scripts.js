document.addEventListener('DOMContentLoaded', function() {
  // Activar el enlace de navegación actual
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          navLinks.forEach(nav => nav.classList.remove('active'));
          this.classList.add('active');
      });
  });

  // Efecto de scroll suave para los enlaces de la página
  const scrollLinks = document.querySelectorAll('.navbar-nav a, .btn');
  scrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          if (this.hash !== '') {
              e.preventDefault();
              const hash = this.hash;

              document.querySelector(hash).scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });

  // Mostrar/ocultar el botón de volver arriba
  const backToTopButton = document.createElement('button');
  backToTopButton.classList.add('back-to-top');
  backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  });

  backToTopButton.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});
