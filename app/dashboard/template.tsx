export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-route h-full flex flex-col gap-4 items-center p-8 text-center">
      {children}
    </div>
  );
}
