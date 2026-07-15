'use server';

import { cookies } from 'next/headers';
import { languages, Language } from '@/locales';

export async function setLanguage(lang: string) {
    if (!languages.includes(lang as Language)) {
        throw new Error('Invalid language');
    }
   (await cookies()).set('lang', lang);
}

export async function setTheme(theme: 'light' | 'dark') {
    (await cookies()).set('theme', theme);
}