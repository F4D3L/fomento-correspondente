import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o correspondente oficial da Fomento Paraná. Atendimento personalizado pelo WhatsApp, telefone ou formulário.",
};

export default function ContatoPage() {
  const whatsappMsg =
    "Olá! Vim pelo site e gostaria de tirar algumas dúvidas sobre crédito.";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="pt-24 pb-16 px-4"
        style={{
          background:
            "linear-gradient(135deg, #0f2240 0%, #1e3a5f 50%, #1a4731 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Entre em Contato
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Estamos prontos para ajudar. Escolha o canal de sua preferência e
            fale com um especialista em crédito para empreendedores.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — info */}
          <div className="lg:col-span-2 space-y-6">
            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-600 text-white rounded-2xl p-5 hover:bg-green-500 transition-all shadow-lg group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-base">WhatsApp</p>
                <p className="text-white/80 text-sm">{CONTACT.whatsappDisplay}</p>{/* EDITÁVEL */}
                <p className="text-white/60 text-xs mt-0.5">Clique para abrir conversa</p>
              </div>
            </a>

            {/* Contact cards */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider text-gray-500">
                Outras formas de contato
              </h3>

              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Phone size={18} className="text-blue-900" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Telefone</p>
                  <p className="font-semibold text-gray-900 text-sm">
                    {CONTACT.phone}{/* EDITÁVEL */}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Mail size={18} className="text-blue-900" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">E-mail</p>
                  <p className="font-semibold text-gray-900 text-sm">
                    {CONTACT.email}{/* EDITÁVEL */}
                  </p>
                </div>
              </a>

              {CONTACT.address && (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-blue-900" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Endereço</p>
                    <p className="font-semibold text-gray-900 text-sm">
                      {CONTACT.address}{/* EDITÁVEL */}
                    </p>
                    <p className="text-xs text-gray-400">{CONTACT.city} — PR</p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-blue-900" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Horário de atendimento</p>
                  <p className="font-semibold text-gray-900 text-sm">
                    {CONTACT.workingHours}{/* EDITÁVEL */}
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-500 text-sm uppercase tracking-wider mb-4">
                Redes Sociais
              </h3>
              <div className="flex gap-3">
                {CONTACT.instagram && (
                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-100 hover:bg-pink-50 text-gray-700 hover:text-pink-600 px-4 py-2 rounded-xl text-sm font-medium transition-all"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    Instagram
                  </a>
                )}
                {CONTACT.facebook && (
                  <a
                    href={CONTACT.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl text-sm font-medium transition-all"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                  </a>
                )}
              </div>
            </div>

            {/* Map embed */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.068652097121!2d-49.24257898855984!3d-25.435968233035126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5ab9446bdc1%3A0xcc228aebb22ccd28!2sR.%20Cel.%20Pedro%20Scherer%20Sobrinho%20-%20Cristo%20Rei%2C%20Curitiba%20-%20PR%2C%2082590-300!5e0!3m2!1spt-BR!2sbr!4v1775572501204!5m2!1spt-BR!2sbr"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <ContactForm />
            <div className="mt-4 bg-blue-50 border border-blue-100 rounded-2xl p-4">
              <p className="text-sm text-blue-700 leading-relaxed">
                <strong>Preferindo, ligue ou chame no WhatsApp.</strong> O
                formulário abrirá o WhatsApp com seus dados pré-preenchidos para
                facilitar o atendimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
                 