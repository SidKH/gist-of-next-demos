import ReactArticleDemo from "@/components/react-article-demo";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-6 py-14 sm:py-20">
        <span
          hidden
          dangerouslySetInnerHTML={{ __html: "<!-- Article demo -->" }}
        />
        <ReactArticleDemo />
      </main>
    </div>
  );
}
