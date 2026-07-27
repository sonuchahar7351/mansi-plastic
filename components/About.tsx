"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { aboutImage } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const highlights: string[] = t("about.highlights");

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-card">
            <Image
              src={aboutImage}
              alt={t("about.imageAlt")}
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow">{t("about.eyebrow")}</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">
            {t("about.heading")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-body/90">
            {t("about.body")}
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-accent shrink-0" size={22} />
                <span className="text-sm font-medium text-body">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
