import { App } from "./app";

export default function Home() {
  "use memo";
  return (
    <div className="py-18 flex justify-center">
      <App />
    </div>
  );
}
