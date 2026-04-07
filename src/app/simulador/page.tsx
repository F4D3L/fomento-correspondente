import type { Metadata } from "next";
import { SimulatorForm } from "@/components/SimulatorForm";

export const metadata: Metadata = {
  title: "Simulador de Crédito",
  description:
    "Simule as linhas de crédito da Fomento Paraná. Preencha seus dados e receba orientação personalizada de um correspondente oficial.",
};

export default function SimuladorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div
        className="pt-24 pb-16 px-4"
        style={{
          background:
            "linear-gradient(135deg, #0f2240 0%, #1e3a5f 50%, #1a4731 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-medium px-4 py-1.5 rounded-full border border-white/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Correspondente Oficial Fomento Paraná
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Simulador de Crédito
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Preencha o formulário abaixo e enviaremos uma análise personalizada
            via WhatsApp. Sem compromisso e totalmente gratuito.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-4 py-12 -mt-6">
        <SimulatorForm />
      </div>

      {/* Info boxes */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              icon: "🔒",
              title: "Dados seguros",
              desc: "Suas informações são usadas apenas para análise da proposta.",
            },
            {
              icon: "💸",
              title: "Serviço gratuito",
              desc: "O correspondente não cobra nenhum valor pelo atendimento.",
            },
            {
              icon: "⚡",
              title: "Resposta rápida",
              desc: "Retorno em até 1 dia útil via WhatsApp.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-3"
            >
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
