"use client";

import { motion } from "framer-motion";
import { MessageCircle, Search, CheckCircle, FileText, DollarSign } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

const ICONS = { MessageCircle, Search, CheckCircle, FileText, DollarSign } as Record<string, React.ElementType>;

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-green-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Simples e transparente
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Do primeiro contato à liberação do crédito, cuidamos de cada detalhe por você.
          </p>
        </motion.div>

        {/* Timeline desktop / stack mobile */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-100 via-blue-300 to-green-300 mx-28" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = ICONS[step.icon] ?? CheckCircle;
              const isLast = idx === HOW_IT_WORKS_STEPS.length - 1;
              return (
                <motion.div
                  key={step.step}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                >
                  {/* Circle */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md ${
                      isLast
                        ? "bg-green-600 text-white"
                        : "bg-blue-900 text-white"
                    }`}
                  >
                    <Icon size={28} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-blue-900 text-blue-900 text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.p
          className="mt-12 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Todo o processo de intermediação é <strong className="text-gray-600">gratuito</strong> para o empreendedor.
        </motion.p>
      </div>
    </section>
  );
}
