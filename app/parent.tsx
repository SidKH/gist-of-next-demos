"use cache";

export async function Parent({ children }: { children: React.ReactNode }) {
  const randomNumber = await fetch(
    "https://www.randomnumberapi.com/api/v1.0/random?count=1%key=1"
  )
    .then((res) => res.json())
    .then((data) => data[0]);

  return (
    <div className="p-8 border rounded-lg bg-stone-50">
      <h2 className="font-bold">Parent (cached)</h2>
      <p>
        Random number:{" "}
        <strong className="w-4 inline-flex">{randomNumber}</strong>
      </p>
      {children}
    </div>
  );
}
