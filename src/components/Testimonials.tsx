import { testimonials } from "../lib/data";
import { Reveal } from "../lib/motion";
import { Quote } from "../lib/icons";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* marca de agua tipográfica */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 select-none font-display text-[22vw] font-extrabold leading-none text-stroke opacity-[0.07]"
      >
        VOCES
      </span>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 text-center sm:mb-20">
          <Reveal variant="mask">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber">
              (05) — Testimonios
            </span>
          </Reveal>
          <Reveal variant="mask" delay={120}>
            <h2 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-mist sm:text-6xl">
              Lo que dicen de trabajar conmigo
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 130}
              className={i === 1 ? "md:translate-y-8" : i === 2 ? "md:-translate-y-2" : ""}
            >
              <figure className="group flex h-full flex-col border border-line bg-card p-7 transition-all duration-400 hover:-translate-y-2 hover:border-amber/70 hover:shadow-[0_20px_60px_rgba(6,14,16,0.5)] sm:p-8">
                <Quote className="h-8 w-8 text-amber transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
                <blockquote className="mt-5 flex-1 leading-relaxed text-mist/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 border-t border-line/70 pt-4">
                  <p className="font-display text-lg font-bold text-mist">{t.name}</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
