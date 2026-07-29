"use client";

import { useState } from "react";
import Image from "next/image";
import { aboutTabs } from "@/lib/data";

export default function ProductsLaunched() {
  const [activeId, setActiveId] = useState(aboutTabs[0].id);
  const active = aboutTabs.find((tab) => tab.id === activeId) ?? aboutTabs[0];

  return (
    <section className="section-padding bg-section">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Manufacturer &amp; Supplier of Wide Range Plastics Packaging
            Products
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Product information tabs"
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {aboutTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={tab.id === activeId}
              onClick={() => setActiveId(tab.id)}
              className={`rounded-md px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                tab.id === activeId
                  ? "bg-accent text-white"
                  : "bg-white text-body border border-borderc hover:border-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          key={active.id}
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center animate-fadeIn"
        >
          <div>
            <h3 className="text-2xl font-bold text-primary">
              {active.heading}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-body/90">
              {active.body}
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-card">
            <Image
              src={active.image}
              alt={active.heading}
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
