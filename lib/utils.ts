import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
// يمكنك إضافة دوال مساعدة هنا إن احتجت
export const isServer = typeof window === 'undefined';