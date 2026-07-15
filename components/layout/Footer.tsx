'use client';

import { useI18n } from '../custom/I18nProvider';

// أيقونات التواصل الاجتماعي (SVG)
const socialIcons = {
  github: { color: '#333', svg: '<svg ...>' }, // اختصاراً سأكتب SVG مباشرة
  facebook: { color: '#1877F2', svg: '...' },
  twitter: { color: '#1DA1F2', svg: '...' },
  linkedin: { color: '#0A66C2', svg: '...' },
  youtube: { color: '#FF0000', svg: '...' },
  instagram: { color: '#E4405F', svg: '...' },
  whatsapp: { color: '#25D366', svg: '...' },
  messenger: { color: '#00B2FF', svg: '...' },
};

// لتجنب إطالة الكود، سأكتب أيقونات مبسطة لكن يمكنك استبدالها بالكامل.

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* الأقسام الثلاثة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* القسم الأول: روابط */}
          <div>
            <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400">{t('home')}</a></li>
              <li><a href="/about" className="hover:text-blue-400">{t('about')}</a></li>
              <li><a href="/services" className="hover:text-blue-400">الخدمات</a></li>
            </ul>
          </div>
          {/* القسم الثاني: روابط أخرى */}
          <div>
            <h4 className="font-bold text-lg mb-4">معلومات</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:text-blue-400">سياسة الخصوصية</a></li>
              <li><a href="/terms" className="hover:text-blue-400">الشروط والأحكام</a></li>
              <li><a href="/contact" className="hover:text-blue-400">{t('contact')}</a></li>
            </ul>
          </div>
          {/* القسم الثالث: الاشتراك عبر البريد */}
          <div>
            <h4 className="font-bold text-lg mb-4">اشترك في النشرة البريدية</h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="flex-1 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                اشتراك
              </button>
            </form>
          </div>
        </div>

        {/* قسم روابط التواصل الاجتماعي */}
        <div className="border-t border-gray-700 pt-6 flex flex-wrap justify-center gap-4">
          {Object.entries(socialIcons).map(([key, { color }]) => (
            <a
              key={key}
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
              style={{ backgroundColor: color }}
              aria-label={key}
            >
              {/* يمكن وضع SVG هنا، لكن اختصاراً سأضع الحرف الأول */}
              <span className="text-white font-bold text-sm">{key[0].toUpperCase()}</span>
            </a>
          ))}
        </div>

        <div className="text-center text-sm text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} العيسائي. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}