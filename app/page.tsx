import { ClientComponent } from "./client-component";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen justify-center text-4xl font-bold">
      Hello world
      <ClientComponent />
    </div>
  );
}
