import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Stack from "./components/Stack";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-mist">
      {/* fondo ambiental fijo: retícula + brillos */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-pine/20 blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[-10%] h-[520px] w-[520px] rounded-full bg-amber/10 blur-[150px]" />
        <div className="absolute left-1/2 top-1/3 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-coral/[0.06] blur-[120px]" />
      </div>

      {/* grano de película */}
      <div className="noise-overlay" aria-hidden="true" />

      <Nav />

      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Experience />
        <Services />
        <Stack />
        <About />
        <Footer />
      </main>
    </div>
  );
}
