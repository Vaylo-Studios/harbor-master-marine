"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Service Area", href: "#area" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-navy/95 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-18 py-4">
        <a href="#top" className="flex items-center gap-3">
          <Logo className="w-9 h-9 text-gulf-light shrink-0" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide text-white">
              HARBOR MASTER
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-brass-light mt-0.5">
              Marine
            </span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:+17275550147"
            className="hidden sm:inline-block rounded-lg bg-brass hover:bg-brass-light text-white text-sm font-medium px-5 py-3 transition-colors"
          >
            Call for Service
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 text-white"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-white/10 bg-navy-deep px-6 py-6 flex flex-col gap-1"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white text-base py-3 border-b border-white/5 last:border-b-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+17275550147"
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-center rounded-lg bg-brass hover:bg-brass-light text-white text-sm font-medium px-5 py-3.5 transition-colors"
          >
            Call for Service
          </a>
        </nav>
      )}
    </header>
  );
}
