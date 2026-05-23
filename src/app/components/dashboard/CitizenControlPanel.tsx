import { Activity, Building, Users } from "lucide-react";
import GlassCard from "../cards/GlassCard";

export default function CitizenControlPanel() {
  return (
    <GlassCard className="flex-1 p-5 sm:p-6 relative flex flex-col border-t-4 border-t-cyan-500/50 hover:border-t-cyan-400 transition-colors group bg-background/40 backdrop-blur-2xl">
      <div className="absolute top-0 right-0 w-full h-28 bg-gradient-to-b from-cyan-500/10 to-transparent rounded-t-2xl pointer-events-none" />

      <div className="flex items-center gap-4 mb-7 pb-4 border-b border-glass-border">
        <div className="text-5xl sm:text-6xl font-heading font-bold text-cyan-500/20 group-hover:text-cyan-400/40 transition-colors drop-shadow-lg">1</div>
        <h3 className="text-lg md:text-xl font-heading font-bold uppercase leading-tight tracking-wider text-foreground">
          Sistema de Control
          <br />
          Ciudadano Vinculante
        </h3>
      </div>

      <div className="flex-1 flex flex-col gap-5">
        <div className="text-center mb-2">
          <p className="font-semibold text-lg text-foreground tracking-wide">Evalua. Controla.</p>
          <p className="text-foreground/60 text-sm">Ejerce tu poder político</p>
        </div>

        <div className="bg-primary/40 rounded-xl p-5 border border-glass-border hover:bg-primary/60 transition-colors">
          <div className="flex justify-between items-center gap-3 mb-3">
            <span className="text-sm font-medium text-foreground">Calificación ciudadana</span>
            <span className="text-cyan-400 font-bold bg-cyan-400/10 px-2 py-0.5 rounded text-xs">5.2/10</span>
          </div>
          <div className="w-full h-1.5 bg-background rounded-full overflow-hidden">
            <div className="progress-bar h-full bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]" data-progress="52%" />
          </div>
          <p className="text-xs text-foreground/50 mt-3 flex items-center gap-1">
            <Users className="w-3 h-3" aria-hidden="true" /> 9,5M ciudadanos activos
          </p>
        </div>

        <div className="bg-primary/40 rounded-xl p-5 border border-glass-border hover:bg-primary/60 transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-5 h-5 text-cyan-400" aria-hidden="true" />
            <span className="text-sm font-medium text-foreground">Indicador de gestión</span>
          </div>
          <p className="text-xs text-foreground/60 mb-3">Evaluación periódica obligatoria</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-heading font-bold text-foreground">8.4</span>
            <span className="text-sm text-foreground/50">/ 10</span>
          </div>
        </div>

        <div className="bg-primary/40 rounded-xl p-5 border border-glass-border hover:bg-primary/60 transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <Building className="w-5 h-5 text-cyan-400" aria-hidden="true" />
            <span className="text-sm font-medium text-foreground">Seguimiento de proyectos</span>
          </div>
          <p className="text-xs text-foreground/60">Barometro ciudadano: 78% de satisfaccion.</p>
        </div>
      </div>

      <button className="mt-8 w-full py-3.5 px-4 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/60 text-foreground rounded-full font-bold tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
        Calificar gestión
      </button>
    </GlassCard>
  );
}
