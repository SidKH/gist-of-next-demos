export async function getUser() {
  await sleep(300);
  return {
    name: "John Doe",
    email: "john.doe@example.com",
    id: "123",
  };
}

export async function getPrimaryContent(id: string) {
  await sleep(1000);
  return "Primary content";
}

export async function getSecondaryContent(id: string) {
  await sleep(2000);
  return "Secondary content";
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
