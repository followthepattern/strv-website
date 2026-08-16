import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(1.1rem, 3.2vw, 3.25rem)",
        gap: "2.5rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--t-mono)",
          textTransform: "uppercase",
          letterSpacing: "0.22em",
          color: "var(--steel)",
          margin: 0,
        }}
      >
        STRV // 404
      </p>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontVariationSettings: '"wdth" 125, "wght" 800',
          fontSize: "var(--t-large)",
          textTransform: "uppercase",
          letterSpacing: "-0.04em",
          lineHeight: 0.86,
          margin: 0,
        }}
      >
        Nothing here.
      </h1>

      <Link
        href="/"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--t-mono)",
          textTransform: "uppercase",
          letterSpacing: "0.22em",
          color: "var(--bone)",
        }}
      >
        Back to STRV.AI
      </Link>
    </main>
  );
}
