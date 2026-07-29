"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CustomCarousel({
  items = [],
  className = "",
  showArrows = true,
  showDots = true,
  showThumbnails = false,
  showCounter = false,
  autoPlay = false,
  autoPlayInterval = 5000,
  height = 0,
  aspectRatio = "16/9", // Default aspect ratio
}: {
  items: any[];
  className: string;
  showArrows: boolean;
  showDots: boolean;
  showThumbnails: boolean;
  showCounter: boolean;
  autoPlay: boolean;
  autoPlayInterval: number;
  height: number | string;
  aspectRatio: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || items.length <= 1 || isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, items.length, autoPlayInterval, isPlaying]);

  useEffect(() => {
    setIsPlaying(false);
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Determine container styles based on height and aspectRatio props
  const getContainerStyle = () => {
    if (height) {
      // If specific height is provided, use it
      const heightValue = typeof height === "number" ? `${height}px` : height;
      return {
        height: heightValue,
        aspectRatio: "unset",
      };
    } else {
      // Use aspect ratio
      return {
        aspectRatio: aspectRatio,
      };
    }
  };

  const getContainerClasses = () => {
    if (height) {
      return "relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800";
    } else {
      return `relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800`;
    }
  };

  if (!items.length) {
    return (
      <div
        className={`rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center ${
          height ? "" : "aspect-video"
        }`}
        style={height ? getContainerStyle() : undefined}
      >
        <p className="text-gray-500">No media available</p>
      </div>
    );
  }

  const currentItem: any = items[currentIndex];

  return (
    <div className={className}>
      {/* Main Carousel */}
      <div className={getContainerClasses()} style={getContainerStyle()}>
        <Image
          src={currentItem}
          alt={`Image ${currentIndex + 1}`}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          priority={currentIndex === 0}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, 80vw"
        />

        {/* Navigation Arrows */}
        {showArrows && items.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm transition-colors z-0"
            >
              <ChevronLeft className="w-5 h-5 text-gray-900" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm transition-colors z-0"
            >
              <ChevronRight className="w-5 h-5 text-gray-900" />
            </button>
          </>
        )}

        {/* Dots - Now inside the image */}
        {showDots && items.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 backdrop-blur-sm ${
                  currentIndex === index
                    ? "bg-white scale-110 shadow-lg"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Counter */}
        {showCounter && items.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium z-0">
            {currentIndex + 1} / {items.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {showThumbnails && items.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {items.map((item: any, index: number) => (
            <button
              key={item.id || index}
              onClick={() => goToSlide(index)}
              className={`relative shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-all ${
                currentIndex === index
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Image
                src={item}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="40px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
