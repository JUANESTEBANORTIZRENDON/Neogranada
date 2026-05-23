import { BadgeCheck, Bell, IdCard, Shield } from "lucide-react";
import GlassCard from "../components/cards/GlassCard";
import { useAnimeOnView } from "../hooks/useAnimeOnView";

export default function MiCuentaView() {
  const viewRef = useAnimeOnView<HTMLElement>();

  return (
    <section ref={viewRef} className="relative min-h-screen pt-24 pb-14 flex items-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-wide text-foreground">Mi cuenta ciudadana</h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-foreground/78 max-w-2xl mx-auto">
            Panel simulado para representar identidad digital, notificaciones del Estado y acceso a servicios ciudadanos.
          </p>
        </div>

        <GlassCard className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 items-stretch">
            <div className="rounded-2xl border border-glass-border bg-primary/40 p-6 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-5">
                  <IdCard className="w-8 h-8 text-accent" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground uppercase">Ciudadano verificado</h2>
                <p className="text-sm text-foreground/65 mt-2">Identidad digital activa en la República de Neogranada.</p>
              </div>
              <div className="mt-6 inline-flex w-fit items-center gap-2 text-green-300 text-sm font-bold bg-green-400/10 border border-green-400/20 rounded-full px-3 py-1.5">
                <BadgeCheck className="w-4 h-4" aria-hidden="true" /> Perfil habilitado
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Vida digital", text: "Historia integral y servicios personalizados.", icon: Shield },
                { title: "Alertas estatales", text: "Recordatorios de becas, salud y contribución social.", icon: Bell },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-xl border border-glass-border bg-primary/35 p-5">
                    <Icon className="w-7 h-7 text-accent mb-4" aria-hidden="true" />
                    <h3 className="text-lg font-heading font-bold text-foreground uppercase">{item.title}</h3>
                    <p className="text-sm text-foreground/65 mt-2 leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
              <button className="sm:col-span-2 mt-2 w-full py-3.5 px-4 bg-accent/10 border border-accent/40 hover:bg-accent/20 hover:border-accent text-foreground rounded-full font-bold tracking-wider uppercase transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                Acceder a servicios ciudadanos
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
