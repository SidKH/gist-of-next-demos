import { Show } from "@/lib/definitions";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { id: string } }) {
  const show: Show = await fetch(
    `http://api.tvmaze.com/shows/${params.id}`
  ).then((res) => res.json());

  const permanentMarker = fetch(
    new URL("./PermanentMarker-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 48,
          justifyContent: "center",
        }}
      >
        <img
          className="shrink-0 rounded-lg shadow-lg"
          width={300}
          height={420}
          src={show.image.medium}
          alt={show.name}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              fontSize: 64,
            }}
          >
            ACME co.
          </h2>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Permanent Marker",
          data: await permanentMarker,
        },
      ],
    }
  );
}
