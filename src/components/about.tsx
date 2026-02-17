"use client";

import { FadeInUp, StaggerChildren, StaggerItem } from "@/components/motion-wrapper";
import { Globe, Calendar, FolderKanban } from "lucide-react";
import { useLang } from "@/lib/language-context";
import { translations, t } from "@/lib/translations";

export function About() {
  const { lang } = useLang();

  const stats = [
    {
      icon: Calendar,
      value: "10+",
      label: t(translations.about.yearsOfExperience, lang),
    },
    {
      icon: Globe,
      value: "3",
      label: t(translations.about.continentsServed, lang),
    },
    {
      icon: FolderKanban,
      value: "500+",
      label: t(translations.about.successfulProjects, lang),
    },
  ];

  return (
    <section id="about" className="bg-[#F4F5F7] py-24 px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <FadeInUp>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E8220A]">
                {t(translations.about.label, lang)}
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0A1628] sm:text-4xl">
                {t(translations.about.heading, lang)}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#0A1628]/50">
                {t(translations.about.description, lang)}
              </p>
            </FadeInUp>
          </div>

          {/* Stats column */}
          <FadeInUp delay={0.2}>
            <StaggerChildren className="grid gap-4">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="flex items-center gap-6 rounded-xl border border-[rgba(232,34,10,0.1)] bg-white px-8 py-6 transition-colors hover:border-[rgba(232,34,10,0.2)]">
                    <stat.icon className="size-6 text-[#E8220A] shrink-0" />
                    <div>
                      <p className="text-3xl font-bold text-[#0A1628]">{stat.value}</p>
                      <p className="mt-0.5 text-sm text-[#0A1628]/50">{stat.label}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
