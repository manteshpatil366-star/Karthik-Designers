(function () {
  'use strict';

  const CFG = window.KarthikConfig || {};
  try { if (CFG.applyDOM) CFG.applyDOM(); } catch (e) { console.error(e); }

  const nav = document.getElementById('nav');
  const navLinks = document.getElementById('navLinks');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', scrollY > 40);
    document.getElementById('stickyCta')?.classList.toggle('is-visible', scrollY > 400);
  }, { passive: true });

  document.getElementById('navToggle')?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
  });
  document.querySelectorAll('.nav-links a').forEach((a) => {
    a.addEventListener('click', () => navLinks?.classList.remove('open'));
  });

  function scrollToEl(el) {
    if (!el) return;
    const top = el.getBoundingClientRect().top + scrollY - 72;
    scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
  }

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      scrollToEl(t);
    });
  });

  document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const c = CFG.contact || {};
    const b = CFG.brand || {};
    const text = `*Interior Enquiry — ${b.name || 'Karthik Designers'}*\n\nName: ${fd.get('name')}\nPhone: ${fd.get('phone')}\nProject: ${fd.get('type')}\n\n— Sent from website`;
    window.location.href = `https://api.whatsapp.com/send?phone=${c.whatsapp || '918105249726'}&text=${encodeURIComponent(text)}`;
    const msg = document.getElementById('formMsg');
    if (msg) { msg.hidden = false; msg.textContent = 'WhatsApp opened — tap Send to submit.'; }
  });

  const projectModal = document.getElementById('projectModal');
  const projects = CFG.projects || [];

  function openProject(id) {
    const p = projects.find((x) => x.id === id);
    if (!p || !projectModal) return;

    document.getElementById('projectTitle').textContent = p.title;
    document.getElementById('projectCategory').textContent = `${p.category} · ${p.location}`;
    document.getElementById('projectAbout').textContent = p.about;
    document.getElementById('projectDetails').innerHTML = (p.details || []).map((d) => `<li>${d}</li>`).join('');

    const hero = document.getElementById('projectHero');
    const gallery = document.getElementById('projectGallery');
    const images = p.gallery || [p.image];

    function setHero(src) {
      if (hero) hero.src = src;
      gallery?.querySelectorAll('img').forEach((img) => {
        img.classList.toggle('active', img.getAttribute('src') === src);
      });
    }

    if (gallery) {
      gallery.innerHTML = images.map((src, i) => `
        <img src="${src}" alt="${p.title} ${i + 1}" loading="lazy"${i === 0 ? ' class="active"' : ''}>
      `).join('');
      gallery.querySelectorAll('img').forEach((img) => {
        img.addEventListener('click', () => setHero(img.getAttribute('src')));
      });
    }
    setHero(p.image);

    projectModal.hidden = false;
    projectModal.removeAttribute('hidden');
    projectModal.setAttribute('aria-hidden', 'false');
    projectModal.classList.add('is-open');
    document.body.classList.add('modal-open');
    document.getElementById('projectClose')?.focus();
  }

  function closeProject() {
    projectModal.classList.remove('is-open');
    projectModal.hidden = true;
    projectModal.setAttribute('aria-hidden', 'true');
    if (!serviceModal || serviceModal.hidden) document.body.classList.remove('modal-open');
  }

  function bindProjectCards() {
    document.querySelectorAll('[data-project-id]').forEach((card) => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        openProject(card.getAttribute('data-project-id'));
      });
      card.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        e.preventDefault();
        openProject(card.getAttribute('data-project-id'));
      });
    });
  }
  bindProjectCards();

  document.getElementById('projectClose')?.addEventListener('click', closeProject);
  document.getElementById('projectBackdrop')?.addEventListener('click', closeProject);
  document.getElementById('projectCta')?.addEventListener('click', (e) => {
    e.preventDefault();
    closeProject();
    scrollToEl(document.getElementById('contact'));
  });

  const serviceModal = document.getElementById('serviceModal');
  const services = CFG.services || [];

  function openService(id) {
    const s = services.find((x) => x.id === id);
    if (!s || !serviceModal) return;
    document.getElementById('serviceTitle').textContent = s.title;
    document.getElementById('serviceAbout').textContent = s.about;
    document.getElementById('serviceFeatures').innerHTML = (s.features || []).map((f) => `<li>${f}</li>`).join('');
    serviceModal.hidden = false;
    serviceModal.removeAttribute('hidden');
    serviceModal.setAttribute('aria-hidden', 'false');
    serviceModal.classList.add('is-open');
    document.body.classList.add('modal-open');
  }

  function closeService() {
    serviceModal.classList.remove('is-open');
    serviceModal.hidden = true;
    serviceModal.setAttribute('aria-hidden', 'true');
    if (!projectModal || projectModal.hidden) document.body.classList.remove('modal-open');
  }

  function bindServiceCards() {
    document.querySelectorAll('[data-service-id]').forEach((card) => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        openService(card.getAttribute('data-service-id'));
      });
      card.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        e.preventDefault();
        openService(card.getAttribute('data-service-id'));
      });
    });
  }
  bindServiceCards();

  document.getElementById('serviceClose')?.addEventListener('click', closeService);
  document.getElementById('serviceBackdrop')?.addEventListener('click', closeService);
  document.getElementById('serviceCta')?.addEventListener('click', (e) => {
    e.preventDefault();
    closeService();
    scrollToEl(document.getElementById('contact'));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (projectModal && !projectModal.hidden) closeProject();
    if (serviceModal && !serviceModal.hidden) closeService();
  });

  document.getElementById('faqList')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq-q');
    if (!btn) return;
    const item = btn.closest('.faq-item');
    const panel = item?.querySelector('.faq-a');
    const inner = panel?.querySelector('.faq-a-inner');
    const open = item?.classList.contains('is-open');
    document.querySelectorAll('.faq-item.is-open').forEach((el) => {
      if (el === item) return;
      el.classList.remove('is-open');
      el.querySelector('.faq-a').style.maxHeight = '0';
    });
    if (!item || !panel || !inner) return;
    item.classList.toggle('is-open', !open);
    panel.style.maxHeight = !open ? `${inner.scrollHeight}px` : '0';
  });

  const track = document.getElementById('testimonialTrack');
  const slides = track ? [...track.children] : [];
  let idx = 0;
  let timer;

  function goSlide(i) {
    if (!track || !slides.length) return;
    idx = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${idx * track.parentElement.offsetWidth}px)`;
    document.querySelectorAll('.testimonial-dot').forEach((d, n) => d.classList.toggle('active', n === idx));
  }

  function autoplay() {
    clearInterval(timer);
    timer = setInterval(() => goSlide(idx + 1), 5000);
  }

  if (slides.length) {
    goSlide(0);
    autoplay();
    document.getElementById('testimonialPrev')?.addEventListener('click', () => { goSlide(idx - 1); autoplay(); });
    document.getElementById('testimonialNext')?.addEventListener('click', () => { goSlide(idx + 1); autoplay(); });
    document.getElementById('testimonialDots')?.addEventListener('click', (e) => {
      const dot = e.target.closest('.testimonial-dot');
      if (dot) { goSlide(parseInt(dot.getAttribute('data-index'), 10)); autoplay(); }
    });
  }

  if (typeof KarthikAnim !== 'undefined') KarthikAnim.init();
})();
