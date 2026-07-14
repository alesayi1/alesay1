'use client';

import { useI18n } from '../custom/I18nProvider';

export default function Footer() {
  const { t } = useI18n();
    return (
        <footer className="bg-gray-900 text-white p-4 text-center">
              <p>&copy; 2025 {t('hello')}</p>
                  </footer>
                    );
                    }