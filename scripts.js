// Controlador de pestañas de partituras
document.querySelectorAll('.tab-menu-partituras a').forEach(tab => {
  tab.addEventListener('click', function (e) {
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
  tabLink.addEventListener('click', function (e) {
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
  // Lazy loading de videos
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

  // Abrir enlaces PDF en una nueva pestaña
  document.querySelectorAll('.pdf-link').forEach(link => {
    link.setAttribute('target', '_blank');
  });

  // Controlador de pestañas de partituras
  setupTabs('.tab-menu-partituras a', '.tab-content-partituras .tab-pane');

  // Controlador de pestañas de videos
  setupTabs('.tab-menu a', '.tab-content .tab-pane');

  // Activar el menú lateral (Scroll Horizontal de Secciones)
  setupSidebarNavigation();

  // Contador de visitas
  setupVisitCounter();

  const audio = document.getElementById("background-music");
  const toggleButton = document.getElementById("toggle-music");

  // Inicializar el botón
  toggleButton.textContent = "Reproducir Música";

  // Evento para manejar la reproducción
  toggleButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      toggleButton.textContent = "Detener Música"; // Cambia el texto del botón
    } else {
      audio.pause();
      toggleButton.textContent = "Reproducir Música"; // Cambia el texto del botón
    }
  });

  // Manejar reproducción/pausa del audio Trastienda.mp3
  const trastiendaAudio = document.getElementById("trastienda-audio");
  const toggleTrastiendaButton = document.getElementById("toggle-trastienda");

  toggleTrastiendaButton.addEventListener("click", () => {
    if (trastiendaAudio.paused) {
      trastiendaAudio.play();
      toggleTrastiendaButton.textContent = "Pausar Grabación";
    } else {
      trastiendaAudio.pause();
      toggleTrastiendaButton.textContent = "Reproducir Grabación";
    }
  });

  // Restablecer el texto del botón cuando el audio termine
  trastiendaAudio.addEventListener("ended", () => {
    toggleTrastiendaButton.textContent = "Reproducir Grabación";
  });

  // Manejar reproducción/pausa para "Mi Refugio"
  const audioMiRefugio = document.getElementById("audio-mi-refugio");
  const buttonMiRefugio = document.getElementById("audio-button-mi-refugio");

  buttonMiRefugio.addEventListener("click", () => {
    if (audioMiRefugio.paused) {
      audioMiRefugio.play();
      buttonMiRefugio.textContent = "Pausar 'Mi Refugio'";
    } else {
      audioMiRefugio.pause();
      buttonMiRefugio.textContent = "Reproducir 'Mi Refugio'";
    }
  });

  // Manejar reproducción/pausa para "La Familia"
  const audioLaFamilia = document.getElementById("audio-la-familia");
  const buttonLaFamilia = document.getElementById("audio-button-la-familia");

  buttonLaFamilia.addEventListener("click", () => {
    if (audioLaFamilia.paused) {
      audioLaFamilia.play();
      buttonLaFamilia.textContent = "Pausar 'La Familia'";
    } else {
      audioLaFamilia.pause();
      buttonLaFamilia.textContent = "Reproducir 'La Familia'";
    }
  });
});

// Función para configurar pestañas
function setupTabs(tabSelector, paneSelector) {
  document.querySelectorAll(tabSelector).forEach(tab => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      const targetTab = this.dataset.tab;

      // Quitar activo de todos
      document.querySelectorAll(tabSelector).forEach(t => t.classList.remove('active'));
      document.querySelectorAll(paneSelector).forEach(p => p.classList.remove('active'));

      // Activar actual
      this.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });
}

// Función para configurar el menú lateral
function setupSidebarNavigation() {
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
}

// Función para configurar el contador de visitas
function setupVisitCounter() {
  let visitCount = localStorage.getItem('visitCount') || 0;
  visitCount++;
  localStorage.setItem('visitCount', visitCount);

  const counterElement = document.getElementById('visit-counter');
  if (counterElement) {
    counterElement.textContent = `Visitas: ${visitCount}`;
  }
}

