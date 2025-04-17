// Controlador de pestañas de partituras
document.querySelectorAll('.tab-menu-partituras a').forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        const targetTab = this.dataset.tab;
        
        // Quitar activo de todos
        document.querySelectorAll('.tab-menu-partituras a').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content-partituras .tab-pane').forEach(p => p.classList.remove('active'));
        
        // Activar actual
        this.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

  
  // SCRIPT ACTIVAR EL MENÚ LATERAL (Scroll Horizontal de Secciones)

    document.querySelectorAll('.pestañas a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        // Actualizar clase "active"
        document.querySelectorAll('.pestañas a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        // Obtener la sección de destino
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        // Calcular el índice de la sección en el contenedor
        const sections = Array.from(document.querySelectorAll('.seccion'));
        const index = sections.indexOf(targetSection);
        document.querySelector('.content-container').scrollLeft =
          document.querySelector('.content-container').clientWidth * index;
      });
    });

  
  // SCRIPT PARA MANEJAR LAS PESTAÑAS VIDEOS
  
    document.querySelectorAll('.tab-menu a').forEach(tabLink => {
      tabLink.addEventListener('click', function(e) {
        e.preventDefault();
        // Quitar la clase active de todos los enlaces y paneles
        document.querySelectorAll('.tab-menu a').forEach(link => link.classList.remove('active'));
        document.querySelectorAll('.tab-content .tab-pane').forEach(pane => pane.classList.remove('active'));
        
        // Agregar la clase active al enlace clickeado
        this.classList.add('active');
        // Mostrar el panel correspondiente
        const tabID = this.getAttribute('data-tab');
        document.getElementById(tabID).classList.add('active');
      });
    });
 
    document.addEventListener("DOMContentLoaded", function () {
      const lazyVideos = document.querySelectorAll("iframe.lazy-video");
  
      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const iframe = entry.target;
                  iframe.src = iframe.dataset.src; // Reemplaza data-src por src
                  observer.unobserve(iframe); // Deja de observar este video
              }
          });
      });
  
      lazyVideos.forEach(video => observer.observe(video));
  });

  document.addEventListener("DOMContentLoaded", function () {
    const pdfLinks = document.querySelectorAll('.pdf-link');
    pdfLinks.forEach(link => {
      link.setAttribute('target', '_blank');
    });
  });



let visitCount = localStorage.getItem('visitCount') || 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);

document.addEventListener('DOMContentLoaded', () => {
  const counterElement = document.getElementById('visit-counter');
  counterElement.textContent = `Visitas: ${visitCount}`;
});

