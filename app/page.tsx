import { Container, RefreshButton } from "./page.client";

export default function Home() {
  return (
    <Container>
      Server time: {new Date().toLocaleString()}
      <RefreshButton href="/">Refresh</RefreshButton>
    </Container>
  );
}
