"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, ChevronDown } from "lucide-react";
import { CREDIT_LINES, CONTACT, WHATSAPP_URL } from "@/lib/constants";

type FormData = {
  creditLine: string;
  value: string;
  term: string;
  name: string;
  whatsapp: string;
  document: string;
  city: string;
  description: string;
};

// Max term per credit line id
const TERM_LIMITS: Record<string, number> = {
  "microcredito-facil": 24,
  "banco-da-mulher": 60,
  "capital-de-giro": 60,
  "maquinas-equipamentos": 120,
  "obras-civis": 240,
  turismo: 60,
  inovacao: 96,
  "energia-renovavel": 120,
};

function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 11)
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  return value;
}

function maskCurrency(value: string) {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  const num = parseInt(digits, 10) / 100;
  return num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function SimulatorForm() {
  const [submitted, setSubmitted] = useState(false);
  const [phoneDisplay, setPhoneDisplay] = useState("");
  const [valueDisplay, setValueDisplay] = useState("");
  const [selectedLineId, setSelectedLineId] = useState("");
  const maxTerm = TERM_LIMITS[selectedLineId] ?? 60;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { term: "12" } });

  const termValue = watch("term");

  function onSubmit(data: FormData) {
    const line =
      CREDIT_LINES.find((l) => l.id === data.creditLine)?.name ??
      data.creditLine;

    const msg = `Olá! Gostaria de simular um crédito:
📋 Linha: ${line}
💰 Valor: ${data.value}
📅 Prazo: ${data.term} meses
👤 Nome: ${data.name}
📱 WhatsApp: ${data.whatsapp}
🏢 CNPJ/CPF: ${data.document}
📍 Cidade: ${data.city}
📝 Sobre o negócio: ${data.description}`;

    window.open(WHATSAPP_URL(msg), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">✅</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Simulação enviada!
        </h2>
        <p className="text-gray-600 mb-6 max-w-sm mx-auto">
          Abrimos o WhatsApp com seus dados. Confirme o envio e entraremos em
          contato em breve.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-blue-900 font-semibold text-sm hover:underline"
        >
          Fazer outra simulação
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 space-y-6"
    >
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          Dados da Simulação
        </h2>
        <p className="text-sm text-gray-500">
          Campos marcados com <span className="text-red-500">*</span> são
          obrigatórios.
        </p>
      </div>

      {/* Credit line */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Linha de Crédito <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            {...register("creditLine", { required: "Selecione uma linha" })}
            onChange={(e) => {
              setValue("creditLine", e.target.value);
              setSelectedLineId(e.target.value);
              setValue("term", "12");
            }}
            className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition pr-10"
          >
            <option value="">Selecione a linha de crédito…</option>
            {CREDIT_LINES.map((line) => (
              <option key={line.id} value={line.id}>
                {line.name}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>
        {errors.creditLine && (
          <p className="text-red-500 text-xs mt-1">{errors.creditLine.message}</p>
        )}
      </div>

      {/* Value + Term */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Valor Desejado <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="R$ 0,00"
            value={valueDisplay}
            {...register("value", { required: "Informe o valor" })}
            onChange={(e) => {
              const masked = maskCurrency(e.target.value);
              setValueDisplay(masked);
              setValue("value", masked);
            }}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
          />
          {errors.value && (
            <p className="text-red-500 text-xs mt-1">{errors.value.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Prazo Desejado:{" "}
            <span className="text-blue-900 font-bold">{termValue} meses</span>
          </label>
          <input
            type="range"
            min={3}
            max={maxTerm}
            step={1}
            {...register("term")}
            className="w-full h-2 bg-gray-200 rounded-full accent-blue-900 mt-3 cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>3 meses</span>
            <span>{maxTerm} meses</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-2">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
          Seus Dados
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Nome Completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="João da Silva"
              {...register("name", { required: "Informe seu nome" })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="(41) 9 0000-0000"
              value={phoneDisplay}
              {...register("whatsapp", { required: "Informe seu WhatsApp" })}
              onChange={(e) => {
                const masked = maskPhone(e.target.value);
                setPhoneDisplay(masked);
                setValue("whatsapp", masked);
              }}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
            />
            {errors.whatsapp && (
              <p className="text-red-500 text-xs mt-1">
                {errors.whatsapp.message}
              </p>
            )}
          </div>
          {/* Document */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              CNPJ ou CPF <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="00.000.000/0001-00"
              {...register("document", { required: "Informe o CNPJ ou CPF" })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
            />
            {errors.document && (
              <p className="text-red-500 text-xs mt-1">
                {errors.document.message}
              </p>
            )}
          </div>
          {/* City */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Cidade <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Curitiba"
              {...register("city", { required: "Informe sua cidade" })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
            />
            {errors.city && (
              <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Sobre o seu Negócio <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          placeholder="Descreva brevemente sua empresa, o que faz e para que pretende usar o crédito…"
          {...register("description", {
            required: "Descreva brevemente seu negócio",
          })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition resize-none"
        />
        {errors.description && (
          <p className="text-red-500 text-xs mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-3 bg-blue-900 text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-800 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        <Send size={18} />
        Enviar Simulação pelo WhatsApp
      </button>

      <p className="text-center text-xs text-gray-400 leading-relaxed">
        Ao enviar, você concorda com nossa{" "}
        <a
          href="/politica-privacidade"
          className="underline hover:text-gray-600"
        >
          Política de Privacidade
        </a>
        . Não cobramos nenhum valor pelo atendimento.
      </p>
    </form>
  );
}
