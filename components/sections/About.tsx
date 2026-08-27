import Image from "next/image";
import Reveal from "@/components/Reveal";

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

          <div className="grid sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
            {BADGES.map((b) => (
              <div key={b.label}>
                <div className="w-11 h-11 rounded-full border border-brass-light/40 flex items-center justify-center mb-3">
                  <svg
                    width="20"
                    height="20"
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
                <div className="text-white text-sm font-medium">{b.label}</div>
                <p className="text-white/50 text-xs leading-relaxed mt-1">
                  {b.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
