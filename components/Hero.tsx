"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/data";

const SLIDE_DURATION = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [key, setKey] = useState(0); // forces Ken Burns animation restart
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number) => {
    const next = (index + heroSlides.length) % heroSlides.length;
    setCurrent(next);
    setKey((k) => k + 1);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      goTo(current + 1);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[560px] w-full overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Featured products"
    >
      {heroSlides.map((slide, index) => (
        <div
          key={slide.heading}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={index !== current}
        >
          <div
            key={index === current ? key : undefined}
            className={`absolute inset-0 ${
              index === current ? "animate-kenburns" : ""
            }`}
            style={{ animationDuration: `${SLIDE_DURATION + 1500}ms` }}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative z-20 flex h-full items-center">
        <div className="container-page">
          <div key={current} className="max-w-2xl animate-fadeUp">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              {heroSlides[current].heading}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/90 max-w-xl">
              {heroSlides[current].description}
            </p>
            <Link
              href={heroSlides[current].ctaHref}
              className="mt-8 inline-flex items-center rounded-md bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-dark"
            >
              {heroSlides[current].ctaLabel}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 md:right-10 z-20 flex items-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="absolute bottom-8 left-6 md:left-10 z-20 flex items-center gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.heading}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-accent" : "w-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
