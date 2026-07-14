'use client';

import { useI18n } from '@/components/custom/I18nProvider';

export default function HomePage() {
  const { t } = useI18n();
    return (
        <div>
              <h1 className="text-3xl font-bold">{t('hello')}</h1>
                    <p className="mt-4">مرحباً بك في موقعنا متعدد اللغات.</p>
                        </div>
                          );
                          }