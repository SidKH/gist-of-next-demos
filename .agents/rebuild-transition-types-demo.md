# transitionTypes in Next.js 16.2

---

`next.config.ts`  -  enable Next and React view-transition integration.

https://nextjs.org/docs/app/api-reference/config/next-config-js/viewTransition

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
```

---

`app/layout.tsx`  -  wrap `children` in `ViewTransition`; `default` object maps transition **type strings** to **CSS class names** (`default: "none"` = only named types animate).

https://react.dev/reference/react/ViewTransition#view-transition-class · https://react.dev/reference/react/addTransitionType

```tsx
import { ViewTransition } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-dvh">
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
      </body>
    </html>
  );
}
```

---

`app/globals.css`  -  `::view-transition-*(.class)` rules + keyframes (classes must match `ViewTransition` map values: `fade`, `slide-left`, `slide-right`).

https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using

```css
::view-transition-group(.fade),
::view-transition-group(.slide-left),
::view-transition-group(.slide-right) {
  animation-duration: 420ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

::view-transition-old(.fade) {
  animation-name: demo-fade-out;
}

::view-transition-new(.fade) {
  animation-name: demo-fade-in;
}

::view-transition-old(.slide-left) {
  animation-name: demo-slide-left-out;
}

::view-transition-new(.slide-left) {
  animation-name: demo-slide-left-in;
}

::view-transition-old(.slide-right) {
  animation-name: demo-slide-right-out;
}

::view-transition-new(.slide-right) {
  animation-name: demo-slide-right-in;
}

@keyframes demo-fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes demo-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes demo-slide-left-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100vw);
  }
}

@keyframes demo-slide-left-in {
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes demo-slide-right-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100vw);
  }
}

@keyframes demo-slide-right-in {
  from {
    transform: translateX(-100vw);
  }
  to {
    transform: translateX(0);
  }
}
```

---

`app/page.tsx`  -  `transitionTypes` array must use keys present in `ViewTransition` `default` object (`slide-left` here).

https://nextjs.org/docs/app/api-reference/components/link#transitiontypes

```tsx
import Link from "next/link";

// …
<Link href="/about" transitionTypes={["slide-left"]}>
  Open about page
</Link>
```

---

`app/about/page.tsx`  -  return navigation with a different type (`slide-right`).

https://nextjs.org/docs/app/api-reference/components/link#transitiontypes

```tsx
import Link from "next/link";

// …
<Link href="/" transitionTypes={["slide-right"]}>
  Return home
</Link>
```
