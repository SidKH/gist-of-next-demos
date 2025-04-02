export default function TheAnswer() {
  // Secret business logic that should
  // not be exposed to the client
  const theAnswer = 10 * 5 - 4 * 2;

  return <p>{theAnswer}</p>;
}
