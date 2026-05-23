import { Navigate, useParams } from "react-router";
import { ArrowRight, CheckCircle2, Database, Radar, ShieldCheck } from "lucide-react";
import GlassCard from "../components/cards/GlassCard";
import SubmoduleBackButton from "../components/layout/SubmoduleBackButton";
import { innovationsData } from "../data/innovationsData";
import { useAnimeOnView } from "../hooks/useAnimeOnView";

const toneClasses = {
  cyan: "border-cyan-neon/35 bg-cyan-neon/10 text-cyan-neon",
  gold: "border-accent/35 bg-accent/10 text-accent",
  red: "border-secondary/35 bg-secondary/10 text-secondary",
  green: "border-green-400/35 bg-green-400/10 text-green-400",
};

export default function InnovationSystemView() {
  const { slug } = useParams();
  const viewRef = useAnimeOnView<HTMLElement>();
  const innovation = innovationsData.find((item) => item.slug === slug);

  if (!innovation) return <Navigate to="/innovaciones" replace />;

  const Icon = innovation.icon;

  return (
    <section ref={viewRef} className="relative min-h-screen pt-28 pb-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.1),transparent_34%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <SubmoduleBackButton to="/innovaciones" label="Volver a Innovaciones" context="Sistema simulado" />

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 items-stretch mb-6">
          <GlassCard className="p-6 sm:p-8 overflow-hidden relative">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-neon/10 blur-3xl" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-background/55 border border-cyan-neon/35 flex items-center justify-center text-accent shadow-[0_0_24px_rgba(34,211,238,0.16)] mb-6">
                <Icon className="w-8 h-8" aria-hidden="true" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-neon mb-3">{innovation.demo.subtitle}</p>
              <h1 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-wide text-foreground leading-tight">{innovation.title}</h1>
              {innovation.acronym && <span className="mt-4 inline-flex rounded bg-secondary/25 px-3 py-1 text-xs font-bold text-secondary-foreground">{innovation.acronym}</span>}
              <p className="mt-6 text-foreground/78 leading-relaxed">{innovation.demo.scenario}</p>
              <button className="mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-cyan-neon/40 bg-cyan-neon/10 px-6 py-3 text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-cyan-neon/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-neon/70">
                {innovation.demo.primaryAction}
                <ArrowRight className="h-4 w-4 text-cyan-neon" aria-hidden="true" />
              </button>
            </div>
          </GlassCard>

          <GlassCard className="p-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              {innovation.demo.stats.map((stat) => (
                <div key={stat.label} className={`rounded-2xl border p-4 ${toneClasses[stat.tone]}`}>
                  <p className="text-2xl font-heading font-bold">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-foreground/65">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-glass-border bg-background/45 p-5">
              <div className="flex items-center justify-between gap-4 border-b border-glass-border pb-4 mb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Consola operativa</p>
                  <h2 className="text-2xl font-heading font-bold text-foreground">Panel del sistema</h2>
                </div>
                <Radar className="h-7 w-7 text-cyan-neon" aria-hidden="true" />
              </div>
              <div className="space-y-4">
                {innovation.demo.modules.map((module) => (
                  <div key={module.title} className="rounded-xl border border-cyan-neon/20 bg-primary/35 p-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="font-heading text-lg font-bold uppercase text-foreground">{module.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/68">{module.description}</p>
                      </div>
                      <span className="w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold text-accent">{module.metric}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <GlassCard className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-cyan-neon" aria-hidden="true" />
              <h2 className="text-2xl font-heading font-bold uppercase text-foreground">Flujo de uso real</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {innovation.demo.workflow.map((step, index) => (
                <div key={step} className="rounded-xl border border-glass-border bg-primary/35 p-4">
                  <span className="text-3xl font-heading font-bold text-cyan-neon/35">0{index + 1}</span>
                  <p className="mt-3 text-sm font-bold text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8 bg-glass-red border-glass-red-border">
            <div className="flex items-center gap-3 mb-5">
              <ShieldCheck className="h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="text-2xl font-heading font-bold uppercase text-foreground">Criterio institucional</h2>
            </div>
            <p className="text-sm md:text-base leading-relaxed text-foreground/82">{innovation.demo.insight}</p>
            <div className="mt-6 rounded-xl border border-glass-border bg-background/35 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent mb-3">Beneficios esperados</p>
              <ul className="space-y-3">
                {innovation.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-neon" aria-hidden="true" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
