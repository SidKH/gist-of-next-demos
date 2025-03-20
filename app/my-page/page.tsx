export const dynamic = "force-dynamic";

export default async function MyPage() {
  return <MyComponent />;
}

async function MyComponent() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="flex h-screen w-screen items-center justify-center text-2xl font-medium">
      MyPage
    </div>
  );
}
