'use client';

import { useI18n } from './I18nProvider';
import { setLanguage } from '@/lib/actions';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const { lang } = useI18n();
    const [isPending, startTransition] = useTransition();

      const toggleLanguage = () => {
          const newLang = lang === 'ar' ? 'en' : 'ar';
              startTransition(async () => {
                    await setLanguage(newLang);
                          window.location.reload();
                              });
                                };

                                  return (
                                      <button
                                            onClick={toggleLanguage}
                                                  disabled={isPending}
                                                        className="flex items-center gap-1 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                                              aria-label="Change language"
                                                                  >
                                                                        {lang === 'ar' ? (
                                                                                <span className="text-xl">🇺🇸</span> // أيقونة العلم الأمريكي للإنجليزية
                                                                                      ) : (
                                                                                              <span className="text-xl">🇸🇦</span> // أيقونة العلم السعودي للعربية
                                                                                                    )}
                                                                                                          <span className="text-sm font-medium">{lang === 'ar' ? 'EN' : 'AR'}</span>
                                                                                                              </button>
                                                                                                                );
                                                                                                                }