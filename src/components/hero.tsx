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
    <section className="relative flex min-h-screen items-start justify-center overflow-hidden px-6 pt-28 pb-16 bg-[#080E1A]">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,162,39,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,34,10,0.07)_0%,transparent_60%)]" />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8220A]/50 to-transparent" />

      <div className="relative mx-auto max-w-4xl text-center">
        <FadeInUp>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8220A]">
            {t(translations.hero.tagline, lang)}
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[64px]">
            {heading[0]}
            <br />
            <span className="text-white/60">{heading[1]}</span>
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/40 sm:text-lg">
            {t(translations.hero.subheading, lang)}
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#E8220A] px-8 text-white font-semibold hover:bg-[#C01A06] text-sm tracking-wide border-0"
            >
              <a href="#about">{t(translations.hero.discoverMore, lang)}</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white/60 hover:border-white/40 hover:text-white bg-transparent text-sm tracking-wide"
            >
              <a href="#contact">{t(translations.hero.contactUs, lang)}</a>
            </Button>
          </div>
        </FadeInUp>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 transition-colors hover:text-[#E8220A] animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="size-4" />
      </a>
    </section>
  );
}
