# Next.js 16.2 `transitionTypes` Demo

This app is a minimal App Router demo for the new `transitionTypes` prop on `next/link`.

What it shows:

- `/` to `/about` uses `transitionTypes={["zoom"]}`
- `/about` to `/` uses `transitionTypes={["fade"]}`
- the root `ViewTransition` boundary maps those types to CSS classes
- `app/globals.css` defines the actual view-transition animations

Where to look:

- `app/page.tsx`: outbound link using `zoom`
- `app/about/page.tsx`: return link using `fade`
- `app/layout.tsx`: root `ViewTransition` boundary and type-to-class mapping
- `app/globals.css`: `::view-transition-*` selectors and keyframes
