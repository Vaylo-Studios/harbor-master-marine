import { LogoFull } from "@/components/Logo";

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: <path d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9.3c0-.2.1-.3.3-.3H14Z" />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="16.2" cy="7.8" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Google",
    href: "https://google.com",
    icon: <path d="M12 12h7c.1.7.2 1.3.2 2 0 4-2.7 6.8-7.2 6.8-4.1 0-7.5-3.3-7.5-7.4S7.9 5.2 12 5.2c2 0 3.7.7 5 2l-2.1 2c-.7-.7-1.7-1.3-2.9-1.3-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c2.3 0 3.7-1.2 4-2.9H12v-2Z" />,
  },
  {
    label: "Yelp",
    href: "https://yelp.com",
    icon: <path d="M12 3v7l6-3M12 12l-7-1M12 12l-4 6M12 12l4 6" />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/60 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:divide-x lg:divide-white/10">
        <div className="max-w-sm">
          <LogoFull className="h-[172px] -ml-1 -my-6 mb-0" />
          <p className="text-base leading-relaxed">
            Full-service boat repair and maintenance, based in Dunedin,
            serving Pinellas County.
          </p>
        </div>

        <div className="lg:pl-10">
          <div className="text-sm uppercase tracking-[0.2em] text-white/35 mb-4">
            Contact
          </div>
          <div className="text-lg space-y-3">
            <div className="text-white/80">Dunedin, FL</div>
            <a href="tel:+17277762316" className="text-white/80 hover:text-white transition-colors block font-medium">
              (727) 776-2316
            </a>
            <a
              href="mailto:service@harbormastermarine.com"
              className="text-white/80 hover:text-white transition-colors block"
            >
              service@harbormastermarine.com
            </a>
          </div>
        </div>

        <div className="lg:pl-10">
          <div className="text-sm uppercase tracking-[0.2em] text-white/35 mb-4">
            Follow Us
          </div>
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-11 h-11 rounded-full border border-white/15 hover:border-brass-light/60 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 text-sm flex flex-col sm:flex-row justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Harbor Master Marine. All rights reserved.</span>
          <span>Site by Vaylo Studios</span>
        </div>
      </div>
    </footer>
  );
}
