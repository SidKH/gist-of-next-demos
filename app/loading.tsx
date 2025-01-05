"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <dotlottie-player
        src="https://lottie.host/99244bb4-cd58-4317-85f5-f66c7aaa34c1/9UjU159VuH.lottie"
        background="transparent"
        speed="1"
        style={{
          width: "300px",
          height: "300px",
        }}
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
}
