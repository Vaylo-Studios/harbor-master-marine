"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";
import MaskReveal from "@/components/MaskReveal";

const BADGES = [
  {
    label: "Certified Technicians",
    detail: "ABYC-trained, factory-certified across major engine brands.",
    icon: <path d="M12 3l7 3v5c0 4.4-3 8.4-7 9.5-4-1.1-7-5.1-7-9.5V6l7-3Z" />,
  },
  {
    label: "Written Estimates",
    detail: "No surprise invoices. You approve the number before we start.",
    icon: <path d="M7 3h7l4 4v14H7V3Zm7 0v4h4M9 12h6M9 16h6" />,
  },
  {
    label: "Fast Turnaround",
    detail: "Most repairs completed within the week, not the month.",
    icon: <path d="M12 7v5l3.5 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />,
  },
];

export default function About() {
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section id="about" className="bg-navy pt-20 pb-14 relative overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-8 sm:h-11"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 78c180-6 320-9 440-5s220 10 360 9 260-6 380-4 140 5 260 2V100H0Z"
          fill="var(--color-background)"
        />
      </svg>
      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-[3fr_4fr] gap-16 items-center">
        <Reveal>
          <div ref={photoRef} className="aspect-[4/5] lg:aspect-[3/4] lg:scale-[1.1] lg:origin-left rounded-2xl border border-white/10 relative overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-[-6%]">
              <Image
                src="/images/about-technician.png"
                alt="Harbor Master Marine technician servicing an outboard engine at the dock"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-brass-light text-sm uppercase tracking-[0.2em] mb-3">
            <MaskReveal>Who We Are</MaskReveal>
          </p>
          <h2 className="font-display text-6xl sm:text-7xl text-white mb-6 leading-[1.02]">
            <MaskReveal delay={0.05}>Local hands, real accountability.</MaskReveal>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-4">
            Harbor Master Marine has been keeping boats in Dunedin and the
            surrounding Pinellas County waters running right for over 15
            years. We&apos;re not a franchise, we&apos;re a crew of
            certified marine technicians who live and boat here too.
          </p>
          <p className="text-white/70 text-lg leading-relaxed">
            Every job gets a straight diagnosis, a real timeline, and a
            technician who explains what&apos;s actually wrong, no upsells,
            no guesswork.
          </p>

          <div className="mt-12 pt-9 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-y-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {BADGES.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="py-6 sm:py-0 sm:px-8 first:sm:pl-0 last:sm:pr-0"
              >
                <div className="w-[76px] h-[76px] rounded-full border border-brass-light/40 flex items-center justify-center mb-5">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-brass-light"
                    aria-hidden="true"
                  >
                    {b.icon}
                  </svg>
                </div>
                <div className="text-white text-lg font-medium">{b.label}</div>
                <p className="text-white/50 text-[0.94rem] leading-relaxed mt-2.5">
                  {b.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
