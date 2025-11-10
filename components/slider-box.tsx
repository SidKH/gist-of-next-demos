"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

export function SliderBox() {
  const [value, setValue] = useState([0]);
  return (
    <div className="flex bg-white/5 border-white/50 size-60 border border-dashed my-8 rounded-md p-8 flex-col gap-2 items-center justify-center">
      <p className="text-white/50">Client sate</p>
      <p className="text-5xl font-bold mb-4">{value}</p>
      <Slider
        defaultValue={value}
        max={100}
        step={1}
        onValueChange={setValue}
      />
    </div>
  );
}
