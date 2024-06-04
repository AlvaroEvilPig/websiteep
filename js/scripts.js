document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Maneja la activación y desactivación de los paneles del acordeón
  $('#faqAccordion').on('show.bs.collapse', function (e) {
    $(e.target).prev('.card-header').addClass('active');
  }).on('hide.bs.collapse', function (e) {
    $(e.target).prev('.card-header').removeClass('active');
  });
});




  
  