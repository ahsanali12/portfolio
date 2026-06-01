import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative z-10 w-full py-24 bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="md:col-span-6">
          <div className="flex items-center gap-4 mb-8">
            <img
              alt="Muhammad Ahsan Ali Logo"
              className="w-10 h-10 object-contain"
              src="https://lh3.googleusercontent.com/aida/AP1WRLsgMa6Q3AUrimJawFsuMPq8B7NVru_1KBFEWJppr3PeHHrdRhLSTXaTGfy7W69LjlrPx7NA0NrjBZLmmjXVqDZcTEeeghy3x6O64hRGRb2HutP8l_5lOYAmT0frmtSrpn3Iu89Ou3KwZPETnTD42-VZjAQnmV-8SEDvfVSaprjSX69OuCfmDaIbY-aaT54wtTEvKOz41b0e4c4gMUPZl6UsIKCa7r0gBCTsVLDpUIBapYfkwIq8comiCw8w"
            />
            <div className="font-headline-md text-2xl text-on-surface">Muhammad Ahsan Ali</div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-8">
            Strategic technology leadership for high-growth startups and established enterprises.
            Delivering clarity in complexity. MSc Researcher focusing on AI and scalable architectures.
          </p>
        </div>

        <div className="md:col-span-6 flex flex-col md:items-end justify-between mt-12 md:mt-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-gutter gap-y-8 mb-12 md:mb-0 text-left md:text-right">
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-primary">Navigation</h5>
              <nav className="flex flex-col gap-2">
                <Link className="text-sm text-on-surface-variant hover:text-secondary transition-all" href="/about">About</Link>
                <Link className="text-sm text-on-surface-variant hover:text-secondary transition-all" href="/services">Services</Link>
                <Link className="text-sm text-on-surface-variant hover:text-secondary transition-all" href="/case-studies">Case Studies</Link>
                <Link className="text-sm text-on-surface-variant hover:text-secondary transition-all" href="/research">Research</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-secondary">Connect</h5>
              <nav className="flex flex-col gap-2">
                <a className="text-sm text-on-surface-variant hover:text-secondary transition-all" href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="text-sm text-on-surface-variant hover:text-secondary transition-all" href={siteConfig.social.github} target="_blank" rel="noreferrer">GitHub</a>
                <a className="text-sm text-on-surface-variant hover:text-secondary transition-all" href={siteConfig.social.x} target="_blank" rel="noreferrer">X / Twitter</a>
              </nav>
            </div>
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-tertiary">Community</h5>
              <nav className="flex flex-col gap-2">
                <Link className="text-sm text-on-surface-variant hover:text-secondary transition-all" href="/mentorship">Mentorship</Link>
                <Link className="text-sm text-on-surface-variant hover:text-secondary transition-all" href="/contact">Contact</Link>
              </nav>
            </div>
          </div>
          <div className="font-body-md text-xs text-on-surface-variant opacity-60 text-center md:text-right mt-12 md:mt-0">
            &copy; {new Date().getFullYear()} Muhammad Ahsan Ali
          </div>
        </div>
      </div>
    </footer>
  );
}

