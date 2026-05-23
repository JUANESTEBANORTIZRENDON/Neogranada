import { useEffect, useRef } from "react";
import { animate } from "animejs";
import CitizenControlPanel from "../components/dashboard/CitizenControlPanel";
import DigitalLifePanel from "../components/dashboard/DigitalLifePanel";
import SocialContributionPanel from "../components/dashboard/SocialContributionPanel";
import { useAnimeOnView } from "../hooks/useAnimeOnView";

export default function ParticipacionView() {
  const viewRef = useAnimeOnView<HTMLElement>();
  const dashboardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dashboard = dashboardRef.current;
    if (!dashboard) return;

    const bars = dashboard.querySelectorAll<HTMLElement>(".progress-bar");
    bars.forEach((bar) => {
      bar.style.width = "0%";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        bars.forEach((bar) => {
          const progress = bar.dataset.progress ?? "0%";
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            bar.style.width = progress;
            return;
          }
          animate(bar, {
            width: ["0%", progress],
            duration: 1200,
            ease: "outExpo",
          });
        });
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(dashboard);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={viewRef} className="relative min-h-screen pt-24 pb-14 flex items-center overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-10 md:mb-14 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground uppercase tracking-wide">Centro de Decisiones y Participación</h1>
            <p className="text-foreground/65 mt-2 max-w-2xl">Panel educativo para explorar control ciudadano, vida digital y contribución social.</p>
          </div>
          <div className="flex items-center gap-4 bg-glass border border-glass-border px-6 py-3 rounded-full">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
              Sistemas en línea
            </div>
          </div>
        </div>

        <div ref={dashboardRef} className="flex flex-col xl:flex-row gap-6 justify-center items-stretch relative z-10">
          <CitizenControlPanel />
          <DigitalLifePanel />
          <SocialContributionPanel />
        </div>
      </div>
    </section>
  );
}
