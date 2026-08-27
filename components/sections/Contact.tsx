"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative pt-28 pb-40 border-t border-white/10 overflow-hidden bg-navy-deep">
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
            "radial-gradient(46% 56% at 50% 40%, rgba(7,23,34,0.99) 0%, rgba(7,23,34,0.9) 34%, rgba(7,23,34,0.4) 64%, rgba(7,23,34,0.12) 100%), linear-gradient(180deg, rgba(7,23,34,0.35) 0%, transparent 22%, transparent 78%, rgba(7,23,34,0.5) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-6xl sm:text-8xl text-white mb-6 leading-[1.02]">
            Tell us what&apos;s wrong. We&apos;ll tell you what it takes.
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Call or drop by the shop in Dunedin. Straight answers, no
            guesswork.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="tel:+17277762316"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-lg bg-brass hover:bg-brass-light text-white font-medium text-xl px-11 py-6 transition-[background-color,box-shadow] duration-300 hover:shadow-[0_0_36px_-4px_rgba(59,107,234,0.75)]"
            >
              Call (727) 776-2316
            </motion.a>
            <motion.a
              href="https://maps.google.com/?q=1160+Idlewild+Dr+N,+Dunedin,+FL+34698"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-lg border border-white/25 hover:bg-white/10 text-white font-medium text-xl px-11 py-6 transition-[background-color,border-color,box-shadow] duration-300 hover:border-white/50 hover:shadow-[0_0_26px_-6px_rgba(255,255,255,0.4)]"
            >
              Get Directions
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
