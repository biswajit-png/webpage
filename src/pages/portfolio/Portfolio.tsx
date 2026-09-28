import "./portfolio.css";

const work = [
  {
    year: "2026",
    title: "Halide Type Foundry",
    client: "Halide",
    medium: "Identity, type specimen",
  },
  {
    year: "2025",
    title: "Grain — Grocery Co-op Rebrand",
    client: "Grain Cooperative",
    medium: "Identity, packaging",
  },
  {
    year: "2025",
    title: "Nightshift Radio",
    client: "Nightshift",
    medium: "Identity, motion",
  },
  {
    year: "2024",
    title: "Faultline Architecture",
    client: "Faultline Studio",
    medium: "Identity, signage",
  },
  {
    year: "2023",
    title: "Municipal Transit Wayfinding",
    client: "City of Arden",
    medium: "Signage system",
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="band">
        <h1 className="name">Noor Aslan</h1>
        <p className="tagline">
          Graphic design and art direction, working mostly in identity and
          signage, based in Chicago.
        </p>
        <nav className="nav-row">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <h2 className="section-head" id="work">
        Selected work
      </h2>
      <div className="work-list">
        {work.map((item) => (
          <a className="work-row" href="#" key={item.title}>
            <span className="year">{item.year}</span>
            <span className="title">{item.title}</span>
            <span className="client">{item.client}</span>
            <span className="medium">{item.medium}</span>
          </a>
        ))}
      </div>

      <div className="about" id="about">
        <p>
          I run a one-person studio that takes on a small number of identity
          projects a year, usually for people building something they plan
          to keep running for a long time.
        </p>
        <p>
          Before that I spent six years as a designer at a signage
          fabricator, which is where I learned to design things that have
          to survive contact with a construction site.
        </p>
      </div>

      <div className="contact" id="contact">
        <a href="mailto:hello@noor-aslan.studio">
          hello@noor-aslan.studio
        </a>
        <div className="meta">
          <a href="#">Instagram</a>
          <a href="#">Are.na</a>
          <a href="#">CV</a>
        </div>
      </div>
    </div>
  );
}
