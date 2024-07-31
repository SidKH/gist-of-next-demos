"use client";

import { memo, useState } from "react";
import { exampleNames } from "./example-names";
import Avatar from "boring-avatars";

export default function Home() {
  const [color, setColor] = useState("#92A1C6");
  return (
    <main className="flex min-h-screen justify-center items-center flex-col p-8 gap-8">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <Avatars color={color} />
    </main>
  );
}

const Avatars = memo(function Avatars({ color }: { color: string }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      {exampleNames.map((name) => (
        <Avatar
          key={name}
          name={name}
          variant="beam"
          size="40px"
          colors={[color]}
        />
      ))}
    </div>
  );
});
