import { Banknote, CheckCircle2, Coins, Landmark, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import GlassCard from "../components/cards/GlassCard";
import SubmoduleBackButton from "../components/layout/SubmoduleBackButton";
import { useAnimeOnView } from "../hooks/useAnimeOnView";
import billete10 from "../../imports/BILLETE 10.png";
import billete20 from "../../imports/BILLETE 20 .png";
import billete50 from "../../imports/BILLETE 50.png";
import billete100 from "../../imports/BILLETE 100.png";
import billete200 from "../../imports/BILLETE 200.png";
import billete500 from "../../imports/BLLETE 500.png";
import monedas from "../../imports/Monedas.png";

const bills = [
  {
    value: "10 SDG",
    image: billete10,
    theme: "Ciudadanía",
    description: "Billete de circulación básica para servicios cotidianos, educación local y participación ciudadana.",
  },
  {
    value: "20 SDG",
    image: billete20,
    theme: "Cultura",
    description: "Representa memoria cultural, vida regional y transmisión de saberes entre generaciones.",
  },
  {
    value: "50 SDG",
    image: billete50,
    theme: "Justicia",
    description: "Evoca equilibrio institucional, legalidad y protección de derechos fundamentales.",
  },
  {
    value: "100 SDG",
    image: billete100,
    theme: "Innovación",
    description: "Conecta ciencia, tecnología pública y soberanía digital al servicio de la ciudadanía.",
  },
  {
    value: "200 SDG",
    image: billete200,
    theme: "Desarrollo",
    description: "Refleja infraestructura, productividad regional y sostenibilidad económica.",
  },
  {
    value: "500 SDG",
    image: billete500,
    theme: "Soberanía",
    description: "Reserva simbólica de confianza estatal, estabilidad financiera y visión de futuro.",
  },
];

const coinSymbols = [
  "Los Soles son la unidad principal de intercambio y aparecen en piezas de 1, 2, 5 y 10 para pagos de mayor valor cotidiano.",
  "Las Centellas funcionan como fracción menor del sistema monetario, pensadas para pagos pequeños y ajustes precisos.",
  "La estrella superior simboliza orientación pública, unidad nacional y aspiración de futuro.",
  "Los laureles laterales representan mérito, paz institucional y reconocimiento al trabajo ciudadano.",
  "La flor inferior funciona como emblema de identidad territorial, fertilidad cultural y vínculo con la tierra neogranadina.",
  "Los acabados dorado, plateado y cobre distinguen jerarquías de valor y facilitan la lectura visual de cada moneda.",
];

const economyPillars = [
  {
    icon: ShieldCheck,
    title: "Confianza pública",
    text: "La moneda se sostiene en instituciones evaluables, datos verificables y decisiones económicas sometidas a control ciudadano.",
  },
  {
    icon: Landmark,
    title: "Economía social",
    text: "El Estado prioriza educación, salud, infraestructura digital y oportunidades regionales sin abandonar responsabilidad fiscal.",
  },
  {
    icon: Leaf,
    title: "Producción sostenible",
    text: "El crecimiento se orienta a tecnología, ambiente, cultura, ciencia aplicada y proyectos que mejoren bienestar colectivo.",
  },
];

export default function MonedaView() {
  const viewRef = useAnimeOnView<HTMLElement>();

  return (
    <section ref={viewRef} className="relative min-h-screen pt-24 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SubmoduleBackButton to="/estado" label="Volver al Estado" context="Submódulo estatal" />

        <div className="mb-10 md:mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm font-bold uppercase tracking-[0.22em] mb-4">
            <Coins className="w-4 h-4" aria-hidden="true" />
            Moneda nacional
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-wide text-foreground">Moneda y economía de Neogranada</h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            El sistema monetario neogranadino se presenta como una extensión de su identidad institucional: justicia, soberanía digital,
            participación ciudadana, memoria cultural e innovación productiva.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 mb-6">
          <GlassCard className="p-5 sm:p-7 overflow-hidden">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                <Banknote className="w-6 h-6 text-accent" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground uppercase tracking-wide">Sol Neogranadino</h2>
                <p className="text-sm text-foreground/55 mt-1">Moneda nacional representada en billetes y monedas.</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-5">
              La moneda de Neogranada se denomina Sol Neogranadino. En los billetes aparece como Sol de Granada y se identifica con la sigla SDG.
              Sus valores principales son 10, 20, 50, 100, 200 y 500 SDG, acompañados por monedas de Soles y Centellas para circulación cotidiana.
            </p>
            <img
              src={monedas}
              alt="Monedas de la República de Neogranada"
              className="w-full rounded-2xl border border-glass-border bg-background/35 object-cover shadow-[0_0_28px_rgba(6,182,212,0.12)]"
            />
          </GlassCard>

          <GlassCard className="p-6 sm:p-8 bg-glass-red border-glass-red-border">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-background/40 border border-glass-border flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-accent" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground uppercase tracking-wide">Simbolismo de las monedas</h2>
                <p className="text-sm text-foreground/55 mt-1">Símbolos visibles en las piezas del sistema.</p>
              </div>
            </div>
            <ul className="space-y-4">
              {coinSymbols.map((symbol) => (
                <li key={symbol} className="flex items-start gap-3 text-sm text-foreground/84 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{symbol}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-5 uppercase tracking-wide">Billetes y valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {bills.map((bill) => (
              <GlassCard hover key={bill.value} className="p-4 sm:p-5 group">
                <div className="relative overflow-hidden rounded-xl border border-glass-border bg-background/35 mb-4">
                  <img
                    src={bill.image}
                    alt={`Billete de ${bill.value} de Neogranada`}
                    className="w-full aspect-[16/9] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">{bill.value}</h3>
                    <p className="text-accent text-xs font-bold uppercase tracking-[0.18em] mt-1">{bill.theme}</p>
                  </div>
                  <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-bold text-accent">SDG</span>
                </div>
                <p className="text-sm text-foreground/72 leading-relaxed mt-4">{bill.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        <GlassCard className="p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground uppercase tracking-wide">Economía del Estado</h2>
            <p className="text-sm md:text-base text-foreground/76 leading-relaxed mt-3 max-w-4xl">
              Neogranada proyecta una economía mixta, social y tecnológica: protege la iniciativa productiva, pero orienta el desarrollo hacia
              educación, ciencia, servicios públicos modernos, soberanía digital y sostenibilidad ambiental. La moneda funciona como símbolo de
              confianza: no solo representa valor de intercambio, también expresa responsabilidad pública y estabilidad institucional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {economyPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="rounded-xl border border-glass-border bg-primary/35 p-5">
                  <Icon className="w-7 h-7 text-accent mb-4" aria-hidden="true" />
                  <h3 className="text-lg font-heading font-bold text-foreground uppercase">{pillar.title}</h3>
                  <p className="text-sm text-foreground/72 leading-relaxed mt-3">{pillar.text}</p>
                </div>
              );
            })}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
