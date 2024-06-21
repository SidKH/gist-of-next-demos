export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col p-6 text-center">
      <p className="mb-6 leading-7 [&:not(:first-child)]:mt-6">
        Settings layout
      </p>
      <div className="flex-1 border rounded-lg h-full">{children}</div>
    </div>
  );
}
