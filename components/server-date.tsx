export async function ServerDate() {
  return <div>{new Date().toISOString()}</div>;
}
