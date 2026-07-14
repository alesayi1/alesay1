'use server';

import { cookies } from 'next/headers';
import { languages, Language } from '@/locales';

export async function setLanguage(lang: string) {
  if (!languages.includes(lang as Language)) {
      throw new Error('Invalid language');
        }
          cookies().set('lang', lang);
          }