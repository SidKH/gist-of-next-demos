import { Loader2 } from "lucide-react";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getMovieTrailer(title: string, year: string) {
  await sleep(1000);

  const apiKey = process.env.TMDB_API_KEY;
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
    title
  )}&year=${year}`;

  const searchRes = await fetch(searchUrl);
  const searchData = await searchRes.json();

  if (searchData.results && searchData.results.length > 0) {
    const movieId = searchData.results[0].id;
    const videoUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;

    const videoRes = await fetch(videoUrl);
    const videoData = await videoRes.json();

    // Find the first trailer in the results
    const trailer = videoData.results.find(
      (video: any) => video.type === "Trailer"
    );

    return trailer ? { key: trailer.key, name: trailer.name } : null;
  }

  return null;
}

export function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <Loader2 className="w-8 h-8 animate-spin" />
    </div>
  );
}

export function MovieTrailer({ trailer }: { trailer: any }) {
  return (
    <div className="flex flex-col gap-4">
      <iframe
        className="rounded-lg"
        width="500"
        height="315"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title={trailer.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
