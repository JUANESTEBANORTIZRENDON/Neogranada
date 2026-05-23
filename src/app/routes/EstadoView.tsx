import { Link } from "react-router";
import { ArrowRight, BookOpenText, CheckCircle2, Landmark } from "lucide-react";
import GlassCard from "../components/cards/GlassCard";
import { stateDetails, stateMetrics, stateSummary, territorialData } from "../data/stateData";
import { useAnimeOnView } from "../hooks/useAnimeOnView";

export default function EstadoView() {
  const viewRef = useAnimeOnView<HTMLElement>();

  return (
    <section ref={viewRef} className="relative min-h-screen pt-24 pb-14 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-10 md:mb-14 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-wide text-foreground">El Estado de Neogranada</h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-foreground/80 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">{stateSummary}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {stateMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <GlassCard key={metric.label} hover className="p-6 sm:p-7 flex flex-col items-center text-center min-h-[210px]">
                <div className="w-16 h-16 rounded-2xl bg-primary/45 border border-glass-border flex items-center justify-center mb-5">
                  <Icon className="w-8 h-8 text-accent" aria-hidden="true" />
                </div>
                <h2 className="text-sm text-foreground/50 uppercase tracking-widest mb-2 font-medium">{metric.label}</h2>
                <p className="text-2xl md:text-3xl font-heading font-bold text-foreground leading-tight">{metric.value}</p>
                <p className="text-xs text-foreground/55 mt-3 leading-relaxed">{metric.detail}</p>
              </GlassCard>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-6">
          <GlassCard className="p-6 sm:p-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6 uppercase tracking-wide">Naturaleza institucional</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stateDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div key={detail.label} className="flex items-start gap-4 rounded-xl bg-primary/35 border border-glass-border p-4">
                    <div className="w-11 h-11 rounded-xl bg-background/50 border border-glass-border flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-widest text-foreground/50 font-bold mb-1">{detail.label}</h3>
                      <p className="text-sm text-foreground/82 leading-relaxed">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8 bg-glass-red border-glass-red-border">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-5 uppercase tracking-wide">Datos soberanos</h2>
            <ul className="space-y-4">
              {territorialData.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/88">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          <Link to="/constitucion-base" className="outline-none focus-visible:ring-2 focus-visible:ring-accent/70 rounded-2xl">
            <GlassCard hover className="p-6 sm:p-7 h-full group bg-primary/25">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                  <BookOpenText className="w-7 h-7 text-accent" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground uppercase leading-tight">Artículos de la Constitución inicial</h2>
                  <p className="text-sm text-foreground/68 leading-relaxed mt-3">
                    Consulta el preámbulo y los veinte artículos principales que definen derechos, deberes, soberanía digital, cultura y control ciudadano.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    Abrir módulo <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </GlassCard>
          </Link>

          <Link to="/poder-publico" className="outline-none focus-visible:ring-2 focus-visible:ring-accent/70 rounded-2xl">
            <GlassCard hover className="p-6 sm:p-7 h-full group bg-glass-red border-glass-red-border">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-background/40 border border-glass-border flex items-center justify-center shrink-0">
                  <Landmark className="w-7 h-7 text-accent" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground uppercase leading-tight">Organización del poder político</h2>
                  <p className="text-sm text-foreground/68 leading-relaxed mt-3">
                    Explora la federación, el sistema tecnocrático de Asamblea, el ejecutivo dual y las ramas Ejecutiva, Legislativa y Judicial.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    Abrir módulo <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </GlassCard>
          </Link>
        </div>
      </div>
    </section>
  );
}
