'use client';

import { useState, useEffect } from 'react';

const fullText = 'العيسائي';

export default function Logo() {
  const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
      const [scale, setScale] = useState(1);

        useEffect(() => {
            let index = 0;
                const interval = setInterval(() => {
                      if (index < fullText.length) {
                              setDisplayText(fullText.slice(0, index + 1));
                                      index++;
                                            } else {
                                                    clearInterval(interval);
                                                            setIsComplete(true);
                                                                  }
                                                                      }, 150); // سرعة ظهور الحروف

                                                                          return () => clearInterval(interval);
                                                                            }, []);

                                                                              // تأثير التكبير والتصغير بعد اكتمال النص
                                                                                useEffect(() => {
                                                                                    if (!isComplete) return;
                                                                                        let growing = true;
                                                                                            const animation = setInterval(() => {
                                                                                                  setScale((prev) => {
                                                                                                          if (growing) {
                                                                                                                    if (prev >= 1.2) {
                                                                                                                                growing = false;
                                                                                                                                            return prev;
                                                                                                                                                      }
                                                                                                                                                                return prev + 0.02;
                                                                                                                                                                        } else {
                                                                                                                                                                                  if (prev <= 0.8) {
                                                                                                                                                                                              growing = true;
                                                                                                                                                                                                          return prev;
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                              return prev - 0.02;
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                }, 50);

                                                                                                                                                                                                                                                    return () => clearInterval(animation);
                                                                                                                                                                                                                                                      }, [isComplete]);

                                                                                                                                                                                                                                                        return (
                                                                                                                                                                                                                                                            <span
                                                                                                                                                                                                                                                                  className="font-arabic text-3xl font-bold transition-all duration-200"
                                                                                                                                                                                                                                                                        style={{
                                                                                                                                                                                                                                                                                transform: `scale(${scale})`,
                                                                                                                                                                                                                                                                                        display: 'inline-block',
                                                                                                                                                                                                                                                                                                fontFamily: "'Scheherazade New', 'Amiri', serif", // محاكاة خط الرقعة
                                                                                                                                                                                                                                                                                                      }}
                                                                                                                                                                                                                                                                                                          >
                                                                                                                                                                                                                                                                                                                {displayText}
                                                                                                                                                                                                                                                                                                                    </span>
                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                      }