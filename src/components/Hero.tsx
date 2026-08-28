import { useRef } from "react";
import { usePrefersReducedMotion, useScramble } from "../lib/motion";
import { ArrowDown, ArrowUpRight, ColombiaFlag, Spark } from "../lib/icons";
import { useLanguage } from "../lib/LanguageContext";

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const name = useScramble("CRISTIAN", 250);
  const surname = useScramble("CALDERÓN", 700);
  const { lang } = useLanguage();

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduced) return;
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const isEn = lang === "en";

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
            Portfolio — vol. 2026
          </span>
          <span className="hidden items-center gap-2 sm:inline-flex">
            <ColombiaFlag className="h-3.5 w-5 border border-line/50" />
            Tunja · Colombia (GMT−5)
          </span>
          <span className="text-amber">
            {isEn ? "Open to new challenges" : "Abierto a nuevos retos"}
          </span>
        </div>

        {/* masthead tipográfico */}
        <div className="mt-8 flex flex-1 flex-col justify-center sm:mt-6">
          <p className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-fog sm:gap-3 sm:text-[11px] sm:tracking-[0.3em]">
            <span className="inline-block h-px w-6 bg-amber sm:w-10" />
            {isEn
              ? "Full Stack Developer — from database to deployment"
              : "Desarrollador Full Stack — de la base de datos al deploy"}
          </p>

          <h1 className="font-display font-extrabold leading-[0.88] tracking-tight">
            <span className="block text-[clamp(2.2rem,11.5vw,9.5rem)] text-mist">
              {name}
            </span>
            <span className="group block cursor-default text-[clamp(2.2rem,11.5vw,9.5rem)]">
              <span className="text-stroke transition-colors duration-500 group-hover:text-amber group-hover:[-webkit-text-stroke-color:transparent]">
                {surname}
              </span>
              <span className="align-top font-mono text-[clamp(0.75rem,1.6vw,1.1rem)] font-normal tracking-normal text-amber">
                ®
              </span>
            </span>
          </h1>

          <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-[1.2fr_auto] lg:items-end">
            <div className="max-w-xl">
              <p className="text-lg leading-relaxed text-fog sm:text-xl">
                {isEn ? (
                  <>
                    Specialized in{" "}
                    <em className="font-display font-bold not-italic text-mist">
                      innovative and efficient
                    </em>{" "}
                    solutions. Passionate about transforming ideas into reality and exceeding user expectations through ambitious projects — with React, Vue, Angular, Nest.js, Symfony, Python, and solid databases.
                  </>
                ) : (
                  <>
                    Especializado en soluciones{" "}
                    <em className="font-display font-bold not-italic text-mist">
                      innovadoras y eficientes
                    </em>
                    . Me apasiona transformar ideas en realidad y superar las expectativas de los usuarios a través de proyectos ambiciosos — con React, Vue, Angular, Nest.js, Symfony, Python y bases de datos sólidas.
                  </>
                )}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#experiencia"
                  className="group flex items-center gap-3 bg-amber px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-coral"
                >
                  {isEn ? "View experience" : "Ver experiencia"}
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </a>
                <a
                  href="#contacto"
                  className="group flex items-center gap-3 border border-line px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-mist transition-colors duration-300 hover:border-amber hover:text-amber"
                >
                  {isEn ? "Contact me" : "Contáctame"}
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
                    {isEn
                      ? "full stack · colombia · available · full stack ·"
                      : "full stack · colombia · disponible · full stack ·"}
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
            href="#experiencia"
            className="group flex items-center gap-2 transition-colors hover:text-amber"
          >
            {isEn ? "Scroll to explore" : "Desliza para explorar"}
            <ArrowDown className="animate-bounce-soft h-4 w-4 text-amber" />
          </a>
          <span className="hidden md:inline">
            {isEn
              ? "06 companies · 16+ technologies · 03+ years"
              : "06 empresas · 16+ tecnologías · 03+ años"}
          </span>
          <span className="flex items-center gap-2">
            <span className="animate-blink inline-block h-1.5 w-1.5 bg-amber" />
            {isEn ? "online" : "en línea"}
          </span>
        </div>
      </div>
    </section>
  );
}
