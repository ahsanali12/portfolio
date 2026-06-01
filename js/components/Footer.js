class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer class="relative z-10 w-full py-24 bg-surface-container-lowest border-t border-outline-variant/20">
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div class="md:col-span-6">
<div class="flex items-center gap-4 mb-8">
<img alt="Muhammad Ahsan Ali Logo" class="w-10 h-10 object-contain" src="https://lh3.googleusercontent.com/aida/AP1WRLsgMa6Q3AUrimJawFsuMPq8B7NVru_1KBFEWJppr3PeHHrdRhLSTXaTGfy7W69LjlrPx7NA0NrjBZLmmjXVqDZcTEeeghy3x6O64hRGRb2HutP8l_5lOYAmT0frmtSrpn3Iu89Ou3KwZPETnTD42-VZjAQnmV-8SEDvfVSaprjSX69OuCfmDaIbY-aaT54wtTEvKOz41b0e4c4gMUPZl6UsIKCa7r0gBCTsVLDpUIBapYfkwIq8comiCw8w"/>
<div class="font-headline-md text-2xl text-on-surface">Muhammad Ahsan Ali</div>
</div>
<p class="font-body-md text-body-md text-on-surface-variant max-w-sm mb-8">
    Strategic technology leadership for high-growth startups and established enterprises. Delivering clarity in complexity. MSc Researcher focusing on AI and scalable architectures.
</p>
<div class="flex gap-6">
<a class="text-on-surface-variant hover:text-secondary transition-colors" href="contact.html"><span class="material-symbols-outlined">alternate_email</span></a>
<a class="text-on-surface-variant hover:text-secondary transition-colors" href="#"><span class="material-symbols-outlined">share</span></a>
<a class="text-on-surface-variant hover:text-secondary transition-colors" href="#"><span class="material-symbols-outlined">terminal</span></a>
</div>
</div>
<div class="md:col-span-6 flex flex-col md:items-end justify-between mt-12 md:mt-0">
<div class="grid grid-cols-2 sm:grid-cols-3 gap-x-gutter gap-y-8 mb-12 md:mb-0 text-left md:text-right">
<div class="space-y-4">
<h5 class="text-xs font-bold uppercase tracking-widest text-primary">Navigation</h5>
<nav class="flex flex-col gap-2">
<a class="text-sm text-on-surface-variant hover:text-secondary transition-all" href="about.html">About</a>
<a class="text-sm text-on-surface-variant hover:text-secondary transition-all" href="services.html">Services</a>
<a class="text-sm text-on-surface-variant hover:text-secondary transition-all" href="case-studies.html">Case Studies</a>
<a class="text-sm text-on-surface-variant hover:text-secondary transition-all" href="reeserach.html">Research</a>
</nav>
</div>
<div class="space-y-4">
<h5 class="text-xs font-bold uppercase tracking-widest text-secondary">Connect</h5>
<nav class="flex flex-col gap-2">
<a class="text-sm text-on-surface-variant hover:text-secondary transition-all" href="#">LinkedIn</a>
<a class="text-sm text-on-surface-variant hover:text-secondary transition-all" href="#">GitHub</a>
<a class="text-sm text-on-surface-variant hover:text-secondary transition-all" href="#">Medium</a>
</nav>
</div>
<div class="space-y-4">
<h5 class="text-xs font-bold uppercase tracking-widest text-tertiary">Community</h5>
<nav class="flex flex-col gap-2">
<a class="text-sm text-on-surface-variant hover:text-secondary transition-all" href="mentorship.html">Mentorship</a>
<a class="text-sm text-on-surface-variant hover:text-secondary transition-all" href="#">Newsletter</a>
</nav>
</div>
</div>
<div class="font-body-md text-xs text-on-surface-variant opacity-60 text-center md:text-right mt-12 md:mt-0">
    © 2024 Muhammad Ahsan Ali. Fractional CTO &amp; Engineering Leader. All rights reserved.
</div>
</div>
</div>
</footer>
        `;
  }
}
customElements.define("site-footer", SiteFooter);
