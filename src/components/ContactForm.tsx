"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

type ContactData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [phoneDisplay, setPhoneDisplay] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactData>();

  function onSubmit(data: ContactData) {
    const msg = `Olá! Entrei em contato pelo site:
👤 Nome: ${data.name}
📱 Telefone: ${data.phone}
📧 E-mail: ${data.email}
💬 Mensagem: ${data.message}`;

    window.open(WHATSAPP_URL(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✅</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Mensagem enviada!</h3>
        <p className="text-gray-500 text-sm mb-5">
          O WhatsApp foi aberto com sua mensagem. Retornaremos em breve.
        </p>
        <button
          onClick={() => setSent(false)}
          className="text-blue-900 font-semibold text-sm hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-5"
    >
      <h2 className="text-xl font-bold text-gray-900">Envie uma mensagem</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Nome <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="João da Silva"
            {...register("name", { required: "Informe seu nome" })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition text-sm"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Telefone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            inputMode="numeric"
            placeholder="(41) 9 0000-0000"
            value={phoneDisplay}
            {...register("phone", { required: "Informe seu telefone" })}
            onChange={(e) => {
              const masked = maskPhone(e.target.value);
              setPhoneDisplay(masked);
              setValue("phone", masked);
            }}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition text-sm"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          E-mail
        </label>
        <input
          type="email"
          placeholder="seu@email.com"
          {...register("email")}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Mensagem <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          placeholder="Como podemos ajudar você?"
          {...register("message", { required: "Escreva sua mensagem" })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition resize-none text-sm"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-blue-900 text-white font-bold py-3.5 rounded-xl hover:bg-blue-800 active:scale-95 transition-all shadow-lg text-sm"
      >
        <Send size={16} />
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
