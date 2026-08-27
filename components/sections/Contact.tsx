import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy-deep py-28 border-t border-white/10">
      <div className="mx-auto max-w-3xl px-6 text-center">
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
              href="tel:+17275550147"
              className="rounded-full bg-brass hover:bg-brass-light text-navy-deep font-medium px-8 py-4 transition-colors"
            >
              Call (727) 555-0147
            </a>
            <a
              href="mailto:service@harbormastermarine.com"
              className="rounded-full border border-white/25 text-white hover:border-white/50 font-medium px-8 py-4 transition-colors"
            >
              Email the Shop
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
