"use cache";

export async function Parent({ children }: { children: React.ReactNode }) {
  const randomNumber = await fetch(
    "https://www.randomnumberapi.com/api/v1.0/random?count=1%key=1"
  )
    .then((res) => res.json())
    .then((data) => data[0]);

  return (
    <div>
      <h2 className="font-bold">Parent</h2>
      <p>Random number: {randomNumber}</p>
      {children}
    </div>
  );
}
