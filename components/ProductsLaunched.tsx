"use client";

import { useState } from "react";
import Image from "next/image";
import { aboutTabs } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

interface TabText {
  label: string;
  heading: string;
  body: string;
}

export default function ProductsLaunched() {
  const { t } = useLanguage();
  const tabText: TabText[] = t("productsLaunched.tabs");

  const [activeIndex, setActiveIndex] = useState(0);
  const activeMeta = aboutTabs[activeIndex] ?? aboutTabs[0];
  const activeText = tabText[activeIndex] ?? tabText[0];

  return (
    <section className="section-padding bg-section">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            {t("productsLaunched.heading")}
          </h2>
        </div>

        <div
          role="tablist"
          aria-label={t("productsLaunched.tabsAriaLabel")}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {aboutTabs.map((tab, index) => (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`rounded-md px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                index === activeIndex
                  ? "bg-accent text-white"
                  : "bg-white text-body border border-borderc hover:border-primary"
              }`}
            >
              {tabText[index]?.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          key={activeMeta.id}
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center animate-fadeIn"
        >
          <div>
            <h3 className="text-2xl font-bold text-primary">
              {activeText?.heading}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-body/90">
              {activeText?.body}
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-card">
            <Image
              src={activeMeta.image}
              alt={activeText?.heading ?? ""}
              fill
              sizes="(max-width: 1024px) 90vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
