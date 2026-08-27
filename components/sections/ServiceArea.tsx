import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";

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

const PINS = [
  { x: 62, y: 18 },
  { x: 48, y: 32 },
  { x: 68, y: 46 },
  { x: 38, y: 58 },
  { x: 58, y: 68 },
  { x: 44, y: 82 },
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
            <div className="aspect-square rounded-2xl bg-surface-elevated border border-border relative overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 0h100v100H30c-6-10-4-20 4-28-10-4-16-14-10-24 4-8 2-18-8-24-8-5-14-12-16-24Z"
                  fill="var(--color-surface)"
                />
                {PINS.slice(1).map((p) => (
                  <line
                    key={`${p.x}-${p.y}`}
                    x1="30"
                    y1="30"
                    x2={p.x}
                    y2={p.y}
                    stroke="var(--color-gulf-light)"
                    strokeWidth="0.5"
                    strokeDasharray="1.5 1.5"
                    opacity="0.5"
                  />
                ))}
              </svg>
              {PINS.map((p, i) => (
                <svg
                  key={`${p.x}-${p.y}`}
                  width={i === 0 ? "26" : "16"}
                  height={i === 0 ? "26" : "16"}
                  viewBox="0 0 24 24"
                  fill="none"
                  className="absolute -translate-x-1/2 -translate-y-full"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  <path
                    d="M12 2c-4.4 0-8 3.5-8 8 0 6 8 12 8 12s8-6 8-12c0-4.5-3.6-8-8-8Z"
                    fill={i === 0 ? "var(--color-brass)" : "var(--color-gulf)"}
                  />
                  <circle cx="12" cy="10" r="3" fill="var(--color-surface)" />
                </svg>
              ))}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-surface/90 border border-border rounded-full pl-2 pr-3 py-1.5">
                <Logo className="w-4 h-4 text-brass" />
                <span className="text-xs text-text-secondary">Dunedin Shop</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
