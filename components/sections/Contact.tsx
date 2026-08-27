import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 border-t border-white/10 overflow-hidden bg-navy-deep">
      <Image
        src="/images/marina-cta.png"
        alt="Boats docked at a marina at dusk"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,23,34,0.85) 0%, rgba(7,23,34,0.72) 45%, rgba(7,23,34,0.88) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
            Tell us what&apos;s wrong. We&apos;ll tell you what it takes.
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            Call, email, or drop by the shop in Dunedin. Most estimates
            turned around within one business day.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+17277762316"
              className="rounded-lg bg-brass hover:bg-brass-light text-white font-medium px-8 py-4 transition-colors"
            >
              Call (727) 776-2316
            </a>
            <a
              href="mailto:service@harbormastermarine.com"
              className="rounded-lg border border-white/25 text-white hover:border-white/50 font-medium px-8 py-4 transition-colors"
            >
              Email the Shop
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
