export async function getRandomDog() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    "https://dog.ceo/api/breeds/image/random"
  );
  const data = await response.json();
  return data.message;
}

export async function getRandomNumber(): Promise<number> {
  const response = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain"
  );
  const data = await response.text();
  return parseInt(data);
}
