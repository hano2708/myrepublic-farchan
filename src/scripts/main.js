/* ============================================================
   MyRepublic Farchan – Main JS
   ============================================================ */

/* ---- Navbar Scroll ---- */
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
})();

/* ---- Scroll Reveal ---- */
(function () {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => io.observe(el));
})();

/* ---- Stagger children ---- */
document.querySelectorAll('[data-stagger]').forEach(parent => {
  parent.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i * 80) + 'ms';
  });
});

/* ---- Sticky CTA (Mobile & Desktop) ---- */
(function () {
  const mobile   = document.getElementById('sticky-cta-mobile');
  const desktop  = document.getElementById('sticky-cta-desktop');
  let shown = false;

  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    if (pct > 0.2 && !shown) {
      shown = true;
      mobile  && mobile.classList.add('show');
      desktop && desktop.classList.add('show');
    }
  }, { passive: true });
})();

/* ---- Floating WA Bubble ---- */
(function () {
  const bubble  = document.getElementById('wa-bubble');
  const closeBtn = document.getElementById('wa-bubble-close');
  if (!bubble || !closeBtn) return;

  let dismissed = false;

  function showBubble() {
    if (dismissed) return;
    bubble.classList.add('show');
    setTimeout(() => {
      if (!dismissed) bubble.classList.remove('show');
    }, 8000);
  }

  // Show after 5s initial
  setTimeout(showBubble, 5000);
  // Re-show every 15s
  setInterval(showBubble, 15000);

  closeBtn.addEventListener('click', () => {
    dismissed = true;
    bubble.classList.remove('show');
  });
})();

/* ---- FAQ Accordion ---- */
(function () {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function () {
      const item = this.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
})();

/* ---- Count-Up Animation ---- */
function animateCount(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 1800;
  const step = 20;
  const steps = duration / step;
  let current = 0;
  const increment = target / steps;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = prefix + Math.floor(current).toLocaleString('id-ID') + suffix;
  }, step);
}

(function () {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCount(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => io.observe(el));
})();

/* ---- Internet Calculator ---- */
(function () {
  const calcForm = document.getElementById('calculator');
  if (!calcForm) return;

  let selectedUsers  = null;
  let selectedUsages = new Set();

  calcForm.querySelectorAll('[data-users]').forEach(btn => {
    btn.addEventListener('click', function () {
      calcForm.querySelectorAll('[data-users]').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      selectedUsers = parseInt(this.dataset.users);
      updateRecommendation();
    });
  });

  calcForm.querySelectorAll('[data-usage]').forEach(btn => {
    btn.addEventListener('click', function () {
      const usage = this.dataset.usage;
      if (selectedUsages.has(usage)) {
        selectedUsages.delete(usage);
        this.classList.remove('active');
      } else {
        selectedUsages.add(usage);
        this.classList.add('active');
      }
      updateRecommendation();
    });
  });

  function updateRecommendation() {
    const result = document.getElementById('calc-result');
    if (!result) return;
    if (selectedUsers === null && selectedUsages.size === 0) return;

    let baseSpeed = 75; // default fallback

    // By users (only if selected)
    if (selectedUsers !== null) {
      if      (selectedUsers <= 2)  baseSpeed = 75;
      else if (selectedUsers <= 5)  baseSpeed = 100;
      else if (selectedUsers <= 10) baseSpeed = 150;
      else if (selectedUsers <= 20) baseSpeed = 300;
      else                          baseSpeed = 500;
    }

    // Boost by usage
    if (selectedUsages.has('4k'))      baseSpeed = Math.max(baseSpeed, 150);
    if (selectedUsages.has('gaming'))  baseSpeed = Math.max(baseSpeed, 150);
    if (selectedUsages.has('wfh'))     baseSpeed = Math.max(baseSpeed, 100);

    // Map to package
    let rec;
    if      (baseSpeed <= 75)   rec = { name: 'SAHABAT', speed: '75 Mbps',  price: 'Rp 205.350/bln' };
    else if (baseSpeed <= 100)  rec = { name: 'NEO',     speed: '100 Mbps → 200 Mbps', price: 'Rp 233.100/bln' };
    else if (baseSpeed <= 150)  rec = { name: 'VELO',    speed: '150 Mbps → 300 Mbps', price: 'Rp 277.500/bln' };
    else if (baseSpeed <= 300)  rec = { name: 'NEXUS',   speed: '300 Mbps → 400 Mbps', price: 'Rp 333.000/bln' };
    else                        rec = { name: 'PRIME',   speed: '500 Mbps',  price: 'Rp 555.000/bln' };

    document.getElementById('rec-pkg').textContent  = rec.name;
    document.getElementById('rec-speed').textContent = rec.speed;
    document.getElementById('rec-price').textContent = rec.price;

    const waMsg = encodeURIComponent(
      `Halo Farchan,\n\nSaya mendapatkan rekomendasi paket ${rec.name} dari kalkulator website.\nSaya tertarik untuk berlangganan.\n\nBoleh diinfokan lebih lanjut?\n\nTerima kasih.`
    );
    const waBtn = document.getElementById('rec-wa-btn');
    if (waBtn) waBtn.href = `https://wa.me/6282126281479?text=${waMsg}`;

    result.classList.add('show');
  }
})();

/* ---- Coverage Form ---- */
(function () {
  const form = document.getElementById('coverage-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nama   = document.getElementById('cov-name').value.trim();
    const alamat = document.getElementById('cov-address').value.trim();

    if (!nama || !alamat) {
      alert('Mohon isi nama dan alamat lengkap.');
      return;
    }

    const msg = encodeURIComponent(
      `Halo saya ingin cek coverage area.\n\nNama : ${nama}\nAlamat Detail (Beserta RT/RW) : ${alamat}`
    );
    window.open(`https://wa.me/6282126281479?text=${msg}`, '_blank');
  });
})();

/* ---- Mobile Menu ---- */
(function () {
  const toggle = document.getElementById('menu-toggle');
  const menu   = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  let open = false;
  toggle.addEventListener('click', () => {
    open = !open;
    menu.style.display = open ? 'block' : 'none';
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      open = false;
      menu.style.display = 'none';
    });
  });
})();
