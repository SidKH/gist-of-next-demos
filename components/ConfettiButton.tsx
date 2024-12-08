"use client";

import confetti from "canvas-confetti";
import { ImgHTMLAttributes } from "react";

export function ConfettiButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="active:grayscale active:scale-90"
      onClick={() => confetti()}
    >
      {children}
    </button>
  );
}
