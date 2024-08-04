import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const trimContent = (content: string, wordCount: number) => {
  return content.length > wordCount
    ? `${content.substring(0, wordCount)}...`
    : content.substring(0, wordCount);
};
