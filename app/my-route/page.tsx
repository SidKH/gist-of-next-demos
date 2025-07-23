import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Form from "next/form";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  const { query } = await searchParams;
  return (
    <div className="max-w-md mx-auto py-16">
      <Form className="flex gap-2 mb-8" action="">
        <Input type="search" name="query" />
        <Button variant="outline" type="submit">
          Search
        </Button>
      </Form>
      <Suspense
        key={query as string}
        fallback={
          <div className="flex justify-center items-center h-100">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        }
      >
        <TVShows query={query as string} />
      </Suspense>
    </div>
  );
}

async function TVShows({ query }: { query: string }) {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${query}`
  );
  const data = await response.json();
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map(
        (show: {
          show: {
            id: number;
            image: { medium: string };
            name: string;
          };
        }) => (
          <div key={show.show.id}>
            <img
              src={show.show.image.medium}
              alt={show.show.name}
              className="w-full h-full object-cover"
            />
          </div>
        )
      )}
    </div>
  );
}
