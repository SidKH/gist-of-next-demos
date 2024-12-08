import { marked } from "marked";

export function MyComponent() {
  const markdown = `
# Cient Component

- Doesn't have direct access to the server 
- Ships javascript to the client and hydrates
`;

  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    />
  );
}
