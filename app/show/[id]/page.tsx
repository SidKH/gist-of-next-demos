function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Show({ params }: { params: { id: string } }) {
  const show = await fetch(`https://api.tvmaze.com/shows/${params.id}`).then(
    (res) => res.json()
  );

  await sleep(1000);

  return (
    <div className="flex min-h-screen justify-center items-center">
      <img className="rounded-lg object-cover" src={show.image.medium} />
    </div>
  );
}
