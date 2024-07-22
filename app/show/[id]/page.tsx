import { Show } from "@/lib/definitions";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const show: Show = await fetch(
    `http://api.tvmaze.com/shows/${params.id}`
  ).then((res) => res.json());

  return (
    <div className="w-screen mt-20 flex justify-center items-center px-8 max-w-2xl mx-auto">
      <div className="flex gap-6 items-start">
        <Image
          className="shrink-0 rounded-lg shadow-lg"
          width={210}
          height={295}
          src={show.image.medium}
          alt={show.name}
        />
        <div>
          <h1 className="text-3xl mb-2 font-bold tracking-tight">
            {show.name}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: show.summary }} />
        </div>
      </div>
    </div>
  );
}
