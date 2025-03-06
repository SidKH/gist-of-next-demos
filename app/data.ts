export async function fetchMetadata() {
  console.log("fetching metadata");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    title: "Hello World",
  };
}

export async function fetchData() {
  console.log("fetching data");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    content: "Content of the page",
  };
}
