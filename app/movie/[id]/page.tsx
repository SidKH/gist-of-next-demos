import { fetchMovie, fetchMoviesInTheaters } from "@/lib/data";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

export default async function MoviePage(props: PageProps<"/movie/[id]">) {
  return (
    <div className="flex justify-center items-center h-screen divide-x">
      <Pagination />
      <Suspense fallback={<MovieSkeleton />}>
        <Movie params={props.params} />
      </Suspense>
    </div>
  );
}

async function Movie({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movie = await fetchMovie(id);
  return (
    <div className="flex gap-6 max-w-4xl items-start">
      <Image
        key={movie.id}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={500}
        height={750}
        className="w-44 h-auto aspect-500/750 rounded-lg shadow-lg shrink-0"
      />
      <div className="flex flex-col w-60">
        <h2 className="font-bold mb-1">{movie.title}</h2>
        <p className="text-muted-foreground text-sm mb-3">
          {new Date(movie.release_date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="text-muted-foreground text-sm max-h-40">
          {movie.overview.length > 200
            ? movie.overview.slice(0, 200) + "..."
            : movie.overview}
        </p>
      </div>
    </div>
  );
}

async function Pagination() {
  "use cache";
  const movies = await fetchMoviesInTheaters();
  return (
    <div className="grid grid-cols-4 gap-2 pr-4 mr-4 border-r ">
      {movies.slice(0, 16).map((movie) => (
        <Link href={`/movie/${movie.id}`} key={movie.id}>
          <Image
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
            alt={movie.title}
            width={92}
            height={138}
            className="w-10 h-auto rounded shadow-sm hover:shadow-md transition-shadow"
          />
        </Link>
      ))}
    </div>
  );
}

function MovieSkeleton() {
  return (
    <div className="flex gap-6 max-w-4xl items-start">
      <div className="w-44 h-auto aspect-500/750 rounded-lg shadow-lg shrink-0">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="flex flex-col w-60">
        <Skeleton className="w-2/3 h-4 mb-2 mt-1" />
        <Skeleton className="w-1/3 h-4" />
      </div>
    </div>
  );
}
