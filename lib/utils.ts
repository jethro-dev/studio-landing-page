import { useLenisStateStore } from "@/hooks/use-lenis-state-store";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
