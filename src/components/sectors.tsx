"use client";

import { FadeInUp, StaggerChildren, StaggerItem } from "@/components/motion-wrapper";
import {
  Factory,
  ShoppingBag,
  Building2,
  Truck,
  Landmark,
  Cpu,
  Stethoscope,
  Leaf,
} from "lucide-react";
import { useLang } from "@/lib/language-context";
import { translations, t } from "@/lib/translations";
import type { LucideIcon } from "lucide-react";

export function Sectors() {
  const { lang } = useLang();

  const sectors: { icon: LucideIcon; label: string }[] = [
    { icon: Factory, label: t(translations.sectors.manufacturing, lang) },
    { icon: ShoppingBag, label: t(translations.sectors.retailFashion, lang) },
    { icon: Building2, label: t(translations.sectors.realEstate, lang) },
    { icon: Truck, label: t(translations.sectors.logistics, lang) },
    { icon: Landmark, label: t(translations.sectors.financial, lang) },
    { icon: Cpu, label: t(translations.sectors.technology, lang) },
    { icon: Stethoscope, label: t(translations.sectors.healthcare, lang) },
    { icon: Leaf, label: t(translations.sectors.sustainability, lang) },
  ];

  return (
    <section id="sectors" className="bg-[#0D1525] py-24 px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeInUp>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E8220A]">
              {t(translations.sectors.label, lang)}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t(translations.sectors.heading, lang)}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/40">
              {t(translations.sectors.subheading, lang)}
            </p>
          </div>
        </FadeInUp>

        <StaggerChildren className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {sectors.map((sector) => (
            <StaggerItem key={sector.label}>
              <div className="group flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-[#111C2E] p-6 text-center transition-all hover:border-[rgba(232,34,10,0.2)] hover:bg-[#17253A]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(232,34,10,0.08)] transition-colors group-hover:bg-[rgba(232,34,10,0.15)]">
                  <sector.icon className="size-5 text-[#E8220A]" />
                </div>
                <p className="text-xs font-medium tracking-wide text-white/50 group-hover:text-white/80 transition-colors">
                  {sector.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
