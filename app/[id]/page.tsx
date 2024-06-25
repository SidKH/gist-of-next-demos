import { Show } from "@/types";

type Params = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Params) {
  const show: Show = await fetch(
    `https://api.tvmaze.com/shows/${params.id}`
  ).then((res) => res.json());

  return (
    <main className="max-w-2xl py-8 px-4 mx-auto">
      <div className="flex items-start gap-5">
        <img
          className="rounded-lg h-auto"
          src={show.image?.medium}
          alt={show.name}
        />
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold mb-3 tracking-tight lg:text-5xl">
            {show.name}
          </h1>
          <div
            className="leading-7"
            dangerouslySetInnerHTML={{ __html: show.summary }}
          />
        </div>
      </div>
    </main>
  );
}
