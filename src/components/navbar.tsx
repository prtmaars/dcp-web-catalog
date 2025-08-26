"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { translations, LangType } from "@/i18n/translations";

export default function Navbar() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const lang = (segments[1] as LangType) || "en";
  const t = translations[lang].navbar;

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const switchLang = (newLang: string) => {
    const newPath = ["/", newLang, ...segments.slice(2)].join("/");
    return newPath.replace(/\/+/, "/");
  };

  const menuItems = [
    { href: `/${lang}`, label: t.home },
    { href: `/${lang}/locomotives`, label: t.locomotives },
    { href: `/${lang}/rollingstocks`, label: t.rollingstocks },
    { href: `/${lang}/dieselmultipleunit`, label: t.dieselmultipleunit },
    { href: `/${lang}/objects`, label: t.objects },
    { href: `/${lang}/tutorial`, label: t.tutorial },
    { href: `/${lang}/contact`, label: t.contact },
  ];

  return (
    <>
      <nav className="bg-white text-black px-6 py-3 flex items-center justify-between shadow-md fixed top-0 left-0 w-full z-50">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center space-x-2">
          <Image src="/logo.png" alt="DCP Logo" width={75} height={75} priority />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, i) => (
            <Link key={i} href={item.href} className="hover:text-gray-200">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Hamburger / mobile button */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span className="material-icons">{t.menu}</span>
        </button>

        {/* Language Switch */}
        <div className="hidden md:flex space-x-3">
          {["id", "en", "ko"].map((l) => (
            <Link
              key={l}
              href={switchLang(l)}
              className={`px-2 py-1 rounded ${
                lang === l ? "bg-[#0589ee] text-white font-semibold" : "hover:underline"
              }`}
            >
              {l.toUpperCase()}
            </Link>
          ))}
        </div>
      </nav>

      {/* Sidebar overlay */}
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
        <div className="flex flex-col px-4 py-4 space-y-4">
          {menuItems.map((item, i) => (
            <Link key={i} href={item.href} onClick={() => setSidebarOpen(false)}>
              {item.label}
            </Link>
          ))}
          {/* Mobile language switch */}
          <div className="flex space-x-2 mt-4">
            {["id", "en", "ko"].map((l) => (
              <Link
                key={l}
                href={switchLang(l)}
                className={`px-2 py-1 rounded ${
                  lang === l ? "bg-[#0589ee] text-white font-semibold" : "hover:underline"
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Optional: overlay behind sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
