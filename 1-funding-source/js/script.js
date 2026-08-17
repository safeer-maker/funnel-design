/* =====================================================
   SCRIPT.JS — OneFunding Landing Page
   - Nav scroll behavior
   - Live ticker animation
   - FAQ accordion
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- NAV: Add scrolled class on scroll ---- */
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ---- LIVE TICKER: Animate the revenue counter ---- */
  const tickerEl = document.getElementById('ticker-amount');
  if (tickerEl) {
    let base = 2848832.63;
    setInterval(() => {
      base += Math.random() * 150 + 50;
      tickerEl.textContent = '$' + base.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }, 2800);
  }

  /* ---- FAQ ACCORDION ---- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const btn    = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close all others
      faqItems.forEach((other) => {
        if (other !== item) {
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq-answer').classList.remove('open');
        }
      });

      // Toggle clicked
      btn.setAttribute('aria-expanded', String(!isOpen));
      answer.classList.toggle('open', !isOpen);
    });
  });

  /* ---- SCROLL REVEAL: Fade-in sections on scroll ---- */
  const revealTargets = document.querySelectorAll(
    '.pain-card, .stat-card, .diff-card, .testimonial-card, .feature-row, .how-step, .stat-item'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealTargets.forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
    observer.observe(el);
  });

  /* ---- SMOOTH CTA TRACKING (optional hook) ---- */
  document.querySelectorAll('[id$="-cta"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log('CTA clicked:', btn.id);
      // Add analytics tracking here
    });
  });

});
