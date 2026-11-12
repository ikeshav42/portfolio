import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Keshav Sundararaman · Data Engineering & Analytics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 92, letterSpacing: -3, lineHeight: 1.05 }}>
          Keshav Sundararaman
        </div>
        <div style={{ fontSize: 40, color: "#a3a3a3", marginTop: 28 }}>
          MS CS at UT Arlington · Data Engineering &amp; Analytics
        </div>
        <div style={{ fontSize: 30, color: "#737373", marginTop: 64 }}>ikeshav42.dev</div>
      </div>
    ),
    size
  );
}
