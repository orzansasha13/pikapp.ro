/* ============================================
   PIKAPP — Minimal interactions
   ============================================ */

(function () {
  'use strict';

  // --- Scroll-triggered fade-in ---
  function initFadeIn() {
    var targets = document.querySelectorAll(
      '.service-card, .gear-list, .gear-card, .work-item, .contact-text, .contact-form'
    );

    targets.forEach(function (el) {
      el.classList.add('fade-in');
    });

    // Add stagger containers
    var staggerContainers = document.querySelectorAll('.services-grid, .gear-grid, .work-list');
    staggerContainers.forEach(function (el) {
      el.classList.add('stagger');
    });

    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything
      targets.forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Smooth scroll for anchor links ---
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;

        var target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        var navHeight = document.querySelector('.nav').offsetHeight;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      });
    });
  }

  // --- Contact form ---
  function initForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var formData = new FormData(form);
      var data = {};
      formData.forEach(function (value, key) {
        data[key] = value;
      });

      // Replace the form with a confirmation
      var wrapper = form.parentElement;
      form.style.display = 'none';

      var success = document.createElement('div');
      success.className = 'form-success fade-in';
      success.textContent = 'Inquiry sent. We will get back to you within 24 hours.';
      wrapper.appendChild(success);

      // Trigger fade-in
      requestAnimationFrame(function () {
        success.classList.add('visible');
      });
    });
  }

  // --- Init on DOM ready ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initFadeIn();
    initSmoothScroll();
    initForm();
  }
})();
