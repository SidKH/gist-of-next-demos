import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { MultiBar, Presets } from "cli-progress";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Assuming multiBar is already defined somewhere in your code as:
const multiBar = new MultiBar(
  {
    clearOnComplete: false,
    hideCursor: true,
    format: (options, params, payload) => {
      // Example: Adjust the displayed bar size based on a payload value
      const size = payload.size || 30; // Default size
      const completeSize = Math.round(size * params.progress);
      const incompleteSize = size - completeSize;
      const bar = `${"█".repeat(completeSize)}${"░".repeat(incompleteSize)}`;

      return `${payload.name.padEnd(7, " ")} | ${bar} `;
    },
  },
  Presets.shades_classic
);

export function fakeFetch({ name, time }: { name: string; time: number }) {
  // Each call to fakeFetch creates a new progress bar in the MultiBar
  // Include the name in the progress bar by setting it as a custom payload
  const progressBar = multiBar.create(100, 0, { name, size: time / 50 });

  return new Promise((resolve) => {
    let progress = 0;
    const interval = (time - 100) / 100;

    const progressInterval = setInterval(() => {
      progress++;
      // Update the progress bar with the current progress and maintain the name in the payload
      progressBar.update(progress, { name });

      if (progress >= 100) {
        clearInterval(progressInterval);
        progressBar.stop();
        resolve(name);
      }
    }, interval);
  });
}
