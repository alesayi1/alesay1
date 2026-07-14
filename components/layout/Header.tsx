'use client';

import { useI18n } from '../custom/I18nProvider';
import { setLanguage } from '@/lib/actions';
import { useTransition } from 'react';

export default function Header() {
  const { t, lang } = useI18n();
    const [isPending, startTransition] = useTransition();

      const toggleLanguage = () => {
          const newLang = lang === 'ar' ? 'en' : 'ar';
              startTransition(async () => {
                    await setLanguage(newLang);
                          window.location.reload(); // تحديث الصفحة بعد تغيير اللغة
                              });
                                };

                                  return (
                                      <header className="bg-gray-800 text-white p-4">
                                            <div className="container mx-auto flex justify-between items-center">
                                                    <h1 className="text-xl font-bold">{t('hello')}</h1>
                                                            <nav className="flex gap-4">
                                                                      <a href="/">{t('home')}</a>
                                                                                <a href="/about">{t('about')}</a>
                                                                                          <a href="/contact">{t('contact')}</a>
                                                                                                  </nav>
                                                                                                          <button
                                                                                                                    onClick={toggleLanguage}
                                                                                                                              disabled={isPending}
                                                                                                                                        className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition"
                                                                                                                                                >
                                                                                                                                                          {t('change_language')} ({lang})
                                                                                                                                                                  </button>
                                                                                                                                                                        </div>
                                                                                                                                                                            </header>
                                                                                                                                                                              );
                                                                                                                                                                              }