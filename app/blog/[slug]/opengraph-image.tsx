import { ImageResponse } from "next/og";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          color: "#fff",
          fontSize: 48,
          fontWeight: "bold",
        }}
      >
        <h1>Blog Post - {slug}</h1>
      </div>
    )
  );
}
