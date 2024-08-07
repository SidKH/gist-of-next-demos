import fs from "fs";
import path from "path";

export default function Home() {
  async function action() {
    "use server";
    const filePath = path.join(process.cwd(), "number.txt");
    let number = parseInt(fs.readFileSync(filePath, "utf8"));
    console.log(`Action ${number}`);
    await sleep(1000);
    fs.writeFileSync(filePath, (number + 1).toString(), "utf8");
  }

  return (
    <main className="flex min-h-screen justify-center items-center">
      <form action={action}>
        <button className="px-4 py-2 bg-stone-950 active:ring ring-offset-2 ring-stone-950 rounded-md text-white text-sm">
          Server action
        </button>
      </form>
    </main>
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
