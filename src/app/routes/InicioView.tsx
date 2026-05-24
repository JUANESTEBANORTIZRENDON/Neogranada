import { useState } from "react";
import { Link } from "react-router";
import { ChevronRight, Flag, Map, Maximize2, ShieldCheck, Sparkles, X } from "lucide-react";
import GlassCard from "../components/cards/GlassCard";
import { useAnimeOnView } from "../hooks/useAnimeOnView";
import escudoPreview from "../../imports/optimized/home-shield-preview.jpg";
import banderaPreview from "../../imports/optimized/home-flag-preview.jpg";
import mapaPreview from "../../imports/optimized/home-map-preview.jpg";

type ExpandedImage = {
  src: string;
  alt: string;
};

export default function InicioView() {
  const viewRef = useAnimeOnView<HTMLElement>();
  const [expandedImage, setExpandedImage] = useState<ExpandedImage | null>(null);

  const openFullImage = async (loader: () => Promise<{ default: string }>, alt: string) => {
    const image = await loader();
    setExpandedImage({ src: image.default, alt });
  };

  return (
    <section ref={viewRef} className="relative min-h-screen pt-24 pb-14 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(128,0,32,0.22),rgba(11,25,44,0.14)_45%,rgba(212,175,55,0.08))] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm font-bold uppercase tracking-[0.22em] mb-5">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              Portal institucional digital
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight uppercase bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent drop-shadow-sm">
              República de Neogranada
            </h1>
            <p className="text-lg md:text-2xl text-accent font-medium max-w-2xl mx-auto lg:mx-0 tracking-wide italic mt-4">
              “Poder con razón, justicia para el futuro.”
            </p>

            <p className="mt-7 text-foreground/82 leading-relaxed text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
              Una reinterpretación moderna de los proyectos estatales latinoamericanos: justicia social, participación democrática, identidad cultural y herramientas tecnológicas avanzadas al servicio del siglo XXI.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/estado"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary text-secondary-foreground px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-secondary/30 hover:shadow-secondary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                Conoce el Estado
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                to="/innovaciones"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-cyan-neon/35 bg-primary/30 hover:bg-primary/55 text-primary-foreground px-8 py-3.5 rounded-full font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-neon/70"
              >
                Ver innovaciones
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            <GlassCard hover className="p-4 sm:p-5 overflow-hidden md:col-span-2">
              <button
                type="button"
                onClick={() => openFullImage(() => import("../../imports/Maps.jpeg"), "Mapa territorial estratégico de Neogranada")}
                className="group relative block w-full aspect-[21/9] rounded-xl overflow-hidden border border-cyan-neon/35 shadow-[0_0_30px_rgba(6,182,212,0.24)] bg-background/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-neon/70"
                aria-label="Ampliar mapa territorial estratégico de Neogranada"
              >
                <img
                  src={mapaPreview}
                  alt="Mapa territorial estratégico de Neogranada"
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="eager"
                  decoding="async"
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-cyan-neon/35 bg-background/85 px-3 py-1.5 text-xs font-bold text-foreground shadow-lg">
                  <Maximize2 className="w-4 h-4 text-cyan-neon" aria-hidden="true" />
                  Clic para ampliar
                </span>
              </button>
              <div className="mt-4 flex items-start gap-3 text-sm text-foreground/70">
                <Map className="w-5 h-5 text-cyan-neon shrink-0" aria-hidden="true" />
                <span>Mapa territorial con capital, regiones estratégicas, zona económica exclusiva y rutas de conexión nacional. Haz clic en la imagen para verla más grande.</span>
              </div>
            </GlassCard>

            <GlassCard hover className="p-4 sm:p-5 overflow-hidden">
              <button
                type="button"
                onClick={() => openFullImage(() => import("../../imports/image-4.png"), "Bandera de Neogranada")}
                className="group relative block w-full aspect-[16/9] rounded-xl overflow-hidden border border-glass-border shadow-[0_0_20px_rgba(212,175,55,0.18)] bg-background/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                aria-label="Ampliar bandera de Neogranada"
              >
                <img
                  src={banderaPreview}
                  alt="Bandera de Neogranada"
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-background/85 px-3 py-1.5 text-xs font-bold text-foreground shadow-lg">
                  <Maximize2 className="w-4 h-4 text-accent" aria-hidden="true" />
                  Ampliar
                </span>
              </button>
              <div className="mt-4 flex items-start gap-3 text-sm text-foreground/70">
                <Flag className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                <span>Nueva Aurora como capital de una soberanía interna, externa y digital. Haz clic para aumentar el tamaño.</span>
              </div>
            </GlassCard>

            <GlassCard hover className="p-4 sm:p-5 overflow-hidden">
              <button
                type="button"
                onClick={() => openFullImage(() => import("../../imports/image-5.png"), "Escudo de Neogranada")}
                className="group relative block w-full aspect-[16/9] rounded-xl overflow-hidden border border-glass-border shadow-[0_0_26px_rgba(6,182,212,0.2)] bg-background/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-neon/70"
                aria-label="Ampliar escudo de Neogranada"
              >
                <img
                  src={escudoPreview}
                  alt="Escudo de Neogranada"
                  className="w-full h-full object-contain object-center p-3 transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-cyan-neon/35 bg-background/85 px-3 py-1.5 text-xs font-bold text-foreground shadow-lg">
                  <Maximize2 className="w-4 h-4 text-cyan-neon" aria-hidden="true" />
                  Ampliar
                </span>
              </button>
              <div className="mt-4 flex items-start gap-3 text-sm text-foreground/70">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                <span>Estado social, democrático y tecnológico de derecho. Haz clic para ver el escudo completo en grande.</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {expandedImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/92 backdrop-blur-md px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label={expandedImage.alt}
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setExpandedImage(null)}
              className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-neon/40 bg-primary/80 text-foreground hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-neon/70"
              aria-label="Cerrar imagen ampliada"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <img
              src={expandedImage.src}
              alt={expandedImage.alt}
              className="max-h-[82vh] w-full rounded-2xl border border-cyan-neon/35 bg-background/65 object-contain shadow-[0_0_44px_rgba(34,211,238,0.22)]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
