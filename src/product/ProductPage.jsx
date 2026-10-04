const cases = [
  {
    id: "teach-league",
    kicker: "Teach League",
    title: "Lesson planning that starts from what students should know",
    oneLine:
      "AI-assisted planning grounded in curriculum I've built and curated over 17 years, plus a gradebook that says what to do this week.",
    desktop: "/product/teachleague-gradebook-desktop.jpg",
    phone: "/product/teachleague-gradebook-phone.jpg",
    alt: "Teach League class overview: student counts, a weekly priority queue, eligibility, standards mastery, and plans and supports.",
    extra: {
      src: "/product/teachleague-planner-desktop.jpg",
      alt: "Teach League planner asking 'What do you want your students to know?' above a single input field.",
      caption:
        "The planner opens on one question instead of a menu of templates.",
    },
    problem:
      "Generic AI writes plausible lessons that ignore what actually shapes one: the standard, the students' accommodations, and the materials a teacher already trusts. And a gradebook answers \"what's the grade?\" when teachers need \"who needs what from me this week?\"",
    users: "Classroom teachers, plus coaches and staff coordinating IEP, 504 and EL supports.",
    decisions: [
      "Start from the learning goal (\"What do you want your students to know?\"), not a template menu.",
      "Ground generation in curated curriculum, standards and accommodations instead of open-ended prompting.",
      "Lead the gradebook with a short priority queue (\"10 students are ineligible this week\"), with rows and drill-downs below.",
      "One report contract feeds both the dashboard and its AI assistant, so they can never describe different numbers.",
    ],
    shipped:
      "Lesson planning with AI warm-ups, emergency lessons assignable through Google Classroom, and a gradebook report built on Credible's semantic data layer (shown with public-safe demo data).",
    result:
      "The gradebook report became my working example for Credible of an education use of their platform.",
    links: [
      { label: "teachleague.com", href: "https://teachleague.com/" },
      { label: "Gradebook demo", href: "https://teachleague.com/credible/gradebook-demo" },
    ],
  },
  {
    id: "leetrboo",
    kicker: "leetr.boo",
    title: "A live leaderboard for a school tradition",
    oneLine:
      "I started a Halloween costume contest at my school. This app runs it: judges score, the audience watches the standings live.",
    desktop: "/product/leetrboo-desktop.jpg",
    phone: "/product/leetrboo-phone.jpg",
    alt: "leetr.boo running a Halloween costume contest: the ghost mascot in the header, a contestant's music video on stage beside the live leaderboard of ranks and scores, and the join code at the top.",
    problem:
      "I tracked contest scores by hand for years, and the audience couldn't see who was winning. Nothing off the shelf did both judging and a live, projectable leaderboard.",
    users: "Student contestants, the judges at the table, and a room of spectators watching a projector.",
    decisions: [
      "Participants join a competition with a short code instead of an account, because nobody signs up for anything at a school event.",
      "Each contestant's chosen music video plays inside the page while they're on stage, so the MC never switches windows.",
      "Scores save to the database as they're entered, and removing a contestant asks first, so one click can't wipe out the contest. (Ask me how I know.)",
    ],
    shipped:
      "A full-stack app (React, TypeScript, PostgreSQL on AWS) refined over two years and 160+ commits, and built to run karaoke contests too.",
    result: "It runs the contest, and I get to MC it instead of doing arithmetic.",
    links: [{ label: "leetr.boo", href: "https://leetr.boo/" }],
  },
];

const labs = [
  {
    id: "missing-voices",
    name: "Missing Voices",
    img: "/product/missingvoices-desktop.jpg",
    alt: "Missing Voices: a text analysis tool that checks whose voices a text includes, sidelines, or leaves out.",
    question: "Can AI help students notice whose perspectives a source leaves out, without doing the thinking for them?",
    built: "A text analysis tool for pasted text, links, PDFs and Word documents, part of the Teach League family.",
    happened: "In my AP CS Principles essay unit on AI bias, scores on \"uses a wide range of reputable sources\" rose an average of 34% from draft to revision. Two English colleagues adopted the protocol, and it was part of my CSTA Responsible AI Fellowship application.",
    status: "Live, used in class",
    href: "https://missingvoices.app/",
  },
  {
    id: "district-signal",
    name: "District Signal",
    img: "/product/districtsignal-desktop.jpg",
    alt: "District Signal: district student insights with ready-to-send outreach emails, for a fictional district.",
    question: "Can a semantic data model turn district data into a next step, not just a dashboard?",
    built: "A model on Credible (Malloy) over a fictional district: pick a factor, see who it affects, get an editable outreach email.",
    happened: "Shared with the Credible team; the patterns carried into Teach League's gradebook report.",
    status: "Demo, fictional data",
    href: "https://education-resources-outreach.web.app/",
  },
  {
    id: "memnon",
    name: "Memnon",
    img: "/product/memnon-home-desktop.jpg",
    alt: "Memnon landing page: 'A personal scaffold for teachers', with an illustrated banner.",
    question: "Can capturing a thought reduce a teacher's load instead of adding something else to review?",
    built: "Voice-first capture with saved results, suggested threads and quiet feedback, shipped through reviewed pull requests (115 tests).",
    happened: "One rule now guides it: after every capture, reduce load, never expand it. Feedback went from four labels to Useful / Not useful after a burden review.",
    status: "In production; design pass next",
    href: "https://memnon.app/",
  },
];

const practices = [
  {
    title: "Talk to users every day",
    body: "I teach computer science to about 80 students a quarter across six pathways. My users are in the room, and they tell me fast when something doesn't work.",
  },
  {
    title: "Make ideas experienced, not described",
    body: "I prototype in working code with AI agents (Claude Code, Codex), with a human review step before anything ships or reaches a student.",
  },
  {
    title: "Decide with evidence",
    body: "When many users fail the same way, I suspect the design first. I set the evidence bar for a decision before I collect it.",
  },
  {
    title: "Respect how schools work",
    body: "Schedules, credits, privacy law and the people accountable for approvals shape what a school can adopt. I design for them from the start.",
  },
];

function CaseStudy({ c, index }) {
  return (
    <article className="case" id={c.id} aria-labelledby={`${c.id}-title`}>
      <header className="case-head">
        <p className="kicker">
          <span className="case-num">0{index + 1}</span> {c.kicker}
        </p>
        <h2 id={`${c.id}-title`}>{c.title}</h2>
        <p className="one-line">{c.oneLine}</p>
      </header>

      <div className="shots">
        <figure className="shot shot-desktop">
          <img src={c.desktop} alt={c.alt} loading={index === 0 ? "eager" : "lazy"} />
        </figure>
        <figure className="shot shot-phone">
          <img src={c.phone} alt={`${c.kicker} on a phone`} loading="lazy" />
        </figure>
      </div>

      {c.extra && (
        <figure className="extra">
          <div className="shot">
            <img src={c.extra.src} alt={c.extra.alt} loading="lazy" />
          </div>
          <figcaption>{c.extra.caption}</figcaption>
        </figure>
      )}

      <div className="case-body">
        <section>
          <h3>The problem</h3>
          <p>{c.problem}</p>
          <h3>Who it's for</h3>
          <p>{c.users}</p>
        </section>
        <section>
          <h3>Design decisions</h3>
          <ul>
            {c.decisions.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3>What shipped</h3>
          <p>{c.shipped}</p>
          <h3>Result</h3>
          <p>{c.result}</p>
          <p className="case-links">
            {c.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                {l.label} ↗
              </a>
            ))}
          </p>
        </section>
      </div>
    </article>
  );
}

function LabCard({ l }) {
  return (
    <article className="lab" id={l.id} aria-labelledby={`${l.id}-name`}>
      <div className="lab-img">
        <img src={l.img} alt={l.alt} loading="lazy" />
      </div>
      <div className="lab-text">
        <div className="lab-top">
          <h3 id={`${l.id}-name`}>{l.name}</h3>
          <span className="lab-status">{l.status}</span>
        </div>
        <dl>
          <dt>Question</dt>
          <dd>{l.question}</dd>
          <dt>What I built</dt>
          <dd>{l.built}</dd>
          <dt>What happened</dt>
          <dd>{l.happened}</dd>
        </dl>
        <a href={l.href} target="_blank" rel="noreferrer" className="lab-link">
          Open {l.name} ↗
        </a>
      </div>
    </article>
  );
}

export default function ProductPage() {
  return (
    <div className="page">
      <nav className="top" aria-label="Contact">
        <a className="brand" href="/">Eitan Fire</a>
        <div className="top-links">
          <a href="/Eitan-Fire-Resume.pdf">Résumé</a>
          <a href="https://www.linkedin.com/in/eitanfire/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:eitan@eitans.website">Email</a>
          <a href="/">All projects</a>
        </div>
      </nav>

      <header className="hero">
        <p className="kicker">Product work</p>
        <h1>I design and build products for schools, with AI.</h1>
        <p className="lede">
          Seventeen years of teaching. I find the problem with the people who have it, prototype in working
          code with AI agents, and keep going until the experience is good enough to put in front of a teacher
          or a student. CSTA Responsible AI Fellow.
        </p>
        <ul className="jump" aria-label="Sections">
          {cases.map((c, i) => (
            <li key={c.id}>
              <a href={`#${c.id}`}>
                <span className="case-num">0{i + 1}</span> {c.kicker}
              </a>
            </li>
          ))}
          <li>
            <a href="#labs">
              <span className="case-num">03</span> Labs
            </a>
          </li>
        </ul>
      </header>

      <main>
        {cases.map((c, i) => (
          <CaseStudy key={c.id} c={c} index={i} />
        ))}

        <section className="labs" id="labs" aria-labelledby="labs-title">
          <p className="kicker">
            <span className="case-num">03</span> Labs
          </p>
          <h2 id="labs-title">Experiments</h2>
          <p className="one-line labs-intro">
            Smaller bets, each built to answer one question, and shipped far enough to learn from real use.
          </p>
          <div className="lab-list">
            {labs.map((l) => (
              <LabCard key={l.id} l={l} />
            ))}
          </div>
        </section>

        <section className="practices" aria-labelledby="practices-title">
          <h2 id="practices-title">How I work</h2>
          <div className="practice-grid">
            {practices.map((p) => (
              <div className="practice" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="foot">
        <p>
          Let's talk: <a href="mailto:eitan@eitans.website">eitan@eitans.website</a> ·{" "}
          <a href="https://www.linkedin.com/in/eitanfire/" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}
