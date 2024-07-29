function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Page() {
  await sleep(1000);

  return <div className="text-3xl font-bold text-center mt-48">Contact</div>;
}
