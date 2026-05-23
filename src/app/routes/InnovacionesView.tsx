import InnovationCard from "../components/cards/InnovationCard";
import { innovationsData } from "../data/innovationsData";
import { useAnimeOnView } from "../hooks/useAnimeOnView";

export default function InnovacionesView() {
  const viewRef = useAnimeOnView<HTMLElement>();

  return (
    <section ref={viewRef} className="relative min-h-screen pt-24 pb-14 flex items-center">
      <div className="absolute inset-0 bg-neoblue/28 border-y border-glass-border pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12),rgba(2,6,23,0)_58%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="mb-10 md:mb-14 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-wide text-foreground">Innovaciones institucionales</h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-foreground/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Cinco sistemas diseñados para resolver fallas históricas y proyectar un Estado eficiente, transparente y conectado con su ciudadanía.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
          {innovationsData.map((innovation) => (
            <InnovationCard key={innovation.id} innovation={innovation} />
          ))}
        </div>
      </div>
    </section>
  );
}
