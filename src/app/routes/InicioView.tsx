import { Link } from "react-router";
import { ChevronRight, Flag, ShieldCheck, Sparkles } from "lucide-react";
import GlassCard from "../components/cards/GlassCard";
import { useAnimeOnView } from "../hooks/useAnimeOnView";
import escudo from "../../imports/image-5.png";
import bandera from "../../imports/image-4.png";

export default function InicioView() {
  const viewRef = useAnimeOnView<HTMLElement>();

  return (
    <section ref={viewRef} className="relative min-h-screen pt-24 pb-14 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(128,0,32,0.22),rgba(11,25,44,0.14)_45%,rgba(212,175,55,0.08))] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm font-bold uppercase tracking-[0.22em] mb-5">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              Portal institucional digital
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight uppercase bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent drop-shadow-sm">
              República de Neogranada
            </h1>
            <p className="text-lg md:text-2xl text-accent font-medium max-w-2xl mx-auto lg:mx-0 tracking-wide italic mt-4">
              “Poder con razón, justicia para el futuro.”
            </p>

            <p className="mt-7 text-foreground/82 leading-relaxed text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
              Una reinterpretación moderna de los proyectos estatales latinoamericanos: justicia social, participación democrática, identidad cultural y herramientas tecnológicas avanzadas al servicio del siglo XXI.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/estado"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary text-secondary-foreground px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-secondary/30 hover:shadow-secondary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                Conoce el Estado
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                to="/innovaciones"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-cyan-neon/35 bg-primary/30 hover:bg-primary/55 text-primary-foreground px-8 py-3.5 rounded-full font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-neon/70"
              >
                Ver innovaciones
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            <GlassCard hover className="p-4 sm:p-5 overflow-hidden">
              <div className="rounded-xl overflow-hidden border border-glass-border shadow-[0_0_30px_rgba(6,182,212,0.24)] bg-background/30">
                <img src={escudo} alt="Escudo de Neogranada" className="w-full h-auto object-cover" />
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-foreground/70">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                <span>Estado social, democrático y tecnológico de derecho.</span>
              </div>
            </GlassCard>

            <GlassCard hover className="p-4 sm:p-5 overflow-hidden">
              <div className="rounded-xl overflow-hidden border border-glass-border shadow-[0_0_20px_rgba(212,175,55,0.18)] bg-background/30">
                <img src={bandera} alt="Bandera de Neogranada" className="w-full h-auto object-cover" />
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-foreground/70">
                <Flag className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                <span>Nueva Aurora como capital de una soberanía interna, externa y digital.</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
