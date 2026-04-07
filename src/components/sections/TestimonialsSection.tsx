"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

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
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-gray-500 text-lg">
            Empreendedores paranaenses que acessaram crédito com nosso apoio.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl p-8 sm:p-12 overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-6 left-8 text-8xl text-blue-100 font-serif leading-none select-none">
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8">
                  {/* EDITÁVEL */}
                  {TESTIMONIALS[current].text}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-xl shrink-0">
                    {/* EDITÁVEL — substituir por <Image> quando tiver foto */}
                    {TESTIMONIALS[current].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      {/* EDITÁVEL */}
                      {TESTIMONIALS[current].name}
                    </p>
                    <p className="text-gray-500 text-sm">{TESTIMONIALS[current].role}</p>
                    <p className="text-blue-700 text-sm font-medium">{TESTIMONIALS[current].city}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-blue-900 hover:text-blue-900 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-blue-900" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-blue-900 hover:text-blue-900 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
