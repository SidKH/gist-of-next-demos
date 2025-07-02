// #region imports
import { getProducts } from "@/lib/data";
// #endregion
import { notFound } from "next/navigation";

export default async function Products({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const products = await getProducts(category);

  if (!products) {
    notFound();
  }

  return (
    <div>
      <div>Hello world</div>
    </div>
  );
}
