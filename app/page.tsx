export const dynamic = "force-dynamic";

import { ClientComponent } from "./client-component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <ClientComponent />
      <ServerComponent />
    </main>
  );
}

async function ServerComponent() {
  const { message } = await fetch(
    "https://dog.ceo/api/breeds/image/random"
  ).then((res) => res.json());

  return (
    <div>
      <img className="max-h-[50vh] max-w-[50vw]" src={message} alt="dog" />
    </div>
  );
}
