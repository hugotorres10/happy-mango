import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hmango.com"),
  title: {
    default: "H Mango | Comércio Global, Tecnologia e Formação Profissional",
    template: "%s | H Mango",
  },
  description:
    "H Mango Lda — parceiro global de comércio têxtil, calçado, serviços de TI, formação profissional e renting. Presença em 3 continentes. Parque das Nações, Lisboa.",
  keywords: [
    "H Mango", "comércio têxtil Portugal", "footwear trading", "IT consulting Lisboa",
    "formação profissional", "renting leasing", "trade company Portugal",
    "import export Portugal", "Parque das Nações empresa", "H Mango Lda",
    "hmango.com", "global trade partner",
  ],
  authors: [{ name: "H Mango Lda", url: "https://hmango.com" }],
  creator: "H Mango Lda",
  publisher: "H Mango Lda",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    alternateLocale: "en_US",
    url: "https://hmango.com",
    siteName: "H Mango",
    title: "H Mango | Comércio Global, Tecnologia e Formação Profissional",
    description:
      "Parceiro global de comércio têxtil, calçado, TI e formação. Lisboa, Portugal.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H Mango — Global Trade & Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "H Mango | Comércio Global, Tecnologia e Formação",
    description: "Parceiro global de comércio têxtil, calçado, TI e formação. Lisboa, Portugal.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://hmango.com",
    languages: {
      "pt-PT": "https://hmango.com",
      "en-US": "https://hmango.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
