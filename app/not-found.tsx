"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />

        <div className="stars">
          {Array.from({ length: 35 }).map((_, i) => (
            <span
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${3 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <section className="relative z-10 max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-xl">
        <h1 className="animate-float bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-8xl font-black text-transparent md:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-white">Page Not Found</h2>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-300">
          Oops! The page you are looking for doesn't exist, has been moved, or
          the URL is incorrect.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500"
          >
            <Home size={20} />
            Back Home
          </Link>

          <button
            onClick={() => history.back()}
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </section>
    </main>
  );
}
