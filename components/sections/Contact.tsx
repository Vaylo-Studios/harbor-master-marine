"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative py-36 border-t border-white/10 overflow-hidden bg-navy-deep">
      <motion.div
        animate={reduceMotion ? undefined : { scale: [1, 1.03, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/marina-cta.png"
          alt="Boats docked at a marina at dusk"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 65% at 50% 42%, rgba(7,23,34,0.92) 0%, rgba(7,23,34,0.72) 40%, rgba(7,23,34,0.32) 68%, rgba(7,23,34,0.12) 100%), linear-gradient(180deg, rgba(7,23,34,0.35) 0%, transparent 22%, transparent 78%, rgba(7,23,34,0.5) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-6xl text-white mb-6 leading-[1.08]">
            Tell us what&apos;s wrong. We&apos;ll tell you what it takes.
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Call, email, or drop by the shop in Dunedin. Most estimates
            turned around within one business day.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+17277762316"
              className="rounded-lg bg-brass hover:bg-brass-light text-white font-medium text-lg px-10 py-5 transition-all duration-300 hover:shadow-[0_0_32px_-4px_rgba(59,107,234,0.7)]"
            >
              Call (727) 776-2316
            </a>
            <a
              href="mailto:service@harbormastermarine.com"
              className="rounded-lg border border-white/25 text-white font-medium text-lg px-10 py-5 transition-all duration-300 hover:border-white/50 hover:shadow-[0_0_24px_-6px_rgba(255,255,255,0.35)]"
            >
              Email the Shop
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
