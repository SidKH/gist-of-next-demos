export const dynamic = "force-dynamic";

import { SWRConfig } from "swr";
import { RandomDog } from "./RandomDog";
import { getRandomDog, getRandomNumber } from "./data";
import { RandomNumber } from "./RandomNumber";

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
      <SWRConfig
        value={{
          fallback: { randomNumber: getRandomNumber() },
        }}
      >
        <RandomNumber />
      </SWRConfig>
    </main>
  );
}
