import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export function useAnimeOnView<T extends HTMLElement>(cardSelector = ".anime-card") {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = root.querySelectorAll(cardSelector);

    if (prefersReducedMotion) {
      root.style.opacity = "1";
      cards.forEach((card) => {
        if (card instanceof HTMLElement) card.style.opacity = "1";
      });
      return;
    }

    root.style.opacity = "0";
    cards.forEach((card) => {
      if (card instanceof HTMLElement) card.style.opacity = "0";
    });

    requestAnimationFrame(() => {
      animate(root, {
        opacity: [0, 1],
        translateY: ["20px", "0px"],
        duration: 700,
        ease: "outExpo",
      });

      if (cards.length > 0) {
        animate(cards, {
          opacity: [0, 1],
          translateY: ["24px", "0px"],
          delay: stagger(80),
          duration: 650,
          ease: "outExpo",
        });
      }
    });
  }, [cardSelector]);

  return ref;
}
