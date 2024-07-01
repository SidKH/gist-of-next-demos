export default async function Show() {
  const show = await fetch(`https://api.tvmaze.com/shows/1`).then((res) =>
    res.json()
  );

  return (
    <div className="flex min-h-screen justify-center items-center flex-col gap-3">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {show.name}
      </h2>
      <p className="leading-7">Rating: {show.rating.average}</p>
    </div>
  );
}
