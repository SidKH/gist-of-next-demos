export async function getData() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  const data = await res.json();
  return data;
}

export async function getProducts(category: string) {
  console.log(category);
  return null;
}
