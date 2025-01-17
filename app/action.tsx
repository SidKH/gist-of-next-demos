"use server";

export async function counter(previousState: number) {
  if (!previousState) {
    previousState = 1;
  }

  return previousState + 1;
}
