// =========================================
// MENU MOBILE
// =========================================
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// =========================================
// HEADER — esconde/mostra no scroll
// =========================================
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const current = window.scrollY;

  if (current > lastScroll && current > 80) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }

  lastScroll = current;
});

// =========================================
// ANIMAÇÃO DAS BARRAS DE HABILIDADE
// =========================================
const skillFills = document.querySelectorAll('.skill-fill');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.style.getPropertyValue('--fill');
    } else {
      entry.target.style.width = '0%';
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => {
  fill.style.width = '0%';
  observer.observe(fill);
});

// =========================================
// ANIMAÇÃO DE ENTRADA DAS SEÇÕES
// =========================================
const fadeEls = document.querySelectorAll(
  '.sobre-card, .skill-category, .project-card, .hero-left, .hero-right'
);

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 80);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  fadeObserver.observe(el);
});
