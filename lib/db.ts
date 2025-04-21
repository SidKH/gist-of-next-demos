import { neon } from "@neondatabase/serverless";

export async function getDataSydney() {
  const sql = neon(
    process.env.DATABASE_URL_SYDNEY as string
  );
  const data = await sql`SELECT * FROM entries;`;
  return data[0].message;
}

export async function getDataWashington() {
  const sql = neon(
    process.env.DATABASE_URL_WASHINGTON as string
  );
  const data = await sql`SELECT * FROM entries;`;
  return data[0].message;
}

export async function getDataLondon() {
  const sql = neon(
    process.env.DATABASE_URL_LONDON as string
  );
  const data = await sql`SELECT * FROM entries;`;
  return data[0].message;
}
