export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Background />
      Home
    </main>
  );
}

function Background() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="w-full h-[1px] bg-zinc-200 top-16 absolute" />
      <div className="w-full h-[1px] bg-zinc-200 bottom-16 absolute" />
      <div className="h-full w-[1px] bg-zinc-200 left-16 absolute" />
      <div className="h-full w-[1px] bg-zinc-200 right-16 absolute" />
      <div className="w-8 absolute top-16 left-12 h-[1px] bg-zinc-500" />
      <div className="w-8 absolute top-16 right-12 h-[1px] bg-zinc-500" />
      <div className="w-8 absolute bottom-16 left-12 h-[1px] bg-zinc-500" />
      <div className="w-8 absolute bottom-16 right-12 h-[1px] bg-zinc-500" />
      <div className="h-8 absolute bottom-12 left-16 w-[1px] bg-zinc-500" />
      <div className="h-8 absolute bottom-12 right-16 w-[1px] bg-zinc-500" />
      <div className="h-8 absolute top-12 left-16 w-[1px] bg-zinc-500" />
      <div className="h-8 absolute top-12 right-16 w-[1px] bg-zinc-500" />
    </div>
  );
}
