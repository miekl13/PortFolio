document.addEventListener('DOMContentLoaded', () => {
  // Navegación suave
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });

  // Swiper.js para carrusel de galería
  const gallery1 = new Swiper('#gallery1', {
    loop: true,
    navigation: {
      nextEl: '#gallery1 .swiper-button-next',
      prevEl: '#gallery1 .swiper-button-prev',
    },
    pagination: {
      el: '#gallery1 .swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 15,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  });

  const gallery2 = new Swiper('#gallery2', {
    loop: true,
    navigation: {
      nextEl: '#gallery2 .swiper-button-next',
      prevEl: '#gallery2 .swiper-button-prev',
    },
    pagination: {
      el: '#gallery2 .swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 15,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  });

  // Navbar activo
  window.addEventListener('scroll', function () {
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
});
