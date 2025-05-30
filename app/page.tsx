export const dynamic = "force-dynamic";

async function getDataA(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data A");
    }, 1000);
  });
}

async function getDataB(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data B");
    }, 1000);
  });
}

async function getDataC(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data C");
    }, 1000);
  });
}

export default async function Page() {
  const dataA = await getDataA();
  const dataB = await getDataB();
  const dataC = await getDataC();

  return (
    <div className="flex gap-4 items-center h-screen justify-center">
      <div>{dataA}</div>
      <div>{dataB}</div>
      <div>{dataC}</div>
    </div>
  );
}
