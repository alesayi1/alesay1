'use client';

import { createContext, useContext, ReactNode } from 'react';
import { Language } from '@/locales';

interface I18nContextType {
    lang: Language;
    t: (key: string) => string;
    dir: 'ltr' | 'rtl';
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({
    children,
    lang,
    translations,
}: {
    children: ReactNode;
    lang: Language;
    translations: Record<string, string>;
}) {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    const t = (key: string) => translations[key] || key;

    return (
        <I18nContext.Provider value={{ lang, t, dir }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) throw new Error('useI18n must be used within I18nProvider');
    return context;
}