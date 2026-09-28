import "./fintech.css";

const exhibitRows = [
  { label: "Operating balance", value: "$84,209.11", note: "" },
  { label: "Runway, current pace", value: "11.4 mo", note: "" },
  { label: "Outstanding invoices", value: "$12,650.00", note: "+3 up" },
  { label: "Last reconciliation", value: "6 min ago", note: "" },
];

const ledgerLines = [
  {
    num: "01",
    title: "One balance, read plainly",
    body: "Every account you hold — checking, a payments processor, a line of credit — collapses into a single figure that updates as the day moves, not once a month when the statement arrives.",
  },
  {
    num: "02",
    title: "Runway you can defend",
    body: "Ledger reads your last ninety days of movement and states, in months, how long you can operate at the current pace. The number changes when your habits do, not on a fixed schedule.",
  },
  {
    num: "03",
    title: "A record built for scrutiny",
    body: "Every transaction carries its source and its reasoning. When your accountant or a lender asks a question in March, the answer is already written down.",
  },
];

export default function Fintech() {
  return (
    <div className="fintech">
      <header className="masthead">
        <div className="wrap masthead-row">
          <div className="wordmark">
            Ledger<em>.</em>
          </div>
          <nav>
            <a href="#product">Product</a>
            <a href="#pricing">Pricing</a>
            <a href="#notes">Notes</a>
            <a href="#login">Log in</a>
          </nav>
        </div>
        <div className="wrap masthead-sub">
          <span>A record of operating capital</span>
          <span>Edition 004 — Autumn</span>
        </div>
      </header>

      <section className="wrap hero">
        <div>
          <h1>
            Money, <i>written down</i> — not estimated.
          </h1>
          <p>
            Ledger closes your books every day instead of every quarter.
            Independent businesses use it to see exactly what they can
            spend, owe, and afford, stated in plain figures rather than
            projections.
          </p>
          <div className="cta-row">
            <button className="cta">Open an account</button>
            <span className="cta-note">No card needed to look around.</span>
          </div>
        </div>

        <div className="exhibit">
          <p className="exhibit-label">Today's position — Lighthouse Coffee Co.</p>
          {exhibitRows.map((row) => (
            <div className="exhibit-row" key={row.label}>
              <span>{row.label}</span>
              <span className={row.note ? "up" : undefined}>
                {row.value}
                {row.note ? ` (${row.note})` : ""}
              </span>
            </div>
          ))}
          <div className="exhibit-total">
            <span>Cash you can move today</span>
            <strong>$71,559.11</strong>
          </div>
        </div>
      </section>

      <section className="wrap ledger-section" id="product">
        <p className="kicker">
          Three things change once your books close daily instead of
          monthly.
        </p>
        <div className="ledger-table">
          {ledgerLines.map((line) => (
            <div className="ledger-line" key={line.num}>
              <span className="num">{line.num}</span>
              <h3>{line.title}</h3>
              <p>{line.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap pullquote-section" id="notes">
        <p className="pullquote">
          "I stopped guessing what I could afford to pay myself. The number
          is just there, and it's never a surprise."
        </p>
        <p className="pullquote-attr">
          Priya Nair, Owner — Lighthouse Coffee Co., three years on Ledger
        </p>
      </section>

      <footer className="wrap">
        <span>Ledger Financial Technologies</span>
        <span>Statements available on request</span>
      </footer>
    </div>
  );
}
