"use client";

import { stats } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import StatCounter from "./StatCounter";

interface StatText {
  label: string;
}

export default function Stats() {
  const { t } = useLanguage();
  const items: StatText[] = t("stats.items");

  return (
    <section className="bg-primary py-14">
      <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <StatCounter key={stat.icon} {...stat} label={items[index]?.label ?? ""} />
        ))}
      </div>
    </section>
  );
}
