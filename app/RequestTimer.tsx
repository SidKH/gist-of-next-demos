"use client";

import { Suspense, use, useEffect, useState } from "react";

export function RequestTimer({
  dataPromise,
}: {
  dataPromise: Promise<string>;
}) {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    console.log("data effect");
    dataPromise.then((data) => {
      setData(data);
    });
  }, [dataPromise]);

  return (
    <div className="text-center">
      <Timer stop={!!data} />
      <Suspense fallback={<p>Loading...</p>}>
        <Data dataPromise={dataPromise} />
      </Suspense>
    </div>
  );
}

function Data({ dataPromise }: { dataPromise: Promise<string> }) {
  const data = use(dataPromise);
  return <p>{data}</p>;
}

function Timer({ stop }: { stop: boolean }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("timer effect");
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
