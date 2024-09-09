"use client";
import { useEffect, useState } from "react";

export function RequestTimer({
  dataPromise,
}: {
  dataPromise: Promise<string>;
}) {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    console.log("Data effect");
    dataPromise.then((data) => {
      setData(data);
    });
  }, [dataPromise]);

  return (
    <div className="text-center">
      <Timer stop={!!data} />
      <p className="mt-4">{!data ? "Loading..." : data}</p>
    </div>
  );
}

function Timer({ stop }: { stop: boolean }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("Timer effect");
    if (stop) return;
    const start = Date.now();
    const interval = setInterval(() => {
      setTime(Date.now() - start);
    }, 10);
    return () => clearInterval(interval);
  }, [stop]);

  return (
    <p className="text-3xl font-bold">
      <span className="tabular-nums">{time}</span>ms
    </p>
  );
}
