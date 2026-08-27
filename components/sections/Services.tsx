"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import MaskReveal from "@/components/MaskReveal";

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
    <section id="services" className="relative bg-background pt-24 pb-16 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
        aria-hidden="true"
      >
        <pattern id="services-contour" width="120" height="120" patternUnits="userSpaceOnUse">
          <path
            d="M-10 60c20-25 40-25 60 0s40 25 60 0M-10 10c20-25 40-25 60 0s40 25 60 0M-10 110c20-25 40-25 60 0s40 25 60 0"
            fill="none"
            stroke="var(--color-gulf)"
            strokeWidth="1"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#services-contour)" />
      </svg>

      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-16 sm:h-24"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 60c160-28 280-36 400-24s240 32 360 28 260-24 380-16 240 24 300 12V100H0Z"
          fill="var(--color-navy)"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6">
        <p className="text-gulf text-sm uppercase tracking-[0.2em] mb-3">
          <MaskReveal>What We Do</MaskReveal>
        </p>
        <h2 className="font-display text-4xl sm:text-5xl text-text-primary max-w-xl">
          <MaskReveal delay={0.05}>Full-service marine repair, under one roof.</MaskReveal>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="group h-full rounded-2xl bg-surface border border-border hover:border-gulf/40 hover:shadow-[0_20px_48px_-16px_rgba(59,107,234,0.28)] transition-[border-color,box-shadow] duration-300 p-8 sm:p-9"
              >
                <div className="w-[74px] h-[74px] rounded-xl bg-gulf/10 flex items-center justify-center mb-7 group-hover:bg-gulf/15 group-hover:shadow-[0_0_24px_-4px_rgba(59,107,234,0.5)] transition-all duration-300">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gulf"
                    aria-hidden="true"
                  >
                    {s.icon}
                  </svg>
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-text-primary mb-3">
                  {s.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-7">
                  {s.desc}
                </p>
                <div className="w-10 h-10 rounded-full border border-border group-hover:border-gulf group-hover:bg-gulf flex items-center justify-center transition-colors duration-300">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-text-muted group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
