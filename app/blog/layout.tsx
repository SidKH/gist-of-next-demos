export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="py-8 max-w-xl mx-auto">{children}</div>;
}
