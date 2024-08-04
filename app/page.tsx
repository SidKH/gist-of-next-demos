"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function getSnapshot() {
  return window.navigator.onLine;
}

export default function Home() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return (
    <main className="flex min-h-screen justify-center items-center">
      <h1 className="text-5xl tracking-tight font-extrabold">
        {isOnline ? (
          <span className="flex gap-2">
            👨‍💻
            <span>Online</span>
          </span>
        ) : (
          <span className="flex gap-2">
            🏄‍♂️
            <span>Offline</span>
          </span>
        )}
      </h1>
    </main>
  );
}
