import Image from "next/image";
import Search from "./search";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const shows: Show[] = await fetch(
    `https://api.tvmaze.com/search/shows?q=${searchParams.q}`,
    { cache: "no-store" }
  ).then((res) => res.json());

  await sleep(500);

  return (
    <main className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col gap-4 w-[600px] mx-auto">
        <Search />
        <ul className="grid grid-cols-5 gap-4 h-[300px]">
          {shows.map((show) => (
            <li key={show.show.id}>
              <Image
                src={show.show.image?.medium}
                alt={show.show.name}
                width={100}
                height={100}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

type Show = {
  score: number;
  show: {
    id: number;
    image: {
      medium: string;
    };
    name: string;
  };
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
