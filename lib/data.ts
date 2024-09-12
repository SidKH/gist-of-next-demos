export async function getUser() {
  await sleep(300);
  return {
    name: "John Doe",
    email: "john.doe@example.com",
    id: "123",
  };
}

export async function getPrimaryData(id: string) {
  await sleep(1000);
  return "Primary Data";
}

export async function getSecondaryData(id: string) {
  await sleep(2000);
  return "Secondary Data";
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
