"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";

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
    <section id="area" className="bg-background py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-gulf text-sm uppercase tracking-[0.2em] mb-3">
              Where We Work
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-text-primary mb-6">
              Serving boaters across Pinellas County.
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
            <div className="aspect-square rounded-2xl border border-border relative overflow-hidden bg-navy-deep">
              <Image
                src="/images/service-area-map.png"
                alt="Nautical map of Pinellas County service area, hubbed from Dunedin"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />

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
                      <div className="w-9 h-9 rounded-full bg-gulf-light/30 blur-md" />
                      <div className="absolute inset-0 m-auto w-3 h-3 rounded-full bg-white shadow-[0_0_16px_4px_rgba(109,149,245,0.8)]" />
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
