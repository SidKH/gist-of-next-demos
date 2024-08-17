import { revalidatePath, revalidateTag } from "next/cache";

async function RandomNumber({ tagName }: { tagName: string }) {
  const res = await fetch(
    `https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=${tagName}`,
    { next: { tags: [tagName] } }
  );
  const randomNumber = await res.text();
  return (
    <div className="flex border shadow-md rounded-full px-8 py-4 w-80 justify-between items-center bg-white">
      <p className="text-sm">{tagName}</p>
      <p className="text-2xl font-bold">{randomNumber}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center bg-stone-50">
      <div className="max-w-xl flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <RandomNumber tagName="test_1" />
          <RandomNumber tagName="test_2" />
          <RandomNumber tagName="test_3" />
        </div>
        <hr />
        <form
          className="flex gap-2"
          action={async (formData) => {
            "use server";
            const tagName = formData.get("tagName") as string;
            revalidateTag(tagName);
          }}
        >
          <input
            name="tagName"
            placeholder="Tag Name"
            className="flex placeholder:text-stone-400 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-stone-950 text-white hover:bg-stone-950/90 h-10 px-4 py-2">
            Revalidate Tag
          </button>
        </form>
        <hr />
        <form
          action={async () => {
            "use server";
            revalidatePath("/");
          }}
        >
          <button className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-stone-950 text-white hover:bg-stone-950/90 h-10 px-4 py-2">
            Revalidate Path
          </button>
        </form>
      </div>
    </main>
  );
}
