export default function ReactArticleDemo() {
  return (
    <article className="space-y-8 text-[0.95rem] leading-relaxed text-foreground">
      <header className="space-y-3 border-b border-border pb-8">
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Thinking in components: why teams still reach for React
        </h1>
        <p className="text-sm text-muted-foreground">
          <time dateTime="2026-03-18">March 18, 2026</time>
          <span className="mx-2 text-border">·</span>
          <span>Elena Park</span>
          <span className="mx-2 text-border">·</span>
          <span>8 min read</span>
        </p>
      </header>

      <p className="text-lg text-muted-foreground">
        React did not invent components, but it made them the default mental model for
        frontend work. A decade later, that idea still shapes how products are split,
        tested, and handed between design and engineering.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">
          UI as a tree of decisions
        </h2>
        <p>
          Every screen is a set of forks: loading or ready, empty or populated, signed in
          or anonymous. React encourages you to encode those branches as small,
          declarative trees. The payoff is not elegance for its own sake—it is fewer
          places where state can disagree with what is on screen.
        </p>
        <p>
          Hooks refined that story by colocating behavior with the markup that depends
          on it. When a reviewer sees{' '}
          <code className="rounded-md bg-muted px-1.5 py-0.5 text-[0.85em] font-mono text-foreground">
            useEffect
          </code>{' '}
          or{' '}
          <code className="rounded-md bg-muted px-1.5 py-0.5 text-[0.85em] font-mono text-foreground">
            useMemo
          </code>
          , they know where to look for side effects or expensive work without spelunking
          through a bespoke framework.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">
          Composition beats configuration
        </h2>
        <p>
          Large design systems survive when primitives snap together predictably. In
          React, that usually means boring props—size, variant, disabled—and children for
          the unusual cases. Teams trade YAML soup for components that read like the
          product copy around them.
        </p>
        <ul className="list-inside list-disc space-y-2 pl-1 text-muted-foreground marker:text-foreground">
          <li>
            Prefer a few flexible building blocks over dozens of one-off wrappers.
          </li>
          <li>
            Keep data-fetching at the edges; let leaf components stay easy to snapshot
            test.
          </li>
          <li>
            Document the failure modes: what renders while data is stale, and what the
            user can retry.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">What actually changed</h2>
        <p>
          Server components, concurrent rendering, and stricter defaults from the core
          team nudged React away from &quot;client-only SPA by reflex.&quot; The
          component model stayed; the placement of work moved. That continuity matters
          for teams sitting on years of design tokens, routes, and institutional
          knowledge—migration tends to be incremental rather than a rewrite.
        </p>
        <blockquote className="border-l-2 border-primary/50 pl-5 italic text-muted-foreground">
          If the JSX reads like the feature brief, you have probably chosen the right
          seams.
        </blockquote>
      </section>

      <footer className="border-t border-border pt-8 text-sm text-muted-foreground">
        <p>
          React remains a bet on shared vocabulary: props down, events up, and enough
          discipline to keep effects honest. For many product teams, that is still the
          shortest path to a UI everyone can reason about.
        </p>
      </footer>
    </article>
  );
}
