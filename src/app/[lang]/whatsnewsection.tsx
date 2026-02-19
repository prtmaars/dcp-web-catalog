"use client";

import { useState } from "react";
import { whatsNewData, getDefaultColor } from "./whatsnew";
import { translations, LangType } from "@/i18n/translations";

type Props = {
  lang: LangType;
};

export default function WhatsNewSection({ lang }: Props) {
  const [showAll, setShowAll] = useState(false);

  const dict = translations[lang];

  const visibleItems = showAll
    ? whatsNewData
    : whatsNewData.slice(0, 5);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">
        {dict.home.whatsNew}
      </h2>

      <div className="space-y-2">
        {visibleItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start text-gray-700 border-b pb-2"
          >
            <span className="w-28 font-mono text-sm">{item.date}</span>
            <span
              className="ml-1 font-semibold"
              style={{ color: getDefaultColor(item.type) }}
            >
              [{item.type}]
            </span>
            <span className="ml-2">
              {item.description[lang]}
            </span>
          </div>
        ))}
      </div>

      {whatsNewData.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 text-sm font-semibold text-blue-600 hover:underline"
        >
          {showAll
            ? `${dict.home.whatsNewShowLatest} ▲`
            : `${dict.home.whatsNewViewAll} ▼`
          }
        </button>
      )}
    </div>
  );
}
