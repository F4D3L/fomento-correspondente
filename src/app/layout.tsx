import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CONTACT } from "@/lib/constants";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seudominio.com.br"), // EDITÁVEL
  title: {
    default: `${CONTACT.name} — Correspondente Fomento Paraná`,
    template: `%s | ${CONTACT.name}`,
  },
  description:
    `Correspondente oficial da Fomento Paraná em ${CONTACT.city}. Facilitamos o acesso a crédito para micro e pequenos empreendedores paranaenses. Atendimento personalizado, gratuito e ágil.`,
  keywords: [
    "fomento paraná",
    "correspondente bancário",
    "crédito para empresas",
    "microcrédito",
    "banco da mulher paranaense",
    "capital de giro",
    "financiamento paraná",
    CONTACT.city,
    "crédito empreendedor",
  ],
  authors: [{ name: CONTACT.name }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: `${CONTACT.name} — Correspondente Fomento Paraná`,
    title: `${CONTACT.name} — Correspondente Oficial Fomento Paraná`,
    description:
      "Acesse crédito da Fomento Paraná com apoio especializado. Atendimento personalizado e gratuito para empreendedores.",
    images: [
      {
        url: "/og-image.jpg", // EDITÁVEL — coloque uma imagem 1200x630px em /public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Correspondente Fomento Paraná",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CONTACT.name} — Correspondente Fomento Paraná`,
    description:
      "Acesse crédito da Fomento Paraná com apoio especializado. Atendimento personalizado e gratuito.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
