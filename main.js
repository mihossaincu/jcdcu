/* ========================================
   CU Chhatra Dal – main.js
   Common utilities & interactions
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav__list a').forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav) mainNav.classList.remove('open');
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Active nav highlighting on scroll
  const sections = document.querySelectorAll('section[id], div[id^="section-"]');
  const navLinks = document.querySelectorAll('.nav__list a');

  window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section[id]').forEach(section => {
      const top = section.offsetTop - 100;
      if (pageYOffset >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});

/* ---------- Hero Slider ---------- */
window.initHeroSlider = function () {
  const slider = document.getElementById('hero-slider');
  if (!slider) return;

  let current = 0;
  const slides = slider.querySelectorAll('.hero__slide');
  const total = slides.length;
  const dotsContainer = document.getElementById('hero-dots');

  // Create dots
  if (dotsContainer) {
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.className = 'hero__dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  }

  function goTo(index) {
    current = index;
    slider.style.transform = `translateX(-${current * 100}%)`;
    if (dotsContainer) {
      dotsContainer.querySelectorAll('.hero__dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }
  }

  window.heroNext = () => goTo((current + 1) % total);
  window.heroPrev = () => goTo((current - 1 + total) % total);

  // Auto-play
  setInterval(() => window.heroNext(), 5500);
};

/* ---------- Committee Search ---------- */
window.initCommitteeSearch = function () {
  const input = document.getElementById('committee-search');
  const table = document.getElementById('committee-table');
  if (!input || !table) return;

  input.addEventListener('input', function () {
    const q = this.value.toLowerCase().trim();
    table.querySelectorAll('tr').forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(q) ? '' : 'none';
    });
  });
};

/* ---------- Form handlers (demo) ---------- */
window.handleFormSubmit = function (e, formName) {
  e.preventDefault();
  alert(`${formName} সফলভাবে জমা দেওয়া হয়েছে! (ডেমো – ব্যাকএন্ড সংযুক্ত করুন)`);
  e.target.reset();
};
