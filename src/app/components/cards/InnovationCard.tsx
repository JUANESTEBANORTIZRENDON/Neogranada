import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { animate } from "animejs";
import { CheckCircle2, ChevronRight, X } from "lucide-react";
import type { Innovation } from "../../data/innovationsData";
import GlassCard from "./GlassCard";

type InnovationCardProps = {
  innovation: Innovation;
};

export default function InnovationCard({ innovation }: InnovationCardProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const Icon = innovation.icon;

  useEffect(() => {
    if (!open || !contentRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    animate(contentRef.current, {
      opacity: [0, 1],
      scale: [0.96, 1],
      translateY: ["18px", "0px"],
      duration: 420,
      ease: "outExpo",
    });
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button type="button" className="h-full w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-accent/70 rounded-2xl">
          <GlassCard hover className="p-6 sm:p-8 h-full flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/10 to-transparent opacity-70 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-background/55 border border-glass-border flex items-center justify-center text-accent shadow-inner">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <span className="text-4xl font-heading font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">0{innovation.id}</span>
              </div>

              <h3 className="text-xl font-heading font-bold mb-3 text-foreground leading-tight">{innovation.title}</h3>
              {innovation.acronym && <span className="inline-block bg-secondary/30 text-secondary-foreground text-xs font-bold px-2 py-1 rounded mb-4">{innovation.acronym}</span>}
              <p className="text-foreground/70 text-sm mb-6 leading-relaxed">{innovation.shortDesc}</p>
            </div>

            <span className="inline-flex w-fit items-center justify-center text-accent text-sm font-semibold tracking-wide group-hover:translate-x-1 transition-transform relative z-10 uppercase">
              Descubre más <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </span>
          </GlassCard>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          ref={contentRef}
          className="fixed left-1/2 top-1/2 z-50 grid w-[calc(100vw-2rem)] max-w-2xl max-h-[calc(100vh-2rem)] overflow-y-auto translate-x-[-50%] translate-y-[-50%] gap-4 border border-glass-border bg-primary/95 backdrop-blur-2xl p-5 sm:p-8 shadow-2xl shadow-black rounded-2xl outline-none"
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-start justify-between gap-4">
              <div className="w-14 h-14 rounded-2xl bg-background border border-glass-border flex items-center justify-center text-accent shadow-inner shrink-0">
                <Icon className="w-7 h-7" aria-hidden="true" />
              </div>
              <Dialog.Close className="rounded-full p-2 bg-foreground/5 hover:bg-foreground/10 transition-colors border border-glass-border text-foreground/70 hover:text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent/70">
                <X className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">Cerrar</span>
              </Dialog.Close>
            </div>

            <div>
              <Dialog.Title className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-2">{innovation.title}</Dialog.Title>
              {innovation.acronym && <div className="text-accent font-medium mb-4">{innovation.acronym}</div>}
              <Dialog.Description className="text-foreground/80 leading-relaxed text-sm sm:text-base">{innovation.longDesc}</Dialog.Description>
            </div>

            <div className="mt-2 bg-background/50 rounded-2xl p-5 border border-glass-border">
              <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Beneficios esperados</h4>
              <ul className="space-y-3">
                {innovation.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start text-sm text-foreground/90">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 shrink-0" aria-hidden="true" />
                    <span className="mt-0.5">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
