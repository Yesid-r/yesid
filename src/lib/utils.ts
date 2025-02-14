import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatUrl = (url: string): string => {
  return url.startsWith('http') ? url : `https://${url}`;
};