"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import en from "@/locales/en.json";
import bn from "@/locales/bn.json";
import gu from "@/locales/gu.json";
import hi from "@/locales/hi.json";
import mr from "@/locales/mr.json";
import pa from "@/locales/pa.json";
import es from "@/locales/es.json";
import ta from "@/locales/ta.json";
import te from "@/locales/te.json";

export type LanguageCode =
  | "en"
  | "bn"
  | "gu"
  | "hi"
  | "mr"
  | "pa"
  | "es"
  | "ta"
  | "te"

export interface LanguageOption {
  code: LanguageCode;
  /** English name of the language, used as a fallback / secondary label. */
  label: string;
  /** Name of the language written in itself, shown as the primary label. */
  nativeLabel: string;
}

// Adding a new language only requires: 1) a new JSON file in /locales,
// 2) importing it above, 3) adding it to `dictionaries`, and
// 4) adding an entry to this list.
export const languages: LanguageOption[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "bn", label: "Bengali", nativeLabel: "বাংলা" },
  { code: "gu", label: "Gujarati", nativeLabel: "ગુજરાતી" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी" },
  { code: "mr", label: "Marathi", nativeLabel: "मराठी" },
  { code: "pa", label: "Punjabi", nativeLabel: "ਪੰਜਾਬੀ" },
  { code: "es", label: "Spanish", nativeLabel: "Español" },
  { code: "ta", label: "Tamil", nativeLabel: "தமிழ்" },
  { code: "te", label: "Telugu", nativeLabel: "తెలుగు" },
];

const dictionaries: Record<LanguageCode, Record<string, unknown>> = {
  en,
  bn,
  gu,
  hi,
  mr,
  pa,
  es,
  ta,
  te,
};

const STORAGE_KEY = "mansi-plastic-language";
const DEFAULT_LANGUAGE: LanguageCode = "en";

function isSupportedLanguage(value: string | null): value is LanguageCode {
  return !!value && Object.prototype.hasOwnProperty.call(dictionaries, value);
}

function getValueByPath(source: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as object)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, source);
}

interface LanguageContextValue {
  /** Currently active language code. */
  language: LanguageCode;
  /** Update the active language and persist it to localStorage. */
  setLanguage: (lang: LanguageCode) => void;
  /**
   * Look up a translation by dot path, e.g. t("nav.home").
   * Returns the raw value (string, array, or object) so it also works for
   * translated lists like t("hero.slides"). Supports {placeholder}
   * interpolation via the second argument.
   */
  t: (key: string, vars?: Record<string, string | number>) => any;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with the default language on the server and on first
  // client render so hydration matches. The saved preference (if any) is
  // applied right after mount.
  const [language, setLanguageState] = useState<LanguageCode>(
    DEFAULT_LANGUAGE
  );

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isSupportedLanguage(stored)) {
        setLanguageState(stored);
      }
    } catch {
      // localStorage may be unavailable (e.g. private browsing) — default stands.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore write failures; language still updates for this session.
    }
  }, []);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const dict = dictionaries[language] ?? dictionaries[DEFAULT_LANGUAGE];
      let value = getValueByPath(dict, key);

      if (value === undefined) {
        // Fall back to English so the UI never shows a raw key.
        value = getValueByPath(dictionaries[DEFAULT_LANGUAGE], key);
      }

      if (typeof value === "string" && vars) {
        return Object.entries(vars).reduce(
          (str, [varKey, varValue]) =>
            str.replace(new RegExp(`{${varKey}}`, "g"), String(varValue)),
          value
        );
      }

      return value !== undefined ? value : key;
    },
    [language]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t, languages }),
    [language, setLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

/** Alias matching common i18n hook naming — identical to useLanguage(). */
export const useTranslation = useLanguage;
