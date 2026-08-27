import Reveal from "@/components/Reveal";

const POINTS = [
  { label: "Certified Technicians", desc: "ABYC-trained, factory-certified across major engine brands." },
  { label: "Written Estimates", desc: "No surprise invoices. You approve the number before we start." },
  { label: "Fast Turnaround", desc: "Most repairs completed within the week, not the month." },
];

export default function Trust() {
  return (
    <section className="bg-surface border-y border-border py-20">
      <div className="mx-auto max-w-6xl px-6 grid sm:grid-cols-3 gap-10">
        {POINTS.map((p, i) => (
          <Reveal key={p.label} delay={i * 0.05}>
            <div className="flex items-start gap-4">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gulf shrink-0" />
              <div>
                <h3 className="font-display text-lg text-text-primary">
                  {p.label}
                </h3>
                <p className="text-text-secondary text-sm mt-1.5 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
