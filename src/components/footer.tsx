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
    <footer className="bg-[#080E1A] border-t border-white/5 px-6 py-10">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {/* Logo */}
        <a href="#">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="H Mango" className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity" />
        </a>

        {/* Links */}
        <nav className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-wider uppercase text-white/30 transition-colors hover:text-white/60"
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
