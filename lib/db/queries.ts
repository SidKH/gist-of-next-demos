export async function getUser() {
  await sleep(1000);
  return {
    name: "John Doe",
    email: "john.doe@example.com",
  };
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
