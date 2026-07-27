"use client";

import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLanguage, type LanguageCode } from "@/context/LanguageContext";

interface LanguageDropdownProps {
  /**
   * "onDark" for use over the transparent/hero header state (white text),
   * "onLight" for use over the solid white header state (dark text).
   */
  variant?: "onDark" | "onLight";
  className?: string;
}

export default function LanguageDropdown({
  variant = "onLight",
  className = "",
}: LanguageDropdownProps) {
  const { language, setLanguage, languages, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLLIElement | null>>([]);

  const current =
    languages.find((option) => option.code === language) ?? languages[0];

  // Close on outside click.
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // When opening, move focus to the currently selected option.
  useEffect(() => {
    if (open) {
      const selectedIndex = languages.findIndex(
        (option) => option.code === language
      );
      const index = selectedIndex >= 0 ? selectedIndex : 0;
      setActiveIndex(index);
      requestAnimationFrame(() => optionRefs.current[index]?.focus());
    }
  }, [open, language, languages]);

  const closeAndRefocusButton = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  const handleSelect = (code: LanguageCode) => {
    setLanguage(code);
    closeAndRefocusButton();
  };

  const handleButtonKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
      event.preventDefault();
      setOpen(true);
    }
  };

  const handleOptionKeyDown = (
    event: ReactKeyboardEvent<HTMLLIElement>,
    index: number
  ) => {
    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();
        const next = (index + 1) % languages.length;
        setActiveIndex(next);
        optionRefs.current[next]?.focus();
        break;
      }
      case "ArrowUp": {
        event.preventDefault();
        const prev = (index - 1 + languages.length) % languages.length;
        setActiveIndex(prev);
        optionRefs.current[prev]?.focus();
        break;
      }
      case "Home": {
        event.preventDefault();
        setActiveIndex(0);
        optionRefs.current[0]?.focus();
        break;
      }
      case "End": {
        event.preventDefault();
        const last = languages.length - 1;
        setActiveIndex(last);
        optionRefs.current[last]?.focus();
        break;
      }
      case "Enter":
      case " ":
        event.preventDefault();
        handleSelect(languages[index].code);
        break;
      case "Escape":
        event.preventDefault();
        closeAndRefocusButton();
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        break;
    }
  };

  const isOnDark = variant === "onDark";

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={handleButtonKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("header.languageLabel")}
        className={`flex items-center gap-1.5 rounded-md border px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
          isOnDark
            ? "border-white/40 text-white hover:bg-white/10"
            : "border-borderc text-body hover:border-primary"
        }`}
      >
        <Globe size={16} aria-hidden="true" />
        <span>{current.nativeLabel}</span>
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <ul
        role="listbox"
        aria-label={t("header.languageLabel")}
        aria-activedescendant={
          open ? `language-option-${languages[activeIndex]?.code}` : undefined
        }
        className={`absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md border border-borderc bg-white py-1.5 shadow-card-hover transition-all duration-200 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-1 scale-95 opacity-0"
        }`}
      >
        {languages.map((option, index) => {
          const selected = option.code === language;
          return (
            <li
              key={option.code}
              id={`language-option-${option.code}`}
              ref={(el) => {
                optionRefs.current[index] = el;
              }}
              role="option"
              aria-selected={selected}
              tabIndex={open ? 0 : -1}
              onClick={() => handleSelect(option.code)}
              onKeyDown={(event) => handleOptionKeyDown(event, index)}
              className={`flex cursor-pointer items-center justify-between gap-2 px-4 py-2 text-sm transition-colors duration-150 focus:outline-none focus-visible:bg-section ${
                selected
                  ? "bg-section font-semibold text-primary"
                  : "text-body hover:bg-section"
              }`}
            >
              <span>
                {option.nativeLabel}
                {option.nativeLabel !== option.label && (
                  <span className="ml-1.5 text-xs text-body/50">
                    {option.label}
                  </span>
                )}
              </span>
              {selected && (
                <Check size={15} className="text-primary" aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
