export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col gap-4 items-center p-8 text-center">
      <p className="leading-7">Dashboard layout</p>
      <div className="flex gap-2">
        <input placeholder="Type something..." />
      </div>
      <div className="mt-4 w-full flex-1 border rounded-lg h-full">
        {children}
      </div>
    </div>
  );
}
