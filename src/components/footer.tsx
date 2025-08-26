"use client";

import { usePathname } from "next/navigation";
import { translations, LangType } from "@/i18n/translations";

export default function Footer() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const lang = (segments[1] as LangType) || "en";

  const t = translations[lang].footer;

  return (
    <footer className="bg-[#4d4f4e] text-white text-sm text-center py-4 mt-10 border-t">
      <p>
        © {new Date().getFullYear()} DCP Trainz Production
      </p>
    </footer>
  );
}
