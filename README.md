# Next.js 16.2 `transitionTypes` Demo

This app is a minimal App Router demo for the `transitionTypes` prop on `next/link`, with React’s `ViewTransition` mapping transition type strings to CSS classes.

Where to look:

[next.config.ts](./next.config.ts)

```
experimental: { viewTransition: true }
```

[app/layout.tsx](./app/layout.tsx)

```
<ViewTransition
  default={{
    default: "none",
    fade: "fade",
    "slide-left": "slide-left",
    "slide-right": "slide-right",
  }}
>
  {children}
</ViewTransition>
```

[app/page.tsx](./app/page.tsx)

```
<Link href="/about" transitionTypes={["slide-left"]} />
```

[app/about/page.tsx](./app/about/page.tsx)

```
<Link href="/" transitionTypes={["slide-right"]} />
```

[app/globals.css](./app/globals.css)

```
::view-transition-* { ... }  /* + keyframes */
```
