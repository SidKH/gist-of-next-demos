import { getData } from "@/lib/data";

export async function MyComponent() {
  const data = await getData();

  return <h2>{data}</h2>;
}
