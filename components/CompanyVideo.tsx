"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { companyVideo } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function CompanyVideo() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const title = t("companyVideo.title");

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="section-padding bg-section">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">{t("companyVideo.eyebrow")}</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">
            {t("companyVideo.heading")}
          </h2>
        </div>

        <div className="mt-10 max-w-4xl mx-auto">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t("companyVideo.playAria")}
            className="group relative block w-full aspect-video rounded-lg overflow-hidden shadow-card"
          >
            <Image
              src={companyVideo.thumbnail}
              alt={title}
              fill
              sizes="(max-width: 1024px) 90vw, 900px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors duration-200 group-hover:bg-black/50" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/90 transition-transform duration-200 group-hover:scale-105">
                <Play className="text-primary ml-1" size={30} fill="currentColor" />
              </span>
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("companyVideo.closeAria")}
              className="absolute -top-12 right-0 text-white hover:text-accent"
            >
              <X size={28} />
            </button>
            <iframe
              src={companyVideo.videoUrl}
              title={title}
              className="h-full w-full rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
