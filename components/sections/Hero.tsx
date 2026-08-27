"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import MaskReveal from "@/components/MaskReveal";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : undefined;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[94vh] flex items-end sm:items-center overflow-hidden bg-navy-deep"
    >
      <motion.div
        style={reduceMotion ? undefined : { y: mediaY }}
        className="absolute inset-0 scale-[1.32] sm:scale-[1.22]"
      >
        {reduceMotion ? (
          <Image
            src="/images/hero-boat.png"
            alt="Center-console boat running across the water at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[95%_47%] sm:object-[86%_42%] contrast-[1.18] saturate-[1.15] brightness-[0.94]"
          />
        ) : (
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-boat.png"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-[95%_47%] sm:object-[86%_42%] contrast-[1.18] saturate-[1.15] brightness-[0.94]"
          >
            <source src="/videos/hero-boat.mp4" type="video/mp4" />
          </motion.video>
        )}
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #071722 0%, #071722 20%, rgba(7,23,34,0.92) 38%, rgba(7,23,34,0.5) 60%, rgba(7,23,34,0.1) 80%, transparent 100%), linear-gradient(180deg, rgba(7,23,34,0.55) 0%, transparent 24%, transparent 58%, #071722 100%)",
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

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-14 pt-8 sm:pb-20 sm:pt-28 w-full">
        <motion.p
          initial={initial ?? { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brass-light text-sm uppercase tracking-[0.25em] mb-7"
        >
          Dunedin &middot; Pinellas County
        </motion.p>
        <h1 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
          <MaskReveal delay={0.1}>Marine repair that runs like the tide, on time, every time.</MaskReveal>
        </h1>
        <motion.p
          initial={initial ?? { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-white/70 text-lg mt-7 max-w-xl"
        >
          Engine service, hull repair, electrical, and haul-outs from a crew
          that&apos;s worked these waters for years. Your boat, back on the
          water, done right.
        </motion.p>
        <motion.div
          initial={initial ?? { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap items-center gap-4 mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-brass hover:bg-brass-light text-white font-medium px-7 py-3.5 transition-all duration-300 hover:shadow-[0_0_28px_-4px_rgba(59,107,234,0.65)]"
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
      </div>
    </section>
  );
}
