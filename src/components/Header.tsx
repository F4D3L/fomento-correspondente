"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT, WHATSAPP_URL, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/linhas-de-credito", label: "Linhas de Crédito" },
  { href: "/simulador", label: "Simulador" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="Logo"
                width={500}
                height={500}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-base leading-tight transition-colors ${
                  scrolled || !isHome ? "text-blue-900" : "text-white"
                }`}
              >
                {/* EDITÁVEL */}
                {CONTACT.name}
              </span>
              <span
                className={`text-xs leading-tight transition-colors ${
                  scrolled || !isHome ? "text-green-700" : "text-green-300"
                }`}
              >
                Correspondente Fomento Paraná
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-blue-900 text-white"
                    : scrolled || !isHome
                    ? "text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CONTACT.phone}`}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled || !isHome ? "text-gray-600 hover:text-blue-900" : "text-white/80 hover:text-white"
              }`}
            >
              <Phone size={16} />
              {/* EDITÁVEL */}
              {CONTACT.phone}
            </a>
            <a
              href={WHATSAPP_URL(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-green-500 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled || !isHome
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    pathname === link.href
                      ? "bg-blue-900 text-white"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600"
                >
                  <Phone size={16} />
                  {CONTACT.phone}
                </a>
                <a
                  href={WHATSAPP_URL(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-green-500 transition-all"
                >
                  Fale pelo WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
