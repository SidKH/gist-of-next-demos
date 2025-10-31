export async function fetchData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "Dynamic Data";
}