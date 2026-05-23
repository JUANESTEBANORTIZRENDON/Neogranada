import type { HTMLAttributes, ReactNode } from "react";
import { useRef } from "react";
import { animate } from "animejs";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hover?: boolean;
};

export default function GlassCard({ children, className = "", hover = false, onMouseEnter, onMouseLeave, onFocus, onBlur, ...props }: GlassCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const animateIn = () => {
    if (!hover || !ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    animate(ref.current, { scale: [1, 1.015], duration: 320, ease: "outQuad" });
  };

  const animateOut = () => {
    if (!hover || !ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    animate(ref.current, { scale: 1, duration: 260, ease: "outQuad" });
  };

  return (
    <div
      ref={ref}
      className={`anime-card bg-glass backdrop-blur-xl border border-glass-border rounded-2xl shadow-xl transition-colors duration-300 ${
        hover ? "hover:bg-glass/80 hover:border-accent/40 hover:shadow-[0_0_28px_rgba(6,182,212,0.16)]" : ""
      } ${className}`}
      onMouseEnter={(event) => {
        animateIn();
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        animateOut();
        onMouseLeave?.(event);
      }}
      onFocus={(event) => {
        animateIn();
        onFocus?.(event);
      }}
      onBlur={(event) => {
        animateOut();
        onBlur?.(event);
      }}
      {...props}
    >
      {children}
    </div>
  );
}
