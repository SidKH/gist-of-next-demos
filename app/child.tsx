export async function Child() {
  const randomNumber = await fetch(
    "https://www.randomnumberapi.com/api/v1.0/random?count=1%key=2"
  )
    .then((res) => res.json())
    .then((data) => data[0]);

  return (
    <div className="p-8 border rounded-lg mt-8 bg-white">
      <h2 className="font-bold">Child</h2>
      <p>
        Random number:{" "}
        <strong className="w-4 inline-flex">{randomNumber}</strong>
      </p>
    </div>
  );
}
