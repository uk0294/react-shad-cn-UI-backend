import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Original utility for combining class names (used by shadcn components)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format currency in CAD
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};