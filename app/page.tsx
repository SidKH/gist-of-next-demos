export const dynamic = "force-dynamic";

import { ClientComponent } from "./ClientComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <ClientComponent />
    </main>
  );
}
