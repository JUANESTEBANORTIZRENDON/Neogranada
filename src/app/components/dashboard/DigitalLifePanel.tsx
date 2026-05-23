import { BrainCircuit, FileText, User } from "lucide-react";
import GlassCard from "../cards/GlassCard";

export default function DigitalLifePanel() {
  return (
    <GlassCard className="flex-1 p-5 sm:p-6 relative flex flex-col border-t-4 border-t-accent/50 hover:border-t-accent transition-colors group bg-background/40 backdrop-blur-2xl xl:-translate-y-4 shadow-2xl z-10">
      <div className="absolute top-0 right-0 w-full h-28 bg-gradient-to-b from-accent/10 to-transparent rounded-t-2xl pointer-events-none" />

      <div className="flex items-center gap-4 mb-7 pb-4 border-b border-glass-border">
        <div className="text-5xl sm:text-6xl font-heading font-bold text-accent/20 group-hover:text-accent/40 transition-colors drop-shadow-lg">2</div>
        <h3 className="text-lg md:text-xl font-heading font-bold uppercase leading-tight tracking-wider text-foreground">
          Sistema de Vida
          <br />
          Digital Ciudadana
        </h3>
      </div>

      <div className="flex-1 flex flex-col gap-5">
        <div className="text-center mb-2">
          <p className="font-semibold text-lg text-foreground tracking-wide">El Estado te acompaña.</p>
          <p className="text-foreground/60 text-sm">Servicios proactivos y sin trámites</p>
        </div>

        <div className="bg-primary/40 rounded-xl p-5 border border-glass-border flex items-start gap-4 hover:bg-primary/60 transition-colors">
          <div className="mt-1 bg-accent/10 p-2 rounded-lg">
            <User className="w-5 h-5 text-accent" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground mb-1">Registro automático de vida</p>
            <p className="text-xs text-foreground/60 leading-relaxed">Nacimiento, salud y educacion vinculados por identidad estatal segura.</p>
          </div>
        </div>

        <div className="bg-primary/40 rounded-xl p-5 border border-glass-border flex items-start gap-4 hover:bg-primary/60 transition-colors">
          <div className="mt-1 bg-accent/10 p-2 rounded-lg">
            <FileText className="w-5 h-5 text-accent" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground mb-1">Historia integral</p>
            <p className="text-xs text-foreground/60 leading-relaxed">Salud, educacion, beneficios y obligaciones disponibles en un solo perfil.</p>
          </div>
        </div>

        <div className="bg-primary/40 rounded-xl p-5 border border-glass-border flex items-start gap-4 hover:bg-primary/60 transition-colors">
          <div className="mt-1 bg-accent/10 p-2 rounded-lg">
            <BrainCircuit className="w-5 h-5 text-accent" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground mb-1">Servicios personalizados</p>
            <p className="text-xs text-foreground/60 leading-relaxed">Rutas de becas, empleo y salud sugeridas segun perfil ciudadano.</p>
          </div>
        </div>
      </div>

      <button className="mt-8 w-full py-3.5 px-4 bg-accent/10 border border-accent/40 hover:bg-accent/20 hover:border-accent text-foreground rounded-full font-bold tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
        Mi vida digital
      </button>
    </GlassCard>
  );
}
