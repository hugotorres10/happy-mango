"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/language-context";
import { translations, t } from "@/lib/translations";

const NAV_LINKS = [
  { key: "about" as const, href: "#about" },
  { key: "services" as const, href: "#services" },
  { key: "sectors" as const, href: "#sectors" },
  { key: "contact" as const, href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[rgba(232,34,10,0.08)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <div className="bg-white rounded-md px-3 py-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="H Mango" className="h-7 w-auto" />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-xs font-medium tracking-wider uppercase text-[#0A1628]/50 transition-colors hover:text-[#0A1628]"
            >
              {t(translations.nav[link.key], lang)}
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="ml-4 flex items-center gap-1 rounded px-3 py-1.5 text-xs font-semibold border border-[rgba(10,22,40,0.08)] hover:border-[rgba(232,34,10,0.3)] transition-colors"
          >
            <span className={cn("transition-colors", lang === "en" ? "text-[#E8220A]" : "text-[#0A1628]/40")}>EN</span>
            <span className="text-[#0A1628]/30 text-[10px]">/</span>
            <span className={cn("transition-colors", lang === "pt" ? "text-[#E8220A]" : "text-[#0A1628]/40")}>PT</span>
          </button>

          <Button
            asChild
            size="sm"
            className="ml-4 bg-[#E8220A] text-[#080E1A] font-semibold hover:bg-[#F03A1A] text-xs tracking-wider uppercase"
          >
            <a href="#contact">{t(translations.nav.getInTouch, lang)}</a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-[#0A1628]/60 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-[rgba(10,22,40,0.05)] bg-white/98 backdrop-blur-md px-6 pb-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-xs font-medium tracking-wider uppercase text-[#0A1628]/50 transition-colors hover:text-[#0A1628] border-b border-[rgba(10,22,40,0.05)] last:border-0"
            >
              {t(translations.nav[link.key], lang)}
            </a>
          ))}

          {/* Mobile Language Toggle */}
          <button
            onClick={toggleLang}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded border border-[rgba(10,22,40,0.08)] py-2 text-xs font-semibold transition-colors hover:border-[rgba(232,34,10,0.3)]"
          >
            <span className={cn("transition-colors", lang === "en" ? "text-[#E8220A]" : "text-[#0A1628]/40")}>EN</span>
            <span className="text-[#0A1628]/30">/</span>
            <span className={cn("transition-colors", lang === "pt" ? "text-[#E8220A]" : "text-[#0A1628]/40")}>PT</span>
          </button>

          <Button
            asChild
            size="sm"
            className="mt-4 w-full bg-[#E8220A] text-[#080E1A] font-semibold hover:bg-[#F03A1A] text-xs tracking-wider uppercase"
          >
            <a href="#contact" onClick={() => setMobileOpen(false)}>
              {t(translations.nav.getInTouch, lang)}
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
