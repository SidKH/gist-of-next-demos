export const dynamic = "force-dynamic";

import { SWRConfig } from "swr";
import { RandomDog } from "./RandomDog";
import { getRandomDog } from "./data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <SWRConfig
        value={{
          fallback: { randomDog: getRandomDog() },
        }}
      >
        <RandomDog />
      </SWRConfig>
    </main>
  );
}
