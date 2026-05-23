import { Building2, Cpu, GitBranch, Landmark, Scale, ShieldCheck } from "lucide-react";
import GlassCard from "../components/cards/GlassCard";
import SubmoduleBackButton from "../components/layout/SubmoduleBackButton";
import { executiveDual, governmentSystem, powerBranches, stateStructureSummary } from "../data/constitutionData";
import { useAnimeOnView } from "../hooks/useAnimeOnView";

export default function PoderPublicoView() {
  const viewRef = useAnimeOnView<HTMLElement>();

  return (
    <section ref={viewRef} className="relative min-h-screen pt-24 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SubmoduleBackButton to="/estado" label="Volver al Estado" context="Submódulo estatal" />

        <div className="mb-10 md:mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm font-bold uppercase tracking-[0.22em] mb-4">
            <Landmark className="w-4 h-4" aria-hidden="true" />
            Organización del poder político
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-wide text-foreground">Forma y estructura del Estado</h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Neogranada combina federación, coordinación nacional, desconcentración administrativa, mérito técnico y control ciudadano permanente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 mb-6">
          <GlassCard className="p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                <GitBranch className="w-6 h-6 text-accent" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground uppercase tracking-wide">8. Forma del Estado</h2>
                <p className="text-sm text-foreground/55 mt-1">Federación con coordinación política nacional.</p>
              </div>
            </div>
            <div className="space-y-4 text-sm md:text-base text-foreground/80 leading-relaxed">
              {stateStructureSummary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8 bg-glass-red border-glass-red-border">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-background/40 border border-glass-border flex items-center justify-center shrink-0">
                <Cpu className="w-6 h-6 text-accent" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground uppercase tracking-wide">8.1 {governmentSystem.title}</h2>
                <p className="text-sm text-foreground/55 mt-1">Mérito, evidencia y ética pública.</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-foreground/82 leading-relaxed">{governmentSystem.text}</p>
          </GlassCard>
        </div>

        <GlassCard className="p-6 sm:p-8 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground uppercase tracking-wide">8.2 Ejecutivo dual</h2>
              <p className="text-sm text-foreground/60 mt-2">Presidencialista sí, presidencialismo no: liderazgo visible sin acumulación excesiva de poder.</p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              Control mutuo
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {executiveDual.map((item) => (
              <div key={item.figure} className="rounded-xl border border-glass-border bg-primary/35 p-5">
                <h3 className="text-xl font-heading font-bold text-foreground uppercase">{item.figure}</h3>
                <p className="text-accent font-bold text-sm mt-1">{item.role}</p>
                <p className="text-sm text-foreground/75 leading-relaxed mt-4">{item.purpose}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-5 uppercase tracking-wide">9. Organización del poder público</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {powerBranches.map((branch, index) => {
              const icons = [Building2, Landmark, Scale];
              const Icon = icons[index];
              return (
                <GlassCard hover key={branch.title} className="p-6 flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary/45 border border-glass-border flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground uppercase mb-3">{branch.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{branch.text}</p>
                  <div className="mt-5 rounded-xl border border-glass-border bg-background/35 p-4 text-sm text-foreground/82 leading-relaxed">
                    {branch.detail}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
