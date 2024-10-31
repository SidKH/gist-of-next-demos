export async function Child() {
  const randomNumber = await fetch(
    "https://www.randomnumberapi.com/api/v1.0/random?count=1%key=2"
  )
    .then((res) => res.json())
    .then((data) => data[0]);

  return (
    <div>
      <h2 className="font-bold">Child</h2>
      <p>Random number: {randomNumber}</p>
    </div>
  );
}
