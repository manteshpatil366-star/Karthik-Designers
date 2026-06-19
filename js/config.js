/**
 * Karthik Designers — Edit all business details here.
 */
const KarthikConfig = (function () {
  'use strict';

  const config = {
    brand: {
      name: 'Karthik Designers',
      tagline: 'Interior studio · Devadurga',
      founder: 'Karthik',
      location: 'Raichur & Devadurga, Karnataka',
      year: 'Est. 2024',
    },

    contact: {
      phone: '918105249726',
      phoneDisplay: '+91 81052 49726',
      email: 'hello@karthikdesigners.in',
      whatsapp: '918105249726',
      address: 'Main Road, Devadurga, Raichur District, Karnataka 584111',
      hours: 'Mon–Sat, 10 AM – 7 PM',
      mapEmbed: 'https://maps.google.com/maps?q=Devadurga+Karnataka+584111&z=14&output=embed',
      mapLink: 'https://maps.google.com/?q=Devadurga+Karnataka+584111',
    },

    hero: {
      headline: 'Homes designed around how you actually live.',
      subheadline: 'Karthik Designers works with families and shop owners across Raichur district — planning layouts, choosing materials, and supervising work on site until the last switch plate is fixed.',
      image: 'images/hero/hero-main.jpg',
      note: 'Free site visit in Devadurga, Raichur town & nearby villages.',
    },

    about: {
      lead: 'Most clients come to us after visiting ten shops and still not knowing what will look good in their own house. We sit down, measure your rooms, and show you 3D views before a single rupee is spent on carpentry.',
      body: 'Based on Main Road, Devadurga, we take on 2BHK flats, independent houses, clinics, and small offices. You deal directly with our team — no call centre, no confusing middlemen.',
      points: [
        'Site visit & measurement included',
        '3D preview before work starts',
        'One team handles design + execution',
      ],
    },

    services: [
      {
        id: 'residential',
        title: 'Home interiors',
        desc: 'Living room, bedrooms, pooja unit, TV wall — planned for your family size and daily routine.',
        about: 'We start with how you use each room: where shoes go, where kids study, how much sunlight you want. Then we draw layouts, pick laminates and paint, and manage carpenters on site.',
        features: ['Room-wise planning', 'Wardrobes & TV units', 'Lighting layout', 'Paint & false ceiling', 'On-site supervision'],
      },
      {
        id: 'modular',
        title: 'Modular kitchen',
        desc: 'Layouts for Indian cooking — chimney placement, tall units, corner solutions.',
        about: 'We design around your gas line, water point, and storage habits. Soft-close drawers, granite or quartz tops, and finishes that handle daily use in Karnataka heat.',
        features: ['3D kitchen layout', 'Quartz / granite top', 'Soft-close hardware', 'Chimney & hob planning', 'Installation team'],
      },
      {
        id: 'commercial',
        title: 'Shops & offices',
        desc: 'Clinics, coaching centres, retail counters — clean, professional, within budget.',
        about: 'First impressions matter for your business. We design reception areas, consultation rooms, and workstations that feel organised without looking overdone.',
        features: ['Reception & waiting area', 'Workstation planning', 'Signage-friendly fronts', 'Durable finishes', 'Quick turnaround'],
      },
      {
        id: 'turnkey',
        title: 'Full project',
        desc: 'From empty flat to move-in ready — civil, electrical, carpentry, painting.',
        about: 'You get one timeline and one point of contact. We coordinate electricians, plumbers, and carpenters so you are not chasing five different contractors.',
        features: ['Single project manager', 'Weekly photo updates', 'Material shopping help', 'Quality checks', 'Final handover walkthrough'],
      },
    ],

    projects: [
      {
        id: 'living',
        title: 'Devadurga family home',
        category: '3BHK',
        location: 'Devadurga',
        image: 'images/portfolio/living-main.jpg',
        gallery: ['images/portfolio/living-main.jpg', 'images/portfolio/living-detail.jpg'],
        about: 'Young couple wanted a bright living area that could handle guests on weekends and stay easy to clean on weekdays. Warm wood tones, hidden storage under the TV unit, and lights on dimmers for evening use.',
        details: ['320 sq ft living + dining', '6 weeks', 'Full room makeover'],
      },
      {
        id: 'kitchen',
        title: 'Raichur apartment kitchen',
        category: 'Modular kitchen',
        location: 'Raichur',
        image: 'images/portfolio/kitchen-main.jpg',
        gallery: ['images/portfolio/kitchen-main.jpg', 'images/portfolio/kitchen-detail.jpg'],
        about: 'Compact L-shaped kitchen with maximum wall storage. Quartz counter, acrylic shutters, and a tall unit for grains and appliances — built for daily South Indian cooking.',
        details: ['120 sq ft', '4 weeks', 'Kitchen only'],
      },
      {
        id: 'bedroom',
        title: 'Master bedroom, Raichur',
        category: 'Bedroom',
        location: 'Raichur',
        image: 'images/portfolio/bedroom-main.jpg',
        gallery: ['images/portfolio/bedroom-main.jpg', 'images/portfolio/bedroom-detail.jpg'],
        about: 'Walk-in wardrobe behind the bed wall, reading lights on both sides, and curtains that block afternoon heat. Client wanted hotel comfort without flashy decoration.',
        details: ['280 sq ft', '5 weeks', 'Bedroom + wardrobe'],
      },
      {
        id: 'office',
        title: 'Consultancy office',
        category: 'Commercial',
        location: 'Devadurga',
        image: 'images/portfolio/office-main.jpg',
        gallery: ['images/portfolio/office-main.jpg', 'images/portfolio/office-detail.jpg'],
        about: 'Four-desk office with a glass meeting corner and filing storage built into the wall. Acoustic panels for client calls and a reception desk visible from the main road.',
        details: ['450 sq ft', '8 weeks', 'Office fit-out'],
      },
    ],

    process: [
      { step: '1', title: 'Visit & measure', text: 'We come to your site, discuss budget honestly, and take measurements.' },
      { step: '2', title: '3D & quote', text: 'You see layouts and materials on screen. Fixed quote before work begins.' },
      { step: '3', title: 'Build', text: 'Our team works on site. You get updates on WhatsApp with photos.' },
      { step: '4', title: 'Handover', text: 'Final check together. We fix snags before you settle in.' },
    ],

    quote: {
      text: 'They showed us the kitchen in 3D first. What we got looks the same — no surprises, no extra bills at the end.',
      name: 'Anita M.',
      role: 'Kitchen project, Raichur',
    },

    faq: [
      { q: 'Is the first visit free?', a: 'Yes. We visit once, understand your needs, and share a rough budget range. Detailed 3D and quotation comes after that — only if you want to proceed.' },
      { q: 'Do you work outside Raichur?', a: 'Mainly Raichur town, Devadurga, Sindhanur, Manvi and nearby areas. Farther locations — call and we will tell you honestly if we can take it.' },
      { q: 'How long does a full home take?', a: 'Usually 10–14 weeks for a 2–3 BHK, depending on civil work and material availability. Single rooms are faster — often 4–6 weeks.' },
      { q: 'Can I buy materials myself?', a: 'You can. Many clients let us source materials because we know reliable suppliers locally and can often get better rates. Either way works.' },
    ],
  };

  function applyDOM() {
    const b = config.brand;
    const c = config.contact;
    const h = config.hero;
    const a = config.about;

    document.title = `${b.name} — Interior Design, ${b.location}`;

    document.querySelectorAll('[data-cfg="brand"]').forEach((el) => { el.textContent = b.name; });
    document.querySelectorAll('[data-cfg="tagline"]').forEach((el) => { el.textContent = b.tagline; });
    document.querySelectorAll('[data-cfg="location"]').forEach((el) => { el.textContent = b.location; });
    document.querySelectorAll('[data-cfg="year"]').forEach((el) => { el.textContent = b.year; });

    const heroH = document.getElementById('heroHeadline');
    if (heroH) heroH.textContent = h.headline;
    const heroS = document.querySelector('[data-cfg="hero-sub"]');
    if (heroS) heroS.textContent = h.subheadline;
    const heroN = document.querySelector('[data-cfg="hero-note"]');
    if (heroN) heroN.textContent = h.note;

    const heroBg = document.getElementById('heroBg');
    if (heroBg && h.image) heroBg.src = h.image;

    const aboutLead = document.querySelector('[data-cfg="about-lead"]');
    if (aboutLead) aboutLead.textContent = a.lead;
    const aboutBody = document.querySelector('[data-cfg="about-body"]');
    if (aboutBody) aboutBody.textContent = a.body;
    const aboutPoints = document.getElementById('aboutPoints');
    if (aboutPoints) {
      aboutPoints.innerHTML = a.points.map((p) => `<li>${p}</li>`).join('');
    }

    const services = document.getElementById('servicesList');
    if (services) {
      services.innerHTML = config.services.map((s, i) => `
        <article class="service-row" data-service-id="${s.id}" role="button" tabindex="0">
          <span class="service-num">${String(i + 1).padStart(2, '0')}</span>
          <div class="service-row-body">
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
          </div>
          <span class="service-arrow" aria-hidden="true">→</span>
        </article>
      `).join('');
    }

    const projects = document.getElementById('projectsGrid');
    if (projects) {
      projects.innerHTML = config.projects.map((p, i) => `
        <article class="work-card${i === 0 ? ' work-card-featured' : ''}" data-project-id="${p.id}" role="button" tabindex="0">
          <div class="work-card-img">
            <img src="${p.image}" alt="${p.title}" loading="lazy">
          </div>
          <div class="work-card-info">
            <span class="work-meta">${p.category} · ${p.location}</span>
            <h3>${p.title}</h3>
          </div>
        </article>
      `).join('');
    }

    const process = document.getElementById('processList');
    if (process) {
      process.innerHTML = config.process.map((p) => `
        <li class="process-item">
          <span class="process-step">${p.step}</span>
          <div>
            <h3>${p.title}</h3>
            <p>${p.text}</p>
          </div>
        </li>
      `).join('');
    }

    const q = config.quote;
    const quoteEl = document.getElementById('clientQuote');
    if (quoteEl) {
      quoteEl.innerHTML = `
        <blockquote>"${q.text}"</blockquote>
        <footer><strong>${q.name}</strong> — ${q.role}</footer>
      `;
    }

    const faq = document.getElementById('faqList');
    if (faq) {
      faq.innerHTML = config.faq.map((item, i) => `
        <div class="faq-item" id="faq-${i}">
          <button type="button" class="faq-q" aria-expanded="false"><span>${item.q}</span><span>+</span></button>
          <div class="faq-a"><div class="faq-a-inner">${item.a}</div></div>
        </div>
      `).join('');
    }

    const contactList = document.getElementById('contactList');
    if (contactList) {
      contactList.innerHTML = `
        <li><strong>Address</strong><span>${c.address}</span></li>
        <li><strong>Phone</strong><span><a href="tel:+${c.phone}">${c.phoneDisplay}</a></span></li>
        <li><strong>Email</strong><span><a href="mailto:${c.email}">${c.email}</a></span></li>
        <li><strong>Hours</strong><span>${c.hours}</span></li>
      `;
    }

    const map = document.getElementById('siteMap');
    if (map && c.mapEmbed) map.src = c.mapEmbed;
    const mapLink = document.getElementById('mapLink');
    if (mapLink) mapLink.href = c.mapLink;

    const wa = document.getElementById('whatsappBtn');
    if (wa) {
      const msg = encodeURIComponent(`Hi, I saw your website. I need help with interiors at my place in Raichur area.`);
      wa.href = `https://api.whatsapp.com/send?phone=${c.whatsapp}&text=${msg}`;
    }

    const stickyCall = document.getElementById('stickyCall');
    if (stickyCall) stickyCall.href = `tel:+${c.phone}`;
  }

  return Object.assign({}, config, { applyDOM });
})();

window.KarthikConfig = KarthikConfig;
