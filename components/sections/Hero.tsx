"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : undefined;

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-end overflow-hidden bg-navy-deep"
    >
      {reduceMotion ? (
        <Image
          src="/images/hero-boat.png"
          alt="Center-console boat running across the water at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_50%]"
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-boat.png"
          className="absolute inset-0 w-full h-full object-cover object-[70%_50%]"
        >
          <source src="/videos/hero-boat.mp4" type="video/mp4" />
        </video>
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #071722 0%, rgba(7,23,34,0.88) 32%, rgba(7,23,34,0.35) 60%, transparent 85%), linear-gradient(180deg, rgba(7,23,34,0.55) 0%, transparent 30%, transparent 60%, #071722 100%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-deep to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-40 w-full">
        <motion.p
          initial={initial ?? { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brass-light text-sm uppercase tracking-[0.25em] mb-6"
        >
          Dunedin &middot; Pinellas County
        </motion.p>
        <motion.h1
          initial={initial ?? { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-3xl"
        >
          Marine repair that runs like the tide, on time, every time.
        </motion.h1>
        <motion.p
          initial={initial ?? { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/70 text-lg mt-6 max-w-xl"
        >
          Engine service, hull repair, electrical, and haul-outs from a crew
          that&apos;s worked these waters for years. Your boat, back on the
          water, done right.
        </motion.p>
        <motion.div
          initial={initial ?? { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-brass hover:bg-brass-light text-white font-medium px-7 py-3.5 transition-colors"
          >
            Get a Repair Estimate
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="tel:+17275550147"
            className="rounded-lg border border-white/25 text-white hover:border-white/50 font-medium px-7 py-3.5 transition-colors"
          >
            (727) 555-0147
          </a>
        </motion.div>

        <div className="grid grid-cols-3 gap-8 mt-20 max-w-lg border-t border-white/10 pt-8">
          <div>
            <div className="font-display text-white text-3xl">15+</div>
            <div className="text-white/50 text-xs uppercase tracking-wide mt-1">
              Years on the water
            </div>
          </div>
          <div>
            <div className="font-display text-white text-3xl">1,200+</div>
            <div className="text-white/50 text-xs uppercase tracking-wide mt-1">
              Boats serviced
            </div>
          </div>
          <div>
            <div className="font-display text-white text-3xl">Same-week</div>
            <div className="text-white/50 text-xs uppercase tracking-wide mt-1">
              Most repairs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
