"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import LanguageDropdown from "./LanguageDropdown";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isSolid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-20">
        <Link
          href="#home"
          className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
            isSolid ? "text-primary" : "text-white"
          }`}
        >
          <Image
            src="/images/mplogopng.png"
            alt="Mansi Plastic Logo"
            width={60}
            height={40}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                isSolid ? "text-body" : "text-white"
              }`}
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LanguageDropdown variant={isSolid ? "onLight" : "onDark"} />
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? t("header.closeMenu") : t("header.openMenu")}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
            isSolid ? "text-primary" : "text-white"
          }`}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-borderc">
          <div className="container-page flex flex-col py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm font-medium text-body border-b border-borderc last:border-b-0"
              >
                {t(`nav.${link.key}`)}
              </Link>
            ))}
            <div className="mt-3">
              <LanguageDropdown variant="onLight" className="w-full [&>button]:w-full [&>button]:justify-between" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
