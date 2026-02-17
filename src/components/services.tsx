"use client";

import {
  Shirt,
  Footprints,
  Monitor,
  GraduationCap,
  Package,
} from "lucide-react";
import { StaggerChildren, StaggerItem, FadeInUp } from "@/components/motion-wrapper";
import { useLang } from "@/lib/language-context";
import { translations, t } from "@/lib/translations";

export function Services() {
  const { lang } = useLang();

  const services = [
    {
      icon: Shirt,
      number: "01",
      title: t(translations.services.textileTitle, lang),
      description: t(translations.services.textileDesc, lang),
    },
    {
      icon: Footprints,
      number: "02",
      title: t(translations.services.footwearTitle, lang),
      description: t(translations.services.footwearDesc, lang),
    },
    {
      icon: Monitor,
      number: "03",
      title: t(translations.services.itTitle, lang),
      description: t(translations.services.itDesc, lang),
      featured: true,
    },
    {
      icon: GraduationCap,
      number: "04",
      title: t(translations.services.trainingTitle, lang),
      description: t(translations.services.trainingDesc, lang),
    },
    {
      icon: Package,
      number: "05",
      title: t(translations.services.rentingTitle, lang),
      description: t(translations.services.rentingDesc, lang),
    },
  ];

  return (
    <section id="services" className="bg-white py-24 px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeInUp>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E8220A]">
              {t(translations.services.label, lang)}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0A1628] sm:text-4xl">
              {t(translations.services.heading, lang)}
            </h2>
            <p className="mt-4 text-base text-[#0A1628]/50">
              {t(translations.services.subheading, lang)}
            </p>
          </div>
        </FadeInUp>

        <StaggerChildren className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.number}>
              <div
                className={`group h-full rounded-xl border p-8 transition-all duration-200 ${
                  service.featured
                    ? "border-[rgba(232,34,10,0.3)] bg-white"
                    : "border-[rgba(232,34,10,0.08)] bg-[#F4F5F7] hover:border-[rgba(232,34,10,0.2)] hover:bg-white"
                }`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(232,34,10,0.1)]">
                    <service.icon className="size-5 text-[#E8220A]" />
                  </div>
                  <span className="text-xs font-mono text-[#0A1628]/30">{service.number}</span>
                </div>
                <h3 className="text-base font-semibold text-[#0A1628] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#0A1628]/50">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
