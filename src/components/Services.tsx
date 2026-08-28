import { useState } from "react";
import { getServices, email } from "../lib/data";
import { Reveal } from "../lib/motion";
import { ArrowUpRight, Plus } from "../lib/icons";
import { useLanguage } from "../lib/LanguageContext";
import { getTranslation } from "../lib/translations";

export default function Services() {
  const { lang } = useLanguage();
  const t = getTranslation(lang).services;
  const services = getServices(lang);
  const [openId, setOpenId] = useState<string | null>(services[0].id);

  return (
    <section
      id="servicios"
      className="relative scroll-mt-20 border-t border-line/60 bg-deep py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        {/* columna sticky */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal variant="mask">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber">
              {t.sectionNum}
            </span>
          </Reveal>
          <Reveal variant="mask" delay={120}>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-mist sm:text-6xl">
              {t.title}<span className="text-amber">{t.titleHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-sm leading-relaxed text-fog">
              {t.description}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <a
              href={`mailto:${email}?subject=Proyecto nuevo`}
              className="group mt-8 inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-mist transition-colors duration-300 hover:border-amber hover:text-amber"
            >
              {t.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>

        {/* acordeón */}
        <div className="border-t border-line">
          {services.map((service, i) => {
            const open = openId === service.id;
            return (
              <Reveal key={service.id} delay={i * 80}>
                <div className="border-b border-line">
                  <button
                    onClick={() => setOpenId(open ? null : service.id)}
                    aria-expanded={open}
                    className={`group flex w-full items-center gap-5 py-6 text-left transition-colors duration-300 sm:gap-8 sm:py-7 ${
                      open ? "text-amber" : "text-mist hover:text-amber"
                    }`}
                  >
                    <span className="font-mono text-xs tracking-[0.2em] text-fog transition-colors group-hover:text-amber">
                      {service.number}
                    </span>
                    <span className="flex-1 font-display text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1.5 sm:text-3xl">
                      {service.title}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-300 ${
                        open
                          ? "rotate-45 border-amber text-amber"
                          : "border-line text-fog group-hover:border-amber group-hover:text-amber"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>

                  <div
                    className="grid transition-[grid-template-rows] duration-500 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="pb-7 pl-4 pr-2 sm:pl-16 sm:pr-16">
                        <p className="max-w-xl leading-relaxed text-fog">
                          {service.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-fog"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
