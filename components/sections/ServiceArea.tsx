"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import MaskReveal from "@/components/MaskReveal";

const CITIES = [
  { name: "Dunedin", home: true, x: 46.7, y: 37.1 },
  { name: "Clearwater", x: 45.5, y: 48.2 },
  { name: "Palm Harbor", x: 56.1, y: 25.1 },
  { name: "Safety Harbor", x: 57.7, y: 40.9 },
  { name: "Oldsmar", x: 62.7, y: 31.0 },
  { name: "Tarpon Springs", x: 49.2, y: 8.6 },
  { name: "Largo", x: 45.6, y: 60.4 },
  { name: "Ozona", x: 45.4, y: 26.2 },
  { name: "Seminole", x: 43.8, y: 68.3 },
];

export default function ServiceArea() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="area" className="relative bg-background py-20 overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-10 sm:h-14"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 66c180-8 320-12 440-6s220 14 360 12 260-8 380-4 140 6 260 2V100H0Z"
          fill="var(--color-navy-deep)"
        />
      </svg>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-20 items-center">
          <Reveal>
            <p className="text-gulf text-sm uppercase tracking-[0.2em] mb-3">
              <MaskReveal>Where We Work</MaskReveal>
            </p>
            <h2 className="font-display text-5xl sm:text-6xl text-text-primary mb-6 leading-[1.05]">
              <MaskReveal delay={0.05}>Serving boaters across Pinellas County.</MaskReveal>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8 max-w-md">
              Based in Dunedin, we service marinas, docks, and boatyards
              throughout the county. Mobile diagnostics available for
              select repairs.
            </p>
            <div className="flex flex-wrap gap-2">
              {CITIES.map((city) => (
                <button
                  key={city.name}
                  type="button"
                  onMouseEnter={() => setActive(city.name)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(city.name)}
                  onBlur={() => setActive(null)}
                  className={`text-sm rounded-full px-4 py-1.5 border transition-colors flex items-center gap-1.5 ${
                    city.home
                      ? "bg-gulf border-gulf text-white"
                      : active === city.name
                        ? "border-gulf text-gulf bg-gulf/5"
                        : "border-border text-text-secondary bg-surface-elevated hover:border-gulf/40"
                  }`}
                >
                  {city.home && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <circle cx="12" cy="12" r="6" />
                    </svg>
                  )}
                  {city.name}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="aspect-square rounded-2xl border border-border relative overflow-hidden bg-navy-deep lg:-mr-16 xl:-mr-32 lg:scale-[1.08] lg:origin-left">
              <Image
                src="/images/service-area-map.png"
                alt="Nautical map of Pinellas County service area, hubbed from Dunedin"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover contrast-[1.12] saturate-[1.18] brightness-[1.04]"
              />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(45% 45% at 46.7% 37.1%, rgba(59,107,234,0.16) 0%, transparent 70%)",
                }}
              />

              {CITIES.map((city) => (
                <div
                  key={`${city.name}-base`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ left: `${city.x}%`, top: `${city.y}%` }}
                >
                  {city.home ? (
                    <>
                      <motion.div
                        animate={{ scale: [1, 1.9, 1], opacity: [0.55, 0, 0.55] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 m-auto w-4 h-4 rounded-full bg-gulf-light/50"
                      />
                      <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_18px_5px_rgba(109,149,245,0.85)] border-2 border-gulf" />
                    </>
                  ) : (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: [0, 1.6, 1], opacity: [0, 0.9, 1] }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                      className="w-2.5 h-2.5 rounded-full bg-white/80 shadow-[0_0_8px_2px_rgba(255,255,255,0.4)]"
                    />
                  )}
                </div>
              ))}

              {CITIES.map((city) => (
                <AnimatePresence key={city.name}>
                  {active === city.name && !city.home && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.4 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                      style={{ left: `${city.x}%`, top: `${city.y}%` }}
                    >
                      <div className="w-11 h-11 rounded-full bg-gulf-light/30 blur-md" />
                      <div className="absolute inset-0 m-auto w-4 h-4 rounded-full bg-white shadow-[0_0_18px_5px_rgba(109,149,245,0.85)]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}

              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-navy-deep/80 backdrop-blur border border-white/10 rounded-full pl-3 pr-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-gulf-light shrink-0" />
                <span className="text-xs text-white/80">Dunedin Shop, Home Base</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
