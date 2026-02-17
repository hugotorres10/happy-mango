"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Building2 } from "lucide-react";
import { FadeInUp } from "@/components/motion-wrapper";
import { useLang } from "@/lib/language-context";
import { translations, t } from "@/lib/translations";

export function Contact() {
  const { lang } = useLang();

  return (
    <section id="contact" className="bg-[#080E1A] py-24 px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeInUp>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E8220A]">
              {t(translations.contact.label, lang)}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t(translations.contact.heading, lang)}
            </h2>
            <p className="mt-4 text-base text-white/40">
              {t(translations.contact.subheading, lang)}
            </p>
          </div>
        </FadeInUp>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <FadeInUp delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 rounded-xl border border-white/5 bg-[#0D1525] p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-medium tracking-wider uppercase text-white/40">
                    {t(translations.contact.fullName, lang)}
                  </Label>
                  <Input
                    id="name"
                    placeholder={t(translations.contact.namePlaceholder, lang)}
                    className="border-white/5 bg-[#111C2E] text-white placeholder:text-white/20 focus:border-[rgba(232,34,10,0.5)] focus:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-medium tracking-wider uppercase text-white/40">
                    {t(translations.contact.emailAddress, lang)}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    className="border-white/5 bg-[#111C2E] text-white placeholder:text-white/20 focus:border-[rgba(232,34,10,0.5)] focus:ring-0"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-medium tracking-wider uppercase text-white/40">
                  {t(translations.contact.message, lang)}
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder={t(translations.contact.messagePlaceholder, lang)}
                  className="border-white/5 bg-[#111C2E] text-white placeholder:text-white/20 focus:border-[rgba(232,34,10,0.5)] focus:ring-0 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="bg-[#E8220A] text-white font-semibold hover:bg-[#C01A06] text-xs tracking-wider uppercase px-8 border-0"
              >
                {t(translations.contact.sendMessage, lang)}
              </Button>
            </form>
          </FadeInUp>

          {/* Contact Info */}
          <FadeInUp delay={0.2} className="lg:col-span-2">
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: t(translations.contact.email, lang),
                  value: "HappyMangolda@gmail.com",
                },
                {
                  icon: Phone,
                  label: t(translations.contact.phone, lang),
                  value: "+351 912 339 361",
                },
                {
                  icon: MapPin,
                  label: lang === "pt" ? "Sede" : "Headquarters",
                  value: "Av. do Atlântico nº 16, 14º piso\nEscritório 8, 1990-019 Parque das Nações\nPortugal",
                },
                {
                  icon: Building2,
                  label: lang === "pt" ? "Filial" : "Branch Office",
                  value: "Rua das Cruzes nº 117\n4650-165 Felgueiras\nPortugal",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl border border-white/5 bg-[#0D1525] px-6 py-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(232,34,10,0.1)]">
                    <item.icon className="size-4 text-[#E8220A]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wider uppercase text-white/30">{item.label}</p>
                    <p className="mt-1 text-sm text-white/60 whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
