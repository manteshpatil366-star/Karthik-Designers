(function () {
  'use strict';

  const CFG = window.KarthikConfig || {};
  try { if (CFG.applyDOM) CFG.applyDOM(); } catch (e) { console.error(e); }

  const nav = document.getElementById('nav');
  const navLinks = document.getElementById('navLinks');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.getElementById('navToggle')?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
  });
  navLinks?.querySelectorAll('a').forEach((a) => {
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

  const c = CFG.contact || {};
  const phone = c.phone || '918105249726';
  document.getElementById('headerCall')?.setAttribute('href', `tel:+${phone}`);
  document.getElementById('footerCall')?.setAttribute('href', `tel:+${phone}`);

  document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const b = CFG.brand || {};
    const text = `Hi ${b.name || 'Karthik Designers'},\n\nName: ${fd.get('name')}\nPhone: ${fd.get('phone')}\nNeed: ${fd.get('type')}\n\nSent from your website.`;
    window.location.href = `https://api.whatsapp.com/send?phone=${c.whatsapp || phone}&text=${encodeURIComponent(text)}`;
    const msg = document.getElementById('formMsg');
    if (msg) { msg.hidden = false; msg.textContent = 'WhatsApp opened — tap Send.'; }
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
        <img src="${src}" alt="${p.title} photo ${i + 1}" loading="lazy"${i === 0 ? ' class="active"' : ''}>
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
  }

  function closeProject() {
    projectModal.classList.remove('is-open');
    projectModal.hidden = true;
    projectModal.setAttribute('aria-hidden', 'true');
    if (!serviceModal || serviceModal.hidden) document.body.classList.remove('modal-open');
  }

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
      const p = el.querySelector('.faq-a');
      if (p) p.style.maxHeight = '0';
    });
    if (!item || !panel || !inner) return;
    item.classList.toggle('is-open', !open);
    panel.style.maxHeight = !open ? `${inner.scrollHeight}px` : '0';
  });

  if (typeof KarthikAnim !== 'undefined') KarthikAnim.init();
})();
