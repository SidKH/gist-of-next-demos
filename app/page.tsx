import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Link className="underline" prefetch={true} href="/show/1">
        Link
      </Link>
    </div>
  );
}
