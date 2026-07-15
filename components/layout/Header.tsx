'use client';

import { useState, useEffect } from 'react';
import Logo from '../custom/Logo';
import ToggleTheme from '../custom/ToggleTheme';
import LanguageSwitcher from '../custom/LanguageSwitcher';
import ServicesDropdown from '../custom/ServicesDropdown';
import { useI18n } from '../custom/I18nProvider';

export default function Header() {
  const { t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-all duration-300">
      {/* القسم الأول: الشريط المتحرك (يختفي عند التمرير) */}
      <div
        className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-1 text-sm transition-all duration-500 overflow-hidden ${isScrolled ? 'max-h-0 py-0' : 'max-h-10 py-1'
          }`}
      >
        <div className="animate-marquee whitespace-nowrap">
          <span>✨ أطلب الآن تطبيقك ✨ &nbsp;•&nbsp; استفد من عروضنا الحصرية</span>
        </div>
      </div>

      {/* القسم الثاني: الشعار + التبديلات (دائماً ظاهر) */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        <div className="flex items-center gap-3">
          <ToggleTheme />
          <LanguageSwitcher />
        </div>
      </div>

      {/* القسم الثالث: القائمة الرئيسية (يختفي عند التمرير) */}
      <nav
        className={`container mx-auto px-4 pb-3 flex items-center justify-center gap-6 text-sm font-medium transition-all duration-500 overflow-hidden ${isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-20 py-2 opacity-100'
          }`}
      >
        <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          {t('home')}
        </a>
        <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
          {t('about')}
        </a>
        <ServicesDropdown />
        {/* يمكن إضافة روابط أخرى */}
      </nav>
    </header>
  );
}