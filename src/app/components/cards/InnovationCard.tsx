import { Link } from "react-router";
import { CheckCircle2, ChevronRight } from "lucide-react";
import type { Innovation } from "../../data/innovationsData";
import GlassCard from "./GlassCard";

type InnovationCardProps = {
  innovation: Innovation;
};

export default function InnovationCard({ innovation }: InnovationCardProps) {
  const Icon = innovation.icon;

  return (
    <Link
      to={`/innovaciones/${innovation.slug}`}
      className="group h-full w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-neon/70 rounded-2xl"
      aria-label={`Abrir módulo de ${innovation.title}`}
    >
      <GlassCard hover className="p-6 sm:p-8 h-full min-h-[350px] flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-neon/10 to-transparent opacity-75 pointer-events-none" />
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-neon/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="w-14 h-14 rounded-2xl bg-background/55 border border-cyan-neon/35 flex items-center justify-center text-accent shadow-[0_0_18px_rgba(34,211,238,0.12)]">
              <Icon className="w-7 h-7" aria-hidden="true" />
            </div>
            <span className="text-4xl font-heading font-bold text-foreground/10 group-hover:text-cyan-neon/25 transition-colors">0{innovation.id}</span>
          </div>

          <h3 className="text-xl font-heading font-bold mb-3 text-foreground leading-tight">{innovation.title}</h3>
          {innovation.acronym && <span className="inline-block bg-secondary/30 text-secondary-foreground text-xs font-bold px-2 py-1 rounded mb-4">{innovation.acronym}</span>}
          <p className="text-foreground/70 text-sm mb-6 leading-relaxed">{innovation.shortDesc}</p>
        </div>

        <div className="pointer-events-none absolute inset-3 z-20 flex flex-col justify-between rounded-2xl border border-cyan-neon/40 bg-background/95 p-5 opacity-0 translate-y-2 shadow-2xl shadow-cyan-neon/10 backdrop-blur-2xl transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-neon mb-3">Información institucional</p>
            <p className="text-sm leading-relaxed text-foreground/82">{innovation.longDesc}</p>
          </div>
          <div className="mt-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent mb-3">Beneficios esperados</p>
            <ul className="space-y-2">
              {innovation.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-xs text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-neon" aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <span className="inline-flex w-fit items-center justify-center text-accent text-sm font-semibold tracking-wide group-hover:translate-x-1 transition-transform relative z-10 uppercase">
          Abrir sistema <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
        </span>
      </GlassCard>
    </Link>
  );
}
