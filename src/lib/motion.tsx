import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/* ¿El usuario prefiere movimiento reducido? */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* Observa cuándo un elemento entra al viewport (una sola vez). */
export function useInView<T extends HTMLElement>(
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px"
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);
  return { ref, inView };
}

/* Envoltura de revelado por scroll: variante 'up' o 'mask' (título que emerge). */
export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "mask";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style = { transitionDelay: `${delay}ms` };

  if (variant === "mask") {
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        <span
          className={`reveal-mask-inner ${inView ? "in" : ""}`}
          style={style}
        >
          {children}
        </span>
      </div>
    );
  }
  return (
    <div ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}

/* Efecto scramble/decodificación para titulares. */
const SCRAMBLE_CHARS = "█▓▒░#%&/<>*+";
export function useScramble(text: string, startDelay = 0): string {
  const reduced = usePrefersReducedMotion();
  const [out, setOut] = useState<string>(() =>
    text
      .split("")
      .map((c) =>
        c === " " ? " " : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
      )
      .join("")
  );
  useEffect(() => {
    if (reduced) {
      setOut(text);
      return;
    }
    let frame = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        frame += 1;
        const revealed = Math.floor(frame / 2);
        if (revealed >= text.length) {
          setOut(text);
          if (interval) clearInterval(interval);
          return;
        }
        setOut(
          text
            .split("")
            .map((c, i) => {
              if (i < revealed) return c;
              if (c === " ") return " ";
              return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            })
            .join("")
        );
      }, 30);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, startDelay, reduced]);
  return out;
}

/* Contador animado con easing. */
export function useCountUp(target: number, start: boolean, duration = 1500): number {
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setValue(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration, reduced]);
  return value;
}

/* Reloj en vivo (zona horaria de CDMX). */
export function useClock(timeZone = "America/Mexico_City"): string {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("es-MX", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone,
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
}

/* Progreso de scroll de la página (0–100). */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);
  const onScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      ticking.current = false;
    });
  }, []);
  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [onScroll]);
  return progress;
}
