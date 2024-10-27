export async function getData() {
  const res = await fetch(`https://myapi.com?api_key=mySecretApiKey`);
  return res.json();
}
