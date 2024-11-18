import { cookies } from "next/headers";

export async function fetchRating() {
  await cookies();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 4.7;
}

export async function fetchBook() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    name: "Siddhartha",
    author: "Hermann Hesse",
    price: 100,
    image: "/siddhartha.png",
    description:
      "Though set in a place and time far removed from the Germany of 1922, the year of the book’s debut, the novel is infused with the sensibilities of Hermann Hesse’s time, synthesizing disparate philosophies–Eastern religions, Jungian archetypes, Western individualism–into a unique vision of life as expressed through one man’s search for meaning.",
  };
}
