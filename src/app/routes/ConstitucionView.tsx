import { BookOpenText, FileText } from "lucide-react";
import GlassCard from "../components/cards/GlassCard";
import SubmoduleBackButton from "../components/layout/SubmoduleBackButton";
import { constitutionalArticles, constitutionPreamble } from "../data/constitutionData";
import { useAnimeOnView } from "../hooks/useAnimeOnView";

export default function ConstitucionView() {
  const viewRef = useAnimeOnView<HTMLElement>();

  return (
    <section ref={viewRef} className="relative min-h-screen pt-24 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SubmoduleBackButton to="/estado" label="Volver al Estado" context="Submódulo estatal" />

        <div className="mb-10 md:mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm font-bold uppercase tracking-[0.22em] mb-4">
            <BookOpenText className="w-4 h-4" aria-hidden="true" />
            Constitución base
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-wide text-foreground">Artículos constitucionales iniciales</h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Documento inicial de la República de Neogranada: identidad cultural, legitimidad democrática, soberanía digital y derechos fundamentales.
          </p>
        </div>

        <GlassCard className="p-6 sm:p-8 mb-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-accent" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground uppercase tracking-wide">7.1 Preámbulo</h2>
              <p className="text-sm text-foreground/55 mt-1">Fundamento cultural, ético y político del Estado.</p>
            </div>
          </div>
          <div className="space-y-4 text-sm md:text-base text-foreground/80 leading-relaxed">
            {constitutionPreamble.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </GlassCard>

        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-5 uppercase tracking-wide">7.2 Artículos principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {constitutionalArticles.map((article, index) => (
              <GlassCard hover key={article} className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/50 border border-glass-border flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-accent text-lg">{index + 1}</span>
                  </div>
                  <p className="text-sm text-foreground/82 leading-relaxed">
                    <span className="font-bold text-foreground">Artículo {index + 1}. </span>
                    {article}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
