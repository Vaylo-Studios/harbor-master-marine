import Reveal from "@/components/Reveal";

const SERVICES = [
  {
    title: "Engine Service & Repair",
    desc: "Inboard, outboard, and sterndrive diagnostics, tune-ups, and full rebuilds. Both gas and diesel.",
    icon: (
      <path d="M12 8v-2M12 18v-2M8 12H6M18 12h-2M9.5 9.5 8 8M16 16l-1.5-1.5M9.5 14.5 8 16M16 8l-1.5 1.5M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    ),
  },
  {
    title: "Hull & Fiberglass Repair",
    desc: "Gelcoat, structural, and cosmetic repair. Blister treatment and bottom refinishing.",
    icon: <path d="M4 16c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0M4 12c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0M6 8l10-4 2 4" />,
  },
  {
    title: "Electrical & Electronics",
    desc: "Wiring, battery systems, navigation electronics, and troubleshooting for anything that won't turn on.",
    icon: <path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" />,
  },
  {
    title: "Haul-Out & Bottom Painting",
    desc: "Full-service haul-outs, pressure washing, bottom paint, and running gear inspection.",
    icon: <path d="M12 4v10M8 10l4 4 4-4M5 20c1-2 3-3 7-3s6 1 7 3" />,
  },
  {
    title: "Rigging & Systems",
    desc: "Steering, controls, plumbing, and onboard systems, kept tight and reliable.",
    icon: <path d="M14.7 6.3a3 3 0 0 0-4.24 4.24L4 17l1 1 3.5-3.5 1.24 1.24a3 3 0 0 0 4.24-4.24l1.5-1.5-1.28-1.28-1.5 1.58Z" />,
  },
  {
    title: "Pre-Purchase Inspections",
    desc: "Buying a boat? Get a full mechanical and structural inspection before you sign.",
    icon: <path d="M9 11l2 2 4-4M5 5h14v14H5V5Z" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-gulf text-sm uppercase tracking-[0.2em] mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-text-primary max-w-xl">
            Full-service marine repair, under one roof.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl bg-surface border border-border hover:border-border-hover transition-colors p-7">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-brass mb-5"
                  aria-hidden="true"
                >
                  {s.icon}
                </svg>
                <h3 className="font-display text-xl text-text-primary mb-2">
                  {s.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
