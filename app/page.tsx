import { getItemsFromDb } from "@/lib/data";
import { ListItem } from "./list-item";

export const dynamic = "force-dynamic";

export default async function Home() {
  const items = await getItemsFromDb();

  return (
    <main className="max-w-lg mx-auto py-8 px-4">
      <ul className="divide-y">
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </main>
  );
}
