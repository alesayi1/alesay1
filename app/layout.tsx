
import { headers, cookies } from 'next/headers';
import { defaultLanguage, languages, getTranslations, Language } from '@/locales';
import { I18nProvider } from '@/components/custom/I18nProvider';
import { ThemeProvider } from '@/components/custom/ThemeProvider';
import Layout from '@/components/layout/Layout';
import './globals.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // قراءة اللغة من الكوكيز أو المتصفح
  const cookieStore = await cookies();
  let lang = cookieStore.get('lang')?.value;
  if (!lang || !languages.includes(lang as Language)) {
    const acceptLanguage = (await headers()).get('accept-language') || '';
    const preferred = acceptLanguage.split(',')[0]?.split('-')[0];
    lang = preferred && languages.includes(preferred as Language) ? preferred : defaultLanguage;
  }
  const translations = getTranslations(lang as Language);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  // قراءة الثيم من الكوكيز
  const theme = cookieStore.get('theme')?.value === 'dark' ? 'dark' : 'light';

  return (
    <html lang={lang} dir={dir} className={theme}>
      <body>
        <ThemeProvider initialTheme={theme}>
          <I18nProvider lang={lang as Language} translations={translations}>
            <Layout>{children}</Layout>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}