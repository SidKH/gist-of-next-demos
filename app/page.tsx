import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col p-24 divide-y">
      {[...Array(100)].map((_, index) => (
        <Link
          className="py-6"
          key={index}
          href={`/my-route/${index + 1}`}
        >
          Route {index + 1}
        </Link>
      ))}
    </div>
  );
}
