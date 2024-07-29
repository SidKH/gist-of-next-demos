"use client";
import { cn } from "@/lib/utils";
import { useState, useTransition } from "react";

export default function Page() {
  const [tab, setTab] = useState(1);
  return (
    <>
      <div className="p-4 max-w-sm mx-auto flex justify-center gap-5 border-b">
        <TabButton onClick={() => setTab(1)} isActive={tab === 1}>
          Tab 1
        </TabButton>
        <TabButton onClick={() => setTab(2)} isActive={tab === 2}>
          Tab 2
        </TabButton>
        <TabButton onClick={() => setTab(3)} isActive={tab === 3}>
          Tab 3
        </TabButton>
      </div>
      {tab === 1 && <Tab1 />}
      {tab === 2 && <Tab2 />}
      {tab === 3 && <Tab3 />}
    </>
  );
}

function Tab1() {
  return <p className="text-3xl font-bold mt-40 text-center">Tab 1</p>;
}

function SlowComponent() {
  let startTime = performance.now();
  while (performance.now() - startTime < 10) {}
  return <li className="item">Slow component (10ms)</li>;
}

function Tab2() {
  const items = [];
  for (let i = 0; i < 100; i++) {
    items.push(<SlowComponent key={i} />);
  }
  return (
    <ul className="text-center max-w-sm mx-auto overflow-auto h-[50vh]">
      {items}
    </ul>
  );
}

function Tab3() {
  return <p className="text-3xl font-bold mt-40 text-center">Tab 3</p>;
}

function TabButton({
  children,
  isActive,
  onClick,
}: {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      className={cn(isActive && "text-pink-500", isPending && "opacity-50")}
      onClick={() => {
        startTransition(() => {
          onClick();
        });
      }}
    >
      {children}
    </button>
  );
}
