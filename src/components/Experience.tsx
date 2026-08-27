import { experience } from "../lib/data";
import { Reveal } from "../lib/motion";
import { ArrowUpRight } from "../lib/icons";

export default function Experience() {
  return (
    <section
      id="trayectoria"
      className="relative scroll-mt-20 border-t border-line/60 bg-deep py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 sm:mb-16">
          <div>
            <Reveal variant="mask">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber">
                (04) — Trayectoria
              </span>
            </Reveal>
            <Reveal variant="mask" delay={120}>
              <h2 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-mist sm:text-6xl">
                El camino hasta aquí
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 pb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-fog transition-colors hover:text-amber"
            >
              CV completo en LinkedIn
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>

        <div className="border-t border-line">
          {experience.map((item, i) => (
            <Reveal key={item.period} delay={i * 90}>
              <div className="group grid gap-3 border-b border-line py-7 transition-colors duration-300 hover:bg-card/60 sm:grid-cols-[170px_1fr_1.2fr] sm:gap-8 sm:py-9 lg:px-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
                  {item.period}
                </p>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-mist transition-transform duration-300 group-hover:translate-x-1.5 sm:text-2xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
                    {item.company} · {item.place}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-fog sm:text-base">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
