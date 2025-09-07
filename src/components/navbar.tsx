"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { translations, LangType } from "@/i18n/translations";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const lang = (segments[1] as LangType) || "en";
  const t = translations[lang].navbar;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const switchLang = (newLang: string) => {
    const newPath = ["/", newLang, ...segments.slice(2)].join("/");
    return newPath.replace(/\/+/, "/");
  };

  const menuItems = [
    { href: `/${lang}`, label: t.home },
    { href: `/${lang}/locomotives`, label: t.locomotives },
    { href: `/${lang}/rollingstocks`, label: t.rollingstocks },
    { href: `/${lang}/objects`, label: t.objects },
    { href: `/${lang}/route`, label: t.route },
    { href: `/${lang}/tutorial`, label: t.tutorial },
    { href: `/${lang}/contact`, label: t.contact },
  ];

  return (
    <>
      <nav className="bg-white text-black px-6 py-3 flex items-center justify-between shadow-md fixed top-0 left-0 w-full z-50">
        {/* Logo (kiri) */}
        <Link href={`/${lang}`} className="flex items-center space-x-2">
          <Image src="/logo.png" alt="DCP Logo" width={75} height={75} priority />
        </Link>

        {/* Menu utama (tengah) */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, i) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={i}
                href={item.href}
                className={`relative pb-1 transition-colors ${
                  isActive
                    ? "text-[#0589ee] font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#0589ee]"
                    : "text-black hover:text-[#0589ee]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Language Dropdown (kanan) */}
        <div className="hidden md:flex items-center relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center space-x-1 hover:text-gray-600"
          >
            <span className="font-medium">{lang.toUpperCase()}</span>
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
            />
          </button>

          {langOpen && (
            <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg overflow-hidden">
              {["id", "en", "ko"].map((l) => (
                <Link
                  key={l}
                  href={switchLang(l)}
                  className={`block px-4 py-2 hover:bg-gray-100 ${
                    lang === l ? "bg-[#0589ee] text-white font-semibold" : ""
                  }`}
                  onClick={() => setLangOpen(false)}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Hamburger / mobile button */}
        <button
          className="md:hidden flex items-center px-3 py-2"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span className="material-icons">{t.menu}</span>
        </button>
      </nav>

      {/* Sidebar untuk mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="font-bold text-lg">{t.menu}</span>
          <button onClick={() => setSidebarOpen(false)}>
            <span className="material-icons">{t.close}</span>
          </button>
        </div>
        <div className="flex flex-col px-4 py-4 space-y-2">
          {menuItems.map((item, i) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={i}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`block px-4 py-2 rounded-md ${
                  isActive
                    ? "bg-[#0589ee] text-white font-semibold"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Mobile language switch */}
          <div className="flex space-x-2 mt-4">
            {["id", "en", "ko"].map((l) => (
              <Link
                key={l}
                href={switchLang(l)}
                className={`px-3 py-1 rounded-md text-sm ${
                  lang === l ? "bg-[#0589ee] text-white font-semibold" : "hover:bg-gray-100"
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
