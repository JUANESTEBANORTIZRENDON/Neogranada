import { Award, TreePine } from "lucide-react";
import GlassCard from "../cards/GlassCard";

export default function SocialContributionPanel() {
  return (
    <GlassCard className="flex-1 p-5 sm:p-6 relative flex flex-col border-t-4 border-t-secondary/50 hover:border-t-secondary transition-colors group bg-background/40 backdrop-blur-2xl">
      <div className="absolute top-0 right-0 w-full h-28 bg-gradient-to-b from-secondary/10 to-transparent rounded-t-2xl pointer-events-none" />

      <div className="flex items-center gap-4 mb-7 pb-4 border-b border-glass-border">
        <div className="text-5xl sm:text-6xl font-heading font-bold text-secondary/30 group-hover:text-secondary/50 transition-colors drop-shadow-lg">3</div>
        <h3 className="text-lg md:text-xl font-heading font-bold uppercase leading-tight tracking-wider text-foreground">
          Sistema de Contribucion
          <br />
          Social Obligatoria
        </h3>
      </div>

      <div className="flex-1 flex flex-col gap-5">
        <div className="text-center mb-2">
          <p className="font-semibold text-lg text-foreground tracking-wide">Tu participacion crea Estado</p>
          <p className="text-foreground/60 text-sm">Derechos y deberes activos</p>
        </div>

        <div className="bg-primary/40 rounded-xl p-5 border border-glass-border hover:bg-primary/60 transition-colors">
          <div className="flex justify-between items-end gap-3 mb-4">
            <div>
              <span className="text-sm font-medium text-foreground block">Horas cumplidas</span>
              <span className="text-xs text-foreground/50">Cuota anual obligatoria</span>
            </div>
            <span className="text-3xl font-heading font-bold text-foreground">
              45<span className="text-lg text-foreground/50">h</span>
            </span>
          </div>
          <div className="w-full h-2 bg-background rounded-full overflow-hidden">
            <div className="progress-bar h-full bg-gradient-to-r from-secondary/50 to-secondary rounded-r-full shadow-[0_0_10px_rgba(128,0,32,0.8)]" data-progress="45%" />
          </div>
          <div className="mt-3 flex justify-between text-xs text-foreground/50 font-medium">
            <span>0h</span>
            <span>Objetivo: 100h</span>
          </div>
        </div>

        <div className="bg-primary/40 rounded-xl p-5 border border-glass-border flex items-start gap-4 hover:bg-primary/60 transition-colors">
          <div className="mt-1 bg-secondary/20 p-2 rounded-lg">
            <TreePine className="w-5 h-5 text-foreground" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground mb-1">Opciones flexibles</p>
            <p className="text-xs text-foreground/60 leading-relaxed">Tutorías, reforestación, apoyo comunitario y adultos mayores.</p>
          </div>
        </div>

        <div className="bg-primary/40 rounded-xl p-5 border border-glass-border flex items-start gap-4 hover:bg-primary/60 transition-colors">
          <div className="mt-1 bg-secondary/20 p-2 rounded-lg">
            <Award className="w-5 h-5 text-foreground" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground mb-1">Incentivos y sanciones</p>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Descuentos tributarios o multas. Estado actual: <span className="text-green-400">cumplidor</span>.
            </p>
          </div>
        </div>
      </div>

      <button className="mt-8 w-full py-3.5 px-4 bg-secondary/20 border border-secondary/40 hover:bg-secondary/30 hover:border-secondary text-foreground rounded-full font-bold tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(128,0,32,0.2)] hover:shadow-[0_0_25px_rgba(128,0,32,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
        Iniciar contribución
      </button>
    </GlassCard>
  );
}
