import { useState } from "react";
import "../product/product.css";
import "./home.css";

const projects = [
  {
    id: "leetrboo",
    title: "leetr.boo",
    kind: "Live leaderboard for school events",
    img: "/product/leetrboo-desktop.jpg",
    alt: "leetr.boo running a Halloween costume contest: a contestant's music video on stage beside the live leaderboard.",
    summary:
      "I started a Halloween costume contest at my school and tracked the scores by hand for years. leetr.boo runs it now: contestants join with a code, their music video plays on stage, and the audience watches the standings live.",
    tech: ["React", "TypeScript", "PostgreSQL", "AWS (SST)", "YouTube embeds"],
    links: [
      { label: "leetr.boo", href: "https://leetr.boo/" },
      { label: "GitHub", href: "https://github.com/eitanfire/leetrboo" },
    ],
    caseStudy: "/product#leetrboo",
  },
  {
    id: "memnon",
    title: "Memnon",
    kind: "Voice-first capture for teachers",
    img: "/product/memnon-home-desktop.jpg",
    alt: "Memnon landing page: 'A personal scaffold for teachers', with an illustrated banner.",
    summary:
      "Capture a thought by voice and Memnon saves it, suggests threads and otherwise stays quiet. One rule guides it: after every capture, reduce a teacher's load, never expand it.",
    status: "In production",
    links: [{ label: "memnon.app", href: "https://memnon.app/" }],
    caseStudy: "/product#memnon",
  },
  {
    id: "teach-league",
    title: "Teach League",
    kind: "AI lesson planning for teachers",
    img: "/home/teachleague.jpg",
    alt: "Teach League planner asking 'What do you want your students to know?' with three example learning goals.",
    summary:
      "Planning starts from one question: what do you want your students to know? Generation is grounded in curriculum I've curated over 17 years, and emergency lessons assign straight to Google Classroom.",
    tech: ["React", "Node.js", "Firestore", "Gemini API", "Google Classroom API"],
    links: [
      { label: "teachleague.com", href: "https://teachleague.com/" },
      { label: "GitHub", href: "https://github.com/eitanfire/legendary-quest" },
    ],
    caseStudy: "/product#teach-league",
  },
  {
    id: "missing-voices",
    title: "Missing Voices",
    kind: "Text analysis for missing perspectives",
    img: "/product/missingvoices-desktop.jpg",
    alt: "Missing Voices: a text analysis tool that checks whose voices a text includes, sidelines, or leaves out.",
    summary:
      "Shows students whose voices their research includes, sidelines or leaves out, without doing the thinking for them. In my AP CS Principles essay unit, source-range scores rose 34% from draft to revision.",
    status: "Live, used in class",
    links: [{ label: "missingvoices.app", href: "https://missingvoices.app/" }],
    caseStudy: "/product#missing-voices",
  },
  {
    id: "district-signal",
    title: "District Signal",
    kind: "From district data to a next step",
    img: "/product/districtsignal-desktop.jpg",
    alt: "District Signal: district student insights with ready-to-send outreach emails, for a fictional district.",
    summary:
      "A semantic model on Credible over a fictional district: pick a factor, see which students it affects, and get an editable outreach email instead of another dashboard.",
    status: "Demo, fictional data",
    links: [{ label: "Open the demo", href: "https://education-resources-outreach.web.app/" }],
    caseStudy: "/product#district-signal",
  },
  {
    id: "mishpokhe",
    more: true,
    title: "Mishpokhe Geshikhte",
    kind: "Family-history archive",
    img: "/home/mishpokhe.jpg",
    alt: "Mishpokhe Geshikhte home page: Wladek \"Wolf\" Karmiol's name over a 1940 group photograph from the Lodz ghetto.",
    summary:
      "A browsable collection of the documents, letters and manuscripts of Wladek \"Wolf\" Karmiol, a Yiddish storyteller and survivor of the Lodz ghetto, built for readability and respectful storytelling.",
    tech: ["React", "JavaScript", "Firestore"],
    links: [
      { label: "Visit the archive", href: "https://mishpokhe-geshikhte.web.app" },
      { label: "GitHub", href: "https://github.com/eitanfire/mishpokhe-geshikhte" },
    ],
  },
  {
    id: "body-therapy-arts",
    more: true,
    title: "Body Therapy Arts",
    kind: "Website for a holistic health practice",
    img: "/home/body-therapy-arts.jpg",
    alt: "Body Therapy Arts home page with a beach banner and cards for The Space and Services.",
    summary:
      "A responsive site for a practice that has served Encinitas, CA for over 30 years, with an integrated map and a CI/CD pipeline that keeps updates simple.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Google Maps API"],
    links: [
      { label: "bodytherapyarts.com", href: "https://bodytherapyarts.com/" },
      { label: "GitHub", href: "https://github.com/eitanfire/body-therapy-arts" },
    ],
  },
];


function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children} ↗
    </a>
  );
}

export default function HomePage() {
  const [showMore, setShowMore] = useState(false);
  const visible = projects.filter((p) => showMore || !p.more);
  const hiddenCount = projects.length - visible.length;

  return (
    <div className="page">
      <nav className="top" aria-label="Site">
        <a className="brand" href="/">
          Eitan Fire
        </a>
        <div className="top-links">
          <a href="/product">Product work</a>
          <a href="/Eitan-Fire-Resume.pdf">Résumé</a>
          <a href="https://www.linkedin.com/in/eitanfire/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:eitan@eitans.website">Email</a>
        </div>
      </nav>

      <header className="hero">
        <p className="kicker">All projects</p>
        <h1>Things I&apos;ve built, from classroom tools to client sites.</h1>
        <p className="lede">
          I teach computer science and build full-stack web apps. Seventeen years in classrooms
          means most of what&apos;s here started with a problem in my own school.
        </p>
        <a className="callout" href="/product">
          <span className="callout-label">Product case studies</span>
          <span className="callout-text">
            The problem, the decisions and the results for Teach League and leetr.boo, plus
            the experiments behind Memnon, Missing Voices and District Signal.
          </span>
          <span className="callout-arrow" aria-hidden="true">
            →
          </span>
        </a>
      </header>

      <section className="project-grid" aria-label="Projects">
        {visible.map((p) => (
          <article className="project-card" id={p.id} key={p.id}>
            <a
              className="project-img"
              href={p.links[0].href}
              target="_blank"
              rel="noreferrer"
              tabIndex={-1}
              aria-hidden="true"
            >
              <img src={p.img} alt="" loading="lazy" />
            </a>
            <div className="project-body">
              <p className="project-kind">{p.kind}</p>
              <h2>{p.title}</h2>
              <p className="project-summary">{p.summary}</p>
              {p.status && <p className="project-status">{p.status}</p>}
              {p.tech && (
                <ul className="tech" aria-label="Built with">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
              <div className="project-links">
                {p.links.map((l) => (
                  <ExternalLink key={l.href} href={l.href}>
                    {l.label}
                  </ExternalLink>
                ))}
                {p.caseStudy && (
                  <a className="case-link" href={p.caseStudy}>
                    Read the case study →
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      {hiddenCount > 0 && (
        <div className="show-more">
          <button type="button" onClick={() => setShowMore(true)}>
            Show {hiddenCount} more projects
          </button>
        </div>
      )}

      <footer className="foot">
        Let&apos;s talk: <a href="mailto:eitan@eitans.website">eitan@eitans.website</a> ·{" "}
        <a href="https://www.linkedin.com/in/eitanfire/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
