import { useState } from "react";
import { navLinks } from "../lib/data";
import { useScrollProgress } from "../lib/motion";
import { Close, Menu, Spark } from "../lib/icons";

export default function Nav() {
  const progress = useScrollProgress();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* barra de progreso de lectura */}
      <div className="h-[2px] bg-deep">
        <div
          className="h-full bg-amber transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav className="border-b border-line/60 bg-ink/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#inicio"
            className="group flex items-baseline gap-1 font-display text-xl font-bold tracking-tight text-mist"
          >
            CC
            <span className="text-amber transition-transform duration-300 group-hover:rotate-90 inline-block">
              <Spark className="w-3.5 h-3.5" />
            </span>
            <span className="ml-2 hidden font-mono text-[10px] uppercase tracking-[0.25em] text-fog sm:inline">
              full stack — 26
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-sweep font-mono text-[11px] uppercase tracking-[0.22em] text-fog hover:text-mist"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contacto"
              className="group hidden items-center gap-2 border border-line bg-card px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mist transition-colors duration-300 hover:border-amber hover:bg-amber hover:text-ink sm:flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-amber opacity-60 group-hover:bg-ink" />
                <span className="relative inline-flex h-2 w-2 bg-amber group-hover:bg-ink" />
              </span>
              Disponible
            </a>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center border border-line text-mist transition-colors hover:border-amber hover:text-amber md:hidden"
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>

        {/* menú móvil */}
        <div
          className="grid overflow-hidden transition-[grid-template-rows] duration-400 md:hidden"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="flex flex-col border-t border-line/60 px-5 py-4">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line/40 py-3 font-display text-lg font-bold text-mist transition-colors hover:text-amber"
                >
                  {link.label}
                  <span className="font-mono text-[10px] text-fog">0{i + 1}</span>
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-4 bg-amber px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink"
              >
                Hablemos →
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
