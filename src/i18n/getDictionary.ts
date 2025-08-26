import { translations, LangType } from "./translations";

export function getDictionary(lang: LangType) {
  return translations[lang];
}
