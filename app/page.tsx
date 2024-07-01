import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center py-8">
      {Array.from(Array(80).keys()).map((i) => {
        return (
          <p className="text-muted-foreground" key={i}>
            Text
          </p>
        );
      })}
      <Link className="underline text-blue-600" href="/show/1">
        Link
      </Link>
    </div>
  );
}
