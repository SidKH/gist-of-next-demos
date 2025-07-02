// #region imports
import { notFound } from "next/navigation";
const CATEGORIES = ["pants", "accessories"];
// #endregion

export default async function Products({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!CATEGORIES.includes(category)) {
    notFound();
  }
  // #region rest of the code
  return (
    <div>
      <div>Hello world</div>
    </div>
  );
  // #endregion
}
