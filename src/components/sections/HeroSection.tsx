"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";

const TRUST_ITEMS = [
  "Atendimento gratuito",
  "Correspondente oficial",
  "Sem burocracia",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #0f2240 0%, #1e3a5f 40%, #1a4731 100%)",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl bg-blue-400 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-10 blur-3xl bg-green-400 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl bg-white pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full border border-white/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Correspondente Oficial da Fomento Paraná
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Crédito para o seu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">
                negócio crescer
              </span>{" "}
              no Paraná
            </h1>

            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-lg">
              Acessamos as melhores linhas de crédito da Fomento Paraná para
              micro e pequenos empreendedores. Atendimento personalizado,
              gratuito e do início ao fim do processo.
            </p>

            {/* Trust items */}
            <div className="flex flex-wrap gap-3 mb-10">
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 text-white/80 text-sm"
                >
                  <CheckCircle size={15} className="text-green-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/simulador"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-all duration-200 shadow-xl hover:shadow-green-500/30 active:scale-95 text-base"
              >
                Simular Crédito
                <ArrowRight size={18} />
              </Link>
              <a
                href={WHATSAPP_URL(
                  "Olá! Vim pelo site e gostaria de saber sobre as linhas de crédito."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200 active:scale-95 text-base"
              >
                {/* WhatsApp icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Fale pelo WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right — Card mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-300 text-2xl">💰</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Microcrédito Fácil</p>
                    <p className="text-white/60 text-sm">Para MEIs e Microempresas</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Valor disponível</span>
                    <span className="text-white font-semibold">R$ 1.000 – R$ 20.000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Prazo de pagamento</span>
                    <span className="text-white font-semibold">Até 24 meses</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Garantia</span>
                    <span className="text-white font-semibold">Fundo de Aval (FAMPE)</span>
                  </div>
                </div>
                <div className="w-full bg-white/20 h-px mb-6" />
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Fomento Paraná</span>
                  <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Disponível
                  </span>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <span className="text-xl">🏆</span>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">Aprovação rápida</p>
                  <p className="text-gray-500 text-xs">Em poucos dias úteis</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <span className="text-xl">✅</span>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">Serviço gratuito</p>
                  <p className="text-gray-500 text-xs">Sem custo ao cliente</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
