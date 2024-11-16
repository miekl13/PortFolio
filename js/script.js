// Desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Evitar comportamiento por defecto
      const targetId = this.getAttribute('href').substring(1); // Obtener el id del destino
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth' // Desplazamiento suave
      });
    });
  });
  
  // Validación y mensaje al enviar el formulario de contacto
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar recarga de página
  
    // Captura de datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
  
    if (nombre && email && mensaje) {
      alert(`¡Gracias por tu mensaje, ${nombre}! Te responderé pronto.`);
      this.reset(); // Limpiar el formulario
    } else {
      alert('Por favor, completa todos los campos antes de enviar.');
    }
  });
  
  // Efecto de resaltado en la sección activa
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70;
      if (scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });
  