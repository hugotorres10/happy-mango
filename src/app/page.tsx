import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Sectors } from "@/components/sectors";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/lib/language-context";

export default function Home() {
  return (
    <LanguageProvider>
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
