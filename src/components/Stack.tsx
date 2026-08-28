import { getSkillGroups } from "../lib/data";
import { Reveal } from "../lib/motion";
import { CodeGlyph, LayersGlyph, ToolsGlyph } from "../lib/icons";
import { useLanguage } from "../lib/LanguageContext";
import { getTranslation } from "../lib/translations";

const iconMap = {
  code: CodeGlyph,
  layers: LayersGlyph,
  tools: ToolsGlyph,
};

export default function Stack() {
  const { lang } = useLanguage();
  const t = getTranslation(lang).stack;
  const skillGroups = getSkillGroups(lang);

  return (
    <section id="stack" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 sm:mb-20">
          <div>
            <Reveal variant="mask">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber">
                {t.sectionNum}
              </span>
            </Reveal>
            <Reveal variant="mask" delay={120}>
              <h2 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-mist sm:text-7xl">
                {t.title}<span className="text-stroke">{t.titleHighlight}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="max-w-sm pb-2 text-sm leading-relaxed text-fog">
              {t.description}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px border border-line bg-line lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon];
            return (
              <Reveal key={group.id} delay={i * 110} className="bg-deep">
                <div className="group flex h-full flex-col bg-deep p-7 transition-colors duration-500 hover:bg-card sm:p-9">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center border border-line text-amber transition-all duration-500 group-hover:rotate-6 group-hover:border-amber">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-display text-xl font-bold tracking-tight text-mist sm:text-2xl">
                          {group.category}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog">
                          {group.note}
                        </span>
                      </span>
                    </span>
                    <span className="font-mono text-xs text-fog">
                      ×{String(group.skills.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="cursor-default border border-line bg-ink/60 px-3 py-1.5 font-mono text-[11px] text-mist/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber hover:text-amber"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="h-px w-full bg-line" />
                    <div className="mt-3 h-[3px] w-10 bg-amber transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
            <span className="text-amber">✳</span> {t.learningNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
