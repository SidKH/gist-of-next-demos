export async function getRandomDog() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return data.message;
}
