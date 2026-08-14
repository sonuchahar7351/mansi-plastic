"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { usePathname } from "next/navigation";
import { useEnquiryModal } from "@/context/EnquiryForm";
import Image from "next/image";

export default function Header({ isVisible = true }: { isVisible?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  const { openModal } = useEnquiryModal();

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const pathname = usePathname();

  const isSolid = scrolled || mobileOpen || isVisible;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-20">
        <Link href="/" className={``}>
          Sonu plastic
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.href} className="flex flex-col gap-1 group">
              <Link
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-accent ${
                  isSolid ? "text-body" : "text-white"
                }`}
              >
                {link.label}
              </Link>
              <span
                className={`h-[2px] bg-accent transition-all duration-300 ${
                  isSolid ? "bg-accent" : "bg-white"
                } ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-secondary"
            onClick={() => openModal()}
          >
            Enquire Now
          </button>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => openModal()}
              className="mt-3 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-secondary"
            >
              Enquire Now
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
