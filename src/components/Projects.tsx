import { getProjects } from "../lib/data";
import { Reveal } from "../lib/motion";
import { Spark, ArrowUpRight } from "../lib/icons";
import { useLanguage } from "../lib/LanguageContext";
import { getTranslation } from "../lib/translations";

export default function Projects() {
  const { lang } = useLanguage();
  const t = getTranslation(lang).projects;
  const projects = getProjects(lang);

  return (
    <section
      id="proyectos"
      className="relative scroll-mt-20 overflow-hidden border-t border-line/60 bg-ink py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Encabezado de la sección */}
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 sm:mb-20">
          <div>
            <Reveal variant="mask">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber">
                {t.sectionNum}
              </span>
            </Reveal>
            <Reveal variant="mask" delay={120}>
              <h2 className="mt-4 font-display text-3xl min-[400px]:text-4xl sm:text-6xl font-extrabold leading-[0.95] tracking-tight text-mist">
                {t.title}
                <span className="text-stroke">{t.titleHighlight}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="max-w-sm pb-2 text-sm leading-relaxed text-fog">
              {t.description}
            </p>
          </Reveal>
        </div>

        {/* Grid de proyectos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 120}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden border border-line bg-card/60 transition-all duration-500 hover:-translate-y-1.5 hover:border-amber/70 hover:bg-card hover:shadow-[0_20px_60px_rgba(6,14,16,0.5)]">
                <div>
                  {/* Vista previa / Pantallazo del proyecto */}
                  {project.image && (
                    <div className="relative aspect-video w-full overflow-hidden border-b border-line bg-deep">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />
                    </div>
                  )}

                  <div className="p-6 sm:p-7">
                    {/* Fila superior: Categoría + Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.2em]">
                      <span className="text-amber">{project.category}</span>
                      {project.company && (
                        <span className="border border-line bg-deep px-2 py-0.5 text-fog">
                          {project.company}
                        </span>
                      )}
                    </div>

                    {/* Título del proyecto */}
                    <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-mist transition-colors duration-300 group-hover:text-amber sm:text-2xl">
                      {project.title}
                    </h3>

                    {/* Descripción */}
                    <p className="mt-3 text-sm leading-relaxed text-fog">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Pie de tarjeta: Tags + Botón de redirección */}
                <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-line/60">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-line bg-deep px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-fog transition-colors group-hover:border-amber/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(project.demoUrl || project.githubUrl) && (
                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 border border-amber/70 bg-amber/10 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-amber transition-all duration-300 hover:bg-amber hover:text-ink"
                        >
                          {t.viewDemo}
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 border border-line bg-deep px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-fog transition-all duration-300 hover:border-amber hover:text-mist"
                        >
                          {t.viewCode}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
