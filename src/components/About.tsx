import { counters, portraitImage, toolbox } from "../lib/data";
import { Reveal, useCountUp, useInView } from "../lib/motion";
import { Spark } from "../lib/icons";

function Counter({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const n = useCountUp(value, start);
  return (
    <div className="group border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber/70 sm:p-6">
      <p className="font-display text-5xl font-extrabold tracking-tight text-mist transition-colors duration-300 group-hover:text-amber sm:text-6xl">
        {n}
        <span className="text-amber">{suffix}</span>
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-fog">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section id="sobre" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* retrato */}
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div className="absolute -left-4 -top-4 h-full w-full border border-amber/70" aria-hidden="true" />
            <div className="relative overflow-hidden border border-line">
              <img
                src={portraitImage}
                alt="Retrato editorial de Valeria Ríos con iluminación turquesa y ámbar"
                loading="lazy"
                className="animate-breathe h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink/80 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-fog backdrop-blur-sm">
                <span>CDMX — 19:42</span>
                <span className="flex items-center gap-1.5 text-amber">
                  <Spark className="h-3 w-3" />
                  retrato · F. Guerra
                </span>
              </div>
            </div>
            <div className="animate-floaty absolute -right-5 -top-6 border border-line bg-card px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-amber">
              est. 2017
            </div>
          </div>
        </Reveal>

        {/* bio + números */}
        <div>
          <Reveal variant="mask">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber">
              (03) — Sobre mí
            </span>
          </Reveal>
          <Reveal variant="mask" delay={120}>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-mist sm:text-6xl">
              Código con <span className="text-stroke">punto de vista</span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-7 space-y-5 leading-relaxed text-fog">
              <p>
                Soy <strong className="font-semibold text-mist">Valeria Ríos</strong>:
                empecé animando banners a los 19 y terminé dirigiendo experiencias
                interactivas para festivales, fintechs y estudios de arquitectura.
                Vivo en esa frontera rara —y fértil— entre el diseño y la ingeniería.
              </p>
              <p>
                Me obsesiona lo que casi nadie nota: la curva de easing perfecta,
                el kerning de un numeral, los 60fps sostenidos en un teléfono de
                gama media. Creo que los detalles no son detalles;{" "}
                <em className="font-display font-bold not-italic text-mist">
                  son el producto
                </em>
                .
              </p>
            </div>
          </Reveal>

          <div ref={ref} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {counters.map((c) => (
              <Counter key={c.label} {...c} start={inView} />
            ))}
          </div>

          <Reveal delay={150}>
            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.3em] text-fog">
              Caja de herramientas
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {toolbox.map((tool) => (
                <span
                  key={tool}
                  className="cursor-default border border-line px-3 py-1.5 font-mono text-[11px] text-fog transition-all duration-300 hover:-translate-y-0.5 hover:border-amber hover:text-amber"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
