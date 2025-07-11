import { AppLink } from "@/components/app-link";

export default function Home() {
  return (
    <ul className="flex flex-col p-24 divide-y">
      {[...Array(100)].map((_, index) => (
        <li key={index} className="py-6">
          <AppLink
            className="hover:underline text-sm"
            href={`/my-route/${index + 1}`}
          >
            Route {index + 1}
          </AppLink>
        </li>
      ))}
    </ul>
  );
}
