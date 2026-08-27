import { useState } from "react";
import { projects, email } from "../lib/data";
import { Reveal } from "../lib/motion";
import { ArrowUpRight, Plus } from "../lib/icons";

function ProjectCard({ project, i }: { project: (typeof projects)[number]; i: number }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className="group sticky mb-8 border border-line bg-card shadow-[0_-18px_50px_rgba(6,14,16,0.55)]"
      style={{ top: `calc(5.5rem + ${i * 1.5}rem)` }}
    >
      <div className="grid lg:grid-cols-[1.15fr_1fr]">
        {/* imagen */}
        <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[460px]">
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          <span className="absolute left-5 top-4 font-display text-7xl font-extrabold text-stroke opacity-80 sm:text-8xl">
            {project.index}
          </span>
          {project.award && (
            <span className="absolute right-4 top-4 border border-amber/50 bg-ink/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-amber backdrop-blur-sm">
              ✳ {project.award}
            </span>
          )}
          <span className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[0.25em] text-mist/80">
            {project.category}
          </span>
        </div>

        {/* información */}
        <div className="flex flex-col p-6 sm:p-9">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
            <span>{project.year}</span>
            <span className="text-amber">{project.role}</span>
          </div>

          <h3 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-mist transition-colors duration-300 group-hover:text-amber sm:text-5xl">
            {project.title}
          </h3>

          <p className="mt-4 leading-relaxed text-fog">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-fog transition-colors duration-300 group-hover:border-line group-hover:text-mist"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* detalles expandibles */}
          <div
            className="mt-6 grid transition-[grid-template-rows] duration-500 ease-out"
            style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
          >
            <div className="min-h-0 overflow-hidden">
              <ul className="space-y-2.5 border-l-2 border-amber/60 pl-4 pt-1">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm leading-relaxed text-mist/90">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between pt-6">
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mist transition-colors hover:text-amber"
            >
              <span
                className={`flex h-7 w-7 items-center justify-center border border-line transition-all duration-300 ${
                  open ? "rotate-45 border-amber text-amber" : ""
                }`}
              >
                <Plus className="h-3.5 w-3.5" />
              </span>
              {open ? "Cerrar detalles" : "Ver resultados"}
            </button>

            <a
              href={`mailto:${email}?subject=Caso ${project.title} — solicitud de deck`}
              className="group/link flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-fog transition-colors hover:text-amber"
            >
              Pedir deck
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 sm:mb-20">
          <div>
            <Reveal variant="mask">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber">
                (01) — Trabajo seleccionado
              </span>
            </Reveal>
            <Reveal variant="mask" delay={120}>
              <h2 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-mist sm:text-7xl">
                Proyectos
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="max-w-xs pb-2 text-sm leading-relaxed text-fog">
              Cuatro piezas que resumen mi forma de trabajar: idea, diseño y
              código en las mismas manos. Desliza — se apilan como láminas.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
