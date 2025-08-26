"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { translations, LangType } from "@/i18n/translations";

export default function Navbar() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const lang = (segments[1] as LangType) || "en";
  const t = translations[lang].navbar;

  const switchLang = (newLang: string) => {
    const newPath = ["/", newLang, ...segments.slice(2)].join("/");
    return newPath.replace(/\/+/, "/");
  };

  return (
    <nav className="bg-[#ffffff] text-black px-6 py-3 flex items-center justify-between shadow-md fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <Link href={`/${lang}`} className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="DCP Logo"
          width={75}
          height={75}
          priority
        />
      </Link>

      {/* Navigasi tengah */}
      <div className="space-x-6 hidden md:flex">
        <Link href={`/${lang}`} className="hover:text-gray-200">
          {t.home}
        </Link>
        <Link href={`/${lang}/locomotives`} className="hover:text-gray-200">
          {t.locomotives}
        </Link>
        <Link href={`/${lang}/rollingstocks`} className="hover:text-gray-200">
          {t.rollingstocks}
        </Link>
        <Link href={`/${lang}/dieselmultipleunit`} className="hover:text-gray-200">
          {t.dieselmultipleunit}
        </Link>
        <Link href={`/${lang}/objects`} className="hover:text-gray-200">
          {t.objects}
        </Link>
        <Link href={`/${lang}/tutorial`} className="hover:text-gray-200">
          {t.tutorial}
        </Link>
        <Link href={`/${lang}/contact`} className="hover:text-gray-200">
          {t.contact}
        </Link>
      </div>

      {/* Pilihan bahasa */}
      <div className="flex space-x-3">
        <Link
          href={switchLang("id")}
          className={`px-2 py-1 rounded ${
            lang === "id"
              ? "bg-[#0589ee] text-[#ffffff] font-semibold"
              : "hover:underline"
          }`}
        >
          ID
        </Link>
        <Link
          href={switchLang("en")}
          className={`px-2 py-1 rounded ${
            lang === "en"
              ? "bg-[#0589ee] text-[#ffffff] font-semibold"
              : "hover:underline"
          }`}
        >
          EN
        </Link>
        <Link
          href={switchLang("ko")}
          className={`px-2 py-1 rounded ${
            lang === "ko"
              ? "bg-[#0589ee] text-[#ffffff] font-semibold"
              : "hover:underline"
          }`}
        >
          KO
        </Link>
      </div>
    </nav>
  );
}
