import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Hàm gộp className:
 * - clsx: xử lý điều kiện (true/false, null, undefined)
 * - tailwind-merge: merge đúng ưu tiên của Tailwind (vd: p-2 bị ghi đè bởi p-4)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}