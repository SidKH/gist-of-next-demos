import { after } from "next/server";

export function ChildComponent() {
  after(() => {
    logPageViewTo3rdParty();
  });

  return <div>Child Component</div>;
}

async function logPageViewTo3rdParty() {
  // Simulate latency
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Test request with webhook.site
  await fetch("https://webhook.site/6ceb20ef-5afe-4774-a790-780593058b9f");
}
