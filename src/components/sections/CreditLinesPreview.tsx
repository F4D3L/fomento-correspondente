"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Banknote, Heart, RefreshCw, Settings, Building2, MapPin, Lightbulb, Zap } from "lucide-react";
import { CREDIT_LINES, WHATSAPP_URL } from "@/lib/constants";

const ICONS = { Banknote, Heart, RefreshCw, Settings, Building2, MapPin, Lightbulb, Zap } as Record<string, React.ElementType>;

const COLOR_MAP: Record<string, { card: string; icon: string; badge: string }> = {
  blue:   { card: "border-blue-100 hover:border-blue-300",   icon: "bg-blue-50 text-blue-700",   badge: "bg-blue-100 text-blue-700" },
  pink:   { card: "border-pink-100 hover:border-pink-300",   icon: "bg-pink-50 text-pink-700",   badge: "bg-pink-100 text-pink-700" },
  green:  { card: "border-green-100 hover:border-green-300", icon: "bg-green-50 text-green-700", badge: "bg-green-100 text-green-700" },
  indigo: { card: "border-indigo-100 hover:border-indigo-300", icon: "bg-indigo-50 text-indigo-700", badge: "bg-indigo-100 text-indigo-700" },
  orange: { card: "border-orange-100 hover:border-orange-300", icon: "bg-orange-50 text-orange-700", badge: "bg-orange-100 text-orange-700" },
  teal:   { card: "border-teal-100 hover:border-teal-300",   icon: "bg-teal-50 text-teal-700",   badge: "bg-teal-100 text-teal-700" },
  purple: { card: "border-purple-100 hover:border-purple-300", icon: "bg-purple-50 text-purple-700", badge: "bg-purple-100 text-purple-700" },
  yellow: { card: "border-yellow-100 hover:border-yellow-300", icon: "bg-yellow-50 text-yellow-700", badge: "bg-yellow-100 text-yellow-700" },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Show only first 6 on home — full list on /linhas-de-credito
const PREVIEW_LINES = CREDIT_LINES.slice(0, 6);

export function CreditLinesPreview() {
  return (
    <section className="py-24 bg-gray-50">
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
            Linhas de Crédito
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Opções para cada necessidade
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            A Fomento Paraná oferece diversas linhas de crédito. Encontramos
            a ideal para o seu negócio.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {PREVIEW_LINES.map((line) => {
            const Icon = ICONS[line.icon] ?? Banknote;
            const c = COLOR_MAP[line.color] ?? COLOR_MAP.blue;
            const whatsappMsg = `Olá! Tenho interesse na linha de crédito "${line.name}" da Fomento Paraná. Poderia me ajudar?`;
            return (
              <motion.div
                key={line.id}
                variants={itemVariants}
                className={`bg-white rounded-2xl border-2 ${c.card} p-6 flex flex-col transition-all duration-300 hover:shadow-xl group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center shrink-0`}>
                    <Icon size={24} />
                  </div>
                  {line.badge && (
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${c.badge}`}>
                      {line.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-2">{line.shortName}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{line.description}</p>

                <div className="space-y-1.5 mb-5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Valor</span>
                    <span className="font-semibold text-gray-700">{line.minValue} – {line.maxValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Prazo</span>
                    <span className="font-semibold text-gray-700">{line.term}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={WHATSAPP_URL(whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-green-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-green-500 transition-colors"
                  >
                    Solicitar
                  </a>
                  <Link
                    href={`/linhas-de-credito#${line.id}`}
                    className="flex items-center justify-center px-3 rounded-xl border border-gray-200 hover:border-gray-400 text-gray-500 hover:text-gray-800 transition-colors"
                    aria-label="Ver detalhes"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA to full page */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/linhas-de-credito"
            className="inline-flex items-center gap-2 border-2 border-blue-900 text-blue-900 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-900 hover:text-white transition-all duration-200"
          >
            Ver todas as linhas de crédito
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
