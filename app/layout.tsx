import { cookies, headers } from 'next/headers';
import { defaultLanguage, languages, getTranslations, Language } from '@/locales';
import Layout from '@/components/layout/Layout';
import { I18nProvider } from '@/components/custom/I18nProvider';
import './globals.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. قراءة اللغة من الكوكيز
  const cookieStore = await cookies();
  let lang = cookieStore.get('lang')?.value;

  // 2. إن لم توجد، نقرأ من متصفح الزائر
  if (!lang || !languages.includes(lang as Language)) {
    const acceptLanguage = await headers().get('accept-language') || '';
    const preferred = acceptLanguage.split(',')[0]?.split('-')[0];
    if (preferred && languages.includes(preferred as Language)) {
      lang = preferred;
    } else {
      lang = defaultLanguage;
    }
  }

  // 3. تحميل الترجمات
  const translations = getTranslations(lang as Language);

  // 4. تحديد اتجاه النص
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={lang} dir={dir}>
      <body>
        <I18nProvider lang={lang as Language} translations={translations}>
          <Layout>{children}</Layout>
        </I18nProvider>
      </body>
    </html>
  );
}
