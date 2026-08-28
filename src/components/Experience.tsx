import { getEducation, getExperience, linkedinUrl } from "../lib/data";
import { Reveal } from "../lib/motion";
import { ArrowUpRight, Spark } from "../lib/icons";
import { useLanguage } from "../lib/LanguageContext";
import { getTranslation } from "../lib/translations";

export default function Experience() {
  const { lang } = useLanguage();
  const t = getTranslation(lang).experience;
  const experience = getExperience(lang);
  const education = getEducation(lang);

  return (
    <section
      id="experiencia"
      className="relative scroll-mt-20 border-t border-line/60 bg-deep py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
          {/* columna sticky */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal variant="mask">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber">
                {t.sectionNum}
              </span>
            </Reveal>
            <Reveal variant="mask" delay={120}>
              <h2 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-mist sm:text-6xl">
                {t.title}<span className="text-stroke">{t.titleHighlight}</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-sm leading-relaxed text-fog">
                {t.description}
              </p>
            </Reveal>
            <Reveal delay={260}>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-mist transition-colors duration-300 hover:border-amber hover:text-amber"
              >
                {t.linkedinBtn}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 space-y-2 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
                <p>
                  <span className="text-amber">06</span> {t.companiesCount}
                </p>
                <p>
                  <span className="text-amber">{t.periodCurrent}</span>
                </p>
                <p>
                  <span className="text-amber">{t.sdlcText}</span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* entradas */}
          <div className="border-t border-line">
            {experience.map((item, i) => (
              <Reveal key={item.company} delay={Math.min(i * 70, 280)}>
                <div className="group relative border-b border-line py-8 transition-colors duration-300 hover:bg-card/60 sm:px-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-amber">
                      {item.period}
                      {item.current && (
                        <span className="border border-amber/60 px-2 py-0.5 text-[9px] tracking-[0.18em]">
                          {t.currentBadge}
                        </span>
                      )}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
                      {item.place}
                    </p>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-mist transition-transform duration-300 group-hover:translate-x-1.5 sm:text-3xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
                    {item.company}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm leading-relaxed text-fog"
                      >
                        <Spark className="mt-1.5 h-2.5 w-2.5 shrink-0 text-amber/80" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* formación académica */}
        <div className="mt-24 border-t border-line pt-16 sm:mt-28">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal variant="mask">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber">
                  {t.eduSectionNum}
                </span>
              </Reveal>
              <Reveal variant="mask" delay={120}>
                <h3 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-mist sm:text-5xl">
                  {t.eduTitle}
                </h3>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <p className="max-w-xs pb-2 text-sm leading-relaxed text-fog">
                {t.eduDescription}
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {education.map((ed, i) => (
              <Reveal key={ed.institution} delay={i * 120}>
                <div className="group h-full border border-line bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-amber/70 hover:shadow-[0_20px_60px_rgba(6,14,16,0.5)] sm:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber">
                    {ed.period}
                  </p>
                  <h4 className="mt-3 font-display text-2xl font-bold leading-tight text-mist transition-colors duration-300 group-hover:text-amber">
                    {ed.title}
                  </h4>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
                    {ed.institution} · {ed.place}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-fog">
                    {ed.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
