"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { FadeInUp } from "@/components/motion-wrapper";
import { useLang } from "@/lib/language-context";
import { translations, t } from "@/lib/translations";

export function Hero() {
  const { lang } = useLang();
  const heading = t(translations.hero.heading, lang).split("\n");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16 bg-white">
      {/* Gradient orbs — subtle, CSS only */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[#E8220A]/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[600px] rounded-full bg-[#E8220A]/[0.03] blur-[100px]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,34,10,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,34,10,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8220A]/30 to-transparent" />

      <div className="relative mx-auto max-w-4xl text-center">
        <FadeInUp>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8220A]">
            {t(translations.hero.tagline, lang)}
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#0A1628] sm:text-5xl lg:text-[64px]">
            {heading[0]}
            <br />
            <span className="text-[#0A1628]/70">{heading[1]}</span>
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[#0A1628]/50 sm:text-lg">
            {t(translations.hero.subheading, lang)}
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#0A1628] px-8 text-white font-semibold hover:bg-[#1A2840] text-sm tracking-wide"
            >
              <a href="#about">{t(translations.hero.discoverMore, lang)}</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[rgba(10,22,40,0.08)] text-[#0A1628]/60 hover:border-[rgba(10,22,40,0.12)] hover:text-[#0A1628] bg-transparent text-sm tracking-wide"
            >
              <a href="#contact">{t(translations.hero.contactUs, lang)}</a>
            </Button>
          </div>
        </FadeInUp>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#0A1628]/30 transition-colors hover:text-[#E8220A] animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="size-4" />
      </a>
    </section>
  );
}
