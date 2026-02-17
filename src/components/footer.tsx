"use client";

import { useLang } from "@/lib/language-context";
import { translations, t } from "@/lib/translations";

const FOOTER_LINKS = [
  { key: "about" as const, href: "#about" },
  { key: "services" as const, href: "#services" },
  { key: "sectors" as const, href: "#sectors" },
  { key: "contact" as const, href: "#contact" },
];

export function Footer() {
  const { lang } = useLang();

  return (
    <footer className="bg-[#080E1A] border-t border-[rgba(201,162,39,0.08)] px-6 py-10">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded text-[#C9A227] font-bold text-xs border border-[rgba(201,162,39,0.3)]">
            HM
          </span>
          <span className="text-sm font-semibold tracking-widest text-white uppercase">
            Happy Mango
          </span>
        </div>

        {/* Links */}
        <nav className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-wider uppercase text-white/30 transition-colors hover:text-white/70"
            >
              {t(translations.nav[link.key], lang)}
            </a>
          ))}
        </nav>

        <p className="text-xs text-white/20">
          &copy; {new Date().getFullYear()} H Mango Lda
        </p>
      </div>
    </footer>
  );
}
