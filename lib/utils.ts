import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const links = [
  { href: "/page1", label: "Page1" },
  { href: "/page2", label: "Page2" },
  { href: "/page3", label: "Page3" },
];
