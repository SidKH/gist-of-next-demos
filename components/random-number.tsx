export async function RandomNumber() {
  const number = await fetch(
    `http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&r=${performance.now()}`
  ).then((res) => res.json());
  return (
    <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {number}
    </p>
  );
}

export function LoadingFallback() {
  return (
    <div className="h-[48px] flex justify-center items-center">Loading...</div>
  );
}
