/* ============================================
   DREW HOME CARE — script.js
   ============================================ */

'use strict';

/* ---- Header: add shadow on scroll ---- */
const siteHeader = document.getElementById('site-header');
function onScroll() {
  siteHeader.classList.toggle('scrolled', window.scrollY > 10);
  highlightActiveSection();
}
window.addEventListener('scroll', onScroll, { passive: true });

/* ---- Hamburger menu ---- */
const hamburger     = document.getElementById('hamburger');
const navRow        = document.querySelector('.site-header__nav-row');
const hamburgerIcon = document.getElementById('hamburger-icon');

hamburger.addEventListener('click', () => {
  const isOpen = navRow.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  hamburgerIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
  lucide.createIcons();
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

/* Close mobile menu when a nav link is clicked */
navRow.querySelectorAll('.navbar__link').forEach(link => {
  link.addEventListener('click', () => {
    navRow.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburgerIcon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
    document.body.style.overflow = '';
  });
});

/* ---- Active nav link highlighting ---- */
const sections = document.querySelectorAll('main section[id]');
const navLinks  = document.querySelectorAll('.navbar__link');

function highlightActiveSection() {
  const scrollY = window.scrollY;
  const navH    = siteHeader.getBoundingClientRect().height + 8;

  let current = '';
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - navH) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

/* Run once on load */
highlightActiveSection();

/* ---- Scroll fade-in ---- */
document.querySelectorAll('.section__header, .hours__grid, .about__grid, .steps, .contact__grid, .footer__inner').forEach(el => {
  el.classList.add('reveal');
});
document.querySelectorAll('.card, .step').forEach(el => {
  el.classList.add('reveal-child');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-child').forEach(el => revealObserver.observe(el));

/* ---- Contact form — Formspree AJAX submission ---- */
const form        = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const formError   = document.getElementById('form-error');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    formSuccess.hidden = true;
    formError.hidden   = true;

    try {
      const response = await fetch(form.action, {
        method:  'POST',
        body:    new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        formSuccess.hidden = false;
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        // Re-initialize icons in case the success message has them
        lucide.createIcons();
      } else {
        formError.hidden = false;
        formError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } catch {
      formError.hidden = false;
      formError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } finally {
      submitBtn.disabled    = false;
      submitBtn.textContent = originalText;
    }
  });
}
