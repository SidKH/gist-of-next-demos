import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchBook, fetchRating } from "@/lib/data";
import { Suspense } from "react";

export default async function Page() {
  const book = await fetchBook();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="max-w-xl flex w-full gap-6">
        <Image
          src={book.image}
          className="flex-shrink-0"
          width={190.5}
          height={300}
          alt={book.name}
        />
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
            {book.name}
          </h1>
          <p className="mb-2">{book.description}</p>
          <Suspense fallback={<Skeleton className="mt-3 w-32 h-4" />}>
            <Rating />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

async function Rating() {
  const rating = await fetchRating(); // uses cookies
  return (
    <div className="flex items-center gap-1 items-center">
      <span className="text-sm font-bold mr-2">{rating}</span>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>{star <= Math.round(rating) ? "★" : "☆"}</span>
      ))}
    </div>
  );
}
