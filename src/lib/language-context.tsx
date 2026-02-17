"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Lang } from "./translations";

type LanguageContextType = {
  lang: Lang;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "pt",
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  const toggleLang = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
