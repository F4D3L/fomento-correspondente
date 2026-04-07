import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/linhas-de-credito", label: "Linhas de Crédito" },
  { href: "/simulador", label: "Simulador" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/contato", label: "Contato" },
  { href: "/politica-privacidade", label: "Política de Privacidade" },
];

const CREDIT_LINKS = [
  { href: "/linhas-de-credito#microcredito-facil", label: "Microcrédito Fácil" },
  { href: "/linhas-de-credito#banco-da-mulher", label: "Banco da Mulher Paranaense" },
  { href: "/linhas-de-credito#capital-de-giro", label: "Capital de Giro" },
  { href: "/linhas-de-credito#maquinas-equipamentos", label: "Máquinas e Equipamentos" },
  { href: "/linhas-de-credito#obras-civis", label: "Obras e Construção" },
  { href: "/linhas-de-credito#turismo", label: "Turismo" },
  { href: "/linhas-de-credito#inovacao", label: "Inovação" },
  { href: "/linhas-de-credito#energia-renovavel", label: "Energia Renovável" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <div>
                <p className="font-bold text-white text-base leading-tight">
                  {/* EDITÁVEL */}
                  {CONTACT.name}
                </p>
                <p className="text-green-400 text-xs">Correspondente Fomento Paraná</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Facilitamos o acesso ao crédito para micro e pequenos empreendedores paranaenses.
              Atendimento personalizado, sem custo ao cliente.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {CONTACT.instagram && (
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              )}
              {CONTACT.facebook && (
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              )}
              {CONTACT.linkedin && (
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              )}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Páginas
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Credit Lines */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Linhas de Crédito
            </h4>
            <ul className="space-y-2">
              {CREDIT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-start gap-3 text-sm hover:text-green-400 transition-colors"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 text-green-400" />
                  {/* EDITÁVEL */}
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-3 text-sm hover:text-green-400 transition-colors"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-green-400" />
                  {/* EDITÁVEL */}
                  {CONTACT.email}
                </a>
              </li>
              {CONTACT.address && (
                <li className="flex items-start gap-3 text-sm">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-green-400" />
                  {/* EDITÁVEL */}
                  <span>{CONTACT.address}</span>
                </li>
              )}
              <li className="text-sm">
                <span className="text-green-400 font-medium">Horário de Atendimento:</span>
                <br />
                {/* EDITÁVEL */}
                {CONTACT.workingHours}
              </li>
            </ul>
            <a
              href={WHATSAPP_URL("Olá! Vim pelo site e gostaria de saber mais sobre as linhas de crédito.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-green-500 transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Legal disclaimer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-gray-500 leading-relaxed text-center max-w-4xl mx-auto">
            {/* EDITÁVEL — disclaimer legal obrigatório */}
            <strong className="text-gray-400">{CONTACT.name}</strong> atua como correspondente
            bancário nos termos da Resolução CMN nº 3.954/11, encaminhando propostas de crédito para
            a Fomento Paraná — Agência de Fomento do Paraná S/A, instituição financeira autorizada
            pelo Banco Central do Brasil. Cabe à instituição financeira realizar a análise e concessão
            do crédito. O correspondente não cobra nenhum valor do cliente pelo serviço de
            intermediação.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
            <p>© {new Date().getFullYear()} {CONTACT.name}. Todos os direitos reservados.</p>
            <Link href="/politica-privacidade" className="hover:text-gray-400 transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
