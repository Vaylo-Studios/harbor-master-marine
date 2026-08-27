import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="bg-navy py-28 relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="aspect-[4/5] rounded-2xl border border-white/10 relative overflow-hidden">
            <Image
              src="/images/about-technician.png"
              alt="Harbor Master Marine technician servicing an outboard engine at the dock"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-brass-light text-sm uppercase tracking-[0.2em] mb-3">
            Who We Are
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
            Local hands, real accountability.
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Harbor Master Marine has been keeping boats in Dunedin and the
            surrounding Pinellas County waters running right for over 15
            years. We&apos;re not a franchise, we&apos;re a crew of
            certified marine technicians who live and boat here too.
          </p>
          <p className="text-white/70 leading-relaxed">
            Every job gets a straight diagnosis, a real timeline, and a
            technician who explains what&apos;s actually wrong, no upsells,
            no guesswork.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
