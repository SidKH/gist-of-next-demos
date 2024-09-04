import useSWR from "swr";

export default async function Page({ params }: { params: { id: string } }) {
  const { data, error, isLoading } = useSWR(
    `https://official-joke-api.appspot.com/jokes/programming/${params.id}`,
    fetcher
  );

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {isLoading ? "Loading..." : error ? "Error" : data.setup}
    </div>
  );
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
