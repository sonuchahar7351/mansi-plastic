"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

const AUTOPLAY_MS = 6000;

interface TestimonialText {
  name: string;
  company: string;
  feedback: string;
}

export default function Testimonials() {
  const { t } = useLanguage();
  const items: TestimonialText[] = t("testimonials.items");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[current];
  const text = items[current];

  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">{t("testimonials.eyebrow")}</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">
            {t("testimonials.heading")}
          </h2>
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center">
          <Quote className="mx-auto text-accent" size={36} />
          <p
            key={current}
            className="mt-6 text-lg leading-relaxed text-body/90 animate-fadeIn"
          >
            {text?.feedback}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="relative h-16 w-16 rounded-full overflow-hidden border border-borderc">
              <Image
                src={testimonial.image}
                alt={text?.name ?? ""}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">
                {text?.name}
              </p>
              <p className="text-xs text-body/70">{text?.company}</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.image}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={t("testimonials.showFrom", {
                  name: items[index]?.name ?? "",
                })}
                aria-current={index === current}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === current ? "w-8 bg-primary" : "w-2.5 bg-borderc"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
