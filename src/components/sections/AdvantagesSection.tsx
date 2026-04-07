"use client";

import { motion } from "framer-motion";
import { UserCheck, Zap, GraduationCap, Shield } from "lucide-react";
import { ADVANTAGES } from "@/lib/constants";

const ICONS = { UserCheck, Zap, GraduationCap, Shield } as Record<string, React.ElementType>;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function AdvantagesSection() {
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
            Por que um Correspondente?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Seu aliado no acesso ao crédito
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Ir direto ao banco pode ser complicado e demorado. Com um correspondente oficial,
            você tem apoio especializado em cada etapa — sem custo algum.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {ADVANTAGES.map((adv, i) => {
            const Icon = ICONS[adv.icon] ?? Shield;
            const colors = [
              { bg: "bg-blue-50", icon: "text-blue-700", border: "border-blue-100" },
              { bg: "bg-green-50", icon: "text-green-700", border: "border-green-100" },
              { bg: "bg-indigo-50", icon: "text-indigo-700", border: "border-indigo-100" },
              { bg: "bg-emerald-50", icon: "text-emerald-700", border: "border-emerald-100" },
            ];
            const c = colors[i % colors.length];
            return (
              <motion.div
                key={adv.title}
                variants={itemVariants}
                className={`rounded-2xl border ${c.border} ${c.bg} p-8 hover:shadow-lg transition-shadow duration-300`}
              >
                <div className={`w-14 h-14 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-6 shadow-sm`}>
                  <Icon size={28} className={c.icon} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{adv.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{adv.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
