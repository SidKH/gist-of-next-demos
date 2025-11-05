export async function fetchRandomNumber() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return Math.floor(Math.random() * 100);
}