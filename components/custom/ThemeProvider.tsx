'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { setTheme as setThemeAction } from '@/lib/actions';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
    toggleTheme: () => void;
    }

    const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

    export function ThemeProvider({
      children,
        initialTheme,
        }: {
          children: ReactNode;
            initialTheme: Theme;
            }) {
              const [theme, setTheme] = useState<Theme>(initialTheme);

                // تطبيق الثيم على عنصر html
                  useEffect(() => {
                      document.documentElement.classList.remove('light', 'dark');
                          document.documentElement.classList.add(theme);
                            }, [theme]);

                              const toggleTheme = async () => {
                                  const newTheme = theme === 'light' ? 'dark' : 'light';
                                      setTheme(newTheme);
                                          await setThemeAction(newTheme);
                                            };

                                              return (
                                                  <ThemeContext.Provider value={{ theme, toggleTheme }}>
                                                        {children}
                                                            </ThemeContext.Provider>
                                                              );
                                                              }

                                                              export function useTheme() {
                                                                const context = useContext(ThemeContext);
                                                                  if (!context) throw new Error('useTheme must be used within ThemeProvider');
                                                                    return context;
                                                                    }