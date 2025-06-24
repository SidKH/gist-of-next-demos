import Link from "next/link";

export async function generateStaticParams() {
  // Popular products
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function Products() {
  return (
    <ul className="grid grid-cols-3 gap-4 max-w-xl mx-auto py-10">
      {Array.from({ length: 12 }).map((_, index) => (
        <li key={index}>
          <Link
            className="w-full hover:border-stone-300 bg-white aspect-square border rounded-xl flex items-center justify-center"
            href={`/products/${index + 1}`}
          >
            Product {index + 1}
          </Link>
        </li>
      ))}
    </ul>
  );
}
