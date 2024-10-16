import Form from "next/form";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { query } = await searchParams;

  const searchQuery = query?.toString() ?? "";

  return (
    <main className="p-8 flex flex-col gap-4">
      <Form className="flex gap-2" action="/">
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          name="query"
          type="search"
          defaultValue={searchQuery}
        />
        <button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          type="submit"
        >
          Submit
        </button>
      </Form>
      <Suspense key={searchQuery} fallback={<ShowsSkelton />}>
        <Shows query={searchQuery} />
      </Suspense>
    </main>
  );
}

async function Shows({ query }: { query: string }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const tvShows = await fetch(
    `https://api.tvmaze.com/search/shows?q=${query}`
  ).then((res) => res.json());

  return (
    <div className="grid grid-cols-5 gap-4">
      {tvShows.map((show: Show) => (
        <div key={show.id} className="bg-stone-200 rounded-md overflow-hidden">
          <img
            src={show.show.image.medium}
            alt={show.show.name}
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
}

function ShowsSkelton() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="bg-stone-200 rounded-md overflow-hidden">
          <div className="h-[176px] w-40 animate-pulse bg-stone-200" />
        </div>
      ))}
    </div>
  );
}

interface Show {
  id: number;
  name: string;
  image: {
    medium: string;
  };
}
