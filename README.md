# Next.js 16.2 `transitionTypes` Demo

This app is a minimal App Router demo for the `transitionTypes` prop on `next/link`, with React’s `ViewTransition` mapping transition type strings to CSS classes.

Where to look:

- `app/page.tsx`: link to `/about` with `slide-left`
- `app/about/page.tsx`: link to `/` with `slide-right`
- `app/layout.tsx`: root `ViewTransition` and type-to-class mapping
- `app/globals.css`: `::view-transition-*` selectors and keyframes
- `next.config.ts`: `experimental.viewTransition`
