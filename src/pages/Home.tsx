import { Link } from "react-router-dom";

const items = [
  {
    href: "/fintech",
    title: "Ledger",
    kind: "Fintech landing page",
    note: "Dark, editorial",
  },
  {
    href: "/health",
    title: "Meridian",
    kind: "Health dashboard",
    note: "Organic, warm",
  },
  {
    href: "/portfolio",
    title: "Studio work",
    kind: "Portfolio site",
    note: "Brutalist, typographic",
  },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff",
        color: "#111",
        fontFamily:
          "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.5rem",
        padding: "2rem",
      }}
    >
      <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
        Three design briefs, three visual systems
      </p>
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "min(420px, 100%)",
        }}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              textDecoration: "none",
              color: "#111",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem 1.25rem",
            }}
          >
            <span>
              <strong style={{ fontSize: "1.05rem" }}>{item.title}</strong>
              <br />
              <span style={{ fontSize: "0.85rem", color: "#777" }}>
                {item.kind}
              </span>
            </span>
            <span style={{ fontSize: "0.8rem", color: "#999" }}>
              {item.note}
            </span>
          </Link>
        ))}
      </nav>
    </main>
  );
}
