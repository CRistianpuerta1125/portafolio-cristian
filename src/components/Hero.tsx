import { useRef } from "react";
import { usePrefersReducedMotion, useScramble } from "../lib/motion";
import { ArrowDown, ArrowUpRight, Spark } from "../lib/icons";

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const name = useScramble("VALERIA", 250);
  const surname = useScramble("RÍOS", 650);

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduced) return;
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative flex min-h-screen flex-col overflow-hidden pt-16"
    >
      {/* resplandor que sigue al cursor */}
      <div className="hero-glow pointer-events-none absolute inset-0 transition-opacity duration-500" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 sm:px-8">
        {/* fila de metadatos */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-fog sm:mt-12 sm:text-[11px]">
          <span className="flex items-center gap-2">
            <Spark className="h-3 w-3 text-amber" />
            Portafolio — vol. 2026
          </span>
          <span className="hidden sm:inline">CDMX · Remoto (GMT−6)</span>
          <span className="text-amber">Abierta a proyectos</span>
        </div>

        {/* masthead tipográfico */}
        <div className="mt-10 flex flex-1 flex-col justify-center sm:mt-6">
          <p className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-fog">
            <span className="inline-block h-px w-10 bg-amber" />
            Desarrolladora creativa & directora de arte digital
          </p>

          <h1 className="font-display font-extrabold leading-[0.88] tracking-tight">
            <span className="block text-[clamp(3.2rem,13vw,10.5rem)] text-mist">
              {name}
            </span>
            <span className="group block cursor-default text-[clamp(3.2rem,13vw,10.5rem)]">
              <span className="text-stroke transition-colors duration-500 group-hover:text-amber group-hover:[-webkit-text-stroke-color:transparent]">
                {surname}
              </span>
              <span className="align-top font-mono text-[clamp(0.8rem,1.6vw,1.1rem)] font-normal tracking-normal text-amber">
                ®
              </span>
            </span>
          </h1>

          <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-[1.2fr_auto] lg:items-end">
            <div className="max-w-xl">
              <p className="text-lg leading-relaxed text-fog sm:text-xl">
                Diseño y programo sitios que la gente{" "}
                <em className="font-display font-bold not-italic text-mist">
                  recuerda
                </em>
                : WebGL, motion y tipografía con carácter para festivales,
                estudios y marcas culturales. El código es mi pincel.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#proyectos"
                  className="group flex items-center gap-3 bg-amber px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-coral"
                >
                  Ver proyectos
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </a>
                <a
                  href="#contacto"
                  className="group flex items-center gap-3 border border-line px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-mist transition-colors duration-300 hover:border-amber hover:text-amber"
                >
                  Hablemos
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>

            {/* insignia giratoria */}
            <div className="relative hidden h-40 w-40 justify-self-end lg:block">
              <svg
                viewBox="0 0 160 160"
                className="animate-spin-slower h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="circulo"
                    d="M 80,80 m -58,0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
                  />
                </defs>
                <text className="fill-fog font-mono text-[10.5px] uppercase tracking-[0.32em]">
                  <textPath href="#circulo">
                    disponible para proyectos · 2026 · hablemos ·
                  </textPath>
                </text>
              </svg>
              <div className="animate-floaty absolute inset-0 flex items-center justify-center">
                <Spark className="h-7 w-7 text-amber" />
              </div>
            </div>
          </div>
        </div>

        {/* franja inferior */}
        <div className="mb-6 mt-14 flex items-center justify-between border-t border-line/60 pt-5 font-mono text-[10px] uppercase tracking-[0.25em] text-fog sm:text-[11px]">
          <a
            href="#proyectos"
            className="group flex items-center gap-2 transition-colors hover:text-amber"
          >
            Desliza para explorar
            <ArrowDown className="animate-bounce-soft h-4 w-4 text-amber" />
          </a>
          <span className="hidden md:inline">
            04 proyectos · 05 disciplinas · 07 años
          </span>
          <span className="flex items-center gap-2">
            <span className="animate-blink inline-block h-1.5 w-1.5 bg-amber" />
            en línea
          </span>
        </div>
      </div>
    </section>
  );
}
