"use client";

import Image from "next/image";
import { launchedProducts } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

interface LaunchedProductText {
  name: string;
  description: string;
}

export default function LaunchedProducts() {
  const { t } = useLanguage();
  const items: LaunchedProductText[] = t("launchedProducts.items");

  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">{t("launchedProducts.eyebrow")}</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">
            {t("launchedProducts.heading")}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {launchedProducts.map((product, index) => {
            const text = items[index];
            return (
              <div
                key={product.image}
                className="group rounded-lg border border-borderc bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover overflow-hidden"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={product.image}
                    alt={text?.name ?? ""}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 380px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary">
                    {text?.name}
                  </h3>
                  <p className="mt-2 text-sm text-body/80 leading-relaxed">
                    {text?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
