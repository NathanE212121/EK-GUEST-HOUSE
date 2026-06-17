import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1800) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return { val, ref };
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const { val, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-6xl md:text-7xl font-light text-gradient-gold leading-none">
        {val.toLocaleString()}{suffix}
      </div>
      <div className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative py-24 px-6 border-y border-border/40 bg-card/40">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        <Stat value={4200} suffix="+" label="Happy Guests" />
        <Stat value={8} suffix=" yrs" label="Hosting Since 2018" />
        <Stat value={24} suffix="/7" label="Reception" />
        <Stat value={98} suffix="%" label="Return Rate" />
      </div>
    </section>
  );
}
