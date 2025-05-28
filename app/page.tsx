async function Mycomponent() {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  ).then((res) => res.json());
  return (
    <div className="w-48 h-48 border rounded-md p-8">
      {data.title}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex gap-4 items-center h-screen justify-center">
      <Mycomponent />
      <Mycomponent />
    </div>
  );
}
