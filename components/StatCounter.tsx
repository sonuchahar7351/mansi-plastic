"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Users, Handshake, Target } from "lucide-react";
import { StatMeta } from "@/types";

const icons = {
  years: Award,
  team: Users,
  clients: Handshake,
  targets: Target,
};

interface StatCounterProps extends StatMeta {
  label: string;
}

export default function StatCounter({
  icon,
  value,
  suffix,
  label,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = icons[icon];

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 1500;
            const start = performance.now();

            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              setCount(Math.round(progress * value));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-2">
      <Icon className="text-white" size={32} strokeWidth={1.75} />
      <span className="text-3xl md:text-4xl font-bold text-white">
        {count}
        {suffix}
      </span>
      <span className="text-sm text-white/90">{label}</span>
    </div>
  );
}
