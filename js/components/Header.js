class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<header class="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-md border-b border-white/10 shadow-sm">
  <div class="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
    <div class="flex items-center gap-3">
      <a href="home.html" class="flex items-center gap-3">
        <img
          alt="Muhammad Ahsan Ali Logo"
          class="w-8 h-8 md:w-10 md:h-10 object-contain"
          src="https://lh3.googleusercontent.com/aida/AP1WRLsgMa6Q3AUrimJawFsuMPq8B7NVru_1KBFEWJppr3PeHHrdRhLSTXaTGfy7W69LjlrPx7NA0NrjBZLmmjXVqDZcTEeeghy3x6O64hRGRb2HutP8l_5lOYAmT0frmtSrpn3Iu89Ou3KwZPETnTD42-VZjAQnmV-8SEDvfVSaprjSX69OuCfmDaIbY-aaT54wtTEvKOz41b0e4c4gMUPZl6UsIKCa7r0gBCTsVLDpUIBapYfkwIq8comiCw8w"
        />
        <div class="font-headline-md text-[20px] md:text-headline-md font-bold text-on-surface tracking-tighter whitespace-nowrap">
          Muhammad Ahsan Ali
        </div>
      </a>
    </div>
    <nav class="hidden lg:flex items-center gap-gutter" id="site-nav">
      <a class="nav-link font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="about.html">About</a>
      <a class="nav-link font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="services.html">Services</a>
      <a class="nav-link font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="case-studies.html">Case Studies</a>
      <a class="nav-link font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="reeserach.html">Research</a>
      <a class="nav-link font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="mentorship.html">Mentorship</a>
      <a class="nav-link font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="contact.html">Contact</a>
    </nav>
    <div class="hidden lg:flex">
      <a
        href="contact.html"
        class="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-label-md text-label-md font-bold hover:scale-95 transition-all duration-300"
      >
        Book Consultation
      </a>
    </div>
    <!-- Mobile menu button -->
    <button class="lg:hidden text-on-surface" id="mobile-menu-btn" aria-label="Toggle navigation">
      <span class="material-symbols-outlined">menu</span>
    </button>
  </div>
  <!-- Mobile dropdown -->
  <div class="hidden lg:hidden bg-surface/95 backdrop-blur-md border-b border-white/10 px-margin-mobile py-4" id="mobile-menu">
    <nav class="flex flex-col gap-4">
      <a class="nav-link font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors py-2" href="about.html">About</a>
      <a class="nav-link font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors py-2" href="services.html">Services</a>
      <a class="nav-link font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors py-2" href="case-studies.html">Case Studies</a>
      <a class="nav-link font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors py-2" href="reeserach.html">Research</a>
      <a class="nav-link font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors py-2" href="mentorship.html">Mentorship</a>
      <a class="nav-link font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors py-2" href="contact.html">Contact</a>
      <a href="contact.html" class="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-label-md text-label-md font-bold text-center mt-2">
        Book Consultation
      </a>
    </nav>
  </div>
</header>
    `;

    // Highlight the active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    this.querySelectorAll('.nav-link').forEach((link) => {
      const linkPage = link.getAttribute('href');
      if (linkPage === currentPage) {
        link.classList.remove('text-on-surface-variant');
        link.classList.add('text-primary', 'font-bold', 'border-b-2', 'border-primary', 'pb-0.5');
      }
    });

    // Mobile menu toggle
    const btn = this.querySelector('#mobile-menu-btn');
    const menu = this.querySelector('#mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        const icon = btn.querySelector('.material-symbols-outlined');
        icon.textContent = menu.classList.contains('hidden') ? 'menu' : 'close';
      });
    }
  }
}
customElements.define('site-header', SiteHeader);
