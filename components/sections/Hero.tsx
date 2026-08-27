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
          className="object-cover object-[78%_50%] contrast-[1.15] saturate-[1.12] brightness-[0.92]"
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-boat.png"
          className="absolute inset-0 w-full h-full object-cover object-[78%_50%] contrast-[1.15] saturate-[1.12] brightness-[0.92]"
        >
          <source src="/videos/hero-boat.mp4" type="video/mp4" />
        </video>
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #071722 0%, #071722 22%, rgba(7,23,34,0.92) 40%, rgba(7,23,34,0.5) 62%, rgba(7,23,34,0.12) 82%, transparent 100%), linear-gradient(180deg, rgba(7,23,34,0.6) 0%, transparent 26%, transparent 55%, #071722 100%)",
        }}
      />
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-20 sm:h-28"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 48c120 32 240 44 360 40s232-28 360-32 240 20 360 28 232 16 360-4V120H0Z"
          fill="var(--color-background)"
        />
      </svg>

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
            href="tel:+17277762316"
            className="rounded-lg border border-white/25 text-white hover:border-white/50 font-medium px-7 py-3.5 transition-colors"
          >
            (727) 776-2316
          </a>
        </motion.div>

        <motion.div
          initial={initial ?? { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-3 mt-20 max-w-lg rounded-2xl bg-white/8 backdrop-blur-md border border-white/15 divide-x divide-white/10 overflow-hidden"
        >
          {[
            { icon: <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />, value: "15+", label: "Years on the water" },
            { icon: <path d="M3 17h2l2-5h10l2 5h2M6 12l2-6h8l2 6M8 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />, value: "1,200+", label: "Boats serviced" },
            { icon: <path d="M12 7v5l3.5 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />, value: "Same-week", label: "Most repairs" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 px-5 py-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brass-light shrink-0" aria-hidden="true">
                {stat.icon}
              </svg>
              <div>
                <div className="font-display text-white text-xl leading-none">{stat.value}</div>
                <div className="text-white/50 text-[11px] uppercase tracking-wide mt-1.5">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
