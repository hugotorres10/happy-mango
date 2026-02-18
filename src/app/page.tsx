import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Sectors } from "@/components/sectors";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/lib/language-context";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "H Mango Lda",
  alternateName: "H Mango",
  url: "https://hmango.com",
  logo: "https://hmango.com/logo.png",
  description:
    "Empresa portuguesa de comércio global especializada em têxteis, calçado, IT e formação profissional. Presença em 3 continentes.",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Av. do Atlântico nº 16, 14º piso, Escritório 8",
      postalCode: "1990-019",
      addressLocality: "Lisboa",
      addressRegion: "Lisboa",
      addressCountry: "PT",
      name: "Sede",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Rua das Cruzes nº 117",
      postalCode: "4650-165",
      addressLocality: "Felgueiras",
      addressCountry: "PT",
      name: "Filial",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+351-912-339-361",
    email: "HappyMangolda@gmail.com",
    contactType: "customer service",
    availableLanguage: ["Portuguese", "English"],
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços H Mango",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Comércio Têxtil" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Comércio de Calçado" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Serviços de TI e Consultoria" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Formação Profissional" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renting e Leasing" } },
    ],
  },
};

export default function Home() {
  return (
    <LanguageProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Sectors />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
