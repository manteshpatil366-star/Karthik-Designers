/**
 * Karthik Designers — Edit all business details here.
 */
const KarthikConfig = (function () {
  'use strict';

  const config = {
    brand: {
      name: 'Karthik Designers',
      tagline: 'Spaces That Inspire Living',
      motto: 'Design · Detail · Delight',
      location: 'Raichur & Devadurga',
    },

    contact: {
      phone: '918105249726',
      phoneDisplay: '+91 81052 49726',
      email: 'hello@karthikdesigners.in',
      whatsapp: '918105249726',
      address: 'Main Road, Devadurga, Raichur District, Karnataka 584111',
      hours: 'Mon–Sat 10:00 AM – 7:00 PM',
      mapEmbed: 'https://maps.google.com/maps?q=Devadurga+Karnataka+584111&z=14&output=embed',
      mapLink: 'https://maps.google.com/?q=Devadurga+Karnataka+584111',
    },

    hero: {
      headline: 'Interiors Crafted With Soul',
      subheadline: 'Bespoke residential & commercial design across Raichur and Devadurga — from concept to completion.',
      image: 'images/hero/hero-main.jpg',
      ctaPrimary: 'Book Free Consultation',
      ctaSecondary: 'View Our Work',
    },

    trust: [
      'Residential Design',
      'Commercial Spaces',
      '3D Visualization',
      'Turnkey Execution',
      'Raichur & Devadurga',
      'Free Consultation',
    ],

    services: [
      {
        id: 'residential',
        title: 'Residential Interiors',
        desc: 'Homes that feel personal, warm, and effortlessly elegant.',
        icon: 'home',
        about: 'We transform houses into homes with tailored layouts, custom furniture, lighting plans, and material palettes that reflect your lifestyle. From 2BHK apartments to luxury villas.',
        features: ['Living, bedroom & kitchen design', 'Custom furniture & wardrobes', 'Lighting & colour consultation', 'Material & finish selection', 'Project management on site'],
      },
      {
        id: 'commercial',
        title: 'Commercial Design',
        desc: 'Offices, retail & hospitality spaces that elevate your brand.',
        icon: 'building',
        about: 'Functional, beautiful commercial environments that impress clients and inspire teams. We balance aesthetics with workflow, brand identity, and budget.',
        features: ['Office & co-working layouts', 'Retail & showroom design', 'Restaurant & cafe interiors', 'Reception & conference rooms', 'Brand-aligned aesthetics'],
      },
      {
        id: 'modular',
        title: 'Modular Kitchens',
        desc: 'Smart storage, premium finishes, built to last.',
        icon: 'kitchen',
        about: 'German-inspired ergonomics meet Indian cooking needs. Soft-close hardware, quartz counters, chimney planning, and layouts for every kitchen size.',
        features: ['3D kitchen planning', 'Premium laminates & acrylic', 'Quartz & granite counters', 'Soft-close hardware', 'Installation & warranty'],
      },
      {
        id: 'turnkey',
        title: 'Turnkey Execution',
        desc: 'One team from design drawing to final styling.',
        icon: 'key',
        about: 'Stop juggling contractors. Karthik Designers manages civil work, electrical, plumbing, false ceiling, painting, and final décor — with transparent timelines and weekly updates.',
        features: ['End-to-end project management', 'Verified vendor network', 'Weekly progress reports', 'Quality checks at every stage', 'Handover with styling'],
      },
    ],

    projects: [
      {
        id: 'living',
        title: 'Serene Living Room',
        category: 'Residential',
        location: 'Devadurga',
        image: 'images/portfolio/living-main.jpg',
        gallery: ['images/portfolio/living-main.jpg', 'images/portfolio/living-detail.jpg'],
        about: 'A calm, layered living space with warm neutrals, natural textures, and soft ambient lighting — designed for a young family in Devadurga.',
        details: ['Area: 320 sq ft', 'Style: Modern warm minimal', 'Timeline: 6 weeks', 'Scope: Full redesign'],
      },
      {
        id: 'kitchen',
        title: 'Pearl White Kitchen',
        category: 'Modular Kitchen',
        location: 'Raichur',
        image: 'images/portfolio/kitchen-main.jpg',
        gallery: ['images/portfolio/kitchen-main.jpg', 'images/portfolio/kitchen-detail.jpg'],
        about: 'Handle-less upper cabinets, quartz island, and concealed storage maximise space in a compact urban kitchen without compromising on style.',
        details: ['Area: 120 sq ft', 'Finish: Acrylic & quartz', 'Timeline: 4 weeks', 'Scope: Modular kitchen'],
      },
      {
        id: 'bedroom',
        title: 'Hotel-Style Master Suite',
        category: 'Residential',
        location: 'Raichur',
        image: 'images/portfolio/bedroom-main.jpg',
        gallery: ['images/portfolio/bedroom-main.jpg', 'images/portfolio/bedroom-detail.jpg'],
        about: 'Upholstered feature wall, layered lighting, and walk-in wardrobe integration create a restful retreat with five-star comfort.',
        details: ['Area: 280 sq ft', 'Style: Contemporary luxury', 'Timeline: 5 weeks', 'Scope: Bedroom + wardrobe'],
      },
      {
        id: 'office',
        title: 'Executive Workspace',
        category: 'Commercial',
        location: 'Devadurga',
        image: 'images/portfolio/office-main.jpg',
        gallery: ['images/portfolio/office-main.jpg', 'images/portfolio/office-detail.jpg'],
        about: 'A focused, professional office with acoustic panels, biophilic elements, and ergonomic furniture for a growing consultancy firm.',
        details: ['Area: 450 sq ft', 'Style: Modern corporate', 'Timeline: 8 weeks', 'Scope: Full office fit-out'],
      },
    ],

    process: [
      { step: '01', title: 'Consultation', text: 'We visit your space, understand needs, budget & timeline.' },
      { step: '02', title: 'Concept & 3D', text: 'Mood boards, layouts & realistic 3D renders for approval.' },
      { step: '03', title: 'Execution', text: 'Our team manages vendors, quality & on-site coordination.' },
      { step: '04', title: 'Styling & Handover', text: 'Final décor, styling touches & walkthrough before you move in.' },
    ],

    testimonials: [
      { name: 'Priya & Ramesh', role: 'Homeowners, Devadurga', text: 'Karthik Designers transformed our 3BHK completely. The 3D previews matched the final result — every rupee well spent.' },
      { name: 'Dr. Suresh K.', role: 'Clinic Owner, Raichur', text: 'Professional, punctual, and creative. Our clinic now feels premium and patients notice immediately.' },
      { name: 'Anita M.', role: 'Kitchen Project', text: 'The modular kitchen is stunning and so functional. They understood exactly how we cook and store.' },
    ],

    faq: [
      { q: 'Do you offer free consultations?', a: 'Yes. We offer a free initial consultation to understand your space, requirements, and budget before sharing a proposal.' },
      { q: 'Which areas do you serve?', a: 'We serve Raichur, Devadurga, and surrounding towns in Karnataka. Site visits can be arranged for nearby districts.' },
      { q: 'How long does a typical home project take?', a: 'A single room takes 3–6 weeks. Full home interiors typically range from 8–16 weeks depending on scope and civil work.' },
      { q: 'Can I see 3D designs before work starts?', a: 'Absolutely. Every project includes 3D visualisation so you approve layouts, materials, and colours before execution begins.' },
    ],
  };

  function applyDOM() {
    const b = config.brand;
    const c = config.contact;
    const h = config.hero;

    document.title = `${b.name} | Interior Design in ${b.location}`;

    document.querySelectorAll('[data-cfg="brand"]').forEach((el) => { el.textContent = b.name; });
    document.querySelectorAll('[data-cfg="tagline"]').forEach((el) => { el.textContent = b.tagline; });
    document.querySelectorAll('[data-cfg="location"]').forEach((el) => { el.textContent = b.location; });

    const heroH = document.getElementById('heroHeadline');
    if (heroH) heroH.textContent = h.headline;
    const heroS = document.querySelector('[data-cfg="hero-sub"]');
    if (heroS) heroS.textContent = h.subheadline;

    const heroBg = document.getElementById('heroBg');
    if (heroBg && h.image) heroBg.src = h.image;

    const trustHtml = config.trust.map((t) => `<span class="trust-item"><span class="trust-dot"></span>${t}</span>`).join('');
    ['trustTrackA', 'trustTrackB'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = trustHtml;
    });

    const services = document.getElementById('servicesGrid');
    if (services) {
      services.innerHTML = config.services.map((s) => `
        <article class="service-card" data-service-id="${s.id}" role="button" tabindex="0">
          <span class="service-icon service-icon-${s.icon}" aria-hidden="true"></span>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          <span class="card-link">Learn more →</span>
        </article>
      `).join('');
    }

    const projects = document.getElementById('projectsGrid');
    if (projects) {
      projects.innerHTML = config.projects.map((p) => `
        <article class="project-card" data-project-id="${p.id}" role="button" tabindex="0">
          <div class="project-card-img">
            <img src="${p.image}" alt="${p.title}" loading="lazy">
            <span class="project-tag">${p.category}</span>
          </div>
          <div class="project-card-body">
            <h3>${p.title}</h3>
            <p>${p.location}</p>
          </div>
        </article>
      `).join('');
    }

    const process = document.getElementById('processGrid');
    if (process) {
      process.innerHTML = config.process.map((p) => `
        <div class="process-step">
          <span class="process-num">${p.step}</span>
          <h3>${p.title}</h3>
          <p>${p.text}</p>
        </div>
      `).join('');
    }

    const track = document.getElementById('testimonialTrack');
    const dots = document.getElementById('testimonialDots');
    if (track) {
      track.innerHTML = config.testimonials.map((t) => `
        <div class="testimonial-slide">
          <div class="stars">★★★★★</div>
          <blockquote>"${t.text}"</blockquote>
          <footer><strong>${t.name}</strong><span>${t.role}</span></footer>
        </div>
      `).join('');
    }
    if (dots) {
      dots.innerHTML = config.testimonials.map((_, i) => `
        <button type="button" class="testimonial-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Review ${i + 1}"></button>
      `).join('');
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
        <li>${c.address}</li>
        <li><a href="tel:+${c.phone}">${c.phoneDisplay}</a></li>
        <li><a href="mailto:${c.email}">${c.email}</a></li>
        <li>${c.hours}</li>
      `;
    }

    const map = document.getElementById('siteMap');
    if (map && c.mapEmbed) map.src = c.mapEmbed;
    const mapLink = document.getElementById('mapLink');
    if (mapLink) mapLink.href = c.mapLink;

    const wa = document.getElementById('whatsappBtn');
    if (wa) {
      const msg = encodeURIComponent(`Hello, I'd like to enquire about interior design at ${b.name}.`);
      wa.href = `https://api.whatsapp.com/send?phone=${c.whatsapp}&text=${msg}`;
    }

    const stickyCall = document.getElementById('stickyCall');
    if (stickyCall) stickyCall.href = `tel:+${c.phone}`;
  }

  return Object.assign({}, config, { applyDOM });
})();

window.KarthikConfig = KarthikConfig;
