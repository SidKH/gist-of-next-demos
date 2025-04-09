export async function getAllSlugs() {
  return Promise.resolve(["hello"]);
}

export async function getPost(slug: string) {
  console.log(slug);
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );
  return Promise.resolve({
    id: "1",
    title: "My blog post",
    content: `Buridan's ass is an illustration of a paradox in philosophy in the conception of free will. It refers to a hypothetical situation wherein an ass (or donkey) that is equally hungry and thirsty is placed precisely midway between a stack of hay and a pail of water. Since the paradox assumes the ass will always go to whichever is closer, it dies of both hunger and thirst since it cannot make any rational decision between the hay and water.[1] A common variant of the paradox substitutes the hay and water for two identical piles of hay; the ass, unable to choose between the two, dies of hunger.`,
  });
}

export async function getViews(id: string) {
  console.log(id);

  await new Promise((resolve) =>
    setTimeout(resolve, 500)
  );
  // Get current timestamp in seconds
  const now = Math.floor(Date.now() / 1000);

  // Use the last 6 digits of the timestamp as a base
  const base = now % 1000000;

  // Generate a view count between 100 and 10000
  // This creates a number that increases over time but stays within reasonable bounds
  const views = 100 + (base % 9900);

  return views;
}
