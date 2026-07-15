'use client';

import { useState, useRef, useEffect } from 'react';
import { useI18n } from './I18nProvider';

// أيقونات SVG بسيطة (يمكنك استبدالها بأي أيقونات)
const IconMap = {
  sites: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                  ),
                    apps: (
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 7h14M5 17h14M5 12h14" />
                                  </svg>
                                    ),
                                      ai: (
                                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                    </svg>
                                                      ),
                                                        consult: (
                                                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                                      </svg>
                                                                        ),
                                                                        };

                                                                        export default function ServicesDropdown() {
                                                                          const { t } = useI18n();
                                                                            const [isOpen, setIsOpen] = useState(false);
                                                                              const dropdownRef = useRef<HTMLDivElement>(null);

                                                                                // إغلاق القائمة عند الضغط خارجها
                                                                                  useEffect(() => {
                                                                                      const handleClickOutside = (event: MouseEvent) => {
                                                                                            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                                                                                                    setIsOpen(false);
                                                                                                          }
                                                                                                              };
                                                                                                                  document.addEventListener('mousedown', handleClickOutside);
                                                                                                                      return () => document.removeEventListener('mousedown', handleClickOutside);
                                                                                                                        }, []);

                                                                                                                          const services = [
                                                                                                                              { id: 'sites', label: 'مواقع', icon: IconMap.sites },
                                                                                                                                  { id: 'apps', label: 'تطبيقات', icon: IconMap.apps },
                                                                                                                                      { id: 'ai', label: 'نماذج ذكاء اصطناعي', icon: IconMap.ai },
                                                                                                                                          { id: 'consult', label: 'طلب استشارة', icon: IconMap.consult },
                                                                                                                                            ];

                                                                                                                                              return (
                                                                                                                                                  <div className="relative" ref={dropdownRef}>
                                                                                                                                                        <button
                                                                                                                                                                onClick={() => setIsOpen(!isOpen)}
                                                                                                                                                                        className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-1"
                                                                                                                                                                              >
                                                                                                                                                                                      {t('services') || 'الخدمات'}
                                                                                                                                                                                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                                                                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                                                                                                                                                                </svg>
                                                                                                                                                                                                                      </button>

                                                                                                                                                                                                                            {isOpen && (
                                                                                                                                                                                                                                    <div className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50 grid grid-cols-2 gap-4">
                                                                                                                                                                                                                                              {services.map((service) => (
                                                                                                                                                                                                                                                          <a
                                                                                                                                                                                                                                                                        key={service.id}
                                                                                                                                                                                                                                                                                      href={`/services/${service.id}`}
                                                                                                                                                                                                                                                                                                    className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-center"
                                                                                                                                                                                                                                                                                                                >
                                                                                                                                                                                                                                                                                                                              <div className="mb-2">{service.icon}</div>
                                                                                                                                                                                                                                                                                                                                            <span className="text-sm font-medium">{service.label}</span>
                                                                                                                                                                                                                                                                                                                                                        </a>
                                                                                                                                                                                                                                                                                                                                                                  ))}
                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                )}
                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                                      }