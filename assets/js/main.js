// Buildqual — shared header/footer includes, mobile nav, form handler, table filter

// Google Analytics 4 — paste your Measurement ID below (e.g. "G-XXXXXXXXXX").
// Leave as "" to disable. Get one at https://analytics.google.com (Admin → Data streams → Web).
const GA_MEASUREMENT_ID = "";

function loadGA() {
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") return;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
}

const NAV = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About' },
  { href: 'services.html', label: 'Services' },
  { href: 'capabilities.html', label: 'Capabilities' },
  { href: 'projects.html', label: 'Projects' },
  { href: 'hse.html', label: 'HSE' },
  { href: 'blog.html', label: 'Blog' },
  { href: 'contact.html', label: 'Contact' },
];

function currentPage() {
  const p = location.pathname.split('/').pop() || 'index.html';
  return p;
}

function renderHeader() {
  const cur = currentPage();
  const links = NAV.map(n => {
    const active = n.href === cur ? 'active' : '';
    return `<a href="${n.href}" class="nav-link ${active}">${n.label}</a>`;
  }).join('');
  const mobileLinks = NAV.map(n => {
    const active = n.href === cur ? 'text-orange-500' : 'text-white';
    return `<a href="${n.href}" class="block py-2 px-4 ${active} hover:bg-white/10 rounded">${n.label}</a>`;
  }).join('');

  const header = document.getElementById('site-header');
  if (!header) return;
  header.innerHTML = `
    <div class="sticky top-0 z-50 bg-[#0a2540] shadow-md">
      <div class="container-x flex items-center justify-between py-3">
        <a href="index.html" class="flex items-center gap-3">
          <div class="w-10 h-10 rounded bg-[#ff7a00] flex items-center justify-center text-white font-bold">B</div>
          <div class="leading-tight">
            <div class="text-white font-bold tracking-wide">BUILDQUAL</div>
            <div class="text-[10px] uppercase tracking-widest text-slate-300">Engineering Ltd</div>
          </div>
        </a>
        <nav class="hidden lg:flex items-center gap-7">${links}</nav>
        <div class="hidden lg:block">
          <a href="contact.html#quote" class="btn-primary text-sm">Request a Quote</a>
        </div>
        <button id="menu-toggle" class="lg:hidden text-white p-2" aria-label="Open menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
      <div id="mobile-menu" class="lg:hidden bg-[#0a2540] border-t border-white/10 px-3 py-3">
        ${mobileLinks}
        <a href="contact.html#quote" class="btn-primary text-sm mt-3 w-full text-center">Request a Quote</a>
      </div>
    </div>
  `;

  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('open');
  });
}

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  const year = new Date().getFullYear();
  el.innerHTML = `
    <footer class="bg-[#0a2540] text-slate-300 mt-16">
      <div class="container-x py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded bg-[#ff7a00] flex items-center justify-center text-white font-bold">B</div>
            <div class="leading-tight">
              <div class="text-white font-bold">BUILDQUAL</div>
              <div class="text-[10px] uppercase tracking-widest">Engineering Ltd</div>
            </div>
          </div>
          <p class="text-sm text-slate-400">Specialist civil engineering materials and geotechnical testing across Zambia.</p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-3">Quick Links</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="about.html" class="hover:text-white">About</a></li>
            <li><a href="services.html" class="hover:text-white">Services</a></li>
            <li><a href="capabilities.html" class="hover:text-white">Capabilities</a></li>
            <li><a href="projects.html" class="hover:text-white">Projects</a></li>
            <li><a href="hse.html" class="hover:text-white">HSE</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-3">Contact</h4>
          <ul class="space-y-2 text-sm">
            <li>Off Alick Nkhata Rd, Mtendere, Lusaka</li>
            <li>Ibex Hill, Plot No. 28, Lusaka</li>
            <li>Tel: +260 212 226 123</li>
            <li>Mobile: +260 962 920 940</li>
            <li>Email: <a href="mailto:buildqualengineeringlimited@gmail.com" class="hover:text-white break-all">buildqualengineeringlimited@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-3">Follow</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white">Facebook: Buildqual Engineering Limited</a></li>
            <li><a href="https://wa.me/260968823050" class="hover:text-white">WhatsApp: +260 968 823 050</a></li>
          </ul>
          <p class="text-xs text-slate-500 mt-4">TPIN: 2003721325</p>
        </div>
      </div>
      <div class="border-t border-white/10">
        <div class="container-x py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-slate-400">
          <div>© ${year} Buildqual Engineering Limited. All rights reserved.</div>
          <div>Built by <a href="#" class="text-white hover:text-[#ff7a00]">Double ZZ Company</a></div>
        </div>
      </div>
    </footer>
    <a href="https://wa.me/260968823050" class="wa-fab" aria-label="Chat on WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.34-1.66a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42zM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.98 1-3.66-.23-.38a9.86 9.86 0 0 1-1.5-5.25c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.13 1.03 7 2.9a9.87 9.87 0 0 1 2.9 7c0 5.46-4.44 9.9-9.9 9.9zm5.42-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z"/></svg>
    </a>
  `;
}

function handleContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const action = form.getAttribute('action') || '';
    const data = Object.fromEntries(new FormData(form).entries());

    // Not yet wired to Formspree — fall back to mailto so the site works out of the box.
    if (!action || action.includes('YOUR_FORMSPREE_ID')) {
      const subject = encodeURIComponent(`Quote Request — ${data.service || 'General enquiry'}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nCompany: ${data.company || '-'}\nEmail: ${data.email}\nPhone: ${data.phone || '-'}\nService: ${data.service || '-'}\n\nMessage:\n${data.message}`
      );
      window.location.href = `mailto:buildqualengineeringlimited@gmail.com?subject=${subject}&body=${body}`;
      status.textContent = 'Opening your email app… If nothing happens, please email us directly.';
      return;
    }

    // Real submission via Formspree
    try {
      status.textContent = 'Sending…';
      const res = await fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        window.location.href = 'thanks.html';
      } else {
        const err = await res.json().catch(() => ({}));
        status.textContent = err.error || 'Sorry — something went wrong. Please email us directly.';
      }
    } catch {
      status.textContent = 'Network error. Please email us directly.';
    }
  });
}

function handleTestsFilter() {
  const input = document.getElementById('tests-search');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    document.querySelectorAll('#tests-table tbody tr').forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  handleContactForm();
  handleTestsFilter();
  loadGA();
});
