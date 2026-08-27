import { email, socials } from "../lib/data";
import { Reveal, useClock } from "../lib/motion";
import {
  ArrowUp,
  ArrowUpRight,
  GitHub,
  Instagram,
  LinkedIn,
  Mail,
  Spark,
  XSocial,
} from "../lib/icons";

const iconMap = {
  github: GitHub,
  linkedin: LinkedIn,
  instagram: Instagram,
  x: XSocial,
};

export default function Footer() {
  const time = useClock();

  const backToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <footer id="contacto" className="relative scroll-mt-20 overflow-hidden border-t border-line/60 bg-deep">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8 sm:pt-28">
        {/* titular gigante */}
        <div className="text-center">
          <Reveal variant="mask">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber">
              (06) — ¿Tienes un proyecto en mente?
            </span>
          </Reveal>
          <Reveal variant="mask" delay={140}>
            <a
              href={`mailto:${email}?subject=Proyecto nuevo — hablemos`}
              className="group mt-6 inline-block"
              aria-label="Escríbeme un correo"
            >
              <span className="fill-on-hover block font-display text-[clamp(3.4rem,14vw,11rem)] font-extrabold leading-[0.9] tracking-tight">
                HABLEMOS
              </span>
            </a>
          </Reveal>
          <Reveal delay={240}>
            <a
              href={`mailto:${email}`}
              className="link-sweep group mt-6 inline-flex items-center gap-3 font-mono text-sm uppercase tracking-[0.25em] text-mist sm:text-base"
            >
              <Mail className="h-4 w-4 text-amber" />
              {email}
              <ArrowUpRight className="h-4 w-4 text-amber transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
          <Reveal delay={320}>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-fog">
              Respondo en menos de 24 horas. Si es urgente, mándame un DM —
              el inbox siempre está abierto.
            </p>
          </Reveal>
        </div>

        {/* redes */}
        <Reveal delay={120}>
          <div className="mt-16 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
            {socials.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-3 bg-deep p-5 transition-colors duration-300 hover:bg-card sm:p-6"
                >
                  <span className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-fog transition-colors duration-300 group-hover:text-amber" />
                    <ArrowUpRight className="h-4 w-4 text-fog opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-amber" />
                  </span>
                  <span>
                    <span className="block font-display text-base font-bold text-mist">
                      {s.label}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
                      {s.handle}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </Reveal>

        {/* barra final */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-line/60 pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-fog sm:flex-row">
          <span className="flex items-center gap-2">
            <Spark className="h-3 w-3 text-amber" />
            © 2026 Valeria Ríos — Diseñado y programado a mano
          </span>
          <span className="flex items-center gap-2">
            CDMX
            <span className="animate-blink inline-block h-1.5 w-1.5 bg-amber" />
            {time} h
          </span>
          <button
            onClick={backToTop}
            className="group flex items-center gap-2 border border-line px-4 py-2.5 text-mist transition-colors duration-300 hover:border-amber hover:text-amber"
          >
            Volver arriba
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
