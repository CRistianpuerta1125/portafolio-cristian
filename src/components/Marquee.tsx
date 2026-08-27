import { marqueeItems } from "../lib/data";
import { Spark } from "../lib/icons";

function Row({ reverse = false }: { reverse?: boolean }) {
  const content = (
    <div className="flex shrink-0 items-center">
      {marqueeItems.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span
            className={`px-6 font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl ${
              i % 2 === 0 ? "text-mist" : "text-stroke"
            }`}
          >
            {item}
          </span>
          <Spark className="h-4 w-4 shrink-0 text-amber" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee-hover flex w-full overflow-hidden border-y border-line/60 py-4 ${
        reverse ? "bg-deep" : "bg-ink"
      }`}
    >
      <div
        className={`flex w-max ${reverse ? "animate-marquee-fast" : "animate-marquee"}`}
        aria-hidden={reverse}
      >
        {content}
        {content}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-label="Disciplinas">
      <Row />
    </section>
  );
}
