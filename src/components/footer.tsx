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
    <footer className="bg-white border-t border-[rgba(232,34,10,0.08)] px-6 py-10">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {/* Logo */}
        <a href="#">
          <div className="bg-white rounded-md px-2.5 py-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="H Mango" className="h-6 w-auto" />
          </div>
        </a>

        {/* Links */}
        <nav className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-wider uppercase text-[#0A1628]/40 transition-colors hover:text-[#0A1628]/70"
            >
              {t(translations.nav[link.key], lang)}
            </a>
          ))}
        </nav>

        <p className="text-xs text-[#0A1628]/30">
          &copy; {new Date().getFullYear()} H Mango Lda
        </p>
      </div>
    </footer>
  );
}
