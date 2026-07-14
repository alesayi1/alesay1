export const defaultLanguage = 'ar';
export const languages = ['ar', 'en'] as const;
export type Language = typeof languages[number];

import ar from './ar.json';
import en from './en.json';

export const translations = { ar, en };

export function getTranslations(lang: Language) {
  return translations[lang];
  }