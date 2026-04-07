import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Award, Users, TrendingUp, Heart } from "lucide-react";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça o correspondente oficial da Fomento Paraná. Especialistas em crédito para empreendedores paranaenses com atendimento personalizado e gratuito.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Compromisso com o Empreendedor",
    desc: "Acreditamos que o crédito certo, na hora certa, transforma negócios e vidas.",
  },
  {
    icon: Award,
    title: "Transparência Total",
    desc: "Explicamos cada etapa, cada taxa e cada condição com clareza. Sem letras miúdas.",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    desc: "Você é atendido por um especialista real, não por um sistema automatizado.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Concretos",
    desc: "Nossa missão é simples: ver o seu negócio crescer com crédito adequado.",
  },
];

const CREDENTIALS = [
  "Credenciado oficialmente pela Fomento Paraná — Agência de Fomento do Paraná S/A",
  "Atuação em conformidade com a Resolução CMN nº 3.954/11",
  "Profundo conhecimento em todas as linhas de crédito disponíveis",
  "Experiência em análise de viabilidade e estruturação de propostas",
  "Acompanhamento integral do processo, da consulta à liberação do crédito",
];

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="pt-24 pb-20 px-4"
        style={{
          background:
            "linear-gradient(135deg, #0f2240 0%, #1e3a5f 50%, #1a4731 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-medium px-4 py-1.5 rounded-full border border-white/20 mb-6">
            <Award size={14} className="text-yellow-400" />
            Correspondente Oficial Fomento Paraná
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Quem Somos
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Somos especializados em facilitar o acesso ao crédito da Fomento
            Paraná para empreendedores de todo o estado, com atendimento
            personalizado, gratuito e comprometido.
          </p>
        </div>
      </div>

      {/* Profile section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-blue-100 to-green-100 flex flex-col items-center justify-center border-4 border-white shadow-2xl">
                <img src="/profile.jpg" alt="Foto do Correspondente" className="w-full h-full object-cover rounded-3xl" />
              </div>
              {/* Badge oficial */}
              <div className="absolute -bottom-4 -right-4 bg-blue-900 text-white rounded-2xl px-4 py-2 shadow-xl text-xs font-bold flex items-center gap-2">
                <Award size={14} className="text-yellow-400" />
                Correspondente Oficial
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {/* EDITÁVEL */}
              {CONTACT.name}
            </h2>
            <p className="text-green-700 font-semibold mb-5">
              Correspondente Bancário — Fomento Paraná
            </p>

            {/* EDITÁVEL — texto de apresentação */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Com mais de <strong className="text-gray-900">10 anos de experiência</strong> no
                mercado financeiro e de crédito, atuo como correspondente oficial
                da Fomento Paraná, ajudando micro e pequenos empreendedores a
                transformarem seus projetos em realidade.
              </p>
              <p>
                Minha missão é simplificar o acesso ao crédito. Sei que navegar
                pelas linhas de financiamento, documentações e exigências de um
                banco pode ser complicado — por isso estou aqui: para guiar você
                em cada etapa, sem custo algum.
              </p>
              <p>
                Já intermediei mais de{" "}
                <strong className="text-gray-900">R$ 15 milhões em crédito</strong> para
                centenas de empreendedores paranaenses dos mais variados
                segmentos: comércio, serviços, indústria, turismo e agricultura.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/simulador"
                className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-800 transition-all shadow-lg active:scale-95"
              >
                Simular Crédito
              </Link>
              <a
                href={WHATSAPP_URL(
                  "Olá! Vi o site e gostaria de conversar sobre crédito para o meu negócio."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-500 transition-all shadow-lg active:scale-95"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-3">
              Credenciais e Atuação
            </h2>
            <p className="text-gray-600">
              Operamos com total conformidade legal e credenciamento oficial.
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <ul className="space-y-4">
              {CREDENTIALS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-green-600 mt-0.5 shrink-0"
                  />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            {/* Disclaimer box */}
            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <p className="text-sm text-blue-800 leading-relaxed">
                <strong>{CONTACT.name}</strong> atua como correspondente
                bancário nos termos da{" "}
                <strong>Resolução CMN nº 3.954/11</strong>, encaminhando
                propostas de crédito para a{" "}
                <strong>
                  Fomento Paraná — Agência de Fomento do Paraná S/A
                </strong>
                , instituição financeira autorizada pelo Banco Central do
                Brasil. Cabe à instituição financeira realizar a análise e
                concessão do crédito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-3">
              Nossos Valores
            </h2>
            <p className="text-gray-600">O que nos guia em cada atendimento.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 flex flex-col items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Icon size={22} className="text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, #0f2240 0%, #1e3a5f 60%, #1a4731 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para acessar crédito?
          </h2>
          <p className="text-white/70 mb-8">
            Entre em contato agora. Analisamos seu perfil e indicamos a melhor
            linha de crédito para o seu negócio. Sem custo, sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/simulador"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-xl active:scale-95"
            >
              Simular Crédito
            </Link>
            <a
              href={WHATSAPP_URL(
                "Olá! Quero saber mais sobre as linhas de crédito da Fomento Paraná."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-all shadow-xl active:scale-95"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
