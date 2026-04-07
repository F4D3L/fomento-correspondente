"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Banknote, Heart, RefreshCw, Settings, Building2, MapPin, Lightbulb, Zap,
  ChevronDown, CheckCircle, Users, Clock, Shield, Target,
} from "lucide-react";
import type { Metadata } from "next";
import { CREDIT_LINES, WHATSAPP_URL } from "@/lib/constants";

const ICONS = { Banknote, Heart, RefreshCw, Settings, Building2, MapPin, Lightbulb, Zap } as Record<string, React.ElementType>;

const COLOR_MAP: Record<string, { header: string; icon: string; badge: string; border: string }> = {
  blue:   { header: "bg-blue-900",   icon: "bg-blue-100 text-blue-700",   badge: "bg-blue-100 text-blue-700",   border: "border-blue-200" },
  pink:   { header: "bg-pink-800",   icon: "bg-pink-100 text-pink-700",   badge: "bg-pink-100 text-pink-700",   border: "border-pink-200" },
  green:  { header: "bg-green-800",  icon: "bg-green-100 text-green-700", badge: "bg-green-100 text-green-700", border: "border-green-200" },
  indigo: { header: "bg-indigo-900", icon: "bg-indigo-100 text-indigo-700", badge: "bg-indigo-100 text-indigo-700", border: "border-indigo-200" },
  orange: { header: "bg-orange-700", icon: "bg-orange-100 text-orange-700", badge: "bg-orange-100 text-orange-700", border: "border-orange-200" },
  teal:   { header: "bg-teal-800",   icon: "bg-teal-100 text-teal-700",   badge: "bg-teal-100 text-teal-700",   border: "border-teal-200" },
  purple: { header: "bg-purple-900", icon: "bg-purple-100 text-purple-700", badge: "bg-purple-100 text-purple-700", border: "border-purple-200" },
  yellow: { header: "bg-yellow-600", icon: "bg-yellow-100 text-yellow-700", badge: "bg-yellow-100 text-yellow-700", border: "border-yellow-200" },
};

function CreditLineCard({ line }: { line: typeof CREDIT_LINES[number] }) {
  const [open, setOpen] = useState(false);
  const Icon = ICONS[line.icon] ?? Banknote;
  const c = COLOR_MAP[line.color] ?? COLOR_MAP.blue;
  const waMsg = `Olá! Gostaria de saber mais sobre a linha "${line.name}" da Fomento Paraná. Pode me ajudar?`;

  return (
    <motion.div
      id={line.id}
      className={`rounded-2xl border-2 ${c.border} overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between gap-4 p-6 ${c.header} text-left`}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center shrink-0`}>
            <Icon size={24} />
          </div>
          <div>
            <h3 className="font-bold text-white text-lg leading-tight">{line.name}</h3>
            <p className="text-white/70 text-sm mt-0.5">{line.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {line.badge && (
            <span className={`hidden sm:block text-xs font-semibold px-3 py-1 rounded-full ${c.badge}`}>
              {line.badge}
            </span>
          )}
          <ChevronDown
            size={20}
            className={`text-white/80 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {/* Quick info strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100 border-b border-gray-100 bg-gray-50">
        {[
          { label: "Mínimo", value: line.minValue },
          { label: "Máximo", value: line.maxValue },
          { label: "Prazo", value: line.term },
          { label: "Carência", value: line.grace },
        ].map((item) => (
          <div key={item.label} className="px-4 py-3 text-center">
            <p className="text-xs text-gray-400 font-medium">{item.label}</p>
            <p className="text-sm font-bold text-gray-800 mt-0.5">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Expandable details */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-white space-y-5">
              {/* Detail items */}
              {[
                { icon: Users, label: "Público-alvo", value: line.target },
                { icon: Target, label: "Finalidade", value: line.purpose },
                { icon: Shield, label: "Garantias aceitas", value: line.guarantees },
              ].map(({ icon: ItemIcon, label, value }) => (
                <div key={label} className="flex gap-3">
                  <ItemIcon size={18} className="text-blue-700 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{value}</p>
                  </div>
                </div>
              ))}

              {/* Highlight box */}
              {line.highlight && (
                <div className="flex gap-3 bg-green-50 border border-green-100 rounded-xl p-4">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 shrink-0" />
                  <p className="text-green-800 text-sm leading-relaxed">{line.highlight}</p>
                </div>
              )}

              {/* CTA */}
              <a
                href={WHATSAPP_URL(waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-bold py-3.5 rounded-xl hover:bg-green-500 transition-colors text-sm"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar esta linha pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function LinhasDeCreditoPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16"
        style={{ background: "linear-gradient(135deg, #0f2240 0%, #1e3a5f 60%, #1a4731 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-green-300 font-semibold text-sm uppercase tracking-wider mb-4">
              Fomento Paraná
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Linhas de Crédito
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Conheça todas as opções disponíveis. Clique em cada linha para ver os detalhes
              e solicitar pelo WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lines list */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {CREDIT_LINES.map((line) => (
            <CreditLineCard key={line.id} line={line} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex gap-4">
            <Clock size={22} className="text-blue-700 mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-blue-900 mb-1">Não sabe qual linha escolher?</p>
              <p className="text-blue-800 text-sm leading-relaxed">
                Entre em contato conosco. Analisamos seu perfil e indicamos a linha mais adequada
                para o seu negócio — sem custo e sem compromisso.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
