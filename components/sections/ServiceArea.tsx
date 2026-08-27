import Reveal from "@/components/Reveal";

const AREAS = [
  "Dunedin",
  "Clearwater",
  "Palm Harbor",
  "Safety Harbor",
  "Oldsmar",
  "Tarpon Springs",
  "Largo",
  "Ozona",
];

export default function ServiceArea() {
  return (
    <section id="area" className="bg-background py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl text-text-primary mb-6">
              Serving boaters across Pinellas County.
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8 max-w-md">
              Based in Dunedin, we service marinas, docks, and boatyards
              throughout the county. Mobile diagnostics available for
              select repairs.
            </p>
            <div className="flex flex-wrap gap-2">
              {AREAS.map((area) => (
                <span
                  key={area}
                  className="text-sm text-text-secondary bg-surface-elevated border border-border rounded-full px-4 py-1.5"
                >
                  {area}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="aspect-square rounded-2xl bg-surface-elevated border border-border relative overflow-hidden flex items-center justify-center">
              <svg
                className="absolute inset-0 w-full h-full text-border"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line x1="0" y1="30" x2="100" y2="30" stroke="currentColor" strokeWidth="0.4" />
                <line x1="0" y1="70" x2="100" y2="70" stroke="currentColor" strokeWidth="0.4" />
                <line x1="30" y1="0" x2="30" y2="100" stroke="currentColor" strokeWidth="0.4" />
                <line x1="70" y1="0" x2="70" y2="100" stroke="currentColor" strokeWidth="0.4" />
              </svg>
              <div className="relative w-3 h-3 rounded-full bg-brass shadow-[0_0_0_8px_rgba(184,134,63,0.15)]" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
