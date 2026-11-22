"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";

const navItems = [
  { href: siteConfig.paths.services, label: "Work with me" },
  { href: siteConfig.paths.caseStudies, label: "Case Studies" },
  { href: siteConfig.paths.about, label: "About" },
  { href: siteConfig.paths.hire, label: "Hire me" },
  { href: siteConfig.paths.contact, label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-md border-b border-white/10 shadow-sm">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <img
            alt="Muhammad Ahsan Ali Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
            src="/favicon.png"
          />
          <span className="font-headline-md text-[20px] md:text-headline-md font-bold text-on-surface tracking-tighter whitespace-nowrap">
            Muhammad Ahsan Ali
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-gutter">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-label-md text-label-md whitespace-nowrap transition-colors ${
                  active
                    ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:flex">
          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-label-md text-label-md font-bold whitespace-nowrap hover:scale-95 transition-all duration-300"
          >
            Book a free teardown
          </a>
        </div>

        <button
          className="xl:hidden text-on-surface"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </div>

      <div className={`${open ? "block" : "hidden"} xl:hidden bg-surface/95 backdrop-blur-md border-b border-white/10 px-margin-mobile py-4`}>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-label-md text-label-md font-bold text-center mt-2"
          >
            Book a free teardown
          </a>
        </nav>
      </div>
    </header>
  );
}

