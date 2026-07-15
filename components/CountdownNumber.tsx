"use client";

import { useEffect, useRef, useState } from "react";

export default function CountdownNumber({
  target,
  from = 30,
  durationMs = 1500,
  className,
}: {
  /** Valore finale a cui si ferma l'animazione (es. availableSlotsThisMonth). */
  target: number;
  /** Valore di partenza del conto alla rovescia visivo. */
  from?: number;
  durationMs?: number;
  className?: string;
}) {
  const [value, setValue] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || from <= target) {
      setValue(target);
      return;
    }

    let frameId = 0;

    function runAnimation() {
      cancelAnimationFrame(frameId);
      setValue(from);
      const start = performance.now();
      function tick(now: number) {
        const progress = Math.min((now - start) / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out
        const current = Math.round(from - (from - target) * eased);
        setValue(current);
        if (progress < 1) frameId = requestAnimationFrame(tick);
      }
      frameId = requestAnimationFrame(tick);
    }

    // Rianima ogni volta che il numero rientra nel viewport (es. utente
    // torna a scrollare sulla sezione), non solo alla prima visualizzazione.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) runAnimation();
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [from, target, durationMs]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
