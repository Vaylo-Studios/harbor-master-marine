"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import MaskReveal from "@/components/MaskReveal";

const SERVICES = [
  {
    title: "Wiring & Troubleshooting",
    desc: "Loose grounds, low voltage, corroded and tangled wires, diagnosed and repaired right on the boat.",
    icon: <path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" />,
  },
  {
    title: "GPS & Marine Radio",
    desc: "VHF and HF radio installs, GPS units, and antenna work, wired right the first time.",
    icon: <path d="M12 21v-7M8 16c1-1 2.5-1.5 4-1.5s3 .5 4 1.5M6 12.5c1.7-1.7 3.8-2.5 6-2.5s4.3.8 6 2.5M4 9c2.2-2.2 5-3.3 8-3.3S17.8 6.8 20 9M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />,
  },
  {
    title: "Stereo & Audio",
    desc: "Marine stereo systems installed and wired clean, built to hold up on the water.",
    icon: <path d="M5 9h3l5-4v14l-5-4H5V9Z M16 9a4 4 0 0 1 0 6" />,
  },
  {
    title: "Batteries, Switches & Starters",
    desc: "Battery switch replacement, starter and alternator repair, the failures that strand boaters.",
    icon: <path d="M4 10h13v6H4z M17 12h2v2h-2z M8 10v6M12 10v6" />,
  },
  {
    title: "Bilge Pumps & Washdown",
    desc: "Installation and wiring for bilge pumps, washdown units, and other 12-volt equipment.",
    icon: <path d="M4 16c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0M4 12c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0M12 3v7" />,
  },
  {
    title: "Lighting & Accessories",
    desc: "Spreader lights and other battery-powered accessories, installed clean and wired to last.",
    icon: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3 11.2c.6.4 1 1.1 1 1.8h4c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3Z" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-background pt-20 pb-14 overflow-hidden">
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
          <MaskReveal delay={0.05}>Mobile 12-volt electrical repair, done right.</MaskReveal>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -7 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="group h-full rounded-2xl bg-surface border border-border hover:border-gulf/50 hover:shadow-[0_24px_56px_-16px_rgba(59,107,234,0.32)] transition-[border-color,box-shadow] duration-300 p-8 sm:p-9"
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-[84px] h-[84px] rounded-xl bg-gulf/10 flex items-center justify-center mb-7 group-hover:bg-gulf/15 group-hover:shadow-[0_0_28px_-4px_rgba(59,107,234,0.55)] transition-[background-color,box-shadow] duration-300"
                >
                  <svg
                    width="41"
                    height="41"
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
                </motion.div>
                <h3 className="font-display text-xl sm:text-2xl text-text-primary mb-3">
                  {s.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-7">
                  {s.desc}
                </p>
                <div className="w-11 h-11 rounded-full border-[1.5px] border-border group-hover:border-gulf group-hover:bg-gulf flex items-center justify-center transition-colors duration-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-text-secondary group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
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
