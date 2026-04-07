import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { CreditLinesPreview } from "@/components/sections/CreditLinesPreview";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Correspondente Oficial Fomento Paraná — Crédito para Empreendedores",
  description:
    "Acesse as linhas de crédito da Fomento Paraná com apoio especializado. Microcrédito, Banco da Mulher, Capital de Giro e muito mais. Atendimento gratuito e personalizado.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AdvantagesSection />
      <CreditLinesPreview />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
