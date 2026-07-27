"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

interface ProductText {
  title: string;
  description: string;
}

export default function OurProducts() {
  const { t } = useLanguage();
  const items: ProductText[] = t("ourProducts.items");

  return (
    <section id="products" className="section-padding bg-section">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="eyebrow">{t("ourProducts.eyebrow")}</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">
              {t("ourProducts.heading")}
            </h2>
          </div>
          <p className="max-w-md text-sm text-body/80 leading-relaxed">
            {t("ourProducts.subheading")}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const text = items[index];
            return (
              <div
                key={product.image}
                className="group rounded-lg bg-white border border-borderc shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={product.image}
                    alt={text?.title ?? ""}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 380px"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-primary">
                    {text?.title}
                  </h3>
                  <p className="mt-2 text-sm text-body/80 leading-relaxed flex-1">
                    {text?.description}
                  </p>
                  <Link
                    href={product.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary"
                  >
                    {t("ourProducts.learnMore")}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
